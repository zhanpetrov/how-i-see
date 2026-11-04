/* ==========================================================================
   HOW I SEE — Configuration Wiring, Menu, Bilingual (EN / 日本語) & Watch Room
   Reads site settings exclusively from window.SITE (defined in config.js).
   ========================================================================== */

(function () {
  "use strict";

  var cfg = window.SITE || {};
  var STORAGE_KEY = "how-i-see-lang";

  var I18N = {
    en: {
      pageTitle: "HOW I SEE — A film by Zhan Petrov",
      watchPageTitle: "Screening Room — HOW I SEE",
      skip: "Skip to content",
      "nav.trailer": "Trailer",
      "nav.watch": "Watch",
      "nav.vr360": "360\u00b0",
      "nav.film": "The Film",
      "nav.interviews": "Interviews",
      "nav.director": "Director",
      "nav.screenings": "Screenings",
      "nav.press": "Press",
      "nav.credits": "Credits",
      "nav.menu": "Menu",
      "nav.close": "Close",
      "hero.kicker": "Short Documentary",
      "hero.byline": "A film by Zhan Petrov",
      "hero.facts":
        '2025 &middot; <span class="nowrap">15 min</span> &middot; <span class="nowrap">Black &amp; White</span> &middot; English &middot; <span class="nowrap">San Francisco</span>',
      "hero.posterAlt": "HOW I SEE — Official Film Poster",
      "hero.vfRegion": "HOW I SEE official trailer",
      "hero.ctaWatch": "Watch the film",
      "hero.ctaTrailer": "Watch trailer",
      "hero.cta360": "Hyde & Ellis 360\u00b0",
      "vr360.heading": "Hyde & Ellis \u00b7 360\u00b0",
      "vr360.lead":
        "Eight live street cameras at the corner of Hyde & Ellis in San Francisco\u2019s Tenderloin\u2014observed continuously and calibrated into a three-minute 360\u00b0 monochrome sphere.",
      "vr360.regionAria": "Hyde and Ellis 360 degree Tenderloin street player",
      "vr360.canvasAria": "Interactive 360 degree street view \u2014 drag or use arrow keys to look around",
      "vr360.playAria": "Play 3-minute 360 degree Tenderloin observation",
      "vr360.playLabel": "Enter 360\u00b0 \u00b7 03:00",
      "vr360.dragHint": "Drag to look 360\u00b0 \u00b7 Scroll to zoom",
      "vr360.btnPlay": "Play",
      "vr360.btnPause": "Pause",
      "vr360.scrubAria": "Seek 360 video timeline",
      "vr360.btnSoundOn": "Sound: On",
      "vr360.btnSoundOff": "Sound: Muted",
      "vr360.btnRecenter": "0\u00b0 Center",
      "vr360.btnGyro": "Gyro",
      "vr360.btnGyroActive": "Gyro: On",
      "vr360.btnFullscreen": "Fullscreen",
      "vr360.btnYtEmbed": "YouTube 4K Mode",
      "vr360.btnWebgl": "Interactive WebGL 360\u00b0",
      "vr360.camsAria": "Jump to camera perspective",
      "vr360.note":
        "Assembled from real-time nocturnal observation across all eight corner feeds at Hyde and Ellis Streets: midnight walkers crossing beneath the signals at DAIR\u2019S Speed Wash, motorcycles and brake lights streaking down damp asphalt, and a Pacific marine fog bank rolling down Hyde Street into a glowing silver-halide streetlamp halo.",
      "vr360.ytDirectLink": "Watch in 4K 360\u00b0 on YouTube (Unlisted) \u2197",
      "trailer.kicker": "Official Trailer",
      "poster.kicker": "Official Poster",
      "trailer.playAria": "Play official trailer",
      "trailer.playLabel": "Play Trailer",
      "watch.heading": "Watch",
      "watch.supportAria": "Support the film",
      "watch.soon": "Checkout opens soon",
      "watch.opening": "Opening checkout\u2026",
      "watch.error": "Unable to reach checkout. Please try again.",
      "tier.rent.label": "Rent",
      "tier.rent.terms": "48 hours to watch, streaming in HD",
      "tier.buy.label": "Own",
      "tier.buy.terms": "Watch any time, as often as you like",
      "tier.support.label": "Support the film",
      "tier.support.terms": "Pay what you want, any amount from $1. Goes to the next cut and festival fees.",
      "tier.free.label": "Watch free",
      "tier.free.terms": "The full film, streaming in HD. No account, no payment.",
      "film.heading": "The Film",
      "film.logline":
        "Shot in stark black and white on the streets of San Francisco\u2019s Tenderloin, a Ukrainian filmmaker confronts the unsettling visual and human parallels between an American neighborhood left behind and the war tearing through his homeland.",
      "film.p1":
        "Drawn into the Tenderloin through the street-level cinema of his mentor Rob Nilsson, Zhan Petrov walked its blocks and alleys with a camera to listen to people surviving on the margins of one of the wealthiest cities on earth. Interweaving street encounters with reflections alongside Bay Area filmmakers Rob Nilsson and Robert Zagone and Ukrainian war filmmaker Mstyslav Chernov, <em>HOW I SEE</em> holds two landscapes of ruin in a single frame: the sudden destruction of Russian bombardment in Ukraine, and the slow attrition of systemic neglect, displacement, and indifference in San Francisco.",
      "film.p2":
        "The film\u2019s form was forged directly by the realities of making it. During the first night of shooting, Petrov and his crew were attacked on the street and their camera equipment was smashed\u2014yet technicians managed to salvage every frame of footage from the damaged phones. Refusing either to abandon the work or to film from a tourist\u2019s safe remove, Petrov returned to those same blocks alongside a local guide who knew the neighborhood from within, finishing the film at eye level.",
      "film.quote":
        "\u201CMy subject is the slow death of human decency caused by systemic neglect and the predations of unchecked money and power. This is how I see.\u201D",
      "film.quoteCite": "\u2014 Zhan Petrov",
      "interviews.heading": "Street Interviews",
      "interviews.lead":
        "Uncut street encounters recorded across San Francisco\u2019s Tenderloin, transit corridors, and train tracks (41:43)\u2014eleven chapters and thirteen voices on camera, divided by person with full verbatim transcripts.",
      "interviews.iframeTitle": "HOW I SEE \u2014 Full Street Interviews (41:43)",
      "interviews.fullReel": "00:00 \u2013 41:43 \u00b7 Full Uncut Reel",
      "interviews.cuedPrefix": "Now cued:",
      "interviews.watchYt": "Open on YouTube \u2197",
      "interviews.count": "11 Chapters \u00b7 13 On-Camera Voices \u00b7 Click any timestamp to jump in player",
      "interviews.expandAll": "Expand all transcripts",
      "interviews.collapseAll": "Collapse all transcripts",
      "interviews.playChapterAria": "Jump video to ",
      "interviews.readTranscript": "Verbatim transcript",
      "interviews.turnsUnit": "exchanges",
      "interviews.crewTitle": "Interviewing Crew Behind the Camera",
      "interviews.crewBody":
        "<strong>Zhan Petrov</strong> (director &amp; primary interviewer throughout) &middot; <strong>Second Cameraman</strong> (filming handheld second-angle iPhone footage at 06:45&ndash;13:02 &amp; 13:14&ndash;13:21; heard at 18:35) &middot; <strong>Female Co-Interviewer</strong> (asking opening questions on Taylor Street at 18:51&ndash;19:21, confirming take at 27:26, and seen on camera at 39:25&ndash;39:27).",
      "director.heading": "Zhan Petrov",
      "director.p1":
        "Born in Odessa, Ukraine, in 1992 and named by his father after French New Wave director Jean-Luc Godard, Zhan Petrov graduated from the Ukrainian National Marine Academy and served at sea as a second officer on international merchant vessels before coming to the United States away from the war in Ukraine.",
      "director.p2":
        "Based in the San Francisco Bay Area, Petrov works across documentary and experimental cinema as a close collaborator of Cam\u00e9ra d\u2019Or and Sundance Grand Jury Prize winner Rob Nilsson within Nilsson\u2019s improvisational Direct Action method. His films include the single-take four-screen feature <em>Love Funeral</em> (2021) and the feature documentary <em>The Way Things Seem to Be</em>, a portrait of Nilsson\u2019s life and work.",
      "screenings.heading": "Screenings",
      "screenings.meta": "May 7, 2026 \u00b7 San Francisco",
      "screenings.venue": "Tenderloin Museum \u2014 398 Eddy St, San Francisco, CA",
      "screenings.detail":
        "Screened as the opening prelude to Rob Nilsson\u2019s <em>CHALK</em> (1996), followed by a filmmaker discussion. Presented in collaboration with the Tenderloin Museum.",
      "screenings.eventLink": "Event details at Tenderloin Museum \u2197",
      "screenings.inquiries": "Booking & Inquiries:",
      "press.heading": "Press",
      "press.title": "\u201CZhan Petrov: A New Voice in Improv Film from Ukraine\u201D",
      "press.author": "Profile by Doniphan Blair",
      "press.link": "Read article \u2197",
      "credits.heading": "Credits",
      "credits.directorDt": "Director & Writer",
      "credits.directorDd": "Zhan Petrov",
      "credits.producersDt": "Producers",
      "credits.producersDd": "Zhan Petrov, Rob Nilsson",
      "credits.featuringDt": "Featuring",
      "credits.featuringDd": "Rob Nilsson, Mstyslav Chernov, Robert Zagone",
      "credits.locationDt": "Location",
      "credits.locationDd": "Tenderloin, San Francisco, CA",
      "credits.yearDt": "Year",
      "credits.yearDd": "2025",
      "credits.runtimeDt": "Running Time",
      "credits.runtimeDd": "15 minutes",
      "credits.formatDt": "Format",
      "credits.formatDd": "Digital \u00b7 Black & White \u00b7 16:9 \u00b7 English",
      "footer.contact": "Contact",
      "watchRoom.skip": "Skip to player",
      "watchRoom.back": "\u2190 HOW I SEE",
      "watchRoom.support": "Support",
      "watchRoom.vfAria": "HOW I SEE full film player",
      "watchRoom.gateTitle": "Screening Pass Required",
      "watchRoom.gateCopy":
        "After renting or purchasing <em>HOW I SEE</em>, you are brought back here automatically to watch the film.",
      "watchRoom.gateCta": "Rent or Own the Film",
      "watchRoom.download": "Download HD Copy",
      "watchRoom.verifyingTitle": "Verifying Screening Pass",
      "watchRoom.verifyingCopy": "Checking your access token\u2026",
      "watchRoom.expiredTitle": "Access Expired or Invalid",
      "watchRoom.expiredCopy":
        "This screening link could not be verified or its 48-hour rental window has ended. Return to the film page or contact us if you need help with your order.",
      "watchRoom.rentalUntil": "48-hour rental active \u00b7 Until ",
      "watchRoom.permanent": "Permanent access \u00b7 Stream any time",
      "watchRoom.ytOwn": "Thank you. Bookmark this page to watch any time.",
      "watchRoom.ytRent": "Thank you. Bookmark this page \u2014 your rental is for 48 hours.",
      "watchRoom.ytNeutral": "Thank you for watching HOW I SEE. Bookmark this page.",
      "watchRoom.ytFree": "Free screening. If the film stays with you, support it with any amount.",
      "watchRoom.supportCta": "Support the film",
      "watchRoom.ytSupport": "Thank you for supporting HOW I SEE. Your support goes to the next cut and festival fees. Bookmark this page to watch any time."
    },

    ja: {
      pageTitle: "HOW I SEE \u2014 \u30b8\u30e3\u30f3\u30fb\u30da\u30c8\u30ed\u30d5\u76e3\u7763\u4f5c\u54c1",
      watchPageTitle: "\u30b9\u30af\u30ea\u30fc\u30cb\u30f3\u30b0\u30eb\u30fc\u30e0 \u2014 HOW I SEE",
      skip: "\u672c\u6587\u3078\u30b9\u30ad\u30c3\u30d7",
      "nav.trailer": "\u4e88\u544a\u7de8",
      "nav.watch": "\u8996\u8074",
      "nav.vr360": "360\u00b0",
      "nav.film": "\u4f5c\u54c1\u7d39\u4ecb",
      "nav.interviews": "\u8857\u982d\u30a4\u30f3\u30bf\u30d3\u30e5\u30fc",
      "nav.director": "\u76e3\u7763",
      "nav.screenings": "\u4e0a\u6620\u60c5\u5831",
      "nav.press": "\u30d7\u30ec\u30b9",
      "nav.credits": "\u30af\u30ec\u30b8\u30c3\u30c8",
      "nav.menu": "\u30e1\u30cb\u30e5\u30fc",
      "nav.close": "\u9589\u3058\u308b",
      "hero.kicker": "\u77ed\u7de8\u30c9\u30ad\u30e5\u30e1\u30f3\u30bf\u30ea\u30fc",
      "hero.byline": "\u30b8\u30e3\u30f3\u30fb\u30da\u30c8\u30ed\u30d5\u76e3\u7763\u4f5c\u54c1",
      "hero.facts":
        '2025\u5e74 &middot; <span class="nowrap">15\u5206</span> &middot; <span class="nowrap">\u30e2\u30ce\u30af\u30ed</span> &middot; \u82f1\u8a9e &middot; <span class="nowrap">\u30b5\u30f3\u30d5\u30e9\u30f3\u30b7\u30b9\u30b3</span>',
      "hero.posterAlt": "HOW I SEE \u2014 \u516c\u5f0f\u30dd\u30b9\u30bf\u30fc",
      "hero.vfRegion": "HOW I SEE \u516c\u5f0f\u4e88\u544a\u7de8",
      "hero.ctaWatch": "\u672c\u7de8\u3092\u8996\u8074\u3059\u308b",
      "hero.ctaTrailer": "\u4e88\u544a\u7de8\u3092\u89b3\u308b",
      "hero.cta360": "Hyde & Ellis 360\u00b0",
      "vr360.heading": "Hyde & Ellis \u00b7 360\u00b0",
      "vr360.lead":
        "\u30b5\u30f3\u30d5\u30e9\u30f3\u30b7\u30b9\u30b3\u30fb\u30c6\u30f3\u30c0\u30fc\u30ed\u30a4\u30f3\u306e\u30cf\u30a4\u30c9\u901a\u308a\u3068\u30a8\u30ea\u30b9\u901a\u308a\u306e\u4ea4\u5dee\u70b9\u3092\u898b\u3064\u3081\u308b8\u53f0\u306e\u30e9\u30a4\u30d6\u8857\u982d\u30ab\u30e1\u30e9\u3092\u9023\u7d9a\u89b3\u6e2c\u3057\u30013\u5206\u9593\u306e360\u00b0\u30e2\u30ce\u30af\u30ed\u30fc\u30e0\u7403\u9762\u6620\u50cf\u3078\u3068\u7d50\u6676\u5316\u3057\u305f\u89b3\u5bdf\u7de8\u3002",
      "vr360.regionAria": "Hyde and Ellis 360\u5ea6\u30c6\u30f3\u30c0\u30fc\u30ed\u30a4\u30f3\u8857\u982d\u30d7\u30ec\u30fc\u30e4\u30fc",
      "vr360.canvasAria": "\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6360\u5ea6\u30b9\u30c8\u30ea\u30fc\u30c8\u30d3\u30e5\u30fc \u2014 \u30c9\u30e9\u30c3\u30b0\u307e\u305f\u306f\u77e2\u5370\u30ad\u30fc\u3067\u5468\u56f2\u3092\u898b\u6e21\u305b\u307e\u3059",
      "vr360.playAria": "3\u5206\u9593\u306e360\u5ea6\u30c6\u30f3\u30c0\u30fc\u30ed\u30a4\u30f3\u89b3\u5bdf\u6620\u50cf\u3092\u518d\u751f",
      "vr360.playLabel": "360\u00b0\u6620\u50cf\u3092\u518d\u751f \u00b7 03:00",
      "vr360.dragHint": "\u30c9\u30e9\u30c3\u30b0\u3067360\u00b0\u8996\u70b9\u79fb\u52d5 \u00b7 \u30b9\u30af\u30ed\u30fc\u30eb\u3067\u30ba\u30fc\u30e0",
      "vr360.btnPlay": "\u518d\u751f",
      "vr360.btnPause": "\u4e00\u6642\u505c\u6b62",
      "vr360.scrubAria": "360\u5ea6\u6620\u50cf\u306e\u518d\u751f\u4f4d\u7f6e",
      "vr360.btnSoundOn": "\u97f3\u58f0: ON",
      "vr360.btnSoundOff": "\u97f3\u58f0: \u30df\u30e5\u30fc\u30c8",
      "vr360.btnRecenter": "0\u00b0 \u6b63\u9762\u3078",
      "vr360.btnGyro": "\u30b8\u30e3\u30a4\u30ed",
      "vr360.btnGyroActive": "\u30b8\u30e3\u30a4\u30ed: ON",
      "vr360.btnFullscreen": "\u5168\u753b\u9762",
      "vr360.btnYtEmbed": "YouTube 4K\u30e2\u30fc\u30c9",
      "vr360.btnWebgl": "WebGL 360\u00b0\u30e2\u30fc\u30c9",
      "vr360.camsAria": "\u30ab\u30e1\u30e9\u30a2\u30f3\u30b0\u30eb\u3092\u5207\u308a\u66ff\u3048",
      "vr360.note":
        "\u30cf\u30a4\u30c9\u901a\u308a\u3068\u30a8\u30ea\u30b9\u901a\u308a\u306e8\u3064\u306e\u8857\u89d2\u30ab\u30e1\u30e9\u3092\u6df1\u591c\u306b\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u89b3\u6e2c\u3057\u3066\u69cb\u6210\u3002DAIR\u2019S Speed Wash\u524d\u306e\u4fe1\u53f7\u306e\u4e0b\u3092\u6a2a\u65ad\u3059\u308b\u591c\u306e\u6b69\u884c\u8005\u3001\u6fe1\u308c\u305f\u30a2\u30b9\u30d5\u30a1\u30eb\u30c8\u3092\u99c6\u3051\u629c\u3051\u308b\u30aa\u30fc\u30c8\u30d0\u30a4\u3068\u30d6\u30ec\u30fc\u30ad\u30e9\u30a4\u30c8\u3001\u305d\u3057\u3066\u592a\u5e73\u6d0b\u306e\u6d77\u9727\u304c\u30cf\u30a4\u30c9\u901a\u308a\u3078\u6d41\u308c\u8fbc\u307f\u3001\u8857\u706f\u3092\u9280\u5869\u30d5\u30a3\u30eb\u30e0\u306e\u5149\u6688\u3078\u3068\u5909\u3048\u3066\u3044\u304f3\u5206\u9593\u3002",
      "vr360.ytDirectLink": "YouTube\u30674K 360\u00b0\u7248\uff08\u9650\u5b9a\u516c\u958b\uff09\u3092\u89b3\u308b \u2197",
      "trailer.kicker": "\u516c\u5f0f\u4e88\u544a\u7de8",
      "poster.kicker": "\u516c\u5f0f\u30dd\u30b9\u30bf\u30fc",
      "trailer.playAria": "\u516c\u5f0f\u4e88\u544a\u7de8\u3092\u518d\u751f",
      "trailer.playLabel": "\u4e88\u544a\u7de8\u3092\u518d\u751f",
      "watch.heading": "\u672c\u7de8\u8996\u8074",
      "watch.supportAria": "\u4f5c\u54c1\u3092\u652f\u63f4\u3059\u308b",
      "watch.soon": "\u6c7a\u6e08\u53d7\u4ed8\u306f\u307e\u3082\u306a\u304f\u958b\u59cb\u3057\u307e\u3059",
      "watch.opening": "\u6c7a\u6e08\u753b\u9762\u3092\u958b\u3044\u3066\u3044\u307e\u3059\u2026",
      "watch.error": "\u6c7a\u6e08\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u518d\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002",
      "tier.rent.label": "\u30ec\u30f3\u30bf\u30eb",
      "tier.rent.terms": "48\u6642\u9593\u8996\u8074\u53ef\u80fd\u30fbHD\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u518d\u751f",
      "tier.buy.label": "\u8cfc\u5165\uff08\u7121\u671f\u9650\uff09",
      "tier.buy.terms": "\u3044\u3064\u3067\u3082\u30fb\u4f55\u5ea6\u3067\u3082\u7121\u671f\u9650\u3067\u8996\u8074\u53ef\u80fd",
      "tier.support.label": "\u4f5c\u54c1\u3092\u652f\u63f4\u3059\u308b",
      "tier.support.terms": "\u4efb\u610f\u306e\u91d1\u984d\uff081\u30c9\u30eb\u304b\u3089\uff09\u3067\u672c\u4f5c\u3092\u652f\u63f4\u3044\u305f\u3060\u3051\u307e\u3059\u3002\u6b21\u306e\u7de8\u96c6\u3068\u6620\u753b\u796d\u306e\u51fa\u54c1\u8cbb\u7528\u306b\u5145\u3066\u3089\u308c\u307e\u3059\u3002",
      "tier.free.label": "\u7121\u6599\u3067\u89b3\u308b",
      "tier.free.terms": "\u672c\u7de8\u3092\u7121\u6599\u30fbHD\u3067\u914d\u4fe1\u3002\u767b\u9332\u3082\u652f\u6255\u3044\u3082\u4e0d\u8981\u3067\u3059\u3002",
      "film.heading": "\u4f5c\u54c1\u7d39\u4ecb",
      "film.logline":
        "\u30b5\u30f3\u30d5\u30e9\u30f3\u30b7\u30b9\u30b3\u30fb\u30c6\u30f3\u30c0\u30fc\u30ed\u30a4\u30f3\u5730\u533a\u306e\u8def\u4e0a\u3067\u9bae\u70c8\u306a\u30e2\u30ce\u30af\u30ed\u30fc\u30e0\u306b\u3088\u3063\u3066\u64ae\u5f71\u3055\u308c\u305f\u672c\u4f5c\u3067\u3001\u30a6\u30af\u30e9\u30a4\u30ca\u51fa\u8eab\u306e\u6620\u753b\u76e3\u7763\u306f\u3001\u53d6\u308a\u6b8b\u3055\u308c\u305f\u30a2\u30e1\u30ea\u30ab\u306e\u8857\u89d2\u3068\u6226\u706b\u306b\u5f15\u304d\u88c2\u304b\u308c\u308b\u6545\u90f7\u3068\u306e\u9593\u306b\u6a2a\u305f\u308f\u308b\u3001\u4e0d\u7a4f\u306a\u8996\u899a\u7684\u30fb\u4eba\u9593\u7684\u5171\u9cf4\u3068\u5411\u304d\u5408\u3046\u3002",
      "film.p1":
        "\u5e2b\u3067\u3042\u308b\u6620\u753b\u76e3\u7763\u30ed\u30d6\u30fb\u30cb\u30eb\u30bd\u30f3\u306e\u30b9\u30c8\u30ea\u30fc\u30c8\u30fb\u30b7\u30cd\u30de\u306b\u5c0e\u304b\u308c\u30c6\u30f3\u30c0\u30fc\u30ed\u30a4\u30f3\u3078\u3068\u8db3\u3092\u8e0f\u307f\u5165\u308c\u305f\u30b8\u30e3\u30f3\u30fb\u30da\u30c8\u30ed\u30d5\u306f\u3001\u30ab\u30e1\u30e9\u3092\u624b\u306b\u8def\u5730\u3092\u6b69\u304d\u3001\u4e16\u754c\u3067\u6700\u3082\u88d5\u798f\u306a\u90fd\u5e02\u306e\u3072\u3068\u3064\u3067\u5468\u7e01\u306b\u751f\u304d\u308b\u4eba\u3005\u306e\u58f0\u306b\u8033\u3092\u50be\u3051\u305f\u3002\u8def\u4e0a\u3067\u306e\u51fa\u4f1a\u3044\u306b\u3001\u30d9\u30a4\u30a8\u30ea\u30a2\u306e\u6620\u753b\u4f5c\u5bb6\u30ed\u30d6\u30fb\u30cb\u30eb\u30bd\u30f3\u3084\u30ed\u30d0\u30fc\u30c8\u30fb\u30b6\u30b4\u30fc\u30f3\u3001\u305d\u3057\u3066\u30a6\u30af\u30e9\u30a4\u30ca\u306e\u6226\u5834\u8a18\u9332\u6620\u753b\u76e3\u7763\u30e0\u30b9\u30c6\u30a3\u30b9\u30e9\u30d5\u30fb\u30c1\u30a7\u30eb\u30ce\u30d5\u3068\u306e\u5bfe\u8a71\u3092\u7e54\u308a\u4ea4\u305c\u306a\u304c\u3089\u3001<em>HOW I SEE</em> \u306f\u4e8c\u3064\u306e\u5d29\u58ca\u306e\u98a8\u666f\u3092\u3072\u3068\u3064\u306e\u30d5\u30ec\u30fc\u30e0\u306b\u53ce\u3081\u308b\u2015\u2015\u30ed\u30b7\u30a2\u306e\u7206\u6483\u304c\u30a6\u30af\u30e9\u30a4\u30ca\u306b\u3082\u305f\u3089\u3059\u7a81\u767a\u7684\u306a\u7834\u58ca\u3068\u3001\u5236\u5ea6\u7684\u306a\u898b\u6368\u3066\u3089\u308c\u3084\u7acb\u3061\u9000\u304d\u3001\u7121\u95a2\u5fc3\u304c\u30b5\u30f3\u30d5\u30e9\u30f3\u30b7\u30b9\u30b3\u306b\u3082\u305f\u3089\u3059\u7de9\u6162\u306a\u6469\u8017\u3068\u3092\u3002",
      "film.p2":
        "\u672c\u4f5c\u306e\u304b\u305f\u3061\u306f\u3001\u64ae\u5f71\u73fe\u5834\u306e\u904e\u9177\u306a\u73fe\u5b9f\u305d\u306e\u3082\u306e\u306b\u3088\u3063\u3066\u935b\u3048\u4e0a\u3052\u3089\u308c\u305f\u3002\u64ae\u5f71\u521d\u65e5\u306e\u591c\u3001\u30da\u30c8\u30ed\u30d5\u3068\u30b9\u30bf\u30c3\u30d5\u306f\u8def\u4e0a\u3067\u8972\u6483\u3092\u53d7\u3051\u3001\u64ae\u5f71\u6a5f\u6750\u306f\u7834\u58ca\u3055\u308c\u305f\u304c\u3001\u6280\u8853\u8005\u306e\u624b\u306b\u3088\u3063\u3066\u7834\u640d\u3057\u305f\u30b9\u30de\u30fc\u30c8\u30d5\u30a9\u30f3\u304b\u3089\u3059\u3079\u3066\u306e\u6620\u50cf\u30d5\u30ec\u30fc\u30e0\u304c\u5947\u8de1\u7684\u306b\u6551\u51fa\u3055\u308c\u305f\u3002\u4f5c\u54c1\u3092\u65ad\u5ff5\u3059\u308b\u3053\u3068\u3082\u3001\u508d\u89b3\u8005\u306e\u5b89\u5168\u306a\u8ddd\u96e2\u304b\u3089\u64ae\u308b\u3053\u3068\u3082\u62d2\u3093\u3060\u30da\u30c8\u30ed\u30d5\u306f\u3001\u305d\u306e\u8857\u3092\u5185\u5074\u304b\u3089\u77e5\u308b\u5730\u5143\u306e\u6848\u5185\u4eba\u3068\u3068\u3082\u306b\u518d\u3073\u540c\u3058\u8857\u533a\u3078\u3068\u623b\u308a\u3001\u540c\u3058\u76ee\u7dda\u306e\u9ad8\u3055\u304b\u3089\u672c\u4f5c\u3092\u5b8c\u6210\u3055\u305b\u305f\u3002",
      "film.quote":
        "\u300c\u79c1\u306e\u4e3b\u984c\u306f\u3001\u5236\u5ea6\u7684\u306a\u30cd\u30b0\u30ec\u30af\u30c8\u3068\u3001\u6b6f\u6b62\u3081\u306a\u304d\u91d1\u3068\u6a29\u529b\u306e\u53ce\u596a\u306b\u3088\u3063\u3066\u5f15\u304d\u8d77\u3053\u3055\u308c\u308b\u3001\u4eba\u9593\u306e\u5c0a\u53b3\u306e\u7de9\u6162\u306a\u6b7b\u3067\u3042\u308b\u3002\u3053\u308c\u304c\u3001\u79c1\u306e\u898b\u308b\u4e16\u754c\u3060\u3002\u300d",
      "film.quoteCite": "\u2014 \u30b8\u30e3\u30f3\u30fb\u30da\u30c8\u30ed\u30d5",
      "interviews.heading": "\u8857\u982d\u30a4\u30f3\u30bf\u30d3\u30e5\u30fc\uff08\u5168\u7de8\u8a18\u9332\uff09",
      "interviews.lead":
        "\u30b5\u30f3\u30d5\u30e9\u30f3\u30b7\u30b9\u30b3\u30fb\u30c6\u30f3\u30c0\u30fc\u30ed\u30a4\u30f3\u306e\u8857\u89d2\u3084\u99c5\u30db\u30fc\u30e0\u3001\u7dda\u8def\u8107\u3067\u8a18\u9332\u3055\u308c\u305f41\u520643\u79d2\u306e\u30ce\u30fc\u30ab\u30c3\u30c8\u8857\u982d\u30a4\u30f3\u30bf\u30d3\u30e5\u30fc\u3002\u30ab\u30e1\u30e9\u306e\u524d\u3067\u8a9e\u3063\u305f\u516811\u7ae0\u30fb13\u540d\u306e\u4eba\u7269\u5225\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u3068\u3001\u8a71\u8005\u5225\u306e\u5168\u6587\u66f8\u304d\u8d77\u3053\u3057\u3092\u53ce\u9332\u3057\u3066\u3044\u307e\u3059\u3002",
      "interviews.iframeTitle": "HOW I SEE \u2014 \u8857\u982d\u30a4\u30f3\u30bf\u30d3\u30e5\u30fc\u30ce\u30fc\u30ab\u30c3\u30c8\u5168\u7de8 (41:43)",
      "interviews.fullReel": "00:00 \u2013 41:43 \u00b7 \u30ce\u30fc\u30ab\u30c3\u30c8\u5168\u7de8",
      "interviews.cuedPrefix": "\u518d\u751f\u4f4d\u7f6e:",
      "interviews.watchYt": "YouTube\u3067\u958b\u304f \u2197",
      "interviews.count": "\u516811\u7ae0 \u00b7 \u767b\u5834\u4eba\u726913\u540d \u00b7 \u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u8a72\u5f53\u30b7\u30fc\u30f3\u3078\u79fb\u52d5",
      "interviews.expandAll": "\u3059\u3079\u3066\u306e\u66f8\u304d\u8d77\u3053\u3057\u3092\u958b\u304f",
      "interviews.collapseAll": "\u3059\u3079\u3066\u306e\u66f8\u304d\u8d77\u3053\u3057\u3092\u9589\u3058\u308b",
      "interviews.playChapterAria": "\u6b21\u306e\u30c1\u30e3\u30d7\u30bf\u30fc\u304b\u3089\u518d\u751f: ",
      "interviews.readTranscript": "\u82f1\u8a9e\u5168\u6587\u66f8\u304d\u8d77\u3053\u3057\uff08\u8a71\u8005\u5225\uff09",
      "interviews.turnsUnit": "\u767a\u8a71",
      "interviews.crewTitle": "\u30ab\u30e1\u30e9\u80cc\u5f8c\u306e\u53d6\u6750\u30fb\u64ae\u5f71\u30af\u30eb\u30fc",
      "interviews.crewBody":
        "<strong>\u30b8\u30e3\u30f3\u30fb\u30da\u30c8\u30ed\u30d5\uff08Zhan Petrov\uff09</strong>\uff08\u76e3\u7763\u30fb\u5168\u7de8\u306e\u30e1\u30a4\u30f3\u30a4\u30f3\u30bf\u30d3\u30e5\u30a2\u30fc\uff09 &middot; <strong>\u7b2c2\u30ab\u30e1\u30e9\u30de\u30f3</strong>\uff0806:45&ndash;13:02\u304a\u3088\u307313:14&ndash;13:21\u3067\u5225\u30a2\u30f3\u30b0\u30ebiPhone\u64ae\u5f71\u3092\u62c5\u5f53\u30fb18:35\u306b\u58f0\uff09 &middot; <strong>\u5973\u6027\u5171\u540c\u30a4\u30f3\u30bf\u30d3\u30e5\u30a2\u30fc</strong>\uff0818:51&ndash;19:21\u306e\u30c6\u30a4\u30e9\u30fc\u901a\u308a\u3067\u5c0e\u5165\u8cea\u554f\u30fb27:26\u3067\u53ce\u9332\u78ba\u8a8d\u30fb39:25&ndash;39:27\u306b\u753b\u9762\u767b\u5834\uff09\u3002",
      "director.heading": "\u30b8\u30e3\u30f3\u30fb\u30da\u30c8\u30ed\u30d5",
      "director.p1":
        "1992\u5e74\u3001\u30a6\u30af\u30e9\u30a4\u30ca\u30fb\u30aa\u30c7\u30fc\u30b5\u751f\u307e\u308c\u3002\u30d5\u30e9\u30f3\u30b9\u30fb\u30cc\u30fc\u30f4\u30a7\u30eb\u30f4\u30a1\u30fc\u30b0\u306e\u5de8\u5320\u30b8\u30e3\u30f3\uff1d\u30ea\u30e5\u30c3\u30af\u30fb\u30b4\u30c0\u30fc\u30eb\u306b\u3061\u306a\u3093\u3067\u7236\u304b\u3089\u540d\u4ed8\u3051\u3089\u308c\u305f\u3002\u30a6\u30af\u30e9\u30a4\u30ca\u56fd\u7acb\u6d77\u6d0b\u30a2\u30ab\u30c7\u30df\u30fc\u3092\u5352\u696d\u5f8c\u3001\u56fd\u969b\u5546\u8239\u306e\u4e8c\u7b49\u822a\u6d77\u58eb\u3068\u3057\u3066\u6d77\u4e0a\u3067\u52e4\u52d9\u3057\u305f\u306e\u3061\u3001\u30a6\u30af\u30e9\u30a4\u30ca\u3067\u306e\u6226\u4e89\u3092\u96e2\u308c\u3066\u6e21\u7c73\u3002",
      "director.p2":
        "\u73fe\u5728\u306f\u30b5\u30f3\u30d5\u30e9\u30f3\u30b7\u30b9\u30b3\u30fb\u30d9\u30a4\u30a8\u30ea\u30a2\u3092\u62e0\u70b9\u306b\u3001\u30ab\u30f3\u30cc\u56fd\u969b\u6620\u753b\u796d\u30ab\u30e1\u30e9\u30fb\u30c9\u30fc\u30eb\u304a\u3088\u3073\u30b5\u30f3\u30c0\u30f3\u30b9\u6620\u753b\u796d\u30b0\u30e9\u30f3\u30d7\u30ea\u53d7\u8cde\u76e3\u7763\u30ed\u30d6\u30fb\u30cb\u30eb\u30bd\u30f3\u306e\u7dca\u5bc6\u306a\u5171\u540c\u5236\u4f5c\u8005\u3068\u3057\u3066\u3001\u5373\u8208\u6f14\u51fa\u624b\u6cd5\u300c\u30c0\u30a4\u30ec\u30af\u30c8\u30fb\u30a2\u30af\u30b7\u30e7\u30f3\u300d\u306e\u3082\u3068\u30c9\u30ad\u30e5\u30e1\u30f3\u30bf\u30ea\u30fc\u3068\u5b9f\u9a13\u6620\u753b\u306e\u9818\u57df\u3092\u6a2a\u65ad\u3057\u3066\u6d3b\u52d5\u3059\u308b\u3002\u4e3b\u306a\u76e3\u7763\u4f5c\u306b\u3001\u30ef\u30f3\u30ab\u30c3\u30c84\u753b\u9762\u5206\u5272\u306e\u9577\u7de8\u5b9f\u9a13\u6620\u753b<em>Love Funeral</em>\uff082021\u5e74\uff09\u3001\u30cb\u30eb\u30bd\u30f3\u306e\u751f\u6daf\u3068\u5275\u4f5c\u3092\u8ffd\u3063\u305f\u9577\u7de8\u30c9\u30ad\u30e5\u30e1\u30f3\u30bf\u30ea\u30fc<em>The Way Things Seem to Be</em>\u304c\u3042\u308b\u3002",
      "screenings.heading": "\u4e0a\u6620\u60c5\u5831",
      "screenings.meta": "2026\u5e745\u67087\u65e5 \u00b7 \u30b5\u30f3\u30d5\u30e9\u30f3\u30b7\u30b9\u30b3",
      "screenings.venue": "\u30c6\u30f3\u30c0\u30fc\u30ed\u30a4\u30f3\u535a\u7269\u9928\uff08Tenderloin Museum \u2014 398 Eddy St, San Francisco, CA\uff09",
      "screenings.detail":
        "\u30ed\u30d6\u30fb\u30cb\u30eb\u30bd\u30f3\u76e3\u7763\u4f5c<em>CHALK</em>\uff081996\u5e74\uff09\u306b\u5148\u7acb\u3064\u30aa\u30fc\u30d7\u30cb\u30f3\u30b0\u4f5c\u54c1\u3068\u3057\u3066\u4e0a\u6620\u3001\u4e0a\u6620\u5f8c\u306b\u30d5\u30a3\u30eb\u30e0\u30e1\u30fc\u30ab\u30fc\u30fb\u30c8\u30fc\u30af\u3092\u958b\u50ac\u3002\u30c6\u30f3\u30c0\u30fc\u30ed\u30a4\u30f3\u535a\u7269\u9928\u3068\u306e\u5171\u540c\u30d7\u30ec\u30bc\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u3002",
      "screenings.eventLink": "\u30c6\u30f3\u30c0\u30fc\u30ed\u30a4\u30f3\u535a\u7269\u9928 \u30a4\u30d9\u30f3\u30c8\u8a73\u7d30 \u2197",
      "screenings.inquiries": "\u4e0a\u6620\u30fb\u53d6\u6750\u306e\u304a\u554f\u3044\u5408\u308f\u305b:",
      "press.heading": "\u30d7\u30ec\u30b9",
      "press.title": "\u300cZhan Petrov: A New Voice in Improv Film from Ukraine\uff08\u30a6\u30af\u30e9\u30a4\u30ca\u304b\u3089\u73fe\u308c\u305f\u5373\u8208\u6620\u753b\u306e\u65b0\u305f\u306a\u58f0\uff09\u300d",
      "press.author": "\u30c9\u30cb\u30d5\u30a1\u30f3\u30fb\u30d6\u30ec\u30a2\u306b\u3088\u308b\u4eba\u7269\u8a55",
      "press.link": "\u8a18\u4e8b\u3092\u8aad\u3080 \u2197",
      "credits.heading": "\u30af\u30ec\u30b8\u30c3\u30c8",
      "credits.directorDt": "\u76e3\u7763\u30fb\u811a\u672c",
      "credits.directorDd": "\u30b8\u30e3\u30f3\u30fb\u30da\u30c8\u30ed\u30d5\uff08Zhan Petrov\uff09",
      "credits.producersDt": "\u30d7\u30ed\u30c7\u30e5\u30fc\u30b5\u30fc",
      "credits.producersDd": "\u30b8\u30e3\u30f3\u30fb\u30da\u30c8\u30ed\u30d5\u3001\u30ed\u30d6\u30fb\u30cb\u30eb\u30bd\u30f3",
      "credits.featuringDt": "\u51fa\u6f14",
      "credits.featuringDd": "\u30ed\u30d6\u30fb\u30cb\u30eb\u30bd\u30f3\u3001\u30e0\u30b9\u30c6\u30a3\u30b9\u30e9\u30d5\u30fb\u30c1\u30a7\u30eb\u30ce\u30d5\u3001\u30ed\u30d0\u30fc\u30c8\u30fb\u30b6\u30b4\u30fc\u30f3",
      "credits.locationDt": "\u64ae\u5f71\u5730",
      "credits.locationDd": "\u7c73\u56fd\u30ab\u30ea\u30d5\u30a9\u30eb\u30cb\u30a2\u5dde\u30b5\u30f3\u30d5\u30e9\u30f3\u30b7\u30b9\u30b3\u30fb\u30c6\u30f3\u30c0\u30fc\u30ed\u30a4\u30f3",
      "credits.yearDt": "\u88fd\u4f5c\u5e74",
      "credits.yearDd": "2025\u5e74",
      "credits.runtimeDt": "\u4e0a\u6620\u6642\u9593",
      "credits.runtimeDd": "15\u5206",
      "credits.formatDt": "\u4ed5\u69d8",
      "credits.formatDd": "\u30c7\u30b8\u30bf\u30eb \u00b7 \u30e2\u30ce\u30af\u30ed \u00b7 16:9 \u00b7 \u82f1\u8a9e",
      "footer.contact": "\u304a\u554f\u3044\u5408\u308f\u305b",
      "watchRoom.skip": "\u30d7\u30ec\u30fc\u30e4\u30fc\u3078\u30b9\u30ad\u30c3\u30d7",
      "watchRoom.back": "\u2190 HOW I SEE \u30c8\u30c3\u30d7\u3078",
      "watchRoom.support": "\u30b5\u30dd\u30fc\u30c8",
      "watchRoom.vfAria": "HOW I SEE \u672c\u7de8\u30d7\u30ec\u30fc\u30e4\u30fc",
      "watchRoom.gateTitle": "\u8996\u8074\u30d1\u30b9\u304c\u5fc5\u8981\u3067\u3059",
      "watchRoom.gateCopy":
        "<em>HOW I SEE</em>\u3092\u30ec\u30f3\u30bf\u30eb\u307e\u305f\u306f\u3054\u8cfc\u5165\u3044\u305f\u3060\u304f\u3068\u3001\u6c7a\u6e08\u5b8c\u4e86\u5f8c\u306b\u81ea\u52d5\u7684\u306b\u3053\u306e\u30da\u30fc\u30b8\u3078\u623b\u308a\u672c\u7de8\u3092\u3054\u8996\u8074\u3044\u305f\u3060\u3051\u307e\u3059\u3002",
      "watchRoom.gateCta": "\u30ec\u30f3\u30bf\u30eb\u30fb\u8cfc\u5165\u3078\u9032\u3080",
      "watchRoom.download": "HD\u672c\u7de8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",
      "watchRoom.verifyingTitle": "\u8996\u8074\u30d1\u30b9\u3092\u78ba\u8a8d\u4e2d",
      "watchRoom.verifyingCopy": "\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u7167\u4f1a\u3057\u3066\u3044\u307e\u3059\u2026",
      "watchRoom.expiredTitle": "\u30ea\u30f3\u30af\u306e\u671f\u9650\u5207\u308c\u30fb\u7121\u52b9",
      "watchRoom.expiredCopy":
        "\u3053\u306e\u8996\u8074\u30ea\u30f3\u30af\u3092\u78ba\u8a8d\u3067\u304d\u306a\u3044\u304b\u300148\u6642\u9593\u306e\u30ec\u30f3\u30bf\u30eb\u671f\u9593\u304c\u7d42\u4e86\u3057\u3066\u3044\u307e\u3059\u3002\u4f5c\u54c1\u30da\u30fc\u30b8\u3078\u623b\u308b\u304b\u3001\u30b5\u30dd\u30fc\u30c8\u307e\u3067\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002",
      "watchRoom.rentalUntil": "48\u6642\u9593\u30ec\u30f3\u30bf\u30eb\u6709\u52b9 \u00b7 \u671f\u9650: ",
      "watchRoom.permanent": "\u7121\u671f\u9650\u30a2\u30af\u30bb\u30b9 \u00b7 \u3044\u3064\u3067\u3082\u8996\u8074\u53ef\u80fd",
      "watchRoom.ytOwn": "\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\u3053\u306e\u30da\u30fc\u30b8\u3092\u30d6\u30c3\u30af\u30de\u30fc\u30af\u3057\u3066\u3001\u3044\u3064\u3067\u3082\u3054\u8996\u8074\u304f\u3060\u3055\u3044\u3002",
      "watchRoom.ytRent": "\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\u3053\u306e\u30da\u30fc\u30b8\u3092\u30d6\u30c3\u30af\u30de\u30fc\u30af\u3057\u3066\u304f\u3060\u3055\u3044\uff08\u30ec\u30f3\u30bf\u30eb\u8996\u8074\u671f\u9593\u306f48\u6642\u9593\u3067\u3059\uff09\u3002",
      "watchRoom.ytNeutral": "\u300eHOW I SEE\u300f\u3092\u3054\u8996\u8074\u3044\u305f\u3060\u304d\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\u3053\u306e\u30da\u30fc\u30b8\u3092\u30d6\u30c3\u30af\u30de\u30fc\u30af\u3057\u3066\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002",
      "watchRoom.ytFree": "\u7121\u6599\u4e0a\u6620\u3067\u3059\u3002\u5fc3\u306b\u6b8b\u3063\u305f\u3089\u3001\u4efb\u610f\u306e\u91d1\u984d\u3067\u672c\u4f5c\u3092\u3054\u652f\u63f4\u304f\u3060\u3055\u3044\u3002",
      "watchRoom.supportCta": "\u4f5c\u54c1\u3092\u652f\u63f4\u3059\u308b",
      "watchRoom.ytSupport": "\u300eHOW I SEE\u300f\u3092\u3054\u652f\u63f4\u3044\u305f\u3060\u304d\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\u3044\u305f\u3060\u3044\u305f\u3054\u652f\u63f4\u306f\u6b21\u306e\u7de8\u96c6\u3068\u6620\u753b\u796d\u306e\u51fa\u54c1\u8cbb\u7528\u306b\u5145\u3066\u3089\u308c\u307e\u3059\u3002\u3053\u306e\u30da\u30fc\u30b8\u3092\u30d6\u30c3\u30af\u30de\u30fc\u30af\u3057\u3066\u3001\u3044\u3064\u3067\u3082\u3054\u8996\u8074\u304f\u3060\u3055\u3044\u3002"
    }
  };

  var DEFAULT_EN_TIERS = {
    rent: { label: "Rent", terms: "48 hours to watch, streaming in HD" },
    buy: { label: "Own", terms: "Watch any time, as often as you like" },
    support: { label: "Support the film", terms: "Pay what you want, any amount from $1. Goes to the next cut and festival fees." },
    free: { label: "Watch free", terms: "The full film, streaming in HD. No account, no payment." }
  };

  var currentLang = "en";
  var watchRoomState = "gate"; // "gate" | "yt" | "verifying" | "active" | "expired"
  var watchRoomPlan = "";
  var watchRoomData = null;

  function trimStr(val) {
    return typeof val === "string" ? val.trim() : "";
  }

  function t(key) {
    var dict = I18N[currentLang] || I18N.en;
    return dict[key] !== undefined ? dict[key] : I18N.en[key] || "";
  }

  function detectInitialLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      var qLang = trimStr(params.get("lang")).toLowerCase();
      if (qLang === "ja" || qLang === "en") {
        try {
          window.localStorage.setItem(STORAGE_KEY, qLang);
        } catch (eSave) {}
        return qLang;
      }
    } catch (e) {}

    try {
      var saved = trimStr(window.localStorage.getItem(STORAGE_KEY)).toLowerCase();
      if (saved === "ja" || saved === "en") return saved;
    } catch (e2) {}

    return "en";
  }

  function localizeCheckoutUrl(rawUrl, lang) {
    if (!rawUrl) return "";
    try {
      var parsed = new URL(rawUrl, window.location.href);
      if (parsed.hostname.indexOf("stripe.com") !== -1 && !parsed.searchParams.has("locale")) {
        parsed.searchParams.set("locale", lang === "ja" ? "ja" : "en");
      }
      return parsed.toString();
    } catch (e) {
      return rawUrl;
    }
  }

  function wireGlobalLinks() {
    var posterUrl = trimStr(cfg.posterSrc);
    var posterEl = document.getElementById("hero-poster-img");
    if (posterEl && posterUrl && posterEl.getAttribute("src") !== posterUrl) {
      posterEl.setAttribute("src", posterUrl);
    }

    var trailerEmbedUrl = trimStr(cfg.trailerEmbed);
    var trailerScreen = document.getElementById("trailer-screen");
    var trailerVideo = document.getElementById("trailer-video");
    var trailerPlayBtn = document.getElementById("trailer-play-btn");

    if (trailerScreen && trailerEmbedUrl) {
      trailerScreen.innerHTML = "";
      var iframe = document.createElement("iframe");
      iframe.src = trailerEmbedUrl;
      iframe.title = "HOW I SEE — Official Trailer";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen";
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.loading = "lazy";
      trailerScreen.appendChild(iframe);
    } else if (trailerVideo) {
      var trailerSrc = trimStr(cfg.trailerSrc);
      var trailerPoster = trimStr(cfg.trailerPoster);
      if (trailerSrc && trailerVideo.getAttribute("src") !== trailerSrc) {
        trailerVideo.setAttribute("src", trailerSrc);
      }
      if (trailerPoster && trailerVideo.getAttribute("poster") !== trailerPoster) {
        trailerVideo.setAttribute("poster", trailerPoster);
      }

      if (trailerPlayBtn) {
        trailerVideo.controls = false;
        var startTrailer = function () {
          trailerVideo.controls = true;
          trailerPlayBtn.hidden = true;
          var playPromise = trailerVideo.play();
          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(function () {});
          }
        };
        trailerPlayBtn.addEventListener("click", startTrailer);
        trailerVideo.addEventListener("play", function () {
          trailerVideo.controls = true;
          trailerPlayBtn.hidden = true;
        });

        var heroTrailerLinks = document.querySelectorAll("[data-play-trailer]");
        for (var p = 0; p < heroTrailerLinks.length; p++) {
          heroTrailerLinks[p].addEventListener("click", function (ev) {
            var stage = document.getElementById("trailer");
            if (stage && typeof stage.scrollIntoView === "function") {
              ev.preventDefault();
              var reduce =
                window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
              stage.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
            }
            startTrailer();
          });
        }
      }
    }

    var ffUrl = trimStr(cfg.filmfreewayUrl);
    if (ffUrl) {
      var ffLinks = document.querySelectorAll("[data-site-filmfreeway]");
      for (var j = 0; j < ffLinks.length; j++) {
        ffLinks[j].setAttribute("href", ffUrl);
      }
    }

    var email = trimStr(cfg.contactEmail);
    if (email) {
      var emailLinks = document.querySelectorAll("[data-site-email]");
      for (var k = 0; k < emailLinks.length; k++) {
        emailLinks[k].setAttribute("href", "mailto:" + email);
        if (emailLinks[k].getAttribute("data-site-email") === "text") {
          emailLinks[k].textContent = email;
        }
      }
    }
  }

  function startWorkerCheckout(workerUrl, tierKey, btnEl, statusEl, defaultLabel) {
    btnEl.disabled = true;
    btnEl.textContent = t("watch.opening");
    if (statusEl) {
      statusEl.hidden = true;
    }

    fetch(workerUrl + "/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tier: tierKey, locale: currentLang })
    })
      .then(function (res) {
        if (!res.ok) {
          throw new Error("Checkout HTTP " + res.status);
        }
        return res.json();
      })
      .then(function (data) {
        if (data && data.url) {
          window.location.href = localizeCheckoutUrl(data.url, currentLang);
          return;
        }
        throw new Error("Missing checkout URL");
      })
      .catch(function () {
        btnEl.disabled = false;
        btnEl.textContent = defaultLabel;
        if (statusEl) {
          statusEl.textContent = t("watch.error");
          statusEl.hidden = false;
        }
      });
  }

  function resolveTierText(tierKey, tierCfg) {
    var rawLabel = trimStr(tierCfg.label);
    var rawTerms = trimStr(tierCfg.terms);
    var defaults = DEFAULT_EN_TIERS[tierKey] || {};
    var legacyOwnTerms = "Watch any time, plus a downloadable copy";

    if (currentLang === "ja") {
      var jaLabel = trimStr(tierCfg.labelJa);
      var jaTerms = trimStr(tierCfg.termsJa);
      var isDefaultTerms =
        !rawTerms || rawTerms === defaults.terms || (tierKey === "buy" && rawTerms === legacyOwnTerms);
      return {
        label:
          jaLabel ||
          (!rawLabel || rawLabel === defaults.label ? t("tier." + tierKey + ".label") : rawLabel),
        terms: jaTerms || (isDefaultTerms ? t("tier." + tierKey + ".terms") : rawTerms)
      };
    }

    return {
      label: rawLabel || t("tier." + tierKey + ".label") || tierKey,
      terms: rawTerms || t("tier." + tierKey + ".terms")
    };
  }

  function wireTickets() {
    var cards = document.querySelectorAll("[data-tier]");
    if (!cards.length) return;

    var isWorkerMode = trimStr(cfg.mode).toLowerCase() === "worker";
    var workerUrl = trimStr(cfg.WORKER_URL).replace(/\/+$/, "");

    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var tierKey = card.getAttribute("data-tier");
      var tierCfg = cfg[tierKey];

      if (!tierCfg) {
        if (tierKey === "support") {
          card.hidden = true;
        }
        continue;
      }

      var copy = resolveTierText(tierKey, tierCfg);
      var price =
        currentLang === "ja" && trimStr(tierCfg.priceJa)
          ? trimStr(tierCfg.priceJa)
          : trimStr(tierCfg.price);
      var rawDirectLink =
        currentLang === "ja" && trimStr(tierCfg.linkJa)
          ? trimStr(tierCfg.linkJa)
          : trimStr(tierCfg.link);
      var directLink = localizeCheckoutUrl(rawDirectLink, currentLang);

      var labelEl = card.querySelector("[data-tier-label]");
      var priceEl = card.querySelector("[data-tier-price]");
      var termsEl = card.querySelector("[data-tier-terms]");
      var slotEl = card.querySelector("[data-tier-slot]");
      var statusEl = card.querySelector("[data-tier-status]");

      if (labelEl) labelEl.textContent = copy.label;
      if (priceEl) priceEl.textContent = price;
      if (termsEl) termsEl.textContent = copy.terms;

      if (!slotEl) continue;

      var btnVariant = tierKey === "support" ? "btn btn--outline" : "btn btn--ticket";
      var ctaLabel = price && /^[$\u00a5\u20ac\u00a30-9]/.test(price) ? copy.label + " \u2014 " + price : copy.label;
      slotEl.innerHTML = "";

      if (!isWorkerMode && directLink) {
        var linkEl = document.createElement("a");
        linkEl.className = btnVariant;
        linkEl.href = directLink;
        linkEl.rel = "noopener";
        linkEl.textContent = ctaLabel;
        slotEl.appendChild(linkEl);
        if (statusEl) statusEl.hidden = true;
      } else if (isWorkerMode && workerUrl) {
        var activeBtn = document.createElement("button");
        activeBtn.type = "button";
        activeBtn.className = btnVariant;
        activeBtn.textContent = ctaLabel;
        (function (tKey, bEl, sEl, cLabel) {
          bEl.addEventListener("click", function () {
            startWorkerCheckout(workerUrl, tKey, bEl, sEl, cLabel);
          });
        })(tierKey, activeBtn, statusEl, ctaLabel);
        slotEl.appendChild(activeBtn);
        if (statusEl) statusEl.hidden = true;
      } else {
        var disabledBtn = document.createElement("button");
        disabledBtn.type = "button";
        disabledBtn.className = btnVariant + " is-disabled";
        disabledBtn.disabled = true;
        disabledBtn.setAttribute("aria-disabled", "true");
        disabledBtn.textContent = ctaLabel;
        slotEl.appendChild(disabledBtn);
        if (statusEl) {
          statusEl.textContent = t("watch.soon");
          statusEl.hidden = false;
        }
      }
    }
  }

  function renderWatchRoomDynamicCopy() {
    var root = document.getElementById("watch-player-root");
    if (!root) return;

    var gateTitle = document.getElementById("watch-gate-title");
    var gateCopy = document.getElementById("watch-gate-copy");
    var expiryEl = document.getElementById("watch-expiry");

    if (watchRoomState === "yt" && expiryEl) {
      expiryEl.textContent =
        watchRoomPlan === "own"
          ? t("watchRoom.ytOwn")
          : watchRoomPlan === "rent"
            ? t("watchRoom.ytRent")
            : watchRoomPlan === "support"
              ? t("watchRoom.ytSupport")
              : watchRoomPlan === "free"
                ? t("watchRoom.ytFree")
                : t("watchRoom.ytNeutral");
      var supportCta = document.getElementById("watch-support");
      var supportLink = cfg.support ? trimStr(cfg.support.link) : "";
      var navSupport = document.getElementById("watch-nav-support");
      if (navSupport && supportLink) navSupport.href = localizeCheckoutUrl(supportLink, currentLang);
      if (supportCta) {
        supportCta.textContent = t("watchRoom.supportCta");
        if (supportLink && watchRoomPlan !== "support") {
          supportCta.href = localizeCheckoutUrl(supportLink, currentLang);
          supportCta.hidden = false;
        } else {
          supportCta.hidden = true;
        }
      }
    } else if (watchRoomState === "verifying") {
      if (gateTitle) gateTitle.textContent = t("watchRoom.verifyingTitle");
      if (gateCopy) gateCopy.textContent = t("watchRoom.verifyingCopy");
    } else if (watchRoomState === "expired") {
      if (gateTitle) gateTitle.textContent = t("watchRoom.expiredTitle");
      if (gateCopy) gateCopy.textContent = t("watchRoom.expiredCopy");
    } else if (watchRoomState === "active" && watchRoomData && expiryEl) {
      if (watchRoomData.expiresAt) {
        var dt = new Date(watchRoomData.expiresAt);
        var locale = currentLang === "ja" ? "ja-JP" : undefined;
        expiryEl.textContent =
          t("watchRoom.rentalUntil") +
          (isNaN(dt.getTime()) ? watchRoomData.expiresAt : dt.toLocaleString(locale));
      } else {
        expiryEl.textContent = t("watchRoom.permanent");
      }
    }
  }

  function applyLanguage(lang, persist) {
    currentLang = lang === "ja" ? "ja" : "en";
    document.documentElement.setAttribute("lang", currentLang);

    var isWatchRoom = !!document.getElementById("watch-player-root");
    document.title = isWatchRoom ? t("watchPageTitle") : t("pageTitle");

    var textNodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < textNodes.length; i++) {
      var key = textNodes[i].getAttribute("data-i18n");
      if (key === "nav.menu") {
        var navEl = document.querySelector(".site-nav");
        var isOpen = navEl && navEl.classList.contains("is-open");
        textNodes[i].textContent = isOpen ? t("nav.close") : t("nav.menu");
      } else {
        textNodes[i].textContent = t(key);
      }
    }

    var htmlNodes = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmlNodes.length; j++) {
      var hKey = htmlNodes[j].getAttribute("data-i18n-html");
      htmlNodes[j].innerHTML = t(hKey);
    }

    var ariaNodes = document.querySelectorAll("[data-i18n-aria]");
    for (var k = 0; k < ariaNodes.length; k++) {
      var aKey = ariaNodes[k].getAttribute("data-i18n-aria");
      ariaNodes[k].setAttribute("aria-label", t(aKey));
    }

    var titleNodes = document.querySelectorAll("[data-i18n-title]");
    for (var m = 0; m < titleNodes.length; m++) {
      var tKey = titleNodes[m].getAttribute("data-i18n-title");
      titleNodes[m].setAttribute("title", t(tKey));
    }

    var altNodes = document.querySelectorAll("[data-i18n-alt]");
    for (var q = 0; q < altNodes.length; q++) {
      var altKey = altNodes[q].getAttribute("data-i18n-alt");
      altNodes[q].setAttribute("alt", t(altKey));
    }

    var langBtns = document.querySelectorAll("[data-set-lang]");
    for (var n = 0; n < langBtns.length; n++) {
      var active = langBtns[n].getAttribute("data-set-lang") === currentLang;
      langBtns[n].classList.toggle("is-active", active);
      langBtns[n].setAttribute("aria-pressed", active ? "true" : "false");
    }

    wireTickets();
    renderWatchRoomDynamicCopy();
    if (typeof syncVr360DynamicLabels === "function") {
      syncVr360DynamicLabels();
    }
    if (typeof syncInterviewsSection === "function") {
      syncInterviewsSection();
    }

    if (persist) {
      try {
        window.localStorage.setItem(STORAGE_KEY, currentLang);
      } catch (e) {}

      try {
        var url = new URL(window.location.href);
        if (currentLang === "ja") {
          url.searchParams.set("lang", "ja");
        } else {
          url.searchParams.delete("lang");
        }
        window.history.replaceState({}, "", url.toString());
      } catch (e2) {}
    }
  }

  function wireMenuAndLanguageControls() {
    var langBtns = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < langBtns.length; i++) {
      langBtns[i].addEventListener("click", function (ev) {
        var targetLang = ev.currentTarget.getAttribute("data-set-lang");
        applyLanguage(targetLang, true);
      });
    }

    var navEl = document.querySelector(".site-nav");
    var toggleBtn = document.getElementById("menu-toggle");
    var navLinks = document.getElementById("site-nav-links");

    if (!navEl || !toggleBtn || !navLinks) return;

    function closeMenu() {
      navEl.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.textContent = t("nav.menu");
    }

    toggleBtn.addEventListener("click", function () {
      var opening = !navEl.classList.contains("is-open");
      navEl.classList.toggle("is-open", opening);
      toggleBtn.setAttribute("aria-expanded", opening ? "true" : "false");
      toggleBtn.textContent = opening ? t("nav.close") : t("nav.menu");
    });

    var anchors = navLinks.querySelectorAll("a");
    for (var j = 0; j < anchors.length; j++) {
      anchors[j].addEventListener("click", closeMenu);
    }

    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && navEl.classList.contains("is-open")) {
        closeMenu();
        toggleBtn.focus();
      }
    });
  }

  var syncVr360DynamicLabels = null;

  function wireVr360Player() {
    var screenEl = document.getElementById("vr360-screen");
    var canvasEl = document.getElementById("vr360-canvas");
    var videoEl = document.getElementById("vr360-video");
    var ytFrame = document.getElementById("vr360-yt-frame");
    var overlayBtn = document.getElementById("vr360-play-overlay");
    var dragHintEl = document.getElementById("vr360-drag-hint");
    var btnPlay = document.getElementById("vr360-btn-play");
    var scrubEl = document.getElementById("vr360-scrub");
    var timeEl = document.getElementById("vr360-time");
    var btnMute = document.getElementById("vr360-btn-mute");
    var btnRecenter = document.getElementById("vr360-btn-recenter");
    var btnGyro = document.getElementById("vr360-btn-gyro");
    var btnFs = document.getElementById("vr360-btn-fs");
    var btnMode = document.getElementById("vr360-btn-mode");
    var hudAngleEl = document.getElementById("vr360-hud-angle");
    var hudFovEl = document.getElementById("vr360-hud-fov");
    var ytDirectLink = document.getElementById("vr360-yt-link");
    var camBtns = document.querySelectorAll("[data-vr-yaw]");

    if (!screenEl || !canvasEl || !videoEl) return;

    var vrSrc = trimStr(cfg.vr360Src) || "assets/hyde-ellis-360.mp4";
    var vrPoster = trimStr(cfg.vr360Poster) || "assets/hyde-ellis-360-poster.jpg";
    var vrYtId = trimStr(cfg.vr360VideoId);
    var vrYtUrl = trimStr(cfg.vr360YoutubeUrl) || (vrYtId ? "https://youtu.be/" + vrYtId : "");

    if (videoEl.getAttribute("src") !== vrSrc) {
      videoEl.setAttribute("src", vrSrc);
    }
    if (ytDirectLink && vrYtUrl) {
      ytDirectLink.setAttribute("href", vrYtUrl);
    }
    if (!vrYtId && btnMode) {
      btnMode.hidden = true;
    }

    var CAM_SECTORS = [
      { yaw: 0, pitch: -2, name: "HYDE & ELLIS SW" },
      { yaw: 61, pitch: -6, name: "HYDE ST. SOUTH" },
      { yaw: 82, pitch: 14, name: "CAMP HYDE" },
      { yaw: 140, pitch: 14, name: "HYDE ST. WEST" },
      { yaw: 141, pitch: -6, name: "HYDE ST. NORTH" },
      { yaw: -138, pitch: -6, name: "ELLIS ST. EAST" },
      { yaw: -58, pitch: -6, name: "ELLIS ST. WEST" },
      { yaw: -30, pitch: 6, name: "ELLIS DETAIL" }
    ];

    var yawDeg = 0;
    var pitchDeg = -2;
    var targetYaw = 0;
    var targetPitch = -2;
    var vfovDeg = 52;
    var isDragging = false;
    var lastX = 0;
    var lastY = 0;
    var pinchDist = 0;
    var isYtMode = false;
    var gyroEnabled = false;
    var gyroBaseAlpha = null;
    var posterReady = false;

    function normYaw(deg) {
      var d = ((deg + 180) % 360 + 360) % 360 - 180;
      return d;
    }

    function fmtClock(sec) {
      var s = Math.max(0, Math.floor(sec || 0));
      var m = Math.floor(s / 60);
      var r = s % 60;
      return (m < 10 ? "0" : "") + m + ":" + (r < 10 ? "0" : "") + r;
    }

    function nearestSectorName(y, p) {
      var best = CAM_SECTORS[0];
      var bestScore = 1e9;
      for (var i = 0; i < CAM_SECTORS.length; i++) {
        var c = CAM_SECTORS[i];
        var dyaw = normYaw(y - c.yaw);
        var dp = (p - c.pitch) * 1.25;
        var sc = dyaw * dyaw + dp * dp;
        if (sc < bestScore) {
          bestScore = sc;
          best = c;
        }
      }
      return best.name;
    }

    function updateHud() {
      var ny = Math.round(normYaw(yawDeg));
      var sign = ny > 0 ? "+" : ny < 0 ? "\u2212" : "";
      var absStr = String(Math.abs(ny));
      while (absStr.length < 3) absStr = "0" + absStr;
      var sector = nearestSectorName(ny, pitchDeg);
      if (hudAngleEl) {
        hudAngleEl.textContent = "YAW " + sign + absStr + "\u00b0 \u00b7 " + sector;
      }
      if (hudFovEl) {
        var hfov = Math.round((Math.atan(Math.tan((vfovDeg * Math.PI) / 360) * (16 / 9)) * 360) / Math.PI);
        hudFovEl.textContent = "FOV " + hfov + "\u00b0";
      }
      for (var i = 0; i < camBtns.length; i++) {
        var bYaw = parseFloat(camBtns[i].getAttribute("data-vr-yaw") || "0");
        var bPitch = parseFloat(camBtns[i].getAttribute("data-vr-pitch") || "0");
        var active = Math.abs(normYaw(ny - bYaw)) < 16 && Math.abs(pitchDeg - bPitch) < 14;
        camBtns[i].classList.toggle("is-active", active);
      }
    }

    syncVr360DynamicLabels = function () {
      if (btnPlay) {
        btnPlay.textContent = videoEl.paused ? t("vr360.btnPlay") : t("vr360.btnPause");
      }
      if (btnMute) {
        btnMute.textContent = videoEl.muted ? t("vr360.btnSoundOff") : t("vr360.btnSoundOn");
      }
      if (btnMode) {
        btnMode.textContent = isYtMode ? t("vr360.btnWebgl") : t("vr360.btnYtEmbed");
        btnMode.classList.toggle("is-active", isYtMode);
      }
      if (btnGyro) {
        btnGyro.textContent = gyroEnabled ? t("vr360.btnGyroActive") : t("vr360.btnGyro");
        btnGyro.classList.toggle("is-active", gyroEnabled);
      }
    };

    var gl =
      canvasEl.getContext("webgl", { antialias: true, alpha: false }) ||
      canvasEl.getContext("experimental-webgl");

    if (!gl) {
      // Graceful fallback if WebGL is disabled: switch directly to YouTube 360° embed
      if (vrYtId && ytFrame) {
        ytFrame.src =
          "https://www.youtube-nocookie.com/embed/" +
          vrYtId +
          "?rel=0&modestbranding=1&playsinline=1";
        ytFrame.hidden = false;
        canvasEl.hidden = true;
        if (overlayBtn) overlayBtn.hidden = true;
        if (dragHintEl) dragHintEl.hidden = true;
      }
      return;
    }

    var vsSrc =
      "attribute vec2 aPos;" +
      "varying vec2 vUv;" +
      "void main() {" +
      "  vUv = aPos * 0.5 + 0.5;" +
      "  gl_Position = vec4(aPos, 0.0, 1.0);" +
      "}";

    var fsSrc =
      "precision highp float;" +
      "varying vec2 vUv;" +
      "uniform sampler2D uTex;" +
      "uniform float uYaw;" +
      "uniform float uPitch;" +
      "uniform float uTanHalfFov;" +
      "uniform float uAspect;" +
      "const float PI = 3.141592653589793;" +
      "void main() {" +
      "  vec2 ndc = vec2((vUv.x * 2.0 - 1.0) * uAspect, vUv.y * 2.0 - 1.0);" +
      "  vec3 dir = normalize(vec3(ndc.x * uTanHalfFov, ndc.y * uTanHalfFov, 1.0));" +
      "  float cp = cos(uPitch), sp = sin(uPitch);" +
      "  float y1 = dir.y * cp + dir.z * sp;" +
      "  float z1 = dir.z * cp - dir.y * sp;" +
      "  float cy = cos(uYaw), sy = sin(uYaw);" +
      "  float wx = dir.x * cy + z1 * sy;" +
      "  float wz = z1 * cy - dir.x * sy;" +
      "  float wy = clamp(y1, -1.0, 1.0);" +
      "  float lam = atan(wx, wz);" +
      "  float phi = asin(wy);" +
      "  float u = fract(lam / (2.0 * PI) + 0.5);" +
      "  float v = clamp(0.5 - phi / PI, 0.001, 0.999);" +
      "  gl_FragColor = texture2D(uTex, vec2(u, v));" +
      "}";

    function compileShader(type, src) {
      var sh = gl.createShader(type);
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return sh;
    }

    var prog = gl.createProgram();
    gl.attachShader(prog, compileShader(gl.VERTEX_SHADER, vsSrc));
    gl.attachShader(prog, compileShader(gl.FRAGMENT_SHADER, fsSrc));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    var quadBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    var aPosLoc = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(aPosLoc);
    gl.vertexAttribPointer(aPosLoc, 2, gl.FLOAT, false, 0, 0);

    var uYawLoc = gl.getUniformLocation(prog, "uYaw");
    var uPitchLoc = gl.getUniformLocation(prog, "uPitch");
    var uTanLoc = gl.getUniformLocation(prog, "uTanHalfFov");
    var uAspectLoc = gl.getUniformLocation(prog, "uAspect");

    var tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([8, 8, 8, 255]));

    var posterImg = new Image();
    posterImg.crossOrigin = "anonymous";
    posterImg.onload = function () {
      posterReady = true;
      if (videoEl.readyState < 2) {
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, posterImg);
      }
    };
    posterImg.src = vrPoster;

    function startPlayback() {
      if (isYtMode) return;
      if (overlayBtn) overlayBtn.hidden = true;
      var p = videoEl.play();
      if (p && typeof p.catch === "function") {
        p.catch(function () {});
      }
      syncVr360DynamicLabels();
    }

    function togglePlay() {
      if (isYtMode) return;
      if (videoEl.paused) {
        startPlayback();
      } else {
        videoEl.pause();
        syncVr360DynamicLabels();
      }
    }

    if (overlayBtn) {
      var badge = overlayBtn.querySelector(".vf-play-badge") || overlayBtn;
      badge.addEventListener("click", function (ev) {
        ev.stopPropagation();
        startPlayback();
      });
    }
    if (btnPlay) {
      btnPlay.addEventListener("click", togglePlay);
    }

    videoEl.addEventListener("play", function () {
      if (overlayBtn) overlayBtn.hidden = true;
      syncVr360DynamicLabels();
    });
    videoEl.addEventListener("pause", function () {
      syncVr360DynamicLabels();
    });
    videoEl.addEventListener("timeupdate", function () {
      var dur = videoEl.duration && isFinite(videoEl.duration) ? videoEl.duration : 180;
      if (scrubEl && !scrubEl.matches(":active")) {
        scrubEl.max = String(dur);
        scrubEl.value = String(videoEl.currentTime);
      }
      if (timeEl) {
        timeEl.textContent = fmtClock(videoEl.currentTime) + " / " + fmtClock(dur);
      }
    });

    if (scrubEl) {
      scrubEl.addEventListener("input", function () {
        var v = parseFloat(scrubEl.value);
        if (!isNaN(v)) {
          videoEl.currentTime = v;
        }
      });
    }

    if (btnMute) {
      btnMute.addEventListener("click", function () {
        videoEl.muted = !videoEl.muted;
        syncVr360DynamicLabels();
      });
    }

    if (btnRecenter) {
      btnRecenter.addEventListener("click", function () {
        targetYaw = 0;
        targetPitch = -2;
        vfovDeg = 52;
      });
    }

    if (btnFs) {
      btnFs.addEventListener("click", function () {
        var vf = document.getElementById("vr360-viewfinder") || screenEl;
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else if (vf.requestFullscreen) {
          vf.requestFullscreen();
        } else if (vf.webkitRequestFullscreen) {
          vf.webkitRequestFullscreen();
        }
      });
    }

    if (btnMode && vrYtId && ytFrame) {
      btnMode.addEventListener("click", function () {
        isYtMode = !isYtMode;
        if (isYtMode) {
          videoEl.pause();
          ytFrame.src =
            "https://www.youtube-nocookie.com/embed/" +
            vrYtId +
            "?rel=0&modestbranding=1&playsinline=1&autoplay=1&vq=hd2160";
          ytFrame.hidden = false;
          canvasEl.hidden = true;
          if (overlayBtn) overlayBtn.hidden = true;
          if (dragHintEl) dragHintEl.hidden = true;
        } else {
          ytFrame.src = "about:blank";
          ytFrame.hidden = true;
          canvasEl.hidden = false;
          if (dragHintEl) dragHintEl.hidden = false;
          startPlayback();
        }
        syncVr360DynamicLabels();
      });
    }

    // 8-camera preset jump buttons
    for (var ci = 0; ci < camBtns.length; ci++) {
      camBtns[ci].addEventListener("click", function (ev) {
        var btn = ev.currentTarget;
        var y = parseFloat(btn.getAttribute("data-vr-yaw") || "0");
        var p = parseFloat(btn.getAttribute("data-vr-pitch") || "0");
        // Shortest angular path from current targetYaw
        var diff = normYaw(y - targetYaw);
        targetYaw = targetYaw + diff;
        targetPitch = p;
        if (isYtMode && btnMode) {
          btnMode.click();
        }
      });
    }

    // Pointer / Touch look-around + Pinch/Wheel zoom
    function fadeHint() {
      if (dragHintEl) dragHintEl.classList.add("is-faded");
    }

    screenEl.addEventListener("mousedown", function (ev) {
      if (isYtMode) return;
      isDragging = true;
      lastX = ev.clientX;
      lastY = ev.clientY;
      screenEl.classList.add("is-dragging");
      fadeHint();
    });

    window.addEventListener("mousemove", function (ev) {
      if (!isDragging || isYtMode) return;
      var dx = ev.clientX - lastX;
      var dy = ev.clientY - lastY;
      lastX = ev.clientX;
      lastY = ev.clientY;
      var speed = vfovDeg / 460;
      targetYaw -= dx * speed;
      targetPitch = Math.max(-82, Math.min(82, targetPitch + dy * speed));
      yawDeg = targetYaw;
      pitchDeg = targetPitch;
    });

    window.addEventListener("mouseup", function () {
      if (isDragging) {
        isDragging = false;
        screenEl.classList.remove("is-dragging");
      }
    });

    screenEl.addEventListener(
      "touchstart",
      function (ev) {
        if (isYtMode) return;
        fadeHint();
        if (ev.touches.length === 1) {
          isDragging = true;
          lastX = ev.touches[0].clientX;
          lastY = ev.touches[0].clientY;
        } else if (ev.touches.length === 2) {
          isDragging = false;
          var dx = ev.touches[0].clientX - ev.touches[1].clientX;
          var dy = ev.touches[0].clientY - ev.touches[1].clientY;
          pinchDist = Math.sqrt(dx * dx + dy * dy);
        }
      },
      { passive: true }
    );

    screenEl.addEventListener(
      "touchmove",
      function (ev) {
        if (isYtMode) return;
        if (ev.touches.length === 1 && isDragging) {
          ev.preventDefault();
          var dx = ev.touches[0].clientX - lastX;
          var dy = ev.touches[0].clientY - lastY;
          lastX = ev.touches[0].clientX;
          lastY = ev.touches[0].clientY;
          var speed = vfovDeg / 340;
          targetYaw -= dx * speed;
          targetPitch = Math.max(-82, Math.min(82, targetPitch + dy * speed));
          yawDeg = targetYaw;
          pitchDeg = targetPitch;
        } else if (ev.touches.length === 2 && pinchDist > 0) {
          ev.preventDefault();
          var ndx = ev.touches[0].clientX - ev.touches[1].clientX;
          var ndy = ev.touches[0].clientY - ev.touches[1].clientY;
          var dist = Math.sqrt(ndx * ndx + ndy * ndy);
          vfovDeg = Math.max(28, Math.min(72, vfovDeg * (pinchDist / Math.max(dist, 1))));
          pinchDist = dist;
        }
      },
      { passive: false }
    );

    screenEl.addEventListener("touchend", function () {
      isDragging = false;
      pinchDist = 0;
    });

    screenEl.addEventListener(
      "wheel",
      function (ev) {
        if (isYtMode) return;
        ev.preventDefault();
        fadeHint();
        vfovDeg = Math.max(28, Math.min(72, vfovDeg + (ev.deltaY > 0 ? 3.2 : -3.2)));
      },
      { passive: false }
    );

    screenEl.addEventListener("keydown", function (ev) {
      if (isYtMode) return;
      if (ev.key === "ArrowLeft") {
        ev.preventDefault();
        targetYaw -= 8;
      } else if (ev.key === "ArrowRight") {
        ev.preventDefault();
        targetYaw += 8;
      } else if (ev.key === "ArrowUp") {
        ev.preventDefault();
        targetPitch = Math.min(82, targetPitch + 6);
      } else if (ev.key === "ArrowDown") {
        ev.preventDefault();
        targetPitch = Math.max(-82, targetPitch - 6);
      } else if (ev.key === " ") {
        ev.preventDefault();
        togglePlay();
      }
    });

    // Optional Mobile Gyroscope support
    if (btnGyro && typeof window.DeviceOrientationEvent !== "undefined" && "ontouchstart" in window) {
      btnGyro.hidden = false;
      btnGyro.addEventListener("click", function () {
        if (gyroEnabled) {
          gyroEnabled = false;
          gyroBaseAlpha = null;
          syncVr360DynamicLabels();
          return;
        }
        var enableListener = function () {
          gyroEnabled = true;
          gyroBaseAlpha = null;
          syncVr360DynamicLabels();
        };
        if (typeof window.DeviceOrientationEvent.requestPermission === "function") {
          window.DeviceOrientationEvent.requestPermission()
            .then(function (state) {
              if (state === "granted") enableListener();
            })
            .catch(function () {});
        } else {
          enableListener();
        }
      });

      window.addEventListener("deviceorientation", function (ev) {
        if (!gyroEnabled || isDragging || ev.alpha === null) return;
        if (gyroBaseAlpha === null) gyroBaseAlpha = ev.alpha;
        targetYaw = -(ev.alpha - gyroBaseAlpha);
        if (ev.beta !== null) {
          targetPitch = Math.max(-75, Math.min(75, ev.beta - 65));
        }
      });
    }

    function renderLoop() {
      if (!isYtMode) {
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var cw = Math.max(1, Math.floor(canvasEl.clientWidth * dpr));
        var ch = Math.max(1, Math.floor(canvasEl.clientHeight * dpr));
        if (canvasEl.width !== cw || canvasEl.height !== ch) {
          canvasEl.width = cw;
          canvasEl.height = ch;
          gl.viewport(0, 0, cw, ch);
        }

        // Smooth camera easing toward targetYaw / targetPitch
        yawDeg += (targetYaw - yawDeg) * 0.16;
        pitchDeg += (targetPitch - pitchDeg) * 0.16;

        if (videoEl.readyState >= 2) {
          gl.bindTexture(gl.TEXTURE_2D, tex);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, videoEl);
        } else if (posterReady) {
          gl.bindTexture(gl.TEXTURE_2D, tex);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, posterImg);
        }

        gl.useProgram(prog);
        gl.uniform1f(uYawLoc, (normYaw(yawDeg) * Math.PI) / 180);
        gl.uniform1f(uPitchLoc, (pitchDeg * Math.PI) / 180);
        gl.uniform1f(uTanLoc, Math.tan((vfovDeg * Math.PI) / 360));
        gl.uniform1f(uAspectLoc, cw / ch);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        updateHud();
      }
      window.requestAnimationFrame(renderLoop);
    }

    updateHud();
    syncVr360DynamicLabels();
    window.requestAnimationFrame(renderLoop);
  }

  function wireWatchRoom() {
    var root = document.getElementById("watch-player-root");
    if (!root) return;

    var isWorkerMode = trimStr(cfg.mode).toLowerCase() === "worker";
    var workerUrl = trimStr(cfg.WORKER_URL).replace(/\/+$/, "");
    var params = new URLSearchParams(window.location.search);
    var token = trimStr(params.get("token"));
    var sessionId = trimStr(params.get("session_id"));

    var gateEl = document.getElementById("watch-gate");
    var videoEl = document.getElementById("film-video");
    var hudModeEl = document.getElementById("watch-hud-mode");
    var controlsBar = document.getElementById("watch-controls-bar");
    var downloadEl = document.getElementById("watch-download");

    // Payment Links mode: Stripe redirects buyers here with the YouTube video id
    // in the URL (?v=VIDEO_ID&plan=rent|own&session_id=...). The id lives only in
    // the Stripe Payment Link settings, never in this public code.
    // Free release: with no ?v, the Screening Room plays cfg.freeVideoId.
    var ytId = trimStr(params.get("v"));
    var freeId = trimStr(cfg.freeVideoId);
    var planRaw = trimStr(params.get("plan")).toLowerCase();
    if (!ytId && freeId) {
      ytId = freeId;
      planRaw = "free";
    }
    if (!isWorkerMode && /^[A-Za-z0-9_-]{11}$/.test(ytId)) {
      watchRoomPlan = planRaw === "own" ? "own" : planRaw === "rent" ? "rent" : planRaw === "support" ? "support" : planRaw === "free" ? "free" : "";
      watchRoomState = "yt";

      var screen = root.querySelector(".vf-screen");
      if (screen) {
        var frame = document.createElement("iframe");
        frame.src =
          "https://www.youtube-nocookie.com/embed/" +
          ytId +
          "?rel=0&modestbranding=1&playsinline=1";
        frame.title = "HOW I SEE — full film";
        frame.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen";
        frame.allowFullscreen = true;
        frame.referrerPolicy = "strict-origin-when-cross-origin";
        screen.insertBefore(frame, screen.firstChild);
      }
      if (gateEl) gateEl.hidden = true;
      if (hudModeEl) {
        hudModeEl.textContent =
          watchRoomPlan === "own"
            ? "OWNED"
            : watchRoomPlan === "rent"
              ? "RENTAL \u00b7 48 HOURS"
              : watchRoomPlan === "support"
                ? "SUPPORTER"
                : watchRoomPlan === "free"
                  ? "FREE SCREENING"
                  : "SCREENING ROOM";
      }
      if (controlsBar) controlsBar.hidden = false;
      renderWatchRoomDynamicCopy();
      return;
    }

    if (!isWorkerMode || !workerUrl || (!token && !sessionId)) {
      return;
    }

    watchRoomState = "verifying";
    renderWatchRoomDynamicCopy();

    var query = new URLSearchParams();
    if (token) query.set("token", token);
    if (sessionId) query.set("session_id", sessionId);

    fetch(workerUrl + "/access?" + query.toString(), {
      method: "GET",
      headers: { "Accept": "application/json" }
    })
      .then(function (res) {
        if (!res.ok) throw new Error("Access denied");
        return res.json();
      })
      .then(function (data) {
        if (!data || !data.streamUrl) {
          throw new Error("Missing stream URL");
        }
        watchRoomState = "active";
        watchRoomData = data;

        if (videoEl) {
          videoEl.src = data.streamUrl;
          videoEl.hidden = false;
        }
        if (gateEl) {
          gateEl.hidden = true;
        }
        if (hudModeEl) {
          hudModeEl.textContent = data.downloadUrl ? "OWNED \u00b7 HD" : "RENTAL \u00b7 HD";
        }
        if (controlsBar) {
          controlsBar.hidden = false;
        }
        if (downloadEl && data.downloadUrl) {
          downloadEl.href = data.downloadUrl;
          downloadEl.hidden = false;
        }
        renderWatchRoomDynamicCopy();
      })
      .catch(function () {
        watchRoomState = "expired";
        renderWatchRoomDynamicCopy();
      });
  }

  var syncInterviewsSection = null;

  function wireInterviews() {
    var listEl = document.getElementById("interviews-list");
    var items = Array.isArray(window.INTERVIEWS_DATA) ? window.INTERVIEWS_DATA : [];
    if (!listEl || !items.length) return;

    var iframeEl = document.getElementById("interviews-iframe");
    var screenEl = document.getElementById("interviews-screen");
    var nowEl = document.getElementById("interviews-now");
    var ytLinkEl = document.getElementById("interviews-yt-link");
    var toggleAllBtn = document.getElementById("interviews-toggle-all");

    var vid = trimStr(cfg.interviewsVideoId) || "QgwRsArIVKI";
    var ytBaseUrl = trimStr(cfg.interviewsYoutubeUrl) || "https://youtu.be/" + vid;

    if (iframeEl && iframeEl.getAttribute("src").indexOf(vid) === -1) {
      iframeEl.src =
        "https://www.youtube-nocookie.com/embed/" +
        vid +
        "?rel=0&modestbranding=1&playsinline=1";
    }
    if (ytLinkEl) {
      ytLinkEl.href = ytBaseUrl;
    }

    var cuedNum = "";
    var cuedTimeLabel = "";
    var openNums = {};

    function parseTimeSec(mmss) {
      var parts = String(mmss || "").split(":");
      if (parts.length === 2) {
        var m = parseInt(parts[0], 10);
        var s = parseInt(parts[1], 10);
        if (!isNaN(m) && !isNaN(s)) return m * 60 + s;
      }
      return 0;
    }

    function updateNowPlayingLabel() {
      if (!nowEl) return;
      if (!cuedNum) {
        nowEl.textContent = t("interviews.fullReel");
        return;
      }
      var match = null;
      for (var i = 0; i < items.length; i++) {
        if (items[i].num === cuedNum) {
          match = items[i];
          break;
        }
      }
      if (!match) {
        nowEl.textContent = t("interviews.fullReel");
        return;
      }
      var personName =
        (currentLang === "ja" && match.name && match.name.ja) ||
        (match.name && match.name.en) ||
        "";
      nowEl.textContent =
        t("interviews.cuedPrefix") +
        " " +
        match.num +
        " \u00b7 " +
        personName +
        " (" +
        cuedTimeLabel +
        ")";
    }

    function updateToggleAllState() {
      if (!toggleAllBtn) return;
      var detailsNodes = listEl.querySelectorAll("details.interview-transcript");
      var allOpen = detailsNodes.length > 0;
      for (var i = 0; i < detailsNodes.length; i++) {
        if (!detailsNodes[i].open) {
          allOpen = false;
          break;
        }
      }
      toggleAllBtn.setAttribute("aria-expanded", allOpen ? "true" : "false");
      toggleAllBtn.textContent = allOpen ? t("interviews.collapseAll") : t("interviews.expandAll");
    }

    function cueToSecond(item, sec, label) {
      var safeSec = Math.max(0, Math.floor(sec || 0));
      cuedNum = item.num;
      cuedTimeLabel = label || item.startLabel || item.time;

      if (iframeEl) {
        iframeEl.src =
          "https://www.youtube-nocookie.com/embed/" +
          vid +
          "?start=" +
          safeSec +
          "&autoplay=1&rel=0&modestbranding=1&playsinline=1";
      }
      if (ytLinkEl) {
        ytLinkEl.href =
          ytBaseUrl + (ytBaseUrl.indexOf("?") === -1 ? "?" : "&") + "t=" + safeSec + "s";
      }

      var cards = listEl.querySelectorAll(".interview-card");
      for (var i = 0; i < cards.length; i++) {
        cards[i].classList.toggle(
          "is-cued",
          cards[i].getAttribute("data-chapter-num") === cuedNum
        );
      }

      updateNowPlayingLabel();

      if (screenEl && typeof screenEl.scrollIntoView === "function") {
        var reduce =
          window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        screenEl.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
      }
    }

    function renderCards() {
      var existingDetails = listEl.querySelectorAll("details.interview-transcript[data-num]");
      for (var d = 0; d < existingDetails.length; d++) {
        openNums[existingDetails[d].getAttribute("data-num")] = existingDetails[d].open;
      }

      listEl.innerHTML = "";
      var frag = document.createDocumentFragment();

      for (var i = 0; i < items.length; i++) {
        (function (item) {
          var nameText =
            (currentLang === "ja" && item.name && item.name.ja) ||
            (item.name && item.name.en) ||
            "";
          var metaText =
            (currentLang === "ja" && item.meta && item.meta.ja) ||
            (item.meta && item.meta.en) ||
            "";
          var bioText =
            (currentLang === "ja" && item.bio && item.bio.ja) ||
            (item.bio && item.bio.en) ||
            "";

          var card = document.createElement("article");
          card.className = "interview-card" + (cuedNum === item.num ? " is-cued" : "");
          card.setAttribute("data-chapter-num", item.num);

          var head = document.createElement("div");
          head.className = "interview-head";

          var titleGroup = document.createElement("div");
          titleGroup.className = "interview-title-group";

          var numSpan = document.createElement("span");
          numSpan.className = "interview-num";
          numSpan.textContent = item.num;

          var nameEl = document.createElement("h3");
          nameEl.className = "interview-name";
          nameEl.textContent = nameText;

          titleGroup.appendChild(numSpan);
          titleGroup.appendChild(nameEl);

          var jumpBtn = document.createElement("button");
          jumpBtn.type = "button";
          jumpBtn.className = "interview-jump-btn";
          jumpBtn.setAttribute(
            "aria-label",
            t("interviews.playChapterAria") + nameText + " (" + item.startLabel + ")"
          );
          jumpBtn.textContent = "\u25b6 " + item.time;
          jumpBtn.addEventListener("click", function () {
            cueToSecond(item, item.startSec, item.time);
          });

          head.appendChild(titleGroup);
          head.appendChild(jumpBtn);
          card.appendChild(head);

          if (metaText) {
            var metaEl = document.createElement("p");
            metaEl.className = "interview-meta";
            metaEl.textContent = metaText;
            card.appendChild(metaEl);
          }

          if (bioText) {
            var bioEl = document.createElement("p");
            bioEl.className = "interview-bio";
            bioEl.textContent = bioText;
            card.appendChild(bioEl);
          }

          var turns = Array.isArray(item.turns) ? item.turns : [];
          if (turns.length) {
            var detailsEl = document.createElement("details");
            detailsEl.className = "interview-transcript";
            detailsEl.setAttribute("data-num", item.num);
            if (openNums[item.num]) {
              detailsEl.open = true;
            }

            var summaryEl = document.createElement("summary");
            summaryEl.textContent =
              t("interviews.readTranscript") +
              " \u00b7 " +
              turns.length +
              (currentLang === "ja" ? "" : " ") +
              t("interviews.turnsUnit");
            detailsEl.appendChild(summaryEl);

            var turnsWrap = document.createElement("div");
            turnsWrap.className = "transcript-turns";

            for (var q = 0; q < turns.length; q++) {
              (function (turn) {
                var pEl = document.createElement("p");
                pEl.className = "transcript-turn";

                var cueBtn = document.createElement("button");
                cueBtn.type = "button";
                cueBtn.className = "turn-cue";
                cueBtn.textContent = "[" + turn.t + "]";
                cueBtn.setAttribute(
                  "aria-label",
                  t("interviews.playChapterAria") + turn.t
                );
                cueBtn.addEventListener("click", function () {
                  cueToSecond(item, parseTimeSec(turn.t), turn.t);
                });

                var speakerEl = document.createElement("strong");
                speakerEl.className = "turn-speaker";
                var spk = currentLang === "ja" && turn.sJa ? turn.sJa : turn.s;
                speakerEl.textContent = spk + ":";

                pEl.appendChild(cueBtn);
                pEl.appendChild(speakerEl);
                pEl.appendChild(document.createTextNode(" " + turn.line));
                turnsWrap.appendChild(pEl);
              })(turns[q]);
            }

            detailsEl.appendChild(turnsWrap);
            detailsEl.addEventListener("toggle", function () {
              openNums[item.num] = detailsEl.open;
              updateToggleAllState();
            });

            card.appendChild(detailsEl);
          }

          frag.appendChild(card);
        })(items[i]);
      }

      listEl.appendChild(frag);
      updateNowPlayingLabel();
      updateToggleAllState();
    }

    if (toggleAllBtn) {
      toggleAllBtn.addEventListener("click", function () {
        var detailsNodes = listEl.querySelectorAll("details.interview-transcript");
        var shouldOpen = toggleAllBtn.getAttribute("aria-expanded") !== "true";
        for (var i = 0; i < detailsNodes.length; i++) {
          detailsNodes[i].open = shouldOpen;
          var n = detailsNodes[i].getAttribute("data-num");
          if (n) openNums[n] = shouldOpen;
        }
        updateToggleAllState();
      });
    }

    syncInterviewsSection = renderCards;
  }

  wireGlobalLinks();
  wireMenuAndLanguageControls();
  wireVr360Player();
  wireInterviews();
  applyLanguage(detectInitialLang(), false);
  wireWatchRoom();
})();
