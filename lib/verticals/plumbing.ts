import type { VerticalConfig } from "./types";

/**
 * Plumbing vertical — California residential and light-commercial plumbing
 * contractors. The owner-operator or office manager screens; the buying trigger
 * is the after-hours emergency where water damage compounds by the minute —
 * burst pipes, water-heater failures, sewer backups. Sharper urgency than HVAC:
 * a missed AC call is an uncomfortable house; a missed burst-pipe call is a
 * flooded one. San Jose / South Bay / East Bay home-services geo is the SERP
 * angle ("plumber answering service San Jose" — no HVAC/plumbing competitor
 * owns a San Jose page). Excluded from the index until Wave 9 (noindex handled
 * by the dynamic route via the site-plan exclude bucket).
 *
 * Per-job value range ($275–$1,200) and the dispatch stack (ServiceTitan,
 * Housecall Pro, Jobber) are shared with HVAC and research-verified — see PR
 * notes for sources.
 */
export const plumbingConfig: VerticalConfig = {
  slug: "plumbing-answering-service",

  meta: {
    title: "Live Answer for Plumbers — Never lose another emergency call",
    description:
      "24/7 bilingual AI answering service for San Jose & Bay Area plumbers. Every burst pipe, water heater, and sewer backup answered and booked into ServiceTitan, Housecall Pro, or Jobber. Water damage compounds by the minute — don't let the emergency call hit voicemail.",
    canonical: "/services/plumbing-answering-service",
  },

  verticalBar: {
    icon: "droplet",
    label: "Built for San Jose & Bay Area plumbers",
  },

  oneLiner:
    "When a pipe bursts at 1 AM, the homeowner calls until someone picks up — and water damage compounds by the minute. We answer every plumbing call 24/7 in English and Spanish and book it straight into your dispatch software — so the $275–$1,200 emergency job doesn't flood someone else's schedule instead of yours.",

  hero: {
    eyebrow: "AI dispatcher · 24/7 · Bilingual EN/ES",
    headline: "Never lose another {italicWord} call.",
    italicWord: "emergency",
    subhead: {
      seoBold: "24/7 bilingual AI answering service for San Jose & Bay Area plumbers.",
      body:
        "You shouldn't lose a flooded-basement emergency because you were under a sink, on another job, or asleep. We answer every call, qualify the job, route the real emergencies to your cell, and text you the details.",
    },
    sampleBusinessName: "Valley Plumbing & Drain",
    chat: [
      { speaker: "bot", text: "Thanks for calling Valley Plumbing & Drain — how can I help?" },
      { speaker: "user", text: "A pipe burst under my kitchen and there's water everywhere." },
      { speaker: "bot", text: "Let's shut that down fast. I'm getting a plumber out to you now — what's the address?" },
    ],
  },

  trustStrip: [
    { icon: "map-pin", label: "Based in San Jose, CA" },
    { icon: "shield-check", label: "Emergency escalation routing" },
    { icon: "language", label: "Bilingual EN/ES" },
    { icon: "lock", label: "CCPA-compliant recording" },
  ],

  stakes: {
    sectionNum: "01 · The after-hours problem",
    title: "The math behind every missed call.",
    stats: [
      { num: "62%", label: "of all business calls go unanswered — and after hours, with nobody at the desk, it's worse" },
      { num: "$275–$1,200", label: "value of each emergency job walking to your competitor" },
      { num: "By the minute", label: "water damage compounds while a burst pipe rings to voicemail" },
    ],
  },

  vocQuote: {
    quote: "When their water's running and we don't answer, they don't leave a message — they just call the next plumber on the list. We've lost real money to voicemail.",
    attribution: "— What we hear from California plumbing-business owners every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The calls you're already losing.",
    cards: [
      { time: "1:18 AM", body: "A pipe burst in their San Jose home and water's spreading across the floor. You're asleep. Your line rings to voicemail. By the time you hear it, they've called three other plumbers — one picked up." },
      { time: "3:40 PM Friday", body: "You're snaking a main line in Fremont and can't stop. The water heater that just failed in Union City rings twice and gives up. That replacement books with someone else." },
      { time: "Saturday morning", body: "A sewer backup in Hayward, a slab leak in Newark, two routine quotes — all calling at once. You answer one. The other three went somewhere, and you'll never know where." },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You didn't start a plumbing business to answer phones.",
    empathy:
      "You started it to fix leaks fast and do clean work — not chase voicemails. But the phone never stops. It rings while you're under a sink with both hands full. It rings during dinner. It rings at 1 AM when a pipe lets go and a homeowner is watching their floor flood. With plumbing, every minute the phone goes unanswered is more water damage and one more reason the caller dials the next plumber on Google.",
    authority: [
      { num: "24/7", label: "Every call, every hour — including 2 AM burst-pipe emergencies" },
      { num: "EN/ES", label: "Bilingual from the first ring" },
      { num: "60 sec", label: "From call ending to booking confirmation" },
      { num: "5+", label: "Native sync with the dispatch tools you already use" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI dispatcher works",
    title: "Three steps to never miss another call.",
    steps: [
      { num: 1, heading: "Forward your phone", body: "60 seconds. Works with any provider — Twilio, Google Voice, RingCentral, Verizon, AT&T." },
      { num: 2, heading: "We qualify the call", body: "Burst pipe? Water heater out? Sewer backup? Routine quote? Triaged, scheduled, dispatched — 24/7, in English or Spanish." },
      { num: 3, heading: "You get the job", body: "Booked into ServiceTitan, Housecall Pro, or Jobber — plus SMS in 60 seconds. Real emergencies — burst pipes, flooding, no water — routed to your cell within 30 seconds." },
    ],
  },

  integrations: {
    label: "Syncs with your dispatch software",
    items: ["ServiceTitan", "Housecall Pro", "Jobber", "FieldEdge", "Google Calendar"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "You wrap the last job at 6 PM. You go home. You eat dinner. The phone keeps ringing — every call gets answered. The 1 AM burst pipe wakes your phone with a text, not a missed call, and you decide whether to roll. By Monday, your schedule across San Jose, Fremont, and the South Bay is full. You didn't book a single one yourself.",
    items: [
      { icon: "moon", text: "You sleep — and still catch the 1 AM emergencies that matter." },
      { icon: "calendar-check", text: "Your calendar fills itself." },
      { icon: "trending-up", text: "Revenue climbs without more trucks." },
      { icon: "mood-smile", text: "You go back to liking your job." },
    ],
    before: [
      { icon: "phone-ringing", text: "You answer the phone at dinner." },
      { icon: "moon-off", text: "The burst-pipe call sits in voicemail till morning." },
      { icon: "trending-down", text: "Half the emergencies go to the next plumber." },
      { icon: "mood-sad", text: "You're tired of your own business." },
    ],
  },

  voices: {
    sectionNum: "06 · Voices",
    title: "Human-standard AI voice agents.",
    sub: "Out of the box, ready to use.",
    cards: [
      { name: "Professional Sarah", label: "Warm & friendly", sampleLine: "Hi, this is Sarah at Valley Plumbing & Drain..." },
      { name: "Executive Marcus", label: "Authoritative", sampleLine: "Thank you for calling Valley Plumbing & Drain." },
      { name: "Casual Jamie", label: "Conversational", sampleLine: "Hey, Valley Plumbing — how can I help?" },
    ],
  },

  compare: {
    sectionNum: "07 · Compare",
    title: "What you'd pay otherwise.",
    rows: [
      { what: "Voicemail", cost: "$0/mo", result: "Lose 6 of 10 after-hours calls" },
      { what: "Part-time CA dispatcher", cost: "~$1,600/mo", result: "20 hrs/week, English only" },
      { what: "Full-time CA receptionist", cost: "$3,200–$4,000/mo", result: "9–5 only · $48K/yr loaded · still misses the 1 AM burst pipe" },
    ],
  },

  unlimited: {
    headline: "Most answering services cap your minutes. We don't.",
    competitors: [
      { name: "Simple Phones $49/mo", cap: "100 calls cap" },
      { name: "AnswerConnect $350/mo", cap: "~$1.65/min overage" },
      { name: "Upfirst $24.95/mo", cap: "30 calls cap" },
    ],
  },

  pricingAudience: "For Bay Area plumbing shops that lose a $1,200 emergency every time a 1 AM burst pipe hits voicemail",

  faqs: [
    {
      q: "How does the AI dispatcher work?",
      a: "You forward your business line to a number we provide. Every incoming call is answered within 2 rings, 24/7. Our AI qualifies the caller — name, callback, service needed, urgency — books the appointment into your dispatch software, and texts you a summary within 60 seconds. Real emergencies escalate to your cell within 30 seconds.",
    },
    {
      q: "Do you work with San Jose plumbers?",
      a: "Yes — we're based right here in San Jose. Plumbing is one of our core home-services verticals across the Bay Area, with Tier-1 coverage for San Jose, Fremont, Hayward, Union City, and Newark. We know the South Bay and East Bay service areas, so the AI handles your dispatch zones and after-hours routing the way a local dispatcher would.",
    },
    {
      q: "Can the AI tell a real emergency from a routine call?",
      a: "Yes. The AI follows the rules you set — a burst pipe, active flooding, no water, a failed water heater, or a sewer backup gets flagged urgent and routed to your cell within 30 seconds. Routine quotes, drips, and non-urgent installs get booked into your schedule and summarized by text. With plumbing, water damage compounds by the minute, so getting the real emergencies to a person fast is the whole point.",
    },
    {
      q: "Is there a contract or can I cancel anytime?",
      a: "Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI, train it on your business and your service area, and go live before you lose another after-hours emergency.",
    },
    {
      q: "Do you integrate with my existing phone and dispatch system?",
      a: "Yes — Twilio, Google Voice, RingCentral, Verizon, AT&T, and most VoIP systems, with native booking into ServiceTitan, Housecall Pro, and Jobber. Setup takes 60 seconds and works without changing your business number.",
    },
  ],

  finalCta: {
    headline: "Your trucks should run on bookings, not voicemails.",
    sub: "Three minutes to know if this is for you.",
  },
};
