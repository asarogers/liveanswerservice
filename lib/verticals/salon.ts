import type { VerticalConfig } from "./types";

export const salonConfig: VerticalConfig = {
  slug: "salon-and-spa-answering-service",

  meta: {
    title: "Live Answer for Salons & Spas — Every booking, captured",
    description:
      "24/7 bilingual AI receptionist for California salons and spas. Books appointments into Vagaro, Mindbody, Booksy, Square Appointments. The chair earns when the phone answers.",
    canonical: "/services/salon-and-spa-answering-service",
  },

  verticalBar: {
    icon: "cut",
    label: "Built for California salons & spas",
  },

  oneLiner:
    "Salons and spas lose bookings every time the phone rings mid-service. We answer every call 24/7 in English and Spanish and book the right service with the right stylist — so you stop losing appointments and every chair stays earning.",

  hero: {
    eyebrow: "AI receptionist · 24/7 · Bilingual EN/ES",
    headline: "Every {italicWord}. Captured.",
    italicWord: "appointment",
    subhead: {
      seoBold: "24/7 bilingual AI receptionist for California salons and spas.",
      body:
        "You shouldn't lose a $200 highlight appointment because you were mid-foil and couldn't pick up. We answer every call, book the right service with the right stylist, and text you the confirmation.",
    },
    sampleBusinessName: "Studio Maple",
    chat: [
      { speaker: "bot", text: "Studio Maple — how can I help?" },
      { speaker: "user", text: "Can I book a balayage with Maria next Saturday?" },
      { speaker: "bot", text: "Let me check — Maria has 11 AM or 2:30. Which works?" },
    ],
  },

  trustStrip: [
    { icon: "map-pin", label: "Made in California" },
    { icon: "shield-check", label: "CCPA-compliant recording" },
    { icon: "language", label: "Bilingual EN/ES" },
    { icon: "phone", label: "Spam &amp; robocall filter" },
  ],

  stakes: {
    sectionNum: "01 · The chair-time problem",
    title: "The math behind every missed call.",
    stats: [
      { num: "30–50%", label: "of calls hit voicemail while stylists are with a client" },
      { num: "$75–$300", label: "value of each appointment walking to the next salon" },
      { num: "60 sec", label: "before they book at the salon down the street" },
    ],
  },

  vocQuote: {
    quote: "We used to just let calls go to voicemail. We definitely lost jobs over it.",
    attribution: "— What we hear from California service-business owners every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The calls you're already losing.",
    cards: [
      { time: "2:30 PM Saturday", body: "Every chair is full, no one can pick up. Three call-in bookings for next week go to voicemail. Two book somewhere else." },
      { time: "After hours", body: "She remembered she needs a cut before her wedding while making dinner. Your line goes to voicemail. She books online with a competitor." },
      { time: "Spanish-language", body: "First-time client calls in Spanish. No bilingual greeting. She hangs up and Yelps a salon that takes the call." },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "Your stylists shouldn't have to choose between the chair and the phone.",
    empathy:
      "Every chair-time interruption costs you twice — once on the missed call, once on the rushed service in the chair. Saturdays are the worst. Every voicemail at peak hours is an appointment that booked the salon across the street.",
    authority: [
      { num: "24/7", label: "Every call, every hour — including peak Saturday booking rushes" },
      { num: "EN/ES", label: "Bilingual from the first ring" },
      { num: "Service-aware", label: "Maps the call to the right stylist + service duration" },
      { num: "4+", label: "Native sync: Vagaro, Mindbody, Booksy, Square Appointments" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI receptionist works",
    title: "Three steps to never miss another booking.",
    steps: [
      { num: 1, heading: "Forward your phone", body: "60 seconds. Works with any provider — Twilio, RingCentral, Verizon, AT&T." },
      { num: 2, heading: "We book the appointment", body: "Service? Stylist preference? Duration? Captured and booked — 24/7, in English or Spanish." },
      { num: 3, heading: "Books into your software", body: "Straight into Vagaro, Mindbody, Booksy, or Square Appointments — plus SMS confirmation to the client and to you." },
    ],
  },

  integrations: {
    label: "Syncs with your booking software",
    items: ["Vagaro", "Mindbody", "Booksy", "Square Appointments", "Google Calendar"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "Saturday is fully booked. Your stylists never picked up the phone — they were in chairs all day, earning. New appointments came in steadily through Vagaro. No-shows dropped because every client got an SMS reminder. Revenue climbed without adding chairs.",
    items: [
      { icon: "moon", text: "Stylists stop being interrupted mid-service." },
      { icon: "calendar-check", text: "Your book fills itself." },
      { icon: "trending-up", text: "Chair-time revenue climbs without new hires." },
      { icon: "mood-smile", text: "Saturdays run smoother and earn more." },
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
      { what: "Voicemail mid-service", cost: "$0/mo", result: "Lose 30–50% of peak-hour calls" },
      { what: "Dedicated receptionist", cost: "$2,800–$3,500/mo", result: "9–5 only · no bilingual standard" },
      { what: "Rosie AI", cost: "$49–$999/mo", result: "Capped minutes · tiered upcharges" },
    ],
  },

  unlimited: {
    headline: "Most salon answering services cap minutes and charge for Spanish. We don't.",
    competitors: [
      { name: "Rosie AI $49–$999/mo", cap: "Tiered caps, escalating overages" },
      { name: "Generic answering $300+", cap: "No service-aware booking" },
      { name: "Human services $500+", cap: "Per-minute on top of base" },
    ],
  },

  pricingAudience: "For California salons + spas losing peak-hour bookings to voicemail",

  faqs: [
    {
      q: "How does the AI receptionist work?",
      a: "You forward your line to a number we provide. Every call is answered within 2 rings, 24/7. The AI books appointments — service, stylist preference, duration — straight into Vagaro, Mindbody, Booksy, or Square Appointments. Both the client and the stylist get an SMS confirmation within 60 seconds.",
    },
    {
      q: "Can it match the client to the right stylist?",
      a: "Yes. We set up your stylists, their specialties, and their availability during onboarding. Returning clients get matched to their usual stylist. New clients can request preferences or be matched based on service.",
    },
    {
      q: "How does it integrate with my booking software?",
      a: "Native integration with Vagaro, Mindbody, Booksy, and Square Appointments. Bookings push directly with service codes, duration, and stylist assignment. Setup is handled by our team during onboarding.",
    },
    {
      q: "Can it handle Spanish-speaking clients?",
      a: "Yes — native EN/ES on every account, no upcharge. The AI detects the caller's language in the first 3 seconds and switches automatically.",
    },
    {
      q: "Will it reduce no-shows?",
      a: "Yes. Standard SMS reminders 24 hours and 2 hours before each appointment. No-show follow-up SMS automation lets you reach the ones who didn't make it. Most salons see no-show rates drop 30–40%.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI for your salon's tone, integrate your booking software, set up stylist matching, and go live.",
    },
  ],

  finalCta: {
    headline: "Your chairs should earn while the phone rings.",
    sub: "Three minutes to know if this is for you.",
  },
};
