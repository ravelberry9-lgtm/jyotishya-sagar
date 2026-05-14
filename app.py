"""
జ్యోతిష్య సాగర్ — Telugu Vedic Astrology App
Local:   python app.py  →  http://localhost:5000
Railway: gunicorn binds to 0.0.0.0:$PORT (see Dockerfile)
"""

from flask import Flask, send_from_directory, abort, Response, jsonify, request
import json
import os
import sqlite3
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(ROOT, 'bphs', 'astrology.db')

app = Flask(__name__, static_folder=None)
app.secret_key = os.environ.get('SECRET_KEY', 'jyotishya_sagar_secret_2026')


# --- Database connection helper (per-request, auto-close) ---
def get_db():
    """Open a fresh read-only SQLite connection per request."""
    if not os.path.isfile(DB_PATH):
        abort(503, description='astrology.db not found. Run bphs/migrate.py to build it.')
    conn = sqlite3.connect(f'file:{DB_PATH}?mode=ro', uri=True)
    conn.row_factory = sqlite3.Row
    return conn


def row_to_dict(row):
    if row is None:
        return None
    d = dict(row)
    # Auto-parse any column whose name ends with _json
    for k in list(d.keys()):
        if k.endswith('_json') and isinstance(d[k], str) and d[k]:
            try:
                d[k[:-5]] = json.loads(d[k])
                del d[k]
            except (ValueError, TypeError):
                pass
    return d


# --- Healthcheck (defined FIRST so route precedence is unambiguous) ---
@app.route('/healthz')
@app.route('/healthz/')
@app.route('/health')
def healthz():
    return Response('ok\n', mimetype='text/plain', status=200)


# ============================================================
# API endpoints — granthālaya library
# ============================================================

@app.route('/api/library')
def api_library():
    """Catalog of all texts (no chapter/verse content), plus categories + authority levels."""
    conn = get_db()
    try:
        cur = conn.cursor()
        texts = []
        for r in cur.execute("""
            SELECT id, category, category_order, title_te, title_en, author_te, author_en,
                   date_te, date_en, total_chapters, summary_te, summary_en,
                   manuscript_te, manuscript_en, recommend_for_te, recommend_for_en,
                   authority, color, color_dark, color_bg, icon, editions_json, extra_json
            FROM texts ORDER BY category_order, id
        """):
            texts.append(row_to_dict(r))
        # Verse counts per text
        counts = dict(cur.execute(
            "SELECT text_id, COUNT(*) FROM verses GROUP BY text_id"
        ).fetchall())
        ch_counts = dict(cur.execute(
            "SELECT text_id, COUNT(DISTINCT chapter_num) FROM verses GROUP BY text_id"
        ).fetchall())
        for t in texts:
            t['verse_count'] = counts.get(t['id'], 0)
            t['extracted_chapters'] = ch_counts.get(t['id'], 0)
        categories = [row_to_dict(r) for r in cur.execute(
            "SELECT * FROM categories ORDER BY display_order"
        )]
        # member_ids per category
        cat_members = {}
        for t in texts:
            cat_members.setdefault(t.get('category') or 'uncategorized', []).append(t['id'])
        for c in categories:
            c['member_ids'] = cat_members.get(c['id'], [])
        authority_levels = {r['id']: row_to_dict(r) for r in cur.execute(
            "SELECT * FROM authority_levels"
        )}
        return jsonify({
            'texts': texts,
            'categories': categories,
            'authority_levels': authority_levels,
            'meta': {
                'library_title_te': 'జ్యోతిష్య గ్రంథాలయము',
                'library_title_en': 'Jyotiṣa Granthālaya',
                'tagline_te': 'పంచరత్నములు · BPHS · విశేష గ్రంథములు — ఏకత్ర పౌరదర్శక సూచిక',
                'tagline_en': 'Pañcaratna · BPHS · Specialized Texts — unified, transparent, citation-grade',
            }
        })
    finally:
        conn.close()


@app.route('/api/text/<text_id>')
def api_text(text_id):
    """Metadata + chapter list (without verses) for one text."""
    conn = get_db()
    try:
        cur = conn.cursor()
        text = cur.execute("SELECT * FROM texts WHERE id = ?", (text_id,)).fetchone()
        if not text:
            abort(404)
        chapters = [row_to_dict(r) for r in cur.execute(
            """SELECT c.chapter_num, c.title_te, c.title_en, c.summary_te,
                      COUNT(v.sloka_num) AS verse_count
               FROM chapters c
               LEFT JOIN verses v ON v.text_id = c.text_id AND v.chapter_num = c.chapter_num
               WHERE c.text_id = ?
               GROUP BY c.chapter_num
               ORDER BY c.chapter_num""",
            (text_id,)
        )]
        return jsonify({
            'text': row_to_dict(text),
            'chapters': chapters
        })
    finally:
        conn.close()


@app.route('/api/text/<text_id>/chapter/<int:chapter_num>')
def api_chapter(text_id, chapter_num):
    """All verses for one chapter."""
    conn = get_db()
    try:
        cur = conn.cursor()
        ch = cur.execute(
            "SELECT * FROM chapters WHERE text_id = ? AND chapter_num = ?",
            (text_id, chapter_num)
        ).fetchone()
        if not ch:
            abort(404)
        verses = [row_to_dict(r) for r in cur.execute(
            "SELECT * FROM verses WHERE text_id = ? AND chapter_num = ? ORDER BY sloka_num",
            (text_id, chapter_num)
        )]
        return jsonify({
            'chapter': row_to_dict(ch),
            'verses': verses
        })
    finally:
        conn.close()


@app.route('/api/search')
def api_search():
    """Full-text search across all verses + research notes."""
    q = (request.args.get('q') or '').strip()
    if not q or len(q) < 2:
        return jsonify({'q': q, 'verse_hits': [], 'research_hits': []})
    conn = get_db()
    try:
        cur = conn.cursor()
        # Sanitize FTS query — escape double quotes, wrap as phrase for partial-word safety
        safe = q.replace('"', '""')
        verse_hits = []
        try:
            for r in cur.execute(
                """SELECT v.text_id, v.chapter_num, v.sloka_num, v.sanskrit, v.telugu_bhava, v.english,
                          t.title_te AS text_title_te, c.title_te AS chapter_title_te
                   FROM verses_fts f
                   JOIN verses v ON v.text_id = f.text_id AND v.chapter_num = f.chapter_num AND v.sloka_num = f.sloka_num
                   JOIN texts t ON t.id = v.text_id
                   LEFT JOIN chapters c ON c.text_id = v.text_id AND c.chapter_num = v.chapter_num
                   WHERE verses_fts MATCH ?
                   ORDER BY rank LIMIT 200""",
                (f'"{safe}"',)
            ):
                verse_hits.append(row_to_dict(r))
        except sqlite3.OperationalError:
            verse_hits = []
        # Research notes — naïve LIKE since they're few and small
        like = f"%{q}%"
        research_hits = []
        for r in cur.execute(
            """SELECT id, title_te, title_en, icon, status, content_te_json, content_en_json
               FROM research_sections
               WHERE title_te LIKE ? OR title_en LIKE ? OR content_te_json LIKE ? OR content_en_json LIKE ?
               ORDER BY display_order LIMIT 50""",
            (like, like, like, like)
        ):
            research_hits.append(row_to_dict(r))
        return jsonify({
            'q': q,
            'verse_hits': verse_hits,
            'research_hits': research_hits,
            'total': len(verse_hits) + len(research_hits)
        })
    finally:
        conn.close()


@app.route('/api/research')
def api_research():
    """All research sections (catalog + content)."""
    conn = get_db()
    try:
        cur = conn.cursor()
        sections = [row_to_dict(r) for r in cur.execute(
            "SELECT * FROM research_sections ORDER BY display_order"
        )]
        return jsonify({'sections': sections})
    finally:
        conn.close()


@app.route('/api/research/<section_id>')
def api_research_section(section_id):
    """One research section."""
    conn = get_db()
    try:
        cur = conn.cursor()
        sec = cur.execute(
            "SELECT * FROM research_sections WHERE id = ?", (section_id,)
        ).fetchone()
        if not sec:
            abort(404)
        return jsonify(row_to_dict(sec))
    finally:
        conn.close()


# ============================================================
# Static file serving (kept for compatibility — the .js source
# files can still be fetched, and so can the rest of the app)
# ============================================================

@app.route('/')
def index():
    return send_from_directory(ROOT, 'app.html')


@app.route('/landing')
def landing():
    return send_from_directory(ROOT, 'index.html')


@app.route('/<path:filename>')
def serve_file(filename):
    safe_path = os.path.normpath(os.path.join(ROOT, filename))
    if not safe_path.startswith(ROOT):
        abort(403)
    if not os.path.isfile(safe_path):
        abort(404)
    rel_dir = os.path.dirname(filename) or '.'
    rel_name = os.path.basename(filename)
    return send_from_directory(os.path.join(ROOT, rel_dir), rel_name)


# --- Boot-time diagnostic (visible in Railway logs) ---
print(
    f'[jyotishya-sagar] app loaded · ROOT={ROOT} · '
    f'PORT={os.environ.get("PORT", "(unset, default 5000/8080)")} · '
    f'DB={"present" if os.path.isfile(DB_PATH) else "MISSING"}',
    file=sys.stderr,
    flush=True,
)


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
