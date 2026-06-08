import type { VerticalConfig } from "./types";
import type { ServiceDetail } from "@/lib/services-data";

export const itMspConfig: VerticalConfig = {
  slug: "it-msp-answering-service",

  meta: {
    title: "IT MSP Answering Service — 24/7 AI Help-Desk Overflow & Ticket Triage",
    description:
      "24/7 bilingual AI answering service for IT managed service providers. P1 outages paged to on-call in under 60 seconds. Every ticket logged into ConnectWise, Autotask, or Halo PSA. SLA clock starts only when a human engineer is actually needed. Flat $500/mo.",
    canonical: "/services/it-msp-answering-service",
  },

  verticalBar: {
    icon: "server",
    label: "Built for California IT managed service providers",
  },

  oneLiner:
    "California MSPs lose MRR prospects and trigger SLA penalties every time an after-hours call hits voicemail. We answer every call 24/7, triage by severity, page your on-call engineer for P1 outages, and log P2/P3 tickets straight into your PSA — so your SLA clock stays clean and your engineers sleep through the noise.",

  hero: {
    eyebrow: "AI help-desk overflow · 24/7 · Bilingual EN/ES",
    headline: "Never lose another {italicWord} to a missed after-hours call.",
    italicWord: "contract",
    subhead: {
      seoBold: "24/7 AI answering service and ticket triage for California IT managed service providers.",
      body:
        "You shouldn't miss a P1 outage because the call landed at 2 AM on a Sunday. We answer every call, capture ticket details, triage severity, page on-call for critical issues, and log everything into your PSA before any SLA clock runs out.",
    },
    sampleBusinessName: "BayTech Managed IT",
    chat: [
      { speaker: "bot", text: "BayTech Managed IT — how can I help you?" },
      { speaker: "user", text: "Our server is completely down. Nobody can get in." },
      { speaker: "bot", text: "I'm on it. Let me collect the details and page your on-call engineer right now." },
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
      {
        // source: https://systechmsp.com/what-it-downtime-really-costs/ / https://mev.com/blog/the-cost-of-it-downtime-in-2025-what-smbs-need-to-know
        num: "$8,000/hr",
        label: "average cost of IT downtime for an SMB client — each unanswered P1 call starts that clock",
      },
      {
        // source: https://www.kaseya.com/resource/msp-pricing-managed-it-services-pricing/ / https://www.flamingo.run/blog/msp-pricing-models
        num: "$3,000+/mo",
        label: "average MRR per MSP client — one prospect who hits voicemail is months of recurring revenue gone",
      },
      {
        // source: https://serenitllc.com/blog/msp-sla-guide / https://www.upcounsel.com/service-level-agreement-penalty-examples
        num: "5–10%",
        label: "monthly fee credit per hour past your P1 response SLA — breaches compound fast",
      },
    ],
    rankingNote:
      "Google sees roughly half of US phone calls through Android — whether you answered, how long the call lasted, and whether the caller tried a competitor next. MSPs that let after-hours calls go to voicemail measurably drop in local search rank. A 100% answer rate protects the Maps position your new-client leads come from.",
  },

  vocQuote: {
    quote:
      "We were getting paged at 3 AM for things that turned out to be P3 tickets. Half the real outages went straight to voicemail.",
    attribution: "— What we hear from California MSP owners every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The calls you're already losing.",
    cards: [
      {
        time: "2:17 AM Sunday",
        body: "A client's file server goes down. They call your main line. Voicemail. They call again. Voicemail. By the time you see the missed call Monday morning, the SLA clock ran six hours and the penalty clause is live.",
      },
      {
        time: "6:45 PM Friday",
        body: "A prospect Googled 'managed IT San Jose' after their in-house guy quit. They called three MSPs. You were on a call. They signed with the one that answered.",
      },
      {
        time: "11:30 PM Wednesday",
        body: "On-call engineer gets paged for what turns out to be a user locked out of their laptop — a P3. He's awake for two hours. The real P1 network outage came in 20 minutes later and he missed it.",
      },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You didn't start an MSP to be a 24-hour answering service.",
    empathy:
      "You built your MSP to deliver clean infrastructure, strong security, and proactive monitoring — not to field calls at 2 AM about forgotten passwords. But the phone doesn't know the difference between a server room fire and a user who can't find the Wi-Fi password. Every call that goes unanswered is either an SLA breach in the making or a new-MRR prospect handing their contract to your competitor.",
    authority: [
      { num: "24/7", label: "Every call answered — including P1 outages at 2 AM" },
      { num: "EN/ES", label: "Bilingual from the first ring" },
      { num: "< 60 sec", label: "P1 on-call page from call end to engineer's phone" },
      { num: "5+", label: "Native PSA integrations: ConnectWise, Autotask, Halo, Freshservice, ServiceNow" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI help-desk overflow works",
    title: "Three steps to clean SLAs and uninterrupted engineers.",
    steps: [
      {
        num: 1,
        heading: "Forward your after-hours line",
        body: "60 seconds. Works with Twilio, RingCentral, Teams, Google Voice, or any VoIP. Keep your existing number.",
      },
      {
        num: 2,
        heading: "We triage every call",
        body: "P1 (full outage, security breach)? On-call engineer paged in under 60 seconds with asset, site, and issue summary. P2/P3? Ticket logged in your PSA with caller, company, issue, severity, and affected asset — no engineer interrupted.",
      },
      {
        num: 3,
        heading: "Your PSA gets the ticket, your team gets the sleep",
        body: "ConnectWise, Autotask, Halo PSA, Freshservice, or ServiceNow — ticket created automatically. Engineers see a clean board in the morning. You capture every SLA clock correctly. New-MRR callers get a professional response instead of voicemail.",
      },
    ],
  },

  integrations: {
    label: "Syncs with your PSA and on-call tools",
    items: ["ConnectWise PSA", "Autotask", "Halo PSA", "Freshservice", "ServiceNow", "PagerDuty"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "Your on-call rotation actually rests. P3 tickets log themselves. P1 outages get paged in under a minute. Your SLA reports are clean. And the prospect who called at 7 PM on a Friday — you answered, you qualified, you closed. One new client. Months of MRR.",
    items: [
      { icon: "moon", text: "Engineers sleep through P3 noise." },
      { icon: "clipboard-check", text: "Every ticket logged before morning standup." },
      { icon: "trending-up", text: "SLA reports stay green. No penalty credits issued." },
      { icon: "user-plus", text: "After-hours prospects convert — not just voicemail." },
    ],
    before: [
      { icon: "phone-ringing", text: "On-call paged for a password reset at 3 AM." },
      { icon: "mood-sad", text: "P1 outage hits voicemail. Client sees the penalty clause." },
      { icon: "trending-down", text: "New-MRR prospect signed with the MSP that answered." },
      { icon: "clock", text: "SLA clock runs while the ticket sits in voicemail." },
    ],
  },

  voices: {
    sectionNum: "06 · Voices",
    title: "Human-standard AI voice agents.",
    sub: "Out of the box, ready to use.",
    cards: [
      { name: "Professional Sarah", label: "Warm & friendly", sampleLine: "Hi, this is Sarah at BayTech Managed IT..." },
      { name: "Executive Marcus", label: "Authoritative", sampleLine: "Thank you for calling BayTech Managed IT." },
      { name: "Casual Jamie", label: "Conversational", sampleLine: "Hey, BayTech IT — how can I help?" },
    ],
  },

  compare: {
    sectionNum: "07 · Compare",
    title: "What you'd pay otherwise.",
    rows: [
      { what: "Voicemail", cost: "$0/mo", result: "SLA clocks run; P1 outages missed; prospects lost" },
      {
        what: "Part-time CA help-desk contractor",
        cost: "~$2,400/mo",
        result: "Business hours only, English only, no PSA integration",
      },
      {
        what: "Dedicated after-hours NOC staff",
        cost: "$4,000–$8,000/mo",
        result: "Full-time cost for after-hours overflow coverage",
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
    "For California MSPs whose SLA penalties and lost MRR exceed $500 every time an after-hours call hits voicemail",

  faqs: [
    {
      q: "How does the AI differentiate P1 from P3 tickets?",
      a: "During onboarding we script your severity triage logic: full outages, security incidents, or downed servers are P1 — the on-call engineer is paged within 60 seconds. Single-user issues, password resets, or non-critical slowdowns are P2/P3 — a ticket is logged in your PSA and nobody is interrupted. You define the exact rules; we enforce them every call.",
    },
    {
      q: "Which PSA tools do you integrate with?",
      a: "ConnectWise PSA, Autotask, Halo PSA, Freshservice, and ServiceNow out of the box. Tickets are created automatically with caller name, company, issue description, severity tier, and affected asset logged. PagerDuty and OpsGenie on-call paging is also supported for P1 escalations.",
    },
    {
      q: "What information does the AI capture on each call?",
      a: "For every ticket: caller name, company, callback number, issue description, affected system or asset, and self-reported severity. For P1 escalations: all of the above plus site address and any immediate safety concerns — delivered to the on-call engineer as a text summary before they call back.",
    },
    {
      q: "How does this protect my SLA response times?",
      a: "The SLA clock starts when a human engineer is actually required, not when the call came in. P3 calls that would have run out the clock in voicemail are now logged immediately, time-stamped, and visible in your PSA — so your SLA reporting reflects actual response, not missed calls.",
    },
    {
      q: "Is there a contract or can I cancel anytime?",
      a: "Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the triage logic to your severity rules, integrate your PSA, configure on-call paging, and go live — before you miss another after-hours P1.",
    },
    {
      q: "Can the AI handle calls from end-users at multiple client companies?",
      a: "Yes. During setup we load your client roster so the AI can identify the caller's company, apply the correct SLA tier, and log the ticket under the right client account in your PSA. White-label greeting with your MSP's name is standard.",
    },
  ],

  finalCta: {
    headline: "Your engineers should fix infrastructure, not answer the phone.",
    sub: "Three minutes to know if this is for you.",
  },
};

export const itMspDetail: ServiceDetail = {
  slug: "it-msp-answering-service",
  title: "IT MSP Answering Service — 24/7 AI Help-Desk Overflow for California MSPs",
  metaDescription:
    "AI answering service and ticket triage for California IT managed service providers. P1 outages paged in under 60 seconds. Every ticket logged into ConnectWise, Autotask, or Halo PSA. Bilingual EN/ES. Flat $500/mo, no overages.",
  h1: "IT MSP Answering Service — Stop Losing Contracts to After-Hours Voicemail",
  intro:
    "California MSPs lose managed service contracts two ways after hours: a P1 outage that goes unanswered starts an SLA penalty clock that compounds at 5–10% of monthly fees per hour of breach, and a new-MRR prospect calling at 7 PM on a Friday signs with the MSP that picks up. Industry data puts the average SMB client downtime cost at $8,000 per hour — every missed P1 call is that clock running against your SLA, your reputation, and your renewal. Live Answer's AI help-desk overflow answers every call 24/7, triages severity on your rules, pages on-call engineering for P1/P2 issues within 60 seconds, and logs P3 tickets automatically into ConnectWise PSA, Autotask, Halo PSA, Freshservice, or ServiceNow — with full ticket details captured before the engineer ever gets involved. Engineers sleep through the noise. Your SLA reports stay clean. New-MRR prospects hear a professional voice instead of voicemail.",
  // source: https://systechmsp.com/what-it-downtime-really-costs/
  // source: https://serenitllc.com/blog/msp-sla-guide
  // source: https://www.kaseya.com/resource/msp-pricing-managed-it-services-pricing/
  sections: [
    {
      heading: "Tiered Ticket Triage That Protects Your On-Call Engineers",
      content:
        "The biggest tax on an MSP's on-call rotation is false urgency — engineers paged at 2 AM for a user who forgot their password or can't find the Wi-Fi network. Live Answer's triage script is built during onboarding around your severity tiers. A P1 (full server outage, security incident, site-down) triggers an immediate page to on-call with a structured summary: caller, company, affected asset, issue description, and callback number — delivered as a text to the engineer's phone within 60 seconds of the call ending. A P2 (major impact, single-system failure, partial outage) logs a ticket in the PSA and schedules a next-business-day callback unless you specify otherwise. A P3 (single-user issue, password reset, routine question) logs automatically in the PSA with no interrupt to on-call. The result: your best engineers stop being woken up for things that could wait until morning, and the actual emergencies get the fastest possible human response — not a voicemail retrieval delay.",
    },
    {
      heading: "PSA Integration That Creates the Ticket Before the Engineer Wakes Up",
      content:
        "Every call — regardless of severity — results in a structured ticket in your PSA before anyone checks their phone. We integrate natively with ConnectWise PSA, Autotask, Halo PSA, Freshservice, and ServiceNow. The AI captures seven fields on every call: caller name, company, callback number, affected system or asset, issue description, self-reported severity, and timestamp. For multi-client MSPs, we load your client roster at onboarding so the AI identifies the client company automatically and files the ticket under the correct account, with the correct SLA tier applied. PagerDuty and OpsGenie are supported for on-call paging so P1 escalations reach whoever is actually on rotation that night, not just a static cell number. By the time your engineers see their boards at morning standup, every after-hours contact is already logged, timestamped, and assigned — nothing lives in voicemail, nothing falls through the cracks.",
    },
    {
      heading: "The MRR Math on Every Missed After-Hours Call",
      content:
        "MSP contracts average $3,000/mo in MRR per client, and the prospect who calls at 7 PM on a Friday after their previous MSP relationship soured is often the highest-intent buyer in your pipeline — they're in pain right now and they want to sign quickly. That prospect calls three MSPs. Two go to voicemail. One answers professionally, captures the company size, current pain, and decision timeline, and books a discovery call for Monday morning. The deal closes in two weeks. At $3,000/mo and a 24-month average contract length, that one after-hours call is $72,000 in contract value. Live Answer is $500/mo flat. The booking guarantee is concrete: 10 booked jobs or qualified intakes in your first 30 days, or full refund. For MSPs, that threshold is typically hit with one new-MRR prospect captured and two SLA breach incidents averted. Setup takes 48 hours from kickoff call. No credit card for the trial. No contract, cancel anytime.",
      // source: https://www.kaseya.com/resource/msp-pricing-managed-it-services-pricing/
    },
  ],
  relatedServices: [],
  relatedLocations: ["san-jose", "san-francisco-bay-area", "sacramento", "los-angeles"],
};
