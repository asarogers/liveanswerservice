import type { VerticalConfig } from "./types";

export const realEstateConfig: VerticalConfig = {
  slug: "real-estate-answering-service",

  meta: {
    title: "Live Answer for Real Estate — Never miss another lead",
    description:
      "24/7 bilingual AI receptionist for California real estate agents. Books showings into Follow Up Boss, kvCORE, BoomTown, Wise Agent. The first agent to answer wins the commission.",
    canonical: "/services/real-estate-answering-service",
  },

  verticalBar: {
    icon: "home",
    label: "Built for California real estate",
  },

  hero: {
    eyebrow: "AI receptionist · 24/7 · Bilingual EN/ES",
    headline: "Never miss another {italicWord}.",
    italicWord: "lead",
    subhead: {
      seoBold: "24/7 bilingual AI receptionist for California real estate agents.",
      body:
        "You shouldn't lose a $25K commission because you were in a showing or in escrow. We answer every Zillow lead, every sign call, every referral — qualified and booked into your CRM before they call the next agent.",
    },
    sampleBusinessName: "Garcia Realty",
    chat: [
      { speaker: "bot", text: "Garcia Realty — how can I help you?" },
      { speaker: "user", text: "I just saw your sign on Pine Street. Is the house still available?" },
      { speaker: "bot", text: "It is — I can get you in for a showing tomorrow. What time works?" },
    ],
  },

  trustStrip: [
    { icon: "map-pin", label: "Made in California" },
    { icon: "shield-check", label: "CCPA-compliant recording" },
    { icon: "language", label: "Bilingual EN/ES" },
    { icon: "lock", label: "DRE-compliant scripting" },
  ],

  stakes: {
    sectionNum: "01 · The lead-response problem",
    title: "The math behind every missed call.",
    stats: [
      { num: "78%", label: "of leads go to the first agent who responds — minutes matter" },
      { num: "$15K–$25K", label: "average California commission walking to a faster agent" },
      { num: "5 min", label: "after which lead conversion drops 80% (MIT Lead Response study)" },
    ],
  },

  vocQuote: {
    quote: "I let all unknown numbers go to voicemail.",
    attribution: "— What buyers say about busy agents",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The calls you're already losing.",
    cards: [
      { time: "Saturday open house", body: "You're showing a property. A Zillow lead calls about another listing. Goes to voicemail. They tour with another agent." },
      { time: "Sign call", body: "Driver sees your sign on a Tuesday at noon. You're in escrow. They call the next sign down the block." },
      { time: "Spanish-language", body: "First-time buyer family calls in Spanish. Your voicemail's in English. They call the next agent on the listing." },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You didn't get your license to play phone tag.",
    empathy:
      "You're in showings, on calls, at closings, at open houses. The Zillow leads don't wait — the first agent to respond wins. Every voicemail is a commission your competitor just earned. And no, leads don't fill out the form again.",
    authority: [
      { num: "24/7", label: "Every call, every hour — including Sunday open-house calls" },
      { num: "EN/ES", label: "Bilingual from the first ring" },
      { num: "2 rings", label: "Average pickup time — faster than any agent on the road" },
      { num: "4+", label: "Native sync: Follow Up Boss, kvCORE, BoomTown, Wise Agent" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI receptionist works",
    title: "Three steps to never miss another lead.",
    steps: [
      { num: 1, heading: "Forward your phone", body: "60 seconds. Works with any provider — Twilio, RingCentral, Verizon, AT&T." },
      { num: 2, heading: "We qualify the lead", body: "Buyer or seller? Property of interest? Pre-approved? Timeline? Captured and routed — 24/7, in English or Spanish." },
      { num: 3, heading: "Books into your CRM", body: "Straight into Follow Up Boss, kvCORE, BoomTown, or Wise Agent — plus SMS to your cell in 60 seconds. Hot leads route to you within 30 seconds." },
    ],
  },

  integrations: {
    label: "Syncs with your real estate CRM",
    items: ["Follow Up Boss", "kvCORE", "BoomTown", "Wise Agent", "Google Calendar"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "You're in a showing. A Zillow lead about another listing calls. Within 60 seconds you have an SMS with their name, the property, their pre-approval status, and a booked tour. Three new buyer leads showed up to your tour calendar this week without you taking a single call.",
    items: [
      { icon: "moon", text: "Weekend showings stop interrupting your weekdays." },
      { icon: "calendar-check", text: "Tours fill themselves." },
      { icon: "trending-up", text: "Closed-deal volume climbs without burnout." },
      { icon: "mood-smile", text: "You stop carrying the phone everywhere." },
    ],
  },

  voices: {
    sectionNum: "06 · Voices",
    title: "Human-standard AI voice agents.",
    sub: "Out of the box, ready to use.",
    cards: [
      { name: "Professional Sarah", label: "Warm & approachable", sampleLine: "Garcia Realty — let me get some details." },
      { name: "Executive Marcus", label: "Authoritative", sampleLine: "Thank you for calling Garcia Realty." },
      { name: "Casual Jamie", label: "Conversational", sampleLine: "Garcia Realty — what can I help you find?" },
    ],
  },

  compare: {
    sectionNum: "07 · Compare",
    title: "What you'd pay otherwise.",
    rows: [
      { what: "Voicemail + 'call you back'", cost: "$0/mo", result: "Lose 78% of leads to the next agent" },
      { what: "Dedicated ISA", cost: "$3,500–$5,000/mo", result: "9–5 only · one team member · burnout risk" },
      { what: "Generic answering services", cost: "$300–$500/mo", result: "No CRM integration · no real estate scripting" },
    ],
  },

  unlimited: {
    headline: "Most answering services don't integrate with real estate CRMs. We do.",
    competitors: [
      { name: "Ruby $245/mo+", cap: "Per-minute overages · no CRM sync" },
      { name: "AnswerConnect $350/mo", cap: "Generic intake · no real estate depth" },
      { name: "Smith.ai $255/mo", cap: "Capped minutes · per-call fees" },
    ],
  },

  pricingAudience: "For California agents losing $15–25K commissions while they're in showings",

  faqs: [
    {
      q: "How does the AI receptionist work?",
      a: "You forward your line to a number we provide. Every call is answered within 2 rings, 24/7. The AI qualifies the lead — buyer or seller, property, pre-approval status, timeline — books a tour or callback, and texts you within 60 seconds. Hot leads (cash buyers, pre-approved, urgent timeline) escalate to your cell within 30 seconds.",
    },
    {
      q: "Will it sound like a real assistant?",
      a: "Call our demo line and judge for yourself. We use the best-in-class TTS stack tuned for phone audio with real estate-specific scripting that sounds like a competent transaction coordinator — not a phone tree.",
    },
    {
      q: "How does it integrate with my CRM?",
      a: "Native integration with Follow Up Boss, kvCORE, BoomTown, and Wise Agent. Lead captures push directly with intake notes. Setup is handled by our team during onboarding.",
    },
    {
      q: "Can it handle Spanish-speaking leads?",
      a: "Yes — native EN/ES on every account, no upcharge. The AI detects the caller's language in the first 3 seconds and switches automatically. Critical in California real estate.",
    },
    {
      q: "Is the scripting DRE-compliant?",
      a: "Yes. The AI is explicitly scripted to not provide legal, tax, or transactional advice and to refer those questions to you. It handles qualification and scheduling only. Recordings and transcripts are CCPA-compliant.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI for your service area, listings approach, and CRM workflow, then go live.",
    },
  ],

  finalCta: {
    headline: "Your phone should book showings, not voicemails.",
    sub: "Three minutes to know if this is for you.",
  },
};
