import type { VerticalConfig } from "./types";

export const restaurantConfig: VerticalConfig = {
  slug: "restaurant-answering-service",

  meta: {
    title: "Live Answer for Restaurants — Every reservation, captured",
    description:
      "24/7 bilingual AI host for California restaurants. Books reservations into OpenTable, Resy, Toast, SevenRooms. Handles hours, location, takeout questions — so your staff can focus on the dining room.",
    canonical: "/services/restaurant-answering-service",
  },

  verticalBar: {
    icon: "tools-kitchen-2",
    label: "Built for California restaurants",
  },

  oneLiner:
    "Restaurants lose reservations every time the host is seating a table. We answer every call 24/7 in English and Spanish and book the reservation — so you stop losing covers and your team stays on the floor.",

  hero: {
    eyebrow: "AI host · 24/7 · Bilingual EN/ES",
    headline: "Every {italicWord}. Captured.",
    italicWord: "reservation",
    subhead: {
      seoBold: "24/7 bilingual AI host for California restaurants.",
      body:
        "You shouldn't lose a 4-top at peak Friday because the host is seating a party. We answer every call, book the reservation, handle hours and location questions — so your team stays on the floor.",
    },
    sampleBusinessName: "Costa Verde Cantina",
    chat: [
      { speaker: "bot", text: "Costa Verde Cantina — how can I help?" },
      { speaker: "user", text: "Do you have a table for 4 tonight at 7?" },
      { speaker: "bot", text: "Yes — we can do 7:15. Should I book that for you?" },
    ],
  },

  trustStrip: [
    { icon: "map-pin", label: "Made in California" },
    { icon: "shield-check", label: "CCPA-compliant recording" },
    { icon: "language", label: "Bilingual EN/ES" },
    { icon: "phone", label: "Spam &amp; robocall filter" },
  ],

  stakes: {
    sectionNum: "01 · The peak-hour problem",
    title: "The math behind every missed call.",
    stats: [
      { num: "30–60%", label: "of peak-hour calls go unanswered while staff seats the dining room" },
      { num: "$50–$200", label: "average value of each reservation walking to the next restaurant" },
      { num: "3×", label: "Friday/Saturday call spike — most go to voicemail" },
    ],
  },

  vocQuote: {
    quote: "Every time I call this lady her phone goes straight to voicemail.",
    attribution: "— What restaurant guests say about restaurants that don't answer",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The calls you're already losing.",
    cards: [
      { time: "7:42 PM Friday", body: "Host is seating a 6-top. Phone rings. Two parties looking for tables tonight book somewhere else." },
      { time: "Saturday brunch", body: "Three calls in two minutes — all asking 'are you open?' Your host can't get to any of them." },
      { time: "Hours questions", body: "20% of your phone time is just answering 'what time do you close?' You're paying labor to play hours.txt." },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You opened a restaurant to cook, not answer phones.",
    empathy:
      "Peak service is hard enough without the phone interrupting. Hosts can't be on the line and seating tables. Servers can't be answering questions about parking. Every call that hits voicemail at 7 PM is a 4-top that booked the place across the street.",
    authority: [
      { num: "24/7", label: "Every call, every hour — including Sunday brunch and Friday peak" },
      { num: "EN/ES", label: "Bilingual from the first ring" },
      { num: "FAQ", label: "Hours, parking, dietary restrictions — answered without staff lifting a finger" },
      { num: "4+", label: "Native sync: OpenTable, Resy, Toast, SevenRooms" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI host works",
    title: "Three steps to never miss another reservation.",
    steps: [
      { num: 1, heading: "Forward your phone", body: "60 seconds. Works with any provider — Twilio, RingCentral, Verizon, AT&T, most VoIP systems." },
      { num: 2, heading: "We handle the call", body: "Reservation? Hours? Takeout? Private event? Routed, booked, or answered — 24/7, in English or Spanish." },
      { num: 3, heading: "You get the seat", body: "Booked into OpenTable, Resy, Toast, or SevenRooms — plus SMS to the host stand in 60 seconds." },
    ],
  },

  integrations: {
    label: "Syncs with your reservation system",
    items: ["OpenTable", "Resy", "Toast", "SevenRooms", "Yelp Reservations"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "Friday peak. The host is on the floor seating tables. The phone keeps ringing — every call gets answered. Reservations flow into OpenTable. Hours questions get answered without anyone in the building lifting a finger. Your covers go up. Your labor stays flat.",
    items: [
      { icon: "moon", text: "Peak service hours run smoother." },
      { icon: "calendar-check", text: "Your book fills itself." },
      { icon: "trending-up", text: "Covers climb without more host hours." },
      { icon: "mood-smile", text: "Staff focuses on the dining room." },
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
      { what: "Voicemail + host scrambles", cost: "$0/mo", result: "Lose 30–60% of peak-hour calls" },
      { what: "Dedicated phone host", cost: "$2,800–$3,500/mo", result: "Limited hours · English only typically" },
      { what: "Slang.ai", cost: "$399/mo", result: "Hospitality-only · capped on outbound features" },
    ],
  },

  unlimited: {
    headline: "Most restaurant answering services cap minutes and charge for Spanish. We don't.",
    competitors: [
      { name: "Slang.ai $399/mo", cap: "Capped feature set" },
      { name: "Generic answering $250+", cap: "No reservation integrations" },
      { name: "Human services $400+", cap: "Per-minute on top of base" },
    ],
  },

  pricingAudience: "For California restaurants losing 4-tops at peak service to voicemail",

  faqs: [
    {
      q: "How does the AI host work?",
      a: "You forward your line to a number we provide. Every call is answered within 2 rings, 24/7. The AI handles reservations (booked straight into OpenTable, Resy, Toast, or SevenRooms), hours questions, parking, takeout inquiries, and private event leads. Anything complex routes to the manager's cell.",
    },
    {
      q: "Will it understand party-size and special requests?",
      a: "Yes. Standard intake captures party size, time preference, allergies/dietary restrictions, special occasion flags, and seating preferences. Anything unusual (large parties, buyouts) escalates to your manager rather than booking autonomously.",
    },
    {
      q: "Can it handle Spanish-speaking guests?",
      a: "Yes — native EN/ES on every account. The AI detects the caller's language in the first 3 seconds and switches automatically. Critical in California.",
    },
    {
      q: "How does it integrate with my reservation system?",
      a: "Native integration with OpenTable, Resy, Toast, and SevenRooms. Reservations push directly into your book with notes attached. Setup is handled by our team during onboarding.",
    },
    {
      q: "Is there a contract?",
      a: "No. Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI for your concept's tone, integrate your reservation system, and go live before your next Friday peak.",
    },
  ],

  finalCta: {
    headline: "Your host should run the dining room, not the phone.",
    sub: "Three minutes to know if this is for you.",
  },
};
