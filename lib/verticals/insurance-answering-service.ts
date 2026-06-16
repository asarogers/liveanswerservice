import type { VerticalConfig } from "./types";
import type { ServiceDetail } from "@/lib/services-data";

export const insuranceConfig: VerticalConfig = {
  slug: "insurance-answering-service",

  meta: {
    title: "Insurance Agency Answering Service — Never lose another policy",
    description:
      "24/7 bilingual AI answering service for California independent insurance agencies. FNOL intake, new-quote capture, COI requests, policy triage — all answered in English or Spanish. Flat $500/mo, no per-minute fees. 10 booked jobs in 30 days or full refund.",
    canonical: "/services/insurance-answering-service",
  },

  verticalBar: {
    icon: "shield",
    label: "Built for California independent insurance agencies",
  },

  oneLiner:
    "Independent insurance agencies lose nearly half their quote leads after hours — the first agency to respond wins the policy 78% of the time. We answer every call 24/7 in English and Spanish, capture FNOL details, qualify new-quote requests, and route them into your AMS — so you stop losing commissions to whoever picks up first.",

  hero: {
    eyebrow: "AI receptionist · 24/7 · Bilingual EN/ES",
    headline: "Never lose another {italicWord} to a missed call.",
    italicWord: "policy",
    subhead: {
      seoBold: "24/7 bilingual AI answering service for California independent insurance agencies.",
      body:
        "You shouldn't lose a $300–$500 annual commission because a quote request came in at 7 PM or a claimant called after hours. We answer every call, capture FNOL details or qualify the lead, and push it into your agency management system.",
    },
    sampleBusinessName: "Bay Area Independent Insurance",
    chat: [
      { speaker: "bot", text: "Thank you for calling Bay Area Independent Insurance. How can I help you today?" },
      { speaker: "user", text: "I just got in a fender bender — I need to file a claim." },
      { speaker: "bot", text: "I'm sorry to hear that. Let me take down the details and get your claim started right now." },
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
        // source: https://news.getsuperagent.com/insurance-missed-calls-revenue-leak
        num: "47%",
        label: "of insurance inquiries arrive outside business hours — evenings, weekends, emergencies",
      },
      {
        // source: https://agents.quotewizard.com/resources/acting-fast-on-insurance-leads/ ; https://www.saleswingsapp.com/sales-acceleration/the-importance-of-lead-response-in-insurance/
        num: "78%",
        label: "of the time the first agency to respond wins the policy — average agency response is 47 minutes",
      },
      {
        // source: https://www.siaaz.com/blog/independent-insurance-agent-commission-rates ; https://news.getsuperagent.com/insurance-missed-calls-revenue-leak
        num: "$300–$500",
        label: "commission lost per missed new-policy lead — before lifetime renewal value",
      },
    ],
    rankingNote:
      "Google sees roughly half of US phone calls through Android — whether you answered, how long you talked, and whether the caller dialed the next agency immediately after. Agencies that stop answering measurably drop in local rank. A 100% answer rate protects the Maps position your quote and FNOL calls come from.",
  },

  vocQuote: {
    quote:
      "They called three agencies. I was the third callback. By the time I got back to them, they'd already bound the policy somewhere else.",
    attribution: "— What we hear from California independent agents every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The calls you're already losing.",
    cards: [
      {
        time: "6:47 PM Tuesday",
        body: "A homeowner just got a renewal quote that jumped 40%. They're shopping right now, motivated, ready to bind. Your office closed at 5. The agency they reach first gets the policy.",
      },
      {
        time: "Saturday morning",
        body: "A fender-bender on I-880. Your client needs FNOL intake now — not a voicemail and a callback Monday. A bad claims experience kills the renewal.",
      },
      {
        time: "Spanish-language caller",
        body: "A new auto prospect calls three agencies in 15 minutes. Two go to voicemail. The third answers in Spanish. That agent writes the policy.",
      },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You didn't open an agency to answer phones.",
    empathy:
      "You opened it to write policies, service clients, and build a book of business — not chase voicemails. But the phone never stops. It rings while you're in a renewal review. It rings at 7 PM when a client needs FNOL intake. It rings in Spanish when your CSR is out. Every call you miss is a commission your competitor just wrote.",
    authority: [
      { num: "24/7", label: "Every call, every hour — FNOL, quotes, renewals, COI requests" },
      { num: "EN/ES", label: "Bilingual from the first ring — standard on every account" },
      // source: https://agents.quotewizard.com/resources/acting-fast-on-insurance-leads/
      { num: "< 5 min", label: "Quote-lead response — the golden window before they call the next agency" },
      { num: "6+", label: "Native sync with AMS360, Applied Epic, EZLynx, HawkSoft, QQCatalyst, Calendly" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI receptionist works",
    title: "Three steps to never miss another policy.",
    steps: [
      {
        num: 1,
        heading: "Forward your phone",
        body: "60 seconds. Works with any provider — Twilio, Google Voice, RingCentral, Verizon, AT&T. Your agency number stays the same.",
      },
      {
        num: 2,
        heading: "We capture the call",
        body: "FNOL intake? Structured loss details collected and pushed to your AMS. New quote? Lead qualified, coverage type and carrier appetite confirmed, appointment booked. COI request? Caller details logged and flagged for your CSR. All in English or Spanish, 24/7.",
      },
      {
        num: 3,
        heading: "You get the lead or claim — not a voicemail",
        body: "New quote opportunities booked into Calendly or your AMS. FNOL packets pushed to AMS360, Applied Epic, or EZLynx. SMS summary to you within 60 seconds. Hot transfers for urgent claims within 30 seconds.",
      },
    ],
  },

  integrations: {
    label: "Syncs with your agency management system",
    items: ["AMS360", "Applied Epic", "EZLynx", "HawkSoft", "QQCatalyst", "Calendly"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "You finish your last renewal review at 5:30 PM. You go home. Between 6 PM and 8 PM — peak quote-shopping hours — every caller gets a live, bilingual response. By Monday morning, six qualified quote appointments are already on your calendar. You didn't make a single callback yourself.",
    items: [
      { icon: "moon", text: "You stop carrying the agency in your pocket." },
      { icon: "calendar-check", text: "Your quote calendar fills itself — overnight." },
      { icon: "trending-up", text: "Book-of-business grows without adding CSR headcount." },
      { icon: "mood-smile", text: "Clients get FNOL intake at 10 PM — and renew because of it." },
    ],
    before: [
      { icon: "phone-ringing", text: "You return quote calls from the dinner table." },
      { icon: "moon-off", text: "FNOL callers hit voicemail and call the carrier direct." },
      { icon: "trending-down", text: "Half the evening leads bind with whoever answered first." },
      { icon: "mood-sad", text: "You're a CSR, not a producer." },
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
      { what: "Voicemail", cost: "$0/mo", result: "Lose 47% of after-hours leads; clients self-service FNOL to carrier" },
      {
        // source: https://www.ziprecruiter.com/Salaries/Licensed-Csr-Salary--in-California
        what: "Part-time licensed CA CSR",
        cost: "~$1,800/mo",
        result: "20 hrs/week, English only, 9–5 M–F",
      },
      {
        // source: https://www.ziprecruiter.com/Salaries/Commercial-Insurance-Customer-Service-Representative-Salary--in-California
        what: "Full-time CA insurance CSR",
        cost: "$4,500–$5,000/mo",
        result: "Business hours only · $54K/yr loaded",
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
    "For independent CA agencies losing $300–$500 commissions every time an after-hours quote or FNOL call hits voicemail",

  faqs: [
    {
      q: "How does the AI receptionist handle FNOL calls?",
      a: "The AI collects the structured first-notice-of-loss intake — caller name, callback number, policy number, date/time/location of loss, description of damage, other parties involved, and whether emergency services responded. The completed FNOL packet is pushed to your AMS (AMS360, Applied Epic, EZLynx, HawkSoft) and texted to you within 60 seconds. For urgent losses — total losses, injuries, liability exposure — the AI hot-transfers to your on-call line within 30 seconds.",
    },
    {
      q: "Can the AI capture new-quote leads and book appointments?",
      a: "Yes. The AI qualifies the coverage type (auto, home, commercial P&C, umbrella), collects the prospect's contact details and best time to talk, and books a slot directly into Calendly or your AMS calendar. The lead is routed to you with a summary before the call even ends. Responding to a quote request within five minutes increases contact-to-close rates by 400% — we make sure you're always that agency.",
    },
    {
      q: "Does it handle certificate of insurance (COI) requests?",
      a: "Yes. The AI collects requester name, certificate holder details, coverage type needed, and deadline, then logs the request in your AMS and sends you an SMS alert flagged as a COI request. Your CSR handles issuance during business hours — but the client gets a live response and a confirmation at any hour.",
    },
    {
      q: "What about policy questions and coverage triage?",
      a: "The AI handles routine policy-question triage: confirming that the caller is an existing client, logging their question, and routing it to the right team member with a transcript. It does not interpret coverage or give advice — it sets the stage so your licensed staff can answer accurately on callback.",
    },
    {
      q: "Is there a contract or can I cancel anytime?",
      a: "Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee. Our booking guarantee: 10 booked appointments or captured FNOL packets in your first 30 days, or a full refund.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI for your carrier appetite, coverage lines, FNOL rules, and AMS workflow, then go live before you lose another evening's worth of quote leads.",
    },
    {
      q: "Is this CCPA-compliant?",
      a: "Yes. A two-party consent prompt plays at the start of every recorded call. Recordings are encrypted at rest and in transit. We can disable recording and retain transcripts only. Deletion requests honored within 30 days.",
    },
  ],

  finalCta: {
    headline: "Your agency should run on policies, not voicemails.",
    sub: "Three minutes to know if this is for you.",
  },
};

export const insuranceDetail: ServiceDetail = {
  slug: "insurance-answering-service",
  name: "Insurance Answering Service",
  title: "Insurance Agency Answering Service — 24/7 AI Receptionist for California",
  metaDescription:
    "AI receptionist for California independent insurance agencies. FNOL intake, new-quote capture, COI requests — answered 24/7 in English or Spanish. Flat $500/mo, no per-minute fees. 10 booked jobs in 30 days or full refund.",
  h1: "Never Lose Another Policy to Voicemail",
  intro:
    "When a homeowner gets a renewal shock at 7 PM, they don't wait until morning — they open Google and call three agencies. The first one to respond wins the policy 78% of the time, and the average agency doesn't call back for 47 minutes. Every evening and weekend, independent P&C agencies bleed quote leads, FNOL calls, and COI requests to whoever happened to pick up first. We built Live Answer specifically for the California independent agency owner who is still doing their own intake, watching new-policy commissions walk out the door after hours. Our AI receptionist answers in under two rings, captures structured FNOL intake or qualifies the quote lead, and pushes it straight into AMS360, Applied Epic, EZLynx, HawkSoft, or QQCatalyst — in English or Spanish, 24/7 — for less than one month of a California CSR's salary.",
  sections: [
    {
      heading: "What the AI Receptionist Actually Does on an Insurance Call",
      content:
        "The AI answers within two rings in English or Spanish — the caller's language is detected in the first three seconds. For FNOL calls, it runs the structured intake: policyholder name, policy number, date and location of loss, description of damage or injury, other parties and their insurance, and whether police or emergency services responded. The completed packet is pushed to your AMS and texted to you within 60 seconds. For total losses, injuries, or significant liability exposure, the call hot-transfers to your on-call line within 30 seconds. For new-quote calls, the AI identifies the coverage type, collects the prospect's contact details, and books a quote appointment. For COI requests, it logs the certificate-holder details and flags the request for your CSR. Every call ends with an SMS summary and a 90-day stored transcript — no lost context, no Monday-morning game of telephone with a half-remembered voicemail.",
    },
    {
      heading: "Why Speed-to-Contact Wins the Insurance Policy",
      // source: https://agents.quotewizard.com/resources/acting-fast-on-insurance-leads/ ; https://www.saleswingsapp.com/sales-acceleration/the-importance-of-lead-response-in-insurance/
      content:
        "The research is unambiguous: responding to a quote request within five minutes increases contact-to-close rates by 400%. The first agency to respond wins the policy 78% of the time. The average insurance agency responds to a new lead in 47 minutes — by which point the prospect has moved on. Nearly half (47%) of all insurance inquiries arrive outside business hours, with the peak quote-shopping window between 6 PM and 8 PM on weekday evenings. That's precisely when your office is dark. Live Answer closes that window entirely. The AI picks up before the caller can press 2 for a competitor, qualifies the lead, and puts a booked appointment on your calendar before you finish dinner.",
    },
    {
      heading: "FNOL Intake: Why It Matters for Retention, Not Just Claims",
      content:
        "A study by LexisNexis found that insurers who receive FNOL within 30 minutes of an incident reduce average claim costs by up to 20%. But for an independent agency, the stakes go beyond cost: how you handle a client's first call after a loss is the single biggest driver of renewal. A client who gets a live, empathetic intake at 10 PM on a Saturday — not a voicemail — is dramatically more likely to renew. Live Answer's FNOL intake is scripted to be calm, thorough, and compassionate. It doesn't give coverage opinions; it collects the facts your adjusters need and tells the client what to expect next. That's the difference between a retained client and one who shops at renewal.",
    },
    {
      heading: "Agency Management System Integrations",
      content:
        "We push data into the five dominant independent agency management platforms: AMS360, Applied Epic, EZLynx, HawkSoft, and QQCatalyst. Quote leads and FNOL packets arrive as structured records — not unformatted notes in a shared inbox. Appointment bookings go directly into Calendly or your AMS calendar, tagged by call type. If you use a platform not on this list, we ship most custom integrations within two weeks. Two-way SMS means the AI can also confirm appointments with prospects the morning before and reroute reschedules without you touching them.",
    },
    {
      heading: "What Done-for-You Means for an Insurance Agency",
      content:
        "We are not a self-serve AI tool you configure yourself. The 30-minute kickoff call covers the questions that matter: your carrier appetite by line, your service territory, who gets paged for urgent FNOL, your COI workflow, your after-hours escalation rules, and your AMS setup. We build the agent in 48 hours and go live before you lose another evening of quote leads. The 7-day free trial has no credit card and no setup fee. Our booking guarantee is concrete: 10 booked quote appointments or captured FNOL packets in your first 30 days, or a full refund. A single new auto policy at 15% commission on a $1,500 premium is $225 — recovered in the trial window, the math makes the guarantee easy.",
    },
  ],
  relatedServices: [],
  relatedLocations: ["san-jose", "sacramento", "los-angeles", "san-francisco-bay-area"],
};
