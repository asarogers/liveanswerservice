import type { VerticalConfig } from "./types";
import type { ServiceDetail } from "@/lib/services-data";

export const propertyManagementConfig: VerticalConfig = {
  slug: "property-management-answering-service",

  meta: {
    title: "Property Management Answering Service — Never miss another tenant call",
    description:
      "24/7 bilingual AI property management answering service for California landlords and PM companies. Triages maintenance, logs requests into AppFolio/Buildium/Yardi, escalates true emergencies, captures leasing leads — English or Spanish. Flat $500/mo, no per-minute fees. 7-day free trial.",
    canonical: "/services/property-management-answering-service",
  },

  verticalBar: {
    icon: "building-community",
    label: "Built for California property managers & landlords",
  },

  oneLiner:
    "Property managers drown in tenant calls across hundreds of units — maintenance, leasing, rent questions, after-hours emergencies — and lose leasing leads to voicemail. We answer every call 24/7 in English and Spanish, triage and log maintenance requests into your PM software, escalate true emergencies to the on-call manager, and capture the rest — so you stop carrying the whole portfolio on your phone.",

  hero: {
    eyebrow: "AI receptionist · 24/7 · Bilingual EN/ES",
    headline: "Never miss another {italicWord} call.",
    italicWord: "tenant",
    subhead: {
      seoBold: "24/7 bilingual AI property management answering service for California landlords and PM companies.",
      body:
        "You shouldn't lose a leasing lead because it came in at 8 PM, or have a tenant's 9 PM water leak sit in voicemail until morning. We answer every call, triage and log the maintenance request into your PM software, escalate true emergencies to your on-call manager, and capture leasing inquiries before they call the next listing.",
    },
    sampleBusinessName: "East Bay Property Management",
    chat: [
      { speaker: "bot", text: "Thank you for calling East Bay Property Management. How can I help you today?" },
      { speaker: "user", text: "Hay agua saliendo debajo del fregadero — está empeorando." },
      { speaker: "bot", text: "Entiendo, eso es una emergencia. Voy a registrar la fuga ahora mismo y avisar al administrador de guardia." },
    ],
  },

  trustStrip: [
    { icon: "map-pin", label: "Made in California" },
    { icon: "shield-check", label: "CCPA-compliant recording" },
    { icon: "language", label: "Bilingual EN/ES" },
    { icon: "clock-24", label: "24/7 — nights, weekends, holidays" },
  ],

  stakes: {
    sectionNum: "01 · The after-hours problem",
    title: "The math behind every missed call.",
    stats: [
      {
        num: "24/7",
        label: "tenants call at all hours — maintenance and emergencies don't wait for business hours",
      },
      {
        num: "Many",
        label: "leasing leads call the next listing the moment they hit your voicemail",
      },
      {
        num: "EN/ES",
        label: "a large share of California tenants are more comfortable reporting problems in Spanish",
      },
    ],
    rankingNote:
      "Google sees roughly half of US phone calls through Android — whether you answered, how long you talked, and whether a prospective tenant dialed the next listing immediately after. PM companies that stop answering measurably drop in local rank. A 100% answer rate protects the Maps position your leasing inquiries come from.",
  },

  vocQuote: {
    quote:
      "We manage a few hundred units and the after-hours phone was eating us alive — half the calls were 'my heater's out' and the other half were prospects we never called back in time.",
    attribution: "— What we hear from California property managers every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The calls you're already losing.",
    cards: [
      {
        time: "9:14 PM Tuesday",
        body: "A Spanish-speaking tenant in your Oakland building reports water leaking under the kitchen sink, spreading fast. That's a real emergency — but your office closed at 5, and it sits in voicemail until morning while the damage spreads.",
      },
      {
        time: "Saturday afternoon",
        body: "A qualified prospect saw your San Jose listing and calls to ask about a vacancy and a showing. You're managing a turnover across town. The call goes to voicemail — and they call the next listing on the page.",
      },
      {
        time: "Monday, 6 AM",
        body: "A tenant calls before work about a clogged drain. It's routine, not an emergency — but there's nobody to log it, so it never makes it into your work-order queue until someone finally checks the voicemail box.",
      },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You didn't get into property management to answer phones.",
    empathy:
      "You got into it to fill units, keep buildings running, and grow the portfolio — not to be on call 24/7 for clogged drains and lockouts. But the phone never stops. It rings during a turnover. It rings at 9 PM with a water leak. It rings in Spanish when your office manager is out. Every leasing call you miss is a vacancy that stays open longer; every emergency you miss is damage that gets worse overnight.",
    authority: [
      { num: "24/7", label: "Every call, every hour — maintenance, leasing, rent questions, emergencies" },
      { num: "EN/ES", label: "Bilingual from the first ring — standard, no upcharge" },
      { num: "Triage", label: "True emergencies escalated to on-call; everything else logged and captured" },
      { num: "6+", label: "Logs into AppFolio, Buildium, Yardi, Propertyware, Rent Manager, DoorLoop" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI receptionist works",
    title: "Three steps to never miss another tenant call.",
    steps: [
      {
        num: 1,
        heading: "Forward your phone",
        body: "60 seconds. Works with any provider — Twilio, Google Voice, RingCentral, Verizon, AT&T. Your office number stays the same.",
      },
      {
        num: 2,
        heading: "We answer and triage the call",
        body: "Maintenance request? The details are collected and logged as a work order in your PM software. Leasing inquiry? Unit, budget, and contact captured, showing requested. True emergency — no heat, water leak, gas smell, lockout? Escalated to the on-call manager right away. Everything else captured cleanly. All in English or Spanish, 24/7.",
      },
      {
        num: 3,
        heading: "You get the request — not a voicemail",
        body: "Maintenance requests pushed into AppFolio, Buildium, Yardi, Propertyware, Rent Manager, or DoorLoop. Leasing leads routed to your team. Emergencies escalated to the on-call manager. SMS summary of every call so nothing falls through.",
      },
    ],
  },

  integrations: {
    label: "Logs into your property management software",
    items: ["AppFolio", "Buildium", "Yardi", "Propertyware", "Rent Manager", "DoorLoop"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "You leave the office at 5:30 and actually put the phone down. Overnight, a tenant's leak gets triaged and escalated to your on-call manager, three routine maintenance requests get logged straight into AppFolio, and two leasing prospects get captured with showings requested. By Monday morning your work-order queue is current and your leasing pipeline is full — and you didn't take a single after-hours call yourself.",
    items: [
      { icon: "moon", text: "You stop carrying the whole portfolio in your pocket." },
      { icon: "clipboard-check", text: "Maintenance requests are logged, not lost in voicemail." },
      { icon: "trending-up", text: "Leasing leads get captured instead of calling the next listing." },
      { icon: "mood-smile", text: "Tenants reach a live, bilingual voice at 10 PM — and renew because of it." },
    ],
    before: [
      { icon: "phone-ringing", text: "You take maintenance calls from the dinner table." },
      { icon: "moon-off", text: "After-hours emergencies sit in voicemail while damage spreads." },
      { icon: "trending-down", text: "Leasing prospects hit voicemail and call the next listing." },
      { icon: "mood-sad", text: "You're a 24/7 dispatcher, not a portfolio manager." },
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
      { what: "Voicemail", cost: "$0/mo", result: "Lose leasing leads after hours; emergencies sit until morning" },
      {
        what: "Part-time CA office assistant",
        cost: "~$1,800/mo",
        result: "20 hrs/week, often English only, 9–5 M–F",
      },
      {
        what: "Full-time CA leasing/office staff",
        cost: "$4,500–$5,000/mo",
        result: "Business hours only · no nights, weekends, or holidays",
      },
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

  pricingAudience:
    "For California PM companies and landlords drowning in tenant calls — maintenance, leasing, and after-hours emergencies — across hundreds of units",

  faqs: [
    {
      q: "How does the AI handle maintenance requests?",
      a: "The AI collects the request details — tenant name, unit/address, callback number, and a clear description of the problem — and logs it as a work order in your PM software (AppFolio, Buildium, Yardi, Propertyware, Rent Manager, or DoorLoop). You get an SMS summary within 60 seconds. Routine requests go straight into your queue; true emergencies are escalated immediately instead.",
    },
    {
      q: "What counts as an emergency, and how is it escalated?",
      a: "We configure the emergency rules with you at kickoff — typically no heat, a water leak, a gas smell, or a lockout. When a call matches, the AI escalates it to your on-call manager right away with the unit and a one-line summary, so someone can act before the damage gets worse. Everything that isn't a true emergency is captured and logged for normal handling.",
    },
    {
      q: "Is the Spanish support really included?",
      a: "Yes — bilingual English/Spanish is standard on every account, with no upcharge. The AI detects the caller's language in the first few seconds and switches automatically. For California portfolios with many Spanish-speaking tenants, this is often the single most important feature: tenants report problems clearly and prospects get answered in their own language.",
    },
    {
      q: "Can it capture leasing inquiries too?",
      a: "Yes. For prospective tenants, the AI captures the unit of interest, budget, move-in timing, and contact details, and routes the lead to your team with a showing request — so leasing prospects get a live response instead of voicemail and don't simply call the next listing.",
    },
    {
      q: "Is there a contract or can I cancel anytime?",
      a: "Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay is $5,100/year and waives the $199 setup fee.",
    },
    {
      q: "How long does setup take?",
      a: "About 48 hours from your kickoff call. We script the AI for your portfolio, your emergency-escalation rules, your on-call contacts, and your PM software workflow, then go live before you lose another after-hours call.",
    },
    {
      q: "Is this CCPA-compliant?",
      a: "Yes. A two-party consent prompt plays at the start of every recorded call. Recordings are encrypted at rest and in transit. We can disable recording and retain transcripts only. Deletion requests honored within 30 days.",
    },
  ],

  finalCta: {
    headline: "Your team should run on leases, not voicemails.",
    sub: "Three minutes to know if this is for you.",
  },
};

export const propertyManagementDetail: ServiceDetail = {
  slug: "property-management-answering-service",
  name: "Property Management Answering Service",
  title: "Property Management Answering Service — 24/7 AI Receptionist for California",
  metaDescription:
    "AI receptionist for California property managers and landlords. Triages maintenance, logs into AppFolio/Buildium/Yardi, escalates true emergencies, captures leasing leads — answered 24/7 in English or Spanish. Flat $500/mo, no per-minute fees.",
  h1: "Never Miss Another Tenant Call to Voicemail",
  intro:
    "When a tenant calls at 9 PM about a water leak under the sink, that call can't wait until morning — but in most PM offices it sits in voicemail while the damage spreads. And when a qualified prospect calls about a vacancy after hours, they don't leave a message and wait — they call the next listing on the page. Property managers drown in tenant calls across hundreds of units: maintenance, leasing, rent questions, and after-hours emergencies, often from Spanish-speaking tenants. We built Live Answer specifically for the California PM company or landlord still carrying the after-hours phone, watching maintenance requests pile up in voicemail and leasing leads slip away. Our AI receptionist answers in under two rings, triages and logs the maintenance request into AppFolio, Buildium, Yardi, Propertyware, Rent Manager, or DoorLoop, escalates true emergencies to the on-call manager, and captures leasing inquiries — in English or Spanish, 24/7 — for a flat $500/mo, less than one month of a California office assistant's pay.",
  sections: [
    {
      heading: "What the AI Receptionist Actually Does on a Property Management Call",
      content:
        "The AI answers within two rings in English or Spanish — the caller's language is detected in the first few seconds. For maintenance calls, it collects the tenant name, unit or address, callback number, and a clear description of the problem, then logs the request as a work order in your PM software. For true emergencies — no heat, a water leak, a gas smell, a lockout — the call is escalated to your on-call manager right away with the unit and a one-line summary, so someone can act before the damage gets worse. For leasing inquiries, the AI captures the unit of interest, budget, move-in timing, and contact details and routes the lead to your team with a showing requested. For rent and general questions, it logs the request and routes it to the right person. Every call ends with an SMS summary so nothing falls through the cracks overnight.",
    },
    {
      heading: "Bilingual Is Standard, Not an Upcharge",
      content:
        "A large share of California tenants are more comfortable reporting problems and asking questions in Spanish, and many answering services either treat Spanish as a premium add-on or limit it to business hours. We include native English-Spanish as standard on every account, with the AI detecting the caller's language in the first few seconds and switching automatically. For a property management company with many Spanish-speaking tenants, this single feature often pays for the service: a tenant who can clearly describe a 9 PM leak in Spanish gets it triaged and escalated correctly, and a Spanish-speaking prospect gets answered in their own language instead of hitting voicemail and calling the next listing.",
    },
    {
      heading: "Triage and Logging Into Your PM Software",
      content:
        "The point isn't just to pick up — it's to get the right call to the right place. The AI triages every call: true emergencies (no heat, water leak, gas smell, lockout) are escalated to the on-call manager immediately, while routine maintenance is logged as a structured work order rather than an unformatted voicemail. We push that data into the platforms property managers actually run on: AppFolio, Buildium, Yardi, Propertyware, Rent Manager, and DoorLoop. Requests arrive as records in your system, tagged by type, so your team starts Monday with a current work-order queue instead of a backlog of half-remembered voicemails. If you use a platform not on this list, we ship most custom integrations within a couple of weeks.",
    },
    {
      heading: "Why Flat Unlimited Beats Per-Minute Pricing for a Portfolio",
      content:
        "Tenant call volume isn't steady — a heatwave, a cold snap, or a building-wide issue can spike calls overnight, exactly when you can't afford for the answering service to stop answering or to send a four-figure surprise invoice. Many services cap minutes or charge per-minute fees that surprise you on the monthly bill. Live Answer charges a flat $500/mo, unlimited — no per-minute fees, no overage charges, no call caps, and the rate is locked at sign-up. Across hundreds of units that predictability matters: one filled vacancy or one avoided after-hours water-damage claim more than covers the service for the month.",
    },
    {
      heading: "What Done-for-You Means for a Property Management Company",
      content:
        "We are not a self-serve AI tool you configure yourself. The kickoff call covers what matters for a portfolio: your buildings and unit types, your emergency-escalation rules, who is on call and when, your leasing intake questions, and your PM software workflow. We build the agent in about 48 hours and go live before you lose another after-hours call. The 7-day free trial has no credit card. Setup is a one-time $199, waived on annual prepay ($5,100/year). For a PM company managing hundreds of units, the math is simple: a single filled vacancy or one prevented after-hours emergency pays for the service many times over.",
    },
  ],
  relatedServices: [],
  relatedLocations: ["san-jose", "sacramento", "los-angeles", "san-francisco-bay-area"],
};
