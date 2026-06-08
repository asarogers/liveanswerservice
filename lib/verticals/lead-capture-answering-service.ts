import type { VerticalConfig } from "./types";
import type { ServiceDetail } from "@/lib/services-data";

export const leadCaptureConfig: VerticalConfig = {
  slug: "lead-capture-answering-service",

  meta: {
    title: "Lead Capture Answering Service — Every Caller Qualified in 60 Seconds",
    description:
      "24/7 bilingual AI lead capture answering service for California SMBs. Every inbound caller qualified BANT-style, scored, and summarized to you in 60 seconds. Hot leads hot-transferred instantly. Flat $500/mo, no per-minute fees.",
    canonical: "/services/lead-capture-answering-service",
  },

  verticalBar: {
    icon: "target",
    label: "Built for California businesses that run on inbound leads",
  },

  oneLiner:
    "California SMBs miss 62% of inbound calls and lose 80% of those leads within 5 minutes of not responding. We answer every call 24/7, qualify the prospect in 60 seconds using BANT criteria, score them, and deliver a summary straight to your phone — so hot leads reach you in seconds and no paid ad dollar goes to waste.",

  hero: {
    eyebrow: "AI lead qualifier · 24/7 · Bilingual EN/ES",
    headline: "Every caller captured, qualified, and scored — never a {italicWord} wasted.",
    italicWord: "lead",
    subhead: {
      seoBold: "24/7 bilingual AI lead capture answering service for California SMBs.",
      body:
        "You're spending real money to make your phone ring. You shouldn't lose 80% of those leads because nobody picked up within 5 minutes. We answer every call, qualify the prospect, and deliver a scored summary to you — hot leads hot-transferred, cold leads still logged.",
    },
    sampleBusinessName: "Pacific Home Solutions",
    chat: [
      { speaker: "bot", text: "Thanks for calling Pacific Home Solutions — how can I help you today?" },
      { speaker: "user", text: "I saw your ad online. We need a full kitchen remodel, probably $40–60k budget." },
      { speaker: "bot", text: "Great — let me get a few quick details so we can schedule your free estimate." },
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
    sectionNum: "01 · The speed-to-lead problem",
    title: "The math behind every lead you let go cold.",
    stats: [
      // source: https://www.getaira.io/blog/missed-business-calls-statistics
      { num: "62%", label: "of inbound business calls go unanswered — most are paid leads walking to a competitor" },
      // source: https://callingly.com/blog/the-5-minute-rule-why-300-more-leads-convert-when-you-call-within-5-minutes/
      { num: "21×", label: "more likely to qualify a lead when you respond within 5 minutes vs. 30 minutes" },
      // source: https://www.kixie.com/sales-blog/speed-to-lead-response-time-statistics-that-drive-conversions/
      { num: "78%", label: "of customers buy from the first business that responds — not the cheapest or the best" },
    ],
    rankingNote:
      "Google sees roughly half of US phone calls through Android — whether you answered, how long you talked, and whether the caller immediately dialed a competitor. Businesses with a 100% answer rate and fast engagement signal healthy demand to the algorithm. Letting paid leads ring to voicemail doesn't just waste ad spend — it measurably suppresses the Maps rank those ads depend on.",
  },

  vocQuote: {
    quote: "We were spending $3,000 a month on Google Ads and then just letting half the calls go to voicemail. That math is brutal once you see it.",
    attribution: "— What we hear from California SMB owners every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The leads you're already burning.",
    cards: [
      {
        time: "2:23 PM Tuesday",
        body: "A high-budget prospect clicks your Google Ad and calls. You're in a meeting. Voicemail picks up. They call the next result in 4 minutes. Your $47 click went to a competitor.",
      },
      {
        time: "7:48 PM Friday",
        body: "A Spanish-speaking caller found you on Yelp, ready to book. No one answers after hours. They don't try again. You'll never know they called.",
      },
      {
        time: "Monday morning",
        body: "You have 11 missed calls from the weekend. Three are spam. Eight are real. You don't know which ones are worth calling back first — so the hottest lead waits until Wednesday.",
      },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You didn't build a lead-generation machine just to let it leak.",
    empathy:
      "You've invested in SEO, paid ads, listings, and referrals to make that phone ring. But capturing a lead is a race — the MIT Lead Response Management study found that odds of qualifying a prospect drop by 80% after five minutes. By the time you're free and calling back, 78% of buyers have already chosen someone else. Every unanswered call is an ad dollar incinerated.",
    authority: [
      { num: "24/7", label: "Every call answered — including evenings, weekends, and holidays" },
      { num: "60 sec", label: "Scored lead summary delivered to you before the call even ends" },
      { num: "EN/ES", label: "Bilingual from the first ring — native, not translated" },
      { num: "BANT", label: "Budget, Authority, Need, Timeline — qualified on every call" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI lead qualifier works",
    title: "Three steps to zero wasted leads.",
    steps: [
      {
        num: 1,
        heading: "Forward your phone",
        body: "60 seconds to set up. Works with any provider — Twilio, Google Voice, RingCentral, Verizon, AT&T. Your number stays yours.",
      },
      {
        num: 2,
        heading: "We qualify every caller",
        body: "Budget, authority, need, timeline — qualified in the first 60 seconds, 24/7, in English or Spanish. Each caller gets a quality score (hot / warm / cold) before we hang up.",
      },
      {
        num: 3,
        heading: "You get the lead, scored and ready",
        body: "Hot leads are hot-transferred to your cell or pushed to HubSpot, Salesforce, GoHighLevel, or Pipedrive in real time. You get an SMS summary with score, budget, and next step before you even answer.",
      },
    ],
  },

  integrations: {
    label: "Pushes qualified leads straight into your CRM",
    items: ["HubSpot", "Salesforce", "GoHighLevel", "Pipedrive", "Zapier", "Web-form / CRM webhooks"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "Your phone is ringing the same as always. But now every call is answered, every prospect is graded, and your inbox shows you a ranked list of hot leads by the time you wake up. Your ad spend converts at twice the rate. You call back in order of score, not guesswork.",
    items: [
      { icon: "bolt", text: "Hot leads reach you in seconds, not hours." },
      { icon: "chart-bar", text: "Your ad spend converts at 2× — same budget, more revenue." },
      { icon: "database", text: "Every lead logged, scored, and synced to your CRM automatically." },
      { icon: "mood-smile", text: "You stop dreading Monday's missed-call pile." },
    ],
    before: [
      { icon: "phone-off", text: "62% of paid leads go unanswered." },
      { icon: "clock-x", text: "You call back hours later — lead is cold." },
      { icon: "trending-down", text: "Ad spend bleeds to whoever picked up first." },
      { icon: "mood-sad", text: "You're paying for leads you never even talked to." },
    ],
  },

  // VERBATIM from hvac.ts
  voices: {
    sectionNum: "06 · Voices",
    title: "Human-standard AI voice agents.",
    sub: "Out of the box, ready to use.",
    cards: [
      { name: "Professional Sarah", label: "Warm & friendly", sampleLine: "Hi, this is Sarah at Pacific Home Solutions..." },
      { name: "Executive Marcus", label: "Authoritative", sampleLine: "Thank you for calling Pacific Home Solutions." },
      { name: "Casual Jamie", label: "Conversational", sampleLine: "Hey, Pacific Home — how can I help?" },
    ],
  },

  compare: {
    sectionNum: "07 · Compare",
    title: "What you'd pay otherwise.",
    rows: [
      {
        what: "Voicemail",
        cost: "$0/mo",
        result: "85% of callers never leave a message — paid leads evaporate",
      },
      {
        what: "SDR / inside sales rep (CA)",
        cost: "$4,000–$6,000/mo",
        result: "Business hours only · misses evenings, weekends, Spanish",
      },
      {
        what: "Human answering service",
        cost: "$300–$600/mo",
        result: "Takes messages, no BANT, no CRM push, per-minute overages",
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
    "For California businesses spending on ads and losing leads to unanswered calls",

  faqs: [
    {
      q: "How does the AI lead qualifier work?",
      a: "You forward your business line to a number we provide. Every call is answered within 2 rings, 24/7. Our AI qualifies the caller using BANT criteria — budget, authority, need, and timeline — assigns a hot/warm/cold score, and delivers an SMS summary to you within 60 seconds. Hot leads are hot-transferred to your cell or pushed to your CRM in real time.",
    },
    {
      q: "Which CRMs do you integrate with?",
      a: "We have native integrations with HubSpot, Salesforce, GoHighLevel, and Pipedrive. For any other system, we can push leads via Zapier or a webhook — which covers virtually every CRM and web form on the market. Most custom integrations ship within two weeks.",
    },
    {
      q: "Can I customize the qualifying questions?",
      a: "Yes — completely. During the 30-minute kickoff call we build the qualification script around your sales process: your minimum deal size, your service area, your typical timeline, the questions your best salespeople ask. The AI runs your script, not a generic one.",
    },
    {
      q: "What does 'hot-transfer' mean?",
      a: "When a caller meets your hot-lead criteria — say, budget above a threshold, ready to buy this month, or a named account — the AI can conference your cell into the live call before hanging up, so you join a warm conversation already in progress. You set the threshold; we execute it.",
    },
    {
      q: "Is there a contract or can I cancel anytime?",
      a: "Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the qualification flow, integrate your CRM, and go live — before your next ad click goes unanswered.",
    },
    {
      q: "Do you integrate with my existing phone system?",
      a: "Yes — Twilio, Google Voice, RingCentral, Verizon, AT&T, and most VoIP systems. Setup takes 60 seconds and works without changing your business number.",
    },
  ],

  finalCta: {
    headline: "Your ad spend should generate revenue, not voicemails.",
    sub: "Three minutes to know if this is for you.",
  },
};

export const leadCaptureDetail: ServiceDetail = {
  slug: "lead-capture-answering-service",
  title: "Lead Capture Answering Service — AI Lead Qualifier for California SMBs",
  metaDescription:
    "24/7 bilingual AI lead capture answering service for California SMBs. Every inbound caller qualified BANT-style, scored, and synced to HubSpot, Salesforce, or GoHighLevel in 60 seconds. Flat $500/mo, no per-minute fees.",
  h1: "Every Inbound Lead Captured, Qualified, and Scored — in 60 Seconds",
  intro:
    "California SMBs miss 62% of inbound calls — and 85% of callers who reach voicemail never call back. The research is unambiguous: odds of qualifying a lead drop by 80% after five minutes, and 78% of buyers go with the first business that responds. If you are running Google Ads, paying for SEO, or relying on referrals to fill your pipeline, every unanswered call is an ad dollar that just funded your competitor. Live Answer's lead capture answering service answers every call 24/7, qualifies the prospect using BANT criteria in the first 60 seconds — budget, authority, need, timeline — assigns a hot/warm/cold score, and pushes the result to your CRM (HubSpot, Salesforce, GoHighLevel, Pipedrive, or any Zapier-connected system) before the caller hangs up. Hot leads are hot-transferred to your cell in real time. Cold leads are still logged with a full transcript so no paid inquiry ever disappears into a voicemail box again.",
  sections: [
    {
      heading: "BANT Qualification on Every Call — Not Just Message-Taking",
      content:
        "Most answering services take a message and stop there. A message is not a lead — it is a phone number with no context, no urgency signal, and no indication of whether the caller has a budget or is just shopping. Live Answer qualifies every caller against the four criteria that actually predict close probability: Budget (what they expect to spend), Authority (are they the decision-maker), Need (what specifically they require and how urgent it is), and Timeline (when they want to move). The AI captures this in natural conversation, not a form — the caller answers questions because they want the appointment, not because they know they are being scored. By the time the call ends, you have a structured lead record with a quality score, a call transcript, and a CRM entry with the next step pre-populated. The average qualification conversation runs 90 seconds. That is faster than most receptionists can spell the caller's last name.",
    },
    {
      heading: "Speed-to-Lead Is the Only Metric That Matters After 5 Minutes",
      // source: MIT Lead Response Management Study — https://25649.fs1.hubspotusercontent-na2.net/hub/25649/file-13535879-pdf/docs/mit_study.pdf
      // source: https://callingly.com/blog/the-5-minute-rule-why-300-more-leads-convert-when-you-call-within-5-minutes/
      content:
        "The MIT Lead Response Management Study found that companies contacting a lead within five minutes are 21 times more likely to qualify that prospect than companies that wait 30 minutes — and the odds drop by 80% after just five minutes have passed. The average business takes 47 hours to respond, which means the first responder wins by default in almost every competitive market. Live Answer eliminates that gap entirely: the call is answered before the fifth ring, the prospect is qualified in 60–90 seconds, and if they meet your hot-lead threshold, your phone rings before they have time to Google the next result. For businesses running paid acquisition, this single improvement — zero response lag — routinely doubles the effective conversion rate of an existing ad budget without spending an extra dollar.",
    },
    {
      heading: "CRM-Native: Leads Go Straight Into Your Pipeline",
      content:
        "We integrate natively with HubSpot, Salesforce, GoHighLevel, and Pipedrive. Every qualified call creates a new contact, populates the lead source, BANT fields, call score, and transcript, and triggers whatever automation you have set up — a follow-up sequence, an SDR notification, a Slack ping, a task in your project management tool. For businesses not yet on one of those platforms, we push via Zapier (5,000+ app connections) or a raw webhook that your developer can point at any endpoint. The integration is bidirectional where the platform supports it: existing contacts are recognized by phone number so returning callers get a named greeting and their history is pulled before the AI asks a single question. No lead ever lives only in a voicemail box — every call, qualified or not, is searchable in your CRM by the time you finish your next meeting.",
    },
    {
      heading: "What Setup Actually Looks Like",
      content:
        "Live Answer is a done-for-you managed service — not a tool you configure yourself. The 30-minute kickoff call covers your qualification criteria (minimum budget, service area, deal types in scope, hot-transfer threshold), your CRM and which fields you want populated, your bilingual needs, and your after-hours escalation rules. We build and test the agent in 48 hours, run a live QA call with you, and go live on day three. The 7-day free trial has no credit card requirement. Our booking guarantee is concrete: 10 booked appointments or qualified conversations logged to your CRM in the first 30 days, or you get a full refund. At $500/mo flat with no per-minute fees or overage charges, a single recovered high-intent lead typically covers several months of service. The rate you sign up at is locked — it does not change as your call volume grows.",
    },
  ],
  relatedServices: [],
  relatedLocations: ["san-jose", "los-angeles", "sacramento", "san-francisco-bay-area"],
};
