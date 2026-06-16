import type { VerticalConfig } from "./types";
import type { ServiceDetail } from "@/lib/services-data";

export const medSpaConfig: VerticalConfig = {
  slug: "med-spa-answering-service",

  meta: {
    title: "Med Spa Answering Service — Never Miss Another Consult",
    description:
      "24/7 bilingual AI receptionist for California med spas. Books Botox, laser, and filler consults with deposit collection, handles treatment FAQs, and covers every call while your injectors are with clients. Flat $500/mo, no per-minute fees.",
    canonical: "/services/med-spa-answering-service",
  },

  verticalBar: {
    icon: "sparkles",
    label: "Built for California med spas & aesthetic practices",
  },

  oneLiner:
    "California med spas lose high-value consult bookings every day while injectors are in treatment rooms and can't answer the phone. We answer every call 24/7 in English and Spanish, collect a deposit to hold the slot, handle pricing and prep questions, and book directly into your scheduling software — so you stop losing $500 appointments to voicemail.",

  hero: {
    eyebrow: "AI receptionist · 24/7 · Bilingual EN/ES",
    headline: "Never lose another {italicWord} to a missed call.",
    italicWord: "consult",
    subhead: {
      seoBold: "24/7 bilingual AI answering service for California med spas and aesthetic practices.",
      body:
        "Your injectors are in treatment rooms. Your front desk is with a client. A caller wants to book a Botox consult right now — and if you don't answer, the med spa two miles away will. We pick up, answer the pricing and prep questions, collect the deposit, and confirm the appointment.",
    },
    sampleBusinessName: "Luminary Aesthetics",
    chat: [
      { speaker: "bot", text: "Thank you for calling Luminary Aesthetics! How can I help you today?" },
      { speaker: "user", text: "Hi, I want to book a Botox consult. How much does it usually run?" },
      { speaker: "bot", text: "Great choice! Botox starts at $12–$14 per unit. I can book you in and collect a small deposit to hold the slot — what day works best?" },
    ],
  },

  // VERBATIM from hvac.ts per brief
  trustStrip: [
    { icon: "map-pin", label: "Made in California" },
    { icon: "shield-check", label: "CCPA-compliant recording" },
    { icon: "language", label: "Bilingual EN/ES" },
    { icon: "lock", label: "HIPAA-aware mode available" },
  ],

  stakes: {
    sectionNum: "01 · The missed-consult problem",
    title: "The math behind every missed call.",
    stats: [
      // source: https://www.joinblvd.com/blog/average-medical-spa-revenue (AmSpa: avg patient spends $504/visit)
      { num: "$504", label: "average patient spend per med spa visit — lost every time a call hits voicemail" },
      // source: https://www.prospyrmed.com/blog/post/solving-no-show-problems-in-aesthetic-practices (no-show rate 10–30%, avg ~20%)
      { num: "~20%", label: "of booked appointments no-show — deposit-on-booking cuts this in half" },
      // source: https://www.zenoti.com/thecheckin/salon-spa-booking-communication-trends (32% of spa bookings are after-hours)
      { num: "32%", label: "of med spa bookings happen after-hours, when your front desk is gone" },
    ],
    rankingNote:
      "Google sees roughly half of US phone calls through Android — whether you answered, how long you spoke, and whether the caller immediately dialed a competing practice. Med spas that let calls ring out measurably slide in local Maps rank. A 100% answer rate protects the visibility your new-client calls depend on.",
  },

  vocQuote: {
    quote: "By the time I came out of the treatment room and called back, she had already booked somewhere else.",
    attribution: "— What we hear from California aesthetic practice owners every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The consults you're already losing.",
    cards: [
      {
        time: "2:30 PM Tuesday",
        body: "You and your injector are both with clients. The phone rings four times and goes to voicemail. Caller wanted a lip filler consult. She booked at the med spa down the street before you called back.",
      },
      {
        time: "7:45 PM Thursday",
        body: "Someone saw your Instagram ad for a laser package and called right after dinner. You were done for the day. They found a competitor with 24/7 booking and confirmed before you opened the next morning.",
      },
      {
        time: "Friday no-show",
        body: "A $600 laser slot sits empty. No deposit was collected at booking. No one answered when they called to cancel. That slot never filled — and you'll never know if they would have rescheduled.",
      },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You didn't open a med spa to manage phone interruptions between treatments.",
    empathy:
      "You opened it to do exceptional aesthetic work — Botox that looks natural, laser results that make clients cry happy tears, facials that keep people coming back. But the phone doesn't care that you're mid-injection. It rings every 20 minutes. Every missed call is a potential $500+ consult that walked to your nearest competitor. And because your front desk handles check-ins, post-care instructions, and retail at the same time, every call that slips through is just part of the day.",
    authority: [
      { num: "24/7", label: "Every call answered — including Saturday night and after the last appointment" },
      { num: "EN/ES", label: "Bilingual from the first ring — no bilingual upcharge" },
      { num: "Deposit", label: "Collects a hold deposit at booking to eliminate no-shows" },
      { num: "5+", label: "Native sync with Boulevard, Vagaro, Mindbody, Aesthetic Record, Calendly" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI receptionist works",
    title: "Three steps to a fully booked treatment calendar.",
    steps: [
      {
        num: 1,
        heading: "Forward your phone",
        body: "60 seconds. Works with any provider — Twilio, Google Voice, RingCentral, Verizon, AT&T. Your number stays yours.",
      },
      {
        num: 2,
        heading: "We handle the consult booking",
        body: "Pricing FAQs, treatment prep, contraindications screen, deposit collection, and appointment confirmation — 24/7, in English or Spanish. The AI is scripted to your services and your policies.",
      },
      {
        num: 3,
        heading: "You see a full schedule",
        body: "Booked into Boulevard, Vagaro, Mindbody, Aesthetic Record, or Calendly — plus SMS to you within 60 seconds. High-value or complex inquiries (medical history flags, VIP clients) routed to your cell immediately.",
      },
    ],
  },

  integrations: {
    label: "Syncs with your med spa software",
    items: ["Boulevard", "Vagaro", "Mindbody", "Aesthetic Record", "Calendly"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "You finish your last injection at 6 PM. You clean up, debrief with your esthetician, and leave. Your phone kept ringing the whole time — every call got answered, every consult got booked, every deposit got collected. By the time you arrive Monday morning, the week is already 80% full. You didn't book a single one yourself.",
    items: [
      { icon: "calendar-check", text: "Your treatment calendar fills itself." },
      { icon: "coin", text: "No-shows drop because every booking holds a deposit." },
      { icon: "trending-up", text: "Revenue climbs without adding front-desk headcount." },
      { icon: "mood-smile", text: "You focus on treatments, not the phone." },
    ],
    before: [
      { icon: "phone-ringing", text: "Phone rings mid-injection. No one picks up." },
      { icon: "calendar-off", text: "Empty slots from no-shows with no deposits." },
      { icon: "trending-down", text: "After-hours callers book with a competitor." },
      { icon: "mood-sad", text: "You're doing admin at 9 PM." },
    ],
  },

  // VERBATIM from hvac.ts per brief
  voices: {
    sectionNum: "06 · Voices",
    title: "Human-standard AI voice agents.",
    sub: "Out of the box, ready to use.",
  },

  compare: {
    sectionNum: "07 · Compare",
    title: "What you'd pay otherwise.",
    rows: [
      { what: "Voicemail", cost: "$0/mo", result: "Lose every after-hours consult; no deposits collected" },
      { what: "Part-time CA front desk", cost: "~$2,000/mo", result: "30 hrs/week, no evenings, no Spanish" },
      { what: "Full-time CA receptionist", cost: "$3,200–$4,000/mo", result: "9–5 only · $48K/yr loaded cost" },
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
    "For California med spas losing $500 consults to voicemail while injectors are in treatment rooms",

  faqs: [
    {
      q: "How does the AI receptionist handle treatment pricing questions?",
      a: "We script the AI to your exact menu during onboarding — units of Botox, filler volume pricing, laser package tiers, facial add-ons. It quotes the ranges you approve, answers the standard prep questions (bruising, downtime, contraindications), and flags anything outside its scope for a callback from you.",
    },
    {
      q: "Can it collect a deposit to hold the appointment?",
      a: "Yes. Deposit collection is one of the core reasons med spas use us — no-show rates drop significantly when clients have skin in the game. We collect a hold amount you define (typically $50–$150) via a secure payment link texted to the caller immediately after booking. Deposits sync to your booking software.",
    },
    {
      q: "Does the AI screen for medical contraindications?",
      a: "It runs the intake questions you specify — pregnancy, blood thinners, active skin conditions, recent procedures — and flags anything that needs clinical review before the appointment is confirmed. It never makes clinical decisions; it screens and escalates.",
    },
    {
      q: "What if a caller asks something medical the AI can't answer?",
      a: "The AI takes the caller's name and callback number, texts you the question immediately, and offers to book a brief phone consult with the provider. It's scripted not to guess on clinical matters.",
    },
    {
      q: "Is there a contract or can I cancel anytime?",
      a: "Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI to your service menu, pricing ranges, deposit policy, and booking rules — and go live before you lose another week of after-hours consults.",
    },
    {
      q: "Is this HIPAA-compliant?",
      a: "We offer a HIPAA-aware mode: two-party consent prompt at the start of every recorded call, encrypted storage, and BAA available on request. We can also run transcript-only (no audio recording) if your compliance team prefers it.",
    },
    {
      q: "What's the booking guarantee?",
      a: "10 booked appointments in your first 30 days or a full refund. At an average $504 per visit, that's over $5,000 in captured revenue against a $500 service fee.",
    },
  ],

  finalCta: {
    headline: "Your treatment rooms should run on bookings, not voicemails.",
    sub: "Three minutes to know if this is for you.",
  },
};

export const medSpaDetail: ServiceDetail = {
  slug: "med-spa-answering-service",
  name: "Med Spa Answering Service",
  title: "Med Spa Answering Service — 24/7 AI Receptionist for Aesthetic Practices",
  metaDescription:
    "AI receptionist for California med spas. Books Botox, laser, and filler consults 24/7, collects deposits, handles treatment FAQs. Bilingual EN/ES. Flat $500/mo, no overages. 10-booking guarantee.",
  h1: "Med Spa Answering Service: Never Miss Another Consult",
  intro:
    "A caller who wants a Botox consult will dial two or three med spas in ten minutes. The first one to answer — with a knowledgeable, friendly voice that can quote pricing, answer prep questions, and lock the slot with a deposit — gets the appointment. The rest get voicemail. California med spa owners face the same structural problem: their highest-value hours (evenings, weekends, the 20-minute window between back-to-back treatments) are exactly when no one is available to answer. The average med spa patient spends $504 per visit (AmSpa 2024), and with a no-show rate of 15–20% on un-deposited bookings, the compounding revenue loss is significant. Live Answer was built for this: a done-for-you AI receptionist that answers every call within two rings, runs your treatment FAQ, collects the deposit, and books directly into Boulevard, Vagaro, Mindbody, Aesthetic Record, or Calendly — 24/7, in English and Spanish, for a flat $500/month.",
  sections: [
    {
      heading: "What the AI Receptionist Actually Does on a Med Spa Call",
      content:
        "The AI answers within two rings, identifies itself as the front desk for your practice, and immediately moves into the standard intake a well-trained human receptionist would run: which treatment are you interested in, have you had it before, do you have any contraindications we should know about. For Botox and filler calls, it quotes the unit or volume pricing ranges you approve during onboarding, answers the standard prep questions (avoid blood thinners 48 hours before, expect mild swelling, downtime is typically none for Botox and 24–48 hours for filler), and handles the 'how many units do I need for my forehead' questions with the same 'that depends on your anatomy; the provider will assess at the consult' framing a good front desk uses. When the caller is ready to book, the AI proposes available slots from your live calendar, collects a deposit via a secure payment link texted to the caller, and sends you an SMS summary within 60 seconds. Any call that involves a medical history flag, a complex situation, or a high-value VIP client gets hot-transferred to your cell immediately.",
    },
    {
      heading: "Deposit Collection: The Single Biggest Revenue Lever",
      content:
        "Med spa no-show rates average 10–20%, and for high-value laser and filler appointments — where a single slot represents $400–$1,200 of provider time — a no-show without a deposit means that slot is simply gone. The AI collects a hold deposit (amount you define, typically $50–$150) via Stripe at the time of booking, sends the confirmation to the client, and syncs the deposit status to your scheduling software. Practices that require deposits see no-show rates drop to 5–8%. On a calendar of 15–20 appointments per day, the difference between a 20% and a 5% no-show rate is $60,000–$100,000 in annual recovered revenue — against a $6,000/year service fee. The math is the pitch.",
    },
    {
      heading: "Integrations Built for the Med Spa Stack",
      content:
        "We sync natively with the five platforms that dominate California aesthetic practices: Boulevard (the market leader for multi-provider med spas), Vagaro (popular with solo injectors and smaller studios), Mindbody (used by wellness-adjacent practices that combine aesthetics with massage or yoga), Aesthetic Record (the EMR-first option common in RN-injector practices), and Calendly (for practices still running on a simple calendar with Zoom consults). Bookings push as appointments with the correct provider, service type, and deposit status. If you use a different system, we support any iCal-compatible calendar and can request a custom integration — most ship in under two weeks. The result: the AI never double-books, respects provider-specific availability, and keeps your scheduling software as the single source of truth.",
    },
    {
      heading: "Setup, Onboarding, and the Booking Guarantee",
      content:
        "We're a done-for-you managed service, not a self-serve tool you configure yourself. The 30-minute kickoff call covers your treatment menu and pricing ranges, deposit amounts by service, contraindication screening questions, after-hours routing rules (who gets paged for urgent calls), and your cancellation policy. We script and test the AI in 48 hours and you go live on day three. The 7-day free trial requires no credit card. The booking guarantee is concrete: 10 booked appointments in the first 30 days or a full refund. At an average $504 per visit, that's over $5,000 in captured revenue against a $500 service fee. Annual prepay saves $900/year and waives the setup fee.",
    },
  ],
  relatedServices: [],
  relatedLocations: ["san-jose", "san-francisco-bay-area", "los-angeles", "sacramento"],
};
