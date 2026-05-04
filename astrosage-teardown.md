# AstroSage Teardown — Reference Document

*Compiled April 30, 2026 · for the Telugu Vedic Astrology project*

This document is our competitive baseline. AstroSage is the dominant player in the Indian astrology software market, and any Telugu Vedic astrology product we build will be measured against it. The goal here is to be honest about what they're good at, where they're weak, and where the strategic opening is for a Telugu-first, BPHS-grounded, teaching-oriented product.

---

## 1. Market position

AstroSage is not a competitor — it is the incumbent. Approximate scale:

- ~1.5 million daily active users
- ~12 million monthly active users
- ~85 million (8.5 crore) lifetime downloads
- Claimed ~80% market share of the Indian kundli software space
- ~700,000 registered astrologers on their platform (consultation marketplace)
- Live since ~2002; mobile app since the early 2010s

In 2018 they launched Bhrigoo.ai, which they market as "the world's first AI astrologer." They claim that AI has delivered over 10 crore (100 million) answers. As of 2026 the product is positioned as "AI Astrology" — they have followed the AI rebrand wave the rest of the industry is doing.

**Implication for us:** We do not win on breadth, distribution, or astrologer marketplace. We win on Telugu-first authenticity, citation traceability, and teaching depth. Trying to out-feature them is a losing fight; trying to out-honest them is winnable.

---

## 2. Calculation engine — what they actually compute

Their kundli software is mature and considered trustworthy by the practitioner community. Specifically supported:

- **Ayanāṁśa choice:** Lahiri (Citrāpakṣa), Raman, KP, Sāyana (tropical). Lahiri is default. This matches what serious software like Jagannatha Hora supports.
- **Shadbala** — six-fold strength of planets (Sthāna, Dig, Kāla, Cheṣṭā, Naisargika, Dṛk bala).
- **Shodashvarga** — full set of 16 divisional charts (D-1 through D-60). This is the BPHS standard.
- **Ashtakavarga & Prastarāṣṭakavarga** — bindu tables for transit prediction.
- **Bhāva Madhya** — bhāva cusps (so they support Bhāva Cālit charts in addition to whole-sign).
- **Avakahaḍā cakra** — the standard summary table (varṇa, vaśya, yoni, gaṇa, nāḍī, etc.).
- **Friendship tables** (naisargika, tātkālika, pañcadhā maitrī).
- **Ghātaka cakra.**
- **Vimśottarī Daśā** down to multiple sub-levels.
- **Automatic DST handling** (which most amateur tools get wrong — credit where due).

Output is rendered in North-Indian and South-Indian chart styles, in 9+ languages. For Telugu specifically: navagrahas, rāśi, bhāva, nakṣatram, lagnam, daśā-bhukti phalam, peyarcci phalam (transit predictions), personalized rāśi phalam.

**Implication for us:** We must match this on the calculation side. There is no acceptable "good enough" — if our chart disagrees with AstroSage on a graha placement by even a degree, a serious user will reject our product. Our gaṇita layer must be Swiss Ephemeris-grade. This is non-negotiable and aligns with what we already discussed.

---

## 3. Feature inventory (what they ship)

**Free tier:**
- Free Janma Kundli — 50+ page report
- Daily, weekly, monthly, yearly horoscopes (rāśi phalam)
- Daily Panchang (tithi, nakṣatra, yoga, karaṇa, rāhu kālam, etc.)
- Marriage matching (Guṇamilan / Guṇamelanam)
- Maṅgala Doṣa, Śani Sāḍesātī, Kāla Sarpa Doṣa analysis
- Varṣaphal (Tājik / annual horoscope)
- Free chart in North/South Indian formats
- Sub-products: numerology, palmistry, vāstu, tarot, gemstone

**Paid:**
- Detailed life-prediction reports
- Career, marriage, finance specialized reports
- Live astrologer consultation marketplace (AstroSage Varta) — phone, chat, video
- Entry consultation: ₹1 first call (loss-leader), then market rates ₹15-100+/min
- AstroSage Cloud — desktop-class professional kundli software (subscription)
- Gemstones, yantra, energized products (e-commerce)

**The killer feature (their moat):** the astrologer marketplace. 700k registered astrologers, millions of paid consultations per year. This is genuinely hard to replicate and is where most of their revenue comes from. Their free software is the funnel into the marketplace.

---

## 4. Telugu-specific assessment

This is where the picture gets interesting and where our opening is.

**What they have in Telugu:**
- A `/telugu/` URL path with localized pages: jathakam, jyothisham, gunamelanam, panchangam
- Telugu UI in the mobile app
- Telugu rāśi phalam (daily/monthly)

**What's wrong with it:**

The Telugu version is structurally a translation overlay on the English/Hindi product. Indications:
- Telugu typography is often inconsistent (mixed Noto, system fonts, sometimes mojibake on older pages)
- Predictions read as machine-translated — sentence structures follow English/Hindi syntax, not natural Telugu prose. A Telugu speaker can tell within 10 seconds.
- Sanskrit terms are transliterated inconsistently across pages
- Telugu-specific cultural content (Telugu calendar systems like Cāndramāna vs Saurmāna, regional festival timing for Andhra/Telangana, Pratyantar daśā timing in Telugu paramparā) is not first-class — it's whatever the Hindi product has, translated.
- No equivalent of the way a Telugu paṇḍita actually structures phala — typically a Telugu jātaka discourse moves rāśi → lagna → grahasthāna → daśā → yogāḥ → upāya, which is a slightly different flow than what the English/Hindi templates output.

**Competitors in the Telugu-specific niche (worth noting):**

| Site / App | Strength | Weakness |
|---|---|---|
| **Mulugu.com** | Considered an authority for Telugu pañcāṅgam (Mulugu Ramalinga Swamy lineage) | Old-school UX, primarily a calendar/pañcāṅgam product — not a full kundli engine |
| **OnlineJyotish.com** | Telugu jātakam pages, decent depth | Generic content, dated UI |
| **ProKerala (Telugu)** | Clean Telugu pañcāṅgam | Translation-overlay like AstroSage, not Telugu-native |
| **ClickAstro Horoscope Telugu (Play Store)** | Detailed reports | Paid product, generic predictions |
| **Vedic Astrology Telugu (supersoft.prophet)** | Free, simple | Low-quality content, basic calculations |
| **Hindu Jyotish (telugujatakam.telugu_jatakam)** | Free, in Telugu | Limited depth |

None of these are **Telugu-first AND BPHS-cited AND teaching-oriented**. The closest to "authoritative Telugu" is Mulugu, but that's a pañcāṅgam product, not a full Vedic astrology platform.

**Implication for us:** The Telugu-Vedic-jyotiṣa space has no clear authority on the software side. Mulugu owns pañcāṅgam credibility; AstroSage owns kundli market share but not Telugu-native credibility; nobody owns "the BPHS-faithful Telugu app that also teaches you." That is the open lane.

---

## 5. Business model

Roughly, the revenue mix is:

1. **Astrologer marketplace consultations** — biggest, recurring, scales with traffic
2. **Premium reports** — one-time purchases
3. **AstroSage Cloud subscriptions** — for professional astrologers
4. **E-commerce** — gemstones, yantras, rudrākṣa
5. **Display ads** on the free site (lower priority now)

Free kundli is loss-leader. The actual product is **routing high-intent users into paid astrologer time and product purchases**.

**Implication for us:** A Telugu-first BPHS app can monetize the same way (consultations, premium reports, learning courses, products), but the more interesting monetization is **paid courses on Vedic jyotiṣa in Telugu** — there is essentially no good Telugu-medium structured jyotiṣa course online. A serious BPHS-based curriculum in Telugu, taught with the app's own engine generating example charts, is something you could charge ₹2,000–10,000 per course tier for. Different demographic than the consultation funnel — it's people who want to *learn*, not just *be told*. AstroSage explicitly does not serve this audience.

---

## 6. AI integration (their 2026 push)

AstroSage is leaning hard into "AI Astrology" branding. Bhrigoo.ai gives natural-language predictions, AI-personalized horoscopes, AI-driven kundli interpretation. It's competent. It's also **ungrounded** — the AI generates fluent prediction text, but it does not cite which śāstra rule produced which statement. There is no "this prediction is from BPHS Adhyāya 7" link. It's the same problem the rest of the industry has: LLMs producing plausible jyotiṣa-flavored prose with no traceability.

**Implication for us:** If we ground our LLM with our citation database — i.e., the AI is not allowed to assert anything that isn't in the rule database with a śloka reference — we end up with **AI predictions that are auditable**. That is a real differentiator. Every reading the app produces can be expanded to show "this came from BPHS rule X, with the original Sanskrit/Telugu text." AstroSage cannot easily retrofit that, because their entire content corpus was authored as freeform prose, not as cited rules.

---

## 7. SWOT — where we stand vs AstroSage

**Their strengths (don't fight here):** distribution, brand, calculation engine maturity, astrologer marketplace, breadth of features, multi-language reach, AI fluency.

**Their weaknesses (fight here):**
1. Telugu is a translation overlay, not a Telugu-first product
2. Predictions are not source-cited
3. No teaching/learning layer
4. Generic AI predictions, not śāstra-grounded
5. Dense/dated UX

**Our advantages to lean into:**
1. Telugu-first content, authored not translated
2. Every prediction cites BPHS / Jātaka Pārijāta / Phaladīpikā / Sārāvalī with adhyāya-śloka references and your hardcopy book pages digitized
3. Structured Vedic jyotiṣa curriculum in Telugu — śloka-driven, with worked examples generated by our own engine
4. Modern, calm UX designed for reading rather than upselling
5. Auditable AI — LLM can only generate from cited rules

**Our risks:**
1. Calculation engine quality — we must hit Swiss Ephemeris-grade or it doesn't matter how good the rest is
2. Citation database is a slow build — months of work, page by page
3. Distribution — we have to find Telugu jyotiṣa communities, can't outspend AstroSage
4. Scope creep — feature parity with AstroSage is months of work; we should *not* try

---

## 7b. Target user & remedy philosophy

The actual primary user is **a father (or mother, grandparent) with basic education, asking about their children's jātaka and porutham for marriage matching**. Not the urban English-speaking tech professional AstroSage's UI is unconsciously designed for. Not the jyotiṣa student who wants citations. A 45–65-year-old Telugu-speaking parent with anxious, specific, family-level questions.

Design consequences:

- **Simple Telugu, not paṇḍita-heavy Sanskritized Telugu.** Reading level ~8th class. Sanskrit terms only when essential, always with plain-Telugu inline explanation.
- **Voice-first input and output.** Many in this segment can't or don't type Telugu comfortably. Voice questions in, synthesized Telugu voice reading the prediction out, audio playback of mantras with correct pronunciation.
- **Procedure-level guidance.** Don't say "chant 16,000 times." Say "sit facing east at sunrise, do ācamana, count 108 per day with rudrākṣa, finish in 148 days, here is the audio." Step by step.
- **Big text, big buttons, simple flows.** Form inputs are pickers and dropdowns. One-screen flows. Designed for someone who's not tech-fluent.
- **No upsells in the reading flow.** Ever.
- **Plain-language verdicts.** Match results in clear Telugu — "పొంతన బాగుంది" / "ఈ పొంతన పూర్తిగా సరిపోలేదు" — not opaque scores.

### Upāya philosophy — the śāstric ordering, restored

This is the ethical core of the product and a real differentiator. AstroSage and the gemstone industry have inverted the traditional ordering because gemstones have the highest margin. We restore the correct order:

**Level 1 — Self-effort, free or near-free** (always the default surface):
- **Mantra japa** with specific bīja, count, timing, procedure, and audio
- **Stotra pāṭha** — Hanumān Cālīsā (Kuja), Āditya Hṛdayam (Sūrya), Mahā Mṛtyuñjaya (Śani / health), Lalitā Sahasranāma (Śukra), Devī Māhātmyam, etc.
- **Vrata / upavāsa** — graha-specific weekly fasts
- **Dāna** — graha-specific giving (black sesame for Śani, jaggery for Kuja, etc.)
- **Daily practices** — Sūrya namaskāra, sandhyā vandana where eligible

**Level 2 — Paṇḍita-mediated, modest cost** (offered when Level 1 isn't sufficient or the user explicitly asks):
- **Homa / havan** — Mahā Mṛtyuñjaya, Sudarśana, Caṇḍī, Navagraha śānti
- **Abhiṣekam** at appropriate temple
- **Pārāyaṇa** — Sundarakāṇḍa, Devī Māhātmyam, etc.
- **Tīrtha yātra** to graha-specific kṣetra

**Level 3 — Material, last resort** (reachable through "advanced options," never pushed):
- Gemstones (ratna) — with full disclosure on cost, fitment, energization, finger, day
- Yantra — copper/silver, properly consecrated
- Rudrākṣa — specific mukhi for specific graha

**Monetization rule:** we do not take commissions or affiliate revenue from gemstone sellers, paṇḍitas, or temples. The recommendation order must be based on śāstric appropriateness, not on what makes us money. Period. This is the ethical constraint that makes the brand trustworthy.

### Pūja vidhi — full procedure, end to end

Critical: any remedy that involves a pūja or homa must come with the **complete vidhi**, not just the name. Most apps fail here — they say "do Śiva abhiṣeka" and stop. Our app must lay out:

**Timing** — prashasta vāra/tithi/nakṣatra/muhūrta with the reasoning (e.g. Mahā Mṛtyuñjaya in Pradoṣa kāla on Trayodaśī, not arbitrary).

**Sambhāra (materials)** — exact items, quantities, sources, substitutions.

**Niyamas** — fasting, bathing, attire, mental preparation, abstentions.

**Pūrva-aṅgam** — saṅkalpa formula (gotra/nāma/place/intent), ācamana, prāṇāyāma, Gaṇapati prārthanā, kalaśa sthāpana, dīpa prajvalana, bhūta śuddhi.

**Pradhāna pūja** — full ṣoḍaśopacāra (or extended), with the mantra at each step. For abhiṣeka specifically: each abhiṣeka dravya in correct sequence (śuddhodaka → pañcāmṛta → ikṣu rasa → nārikela jala → gandha → bilva-jala → śuddhodaka), with the accompanying recitation (e.g. Rudraṁ-Camakam during full Śiva abhiṣeka).

**Uttara-aṅgam** — kṣamā prārthanā (mandatory — asking forgiveness for procedural errors), āratī, prasāda vitaraṇam, and crucially **udvāsana** (most home pūjas skip this and they shouldn't — it leaves the rite incomplete).

**Phala** — what the pūja is for, expected outcomes, repetition guidance.

**Audio for every mantra**, recorded by a Veda-paṭhita — not synthesized. Synthesized Sanskrit is subtly wrong on svara and viramas.

**Optional video** for hand mudras and abhiṣeka pouring sequence (later phase).

**Two depths per vidhi:**
- **Saulabhya vidhi** — 15–20 minute daily home version (default surface)
- **Vistāra vidhi** — full 1–2 hour śāstric procedure (one tap away)

**Paddhati default: Smārta** (most common in Andhra/Telangana Telugu households). Vaiṣṇava (Pāñcarātra/Vaikhānasa) and Vīraśaiva paddhatis as user-selectable variants.

**Adhikāra handling:** offer the full vidhi to all users by default. Where an upacāra is traditionally restricted (yajñopavīta, certain Vedic sūktas), mark clearly and offer the bhakti-mārga equivalent (stotra in place of sūkta). User decides what fits.

**Content production note:** vidhis are authored content, not LLM-generated. Source from authoritative paddhati texts (Karmakāṇḍa Pradīpa, Nityakarma Pūjā Prakāśam, Telugu paddhati books from the user's library), reviewed by a competent paṇḍita before publishing. Mantra audio commissioned from a Veda-paṭhita.

### Children's jātaka — a first-class use case

This is one of the two core flows (the other is porutham). Must include:
- **Bālāriṣṭa analysis** — the first 8 years' afflictions and pariḥāra
- **Education suitability** — subjects, timing, ascendant 4th/5th/9th evaluation
- **Health vulnerabilities** — Lagna, 6th, 8th house assessment
- **Marriage yoga timing window** — when 7th lord daśā activates, etc.
- **Career direction** — 10th house, 10th lord, Ātmakāraka indications
- **Nāmākaraṇa guidance** — naming based on nakṣatra-pāda akṣara

---

## 8. Design implications for our v1

Concrete decisions this teardown drives:

**Engine:** Swiss Ephemeris (WASM in browser, or backend with pyswisseph). Lahiri default but expose Raman, KP, Sāyana as options because AstroSage does. Whole-sign houses default with optional Bhāva Cālit. True Rāhu/Ketu. Match shadbala, shodashvarga, ashtakavarga.

**Output formats:** South Indian chart style as default (Telugu audience), North Indian as toggle. Both must look good.

**Content principle (backend discipline):** Every interpretive rule in our database is tagged with a śāstra citation. This is **internal quality control**, not a user-facing feature. The user doesn't see the citation in the main reading flow — most users (90%+) don't care where a prediction comes from. What citations buy us is **content accuracy** — when we encode a rule, we are forced to actually consult BPHS / Phaladīpikā / Sārāvalī and capture the real nuance, not generic astrology-flavored prose. The AI generation layer is constrained to only produce statements grounded in cited rules, which prevents hallucination. Citations are surfaced subtly as a brand trust signal ("based on Parāśara · Phaladīpikā · Sārāvalī") and made fully available for the ~10% of power users (students, practicing astrologers) who *do* want to see sources — that subset becomes our evangelist base and the audience for paid courses.

**User-facing differentiators (what the 90% actually feels):**
1. **Specificity** — predictions with concrete dates, daśā windows, and actionable timing, not "ups and downs"
2. **Remedies (upāya)** — concrete ratna / mantra / vrata / dāna / pūjā guidance with nakṣatra timing, tied to regional Telugu traditions
3. **Telugu prose authored, not translated** — cadence and idiom that feels written by a Telugu paṇḍita
4. **Calm UX** — no upsells every two screens, no bazaar feel
5. **Trust signal** — quiet citation badge at the brand level, not in the user's face

**Telugu typography:** Noto Sans Telugu / Tiro Telugu / Lohit Telugu, properly tested across Android and iOS. No mojibake, no fallback to system fonts that break the visual.

**Teaching mode:** Toggle between "show me my reading" and "teach me what this means." Same chart, two surfaces.

**Don't ship:** astrologer marketplace, e-commerce, ads, gemstone sales, vāstu, tarot, palmistry. Stay focused. We are a Vedic jyotiṣa app, not a spirituality bazaar. These can come later when we have product-market fit.

**Monetization v1:** Free engine + free basic readings. Paid: detailed reports (per-chart, per-life-area), and structured courses. No consultation marketplace in v1 — that requires onboarding astrologers, which is a separate business.

---

## 9. What we build first

Phase 1 (next 1–2 weeks): replace the current demo's fake math with a real Swiss Ephemeris-backed engine. Validate against AstroSage's free kundli output for 5–10 known birth charts (yours, mine, public figures with verified birth data). The chart must match to the second of arc on graha longitudes, to the minute on lagna. Once we lock that, we move on.

Phase 2 (2 weeks): real pañcāṅgam from the engine, tied to user's location.

Phase 3 (ongoing): citation database. Start with rāśi-svabhāva, graha-svabhāva, graha-in-bhāva (BPHS Adhyāya 1–10 covers most of this). You photograph pages as we need them.

Phase 4 (later): teaching curriculum, deployed in Telugu.

---

*This document will be updated as we learn more. Next refresh: after Phase 1 engine validation, we add a section comparing our chart output to AstroSage's on the same inputs.*
## Note on BPHS PDF

Apr 30 2026: Attached BPHS PDF was a server error page (1.5KB of HTML), not the actual PDF content. Continuing with general BPHS knowledge marked as unverified. User to re-upload working PDF or photograph specific pages when ready.
