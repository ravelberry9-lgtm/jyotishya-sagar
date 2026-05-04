/* ============================================================
   JYOTIṢA GRANTHĀLAYA — Library catalog
   జ్యోతిష్య గ్రంథాలయము — శాస్త్ర గ్రంథముల జాబితా

   This is the master catalog of classical jyotiṣa texts.
   Per-text VERSE content lives in separate data files
   (bphs-data.js, brihat-jataka-data.js, etc.) which populate
   window.GRANTHAS.texts[id].chapters at load time.

   Load order (in HTML):
     1. granthas.js          (this file — sets up structure)
     2. bphs-data.js         (existing — populates BPHS chapters)
     3. <new text>-data.js   (future — each text's content)
     4. research-notes.js    (cross-cutting research)

   Backward compatibility:
     window.BPHS_VERSES is preserved as alias to texts.bphs
     so existing app.html and BPHS reader code keeps working.
   ============================================================ */
"use strict";

window.GRANTHAS = {
  meta: {
    library_title_te: "జ్యోతిష్య గ్రంథాలయము",
    library_title_en: "Jyotiṣa Granthālaya",
    tagline_te: "పంచరత్నములు · BPHS · విశేష గ్రంథములు — ఏకత్ర పారదర్శక సూచిక",
    tagline_en: "Pañcaratna · BPHS · Specialized Texts — unified, transparent, citation-grade",
    last_updated: "2026-05-04",
    schema_version: 1
  },

  /* === Categorization === */
  categories: {
    "panchratna": {
      title_te: "🏛 పంచరత్నములు",
      title_en: "The Five Pillars (Pañcaratna)",
      desc_te: "సంప్రదాయ సంస్కృత విద్యాపీఠములలో ప్రామాణికముగా ఎంచబడు ఐదు మూల గ్రంథములు — ప్రాచీన హస్తలిఖిత సాక్ష్యము కల్గినవి",
      desc_en: "The five foundational texts recognized as authoritative in traditional Sanskrit institutions — with ancient manuscript provenance",
      member_ids: ["brihat-jataka", "saravali", "phaladipika", "sarvartha-cintamani", "jataka-parijata"]
    },
    "modern_reconstruction": {
      title_te: "📖 ఆధునిక పునర్నిర్మాణ గ్రంథములు",
      title_en: "Modern Reconstruction Texts",
      desc_te: "20వ శతాబ్దములో పునర్నిర్మాణము చేయబడిన గ్రంథములు — విస్తృత ఉపయోగము కానీ సందేహాస్పద ప్రామాణికత",
      desc_en: "Texts reconstructed in the 20th century — widely used but with disputed authenticity",
      member_ids: ["bphs"]
    },
    "specialized": {
      title_te: "🎯 విశేష ప్రయోజన గ్రంథములు",
      title_en: "Specialized Purpose Texts",
      desc_te: "నిర్దిష్ట జ్యోతిష్య విభాగములకు (ప్రశ్న, వార్షిక, ముహూర్త) ప్రత్యేక ప్రామాణిక గ్రంథములు",
      desc_en: "Authoritative texts for specific jyotiṣa branches (horary, annual, electional)",
      member_ids: ["prasna-marga", "tajika-nilakanthi", "muhurta-cintamani"]
    }
  },

  /* === Authority levels (for UI badges) === */
  authority_levels: {
    "highest": {te: "🥇 ఉత్తమ ప్రామాణికత", en: "Highest Authority", color: "#1a5e1a", desc_te: "ప్రాచీన హస్తలిఖిత ప్రతుల సాక్ష్యము కల్గినది", desc_en: "Backed by ancient manuscript evidence"},
    "high":    {te: "🥈 ఉన్నత ప్రామాణికత", en: "High Authority",    color: "#185fa5", desc_te: "మధ్యయుగ ప్రతులు లభ్యము, విమర్శనాత్మక సంస్కరణలు", desc_en: "Medieval manuscripts available, critical editions exist"},
    "disputed":{te: "⚠️ సందేహాస్పదము",      en: "Disputed",         color: "#a87a0e", desc_te: "మూల ప్రతి విలుప్తము — ఆధునిక పునర్నిర్మాణము", desc_en: "Original lost — modern reconstruction"},
    "doubtful":{te: "❌ సందేహమున్నది",       en: "Doubtful",         color: "#a32d2d", desc_te: "ప్రాచీన మూలము లేదు — జాగరూకత అవసరము", desc_en: "No ancient source — caution required"}
  },

  /* === The texts === */
  texts: {

    "brihat-jataka": {
      meta: {
        id: "brihat-jataka",
        title_te: "బృహజ్జాతకము",
        title_en: "Br̥hat Jātaka",
        author_te: "వరాహమిహిరాచార్యులు",
        author_en: "Varāhamihira",
        date: "c. 550 CE",
        date_te: "క్రీ.శ. ~550",
        category: "panchratna",
        authority: "highest",
        color: "#185fa5",          /* Deep blue */
        color_dark: "#0c447c",
        color_bg: "#e6f1fb",
        icon: "🥇",
        total_chapters: 28,
        manuscript_te: "క్రీ.శ. 1399 నేపాల హస్తలిఖిత ప్రతి, కేంబ్రిడ్జ్ యూనివర్సిటీ లైబ్రరీ MS Add.1707 — నేపాలాక్షర లిపిలో",
        manuscript_en: "1399 CE Nepalese manuscript at Cambridge University Library, MS Add.1707, in Nepalākṣara script",
        commentator_te: "క్రీ.శ. 950 భట్టోత్పలాచార్యుల వ్యాఖ్యా-సహితముగా పారంపర్య సంరక్షణము",
        commentator_en: "Preserved in unbroken tradition with Bhaṭṭotpalācārya's 950 CE commentary",
        summary_te: "వరాహమిహిరాచార్యుల ప్రథమ ప్రామాణిక జాతక గ్రంథము — 28 అధ్యాయములు, ~407 శ్లోకములు. సంక్షిప్త కానీ సాంద్ర-విషయ. సంప్రదాయ పండిత శిక్షణలో ముఖ్యమైన గ్రంథము.",
        summary_en: "The foundational authoritative jātaka text by Varāhamihira — 28 chapters, ~407 verses. Concise but content-dense. The principal text in traditional pandita training.",
        recommend_for_te: "ముఖ్య జాతక ఫలములు — లగ్నము, గ్రహ-భావ స్థానములు, రాశి స్వభావములు",
        recommend_for_en: "Core natal predictions — lagna, graha-bhāva placements, rāśi natures",
        editions_te: ["V. సుబ్రహ్మణ్య శాస్త్రి (1929) — ప్రామాణిక సంస్కరణ", "B. సూర్యనారాయణ రావు (Astrological Magazine)"],
        editions_en: ["V. Subrahmanya Sastri (1929) — standard scholarly edition", "B. Suryanarayana Rao (Astrological Magazine)"]
      },
      chapters: {} /* populated by brihat-jataka-data.js when added */
    },

    "saravali": {
      meta: {
        id: "saravali",
        title_te: "సారావళి",
        title_en: "Sārāvalī",
        author_te: "కల్యాణవర్మ",
        author_en: "Kalyāṇavarmā",
        date: "c. 7th–8th century CE",
        date_te: "క్రీ.శ. 7-8 శతాబ్దము",
        category: "panchratna",
        authority: "high",
        color: "#2e7d32",          /* Forest green */
        color_dark: "#1a5e1a",
        color_bg: "#eaf3de",
        icon: "🥈",
        total_chapters: 55,
        manuscript_te: "ప్రాచీన భారత గ్రంథాలయములలో పూర్వ-మధ్యయుగ హస్తలిఖిత ప్రతులు లభ్యము",
        manuscript_en: "Pre-medieval manuscripts available in major Indian library collections",
        summary_te: "కల్యాణవర్మ రచించిన విస్తృత జాతక గ్రంథము — 55 అధ్యాయములు. \"పంచరత్నము\"లలో ఒకటి. గ్రహ-భావ స్థాన ఫలములకు అత్యంత ప్రామాణికము.",
        summary_en: "An extensive jātaka text by Kalyāṇavarmā — 55 chapters. One of the \"Five Pillars\". Highly authoritative for graha-bhāva placement results.",
        recommend_for_te: "గ్రహ-భావ స్థాన ఫలములు, యోగములు, దశా ఫలములు",
        recommend_for_en: "Graha-bhāva placement results, yogas, dasha effects"
      },
      chapters: {}
    },

    "phaladipika": {
      meta: {
        id: "phaladipika",
        title_te: "ఫలదీపిక",
        title_en: "Phaladīpikā",
        author_te: "మంత్రేశ్వరుడు",
        author_en: "Mantreśvara",
        date: "c. 15th century CE",
        date_te: "క్రీ.శ. 15వ శతాబ్దము",
        category: "panchratna",
        authority: "high",
        color: "#7b1fa2",          /* Royal purple */
        color_dark: "#4a148c",
        color_bg: "#f3e5f5",
        icon: "🥈",
        total_chapters: 28,
        manuscript_te: "ఆధునిక విమర్శనాత్మక సంస్కరణలు లభ్యము; హస్తలిఖిత ప్రతులు సమృద్ధిగా",
        manuscript_en: "Modern critical editions available; manuscripts plentiful",
        summary_te: "మంత్రేశ్వరుని సరళమైన ఆచరణాత్మక జాతక గ్రంథము — 28 అధ్యాయములు. సాధారణ ఫల ప్రవచనమునకు ప్రామాణికము. తెలుగు అనువాదములు సులభముగా లభ్యము.",
        summary_en: "Mantreśvara's clear and practical jātaka text — 28 chapters. Authoritative for general phala prediction. Telugu translations easily available.",
        recommend_for_te: "సాధారణ జాతక ఫలములు, దైవజ్ఞ ప్రయోగములకు సరళ సూచిక",
        recommend_for_en: "General natal predictions, simple reference for daivajña practice"
      },
      chapters: {}
    },

    "sarvartha-cintamani": {
      meta: {
        id: "sarvartha-cintamani",
        title_te: "సర్వార్థ చింతామణి",
        title_en: "Sarvārtha Cintāmaṇi",
        author_te: "వేంకటేశ దైవజ్ఞుడు",
        author_en: "Veṅkaṭeśa Daivajña",
        date: "c. 16th century CE",
        date_te: "క్రీ.శ. 16వ శతాబ్దము",
        category: "panchratna",
        authority: "high",
        color: "#00838f",          /* Teal */
        color_dark: "#005662",
        color_bg: "#e0f2f1",
        icon: "🥈",
        total_chapters: 14,
        manuscript_te: "ఉత్కృష్ట హస్తలిఖిత ప్రతి సంప్రదాయము",
        manuscript_en: "Excellent manuscript tradition",
        summary_te: "వేంకటేశ దైవజ్ఞుని విస్తృత ఫల జాతక గ్రంథము — 14 అధ్యాయములు. విస్తృత దశా-అన్తర్దశా ఫలములకు ప్రాధాన్యత.",
        summary_en: "Veṅkaṭeśa Daivajña's expansive phala-jātaka text — 14 chapters. Emphasizes detailed dasha-antardasha results.",
        recommend_for_te: "విస్తృత ఫలములు, దశా-అన్తర్దశా విశ్లేషణ",
        recommend_for_en: "Extended predictions, dasha-antardasha analysis"
      },
      chapters: {}
    },

    "jataka-parijata": {
      meta: {
        id: "jataka-parijata",
        title_te: "జాతక పారిజాతము",
        title_en: "Jātaka Pārijāta",
        author_te: "వైద్యనాథ దీక్షితులు",
        author_en: "Vaidyanātha Dīkṣita",
        date: "c. 16th century CE",
        date_te: "క్రీ.శ. 16వ శతాబ్దము",
        category: "panchratna",
        authority: "high",
        color: "#a02035",          /* Wine red */
        color_dark: "#6a1424",
        color_bg: "#fde8eb",
        icon: "🥈",
        total_chapters: 18,
        manuscript_te: "నేటికీ ప్రామాణిక సూచిక గ్రంథముగా వాడకము",
        manuscript_en: "Used as a standard reference text even today",
        summary_te: "వైద్యనాథ దీక్షితుల క్రోడీకృత జాతక గ్రంథము — 18 అధ్యాయములు. \"పారిజాత\" అను నామము యొక్క సార్థకత — అన్ని జ్యోతిష్య విషయములకు ఏకైక సూచిక.",
        summary_en: "Vaidyanātha Dīkṣita's comprehensive jātaka compendium — 18 chapters. Lives up to its name (\"Pārijāta\" = wish-fulfilling tree) as a single reference for all jyotiṣa topics.",
        recommend_for_te: "క్రోడీకృత జాతక సూచిక, ఏకైక సమగ్ర గ్రంథము",
        recommend_for_en: "Comprehensive jātaka reference, single-source compendium"
      },
      chapters: {}
    },

    "bphs": {
      meta: {
        id: "bphs",
        title_te: "బృహత్‌ పరాశర హోరా శాస్త్రము",
        title_en: "Br̥hat Parāśara Hora Śāstra (BPHS)",
        author_te: "మహర్షి పరాశర (సంప్రదాయము)",
        author_en: "Maharṣi Parāśara (traditional attribution)",
        date: "Original lost; modern recension 1946 CE",
        date_te: "మూల ప్రతి విలుప్తము; ఆధునిక పునర్నిర్మాణము క్రీ.శ. 1946",
        category: "modern_reconstruction",
        authority: "disputed",
        color: "#d94f00",          /* Saffron — keeps existing app identity */
        color_dark: "#6b1d1d",
        color_bg: "#fff7ec",
        icon: "⚠️",
        total_chapters: 97,
        manuscript_te: "ప్రాచీన పూర్ణ ప్రతి లేదు — క్రీ.శ. 10వ శతాబ్దము నాటికే విలుప్తము. భట్టోత్పలాచార్యులు \"పరాశర హోరా దొరకలేదు\" అని చెప్పిరి",
        manuscript_en: "No complete ancient manuscript — lost since 10th century CE. Bhaṭṭotpalācārya recorded \"I could not find Parāśara Hora\"",
        commentator_te: "ఆధునిక పునర్నిర్మాణ ప్రయత్నము: సీతారాం ఝా (1946) → R. సంతానం (1984)",
        commentator_en: "Modern reconstruction lineage: Sitaram Jha (1946) → R. Santhanam (1984)",
        summary_te: "ఈనాడు అత్యంత ప్రసిద్ధమైన జ్యోతిష్య గ్రంథము కానీ ప్రామాణికత విషయములో గంభీరమైన సందేహములు ఉన్నవి. మూల ప్రతి 1000+ సంవత్సరములుగా విలుప్తము. ప్రస్తుత ముద్రణలు ఆధునిక సంపాదకుల పునర్నిర్మాణములు.",
        summary_en: "Today the most popular jyotiṣa text but with serious authenticity concerns. Original manuscript lost for 1000+ years. Current editions are modern editorial reconstructions.",
        recommend_for_te: "విస్తృత గ్రహ-భావ-దశా ఫలములు (జాగరూకతతో, ఇతర మూలములతో పరిశీలన చేసి)",
        recommend_for_en: "Extended graha-bhāva-daśā predictions (with caution, cross-checked against other sources)",
        editions_te: ["వేంకటేశ్వర ముద్రణాలయము (బొంబాయి) — 71 అధ్యాయములు, 5781 శ్లోకములు, అత్యంత ప్రామాణికము", "సీతారాం ఝా (1946) — 97 అధ్యాయములు, 4001 శ్లోకములు", "R. సంతానం (1984) — ఆంగ్ల అనువాదము", "మోహన్ పబ్లికేషన్స్ తెలుగు (మధురకృష్ణమూర్తి శాస్త్రి) — 4 భాగములు", "గొల్లపూడి వీరస్వామి సన్స్ తెలుగు — 720 పుటలు"],
        editions_en: ["Veṅkaṭeśvara Press (Bombay) — 71 chapters, 5781 verses, most authoritative", "Sitaram Jha (1946) — 97 chapters, 4001 verses", "R. Santhanam (1984) — English translation", "Mohan Publications Telugu (Madhura Krishnamurthy Sastry) — 4 volumes", "Gollapudi Veeraswamy Sons Telugu — 720 pages"]
      },
      chapters: {} /* populated by bphs-data.js — see compat shim at bottom */
    },

    "prasna-marga": {
      meta: {
        id: "prasna-marga",
        title_te: "ప్రశ్న మార్గము",
        title_en: "Praśna Mārga",
        author_te: "కేరళ రచన (అజ్ఞాత రచయిత)",
        author_en: "Kerala composition (anonymous)",
        date: "c. 17th century CE",
        date_te: "క్రీ.శ. 17వ శతాబ్దము",
        category: "specialized",
        authority: "highest",
        color: "#3f51b5",          /* Indigo */
        color_dark: "#1a237e",
        color_bg: "#e8eaf6",
        icon: "🎯",
        total_chapters: 32,
        manuscript_te: "కేరళ హస్తలిఖిత ప్రతుల పారంపర్యము; అనేక ఆధునిక సంస్కరణలు",
        manuscript_en: "Kerala manuscript tradition; multiple modern editions",
        summary_te: "ప్రశ్న జ్యోతిష్యమునకు (horary) అత్యంత ప్రామాణిక గ్రంథము. సంప్రదాయ పండిత శిక్షణలో బృహజ్జాతకము వలెనే తప్పనిసరి.",
        summary_en: "The most authoritative text for horary astrology (praśna). In traditional pandita training, considered as essential as Br̥hat Jātaka.",
        recommend_for_te: "ప్రశ్న జ్యోతిష్యము, తాత్కాలిక ఫల నిర్ణయము",
        recommend_for_en: "Horary astrology, immediate question-based predictions"
      },
      chapters: {}
    },

    "tajika-nilakanthi": {
      meta: {
        id: "tajika-nilakanthi",
        title_te: "తాజిక నీలకంఠీ",
        title_en: "Tājika Nīlakaṇṭhī",
        author_te: "నీలకంఠ దైవజ్ఞుడు",
        author_en: "Nīlakaṇṭha Daivajña",
        date: "c. 16th century CE",
        date_te: "క్రీ.శ. 16వ శతాబ్దము",
        category: "specialized",
        authority: "highest",
        color: "#a87a0e",          /* Bronze */
        color_dark: "#6c4d04",
        color_bg: "#faecd2",
        icon: "🎯",
        total_chapters: 16,
        manuscript_te: "విమర్శనాత్మక సంస్కరణలు లభ్యము",
        manuscript_en: "Critical editions available",
        summary_te: "వార్షిక జాతక గణనకు (varṣaphala) ప్రామాణిక మూలము. పారశీక-భారత జ్యోతిష్య పరంపరల సమన్వయము.",
        summary_en: "The standard source for annual chart computation (varṣaphala). Synthesis of Persian-Indian astrological traditions.",
        recommend_for_te: "వార్షిక జాతకము, సూర్య-పునరావృత్తి చక్రము, ముంథ నిర్ణయము",
        recommend_for_en: "Annual horoscopy, solar return chart, muntha determination"
      },
      chapters: {}
    },

    "muhurta-cintamani": {
      meta: {
        id: "muhurta-cintamani",
        title_te: "ముహూర్త చింతామణి",
        title_en: "Muhūrta Cintāmaṇi",
        author_te: "రామ దైవజ్ఞుడు",
        author_en: "Rāma Daivajña",
        date: "c. 16th century CE",
        date_te: "క్రీ.శ. 16వ శతాబ్దము",
        category: "specialized",
        authority: "highest",
        color: "#5d4037",          /* Forest brown */
        color_dark: "#3e2723",
        color_bg: "#efebe9",
        icon: "🎯",
        total_chapters: 12,
        manuscript_te: "ముద్రణలు సమృద్ధిగా; సంస్కృత-తెలుగు సంస్కరణలు",
        manuscript_en: "Multiple printed editions; Sanskrit-Telugu versions available",
        summary_te: "ముహూర్త జ్యోతిష్యమునకు (electional) ప్రామాణిక సూచిక గ్రంథము. వివాహ, గృహారంభాది శుభ ముహూర్త నిర్ణయములకు.",
        summary_en: "The standard reference text for electional astrology (muhūrta). For determining auspicious times for marriage, house-warming, and other ceremonies.",
        recommend_for_te: "శుభ ముహూర్త నిర్ణయము, వివాహ-గృహారంభాది క్రియలకు",
        recommend_for_en: "Auspicious time determination for ceremonies and undertakings"
      },
      chapters: {}
    }
  }
};

/* ============================================================
   BACKWARD COMPATIBILITY SHIM
   Existing code expects window.BPHS_VERSES.
   After bphs-data.js loads its chapters into a separate object,
   this shim links them into the new GRANTHAS structure AND
   keeps the old global pointing at the same data.
   ============================================================ */
(function migrateBPHS(){
  // If the existing bphs-data.js hasn't loaded yet, defer
  if (typeof window.BPHS_VERSES !== 'undefined' && window.BPHS_VERSES.chapters) {
    // Move existing BPHS chapters into the new structure
    window.GRANTHAS.texts.bphs.chapters = window.BPHS_VERSES.chapters;
    // Preserve existing meta fields that BPHS_VERSES had (extracted_chapters, note, etc.)
    if (window.BPHS_VERSES.meta) {
      Object.assign(window.GRANTHAS.texts.bphs.meta, {
        extracted_chapters: window.BPHS_VERSES.meta.extracted_chapters || [],
        source_pdf: window.BPHS_VERSES.meta.source_pdf,
        note: window.BPHS_VERSES.meta.note
      });
    }
    // Keep the old global as an alias to the same object so existing code works
    window.BPHS_VERSES = window.GRANTHAS.texts.bphs;
  } else {
    // bphs-data.js loads AFTER this file. Re-run migration once it's ready.
    window.__GRANTHAS_AWAITING_BPHS__ = true;
  }
})();

/* Helper: re-run shim if bphs-data.js loaded after granthas.js */
window.__linkBPHSToGranthas = function(){
  if (typeof window.BPHS_VERSES !== 'undefined' && window.BPHS_VERSES.chapters && window.BPHS_VERSES !== window.GRANTHAS.texts.bphs) {
    window.GRANTHAS.texts.bphs.chapters = window.BPHS_VERSES.chapters;
    if (window.BPHS_VERSES.meta) {
      Object.assign(window.GRANTHAS.texts.bphs.meta, {
        extracted_chapters: window.BPHS_VERSES.meta.extracted_chapters || [],
        source_pdf: window.BPHS_VERSES.meta.source_pdf,
        note: window.BPHS_VERSES.meta.note
      });
    }
    window.BPHS_VERSES = window.GRANTHAS.texts.bphs;
  }
};

/* Helper functions for UI rendering */
window.GRANTHAS_HELPERS = {
  /** Get all texts in a category, in declared order */
  textsInCategory: function(catId) {
    const cat = window.GRANTHAS.categories[catId];
    if (!cat) return [];
    return cat.member_ids.map(id => window.GRANTHAS.texts[id]).filter(Boolean);
  },

  /** Get a text by id */
  text: function(id) {
    return window.GRANTHAS.texts[id];
  },

  /** Total verses extracted across all texts */
  totalExtractedVerses: function() {
    let count = 0;
    for (const t of Object.values(window.GRANTHAS.texts)) {
      for (const ch of Object.values(t.chapters || {})) {
        count += (ch.verses || []).length;
      }
    }
    return count;
  },

  /** Total extracted chapters across all texts */
  totalExtractedChapters: function() {
    let count = 0;
    for (const t of Object.values(window.GRANTHAS.texts)) {
      count += Object.keys(t.chapters || {}).length;
    }
    return count;
  },

  /** Get authority badge data for a text */
  authorityBadge: function(text) {
    const lvl = window.GRANTHAS.authority_levels[text.meta.authority];
    return lvl || {te: '', en: '', color: '#888'};
  }
};
