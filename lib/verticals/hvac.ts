import type { VerticalConfig } from "./types";

export const hvacConfig: VerticalConfig = {
  slug: "hvac-answering-service",

  meta: {
    title: "HVAC Answering Service California — Never Miss Another Call",
    description:
      "24/7 bilingual AI answering service for California HVAC contractors. Every call answered, every emergency triaged, every call booked into Jobber, ServiceTitan, HousecallPro, or FieldEdge. One recovered emergency pays for 3 months.",
    canonical: "/services/hvac-answering-service",
  },

  verticalBar: {
    icon: "temperature",
    label: "Built for California HVAC contractors",
  },

  oneLiner:
    "California HVAC contractors lose up to 6 of every 10 after-hours calls to voicemail. We answer every one 24/7 in English and Spanish and book it straight into your dispatch software — so you stop losing emergencies and your trucks stay full.",

  hero: {
    eyebrow: "AI receptionist · 24/7 · Bilingual EN/ES",
    headline: "Never lose another {italicWord} to a missed call.",
    italicWord: "customer",
    subhead: {
      seoBold: "24/7 bilingual AI answering service for California HVAC contractors.",
      body:
        "You shouldn't lose a $1,200 emergency because you were on a roof, in a crawlspace, or asleep. We answer every call, qualify the call, and text you the details.",
    },
    sampleBusinessName: "Sunrise Heating & Air",
    chat: [
      { speaker: "bot", text: "Hello! Thank you for calling. How can I help you today?" },
      { speaker: "user", text: "My AC just went out — house is getting hot fast." },
      { speaker: "bot", text: "I'm sorry to hear that. Let me get a tech out today." },
    ],
  },

  trustStrip: [
    { icon: "map-pin", label: "Made in California" },
    { icon: "shield-check", label: "CCPA-compliant recording" },
    { icon: "language", label: "Bilingual EN/ES" },
    { icon: "lock", label: "HIPAA-aware mode available" },
  ],

  stakes: {
    sectionNum: "01 · The after-hours problem",
    title: "The math behind every missed call.",
    stats: [
      { num: "62%", label: "of after-hours HVAC calls go unanswered" },
      { num: "$275–$1,200", label: "value of each emergency call walking to your competitor" },
      { num: "3–5×", label: "summer call spike during heat waves — most go to voicemail" },
    ],
    rankingNote:
      "Google sees roughly half of US phone calls through Android — whether you answered, how long you talked, and whether the homeowner dialed another contractor next. Shops that stop answering measurably drop in local rank. A 100% answer rate protects the Maps position your emergency calls come from.",
  },

  vocQuote: {
    quote: "We used to just let calls go to voicemail. We definitely lost jobs over it.",
    attribution: "— What we hear from California service-business owners every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The calls you're already losing.",
    cards: [
      { time: "11:47 PM", body: "Their AC just died. They're sweating. You're asleep. They call the next guy on Google." },
      { time: "2:14 PM", body: "You're mid-install in a 110° attic. Three calls go to voicemail. Two never call back." },
      { time: "July heatwave", body: "Phone hasn't stopped since Monday. You answer 15 of 50. The other 35 went somewhere — and you'll never know where." },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You didn't start an HVAC business to answer phones.",
    empathy:
      "You started it to do clean installs and fast repairs — not chase voicemails. But the phone never stops. It rings 20 feet up a ladder. It rings during dinner. It rings at 11 PM on a Saturday in July. Every call you can't answer is a job your competitor just booked.",
    authority: [
      { num: "24/7", label: "Every call, every hour — including 2 AM emergencies" },
      { num: "EN/ES", label: "Bilingual from the first ring" },
      { num: "60 sec", label: "From call ending to booking confirmation" },
      { num: "5+", label: "Native sync with the dispatch tools you already use" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI receptionist works",
    title: "Three steps to never miss another call.",
    steps: [
      { num: 1, heading: "Forward your phone", body: "60 seconds. Works with any provider — Twilio, Google Voice, RingCentral, Verizon, AT&T." },
      { num: 2, heading: "We qualify the call", body: "No heat? No AC? Capacitor? Tune-up? Triaged, scheduled, dispatched — 24/7, in English or Spanish." },
      { num: 3, heading: "You get the job", body: "Booked into Jobber, ServiceTitan, HousecallPro, or FieldEdge — plus SMS in 60 seconds. Emergencies routed to your cell within 30 seconds." },
    ],
  },

  integrations: {
    label: "Syncs with your dispatch software",
    items: ["Jobber", "ServiceTitan", "HousecallPro", "FieldEdge", "Google Calendar"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "You finish the last job at 6 PM. You go home. You eat dinner. Your phone keeps ringing — every call gets answered. By Monday, your schedule is full. You didn't book a single one yourself.",
    items: [
      { icon: "moon", text: "You sleep through the night." },
      { icon: "calendar-check", text: "Your calendar fills itself." },
      { icon: "trending-up", text: "Revenue climbs without more trucks." },
      { icon: "mood-smile", text: "You go back to liking your job." },
    ],
    before: [
      { icon: "phone-ringing", text: "You answer the phone at dinner." },
      { icon: "moon-off", text: "You call back at 9 PM." },
      { icon: "trending-down", text: "Half the leads go to the next contractor." },
      { icon: "mood-sad", text: "You're tired of your own business." },
    ],
  },

  voices: {
    sectionNum: "06 · Voices",
    title: "Human-standard AI voice agents.",
    sub: "Out of the box, ready to use.",
  },

  compare: {
    sectionNum: "07 · Compare",
    title: "What you'd pay otherwise.",
    rows: [
      { what: "Voicemail", cost: "$0/mo", result: "Lose 6 of 10 after-hours calls" },
      { what: "Part-time CA dispatcher", cost: "~$1,600/mo", result: "20 hrs/week, English only" },
      { what: "Full-time CA receptionist", cost: "$3,200–$4,000/mo", result: "9–5 only · $48K/yr loaded" },
    ],
  },

  unlimited: {
    headline: "Most answering services cap your minutes. We don't.",
    competitors: [
      { name: "Simple Phones $49/mo", cap: "100 calls cap" },
      { name: "AnswerConnect $350/mo", cap: "$1.85/min overage" },
      { name: "Upfirst $24.95/mo", cap: "30 calls cap" },
    ],
  },

  pricingAudience: "For HVAC shops that lose $1,200 every time a Saturday emergency hits voicemail",

  // Homepage-only cross-vertical editorial links — one H2 + in-content link per
  // live Wave-1 vertical. Grow per wave (cap 7–8).
  crossVerticals: {
    sectionNum: "13 · Beyond HVAC",
    title: "The same receptionist, other phones.",
    items: [
      {
        heading: "California law firms lose retainers, not service calls",
        body:
          "A missed call to a California solo or small firm averages $3,000–$10,000 in lost retainer value, and Spanish-speaking PI and immigration clients usually call three or four firms in one sitting — the first one to answer signs the case. Our ",
        href: "/services/attorney-answering-service",
        linkText: "attorney answering service",
        after:
          " runs a conflict check during the call, qualifies the matter by practice area, and books the consult into Clio, MyCase, or PracticePanther before the caller dials the next firm.",
      },
      {
        heading: "Owner-operators answering their own phone",
        body:
          "If you are the receptionist, you already know the math: roughly 62% of calls go unanswered while you're doing the actual work, and most callers won't wait a minute before trying a competitor. Our ",
        href: "/services/small-business-answering-service",
        linkText: "small business answering service",
        after:
          " picks up within two rings, books straight into your calendar, and texts you a summary — same flat $500/mo, no per-minute fees, English and Spanish on every account.",
      },
    ],
  },

  faqs: [
    {
      q: "How does the AI receptionist work?",
      a: "You forward your business line to a number we provide. Every incoming call is answered within 2 rings, 24/7. Our AI qualifies the caller — name, callback, service needed, urgency — books the appointment into your dispatch software, and texts you a summary within 60 seconds. Emergencies escalate to your cell within 30 seconds.",
    },
    {
      q: "Can I customize the AI voice and responses?",
      a: "Yes. Pick from our three standard voices (see the Voices section above), and we'll script the responses to match how you actually talk to customers — including the questions you want asked and the booking rules you want enforced.",
    },
    {
      q: "What happens if the AI can't answer a question?",
      a: "The AI takes a message, texts you the details immediately, and books a callback slot. For emergencies — water leaks, no heat in winter, no AC over 95° — it routes directly to your cell within 30 seconds.",
    },
    {
      q: "Is there a contract or can I cancel anytime?",
      a: "Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI, train it on your business, and go live before you lose another weekend job.",
    },
    {
      q: "Do you integrate with my existing phone system?",
      a: "Yes — Twilio, Google Voice, RingCentral, Verizon, AT&T, and most VoIP systems. Setup takes 60 seconds and works without changing your business number.",
    },
  ],

  finalCta: {
    headline: "Your trucks should run on bookings, not voicemails.",
    sub: "Three minutes to know if this is for you.",
  },
};
