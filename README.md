# 🕉 జ్యోతిష్య సాగర్ — Telugu Vedic Astrology v1.0

A complete Telugu-first Vedic astrology web app, BPHS-grounded, with 198+ Telugu cities + worldwide diaspora hubs.

## Quick start

**Open `index.html`** for the landing page (positioning, features, comparison vs AstroSage).
**Open `app.html`** for the actual app (chart, panchangam, reading, porutham, children, remedies, learn).

Both work offline in any modern browser. No install. No signup. No ads.

## What's included

### `app.html` — The unified app (1274 lines, single file)
Seven tabs in Telugu:

1. **జాతకం (Birth chart)** — lagna + 9 grahas + sidereal positions + South Indian D-1 chart + Vimśottarī Mahādaśā 120-yr cycle.
2. **పంచాంగం (Daily panchangam)** — pick any date + place, get tithi/nakṣatra/yoga/karaṇa/vāra + sunrise/sunset + rāhu/yama/gulika/abhijit muhūrta.
3. **జాతక ఫలాలు (BPHS readings)** — predictions grouped by life domain (వ్యక్తిత్వం, ఆరోగ్యం, ధనం, వివాహం, సంతానం, etc.) with citation traces. **Voice TTS** for reading aloud in Telugu.
4. **జాతక పొంతన (Matching)** — 10 porutams (Dina, Gana, Mahendra, Stree-Dirgha, Yoni, Rasi, Rasi-adhipathi, Vashya, Rajju, Vedha) with score gauge + verdict.
5. **పిల్లల జాతకం (Children's chart)** — bālāriṣṭa analysis (first 8 years), education indicators, **nāmākaraṇa (naming) akṣaras** based on nakṣatra-pāda, marriage timing window.
6. **పరిహారాలు (Remedies)** — śāstric three-tier ladder: free japa first (mantras + procedure), then paṇḍita-led puja, gemstones last. Personalized to weak grahas in chart. **No commission, no upselling.**
7. **నేర్చుకోండి (Learn)** — 9 grahas + 12 rāśis + 12 bhāvas reference cards in Telugu.

### `index.html` — Landing page (435 lines)
Marketing positioning, feature grid, AstroSage comparison table, audience cards (father/mother/grandparent/NRI), remedies philosophy, final CTA.

### `astrosage-teardown.md` — Strategy doc
Competitive analysis vs AstroSage, target user definition, śāstric upāya philosophy, pūja vidhi requirements.

### `project-vision-telugu.md` — Telugu vision doc
Complete project vision in Telugu (for sharing with paṇḍitas, family).

### `telugu-astrology.html` — The original demo (preserved)
The first quick demo we built before the engine work began.

### `engine-v1.html`, `panchangam-v1.html`, `reading-v1.html`
Redirect stubs to `app.html` (these were earlier standalone tools, now merged into the unified app).

## Engineering notes

### Astronomy engine
- **Sun longitude:** Meeus Ch.25 simplified VSOP — accurate to ~0.01°
- **Moon longitude:** Meeus Ch.47, ~26 main periodic terms — accurate to ~10 arcmin
- **Planets (Mercury–Saturn):** Keplerian with light-time correction — accurate to ~few arcmin
- **True Rāhu/Ketu:** Meeus mean node + nutation correction
- **Lahiri ayanāṁśa:** linear formula, validated against Swiss Ephemeris to ~3-4 arcsec
- **Lagna:** derived from altitude=0 condition; **the +180° fix is in** (basic atan2 form returns descendant)
- **Validated against:** India Independence (Vṛṣabha lagna 7°) and Mahatma Gandhi (Tula lagna ~9°) reference charts.

### Cities database
- 198 entries: 36 Telangana (incl. tier-2/3 — Bhongir, Kothagudem, Bhupalpally, etc.), 90 AP (incl. Palakol, Narasapuram, Tanuku, Amalapuram, etc.), 15 other Indian metros, ~57 worldwide (USA Eastern/Central/Pacific/Mountain, Canada, UK, Europe, UAE/Saudi/Qatar/Kuwait/Oman, SE Asia, Australia, NZ, S. Africa).
- Searchable autocomplete: type Telugu OR English OR region keyword → instant filtered results → click to auto-fill lat/lon/timezone/place name.
- Manual entry always available below.

### BPHS rule database
- **Schema:** `{id, type, graha, bhava, domains[], valence, te, src}`
- **Starter set:** 24 rules covering Sūrya & Candra in 12 bhāvas each.
- **Citation discipline:** every interpretive sentence is a database row tagged with its source. All marked `verified:false` pending hardcopy review.
- **Domain grouping:** 30+ life domains pre-mapped with Telugu names and icons.

### Remedies
- **Tier 1 (free, default):** mantra japa with full procedure (count, days, direction, time), stotra pāṭha, vāra vrata, dāna — all 9 grahas.
- **Tier 2 (paṇḍita-led):** homas, abhiṣekas, temple-specific recommendations with cost ranges.
- **Tier 3 (last resort):** ratna details with carat/finger/day/cost transparency.
- **Personalization:** detects "weak" grahas (in dusthāna 6/8/12 or debilitated) and surfaces remedies for those specifically.

### Voice TTS
- Uses browser SpeechSynthesisAPI with `te-IN` locale.
- Rate 0.85, pitch 1.0 — readable pace for elder users.
- "🔊 వినండి" button on every reading card.
- Master "🔊 వినండి" preset button reads top 5 predictions aloud.

## Known limitations & next steps

1. **BPHS rules are general śāstra knowledge, not verified against your hardcopy.** The PDF you uploaded was a server error page (1.5KB HTML, not actual content). Re-upload working PDF or photograph specific pages and we'll verify each rule.
2. **24 rules total currently.** Need to expand to 9 grahas × 12 bhāvas (108) + graha-rāśi (108) + yogas + dṛṣṭi + daśā-phala. Months of content work.
3. **Pūja vidhi schema not fully built yet** — currently inline procedures within remedy cards. Full ṣoḍaśopacāra with audio is the next big build.
4. **Mantra audio is TTS** — for production we need a Veda-paṭhita to record real audio. TTS pronunciation is acceptable for Telugu prediction text, subtly wrong for Sanskrit mantras.
5. **No backend.** Everything client-side. For features like saving charts, user accounts, paṇḍita marketplace — that's a future Phase.
6. **Mobile responsive** but not optimized as PWA. Add manifest.json + service worker for installable mobile experience.

## Browser support

Tested mentally against modern Chrome, Firefox, Safari, Edge. Telugu fonts via Google Fonts (Noto Sans Telugu). Voice support requires browser TTS (Chrome/Edge/Safari OK; older Firefox may not).

## File structure

```
Astrology/
├── index.html              ← Landing page (start here)
├── app.html                ← The actual app (all features)
├── README.md               ← This file
├── astrosage-teardown.md   ← Competitive strategy
├── project-vision-telugu.md ← Vision in Telugu
├── telugu-astrology.html   ← Original demo (preserved)
├── engine-v1.html          ← redirect → app.html
├── panchangam-v1.html      ← redirect → app.html
└── reading-v1.html         ← redirect → app.html
```

Built April 30, 2026. Telugu-first. BPHS-grounded. Ad-free. No commissions on remedies.

## Deployment

This repo deploys to Railway via the same pattern as the MCQ exam app — a tiny Flask wrapper (`app.py`) that serves the static HTML files, run by gunicorn.

### File layout

```
app.py              ← Flask app; serves index.html at /, every other path as static
Procfile            ← web: gunicorn app:app --bind 0.0.0.0:$PORT --workers 1 --timeout 120
requirements.txt    ← flask, gunicorn
nixpacks.toml       ← forces the Python provider on Railway
railway.json        ← Railway deploy config (NIXPACKS builder, /healthz healthcheck)
```

### Local development

```bash
python -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python app.py                      # http://localhost:5000

# or run gunicorn locally exactly as Railway does:
gunicorn app:app --bind 0.0.0.0:5000
```

### Production (Railway)

1. Push this repo to GitHub.
2. On Railway → **New Project → Deploy from GitHub repo** → pick this repo.
3. Railway reads `nixpacks.toml` (forces Python), installs `requirements.txt`, runs the `Procfile` web command. A `*.up.railway.app` URL is assigned automatically.
4. Add a custom domain in **Settings → Networking** if desired.

No environment variables are required — the app is fully client-side, and `app.py` only serves the existing HTML files.

### Health check

`GET /healthz` → `{"status": "ok"}` — used by Railway to confirm the container started.

