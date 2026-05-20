import type { VerticalConfig } from "./types";

export const propertyManagementConfig: VerticalConfig = {
  slug: "property-management-answering-service",

  meta: {
    title: "Live Answer for Property Management — 24/7 tenant + leasing line",
    description:
      "24/7 bilingual AI receptionist for California property management. Routes leasing inquiries, maintenance requests, and after-hours emergencies. Syncs with AppFolio, Buildium, Yardi.",
    canonical: "/services/property-management-answering-service",
  },

  verticalBar: {
    icon: "building",
    label: "Built for California property management",
  },

  hero: {
    eyebrow: "AI receptionist · 24/7 · Bilingual EN/ES",
    headline: "Never miss another {italicWord}.",
    italicWord: "leasing inquiry",
    subhead: {
      seoBold: "24/7 bilingual AI receptionist for California property management.",
      body:
        "You shouldn't lose a qualified prospect because the leasing office closed at 5. We answer every call, route maintenance vs leasing vs emergency, and book tours straight into your PMS.",
    },
    sampleBusinessName: "Madrone Property Group",
    chat: [
      { speaker: "bot", text: "Madrone Property Group — how can I help you?" },
      { speaker: "user", text: "Is the 2-bedroom on Elm still available?" },
      { speaker: "bot", text: "Yes — it's available June 1. Want to schedule a tour?" },
    ],
  },

  trustStrip: [
    { icon: "map-pin", label: "Made in California" },
    { icon: "shield-check", label: "CCPA-compliant recording" },
    { icon: "language", label: "Bilingual EN/ES" },
    { icon: "lock", label: "Fair Housing-aware scripting" },
  ],

  stakes: {
    sectionNum: "01 · The after-hours problem",
    title: "The math behind every missed call.",
    stats: [
      { num: "40–55%", label: "of leasing calls come outside leasing-office hours" },
      { num: "$2,500+", label: "lifetime value of each leasing prospect lost to a competitor" },
      { num: "2 AM", label: "an emergency maintenance call shouldn't reach you personally — it should reach the right vendor" },
    ],
  },

  vocQuote: {
    quote: "Every morning, we get a bunch of missed calls. Most of them are just people asking the same old questions, but some are actually people trying to book.",
    attribution: "— What we hear from California property managers every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The calls you're already losing.",
    cards: [
      { time: "6:30 PM weekday", body: "Office is closed. Qualified prospect calls about a 2BR. Goes to voicemail. They tour with another property tomorrow." },
      { time: "Saturday afternoon", body: "Tenant's HVAC is broken. They call the office. No one's there. They post a 1-star review by Sunday." },
      { time: "Spanish-language", body: "Prospective tenant calls in Spanish. Your IVR is English-only. They hang up and call the next listing." },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You can't be on the phone and on a property tour.",
    empathy:
      "You're showing units, handling maintenance vendors, processing applications, and somehow also answering the phone. Every leasing call after 5 PM is a tour your competitor just booked. Every after-hours tenant call is either an emergency you need to know about — or a 'when does rent post' question that doesn't need to ruin your night.",
    authority: [
      { num: "24/7", label: "Every call, every hour — including weekend leasing inquiries" },
      { num: "EN/ES", label: "Bilingual from the first ring" },
      { num: "Triage", label: "Leasing vs maintenance vs emergency — routed correctly, every time" },
      { num: "3+", label: "Native sync: AppFolio, Buildium, Yardi" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI receptionist works",
    title: "Three steps to never miss another lead.",
    steps: [
      { num: 1, heading: "Forward your phone", body: "60 seconds. Works with any provider — Twilio, RingCentral, Verizon, AT&T." },
      { num: 2, heading: "We triage the call", body: "Leasing? Maintenance? Emergency? Routine question? Routed, scheduled, or escalated — 24/7, in English or Spanish." },
      { num: 3, heading: "Books or dispatches", body: "Leasing tours into AppFolio, Buildium, or Yardi. Emergencies route to the right vendor or your cell within 30 seconds." },
    ],
  },

  integrations: {
    label: "Syncs with your property management software",
    items: ["AppFolio", "Buildium", "Yardi", "RentManager", "Google Calendar"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "Leasing tours fill the schedule without your team taking calls. Maintenance requests route to the right vendor automatically. You only get woken up at 2 AM for real emergencies. The phone became an asset, not an interruption.",
    items: [
      { icon: "moon", text: "After-hours emergencies route correctly." },
      { icon: "calendar-check", text: "Tour schedule fills itself." },
      { icon: "trending-up", text: "Lease-up rate climbs without leasing-office hires." },
      { icon: "mood-smile", text: "Saturdays stop being phone-tag days." },
    ],
  },

  voices: {
    sectionNum: "06 · Voices",
    title: "Human-standard AI voice agents.",
    sub: "Out of the box, ready to use.",
    cards: [
      { name: "Professional Sarah", label: "Warm & professional", sampleLine: "Madrone Property — let me check on that." },
      { name: "Executive Marcus", label: "Authoritative", sampleLine: "Thank you for calling Madrone Property Group." },
      { name: "Casual Jamie", label: "Conversational", sampleLine: "Madrone Property — what can I help with?" },
    ],
  },

  compare: {
    sectionNum: "07 · Compare",
    title: "What you'd pay otherwise.",
    rows: [
      { what: "Voicemail after 5 PM", cost: "$0/mo", result: "Lose 40–55% of leasing inquiries" },
      { what: "After-hours answering service", cost: "$400–$800/mo", result: "Per-minute overages · no PMS integration" },
      { what: "Second leasing agent", cost: "$3,500+/mo", result: "9–5 only · weekend gap" },
    ],
  },

  unlimited: {
    headline: "Most answering services can't tell leasing from maintenance. We can.",
    competitors: [
      { name: "Generic answering $300+", cap: "No leasing/maintenance triage" },
      { name: "Specialty PM services", cap: "Capped minutes, English only" },
      { name: "Human services $500+", cap: "Per-minute on top of base" },
    ],
  },

  pricingAudience: "For CA property managers losing leasing prospects after 5 PM and on weekends",

  faqs: [
    {
      q: "How does the AI receptionist work?",
      a: "You forward your line to a number we provide. Every call is answered within 2 rings, 24/7. The AI triages — leasing inquiry, maintenance request, emergency, routine tenant question — and routes accordingly. Tours book straight into AppFolio/Buildium/Yardi. Emergencies route to the right vendor or your cell within 30 seconds.",
    },
    {
      q: "Is the scripting Fair Housing-compliant?",
      a: "Yes. The AI is scripted to qualify on objective criteria only (income, move-in date, household size) and never on protected categories. All recordings and transcripts are CCPA-compliant.",
    },
    {
      q: "How does it integrate with my PMS?",
      a: "Native integration with AppFolio, Buildium, Yardi, and RentManager. Tour bookings and maintenance requests push directly with notes attached. Setup is handled by our team during onboarding.",
    },
    {
      q: "How are emergencies handled?",
      a: "Emergencies (water leak, no heat in winter, no AC over 95°, gas smell, fire, break-in) escalate to a configurable vendor list within 30 seconds. You define the rules — we follow them.",
    },
    {
      q: "Can it handle Spanish-speaking tenants and prospects?",
      a: "Yes — native EN/ES on every account, no upcharge. Critical in California rental markets.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI for your properties, integrate your PMS, configure your emergency escalation rules, and go live.",
    },
  ],

  finalCta: {
    headline: "Your leasing office shouldn't close at 5 PM.",
    sub: "Three minutes to know if this is for you.",
  },
};
