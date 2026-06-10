import type { VerticalConfig } from "./types";
import type { ServiceDetail } from "@/lib/services-data";

/**
 * CRM Integration vertical — SMBs (HVAC, legal, home services, agencies,
 * consultants) drowning in manual call logging and double data entry.
 *
 * Core angle: every call we answer becomes a clean, structured CRM record
 * automatically — contact, notes, tags, deal stage, next action — the moment
 * the call ends. Zero manual entry, zero lost call data, two-way sync.
 */
export const crmIntegrationConfig: VerticalConfig = {
  slug: "crm-integration-answering-service",

  meta: {
    title: "Answering Service with CRM Integration — Every Call Auto-Logged",
    description:
      "AI answering service with direct CRM integration for California SMBs. Every call answered 24/7, every caller auto-logged as a contact, deal, or ticket — no manual entry. Works with HubSpot, Salesforce, GoHighLevel, Pipedrive, Zoho, Jobber, Clio, and more. Flat $500/mo, bilingual EN/ES.",
    canonical: "/services/crm-integration-answering-service",
  },

  verticalBar: {
    icon: "database",
    label: "Built for California businesses that run on a CRM",
  },

  oneLiner:
    "Every call your business receives should land in your CRM as a clean record — contact details, call notes, tags, and a next action — the moment it ends. We answer every call 24/7 in English and Spanish and log it directly into your CRM automatically, so your team opens Monday with a full, accurate pipeline instead of a pile of sticky notes.",

  hero: {
    eyebrow: "AI receptionist · 24/7 · Auto-logs every call to your CRM",
    headline: "Every call answered. Every caller {italicWord} in your CRM.",
    italicWord: "logged",
    subhead: {
      seoBold: "Answering service with CRM integration built for California SMBs.",
      body:
        "Sales reps spend an average of 3.4 hours a week on manual CRM data entry — and 32% lose more than an hour a day to it. We answer every call and push the structured record straight to HubSpot, Salesforce, GoHighLevel, Pipedrive, Zoho, Jobber, Clio, or Zapier the moment the call ends.", // source: https://saleslion.io/sales-statistics/32-of-sales-reps-spend-an-hour-or-more-on-data-entry-every-day/ | https://www.askelephant.ai/blog/why-reps-spend-25-percent-of-time-on-crm
    },
    sampleBusinessName: "Meridian Consulting Group",
    chat: [
      { speaker: "bot", text: "Meridian Consulting — how can I help you today?" },
      { speaker: "user", text: "Hi, I'm calling about your managed services package — we have about 20 employees." },
      {
        speaker: "bot",
        text: "Perfect. Let me grab your details so we can get you booked — your info will go straight to our team.",
      },
    ],
  },

  // ─── VERBATIM from hvac.ts ────────────────────────────────────────────────
  trustStrip: [
    { icon: "map-pin", label: "Made in California" },
    { icon: "shield-check", label: "CCPA-compliant recording" },
    { icon: "language", label: "Bilingual EN/ES" },
    { icon: "lock", label: "HIPAA-aware mode available" },
  ],

  stakes: {
    sectionNum: "01 · The data-entry problem",
    title: "The math behind every call that never makes it into your CRM.",
    stats: [
      {
        num: "32%",
        label: "of sales reps lose more than an hour a day to manual CRM data entry", // source: https://saleslion.io/sales-statistics/32-of-sales-reps-spend-an-hour-or-more-on-data-entry-every-day/
      },
      {
        num: "91%",
        label: "of CRM records are incomplete, stale, or duplicated — per Salesforce's own research", // source: https://www.validity.com/resource-center/the-state-of-crm-data-management-in-2025/
      },
      {
        num: "27%",
        label: "of revenue lost annually when calls go unlogged and CRM data stays dirty", // source: https://www.coffee.ai/articles/hidden-costs-bad-crm-data/ | https://databar.ai/blog/article/bad-crm-data-why-it-kills-revenue-forecasts-and-how-to-fix-it
      },
    ],
    rankingNote:
      "Google sees roughly half of US phone calls through Android — whether you answered, how long you talked, and whether the caller dialed the next business immediately after. Businesses with a 100% answer rate hold their local Maps position; ones that let calls bounce measurably drop in rank. Answering every call protects the pipeline position your inbound leads come from.",
  },

  vocQuote: {
    quote:
      "We had no idea how many calls were just disappearing. Nobody was logging them. We'd find out a lead called three weeks later when they went with someone else.",
    attribution: "— What we hear from California SMB owners every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to your team last week",
    title: "The calls your CRM never saw.",
    cards: [
      {
        time: "Friday at 4:45 PM",
        body: "A warm inbound lead calls about a $4,000 contract. No one picks up. They leave a voicemail. It never gets logged. By Monday they've signed with someone else.",
      },
      {
        time: "After the sales call",
        body: "Your rep spends 40 minutes writing up notes, entering contact details, updating the deal stage. Then they forget to set the follow-up task. The lead goes cold.",
      },
      {
        time: "End of the quarter",
        body: "You pull the pipeline report. Half the fields are blank. Deals are in the wrong stage. Three contacts have duplicate records. You can't trust the forecast.",
      },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You didn't build a business to fight with your CRM.",
    empathy:
      "You bought a CRM to see your pipeline clearly and close more. Instead it became a second job — manual entry, outdated records, missing call notes, duplicate contacts. The problem isn't the CRM. It's that the data going in is hand-keyed, incomplete, and already 24 hours old by the time anyone adds it. We answer every call and push a clean, structured record into your CRM the moment the call ends — so the data is always current, always complete, and nobody on your team has to type it.",
    authority: [
      { num: "24/7", label: "Every inbound call answered and logged — including nights and weekends" },
      { num: "EN/ES", label: "Bilingual from the first ring — no leads lost to a language gap" },
      { num: "< 60 sec", label: "Structured CRM record created before the next call comes in" },
      { num: "8+", label: "Native integrations: HubSpot, Salesforce, GoHighLevel, Pipedrive, Zoho, Jobber, Clio, Zapier" },
    ],
  },

  plan: {
    sectionNum: "04 · How it works",
    title: "Three steps to a CRM that logs itself.",
    steps: [
      {
        num: 1,
        heading: "Forward your phone",
        body: "60 seconds. Works with any provider — Twilio, Google Voice, RingCentral, Verizon, AT&T. Your number stays yours.",
      },
      {
        num: 2,
        heading: "We answer and capture",
        body: "Every call answered in English or Spanish, 24/7. The AI captures name, number, company, intent, urgency, and any custom fields your CRM expects — using the intake script we build for your business.",
      },
      {
        num: 3,
        heading: "Your CRM updates itself",
        body: "The structured record — contact, notes, tags, deal stage, next action — pushes to your CRM the moment the call ends. No manual entry. You get an SMS summary. Your pipeline is always current.",
      },
    ],
  },

  integrations: {
    label: "Auto-logs into your CRM",
    items: ["HubSpot", "Salesforce", "GoHighLevel", "Pipedrive", "Zoho CRM", "Jobber", "Clio", "Zapier"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "Your team comes in Monday morning. Every inbound call from the weekend is already in the CRM — contact details filled in, notes attached, follow-up tasks set. Nobody spent Sunday doing data entry. Nobody lost a lead because it never got logged. Your pipeline report actually reflects reality.",
    items: [
      { icon: "database-check", text: "Your CRM is clean and current — automatically." },
      { icon: "clock-off", text: "Your team stops losing hours to manual entry." },
      { icon: "trending-up", text: "Pipeline visibility improves. Forecast accuracy goes up." },
      { icon: "mood-smile", text: "Every lead gets a follow-up — because every lead got logged." },
    ],
    before: [
      { icon: "pencil", text: "Your reps type up call notes after every conversation." },
      { icon: "alert-triangle", text: "Half your CRM contacts are missing a phone number or last touchpoint." },
      { icon: "trending-down", text: "Leads fall through cracks you can't see because the data isn't there." },
      { icon: "mood-sad", text: "You can't trust the pipeline report you just pulled." },
    ],
  },

  // ─── VERBATIM from hvac.ts ────────────────────────────────────────────────
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
        what: "Voicemail + manual entry",
        cost: "$0/mo",
        result: "Calls missed, data never logged, CRM stays dirty",
      },
      {
        what: "Part-time admin or VA",
        cost: "~$1,600/mo",
        result: "20 hrs/week, still misses after-hours calls, still manual",
      },
      {
        what: "Human answering service (no CRM sync)",
        cost: "$300–$600/mo",
        result: "Message taken, emailed to you, you still enter it yourself",
      },
    ],
  },

  unlimited: {
    headline: "Most answering services hand you a transcript. We hand your CRM a record.",
    competitors: [
      { name: "Ruby Receptionists $235/mo", cap: "100 minutes, no CRM push" },
      { name: "AnswerConnect $350/mo", cap: "$1.85/min overage, manual CRM sync" },
      { name: "Simple Phones $49/mo", cap: "100 calls cap, no native CRM integration" },
    ],
  },

  pricingAudience:
    "For California businesses tired of paying people to type call notes into a CRM that's already out of date",

  faqs: [
    {
      q: "Which CRMs do you integrate with directly?",
      a: "HubSpot, Salesforce, GoHighLevel, Pipedrive, Zoho CRM, Jobber, Clio, and Zapier (which covers 6,000+ other tools). We push the structured record — contact, notes, tags, deal stage, next action — the moment the call ends. If you use a CRM not on the list, ask us; we ship most custom integrations in under two weeks.",
    },
    {
      q: "What exactly gets logged in the CRM after a call?",
      a: "By default: caller name, phone number, company (if given), call date/time, a plain-English summary of what they needed, urgency level, and a suggested next action. We also support custom fields — if your pipeline tracks lead source, service type, budget range, or anything else you normally enter by hand, we capture it during the call and map it to the right field.",
    },
    {
      q: "What if a contact already exists in my CRM?",
      a: "We match on phone number first, then email. If the contact exists, we append the new call note to the existing record rather than creating a duplicate. If there's no match, we create a new contact and log the call under it.",
    },
    {
      q: "Does this replace my CRM or just write to it?",
      a: "We write to your existing CRM — we never replace it. You keep your pipeline, your stages, your reports. We just stop asking your team to type everything in by hand after every call.",
    },
    {
      q: "Is there a contract or can I cancel anytime?",
      a: "Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We connect to your CRM, map your fields, script the intake, and go live before you lose another inbound lead to an empty record.",
    },
    {
      q: "What's the booking guarantee?",
      a: "We guarantee 10 booked jobs or qualified consults logged into your CRM in the first 30 days — or a full refund. No fine print.",
    },
  ],

  finalCta: {
    headline: "Your CRM should fill itself. Your team should close, not type.",
    sub: "Three minutes to know if this is for you.",
  },
};

export const crmIntegrationDetail: ServiceDetail = {
  slug: "crm-integration-answering-service",
  name: "CRM Integration",
  title: "Answering Service with CRM Integration — Every Call Auto-Logged",
  metaDescription:
    "AI answering service with direct CRM integration for California SMBs. Every inbound call is answered 24/7, every caller is auto-logged as a structured record — contact, notes, deal stage, next action. Works with HubSpot, Salesforce, GoHighLevel, Pipedrive, Zoho CRM, Jobber, Clio, and Zapier. Flat $500/mo, bilingual EN/ES, no overages.",
  h1: "Every Call Answered. Every Caller Logged. Zero Manual Entry.",
  intro:
    "Sales reps spend an average of 3.4 hours a week entering customer information into CRM by hand — and 32% lose more than an hour every single day to it. Meanwhile, 91% of CRM data is incomplete, stale, or duplicated, and companies lose up to 27% of potential revenue from dirty pipeline data. The problem isn't the CRM: it's that every record in it started as a phone call that someone had to remember, summarize, and type up later. We solve both sides at once. Live Answer is a done-for-you managed AI answering service that picks up every inbound call within two rings — 24/7, in English and Spanish — and pushes a clean, structured record straight into your CRM the moment the call ends. No message slips. No transcripts to copy-paste. No data entry backlog on Monday morning.",
  sections: [
    {
      heading: "What Gets Logged — and How",
      content:
        "When a call comes in, our AI answers using an intake script we build specifically for your business. It captures: caller name, phone number, company name (if applicable), reason for calling, urgency, service or product interest, any qualifying information your pipeline needs (budget range, project timeline, location, matter type — whatever you currently ask by hand), and a plain-English summary of the conversation. The moment the call ends, that structured data pushes to your CRM via our native integration. We match on phone number first to find an existing contact; if one exists, we append a new call note. If not, we create a new contact and log the call under it. Deal stage updates, tags, and follow-up tasks are set according to rules we configure together during onboarding. The record is in your CRM before your team pours their first cup of coffee.",
    },
    {
      heading: "Why Two-Way Sync Matters More Than a One-Way Push",
      content:
        "Most AI answering services stop at the transcript. They email it to you and consider the job done — leaving your team to decide where it goes, which field it maps to, and whether it already exists as a contact. Two-way sync means we also pull context out of your CRM before and during the call. If the caller is already a known contact, the AI knows their history and can reference the deal stage or last interaction. If a call results in a booked appointment, the CRM record is updated immediately — not when someone gets around to it. This closes the loop that manual entry never can: the data is always current, the pipeline always reflects reality, and your next email campaign, forecast pull, or sales call starts from accurate information.",
    },
    {
      heading: "The Eight Integrations — and What Each One Gets",
      content:
        "HubSpot: contact created or updated, deal created or stage-advanced, note logged under the timeline, task set for follow-up. Salesforce: lead or contact record updated, activity logged, opportunity stage updated. GoHighLevel: contact tagged, pipeline opportunity created, appointment booked into the calendar sub-account. Pipedrive: person and deal created, activity logged, next action set. Zoho CRM: lead or contact updated, call log created, next step added. Jobber: client record created, job request added, quote request tagged. Clio: matter and contact logged, intake notes attached, consultation booked into the calendar. Zapier: for any CRM not on this list — we trigger a Zap the moment the call ends, passing the structured payload to whatever workflow you've built. Setup for any of these takes less than 10 minutes on our end during onboarding.",
    },
    {
      heading: "Done-For-You Means We Build It — You Don't Configure Anything",
      content:
        "This is not a self-serve AI tool. We are a managed service. During the 30-minute kickoff call, we ask: which CRM and which pipeline stages map to which call outcomes, what fields you currently fill in by hand and what they're called in your CRM, what intake questions matter for your business, who should get SMS alerts and when, and what your escalation rule is for high-value or urgent calls. We build the agent, connect the integration, map the fields, test against your live CRM sandbox, and go live within 48 hours. If anything needs adjusting after launch — a new field, a changed intake question, an added tag rule — we make the change same-day. The 7-day free trial requires no credit card, and our guarantee is concrete: 10 booked or qualified records logged into your CRM in the first 30 days, or a full refund.",
    },
  ],
  relatedServices: [],
  relatedLocations: ["san-jose", "los-angeles", "san-francisco-bay-area", "sacramento"],
};
