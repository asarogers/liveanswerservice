import type { VerticalConfig } from "./types";
import type { ServiceDetail } from "@/lib/services-data";

/**
 * Accounting / CPA / Bookkeeping vertical — solo and small CA accounting firms.
 * Core angle: tax-season call surge (Jan–Apr) when the team is heads-down
 * billing returns, prospects call and get voicemail, and new-client LTV walks
 * out the door to whichever firm picked up first.
 */
export const accountingConfig: VerticalConfig = {
  slug: "accounting-answering-service",

  meta: {
    title: "Accounting Firm Answering Service — Never Lose a Client During Tax Season",
    description:
      "24/7 bilingual AI receptionist for California CPA and bookkeeping firms. Answers every call during tax season surge, qualifies new-client intake, books consults into QuickBooks, Karbon, or TaxDome. Flat $500/mo, no per-minute fees.",
    canonical: "/services/accounting-answering-service",
  },

  verticalBar: {
    icon: "calculator",
    label: "Built for California CPA and bookkeeping firms",
  },

  oneLiner:
    "California accounting firms see a 300–400% call spike every January through April — exactly when every preparer is buried in returns and can't pick up. We answer every call 24/7 in English and Spanish, qualify the caller, and book the consult so you stop losing $3,500 clients to voicemail.",

  hero: {
    eyebrow: "AI receptionist · 24/7 · Bilingual EN/ES",
    headline: "Never lose another {italicWord} to tax-season voicemail.",
    italicWord: "client",
    subhead: {
      seoBold: "24/7 bilingual AI answering service for California accounting and CPA firms.",
      body:
        "You shouldn't lose a $3,500 bookkeeping client because your team was buried in returns. We answer every call, qualify the matter, and text you the details so you capture the lead without breaking focus.",
    },
    sampleBusinessName: "Bay Area Tax & Accounting",
    chat: [
      { speaker: "bot", text: "Bay Area Tax & Accounting — thank you for calling. How can I help you today?" },
      { speaker: "user", text: "I need to file my business taxes. I've never used an accountant before." },
      { speaker: "bot", text: "Great — let me get a few details and book you a free 20-minute consult with our team." },
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
    sectionNum: "01 · The tax-season problem",
    title: "The math behind every missed call.",
    stats: [
      {
        num: "300–400%",
        // source: https://agentzap.ai/blog/accounting-firm-phone-statistics
        label: "call volume spike at CPA firms January through April — while preparers are heads-down on returns",
      },
      {
        num: "$3,500+",
        // source: https://universalaccountingschool.com/calculating-a-clients-lifetime-value/
        label: "average lifetime value of a new accounting or bookkeeping client walking to the firm that answered",
      },
      {
        num: "85%",
        // source: https://dialzara.com/blog/missed-calls-hidden-costs-and-ai-solutions
        label: "of callers who hit voicemail never call back — 62% call a competitor next",
      },
    ],
    rankingNote:
      "Google sees roughly half of US phone calls through Android — whether you answered, how long you talked, and whether the prospect called another firm next. Accounting practices that stop answering during tax season measurably drop in local Maps rank, exactly when new-client searches peak. A 100% answer rate protects the position your best leads come from.",
  },

  vocQuote: {
    quote:
      "Tax season is when we need to be the most available to new clients, but it's also when we're the least able to pick up the phone. It's a brutal catch-22.",
    attribution: "— What we hear from California CPA firm owners every February",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last March",
    title: "The calls you're already losing.",
    cards: [
      {
        time: "March 15th, 3:47 PM",
        body: "A small-business owner needs a CPA before the deadline. Your team is buried. The call goes to voicemail. They book with the firm that answered on the second ring.",
      },
      {
        time: "February, tax season crunch",
        body: "Your phone rings 4× more than August. Every preparer is billing. New-client calls stack up in voicemail. By the time anyone calls back, the prospect has already filed — with someone else.",
      },
      {
        time: "After-hours, April 14th",
        body: "A panicked client calls about a document needed before tomorrow's filing deadline. No one answers. They spend the night anxious and switch firms next year.",
      },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You didn't start an accounting firm to answer phones.",
    empathy:
      "You started it to serve clients, close the books, and file clean returns — not chase down voicemails between billing hours. But every January, the phone volume triples and your team's capacity doesn't. New prospects call once, get voicemail, and hire whoever answered. Document-request follow-ups pile up. After-hours deadline callers panic and disengage. Every missed call during busy season is a client relationship that never started.",
    authority: [
      { num: "24/7", label: "Every call answered — including after-hours deadline calls" },
      { num: "EN/ES", label: "Bilingual from the first ring — no upcharge" },
      { num: "60 sec", label: "From call ending to new-client intake summary in your inbox" },
      { num: "6+", label: "Native sync with accounting and scheduling tools you already use" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI receptionist works",
    title: "Three steps to never miss another new-client call.",
    steps: [
      {
        num: 1,
        heading: "Forward your phone",
        body: "60 seconds. Works with any provider — Twilio, Google Voice, RingCentral, Verizon, AT&T. Your existing number stays yours.",
      },
      {
        num: 2,
        heading: "We qualify the intake",
        body: "Service type (tax prep, bookkeeping, payroll, audit), entity, urgency, and deadline context — all captured in the first 90 seconds. 24/7, in English or Spanish.",
      },
      {
        num: 3,
        heading: "You get the consult booked",
        body: "Scheduled into Calendly, Acuity, or your practice management tool — plus an SMS summary within 60 seconds. High-urgency deadline calls escalate to your cell within 30 seconds.",
      },
    ],
  },

  integrations: {
    label: "Syncs with your practice management software",
    items: ["QuickBooks Online", "Karbon", "Canopy", "TaxDome", "Calendly", "Acuity"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "It's March 20th. Your team is billing 10-hour days. Your phone is ringing every 15 minutes with new prospects and deadline-panicked clients. Every call gets answered professionally, in English or Spanish. By Friday, your April calendar is full of consults you didn't have to schedule yourself.",
    items: [
      { icon: "calendar-check", text: "Your consult calendar fills itself through tax season." },
      { icon: "trending-up", text: "New-client revenue climbs without adding front-desk staff." },
      { icon: "clock", text: "Your team stays focused on billable work, not phone triage." },
      { icon: "mood-smile", text: "You actually enjoy busy season again." },
    ],
    before: [
      { icon: "phone-ringing", text: "You stop billing to answer a new-client cold call." },
      { icon: "mail-off", text: "Document-request follow-ups go unreturned for days." },
      { icon: "trending-down", text: "New-client calls during returns season go to voicemail." },
      { icon: "mood-sad", text: "Busy season means revenue you never quite capture." },
    ],
  },

  // VERBATIM from hvac.ts
  voices: {
    sectionNum: "06 · Voices",
    title: "Human-standard AI voice agents.",
    sub: "Out of the box, ready to use.",
  },

  compare: {
    sectionNum: "07 · Compare",
    title: "What you'd pay otherwise.",
    rows: [
      { what: "Voicemail", cost: "$0/mo", result: "85% of callers never call back; 62% hire a competitor" },
      {
        what: "Part-time CA front-desk hire",
        // source: https://www.ziprecruiter.com/Salaries/Full-Time-Receptionist-Salary--in-California
        cost: "~$1,800/mo",
        result: "20 hrs/week, English only, 9–5 — useless during tax-season after-hours rush",
      },
      {
        what: "Full-time CA receptionist",
        // source: https://www.glassdoor.com/Salaries/california-receptionist-salary-SRCH_IL.0,10_IS2280_KO11,23.htm
        cost: "$3,800–$4,600/mo",
        result: "9–5 only · ~$46K/yr base + benefits — still goes home at tax deadline",
      },
    ],
  },

  unlimited: {
    headline: "Most answering services cap your minutes. We don't.",
    competitors: [
      { name: "Ruby Receptionists $235/mo", cap: "100 minutes cap" },
      { name: "AnswerConnect $350/mo", cap: "$1.85/min overage" },
      { name: "Simple Phones $49/mo", cap: "100 calls cap" },
    ],
  },

  pricingAudience:
    "For California CPA and bookkeeping firms that lose $3,500 clients to voicemail every tax season",

  faqs: [
    {
      q: "How does the AI receptionist work for an accounting firm?",
      a: "You forward your business line to a number we provide. Every incoming call is answered within 2 rings, 24/7. Our AI qualifies the caller — service type (tax prep, bookkeeping, payroll), entity type, urgency, and any deadline context — books the consult into your scheduling tool, and texts you a summary within 60 seconds. Deadline-critical calls escalate to your cell within 30 seconds.",
    },
    {
      q: "Can it handle the January–April call surge without extra cost?",
      a: "Yes — flat $500/mo means no per-minute fees, no overage charges, and no call caps. Whether you receive 50 calls in February or 500 in April, the price is the same. That's the entire point of unlimited flat-rate: you never have to ration calls during the season you can least afford to miss them.",
    },
    {
      q: "Can the AI qualify new-client intake for different accounting services?",
      a: "Yes. We script the AI for your specific service mix — individual tax prep vs. business returns vs. ongoing bookkeeping vs. payroll vs. audit support. Different services get different qualifying questions and routed differently in your calendar. The intake captures entity type, urgency, whether they have a prior-year return, and the deadline context, so every consult you see is already pre-qualified.",
    },
    {
      q: "Does it integrate with my practice management software?",
      a: "Yes — native sync with QuickBooks Online, Karbon, Canopy, TaxDome, Calendly, and Acuity Scheduling. If you use a different tool, request a custom integration during onboarding; we ship most in under two weeks.",
    },
    {
      q: "Is there a contract or can I cancel anytime?",
      a: "Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI for your services, configure your intake flow and calendar integrations, and go live before you lose another busy-season lead.",
    },
    {
      q: "Is this CCPA-compliant?",
      a: "Yes. A two-party consent prompt plays at the start of every recorded call. Recordings are encrypted at rest and in transit. We can disable recording and retain transcripts only if you prefer. Deletion requests honored within 30 days.",
    },
  ],

  finalCta: {
    headline: "Your firm should run on new clients, not missed calls.",
    sub: "Three minutes to know if this is for you.",
  },
};

export const accountingDetail: ServiceDetail = {
  slug: "accounting-answering-service",
  title: "Accounting Firm Answering Service — 24/7 AI Receptionist for California CPAs",
  metaDescription:
    "AI receptionist for California CPA and bookkeeping firms. Answers every call during tax-season surge, qualifies new-client intake, books into QuickBooks, Karbon, Canopy, or TaxDome. Bilingual EN/ES. Flat $500/mo, no overages.",
  h1: "Accounting Firm Answering Service — Never Lose a Client During Tax Season",
  intro:
    "California CPA and bookkeeping firms see a 300–400% spike in call volume every January through April — exactly when every preparer is buried in returns and has zero bandwidth to answer a new-client cold call. A prospect who hits voicemail during tax season doesn't wait; they call the next firm on Google, and the average accounting client relationship is worth $3,500 or more in lifetime billings. Live Answer is built specifically for the accounting practice that needs its phone answered professionally during busy season without hiring seasonal front-desk staff. Our AI receptionist picks up within two rings, qualifies the caller by service type (individual tax prep, business returns, bookkeeping, payroll), captures the entity type and deadline urgency, and books the consult directly into your scheduling tool — in English or Spanish, 24/7 — for less than one captured client per month.",
  sections: [
    {
      heading: "What the AI Receptionist Does on a New-Client Call",
      content:
        "The AI answers in under two rings, in English or Spanish (detected within three seconds or chosen by the caller). It takes the accounting-specific intake: service type, business or individual, entity (LLC, S-corp, sole prop, individual), prior-year preparer, deadline sensitivity, and the caller's biggest pain point (behind on books, missed an estimate, first-time filer). If the caller mentions an urgent deadline — extension filing, IRS correspondence, payroll tax notice — the AI flags it as high-priority and routes the summary to the owner's cell within 30 seconds. Routine consult requests are booked directly into the next available slot in Calendly, Acuity, or your practice management tool. Every call ends with an SMS plus email summary within 60 seconds and a full transcript stored for 90 days. The AI never gives tax or financial advice — that is a hard guardrail — and tells callers so directly if they ask substantive questions, keeping the firm's professional obligations intact.",
    },
    {
      heading: "Why Tax Season Is the Worst Time to Miss a Call",
      content:
        "Industry data shows accounting firm call volume increases 300–400% between January and mid-April, with the sharpest spike in late February as W-2s and 1099s land. During that same window, every preparer is billing maximum hours and has the least capacity to handle a new-client inquiry. The result is a structural lead-capture failure: the season with the highest new-client intent is the season the firm is least able to convert. An AI receptionist solves this permanently. While your team runs tax season at full capacity, the phone is always answered, every prospect is qualified and booked, and document-request follow-ups are handled without pulling a preparer off a return. The 85% of callers who never call back after voicemail become clients you actually capture. The 62% who would have called a competitor stay in your pipeline.",
    },
    {
      heading: "Integrations Built for the Accounting Stack",
      content:
        "We sync with the tools California accounting practices actually run on: QuickBooks Online for client records, Karbon and Canopy for practice management workflows, TaxDome for portal-based client communication, and Calendly or Acuity for consult scheduling. Bookings push as new-client intake records tagged by service type so they surface correctly in your workflow. Two-way SMS means the AI can confirm consults with prospects the day before and handle reschedule requests automatically. Document-request follow-up sequences can be triggered by the AI after a call in which a client mentions outstanding items. If you run a tool we haven't pre-built (Financial Cents, Jetpack Workflow, Practice Ignition), we can add a custom integration — most ship in under two weeks. The goal is that a new consult booked by the AI requires zero manual touchpoints from your team before the meeting itself.",
    },
    {
      heading: "Flat-Rate Pricing That Makes Sense During Surge Season",
      content:
        "Most answering services charge per minute — Ruby Receptionists starts at $235/mo for 100 minutes, AnswerConnect charges $1.85/min in overage, Simple Phones caps at 100 calls. During a tax-season call surge, per-minute pricing turns your answering service into a variable cost that spikes exactly when you need it most. Live Answer charges a flat $500/mo unlimited — no per-minute fees, no overage charges, no call caps through April 15th or any other peak. A single captured bookkeeping client ($3,500+ LTV) pays for seven months of service. Three new clients in January cover the year. The booking guarantee is concrete: 10 booked consults in your first 30 days or a full refund. That is less than one new client's annual billings — the math is designed to be obvious.",
    },
  ],
  relatedServices: [],
  relatedLocations: ["san-jose", "sacramento", "los-angeles", "san-francisco-bay-area"],
};
