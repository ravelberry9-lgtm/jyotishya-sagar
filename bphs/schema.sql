-- ============================================================
-- Jyotiṣya Sāgar — SQLite schema for the granthālaya library
-- All content (texts, chapters, verses, research notes) lives here.
-- Read-only from the app's perspective; updates happen via the
-- migrate.py script that re-ingests from .js source files.
-- ============================================================

PRAGMA foreign_keys = ON;
-- PRAGMA journal_mode disabled for cross-mount portability

-- ---------- Catalog metadata ----------
CREATE TABLE IF NOT EXISTS texts (
  id              TEXT PRIMARY KEY,
  category        TEXT,                  -- 'pancharatna' | 'bphs' | 'specialized'
  category_order  INTEGER DEFAULT 0,
  title_te        TEXT NOT NULL,
  title_en        TEXT,
  author_te       TEXT,
  author_en       TEXT,
  date_te         TEXT,
  date_en         TEXT,
  total_chapters  INTEGER,
  summary_te      TEXT,
  summary_en      TEXT,
  manuscript_te   TEXT,
  manuscript_en   TEXT,
  recommend_for_te TEXT,
  recommend_for_en TEXT,
  authority       TEXT,                  -- 'highest' | 'high' | 'disputed' etc
  color           TEXT,
  color_dark      TEXT,
  color_bg        TEXT,
  icon            TEXT,
  editions_json   TEXT,                  -- JSON array of editions
  extra_json      TEXT                   -- spillover for any other meta
);

CREATE TABLE IF NOT EXISTS categories (
  id              TEXT PRIMARY KEY,
  display_order   INTEGER DEFAULT 0,
  title_te        TEXT NOT NULL,
  title_en        TEXT,
  desc_te         TEXT,
  desc_en         TEXT
);

CREATE TABLE IF NOT EXISTS authority_levels (
  id              TEXT PRIMARY KEY,
  label_te        TEXT,
  label_en        TEXT,
  color           TEXT
);

-- ---------- Chapters ----------
CREATE TABLE IF NOT EXISTS chapters (
  text_id         TEXT NOT NULL,
  chapter_num     INTEGER NOT NULL,
  title_te        TEXT,
  title_en        TEXT,
  summary_te      TEXT,
  summary_en      TEXT,
  PRIMARY KEY (text_id, chapter_num),
  FOREIGN KEY (text_id) REFERENCES texts(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_chapters_text ON chapters(text_id);

-- ---------- Verses ----------
CREATE TABLE IF NOT EXISTS verses (
  text_id         TEXT NOT NULL,
  chapter_num     INTEGER NOT NULL,
  sloka_num       INTEGER NOT NULL,
  page            INTEGER,
  source_ed       TEXT,
  sanskrit        TEXT,
  telugu_bhava    TEXT,
  english         TEXT,
  tags_json       TEXT,                  -- JSON array of strings
  verified        TEXT DEFAULT 'auto',   -- auto | hardcopy | hardcopy-spotcheck | sanskrit-verbatim | user
  PRIMARY KEY (text_id, chapter_num, sloka_num),
  FOREIGN KEY (text_id, chapter_num) REFERENCES chapters(text_id, chapter_num) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_verses_text_ch ON verses(text_id, chapter_num);

-- ---------- Full-text search ----------
-- Virtual FTS5 table indexes sanskrit, telugu_bhava, english, and tags so
-- /api/search can do "MATCH" queries across the whole library.
CREATE VIRTUAL TABLE IF NOT EXISTS verses_fts USING fts5(
  text_id UNINDEXED,
  chapter_num UNINDEXED,
  sloka_num UNINDEXED,
  sanskrit,
  telugu_bhava,
  english,
  tags,
  tokenize='unicode61'
);

-- ---------- Research notes ----------
CREATE TABLE IF NOT EXISTS research_sections (
  id              TEXT PRIMARY KEY,
  display_order   INTEGER DEFAULT 0,
  title_te        TEXT,
  title_en        TEXT,
  icon            TEXT,
  status          TEXT,                  -- 'verified' | 'draft' etc
  content_te_json TEXT,                  -- JSON array of paragraphs
  content_en_json TEXT
);

CREATE INDEX IF NOT EXISTS idx_research_order ON research_sections(display_order);

-- ---------- Migration metadata ----------
CREATE TABLE IF NOT EXISTS migration_meta (
  key   TEXT PRIMARY KEY,
  value TEXT
);
