import type { VerticalConfig } from "./types";
import type { ServiceDetail } from "@/lib/services-data";

export const roofingConstructionConfig: VerticalConfig = {
  slug: "roofing-construction-answering-service",

  meta: {
    title: "Roofing Answering Service — Never lose a storm estimate",
    description:
      "24/7 bilingual AI answering service for California roofing and construction contractors. Every storm call answered, every estimate request booked, every insurance-claim job captured. Flat $500/mo unlimited — no per-call fees, no caps.",
    canonical: "/services/roofing-construction-answering-service",
  },

  verticalBar: {
    icon: "home",
    label: "Built for California roofing & construction contractors",
  },

  oneLiner:
    "When a storm rolls through, every homeowner with a damaged roof calls every roofer on Google — the first one to answer wins the job. We answer every call 24/7 in English and Spanish, qualify the damage, and book the inspection straight into your CRM so you capture the surge while your crew is on the roof.",

  hero: {
    eyebrow: "AI receptionist · 24/7 · Bilingual EN/ES",
    headline: "Never lose another {italicWord} to a missed call.",
    italicWord: "estimate",
    subhead: {
      seoBold: "24/7 bilingual roofing answering service for California contractors.",
      body:
        "You shouldn't lose a $15,000 roof replacement because your crew was mid-install and couldn't pick up. We answer every call, qualify the damage and insurance situation, and book the inspection before the homeowner dials your competitor.",
    },
    sampleBusinessName: "Bay Area Roofing Co.",
    chat: [
      { speaker: "bot", text: "Bay Area Roofing — thanks for calling! How can we help you today?" },
      { speaker: "user", text: "We had a storm last night and now there's water coming through the ceiling." },
      { speaker: "bot", text: "I'm so sorry — let's get an inspector out to you right away. Can I get your address?" },
    ],
  },

  // VERBATIM from hvac.ts
  trustStrip: [
    { icon: "map-pin", label: "Made in California" },
    { icon: "shield-check", label: "CCPA-compliant recording" },
    { icon: "language", label: "Bilingual EN/ES" },
    { icon: "lock", label: "HIPAA-aware mode available" },
  ],

  stakes: {
    sectionNum: "01 · The storm-surge problem",
    title: "The math behind every missed call.",
    stats: [
      {
        num: "62%",
        // source: https://talkroute.com/how-many-roofing-leads-are-you-losing-from-missed-calls/
        label: "of inbound roofing calls go unanswered — crew is on the roof",
      },
      {
        num: "$12K–$25K",
        // source: https://perceptionist.com/roofing-storm-season-call-surge/
        label: "average insurance-paid storm replacement walking to the roofer who answered",
      },
      {
        num: "300–500%",
        // source: https://talkroute.com/how-roofing-companies-handle-storm-surge-call-volume/
        label: "call volume spike in the 48 hours after a storm — most go to voicemail",
      },
    ],
    rankingNote:
      "Google sees roughly half of US phone calls through Android — whether you answered, how long you talked, and whether the homeowner dialed the next roofer immediately after. Shops that stop answering measurably drop in local rank. A 100% answer rate protects the Maps position your storm leads come from.",
  },

  vocQuote: {
    quote: "Every time it rains I know my phone is going to blow up. Half those calls I can't get to while we're up there working.",
    attribution: "— What we hear from California roofing contractors every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The jobs you're already losing.",
    cards: [
      {
        time: "Storm day · 9:22 AM",
        body: "A hailstorm hit the East Bay last night. Forty homeowners are Googling roofers this morning. Your crew is on a job. The calls go to voicemail. The homeowners call the next name on the list.",
      },
      {
        time: "Mid-install · 2:47 PM",
        body: "You're 20 feet up nailing down flashing. Three estimate requests come in. You can't pick up. Two of those callers have already booked the competitor who answered.",
      },
      {
        time: "Insurance-claim season",
        body: "A homeowner calls about an insurance claim job — the kind worth $18,000 with the adjuster already out. They hit voicemail. They need to file fast. They move on.",
      },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You didn't start a roofing business to answer phones.",
    empathy:
      "You started it to run a tight crew, do quality work, and build a reputation in your market. But the phone never stops. It rings while you're on a roof. It rings during material pickups. It rings at 7 AM after every storm. Every call you can't answer is a $15,000 job your competitor just won by simply picking up first.",
    authority: [
      { num: "24/7", label: "Every call answered — including post-storm surges at 6 AM" },
      { num: "EN/ES", label: "Bilingual from the first ring" },
      { num: "60 sec", label: "From call ending to booking confirmation in your CRM" },
      { num: "5+", label: "Native sync with the roofing software you already use" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI receptionist works",
    title: "Three steps to capture every storm estimate.",
    steps: [
      {
        num: 1,
        heading: "Forward your phone",
        body: "60 seconds. Works with any provider — Twilio, Google Voice, RingCentral, Verizon, AT&T. Your number stays yours.",
      },
      {
        num: 2,
        heading: "We qualify the job",
        body: "Roof type, age, damage description, insurance claim vs. out-of-pocket, emergency tarp needed? Triaged and booked 24/7, in English or Spanish.",
      },
      {
        num: 3,
        heading: "You get the estimate",
        body: "Inspection booked into JobNimbus, AccuLynx, Jobber, Buildertrend, or CompanyCam — plus SMS to you in 60 seconds. Emergency leaks escalate to your cell within 30 seconds.",
      },
    ],
  },

  integrations: {
    label: "Syncs with your roofing & construction software",
    items: ["JobNimbus", "AccuLynx", "Jobber", "Buildertrend", "CompanyCam"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "A storm hits on a Thursday night. By Friday morning your AI has already answered 40 calls, booked 18 inspections, flagged 3 emergency tarp requests to your cell, and texted you a job list sorted by urgency. You show up to the office and your schedule is full. You didn't book a single one yourself.",
    items: [
      { icon: "calendar-check", text: "Your inspection calendar fills during every storm." },
      { icon: "trending-up", text: "You capture insurance-claim jobs your competitor missed." },
      { icon: "moon", text: "You stop watching estimate leads evaporate." },
      { icon: "mood-smile", text: "You go back to running the crew, not the phone." },
    ],
    before: [
      { icon: "phone-ringing", text: "Storm day: 40 calls, you answer 8." },
      { icon: "moon-off", text: "You return calls at 7 PM — leads are already gone." },
      { icon: "trending-down", text: "Your competitor booked the insurance jobs." },
      { icon: "mood-sad", text: "You're exhausted and still losing work." },
    ],
  },

  // VERBATIM from hvac.ts
  voices: {
    sectionNum: "06 · Voices",
    title: "Human-standard AI voice agents.",
    sub: "Out of the box, ready to use.",
    cards: [
      { name: "Professional Sarah", label: "Warm & friendly", sampleLine: "Hi, this is Sarah at Bay Area Roofing..." },
      { name: "Executive Marcus", label: "Authoritative", sampleLine: "Thank you for calling Bay Area Roofing Co." },
      { name: "Casual Jamie", label: "Conversational", sampleLine: "Hey, Bay Area Roofing — how can I help?" },
    ],
  },

  compare: {
    sectionNum: "07 · Compare",
    title: "What you'd pay otherwise.",
    rows: [
      { what: "Voicemail", cost: "$0/mo", result: "Lose 62% of calls — crew is on the roof" },
      { what: "Part-time CA office admin", cost: "~$1,800/mo", result: "20 hrs/week, English only, no storm coverage" },
      { what: "Full-time CA receptionist", cost: "$3,200–$4,000/mo", result: "9–5 only · $48K/yr loaded, no surge capacity" },
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

  pricingAudience: "For roofing & construction shops that lose $15,000 estimates every time a storm hits and the crew can't pick up",

  faqs: [
    {
      q: "How does the AI receptionist handle storm-surge call volume?",
      a: "It scales instantly — no caps, no overages. Whether you get 5 calls a day or 120 calls in the 24 hours after a hailstorm, every one is answered within 2 rings, 24/7. We include storm-triage scripting out of the box: the AI identifies emergency leak/tarp situations, flags them to your cell within 30 seconds, and books inspection slots for everything else.",
    },
    {
      q: "Can the AI qualify insurance-claim jobs vs. out-of-pocket repairs?",
      a: "Yes. The intake script asks whether the homeowner is filing through insurance or paying out of pocket, captures the insurance carrier, and notes the damage description. Insurance-claim leads are tagged separately in your CRM so you can prioritize them — they typically run $12,000–$25,000 vs. $750–$2,500 for a standard repair.",
    },
    {
      q: "What roofing software does it integrate with?",
      a: "We have native sync with JobNimbus, AccuLynx, Jobber, Buildertrend, and CompanyCam. Inspections and estimate requests push directly as jobs or leads — tagged by type (emergency, insurance claim, routine repair) — so your crew board is always current. Google Calendar and iCal are also supported for smaller shops.",
    },
    {
      q: "How does the AI handle a call where someone needs an emergency tarp right now?",
      a: "Emergency calls — active leaks, structural damage, water entering the home — are triaged immediately. The AI takes the address and damage description, texts your on-call number within 30 seconds with a one-line summary, and gives the homeowner a callback ETA. It does not put them on hold or send them to voicemail.",
    },
    {
      q: "Is there a contract or can I cancel anytime?",
      a: "Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI for your market, service area, job types, and after-hours rules — and go live before the next storm rolls through.",
    },
    {
      q: "Do you integrate with my existing phone system?",
      a: "Yes — Twilio, Google Voice, RingCentral, Verizon, AT&T, and most VoIP systems. Setup takes 60 seconds and works without changing your business number.",
    },
  ],

  finalCta: {
    headline: "The next storm is coming. Every call that hits voicemail is a $15,000 job gone.",
    sub: "Three minutes to know if this is for you.",
  },
};

export const roofingConstructionDetail: ServiceDetail = {
  slug: "roofing-construction-answering-service",
  name: "Roofing & Construction",
  title: "Roofing Answering Service — 24/7 AI Dispatcher for California Contractors",
  metaDescription:
    "AI answering service for California roofing and construction contractors. Answers every call 24/7, books straight into JobNimbus, AccuLynx, Jobber, or Buildertrend. Bilingual EN/ES. Flat $500/mo, no overages.",
  h1: "Never Lose Another Roofing Job to a Missed Call",
  intro:
    "When a storm rolls through the Bay Area or the Central Valley, every homeowner with a cracked shingle or a wet ceiling Googles roofers and calls down the list. Industry data puts the roofing miss rate at 62% — and the average insurance-paid storm replacement is worth $12,000–$25,000. We built Live Answer specifically for the California roofing contractor whose crew is on the roof, in the truck, or on a ladder when the phone rings. Our AI dispatcher answers in under two rings, qualifies the job (roof type, age, insurance vs. out-of-pocket, emergency tarp needed), and books the inspection directly into JobNimbus, AccuLynx, Jobber, or Buildertrend — in English or Spanish, 24/7, for less than one lost estimate per month.",
  sections: [
    {
      heading: "What the AI Dispatcher Does on a Roofing Call",
      content:
        "The AI answers within two rings, in English or Spanish. It runs the standard roofing intake — name, callback number, property address, roof type (asphalt shingle, tile, flat/TPO), approximate age, description of the damage, and whether the homeowner plans to file an insurance claim or pay out of pocket. Emergency triage is built in: if the caller reports active water intrusion, the AI flags it as an emergency, texts the on-call owner within 30 seconds with the address and damage description, and gives the homeowner a callback ETA. Routine inspection requests are booked directly into the next available slot in your CRM. Every call ends with an SMS summary to the owner and a transcript stored for 90 days. The intake sounds like a competent human — not a phone tree — because the script is roofing-specific and the AI is trained not to fake confidence on anything it isn't sure about.",
    },
    {
      heading: "Storm-Surge Coverage: The 48-Hour Window That Defines Your Season",
      content:
        "After a significant storm, call volume for roofing contractors spikes 300–500% within 24 hours, and the viable lead window is just 48–72 hours before homeowners commit to whoever answered first. A roofing shop that normally handles 15–20 calls a day can see 80–120 calls in the 24 hours after a major hail event. Voicemail handles none of them — 85% of callers who hit voicemail simply call the next contractor. Live Answer scales instantly: no caps, no overage charges, no staffing lag. During storm season you capture the surge; during quiet weeks you pay the same flat $500. One recovered $18,000 insurance-claim job pays for three years of service.",
    },
    {
      heading: "Integrations Built for the Roofing Stack",
      content:
        "We book into Google Calendar or any iCal-compatible calendar for smaller shops. We also sync directly with the five dominant roofing and construction platforms: JobNimbus, AccuLynx, Jobber, Buildertrend, and CompanyCam. Inspection requests push as leads or jobs tagged by type — emergency, insurance claim, routine repair, new construction estimate — so your board reflects actual priority, not call-arrival order. Two-way SMS means the AI can confirm appointments the day before and reroute reschedules without you touching them. If you use a CRM not on this list (RoofSnap, EagleView, Contractor Foreman), custom integrations ship in under two weeks.",
    },
    {
      heading: "What Sign-Up Actually Looks Like",
      content:
        "We're a done-for-you service, not a self-serve AI tool you configure yourself. The 30-minute kickoff call covers your market area, roof types you handle, insurance vs. retail mix, after-hours and emergency rules, who gets paged for active leaks, and your existing CRM. We build the agent in 48 hours and you're live before the next storm. The 7-day free trial has no credit card and no setup fee, and you keep your phone number portable in case you ever leave. Our booking guarantee is concrete: 10 booked inspections in your first 30 days or a full refund. At an average $500 in recovered margin per inspection, that's $5,000 in captured work against a sub-$500 service cost.",
    },
  ],
  relatedServices: [],
  relatedLocations: ["san-jose", "sacramento", "los-angeles", "san-francisco-bay-area"],
};
