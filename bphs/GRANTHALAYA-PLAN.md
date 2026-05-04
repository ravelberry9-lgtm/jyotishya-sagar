# 📚 Jyotiṣa Granthālaya — Information Architecture Plan
**జ్యోతిష్య గ్రంథాలయ నిర్మాణ ప్రణాళిక**

> Working spec for promoting the BPHS reader into a multi-text scholarly library
> covering BPHS + Pañcaratna + specialized texts. Bilingual throughout.

---

## 1. Vision

The current `bphs/index.html` is a single-book reader. Once we add Bṛhat Jātaka,
Sārāvalī, Phaladīpikā, Sarvārtha Cintāmaṇi, Jātaka Pārijāta — and specialized
texts (Praśna Mārga, Tājika Nīlakaṇṭhī, Muhūrta Cintāmaṇi) — we will have **8+
classical jyotiṣa texts**. A single-book reader will not scale.

We need a **library** (గ్రంథాలయము): a place where multiple texts coexist, can be
browsed independently, and can be **cross-referenced** with each other.

**Three audiences, three modes:**

| Audience | Need | Mode |
|---|---|---|
| Family-mode user | One curated reading | "Wisdom of the Day" + Family quotes |
| Pandit / astrologer | Authoritative cross-reference | Compare same topic across texts |
| Student | Systematic reading | Browse one text chapter-by-chapter |

---

## 2. Audience personas (నాయికా-చిత్రణలు)

### Persona A — "Lakshmi gāru" (Family-mode parent, 50)
- Wants to know: *Will my daughter's marriage happen smoothly?*
- Doesn't care which text says it
- Needs: 2-3 verses, plain Telugu, gentle tone
- Citation matters only as reassurance ("ఇది శాస్త్ర గ్రంథములో ఉన్నది")

### Persona B — "Sastri gāru" (Astrologer, 45, professional)
- Wants to know: *What does each text say about Sun in the 1st house?*
- Wants side-by-side comparison
- Citation is gold: needs verse number, manuscript reference
- Will reject the app if citations are wrong

### Persona C — "Karthik" (Curious student, 25)
- Wants to know: *Where do I start learning?*
- Doesn't know which text is foundational
- Needs guided learning path: Bṛhat Jātaka first, then Sārāvalī, then BPHS
- Wants explanations not just verses

---

## 3. Information Architecture

```
                    JYOTIṢA GRANTHĀLAYA (library)
                    ═══════════════════════════════
                              │
    ┌─────────────────────────┼─────────────────────────┐
    │                         │                         │
  BROWSE BY TEXT         BROWSE BY TOPIC          RESEARCH NOTES
  (existing model)       (cross-text)              (current 9 sections)
    │                         │
    ├─ BPHS                   ├─ "Sun in 1st house"
    │   ├─ Ch 1               │    ├─ Bṛhat Jātaka 11.1
    │   ├─ Ch 2               │    ├─ Sārāvalī 27.5
    │   └─ ...                │    ├─ Phaladīpikā 6.1
    │                         │    └─ BPHS 22.1
    ├─ Bṛhat Jātaka           │
    ├─ Sārāvalī               ├─ "Marriage timing"
    ├─ Phaladīpikā            ├─ "Kuja Dosha"
    ├─ Sarvārtha Cintāmaṇi    └─ ... (~50 topics total)
    ├─ Jātaka Pārijāta
    ├─ Praśna Mārga
    ├─ Tājika Nīlakaṇṭhī
    └─ Muhūrta Cintāmaṇi
```

---

## 4. Page-by-page UX

### Page 1 — **Library landing (`bphs/index.html` redesigned)**

```
┌────────────────────────────────────────────────────────────┐
│  🕉  జ్యోతిష్య గ్రంథాలయము · Jyotiṣa Granthālaya        🔍  │
├────────────────────────────────────────────────────────────┤
│                                                              │
│  [📖 Browse by Text]  [🎯 Browse by Topic]  [📚 Research]   │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│  📜 PAÑCA-RATNA (Five Pillars)                              │
│                                                              │
│  ┌──────────────┬──────────────┬──────────────┐            │
│  │ 🥇 Br̥hat    │ 🥈 Sārāvalī  │ 🥈 Phala-   │            │
│  │   Jātaka     │              │   dīpikā    │            │
│  │ Varāhamihira │ Kalyāṇavarmā │ Mantreśvara │            │
│  │ ~550 CE      │ ~750 CE      │ ~1450 CE    │            │
│  │ 28 / 0 ch ⏳ │ 55 / 0 ch ⏳ │ 28 / 0 ch ⏳│            │
│  └──────────────┴──────────────┴──────────────┘            │
│                                                              │
│  ┌──────────────┬──────────────┐                            │
│  │ 🥈 Sarvārtha │ 🥈 Jātaka    │                            │
│  │  Cintāmaṇi   │   Pārijāta   │                            │
│  │ Veṅkaṭeśa    │ Vaidyanātha  │                            │
│  │ ~1500 CE     │ ~1550 CE     │                            │
│  │ 14 / 0 ch ⏳ │ 18 / 0 ch ⏳ │                            │
│  └──────────────┴──────────────┘                            │
│                                                              │
│  📖 BPHS (Modern Reconstruction)                            │
│  ┌──────────────────────────────┐                            │
│  │ ⚠️ BPHS                       │                            │
│  │ Modern Reconstruction         │                            │
│  │ 1946 / 1984 CE               │                            │
│  │ 97 / 4 ch (12 verses) ✓✓⏳⏳ │                            │
│  └──────────────────────────────┘                            │
│                                                              │
│  🎯 SPECIALIZED TEXTS                                       │
│  Praśna Mārga · Tājika Nīlakaṇṭhī · Muhūrta Cintāmaṇi      │
│                                                              │
└────────────────────────────────────────────────────────────┘
```

**Key design decisions:**

- **Cards over list** — visually scanable, shows status per text
- **Authority badges** — 🥇 highest (with ancient MS), 🥈 high, ⚠️ disputed, ❌ doubtful
- **Progress indicator** — "12 / 4001 verses · 4 / 97 chapters" so user sees what's extracted vs pending
- **Color coded by text** — each text gets its own accent color (consistent everywhere)
- **BPHS visually separated** — its modern reconstruction status is honest, not hidden

---

### Page 2 — **Single text reader** (current model, generalized)

```
┌──────────────────────────────────────────────────────────┐
│  ← Library    🥇 BR̥HAT JĀTAKA · బృహజ్జాతకము            │
│                                                            │
├─────────────────────┬────────────────────────────────────┤
│ Research Notes      │  Chapter 11                        │
│  · Why provenance   │  ────────────                       │
│  · Five Pillars     │  లగ్నాధ్యాయః · The Lagna Chapter   │
│  · ...              │                                    │
│                     │  ┌─ Verse 1 ────────────────────┐ │
│ Chapters            │  │ లగ్నేశే కర్మ-భావస్థే...      │ │
│  1. ఉపనయనాధ్యాయః   │  │ తాత్పర్యము: లగ్నాధిపతి      │ │
│  2. రాశి-ప్రభేదః   │  │ కర్మ భావములో ఉన్నచో...       │ │
│  3. ...             │  │ 📖 BJ Ch.11 śl.1 · ✓ verified  │ │
│  ► 11. లగ్నాధ్యాయః  │  │ 🔗 Compare in BPHS, Sārāvalī  │ │
│  12. ...            │  └────────────────────────────────┘ │
│                     │                                    │
│ Cross-references    │  ┌─ Verse 2 ────────────────────┐ │
│  · Topic: Lagna     │  │ ...                            │ │
│  · Topic: Career    │  └────────────────────────────────┘ │
└─────────────────────┴────────────────────────────────────┘
```

**New elements:**

- **Sticky header** with text name and back-to-library
- **Cross-reference button** on every verse: "🔗 Compare in BPHS, Sārāvalī" → opens topic view
- **Status badge per verse** (✓ verified / ⏳ auto-extracted / ⚠️ pending review)
- **Cross-references sidebar section** linking topics this chapter touches

---

### Page 3 — **Topic browser (NEW — the unique feature)**

```
┌──────────────────────────────────────────────────────────┐
│  🎯 Topic: SUN IN 1ST HOUSE · 1వ భావంలో సూర్యుడు         │
│                                                            │
│  4 verses across 4 texts                                  │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  🥇 BR̥HAT JĀTAKA · Ch.11 śl.1                            │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Sanskrit verse here...                             │  │
│  │ తాత్పర్యము: రాజలక్షణములు, నాయకత్వ గుణములు...      │  │
│  │ 📜 Cambridge MS Add.1707, 1399 CE · ✓ verified    │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  🥈 SĀRĀVALĪ · Ch.27 śl.5                                 │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Sanskrit verse here...                             │  │
│  │ తాత్పర్యము: తేజస్సు, గౌరవము, ఆరోగ్య కఠోరత...     │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  🥈 PHALADĪPIKĀ · Ch.6 śl.1                               │
│  ┌────────────────────────────────────────────────────┐  │
│  │ ...                                                │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  ⚠️ BPHS (Modern) · Ch.22 śl.1                           │
│  ┌────────────────────────────────────────────────────┐  │
│  │ ...                                                │  │
│  │ 📖 Modern reconstruction — see Five Pillars first  │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  🤝 SCHOLARLY CONSENSUS                                   │
│  All four texts agree: Sun in 1st bestows leadership,    │
│  fame, paternal blessing. BJ adds health caution. PD     │
│  adds sharp temperament.                                  │
└──────────────────────────────────────────────────────────┘
```

**This is the killer feature.** No commercial app does this. AstroSage just gives
one BPHS-derived sentence. We give the actual textual record across the 5 most
authoritative texts, ranked by manuscript provenance.

---

### Page 4 — **Research notes** (existing — minimal changes)

Already bilingual, already structured into 9 sections. Keep as-is. Just rename
sidebar to "📚 Research / పరిశోధన గమనికలు" since it's now one of three top-level
modes (alongside Browse-by-Text and Browse-by-Topic).

---

## 5. Data schema redesign

### Current (single-book)
```js
window.BPHS_VERSES = { meta: {...}, chapters: {1: {...}, 2: {...}} }
```

### Proposed (library)
```js
// granthas.js — top-level catalog
window.GRANTHAS = {
  "brihat-jataka":     { /* metadata + chapters */ },
  "saravali":          { /* ... */ },
  "phaladipika":       { /* ... */ },
  "sarvartha-cintamani": { /* ... */ },
  "jataka-parijata":   { /* ... */ },
  "bphs":              { /* existing data, migrated */ },
  "prasna-marga":      { /* ... */ },
  "tajika-nilakanthi": { /* ... */ },
  "muhurta-cintamani": { /* ... */ }
};

// Per-text shape
{
  meta: {
    id: "brihat-jataka",
    title_te: "బృహజ్జాతకము",
    title_en: "Br̥hat Jātaka",
    author_te: "వరాహమిహిరాచార్యులు",
    author_en: "Varāhamihira",
    date: "c. 550 CE",
    authority: "highest",       // → 🥇 badge
    color: "#1e7ec5",            // accent for cards/badges
    color_dark: "#0d4a85",
    total_chapters: 28,
    extracted_chapters: [11, 12],
    manuscript_te: "క్రీ.శ. 1399 నేపాల ప్రతి, కేంబ్రిడ్జ్ MS Add.1707",
    manuscript_en: "1399 CE Nepal MS, Cambridge MS Add.1707",
    summary_te: "...",
    summary_en: "..."
  },
  chapters: {
    11: { title_te, title_en, summary_te, verses: [...] }
  }
};

// Per-verse shape (with cross-reference TOPIC tags)
{
  sl: 1,
  page: 47,
  sanskrit: "...",
  telugu_bhava: "...",
  english: "...",
  topics: ["sun-in-1st", "raja-yoga", "leadership"],  // ← NEW
  family_friendly: true,         // ← NEW (curated for family mode)
  verified: "user"               // existing
}
```

### Topic index (separate, derived)
```js
// topics.js — auto-built from verse `topics` arrays
window.TOPIC_INDEX = {
  "sun-in-1st": {
    title_te: "1వ భావంలో సూర్యుడు",
    title_en: "Sun in 1st House",
    category: "graha-bhava",
    verses: [
      {grantha: "brihat-jataka", ch: 11, sl: 1},
      {grantha: "saravali", ch: 27, sl: 5},
      {grantha: "phaladipika", ch: 6, sl: 1},
      {grantha: "bphs", ch: 22, sl: 1}
    ],
    consensus_te: "నాలుగు గ్రంథములూ ఏకాభిప్రాయం: నాయకత్వ గుణములు...",
    consensus_en: "All four texts agree: leadership qualities..."
  }
};
```

---

## 6. Visual identity per text

Each text gets a consistent color throughout the app:

| Text | Color | Symbol | Authority |
|---|---|---|---|
| Br̥hat Jātaka | Deep blue (#1e7ec5) | 🥇 | Highest (1399 MS) |
| Sārāvalī | Forest green (#2e7d32) | 🥈 | High |
| Phaladīpikā | Royal purple (#7b1fa2) | 🥈 | High |
| Sarvārtha Cintāmaṇi | Teal (#00838f) | 🥈 | High |
| Jātaka Pārijāta | Wine red (#a02035) | 🥈 | High |
| BPHS | Saffron (current) | ⚠️ | Modern recension |
| Praśna Mārga | Indigo (#3f51b5) | 🎯 | Specialized |
| Tājika Nīlakaṇṭhī | Bronze (#a87a0e) | 🎯 | Specialized |
| Muhūrta Cintāmaṇi | Forest brown (#5d4037) | 🎯 | Specialized |

Color appears in: card on landing, sidebar accent stripe, verse-card border-left,
citation badge background.

---

## 7. Implementation phases

### Phase 1 — Infrastructure (1 session)
**Goal:** Refactor data layer without breaking existing UI.

- Rename `bphs-data.js` → `granthas.js`
- Wrap existing BPHS data inside `window.GRANTHAS["bphs"]`
- Backwards-compat shim: `window.BPHS_VERSES = window.GRANTHAS["bphs"]`
  so existing code keeps working
- Add `meta.color`, `meta.authority` to BPHS entry
- File ends working exactly as it does today, just structurally ready for siblings

### Phase 2 — Library landing (1 session)
**Goal:** Replace BPHS reader's landing with the multi-text card grid.

- Build text-picker landing page
- Each card: cover, author, date, status badges, "Read →" button
- Sidebar reorganized: top-level "🏛 Library / 🎯 Topics / 📚 Research"
- Existing BPHS chapter list moves under "Library → BPHS" path

### Phase 3 — Add Br̥hat Jātaka (2-3 sessions)
**Goal:** Prove the multi-text model with the most authentic text.

- Add `brihat-jataka` skeleton to `granthas.js` (28 chapters known)
- Source: V. Subrahmanya Sastri 1929 edition (free on archive.org)
- Extract chapters 1, 2, 11 first (intro + lagna + sun)
- Each verse tagged with `topics: ["sun-in-1st", ...]`

### Phase 4 — Topic browser (1 session)
**Goal:** Build the cross-reference view.

- Auto-generate `TOPIC_INDEX` from all verses' `topics` arrays
- Build topic-list view (browseable, searchable)
- Build topic-detail view (verses from N texts side-by-side)
- "Compare across texts" button on each verse

### Phase 5 — Add Sārāvalī, Phaladīpikā (2 sessions each)
- Same pattern as Phase 3
- After both done: every graha-bhāva placement has 3-4 sources

### Phase 6 — Specialized texts (1 session each)
- Praśna Mārga → wires into our app's "Praśna" expert button
- Tājika Nīlakaṇṭhī → wires into Varṣaphala panel
- Muhūrta Cintāmaṇi → wires into Muhūrta finder

### Phase 7 — Family mode curation (1 session)
- Mark verses with `family_friendly: true`
- Build a "Wisdom of the Day" module pulling from these
- Family-mode chart pages cite these in plain prose

### Phase 8 — Search across library (1 session)
- Global search across all 9 texts simultaneously
- Filter by text / topic / authority / verification status

---

## 8. What stays the same

- **Research Notes** stay where they are (9 bilingual sections)
- **App's main chart-rendering** untouched — existing `BPHS_RULES` keep working
- **Family mode** UI stays simple — library is Expert-mode-only feature
- **Existing 168 BPHS verses** keep their Sanskrit + Telugu bhāva, just gain
  `topics` tags going forward

---

## 9. Open design questions for you

1. **Naming.** Should the library be called:
   - "జ్యోతిష్య గ్రంథాలయము" (formal)
   - "జ్యోతిష్య పుస్తక సంగ్రహము" (more accessible)
   - "శాస్త్ర నిధి" (treasury)
   - Something else?

2. **Pañcaratna ordering.** On the landing page, should they be ordered by:
   - Antiquity (Br̥hat Jātaka first → Jātaka Pārijāta last)
   - Authority (highest manuscript provenance first)
   - User-popularity (whatever family-mode users open most)

3. **BPHS placement on landing.** Should BPHS be:
   - In a separate "Modern Reconstruction" section (current proposal — honest)
   - Mixed into the Pañcaratna grid (less honest, but keeps the existing user-recognition)
   - At the top with a big ⚠️ disclosure

4. **Topic taxonomy.** ~50 topics seems right for v1. Should they be:
   - Flat list (sun-in-1st, sun-in-2nd, ...)
   - Hierarchical (Grahas → Sun → 1st-house, 2nd-house, ...)
   - Tag-based (a verse can have multiple topics)

5. **Family mode deepening.** Do family-mode users see the library at all?
   - **Option A:** Hidden in family mode (library is expert-only feature)
   - **Option B:** Family sees curated verses only ("Wisdom of the Day" widget)
   - **Option C:** Family sees a simplified "Read" tab with just BJ Ch.1 + research-note-1

6. **Cross-reference depth.** When user clicks a verse's "🔗 Compare" button:
   - **Option A:** Opens a modal showing 3-4 parallel verses
   - **Option B:** Navigates to topic page (loses chapter context)
   - **Option C:** Inline expansion (verse card grows to show siblings)

---

## 10. Recommendation: where to start

**Build Phase 1 (Infrastructure refactor) first.** It's invisible to the user
but unblocks everything. After that, build Phase 2 (Library landing) — that's
when the user sees the new vision and can react. Then we add texts one at a time.

**Total time estimate:** 8-10 focused sessions to get all 5 Pañcaratna + 3
specialized texts populated with at least the foundational chapters extracted.

---

*This document is a living plan — refine as we discover what works.*
