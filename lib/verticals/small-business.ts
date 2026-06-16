import type { VerticalConfig } from "./types";

/**
 * Small business — the umbrella vertical for solo operators, consultants,
 * boutique services that don't fit our top verticals (HVAC, legal, dental,
 * medical, restaurant, real estate, property management, salon).
 */
export const smallBusinessConfig: VerticalConfig = {
  slug: "small-business-answering-service",

  meta: {
    title: "Live Answer for Small Business — Every customer reaches you",
    description:
      "24/7 bilingual AI receptionist for California solo operators and small business. $500/mo flat, unlimited calls, books into the tools you already use. Built for owner-operators who can't be on the phone.",
    canonical: "/services/small-business-answering-service",
  },

  verticalBar: {
    icon: "building-store",
    label: "Built for California small business",
  },

  oneLiner:
    "Small businesses lose customers every time the owner can't pick up. We answer every call 24/7 in English and Spanish and book it into your calendar — so you stop losing business and get to run the company instead of the phone.",

  hero: {
    eyebrow: "AI receptionist · 24/7 · Bilingual EN/ES",
    headline: "Every customer reaches you. Even when you {italicWord}.",
    italicWord: "can't pick up",
    subhead: {
      seoBold: "24/7 bilingual AI receptionist for California small businesses and solo operators.",
      body:
        "You shouldn't lose business because you were on a job, with a client, or asleep. We answer every call, qualify the lead, and book it into your calendar — so you can run the business instead of the phone.",
    },
    sampleBusinessName: "Garcia Consulting",
    chat: [
      { speaker: "bot", text: "Garcia Consulting — how can I help you today?" },
      { speaker: "user", text: "I'd like to set up a call to discuss your services." },
      { speaker: "bot", text: "Absolutely — what day works best for you?" },
    ],
  },

  trustStrip: [
    { icon: "map-pin", label: "Made in California" },
    { icon: "shield-check", label: "CCPA-compliant recording" },
    { icon: "language", label: "Bilingual EN/ES" },
    { icon: "phone", label: "Spam &amp; robocall filter" },
  ],

  stakes: {
    sectionNum: "01 · The owner-operator problem",
    title: "The math behind every missed call.",
    stats: [
      { num: "62%", label: "of business calls go unanswered when the owner is doing the work" },
      { num: "$126K", label: "average yearly cost of missed calls per small business (Aira)" },
      { num: "60 sec", label: "before they call your competitor instead" },
    ],
    rankingNote:
      "Google sees roughly half of US phone calls through Android — whether you answered, how long the call lasted, and whether the caller dialed a competitor next. Your answer rate is a ranking signal: businesses that stop answering measurably drop on the map. Answering every call protects the ranking that brings the next one.",
  },

  vocQuote: {
    quote: "My business only worked when I did and I was so overwhelmed.",
    attribution: "— What we hear from California small-business owners every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The calls you're already losing.",
    cards: [
      { time: "Mid-meeting", body: "Your phone rings during a client call. You can't pick up. The new lead leaves a voicemail you find at 8 PM. Too late." },
      { time: "After hours", body: "A prospect calls at 7 PM after seeing your website. Your line goes to voicemail. They contact the next business on Google." },
      { time: "Spanish-language", body: "A bilingual prospect calls. Your English-only voicemail loses them in 5 seconds." },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You didn't start a business to be the receptionist.",
    empathy:
      "You started it to do the actual work — the craft, the consulting, the service that you're great at. But the phone never stops. Every call you can't pick up is revenue walking to a competitor. You shouldn't have to choose between doing the work and answering the phone.",
    authority: [
      { num: "24/7", label: "Every call, every hour — including weekends and after-hours" },
      { num: "EN/ES", label: "Bilingual from the first ring" },
      { num: "60 sec", label: "From call ending to SMS in your pocket" },
      { num: "35+", label: "Native sync with the calendars and CRMs you already use" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI receptionist works",
    title: "Three steps to never miss another customer.",
    steps: [
      { num: 1, heading: "Forward your phone", body: "60 seconds. Works with any provider — Twilio, Google Voice, RingCentral, Verizon, AT&T." },
      { num: 2, heading: "We qualify the call", body: "New lead? Existing customer? Routine question? Urgent? Triaged and routed — 24/7, in English or Spanish." },
      { num: 3, heading: "You get the booking", body: "Booked into Google Calendar, Calendly, HubSpot, or whatever you use — plus SMS in 60 seconds." },
    ],
  },

  integrations: {
    label: "Syncs with the tools you already use",
    items: ["Google Calendar", "Calendly", "HubSpot", "Salesforce", "Zapier"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "You finish your last appointment at 5 PM. You go home. Your phone keeps ringing — every call gets answered. By Monday, your calendar is full of qualified leads. You didn't take a single one of those calls yourself. You went back to doing what you actually love.",
    items: [
      { icon: "moon", text: "Your phone stops running your life." },
      { icon: "calendar-check", text: "Your calendar fills itself." },
      { icon: "trending-up", text: "Revenue climbs without working more hours." },
      { icon: "mood-smile", text: "You remember why you started." },
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
      { what: "Voicemail", cost: "$0/mo", result: "Lose 6 of 10 calls · ~$126K/yr (Aira data)" },
      { what: "Part-time CA receptionist", cost: "~$1,600/mo", result: "20 hrs/week · English only" },
      { what: "Full-time CA receptionist", cost: "$3,200–$4,000/mo", result: "9–5 only · $48K/yr loaded" },
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

  pricingAudience: "For California small-business owners who can't be on the phone all day",

  faqs: [
    {
      q: "How does the AI receptionist work?",
      a: "You forward your business line to a number we provide. Every call is answered within 2 rings, 24/7. Our AI qualifies the caller, books the appointment into your calendar or CRM, and texts you a summary within 60 seconds. Urgent calls escalate to your cell within 30 seconds.",
    },
    {
      q: "Will it work for my business type?",
      a: "Yes — we work with consultants, accountants, insurance agents, contractors, photographers, fitness studios, pet services, and most owner-operator businesses. The AI is scripted per business during onboarding so it sounds like a real receptionist who knows what you do.",
    },
    {
      q: "How does it integrate with my tools?",
      a: "Native integration with Google Calendar, Calendly, HubSpot, Salesforce, and 30+ more. Anything not natively integrated, we can connect via Zapier or webhook. Setup is handled by our team during onboarding.",
    },
    {
      q: "Can it handle Spanish-speaking customers?",
      a: "Yes — native EN/ES on every account, no upcharge. The AI detects the caller's language in the first 3 seconds and switches automatically.",
    },
    {
      q: "Is this like having a dedicated full-time virtual receptionist?",
      a: "Yes — it's a dedicated virtual receptionist that works full-time and then some: 24/7, including nights, weekends, and holidays, with no breaks, sick days, or turnover. Unlike a shared answering pool, your AI is scripted specifically for your business, recognizes returning callers, and follows your booking and escalation rules every time — at a flat $500/mo instead of the $4,000–$6,000/mo a full-time California receptionist costs in salary, taxes, and benefits.",
    },
    {
      q: "Is there a contract?",
      a: "No. Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI for your business's tone, integrate your tools, and go live before you lose another after-hours call.",
    },
  ],

  finalCta: {
    headline: "Your business should run on you doing the work, not the phone.",
    sub: "Three minutes to know if this is for you.",
  },
};
