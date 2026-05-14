# Granthālaya backend — SQLite + Flask API

The granthālaya library used to load 9 static `.js` data files (~2 MB total) on
every page load. As of this migration it runs as a proper database-backed API
that lazy-loads chapters on demand.

## Data flow

```
┌────────────────────────────┐                    ┌────────────────────────┐
│ Source of truth (editable) │   migrate.py       │ Production runtime     │
│ ──────────────────────────  │  ──────────────►   │ ────────────────────── │
│   bphs/granthas.js         │   re-ingests       │   bphs/astrology.db    │
│   bphs/brihat-jataka-data.js                    │   (read-only SQLite)   │
│   bphs/saravali-data.js    │                    │                        │
│   bphs/phaladipika-data.js │                    │ ────────► /api/...     │
│   bphs/bphs-data.js        │                    │ Flask reads DB, serves │
│   ... (9 .js source files) │                    │ JSON to viewer         │
│   bphs/research-notes.js   │                    │                        │
└────────────────────────────┘                    └────────────────────────┘
```

The `.js` files remain the **source of truth** because they're easy to edit
by hand and version-control diff-friendly. The DB is generated from them.

## Files

| File | Role |
|---|---|
| `bphs/schema.sql` | SQLite schema (tables, indexes, FTS5 virtual table) |
| `bphs/migrate.py` | Re-ingest from `.js` files → `astrology.db` |
| `bphs/astrology.db` | The runtime database (4 MB) — checked into git |
| `bphs/index.html` | Granthālaya viewer — calls `/api/*` |
| `app.py` | Flask app: routes `/api/library`, `/api/text/<id>`, `/api/text/<id>/chapter/<n>`, `/api/search`, `/api/research` |

## Re-running the migration after editing `.js` files

```bash
cd <project root>
python3 bphs/migrate.py
# Commit the updated bphs/astrology.db along with your .js changes
git add bphs/astrology.db bphs/<edited-files>.js
git commit -m "Update content X"
git push
```

The migration drops and recreates all tables — it's idempotent. Takes ~2 seconds.

## API endpoints

| Endpoint | Returns |
|---|---|
| `GET /api/library` | Catalog: all texts (metadata only) + categories + authority levels + library-level meta |
| `GET /api/text/<id>` | Text metadata + chapter list (without verses) |
| `GET /api/text/<id>/chapter/<num>` | All verses for that chapter |
| `GET /api/search?q=...` | FTS5 search over all verses + LIKE search over research notes |
| `GET /api/research` | All research sections |
| `GET /api/research/<id>` | One research section |
| `GET /healthz` | Health check (returns `ok`) |

All responses are JSON. The granthālaya viewer caches them in-memory per
session, so navigating between already-viewed chapters is instant after
the first fetch.

## Schema

- **`texts`** — one row per grantha. Includes all metadata: title_te, title_en, author_te, author_en, summary_te, manuscript_te, recommend_for_te, authority, color, icon, total_chapters, editions_json (JSON array), extra_json (catch-all for legacy fields)
- **`chapters`** — one row per (text_id, chapter_num)
- **`verses`** — one row per (text_id, chapter_num, sloka_num). Tags as JSON array.
- **`verses_fts`** — FTS5 virtual table, full-text indexed: sanskrit + telugu_bhava + english + tags
- **`categories`** — Pañcaratna, Modern Reconstruction Texts, Specialized Texts
- **`authority_levels`** — ఉత్తమ ప్రామాణికత, ఉన్నత ప్రామాణికత, etc.
- **`research_sections`** — research notes with content arrays as JSON strings
- **`migration_meta`** — `migrated_at` timestamp, version markers

## Why SQLite (not PostgreSQL)

This is a read-mostly digital library. SQLite:
- Ships as a file in the repo — zero infra
- Reads are microseconds (in-process), no network roundtrip
- FTS5 gives us proper unicode_61 full-text search
- ~4 MB DB instead of ~2 MB of JS payload per pageview, but loaded **lazily** (only the chapter you're viewing)

When the app eventually grows multi-user features (bookmarks, custom verified
flags, contributions), migrate to PostgreSQL on Railway — same schema, one
evening's work, no Python code changes other than the connection string.
