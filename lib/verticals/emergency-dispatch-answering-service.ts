import type { VerticalConfig } from "./types";
import type { ServiceDetail } from "@/lib/services-data";

export const emergencyDispatchConfig: VerticalConfig = {
  slug: "emergency-dispatch-answering-service",

  meta: {
    title: "Emergency Dispatch Answering Service — 24/7 AI for the Trades",
    description:
      "24/7 AI emergency dispatch answering service for California plumbers, HVAC contractors, electricians, and restoration companies. Urgent/routine triage, configurable on-call escalation, and 30-second SMS to your tech — so after-hours emergencies never bleed to a competitor. Flat $500/mo, bilingual EN/ES.",
    canonical: "/services/emergency-dispatch-answering-service",
  },

  verticalBar: {
    icon: "siren",
    label: "Built for California trade contractors who run emergency calls",
  },

  oneLiner:
    "Every after-hours burst pipe, no-heat, or flood call is a $750–$2,500 job — and the first contractor to answer wins 78% of them. We answer every call 24/7, triage urgent vs. routine, and text your on-call tech within 30 seconds so the call never bleeds to whoever picked up next.",

  hero: {
    eyebrow: "AI emergency dispatch · 24/7 · Bilingual EN/ES",
    headline: "Never let another {italicWord} call go to your competitor.",
    italicWord: "emergency",
    subhead: {
      seoBold:
        "24/7 bilingual emergency dispatch answering service for California plumbers, HVAC, electrical, and restoration contractors.",
      body:
        "You shouldn't lose a $1,500 burst-pipe job because you were elbow-deep in another call or asleep at 2 AM. We answer every call, triage the urgency, escalate to the right on-call tech, and get the visit booked before the homeowner dials the next contractor.",
    },
    sampleBusinessName: "Bay Area Plumbing & Restoration",
    chat: [
      {
        speaker: "bot",
        text: "Bay Area Plumbing — thank you for calling. What's going on?",
      },
      {
        speaker: "user",
        text: "Pipe just burst under my sink — water everywhere, I need someone now.",
      },
      {
        speaker: "bot",
        text: "I've got you. I'm texting your on-call tech right now with your address — you'll hear back in under 5 minutes.",
      },
    ],
  },

  // Copied verbatim from hvac.ts per HARD RULES
  trustStrip: [
    { icon: "map-pin", label: "Made in California" },
    { icon: "shield-check", label: "CCPA-compliant recording" },
    { icon: "language", label: "Bilingual EN/ES" },
    { icon: "lock", label: "HIPAA-aware mode available" },
  ],

  stakes: {
    sectionNum: "01 · The after-hours emergency problem",
    title: "The math behind every missed emergency.",
    stats: [
      {
        num: "62%",
        label: "of after-hours trade calls go unanswered — the caller moves on in under 60 seconds", // source: https://contractorincharge.com/blog/missed-call-statistics-for-home-service-companies
      },
      {
        num: "$750–$2,500",
        label: "value of a single emergency plumbing or restoration call that walks to the next contractor", // source: https://suzeeai.com/home-services-why-plumbers-lose-50k-year-to-missed-calls/ ; https://www.callbirdai.com/blog-contractors-lose-money-missed-calls
      },
      {
        num: "78%",
        label: "of emergency jobs go to the first contractor who answers — speed is the only differentiator that matters", // source: https://agentzap.ai/blog/hvac-phone-statistics
      },
    ],
    rankingNote:
      "Google sees roughly half of US phone calls through Android — whether you answered, how fast, and whether the homeowner then dialed another contractor. Shops that go dark after hours measurably drop in local Maps rank. A 100% answer rate protects the position your emergency leads come from.",
  },

  vocQuote: {
    quote:
      "We'd get the voicemail at 7 AM and call back, but they'd already booked someone else. Happens constantly.",
    attribution: "— What we hear from California trade contractors every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The emergencies you're already losing.",
    cards: [
      {
        time: "2:17 AM",
        body: "Burst pipe. Ceiling dripping. Homeowner calls three plumbers in a row. First one to answer gets a $1,800 job and a five-star review. You were asleep. Your phone went to voicemail.",
      },
      {
        time: "Saturday night, January",
        body: "No heat. 38°F outside. Elderly couple. They Google HVAC and call the top four. You had the customer — until the third ring, when they moved on to the guy below you.",
      },
      {
        time: "3:45 AM, flooded basement",
        body: "Water damage restoration lead. Average ticket: $4,500. They need someone now. Your on-call phone rang twice, hit voicemail. They called ServPro. You'll never know what you lost.",
      },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You can't run an emergency dispatch on willpower alone.",
    empathy:
      "You set up the on-call rotation. You gave your techs your cell. You tried an answering service that put callers on hold and never triaged urgency. The result: emergencies sit in a queue, your best tech gets woken up for a $90 drain snake call, and the real emergencies — the ones worth $1,500–$7,500 — still slip through to a competitor. You didn't start this business to lose the highest-margin calls of the week to whoever happened to be awake.",
    authority: [
      { num: "24/7", label: "Every call answered, every hour — including 2 AM pipe bursts" },
      { num: "30 sec", label: "From emergency triage to on-call tech text — address + one-line summary" },
      { num: "EN/ES", label: "Bilingual from the first ring — no lost calls to language barriers" },
      { num: "5+", label: "Native sync with ServiceTitan, Jobber, Housecall Pro, Dispatch, FieldEdge" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI emergency dispatcher works",
    title: "Three steps to capture every after-hours emergency.",
    steps: [
      {
        num: 1,
        heading: "Forward your after-hours line",
        body: "60 seconds to set up. Works with any provider — Twilio, Google Voice, RingCentral, Verizon, AT&T. We handle the rest.",
      },
      {
        num: 2,
        heading: "We triage urgent vs. routine",
        body: "No heat? Burst pipe? Active flooding? Gas smell? Tagged as emergency and escalated within 30 seconds via SMS to your configured on-call rotation — address plus one-line summary. Routine requests get booked for the next available slot.",
      },
      {
        num: 3,
        heading: "Your tech gets the job, not a voicemail",
        body: "Emergency text to the right on-call person in 30 seconds. Booking pushed into ServiceTitan, Jobber, Housecall Pro, Dispatch, or FieldEdge. You get an SMS summary every time. Homeowner gets a confirmation. Nobody waits, nobody moves on.",
      },
    ],
  },

  integrations: {
    label: "Syncs with your dispatch and field-service software",
    items: [
      "ServiceTitan",
      "Jobber",
      "Housecall Pro",
      "Dispatch",
      "FieldEdge",
      "On-call paging / SMS escalation",
    ],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "It's 2 AM. A pipe burst call comes in. You're asleep. The AI answers in two rings, triages the emergency, texts your on-call plumber the address and a one-line summary within 30 seconds, and books the visit. You wake up to a notification: job captured, $1,600 ticket, five-star review pending. You never touched your phone.",
    items: [
      {
        icon: "alarm-off",
        text: "Your on-call rotation runs itself — right tech, right call, every time.",
      },
      {
        icon: "calendar-check",
        text: "Emergency slots fill before your competitors even wake up.",
      },
      {
        icon: "trending-up",
        text: "After-hours revenue climbs without adding headcount.",
      },
      {
        icon: "shield-check",
        text: "Zero emergencies bleed to a competitor because of a missed ring.",
      },
    ],
    before: [
      { icon: "phone-ringing", text: "You answer the emergency call at 2 AM." },
      { icon: "moon-off", text: "You scramble to find the on-call tech." },
      { icon: "trending-down", text: "Half the late-night emergencies go unanswered." },
      { icon: "mood-sad", text: "You dread the weekend on-call rotation." },
    ],
  },

  // Copied verbatim from hvac.ts per HARD RULES
  voices: {
    sectionNum: "06 · Voices",
    title: "Human-standard AI voice agents.",
    sub: "Out of the box, ready to use.",
  },

  compare: {
    sectionNum: "07 · Compare",
    title: "What you'd pay otherwise.",
    rows: [
      {
        what: "Voicemail / no answer",
        cost: "$0/mo",
        result: "Lose 62% of after-hours emergencies — each worth $750–$2,500",
      },
      {
        what: "Generic answering service",
        cost: "$200–$500/mo",
        result: "No triage, no on-call escalation, no dispatch integration",
      },
      {
        what: "24/7 in-house dispatcher (CA)",
        cost: "$3,200–$4,500/mo",
        result: "Single-language, benefits-loaded, still misses calls during breaks",
      },
    ],
  },

  unlimited: {
    headline: "Most answering services can't triage emergencies. We do — unlimited calls, no caps.",
    competitors: [
      { name: "AnswerConnect $350/mo", cap: "$1.85/min overage, no dispatch triage" },
      { name: "Ruby Receptionists $235/mo", cap: "Capped minutes, no trades training" },
      { name: "PATLive $149/mo", cap: "Per-minute billing spikes on emergency nights" },
    ],
  },

  pricingAudience:
    "For trade contractors who lose $1,500 emergencies every time the after-hours line hits voicemail",

  faqs: [
    {
      q: "How does the emergency triage actually work?",
      a: "The AI asks two or three qualifying questions on every after-hours call — what's happening, how urgent, is there active water/gas/heat failure. Based on your configured triage rules, it classifies the call as emergency or routine. Emergencies trigger an immediate SMS to your on-call tech (or the next person in your escalation tree if the first doesn't confirm within 2 minutes) with the caller's address and a one-line summary. Routine calls get booked into the next available slot. You configure the rules at onboarding and can update them anytime.",
    },
    {
      q: "Can I configure a multi-person on-call rotation?",
      a: "Yes. You define the escalation tree: first tech, second tech, then owner. If the first contact doesn't confirm receipt within your set window (default: 2 minutes), the next person in the chain gets texted. We also support weekly or daily rotation schedules so the right tech is on-call without you manually updating it.",
    },
    {
      q: "What trades does this work for?",
      a: "Plumbing, HVAC, electrical, water damage and mold restoration, locksmith, and any other trade where after-hours calls are high-value emergencies. The AI's triage vocabulary is trained for each trade — it knows what 'no heat,' 'burst pipe,' 'active flooding,' and 'panel tripped' mean and escalates accordingly.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI for your specific trades and emergency types, configure your on-call escalation tree, integrate your dispatch software, and go live before you lose another weekend emergency.",
    },
    {
      q: "Is there a contract or can I cancel anytime?",
      a: "Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee.",
    },
    {
      q: "What if the AI can't handle the call?",
      a: "For any call outside its scripted scope, the AI takes a full message and immediately texts you the details. For declared emergencies — active flooding, gas smell, no heat with vulnerable occupants — it escalates to your on-call line within 30 seconds regardless.",
    },
    {
      q: "Do you integrate with my dispatch software?",
      a: "Yes — ServiceTitan, Jobber, Housecall Pro, Dispatch, and FieldEdge are natively integrated. Bookings push as jobs or estimates depending on call type, with emergency dispatches flagged at the top of your daily board. Google Calendar and most iCal-compatible tools also work.",
    },
  ],

  finalCta: {
    headline: "The next burst pipe shouldn't go to your competitor because you didn't pick up.",
    sub: "Three minutes to know if this is for you.",
  },
};

export const emergencyDispatchDetail: ServiceDetail = {
  slug: "emergency-dispatch-answering-service",
  title: "Emergency Dispatch Answering Service — 24/7 AI Triage for the Trades",
  metaDescription:
    "AI emergency dispatch answering service for California plumbers, HVAC, electrical, and restoration contractors. Urgent/routine triage, 30-second on-call SMS escalation, and native sync with ServiceTitan, Jobber, Housecall Pro, Dispatch, and FieldEdge. Flat $500/mo, no overages, bilingual EN/ES.",
  h1: "Never Lose an After-Hours Emergency to Voicemail Again",
  intro:
    "When a pipe bursts at 2 AM, the homeowner doesn't leave a voicemail. They call down the Google list until someone picks up — and the first contractor to answer wins 78% of those calls. Industry data puts the after-hours miss rate at 62% for small-to-medium trade businesses, and every missed emergency call is somewhere between $750 for a standard urgent repair and $7,500 for a full water-damage restoration project. We built Live Answer's emergency dispatch answering service specifically for California plumbers, HVAC contractors, electricians, and restoration companies who are losing their highest-margin calls to voicemail while they're on another call, asleep, or simply not monitoring a second phone. Our AI answers every call in under two rings, triages emergency vs. routine using trade-specific vocabulary, and texts the right on-call tech within 30 seconds — address plus a one-line summary — so the work gets dispatched before the homeowner dials the next contractor on the list.",
  sections: [
    {
      heading: "How the Emergency Triage Actually Works",
      content:
        "The AI answers in English or Spanish within two rings. It leads with two or three focused qualifying questions: what is happening, whether there is active water flow or gas, and whether vulnerable occupants are present. Based on your configured triage rules — which you set at onboarding and can update anytime — the call is classified as emergency or routine. An emergency triggers an immediate outbound SMS to the first person in your on-call escalation tree: name, callback number, service address, and a one-line summary of the problem. If that contact does not confirm receipt within your configured window (default two minutes), the text escalates to the next person in the chain. Routine calls — tune-ups, non-urgent maintenance, quote requests — get booked directly into the next available slot in your dispatch software without waking anyone up. Every call ends with an SMS summary to the owner and a transcript stored for 90 days. The entire interaction from first ring to on-call text averages under 90 seconds.",
    },
    {
      heading: "Why On-Call Escalation Trees Matter More Than Call Answering",
      content:
        "Most generic answering services answer the phone and take a message. That is not emergency dispatch — that is a voicemail with a human voice. The gap that costs trade contractors $45,000–$120,000 per year in missed revenue is not that no one answers the call. It is that no one gets the right person the right information fast enough to close the sale before the homeowner moves on. Our escalation trees are configurable to your actual staffing reality: first plumber on rotation, backup plumber, then owner. Weekly or daily rotation schedules mean the correct on-call person is always first in the chain without you manually updating it. For multi-crew shops, you can configure different escalation trees by trade or by service area. The goal is not just to answer — it is to put a qualified tech on-site within the response window before the competitor two slots below you on Google does.",
    },
    {
      heading: "Integrations Built for the Trades Dispatch Stack",
      content:
        "Bookings push directly into ServiceTitan, Jobber, Housecall Pro, Dispatch, or FieldEdge — whichever platform your crew dispatches from. Emergency dispatches are flagged at the top of the daily board so the on-call tech can see the priority without scanning the full schedule. For shops still coordinating on Google Calendar or any iCal-compatible tool, that works too. On-call paging and SMS escalation are built into the core product, not an add-on. If your stack includes a CRM or dispatch platform not on this list, request a custom integration — most ship in under two weeks. Two-way SMS also lets the AI confirm appointments with the homeowner the night before and reroute reschedules without you touching them, keeping the dispatch board clean even on high-volume emergency nights.",
    },
    {
      heading: "The Done-for-You Setup and Booking Guarantee",
      content:
        "We are a done-for-you managed service, not a self-serve tool you configure yourself. The 30-minute kickoff call covers your trade mix, service area, after-hours emergency rules, on-call rotation structure, escalation windows, dispatch software credentials, and the triage vocabulary specific to your work. We build and test the agent in 48 hours. You go live by day three of your 7-day free trial — no credit card required, no setup fee. Our booking guarantee is concrete: capture ten booked visits in your first 30 days or receive a full refund. At an average emergency ticket of $1,200, that is $12,000 in recovered revenue against a sub-$500 monthly service. One prevented emergency bleed to a competitor pays for the month.",
    },
  ],
  relatedServices: [],
  relatedLocations: [
    "san-jose",
    "sacramento",
    "los-angeles",
    "san-francisco-bay-area",
    "fresno",
    "san-diego",
  ],
};
