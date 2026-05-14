#!/usr/bin/env python3
"""
Migrate granthālaya content from static .js source files into astrology.db (SQLite).

Pipeline:
  1. Use Node to load every grantha .js file and dump GRANTHAS + JYOTISHA_RESEARCH
     to a single JSON blob.
  2. Read that JSON and INSERT into the schema (schema.sql).

Re-run any time the .js files change. Safe to re-run (drops and recreates rows).
"""
import json
import os
import re
import sqlite3
import subprocess
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(HERE, "astrology.db")
SCHEMA_PATH = os.path.join(HERE, "schema.sql")


def dump_js_to_json():
    """Run Node to load all .js source files and dump GRANTHAS + research to JSON."""
    node_script = r"""
global.window = { GRANTHAS: null };
require(__dirname + '/granthas.js');
require(__dirname + '/bphs-data.js');
require(__dirname + '/brihat-jataka-data.js');
require(__dirname + '/saravali-data.js');
require(__dirname + '/phaladipika-data.js');
require(__dirname + '/sarvartha-cintamani-data.js');
require(__dirname + '/jataka-parijata-data.js');
require(__dirname + '/prasna-marga-data.js');
require(__dirname + '/tajika-nilakanthi-data.js');
require(__dirname + '/muhurta-cintamani-data.js');
require(__dirname + '/research-notes.js');
if (window.__linkBPHSToGranthas) window.__linkBPHSToGranthas();
const g = window.GRANTHAS;
const r = window.JYOTISHA_RESEARCH;
process.stdout.write(JSON.stringify({ granthas: g, research: r }));
"""
    # Write the helper script to the system temp dir so we don't need write
    # permissions in the project folder (matters on read-only mounts).
    sys_tmp = tempfile.gettempdir()
    with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False, dir=sys_tmp) as t:
        # __dirname inside Node points to the temp dir, so we use an absolute path
        rewritten = node_script.replace('__dirname', repr(HERE))
        t.write(rewritten)
        script_path = t.name
    try:
        result = subprocess.run(
            ['node', script_path],
            capture_output=True, text=True, cwd=HERE, check=False
        )
        if result.returncode != 0:
            print("Node dump failed:")
            print(result.stderr)
            sys.exit(1)
        data = json.loads(result.stdout)
        return data
    finally:
        try:
            os.unlink(script_path)
        except OSError:
            pass


def init_db(conn):
    """Drop existing tables, recreate from schema.sql."""
    cur = conn.cursor()
    cur.executescript("""
        DROP TABLE IF EXISTS verses_fts;
        DROP TABLE IF EXISTS verses;
        DROP TABLE IF EXISTS chapters;
        DROP TABLE IF EXISTS texts;
        DROP TABLE IF EXISTS categories;
        DROP TABLE IF EXISTS authority_levels;
        DROP TABLE IF EXISTS research_sections;
        DROP TABLE IF EXISTS migration_meta;
    """)
    with open(SCHEMA_PATH, 'r', encoding='utf-8') as f:
        cur.executescript(f.read())
    conn.commit()


def ingest(conn, data):
    cur = conn.cursor()
    g = data['granthas']
    r = data['research']

    # Categories
    cats = g.get('categories', {})
    for i, (cid, c) in enumerate(cats.items()):
        cur.execute(
            "INSERT OR REPLACE INTO categories (id, display_order, title_te, title_en, desc_te, desc_en) VALUES (?,?,?,?,?,?)",
            (cid, i, c.get('title_te'), c.get('title_en'), c.get('desc_te'), c.get('desc_en'))
        )

    # Authority levels
    al = g.get('authority_levels', {})
    for aid, a in al.items():
        cur.execute(
            "INSERT OR REPLACE INTO authority_levels (id, label_te, label_en, color) VALUES (?,?,?,?)",
            (aid, a.get('te'), a.get('en'), a.get('color'))
        )

    # Build category_order map for each text id
    cat_of = {}
    cat_order = {}
    for i, (cid, c) in enumerate(cats.items()):
        for tid in c.get('member_ids', []):
            cat_of[tid] = cid
            cat_order[tid] = i

    # Texts + chapters + verses
    for tid, t in g.get('texts', {}).items():
        m = t.get('meta', {})
        cur.execute(
            """INSERT OR REPLACE INTO texts
            (id, category, category_order, title_te, title_en, author_te, author_en,
             date_te, date_en, total_chapters, summary_te, summary_en,
             manuscript_te, manuscript_en, recommend_for_te, recommend_for_en,
             authority, color, color_dark, color_bg, icon, editions_json, extra_json)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)""",
            (
                tid,
                cat_of.get(tid),
                cat_order.get(tid, 99),
                m.get('title_te'),
                m.get('title_en'),
                m.get('author_te'),
                m.get('author_en'),
                m.get('date_te'),
                m.get('date'),
                m.get('total_chapters'),
                m.get('summary_te'),
                m.get('summary_en'),
                m.get('manuscript_te'),
                m.get('manuscript_en'),
                m.get('recommend_for_te'),
                m.get('recommend_for_en'),
                m.get('authority'),
                m.get('color'),
                m.get('color_dark'),
                m.get('color_bg'),
                m.get('icon'),
                json.dumps(m.get('editions_te') or m.get('editions') or [], ensure_ascii=False),
                json.dumps({k: v for k, v in m.items() if k not in {
                    'title_te','title_en','author_te','author_en','date_te','date','total_chapters',
                    'summary_te','summary_en','manuscript_te','manuscript_en','recommend_for_te',
                    'recommend_for_en','authority','color','color_dark','color_bg','icon',
                    'editions_te','editions'
                }}, ensure_ascii=False)
            )
        )

        for ch_num_str, ch in (t.get('chapters') or {}).items():
            try:
                ch_num = int(ch_num_str)
            except ValueError:
                continue
            cur.execute(
                """INSERT OR REPLACE INTO chapters
                (text_id, chapter_num, title_te, title_en, summary_te, summary_en)
                VALUES (?,?,?,?,?,?)""",
                (tid, ch_num, ch.get('title_te'), ch.get('title_en'),
                 ch.get('summary_te'), ch.get('summary_en'))
            )
            for v in (ch.get('verses') or []):
                page = v.get('page')
                # page may be None/null
                page_int = None
                try:
                    page_int = int(page) if page is not None and page != '' else None
                except (ValueError, TypeError):
                    page_int = None
                cur.execute(
                    """INSERT OR REPLACE INTO verses
                    (text_id, chapter_num, sloka_num, page, source_ed, sanskrit,
                     telugu_bhava, english, tags_json, verified)
                    VALUES (?,?,?,?,?,?,?,?,?,?)""",
                    (
                        tid, ch_num, v.get('sl'),
                        page_int,
                        v.get('source_ed'),
                        v.get('sanskrit'),
                        v.get('telugu_bhava'),
                        v.get('english'),
                        json.dumps(v.get('tags') or [], ensure_ascii=False),
                        v.get('verified') or 'auto'
                    )
                )

    # Research sections
    if r and 'sections' in r:
        for i, sec in enumerate(r['sections']):
            cur.execute(
                """INSERT OR REPLACE INTO research_sections
                (id, display_order, title_te, title_en, icon, status, content_te_json, content_en_json)
                VALUES (?,?,?,?,?,?,?,?)""",
                (
                    sec.get('id', f'sec_{i}'),
                    i,
                    sec.get('title_te'),
                    sec.get('title_en'),
                    sec.get('icon'),
                    sec.get('status'),
                    json.dumps(sec.get('content_te') or [], ensure_ascii=False),
                    json.dumps(sec.get('content_en') or [], ensure_ascii=False)
                )
            )

    conn.commit()


def build_fts(conn):
    """Populate the verses_fts virtual table for full-text search."""
    cur = conn.cursor()
    cur.execute("DELETE FROM verses_fts")
    cur.execute("""
        INSERT INTO verses_fts (text_id, chapter_num, sloka_num, sanskrit, telugu_bhava, english, tags)
        SELECT text_id, chapter_num, sloka_num,
               COALESCE(sanskrit, ''),
               COALESCE(telugu_bhava, ''),
               COALESCE(english, ''),
               COALESCE(tags_json, '')
        FROM verses
    """)
    conn.commit()


def main():
    print("[1/4] Dumping .js source files to JSON via Node...")
    data = dump_js_to_json()
    n_texts = len(data['granthas'].get('texts', {}))
    n_research = len((data.get('research') or {}).get('sections', []))
    print(f"      Loaded {n_texts} texts, {n_research} research sections")

    print("[2/4] Initializing SQLite database...")
    conn = sqlite3.connect(DB_PATH)
    init_db(conn)

    print("[3/4] Ingesting content...")
    ingest(conn, data)

    print("[4/4] Building full-text search index...")
    build_fts(conn)

    # Stats
    cur = conn.cursor()
    n_verses = cur.execute("SELECT COUNT(*) FROM verses").fetchone()[0]
    n_chapters = cur.execute("SELECT COUNT(*) FROM chapters").fetchone()[0]
    n_texts = cur.execute("SELECT COUNT(*) FROM texts").fetchone()[0]
    n_fts = cur.execute("SELECT COUNT(*) FROM verses_fts").fetchone()[0]
    cur.execute("INSERT OR REPLACE INTO migration_meta (key, value) VALUES (?, ?)",
                ("migrated_at", __import__('datetime').datetime.utcnow().isoformat()))
    cur.execute("INSERT OR REPLACE INTO migration_meta (key, value) VALUES (?, ?)",
                ("n_verses", str(n_verses)))
    conn.commit()
    conn.close()

    db_size = os.path.getsize(DB_PATH) / (1024 * 1024)
    print(f"\nDone. astrology.db = {db_size:.2f} MB")
    print(f"  texts:    {n_texts}")
    print(f"  chapters: {n_chapters}")
    print(f"  verses:   {n_verses}")
    print(f"  fts rows: {n_fts}")


if __name__ == "__main__":
    main()
