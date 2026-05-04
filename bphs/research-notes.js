/* ============================================================
   JYOTIṢA TEXTUAL PROVENANCE — Research Notes
   Bilingual (Telugu + English) scholarly notes on the source-
   authenticity, manuscript history, and recensions of the
   classical Indian astrology texts.

   Telugu register: pandita-style (గ్రాంథిక) prose — formal,
   sanskritised, suitable for scholar-astrologer audience.

   Each section is a working draft (status: "draft") to be
   refined with the user one-by-one before promoting to
   "verified" status.
   ============================================================ */
window.JYOTISHA_RESEARCH = {
  meta: {
    title_te: "మూల గ్రంథ సాక్ష్యము · ప్రామాణికత · హస్తలిఖిత పరంపర",
    title_en: "Source Provenance, Authenticity & Manuscript History",
    subtitle_te: "జ్యోతిష్య శాస్త్ర మూలగ్రంథములు ఎచ్చటి నుండి ఉద్భవించినవి, ఏవి ప్రామాణికమైనవి, ఏవి సందేహాస్పదములు — విద్వత్ పరిశోధనానుసారము",
    subtitle_en: "Where the jyotiṣa texts come from, which are authentic, which are doubtful — based on academic scholarship",
    last_updated: "2026-05-03",
    status: "working draft — to be refined section-by-section",
    purpose_te: "ఈ పరిశోధనా వ్యాసములు మన అనువర్తనమునకు (application) ప్రత్యేకమైన శాస్త్రీయ పునాది కల్పించుటకై రచింపబడినవి. ఆస్ట్రోసేజ్ మొదలగు వాణిజ్య అనువర్తనములు ఎన్నడును చెప్పని ప్రశ్నలకు — \"ఈ శ్లోకము ఎచ్చటి నుండి వచ్చినది? దాని ప్రామాణికత ఎంతవరకు నిర్ధారితము?\" — మన అనువర్తనము స్పష్టముగా సమాధానమిచ్చును.",
    purpose_en: "These research notes form the unique scholarly foundation of our application. The questions that AstroSage and other commercial apps will never address — \"where does this verse come from? how authoritatively established is it?\" — our app will answer transparently."
  },

  /* ===== SECTIONS — narrative, in order ===== */
  sections: [

    /* ────────────────────────────────────────────────────────── */
    {
      id: "why-this-matters",
      icon: "🎯",
      title_te: "ఈ పరిశోధన ఎందుకు ఆవశ్యకము?",
      title_en: "Why Source Provenance Matters",
      content_te: [
        "నేడు తెలుగు, హిందీ, ఆంగ్ల భాషలలో అనేక జ్యోతిష్య గ్రంథములు ముద్రణలో లభ్యమగుచున్నవి. ప్రతి గ్రంథములోనూ \"మహర్షి పరాశరుడు ఇట్లు చెప్పెను\", \"వరాహమిహిరుడు ఇట్లు చెప్పెను\" — అను ఉల్లేఖనలు కానవచ్చును. కానీ ఏ ముద్రణకర్తయూ స్పష్టముగా చెప్పని ముఖ్య ప్రశ్నలు ఇవి —",
        "1. ఆ మహర్షి స్వయముగా చెప్పిన నిజమైన శ్లోకము ఏది?",
        "2. ఇపుడు మనకు లభ్యమగు పాఠము ప్రాచీన కాలము నుండి యథాతథముగా వచ్చినదేనా, లేక మధ్యలో మార్పులు చేర్పులు జరిగినవా?",
        "3. ఆ గ్రంథము యొక్క మూల హస్తలిఖిత ప్రతి (original manuscript) ఎచ్చట భద్రముగా ఉన్నది, ఎన్నవ శతాబ్దపు రచన?",
        "4. భిన్న ప్రకాశకుల ద్వారా ముద్రింపబడిన ప్రతులలో శ్లోకములు పరస్పరము ఎందుకు భిన్నముగా కనిపించుచున్నవి?",
        "ఆధునిక సంస్కృత పండితులు — సంపూర్ణానంద సంస్కృత విశ్వవిద్యాలయపు (వారణాసి) పండిత వినయ ఝా, పాశ్చాత్య విద్వాంసుడు డేవిడ్ పిన్‌గ్రీ (కొలంబియా-బ్రౌన్ విశ్వవిద్యాలయములు), శ్యామసుందరదాస (అమెరికన్ సంస్కృత విద్వాంసుడు) — ఈ ప్రశ్నలపై దశాబ్దములుగా పరిశోధన చేసిరి. వారు కనుగొనిన విషయము ఆశ్చర్యజనకము — **ఆధునికముగా ముద్రింపబడుచున్న BPHS యొక్క సగము కంటెను ఎక్కువ భాగము నిజమైన మహర్షి పరాశర వాక్యము కాదు; అది క్రీ.శ. 20వ శతాబ్దపు సంపాదకుల పునర్నిర్మాణ ప్రయత్నము**.",
        "మన అనువర్తనము ఈ సత్యమును మరుగుపరచదు. ప్రతి శ్లోకము యొక్క మూలము, ప్రామాణిక స్థాయి, వేర్వేరు ముద్రణలలోని పాఠభేదములు — ఇవన్నియు పారదర్శకముగా ప్రదర్శించబడును. ఇది ప్రామాణిక శాస్త్ర-విమర్శనా పరిశోధనకు అనుగుణమైన పద్ధతి."
      ],
      content_en: [
        "Today many jyotiṣa books are available in print across Telugu, Hindi, and English. Every book contains citations like \"Maharṣi Parāśara declared thus\" or \"Varāhamihira declared thus\". But the questions no publisher openly addresses are these —",
        "1. What is the actual original verse of that maharṣi?",
        "2. Has what we receive today come down unchanged from antiquity, or have alterations and insertions occurred along the way?",
        "3. Where is the original manuscript (mūla-mātr̥kā) of that text preserved, and from which century?",
        "4. Why do printed editions from different publishers contain mutually different verses?",
        "Modern Sanskrit scholars — Pt. Vinay Jha (Sampurnanand Sanskrit University, Varanasi), Western Indologist David Pingree (Columbia & Brown universities), Shyamasundara Dasa (American Sanskrit scholar) — have investigated these questions for decades. Their findings are striking: **more than half of the modern printed BPHS is NOT the actual words of Maharṣi Parāśara; it is a 20th-century editorial reconstruction**.",
        "Our application will not conceal this truth. The source, authority level, and inter-edition variant readings (pāṭha-bhedas) of every verse will be displayed transparently. This conforms to the methods of authentic textual-critical scholarship."
      ],
      status: "draft"
    },

    /* ────────────────────────────────────────────────────────── */
    {
      id: "five-pillars",
      icon: "🏛",
      title_te: "ప్రామాణిక జ్యోతిష్య శాస్త్రముల పంచరత్నములు",
      title_en: "The Five Pillars of Authentic Jyotiṣa Texts",
      content_te: [
        "సంప్రదాయ సంస్కృత విద్యాపీఠములలో — సంపూర్ణానంద సంస్కృత విశ్వవిద్యాలయము (వారణాసి), బనారస్ హిందూ విశ్వవిద్యాలయము, తిరుమల తిరుపతి దేవస్థానపు సంస్కృత విద్యాపీఠము — \"జ్యోతిష్య పంచరత్నములు\" అని పిలువబడు ఐదు ప్రాథమిక గ్రంథములు ప్రామాణికముగా ఎంచబడుచున్నవి —",
        "**1. బృహజ్జాతకము** (Br̥hat Jātaka) — వరాహమిహిరాచార్యులు, క్రీ.శ. 550",
        "**2. సారావళి** (Sārāvalī) — కల్యాణవర్మ, క్రీ.శ. 7-8 శతాబ్దము",
        "**3. ఫలదీపిక** (Phaladīpikā) — మంత్రేశ్వరుడు, క్రీ.శ. 15వ శతాబ్దము",
        "**4. సర్వార్థ చింతామణి** (Sarvārtha Cintāmaṇi) — వేంకటేశ దైవజ్ఞుడు, క్రీ.శ. 16వ శతాబ్దము",
        "**5. జాతక పారిజాతము** (Jātaka Pārijāta) — వైద్యనాథ దీక్షితులు, క్రీ.శ. 16వ శతాబ్దము",
        "ఇచ్చట గమనించదగిన ముఖ్య విషయమొకటి కలదు — **ఈ పంచరత్నములలో BPHS లేదు**. \"BPHS వేద జ్యోతిష్యమునకు పరమ ప్రామాణిక గ్రంథము\" — అను ప్రసిద్ధి కేవలము క్రీ.శ. 1984లో రంజన్ ప్రకాశన (బెంగళూరు) వారు R. సంతానం యొక్క ఆంగ్ల అనువాదమును ప్రకటించిన పిమ్మటనే ఆరంభమైనది. అంతకుపూర్వము సంప్రదాయ పండితులు BPHS ను \"మహాగ్రంథము\" అని ఎన్నడును గణింపలేదు.",
        "ప్రసిద్ధ సంస్కృత విద్వాంసుడు శ్యామసుందరదాస ఇట్లు వ్రాయుచున్నాడు — \"ఏ వ్యక్తికయిననూ బృహజ్జాతకము, ప్రశ్న మార్గము — ఈ రెండు గ్రంథములు కంఠస్థము లేకున్నచో అతనిని జ్యోతిష్య పండితుడు అని పెద్దలు పరిగణింప జాలరు. BPHS కంఠస్థము కావలెనని నియమము లేదు\".",
        "ఈ తాత్పర్యము ఏమనగా — **ప్రామాణికత పొందిన నిజమైన మూలగ్రంథములు ఇవి అయిదు; BPHS యొక్క స్థానము ఇది ఆధునిక పరిస్థితులలో పెరిగినది**."
      ],
      content_en: [
        "In traditional Sanskrit institutions — Sampurnanand Sanskrit University (Varanasi), Banaras Hindu University, the Tirumala Tirupati Devasthanam Sanskrit Vidyāpīṭha — five foundational texts are recognized as the \"Five Pillars of Jyotiṣa\":",
        "**1. Br̥hat Jātaka** by Varāhamihira (c. 550 CE)",
        "**2. Sārāvalī** by Kalyāṇavarmā (c. 7th–8th century CE)",
        "**3. Phaladīpikā** by Mantreśvara (c. 15th century CE)",
        "**4. Sarvārtha Cintāmaṇi** by Veṅkaṭeśa Daivajña (c. 16th century CE)",
        "**5. Jātaka Pārijāta** by Vaidyanātha Dīkṣita (c. 16th century CE)",
        "A critical observation: **BPHS is NOT among these Five Pillars**. The fame of BPHS as \"the supreme authoritative text of Vedic astrology\" began only after R. Santhanam's English translation was published by Ranjan Publications, Bangalore in 1984. Before that, traditional pandits never counted BPHS as a foundational text.",
        "The renowned Sanskrit scholar Shyamasundara Dasa writes: \"Without having memorized Br̥hat Jātaka and Praśna Mārga, no one would be considered a scholar of jyotiṣa by the elders. There was never a rule that BPHS must be memorized\".",
        "**The implication is clear: the five truly canonical jyotiṣa texts are these; BPHS's elevated status is a modern phenomenon.**"
      ],
      status: "draft"
    },

    /* ────────────────────────────────────────────────────────── */
    {
      id: "bphs-special-case",
      icon: "📜",
      title_te: "BPHS — ఒక విశేష సందర్భము (అనేక సందేహములు)",
      title_en: "BPHS — A Special Case (Multiple Concerns)",
      content_te: [
        "మన అనువర్తనములో ప్రస్తుతము BPHS ను ప్రధాన మూలముగా వాడుచున్నాము. కానీ ఈ గ్రంథముపై విద్వత్సమాజములో అనేక గంభీర సందేహములు కలవు. ఆ సందేహములను పారదర్శకముగా వెల్లడించుట మన శాస్త్రీయ బాధ్యత.",
        "**క్రీ.శ. 10వ శతాబ్దము — మూల గ్రంథ లోపము:** మహా వ్యాఖ్యాత భట్టోత్పలాచార్యులు (కాశ్మీర దేశము, క్రీ.శ. ~950) వ్రాహమిహిరుని బృహజ్జాతకమునకు రచించిన వ్యాఖ్యలో ఇట్లు పేర్కొనుచున్నారు — \"నాకు పరాశర సంహిత లభ్యమైనది, కానీ పరాశర హోరా ఎక్కడను దొరకలేదు\". అనగా క్రీ.శ. 10వ శతాబ్దము నాటికే BPHS యొక్క మూల హస్తలిఖిత ప్రతి విలుప్తమైనదని స్పష్టమగుచున్నది.",
        "**క్రీ.శ. 1946 — ఆధునిక పునర్నిర్మాణము:** పండిత సీతారాం ఝా (సంపూర్ణానంద సంస్కృత విశ్వవిద్యాలయము, వారణాసి) పండిత జీవనాథ ఝా ద్వారా ఒక పాండులిపిని పొంది, BPHS యొక్క మొదటి ఆధునిక ముద్రణ చేసిరి. వారు తమ స్వంత పీఠికలో ఇట్లు **స్వయముగా అంగీకరించిరి** — \"నేను సంహితా శాస్త్రముల నుండి అనేక అధ్యాయములను ఈ గ్రంథములో చేర్చితిని (హోరా శాస్త్ర సంబంధితమైనవి కావు); కాగితపు అలభ్యత వలన మూల ప్రతిలోని అనేక శ్లోకములను తొలగించితిని\". ఈ స్వీకారము గంభీరమైన శాస్త్ర-సంశయమునకు ఆధారము.",
        "**క్రీ.శ. 1984 — ప్రపంచ ప్రసిద్ధి:** R. సంతానం సీతారాం ఝా యొక్క 1946 పునర్నిర్మాణ ముద్రణ ఆధారముగా ఆంగ్ల అనువాదము రచించి, రంజన్ ప్రకాశన సంస్థ (బెంగళూరు) ద్వారా ప్రకటించిరి. ఈ ఆంగ్ల అనువాదమే BPHS ను అంతర్జాతీయ స్థాయిలో \"వేద జ్యోతిష్య సర్వస్వము\" గా ప్రసిద్ధి గావించినది.",
        "**ముద్రణలవారీ పాఠభేదములు** — ప్రస్తుతము లభించు ముఖ్య సంస్కరణలు ఇవి:",
        "• **వేంకటేశ్వర ముద్రణాలయ సంస్కరణ** (బొంబాయి, ఖేంరాజ్ ముద్రణ సంప్రదాయము) — 71 అధ్యాయములు, 5,781 శ్లోకములు. విద్వాంసులలో అత్యంత ప్రామాణికముగా గణింపబడునది.",
        "• **సీతారాం ఝా సంస్కరణ** (వారణాసి, 1946) — 97 అధ్యాయములు, 4,001 శ్లోకములు. వేంకటేశ్వర సంస్కరణలోని సగము శ్లోకములు తొలగింపబడి, వేరువేరు సంహితా శాస్త్రముల నుండి చాలా అధ్యాయములు చేర్చబడినవి.",
        "• **సంతానం ఆంగ్ల అనువాదము** (1984) — సీతారాం ఝా సంస్కరణ ఆధారితము.",
        "• **మోహన్ పబ్లికేషన్స్ తెలుగు** (శ్రీ మధురకృష్ణమూర్తి శాస్త్రి, 4 భాగములు) — దక్షిణ భారత తెలుగు పండిత పరంపర, తాత్పర్య సహితము.",
        "• **గొల్లపూడి వీరస్వామి సన్స్ తెలుగు** (కంబంపాటి రామగోపాలకృష్ణమూర్తి, 720 పుటలు, ఏకభాగము) — మరియొక తెలుగు సంస్కరణ.",
        "మూల పరాశర హోరా శాస్త్రమునకు సుమారు 11,000 శ్లోకములు ఉండెనని గ్రంథ-ప్రమాణములచే నిర్ధారితము. ప్రస్తుతము లభించు అతి పెద్ద సంస్కరణలో కేవలము 5,781 శ్లోకములు మాత్రమే కలవు. **సగము కంటెను ఎక్కువ భాగము శాశ్వతముగా విలుప్తమైనది** — ఇది శోచనీయమైన నిజము."
      ],
      content_en: [
        "Our application currently uses BPHS as its primary source. But the scholarly community has raised serious concerns about this text. It is our scientific duty to disclose these concerns transparently.",
        "**~10th century CE — loss of the original:** The great commentator Bhaṭṭotpalācārya (Kashmir, ~950 CE), in his commentary on Varāhamihira's Br̥hat Jātaka, recorded: \"I obtained Parāśara Saṁhitā, but Parāśara Hora I could not find anywhere\". This makes clear that the original manuscript of BPHS was already lost by the 10th century CE.",
        "**1946 CE — modern reconstruction:** Pt. Sitaram Jha (Sampurnanand Sanskrit University, Varanasi), having received a manuscript via Pt. Jeevanath Jha, produced the first modern printed edition of BPHS. In his own preface he **personally admitted**: \"I have inserted many chapters into this work from Saṁhitā śāstras (which are not Hora-related); due to scarcity of paper I have removed many verses from the original manuscript\". This admission is the basis of serious textual concerns.",
        "**1984 CE — global fame:** R. Santhanam, working from Sitaram Jha's 1946 reconstructed edition, produced an English translation published by Ranjan Publications, Bangalore. This English translation made BPHS internationally famous as \"the encyclopedia of Vedic astrology\".",
        "**Inter-edition variant readings** — the principal recensions currently available are:",
        "• **Veṅkaṭeśvara Press edition** (Bombay, Khemraj publication tradition) — 71 chapters, 5,781 verses. Considered most authoritative by scholars.",
        "• **Sitaram Jha edition** (Varanasi, 1946) — 97 chapters, 4,001 verses. Half of Veṅkaṭeśvara's verses removed; many chapters added from various Saṁhitā śāstras.",
        "• **Santhanam English translation** (1984) — based on Sitaram Jha edition.",
        "• **Mohan Publications Telugu** (Sri Madhura Krishnamurthy Sastry, 4 volumes) — South Indian Telugu pandita tradition with prose commentary.",
        "• **Gollapudi Veeraswamy Sons Telugu** (Kambhampati Ramagopalakrishnamurthy, 720 pages, single volume) — another Telugu recension.",
        "Internal verse evidence within BPHS itself indicates the original work had ~11,000 verses. The largest surviving recension today contains only 5,781. **More than half is permanently lost** — a deeply unfortunate truth."
      ],
      status: "draft"
    },

    /* ────────────────────────────────────────────────────────── */
    {
      id: "your-book-vs-pdf",
      icon: "📚",
      title_te: "ముద్రిత పుస్తకము vs డిజిటల్ PDF — పాఠభేదము ఎందుకు?",
      title_en: "Printed Book vs Digital PDF — Why the Variant Readings?",
      content_te: [
        "ఈ అనువర్తన నిర్మాణములో మనకు ఎదురైన ముఖ్య సమస్య ఇది — వినియోగదారు సరఫరా చేసిన ముద్రిత తెలుగు పుస్తకము (శ్రీ మధుర కృష్ణమూర్తి శాస్త్రి సంపాదిత, మోహన్ పబ్లికేషన్స్), మరియు అంతర్జాలములో లభించిన PDF (అదిత్య 2011, \"వేమూరి దుధానాగేశ్వర రావు స్మృతి గ్రంథావళి\") — ఈ రెండు మూలములలో **మొదటి శ్లోకమే పూర్తిగా భిన్నము**.",
        "**మీ ముద్రిత పుస్తకములోని శ్లోకము 1.1 —**",
        "\"అథైకదా **సుఖాసీనం పార్శ్వే హిమవతః శుభే** । మహర్షి ప్రవరం పూజ్యం పరాశరం **ఉదారధీః** ॥ 1 ॥\"",
        "(తాత్పర్యము: \"పూర్వమొకప్పుడు, శుభకరమైన హిమవత్‌ పర్వత ప్రాంతములో సుఖాసనుడై కూర్చొనియున్న పూజ్యుడైన మహర్షి శ్రేష్ఠ పరాశరుని సమీపించి, ఉదారబుద్ధి కల [మైత్రేయుడు]...\")",
        "**డిజిటల్ PDF లోని శ్లోకము 1.1 —**",
        "\"అథైకదా **మునిశ్రేష్ఠం త్రికాలజ్ఞం పరాశరమ్‌** । పప్రచ్ఛేపేత్య మైత్రేయః ప్రణిపత్య కృతాంజలిః ॥ 1 ॥\"",
        "(తాత్పర్యము: \"పూర్వమొకప్పుడు, త్రికాలజ్ఞానము గల మునిశ్రేష్ఠుడైన పరాశరుని సమీపించి, మైత్రేయుడు ప్రణామము చేసి, చేతులు జోడించి ప్రశ్నించెను.\")",
        "**ఇది దోషము కాదు — ఇవి రెండు భిన్న సంస్కరణలు (recensions)**. మీ పుస్తకము దీర్ఘ సంస్కరణ (వెంకటేశ్వర పారంపర్యమునకు దగ్గర) అనుసరించును. ఇందులో పూర్వ-ప్రకరణములో హిమవత్‌ పర్వత దృశ్యవర్ణన ఉన్నది, మైత్రేయుని ఉదారబుద్ధి స్తుతించబడినది. PDF సంక్షిప్త సంస్కరణ (సీతారాం ఝా పారంపర్యము) అనుసరించును — సరళమైన మైత్రేయ-పరాశర సంభాషణతో నేరుగా ప్రారంభము.",
        "**మీ ముద్రిత పుస్తకము ఏ పారంపర్యమునకు చెందినది** — దక్షిణ భారత తెలుగు పండిత పరంపర. ఇది మోహన్ పబ్లికేషన్స్ (రాజమహేంద్రవరము) లేదా గొల్లపూడి వీరస్వామి సన్స్ (హైదరాబాద్) వంటి ప్రతిష్ఠాత్మక సంస్థల ద్వారా శాస్త్రీయముగా సంపాదింపబడిన ముద్రణ. తాత్పర్యము-సహితముగా 720+ పుటలు.",
        "**PDF ఏ పారంపర్యమునకు చెందినది** — ఉత్తర భారత సీతారాం ఝా పారంపర్యము (క్రీ.శ. 1946 సంస్కృత-మాత్రము సంస్కరణ) యొక్క డిజిటల్ లిప్యంతరీకరణము. తెలుగు తాత్పర్యము లేదు — కేవలము సంస్కృత శ్లోకములు తెలుగు లిపిలో వ్రాయబడినవి.",
        "**\"సరి\" ఏది అని నిర్ధారణ చేయుట సాధ్యమా?** — లేదు. మూల పరాశర హోరా శాస్త్రము నశించిన గ్రంథము. ప్రస్తుతము లభించు ప్రతులలో ఏది మూలమునకు దగ్గర అని ఖచ్చితముగా నిర్ధారించుట సాధ్యము కాదు. కానీ **మీ పుస్తకమునకు మన అనువర్తనమునకు ఈ ప్రయోజనములు కలవు** —",
        "1. ముద్రిత ప్రకాశన (నిర్దిష్ట సంపాదకుడు, నిర్దిష్ట ప్రకాశకుడు పేర్కొనబడిన గ్రంథము) — ఉల్లేఖనకు సులభము.",
        "2. తెలుగు తాత్పర్యము (మన ప్రేక్షకులైన తెలుగు భాషీయ కుటుంబములకు, పండితులకు అత్యావశ్యకము).",
        "3. దక్షిణ భారత పండిత పరంపర (తెలుగు వాడుకరులకు సహజముగా పరిచితమైన పారంపర్యము).",
        "4. ఉల్లేఖన చేయవలసినప్పుడు పుట సంఖ్య, శ్లోక సంఖ్యల ద్వారా ఖచ్చితముగా చూపవచ్చును."
      ],
      content_en: [
        "A central problem we have encountered in building this application: the printed Telugu book provided by the user (edited by Sri Madhura Krishnamurthy Sastry, Mohan Publications), and the PDF freely available online (Aditya 2011, \"In Memory of Vemuri Dudhanāgēśvara Rao Granthāvalī\") — these two sources differ **completely from verse 1**.",
        "**Your printed book — verse 1.1:**",
        "\"Athaikadā **sukhāsīnam pārśve himavataḥ śubhe** | maharṣi-pravaram pūjyam parāśaram **udāradhīḥ** ॥ 1 ॥\"",
        "(Meaning: \"Once upon a time, [seeing] the comfortably-seated, foremost-of-r̥ṣis, worshipful Parāśara on the auspicious slope of the Himalayas, [Maitreya] of magnanimous mind...\")",
        "**Digital PDF — verse 1.1:**",
        "\"Athaikadā **muniśreṣṭham trikālajñam parāśaram** | papracchopetya maitreyaḥ praṇipatya kr̥tāñjaliḥ ॥ 1 ॥\"",
        "(Meaning: \"Once upon a time, having approached Parāśara — the foremost of munis, the knower of the three times — Maitreya, having prostrated, with folded hands, asked.\")",
        "**This is not an error — these are two different recensions**. Your book follows the longer recension (closer to the Veṅkaṭeśvara tradition), with the Himavat scene-setting and Maitreya's magnanimous mind praised at the start. The PDF follows the shorter recension (Sitaram Jha tradition) — beginning directly with a simple Maitreya-Parāśara dialog.",
        "**Tradition of your printed book**: South Indian Telugu pandita tradition. Published by reputable institutions like Mohan Publications (Rajahmundry) or Gollapudi Veeraswamy Sons (Hyderabad) in scholarly editions, complete with prose commentary, 720+ pages.",
        "**Tradition of the PDF**: Northern Sitaram Jha tradition (1946 Sanskrit-only recension), digitally transliterated to Telugu script. No Telugu commentary — just the Sanskrit verses written in Telugu letters.",
        "**Can we determine which is \"correct\"?** — No. The original Parāśara Hora is a lost text. We cannot definitively establish which surviving recension is closest to the original. But **your book has these advantages for our application**:",
        "1. Published edition (specific named editor, specific named publisher) — easy to cite.",
        "2. Telugu prose commentary (essential for our Telugu-speaking family and pandita audiences).",
        "3. South Indian pandita tradition (the lineage naturally familiar to Telugu users).",
        "4. Citation by exact page number and verse number is possible."
      ],
      status: "draft"
    },

    /* ────────────────────────────────────────────────────────── */
    {
      id: "authentic-texts",
      icon: "📜",
      title_te: "ప్రామాణిక మూలగ్రంథములు — హస్తలిఖిత ప్రతుల వివరములు",
      title_en: "Authentic Source Texts — With Manuscript Provenance",
      content_te: [
        "క్రింది గ్రంథములకు **ప్రాచీన హస్తలిఖిత ప్రతులు** (manuscripts) ప్రపంచ ప్రఖ్యాత గ్రంథాలయములలో సురక్షితముగా సంరక్షింపబడుచున్నవి. ఈ గ్రంథములు BPHS కంటెను ఎంతో ఎక్కువ ప్రామాణికత కలిగియున్నవి —",
        "**🥇 బృహజ్జాతకము** — వరాహమిహిరాచార్యులు (క్రీ.శ. ~550)",
        "• **క్రీ.శ. 1399లో నేపాల దేశములో నేపాలాక్షర లిపిలో** నకలు తీయబడిన మూల హస్తలిఖిత ప్రతి కేంబ్రిడ్జ్ విశ్వవిద్యాలయ గ్రంథాలయములో (Cambridge University Library, MS Add.1707) సురక్షితముగా ఉన్నది.",
        "• క్రీ.శ. 10వ శతాబ్దపు మహా వ్యాఖ్యాత భట్టోత్పలాచార్యుని వ్యాఖ్యా-సహితముగా అవిచ్ఛిన్న పారంపర్యముతో మనకు లభించినది.",
        "• 28 అధ్యాయములు, సుమారు 407 శ్లోకములు. సంక్షిప్త కానీ సాంద్ర-విషయ గ్రంథము.",
        "**🥇 బృహత్సంహిత** — వరాహమిహిరాచార్యులు",
        "• **క్రీ.శ. 13వ శతాబ్దపు** హస్తలిఖిత ప్రతి (ప్రతిమాలక్షణ అధ్యాయము) కేంబ్రిడ్జ్ గ్రంథాలయములో (MS Add.1706.2) ఉన్నది.",
        "• ఖగోళ శాస్త్రము, జ్యోతిష్యము, గ్రహణ గణితము, వర్షా-ప్రవచనము, రత్న పరీక్ష, వాస్తు, శిల్పము — 100కు పైగా విషయములపై అధ్యాయములు.",
        "**🥈 సారావళి** — కల్యాణవర్మ (క్రీ.శ. 7-8 శతాబ్దము)",
        "• \"పంచరత్నము\"లలో ఒకటి. BPHS కంటెను ప్రామాణికమైనదని సంప్రదాయము.",
        "• ప్రాచీన హస్తలిఖిత ప్రతులు అనేక భారత గ్రంథాలయములలో లభ్యము.",
        "**🥈 హోరా సారము** — పృథుయశుడు (వరాహమిహిరుని పుత్రుడు, క్రీ.శ. ~575)",
        "• మధ్యయుగపు వ్యాఖ్యాతలందరూ ఈ గ్రంథమును ఉద్ధరించిరి.",
        "• మూల హస్తలిఖిత ప్రతులు అనేక గ్రంథాలయములలో సురక్షితముగా.",
        "**🥈 పంచసిద్ధాంతిక** — వరాహమిహిరాచార్యులు",
        "• ఖగోళ సిద్ధాంత గ్రంథము — G. Thibaut (క్రీ.శ. 1889) ద్వారా శాస్త్రీయ విమర్శనాత్మక సంస్కరణ ముద్రణ.",
        "**🥈 ఫలదీపిక** — మంత్రేశ్వరుడు (క్రీ.శ. 15వ శతాబ్దము)",
        "• ఆధునిక విమర్శనాత్మక సంస్కరణలు అందుబాటులో ఉన్నవి.",
        "• హస్తలిఖిత ప్రతులు సమృద్ధిగా లభ్యము.",
        "**🥈 జాతక పారిజాతము** — వైద్యనాథ దీక్షితులు (క్రీ.శ. 16వ శతాబ్దము)",
        "• నేటికీ ప్రామాణిక సూచిక గ్రంథముగా వాడకము.",
        "**🥈 సర్వార్థ చింతామణి** — వేంకటేశ దైవజ్ఞుడు (క్రీ.శ. 16వ శతాబ్దము)",
        "• ఉత్కృష్ట హస్తలిఖిత ప్రతి సంప్రదాయము కల గ్రంథము."
      ],
      content_en: [
        "The following texts have **ancient manuscripts** safely preserved in renowned world libraries. These texts possess far greater authenticity than BPHS —",
        "**🥇 Br̥hat Jātaka** — by Varāhamihirācārya (c. 550 CE)",
        "• A **1399 CE manuscript copied in Nepal in Nepalākṣara script** is preserved at Cambridge University Library (MS Add.1707).",
        "• Comes down to us with the unbroken tradition of the great 10th-century commentator Bhaṭṭotpalācārya's commentary.",
        "• 28 chapters, approximately 407 verses. Concise but content-dense.",
        "**🥇 Br̥hat Saṁhitā** — by Varāhamihirācārya",
        "• A **13th century** manuscript (the Pratimā-lakṣaṇa chapter) is at Cambridge Library (MS Add.1706.2).",
        "• 100+ chapters covering astronomy, astrology, eclipse-mathematics, rainfall prediction, gem testing, vāstu, sculpture.",
        "**🥈 Sārāvalī** — by Kalyāṇavarmā (c. 7th–8th century CE)",
        "• One of the \"Five Pillars\". Considered more authoritative than BPHS by tradition.",
        "• Pre-modern manuscripts available in multiple Indian libraries.",
        "**🥈 Hora Sāra** — by Pr̥thuyaśas (son of Varāhamihira, c. 575 CE)",
        "• Quoted by all medieval commentators.",
        "• Source manuscripts safely preserved in multiple libraries.",
        "**🥈 Pañcasiddhāntikā** — by Varāhamihirācārya",
        "• Astronomical siddhānta text — scholarly critical edition published by G. Thibaut (1889 CE).",
        "**🥈 Phaladīpikā** — by Mantreśvara (c. 15th century CE)",
        "• Modern critical editions are available.",
        "• Manuscripts plentiful.",
        "**🥈 Jātaka Pārijāta** — by Vaidyanātha Dīkṣita (c. 16th century CE)",
        "• Used as a standard reference text even today.",
        "**🥈 Sarvārtha Cintāmaṇi** — by Veṅkaṭeśa Daivajña (c. 16th century CE)",
        "• Excellent manuscript tradition."
      ],
      status: "draft"
    },

    /* ────────────────────────────────────────────────────────── */
    {
      id: "specialized-texts",
      icon: "🎯",
      title_te: "విశేష ప్రయోజనములకై ప్రత్యేక గ్రంథములు",
      title_en: "Specialized Texts for Specific Purposes",
      content_te: [
        "ప్రతి జ్యోతిష్య విభాగమునకు దాని యొక్క ప్రత్యేక ప్రామాణిక మూలగ్రంథము కలదు. విషయము-ఆధారిత ప్రామాణికత కొరకు ఈ గ్రంథములను అనుసరించుట శాస్త్రీయము —",
        "**ప్రశ్న మార్గము** (Praśna Mārga) — కేరళ రచన, క్రీ.శ. 17వ శతాబ్దము",
        "• ప్రశ్న జ్యోతిష్యమునకు (horary astrology) అత్యంత ప్రామాణిక గ్రంథము.",
        "• సంప్రదాయ పండిత శిక్షణలో బృహజ్జాతకము వలెనే తప్పనిసరిగా అధ్యయనము చేయవలసిన గ్రంథము.",
        "• మన అనువర్తనములోని \"ప్రశ్న\" వైశిష్ట్యమునకు ఈ గ్రంథ నియమములు ఆధారము కావచ్చును.",
        "**తాజిక నీలకంఠీ** (Tājika Nīlakaṇṭhī) — నీలకంఠ దైవజ్ఞుడు, క్రీ.శ. 16వ శతాబ్దము",
        "• వార్షిక జాతక గణనకు (varṣaphala) ప్రామాణిక మూలము.",
        "• మన అనువర్తనములోని వర్షఫల చక్ర వైశిష్ట్యమునకు ఈ గ్రంథమును ఉల్లేఖించవచ్చును.",
        "• పారశీక-భారత జ్యోతిష్య పరంపరల సమన్వయము.",
        "**మానసాగరి** (Mānasāgarī) — క్రీ.శ. 13-14వ శతాబ్దము",
        "• ప్రాచీన ఫల జ్యోతిష్య గ్రంథము.",
        "• మూల హస్తలిఖిత ప్రతులు లభ్యము.",
        "**ముహూర్త చింతామణి** (Muhūrta Cintāmaṇi) — రామ దైవజ్ఞుడు, క్రీ.శ. 16వ శతాబ్దము",
        "• ముహూర్త జ్యోతిష్యమునకు (electional astrology) ప్రామాణిక సూచిక గ్రంథము.",
        "• మన అనువర్తనములోని ముహూర్త-నిర్ణాయక వైశిష్ట్యమునకు ఈ గ్రంథమును ఉల్లేఖించవచ్చును.",
        "**జైమిని ఉపదేశ సూత్రములు** (Jaimini Upadeśa Sūtras)",
        "• జైమిని పద్ధతి (అష్టోత్తరీ దశ, చర కారకులు, ఆర్గళ నియమములు మొదలగునవి).",
        "• **కేవలము ఖండ-ఖండ ప్రతులు మాత్రమే లభ్యము** — పూర్తి ప్రతి ఎక్కడను లేదు.",
        "• సూత్ర సంఖ్యలు సంస్కరణముల మధ్య భిన్నముగా కనిపించును."
      ],
      content_en: [
        "Each branch of jyotiṣa has its own dedicated authoritative source text. For subject-specific authority, following these texts is the scientific approach —",
        "**Praśna Mārga** — Kerala composition, 17th century CE",
        "• The most authoritative text for horary astrology (praśna).",
        "• In traditional pandita training, considered as essential to study as Br̥hat Jātaka.",
        "• Our app's \"Praśna\" feature can be backed by the rules of this text.",
        "**Tājika Nīlakaṇṭhī** — by Nīlakaṇṭha Daivajña, 16th century CE",
        "• The standard source for annual chart computation (varṣaphala).",
        "• Our app's varṣaphala chart feature can cite this text.",
        "• A synthesis of the Persian and Indian astrological traditions.",
        "**Mānasāgarī** — c. 13th–14th century CE",
        "• An ancient phala-jyotiṣa text.",
        "• Source manuscripts available.",
        "**Muhūrta Cintāmaṇi** — by Rāma Daivajña, 16th century CE",
        "• The standard reference text for electional astrology (muhūrta).",
        "• Our app's muhūrta-finder feature can cite this text.",
        "**Jaimini Upadeśa Sūtras**",
        "• The Jaimini system (aṣṭottarī daśā, chara kārakas, argala rules, etc.).",
        "• **Only fragmentary copies survive** — no complete copy exists anywhere.",
        "• Sūtra numbering varies between recensions."
      ],
      status: "draft"
    },

    /* ────────────────────────────────────────────────────────── */
    {
      id: "fabricated-texts",
      icon: "⚠️",
      title_te: "హెచ్చరిక — కల్పిత / సందేహాస్పద గ్రంథములు",
      title_en: "Caution — Fabricated or Doubtful Texts",
      content_te: [
        "క్రింది \"గ్రంథములు\" సామాన్య జనబాహుళ్యములో అతి ప్రసిద్ధమైనవి. కానీ వీటికి **ఏ ప్రాచీన హస్తలిఖిత ప్రతి యొక్క సాక్ష్యము లేదు**. ఇవి ఆధునిక కల్పనలు లేదా అత్యంత సందేహాస్పద మూలములు. వినియోగమునకు ముందు జాగరూకత అవసరము —",
        "**భృగు సంహిత** (\"భృగు నాడీ\")",
        "• ప్రతి జీవాత్మ యొక్క వ్యక్తిగత జాతకము ముందుగానే భృగు సంహితలో వ్రాయబడినదని చెప్పెడి సంప్రదాయము.",
        "• **నిజమైన ప్రాచీన హస్తలిఖిత ప్రతి యొక్క సాక్ష్యము ఎక్కడను లేదు**.",
        "• హోషియార్‌పూర్ ఇత్యాది ప్రాంతములలో \"భృగు పండిత\" అని పిలువబడెడి వ్యక్తులు చేయు పఠనములు ఆధునిక సంకలనముల ఆధారితము.",
        "• మన అనువర్తనములో దీనిని ఉపయోగించుట అత్యంత సూక్ష్మముగా చేయవలెను.",
        "**నాడీ గ్రంథములు** (అగస్త్య నాడీ, శివ నాడీ, శుక నాడీ, దేవకేరళము ఇత్యాది)",
        "• తమిళ తాళపత్ర గ్రంథములలో పూర్వ-వర్గీకృత వ్యక్తిగత జాతకములు ఉన్నవని చెప్పెడి సంప్రదాయము.",
        "• ఆధునిక పూర్వము నుండి వచ్చిన నిజమైన మూల ప్రతి యొక్క సాక్ష్యము లేదు; అత్యధిక భాగము ఆధునిక ఉత్పత్తులు.",
        "• ఎక్కువ మంది \"నాడీ రీడర్లు\" నీచ స్థాయి మోసకారులు అని విద్వాంసులు హెచ్చరించుచున్నారు.",
        "**కృష్ణమూర్తి పద్ధతి (KP)** మొదలగు ఆధునిక వ్యవస్థలు",
        "• క్రీ.శ. 20వ శతాబ్దపు కల్పనలు. కానీ \"ప్రాచీన శాస్త్రము\" అని పేర్కొని ప్రచారము చేయబడుచున్నవి.",
        "• ఈ వ్యవస్థలు వ్యావహారికముగా ఉపయోగపడవచ్చును, కానీ \"పరాశర/వరాహమిహిర వంటి ప్రాచీన మహర్షుల మూలము\" అని పేర్కొనుట అసత్యము."
      ],
      content_en: [
        "The following \"texts\" are extremely popular in the public imagination. But they have **no evidence of any ancient manuscript**. They are modern fabrications or sources of highly doubtful provenance. Caution is necessary before using them —",
        "**Bhr̥gu Saṁhitā** (\"Bhr̥gu Nāḍī\")",
        "• Tradition claims that the personal jātaka of every soul has been written in advance in the Bhr̥gu Saṁhitā.",
        "• **No evidence of any genuine ancient manuscript exists anywhere**.",
        "• \"Readings\" given by self-styled \"Bhr̥gu paṇḍitas\" in Hoshiarpur and similar locations are based on modern compilations.",
        "• Should be used with extreme caution in our application.",
        "**Nāḍī Granthas** (Agastya Nāḍī, Śiva Nāḍī, Śuka Nāḍī, Devakeralam, etc.)",
        "• Tradition claims that pre-classified individual horoscopes exist on Tamil palm-leaf manuscripts.",
        "• No evidence of genuine pre-modern source manuscripts; the vast majority are modern productions.",
        "• Scholars warn that most \"Nāḍī readers\" are low-grade fraudsters.",
        "**Krishnamurti Paddhati (KP)** and similar modern systems",
        "• 20th-century inventions, but marketed as \"ancient śāstra\".",
        "• These systems may be practically useful, but it is dishonest to claim them as having \"ancient maharṣi sources like Parāśara/Varāhamihira\"."
      ],
      status: "draft"
    },

    /* ────────────────────────────────────────────────────────── */
    {
      id: "app-recommendation",
      icon: "💡",
      title_te: "మన అనువర్తనమునకై మూల-అనుసరణ క్రమము",
      title_en: "Recommended Source Hierarchy for Our Application",
      content_te: [
        "శాస్త్రీయ ఉల్లేఖన ప్రామాణికత సాధించుటకు, ఈ క్రింది వరుసలో మూల గ్రంథములను అనుసరించుట ఉత్తమము —",
        "**ప్రథమ ప్రాధాన్యత: బృహజ్జాతకము** (వరాహమిహిర, క్రీ.శ. ~550)",
        "• 28 అధ్యాయములు, నిర్వహణకు సాధ్యమైన పరిమాణము.",
        "• క్రీ.శ. 1399 నేపాల హస్తలిఖిత ప్రతి కేంబ్రిడ్జ్‌లో సురక్షితముగా ఉన్నది.",
        "• ముఖ్య జాతక ఫలములకు ఇదియే ఆధార గ్రంథము కావలెను.",
        "**ద్వితీయ ప్రాధాన్యత: సారావళి** (కల్యాణవర్మ, క్రీ.శ. 8వ శతాబ్దము)",
        "• గ్రహ-భావ స్థాన ఫలములకు (మన అనువర్తనములోని `BPHS_RULES` యొక్క కేంద్ర-కంటెంట్).",
        "**తృతీయ ప్రాధాన్యత: ఫలదీపిక** (మంత్రేశ్వరుడు, క్రీ.శ. 15వ శతాబ్దము)",
        "• సాధారణ ఫలములకు. సులభమైన తెలుగు అనువాదములు అందుబాటులో ఉన్నవి.",
        "**చతుర్థ ప్రాధాన్యత: BPHS** (వినియోగదారు పుస్తకము నుండి — మోహన్ పబ్లికేషన్స్ సంస్కరణ)",
        "• ఆధునిక ప్రామాణిక ముద్రణ సంస్కరణలోని శ్లోకములను మీ పుస్తకము నుండి సేకరించవలెను.",
        "• \"ఆధునిక పునర్నిర్మాణ సంస్కరణ — అనేక ముద్రణలలో పాఠభేదములు ఉన్నవి\" అని ట్యాగ్ చేయవలెను.",
        "**విశేష ప్రయోజనములకై విశేష గ్రంథములు —**",
        "• ప్రశ్న జ్యోతిష్యము → ప్రశ్న మార్గము",
        "• వార్షిక చక్రము → తాజిక నీలకంఠీ",
        "• ముహూర్త నిర్ణయము → ముహూర్త చింతామణి",
        "**ప్రతి శ్లోకము ఈ విధముగా ఉల్లేఖించవలెను —**",
        "\"సూర్యుడు 1వ భావములో ఉన్నచో: రాజలక్షణములు, నాయకత్వ గుణములు. — **బృహజ్జాతకము 11.1, వరాహమిహిర క్రీ.శ. ~550** (కేంబ్రిడ్జ్ MS Add.1707, క్రీ.శ. 1399)\"",
        "ఇది **ప్రామాణిక శాస్త్ర-విమర్శనా ఉల్లేఖనా పద్ధతి** — ప్రసిద్ధ యాప్‌లు చూపెడు \"BPHS Ch.22 śl.1, source: anonymous PDF\" అను సూచనకు పూర్తి భిన్నము.",
        "మన అనువర్తనము ఆంధ్ర-తెలంగాణ ప్రాంతములోని **మొదటి తెలుగు జ్యోతిష్య అనువర్తనము** అగును, ప్రతి అంశ-ప్రకటనను దాని నిజమైన శాస్త్రీయ మూలమునకు ఆధారపరిచి చూపించును. కేవలము BPHS ఉల్లేఖనలు మాత్రముగా పరిమితము కాదు.",
        "ఇది ఆస్ట్రోసేజ్ మరియు సమస్త వాణిజ్య జ్యోతిష్య సాఫ్ట్‌వేర్ క్షేత్రము నుండి అర్థవంతమైన భేదము — శాస్త్రీయ ప్రామాణికత కల ఉత్పత్తి."
      ],
      content_en: [
        "To achieve scientific citation-grade authority, follow this priority order for source texts —",
        "**Primary priority: Br̥hat Jātaka** (Varāhamihira, c. 550 CE)",
        "• 28 chapters, manageable scope.",
        "• 1399 CE Nepalese manuscript safely preserved at Cambridge.",
        "• Should be the foundation for core natal predictions.",
        "**Secondary priority: Sārāvalī** (Kalyāṇavarmā, c. 8th century CE)",
        "• For graha-bhāva placement results (the central content of `BPHS_RULES` in our app).",
        "**Tertiary priority: Phaladīpikā** (Mantreśvara, c. 15th century CE)",
        "• For general predictions. Easy Telugu translations available.",
        "**Quaternary priority: BPHS** (from user's book — Mohan Publications recension)",
        "• Verses to be sourced from your book in modern published recension.",
        "• Should be tagged \"modern reconstruction recension — variant readings exist between editions\".",
        "**Specialized texts for specialized purposes —**",
        "• Praśna astrology → Praśna Mārga",
        "• Annual chart → Tājika Nīlakaṇṭhī",
        "• Muhūrta determination → Muhūrta Cintāmaṇi",
        "**Each verse should be cited like this —**",
        "\"Sun in 1st house: regal features, leadership qualities. — **Br̥hat Jātaka 11.1, Varāhamihira c.550 CE** (Cambridge MS Add.1707, 1399 CE)\"",
        "This is the **gold-standard scholarly textual-critical citation method** — completely different from the \"BPHS Ch.22 śl.1, source: anonymous PDF\" lazy citations that popular apps display.",
        "Our application would become **the first Telugu astrology app in the Andhra-Telangana region** to ground every predictive statement in its actual scholarly source. Not limited to mere BPHS citations.",
        "This is a meaningful differentiator from AstroSage and the entire commercial astrology software space — a product with scholarly authority."
      ],
      status: "draft"
    },

    /* ────────────────────────────────────────────────────────── */
    {
      id: "scholarly-sources",
      icon: "🎓",
      title_te: "పరిశోధన ఆధారములు — విద్వాంసులు, మూల వనరులు",
      title_en: "Research Sources — Scholars and Authoritative Works",
      content_te: [
        "ఈ పరిశోధనా వ్యాసములు ఈ క్రింది విద్వాంసుల కృతుల ఆధారముగా రచింపబడినవి —",
        "**శ్యామసుందర దాస** (అమెరికన్ సంస్కృత విద్వాంసుడు, వేదాస్త్రాలజర్)",
        "• \"On the Authenticity of the (Modern) Br̥hat Parāśara Hora Śāstra\" — Astrological Magazine, బెంగళూరు, 2009 జులై-ఆగస్ట్ సంచికలు.",
        "• ప్రాచీన జ్యోతిష్య గ్రంథముల ఉల్లేఖన పారంపర్యత పరిశోధన.",
        "**పండిత వినయ ఝా** (సంపూర్ణానంద సంస్కృత విశ్వవిద్యాలయపు సంస్కృత పండితుడు, వారణాసి)",
        "• BPHS సంస్కరణముల తులనాత్మక అధ్యయనము (వేంకటేశ్వర vs సీతారాం ఝా vs సంతానం).",
        "• 2010 — ఇండియాదివైన్ వేదాంత ఫోరమ్‌లో ప్రచురితము.",
        "**ప్రొఫెసర్ డేవిడ్ పిన్‌గ్రీ** (కొలంబియా-బ్రౌన్ విశ్వవిద్యాలయపు సంస్కృత విద్వాంసుడు)",
        "• \"Jyotiḥśāstra\" (క్రీ.శ. 1981) — సంస్కృత హస్తలిపి సర్వే గ్రంథము.",
        "• \"Census of the Exact Sciences in Sanskrit\" — హస్తలిఖిత ప్రతుల ప్రామాణిక సూచిక.",
        "**కేంబ్రిడ్జ్ యూనివర్సిటీ లైబ్రరీ — Sanskrit Manuscripts Collection**",
        "• MS Add.1706, 1707, 2106 — బృహత్సంహిత, బృహజ్జాతక హస్తలిఖిత ప్రతులు.",
        "• Bodleian (ఆక్స్‌ఫర్డ్) — Chandra Shum Shere Collection.",
        "**B. V. రామన్** (Astrological Magazine, బెంగళూరు సంపాదకుడు)",
        "• సంప్రదాయ \"పంచరత్నము\" శిక్షణా క్రమమును స్థాపించిరి.",
        "• ప్రశ్న మార్గము వంటి ప్రామాణిక గ్రంథముల ఆంగ్ల అనువాదము.",
        "**V. సుబ్రహ్మణ్య శాస్త్రి**",
        "• బృహజ్జాతకము (క్రీ.శ. 1929 ప్రామాణిక సంస్కరణ).",
        "• సారావళి, ఫలదీపిక, జాతక పారిజాతము ఇత్యాది ఎన్నో గ్రంథముల అనువాదకుడు."
      ],
      content_en: [
        "These research notes are based on the works of the following scholars —",
        "**Shyamasundara Dasa** (American Sanskrit scholar, Vedic Astrologer)",
        "• \"On the Authenticity of the (Modern) Br̥hat Parāśara Hora Śāstra\" — Astrological Magazine, Bangalore, July-August 2009 issues.",
        "• Research on the citation traditions of ancient jyotiṣa texts.",
        "**Pt. Vinay Jha** (Sanskrit pandita at Sampurnanand Sanskrit University, Varanasi)",
        "• Comparative study of BPHS recensions (Veṅkaṭeśvara vs Sitaram Jha vs Santhanam).",
        "• 2010 — published on the IndiaDivine Vedanta Forum.",
        "**Professor David Pingree** (Sanskrit scholar, Columbia & Brown universities)",
        "• \"Jyotiḥśāstra\" (1981) — Sanskrit manuscript survey work.",
        "• \"Census of the Exact Sciences in Sanskrit\" — standard catalog of manuscripts.",
        "**Cambridge University Library — Sanskrit Manuscripts Collection**",
        "• MS Add.1706, 1707, 2106 — Br̥hat Saṁhitā and Br̥hat Jātaka manuscripts.",
        "• Bodleian (Oxford) — Chandra Shum Shere Collection.",
        "**B. V. Raman** (editor, Astrological Magazine, Bangalore)",
        "• Established the traditional \"Five Pillars\" training curriculum.",
        "• Translated canonical texts like Praśna Mārga into English.",
        "**V. Subrahmanya Sastri**",
        "• Br̥hat Jātaka (1929 standard scholarly edition).",
        "• Translator of Sārāvalī, Phaladīpikā, Jātaka Pārijāta and many other texts."
      ],
      status: "draft"
    }
  ],

  /* ===== Reference data: classical texts catalog ===== */
  texts: {
    "brihat-jataka": {
      title_te: "బృహజ్జాతకము", title_en: "Br̥hat Jātaka",
      author_te: "వరాహమిహిరాచార్యులు", author_en: "Varāhamihirācārya",
      date: "c. 550 CE",
      chapters: 28, verses: 407,
      manuscript_te: "క్రీ.శ. 1399 నేపాల హస్తలిఖిత ప్రతి, కేంబ్రిడ్జ్ MS Add.1707",
      manuscript_en: "1399 CE Nepalese manuscript, Cambridge MS Add.1707",
      authority: "🥇 highest", recommend_for_te: "ముఖ్య జాతక ఫలములు", recommend_for_en: "Core natal predictions"
    },
    "brihat-samhita": {
      title_te: "బృహత్సంహిత", title_en: "Br̥hat Saṁhitā",
      author_te: "వరాహమిహిరాచార్యులు", author_en: "Varāhamihirācārya",
      date: "c. 550 CE",
      chapters: "100+",
      manuscript_te: "క్రీ.శ. 13వ శతాబ్దము, కేంబ్రిడ్జ్ MS Add.1706.2",
      manuscript_en: "13th century, Cambridge MS Add.1706.2",
      authority: "🥇 highest", recommend_for_te: "ఖగోళము, వాస్తు, రత్న శాస్త్రములు", recommend_for_en: "Astronomy, vāstu, gemology"
    },
    "saravali": {
      title_te: "సారావళి", title_en: "Sārāvalī",
      author_te: "కల్యాణవర్మ", author_en: "Kalyāṇavarmā",
      date: "c. 7th–8th century CE",
      chapters: 55,
      authority: "🥈 high", recommend_for_te: "గ్రహ-భావ స్థాన ఫలములు", recommend_for_en: "Graha-bhāva placement results"
    },
    "phaladipika": {
      title_te: "ఫలదీపిక", title_en: "Phaladīpikā",
      author_te: "మంత్రేశ్వరుడు", author_en: "Mantreśvara",
      date: "c. 15th century CE",
      chapters: 28,
      authority: "🥈 high", recommend_for_te: "సాధారణ ఫలములు", recommend_for_en: "General predictions"
    },
    "sarvartha-cintamani": {
      title_te: "సర్వార్థ చింతామణి", title_en: "Sarvārtha Cintāmaṇi",
      author_te: "వేంకటేశ దైవజ్ఞుడు", author_en: "Veṅkaṭeśa Daivajña",
      date: "c. 16th century CE",
      authority: "🥈 high", recommend_for_te: "విస్తృత ఫలములు", recommend_for_en: "Extended predictions"
    },
    "jataka-parijata": {
      title_te: "జాతక పారిజాతము", title_en: "Jātaka Pārijāta",
      author_te: "వైద్యనాథ దీక్షితులు", author_en: "Vaidyanātha Dīkṣita",
      date: "c. 16th century CE",
      authority: "🥈 high", recommend_for_te: "క్రోడీకృత జాతక సూచిక", recommend_for_en: "Comprehensive jātaka reference"
    },
    "prasna-marga": {
      title_te: "ప్రశ్న మార్గము", title_en: "Praśna Mārga",
      author_te: "కేరళ రచన", author_en: "Kerala composition",
      date: "c. 17th century CE",
      authority: "🥇 highest (for praśna)", recommend_for_te: "ప్రశ్న జ్యోతిష్యము", recommend_for_en: "Horary astrology"
    },
    "tajika-nilakanthi": {
      title_te: "తాజిక నీలకంఠీ", title_en: "Tājika Nīlakaṇṭhī",
      author_te: "నీలకంఠ దైవజ్ఞుడు", author_en: "Nīlakaṇṭha Daivajña",
      date: "c. 16th century CE",
      authority: "🥇 highest (for varṣaphala)", recommend_for_te: "వార్షిక జాతకము", recommend_for_en: "Annual horoscopy"
    },
    "muhurta-cintamani": {
      title_te: "ముహూర్త చింతామణి", title_en: "Muhūrta Cintāmaṇi",
      author_te: "రామ దైవజ్ఞుడు", author_en: "Rāma Daivajña",
      date: "c. 16th century CE",
      authority: "🥇 highest (for muhūrta)", recommend_for_te: "శుభ ముహూర్త నిర్ణయము", recommend_for_en: "Electional astrology"
    },
    "bphs": {
      title_te: "బృహత్‌ పరాశర హోరా శాస్త్రము (BPHS)", title_en: "Br̥hat Parāśara Hora Śāstra (BPHS)",
      author_te: "మహర్షి పరాశర (సంప్రదాయము)", author_en: "Maharṣi Parāśara (traditional)",
      date: "Original lost; modern recension 1946 CE",
      chapters: "varies (71 / 97 / 100)", verses: "varies (4001 / 5781 / 11000+ original)",
      manuscript_te: "ప్రాచీన పూర్ణ ప్రతి లేదు; క్రీ.శ. 10వ శతాబ్దము నాటికే విలుప్తము",
      manuscript_en: "No complete ancient manuscript; lost since 10th century CE",
      authority: "⚠️ disputed", recommend_for_te: "విస్తృత గ్రహ-భావ-దశ ఫలములు (జాగరూకతతో)", recommend_for_en: "Extended graha-bhāva-daśā predictions (with caution)"
    },
    "bhrigu-samhita": {
      title_te: "భృగు సంహిత / భృగు నాడీ", title_en: "Bhr̥gu Saṁhitā / Bhr̥gu Nāḍī",
      author_te: "మహర్షి భృగు (సంప్రదాయము)", author_en: "Maharṣi Bhr̥gu (claimed)",
      date: "Disputed",
      manuscript_te: "నిజమైన ప్రాచీన ప్రతి సాక్ష్యము లేదు",
      manuscript_en: "No genuine ancient manuscript exists",
      authority: "❌ doubtful", recommend_for_te: "ఉపయోగించరాదు", recommend_for_en: "Should not be used"
    },
    "nadi-granthas": {
      title_te: "నాడీ గ్రంథములు (అగస్త్య, శివ, శుక, దేవకేరళము)", title_en: "Nāḍī Granthas (Agastya, Śiva, Śuka, Devakeralam)",
      author_te: "వేరువేరు మహర్షులు (సంప్రదాయము)", author_en: "Various r̥ṣis (claimed)",
      date: "Disputed",
      manuscript_te: "ప్రాచీన మూలము లేదు; ఎక్కువ భాగము ఆధునిక ఉత్పత్తులు",
      manuscript_en: "No pre-modern provenance; mostly modern productions",
      authority: "❌ doubtful", recommend_for_te: "ఉపయోగించరాదు", recommend_for_en: "Should not be used"
    }
  }
};
