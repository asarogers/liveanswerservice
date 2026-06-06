import type { VerticalConfig } from "./types";

/**
 * Dental vertical — California single-location dental practices (1–4 chair).
 * Office manager screens, dentist signs. HIPAA-aware mode required.
 * Wave 3 launch per the brief.
 */
export const dentalConfig: VerticalConfig = {
  slug: "dental-answering-service",

  meta: {
    title: "Live Answer for Dental — Never lose another new patient",
    description:
      "24/7 bilingual AI front desk for California dental practices. Books new patients into Dentrix, Open Dental, Eaglesoft, NexHealth. HIPAA-aware. $850 per missed new patient — captured.",
    canonical: "/services/dental-answering-service",
  },

  verticalBar: {
    icon: "tooth",
    label: "Built for California dental practices",
  },

  oneLiner:
    "Most dental practices miss new-patient calls at lunch, after 5, and in Spanish. We answer every one 24/7 and book it straight into your practice software — so you stop losing $850 new patients and your chairs stay full.",

  hero: {
    eyebrow: "AI front desk · 24/7 · Bilingual EN/ES",
    headline: "Never lose another {italicWord}.",
    italicWord: "new patient",
    subhead: {
      seoBold: "24/7 bilingual AI front desk for California dental practices.",
      body:
        "You shouldn't lose an $850 new-patient call at lunch, after 5 PM, or in Spanish. We answer every call, verify insurance basics, and book straight into your practice management software.",
    },
    sampleBusinessName: "Cedar Grove Dental",
    chat: [
      { speaker: "bot", text: "Cedar Grove Dental — how can I help you today?" },
      { speaker: "user", text: "I have a chipped tooth, I'm looking for a new dentist." },
      { speaker: "bot", text: "I'm sorry to hear that. Let me get you in tomorrow — what's your insurance?" },
    ],
  },

  trustStrip: [
    { icon: "map-pin", label: "Made in California" },
    { icon: "shield-check", label: "HIPAA-aware intake" },
    { icon: "language", label: "Bilingual EN/ES" },
    { icon: "lock", label: "CCPA-compliant recording" },
  ],

  stakes: {
    sectionNum: "01 · The front-desk gap",
    title: "The math behind every missed call.",
    stats: [
      { num: "20–38%", label: "of calls miss your front desk (lunch, after-hours, with a patient)" },
      { num: "$850", label: "average new-patient lifetime value walking to the next office" },
      { num: "$48K/yr", label: "CA front-desk salary loaded · we cover the gap at 14% of that" },
    ],
  },

  vocQuote: {
    quote: "My friend and I have a small business, and it's driving us crazy! Every morning, we get a bunch of missed calls.",
    attribution: "— What we hear from California dental office managers every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The calls you're already losing.",
    cards: [
      { time: "12:30 PM lunch", body: "Front desk is out. New patient with a cracked filling calls. They book the next office on Google instead." },
      { time: "5:45 PM Tuesday", body: "Your team's already gone home. A referral with PPO coverage leaves a voicemail you won't hear until morning." },
      { time: "Spanish-language call", body: "Three offices on the same block. The one that answers in Spanish gets the new family of four." },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "Your front desk shouldn't end at 5 PM or pause at lunch.",
    empathy:
      "Your team is in chair-side with patients, processing insurance, running treatment plans. Every call that hits voicemail at lunch or after 5 is a new-patient lead you paid $40–$120 in Google Ads to generate. The phone shouldn't be the bottleneck.",
    authority: [
      { num: "24/7", label: "Every call, lunch + after-hours + weekends" },
      { num: "EN/ES", label: "Bilingual from the first ring" },
      { num: "HIPAA", label: "Minimum-necessary intake, encrypted in transit + at rest" },
      { num: "5+", label: "Native sync: Dentrix, Open Dental, Eaglesoft, Curve, NexHealth" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI front desk works",
    title: "Three steps to never miss another new patient.",
    steps: [
      { num: 1, heading: "Forward your phone", body: "60 seconds. Works with any provider — Twilio, RingCentral, Verizon, AT&T, most VoIP systems." },
      { num: 2, heading: "We qualify the patient", body: "New patient or existing? Insurance? Pain level? Routine or emergency? Triaged and booked — 24/7, in English or Spanish." },
      { num: 3, heading: "Books into your PMS", body: "Straight into Dentrix, Open Dental, Eaglesoft, Curve, or NexHealth — plus SMS to the office in 60 seconds." },
    ],
  },

  integrations: {
    label: "Syncs with your practice management software",
    items: ["Dentrix", "Open Dental", "Eaglesoft", "Curve", "NexHealth"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "Your front desk handles the in-chair experience. We handle the phone — every call, lunch through weekend. New patients book themselves into Dentrix without anyone in the office lifting a finger. Production climbs without new hires.",
    items: [
      { icon: "moon", text: "After-hours leads stop going to voicemail." },
      { icon: "calendar-check", text: "New-patient schedule fills itself." },
      { icon: "trending-up", text: "Production climbs without front-desk hires." },
      { icon: "mood-smile", text: "Your team focuses on patients, not the phone." },
    ],
  },

  voices: {
    sectionNum: "06 · Voices",
    title: "Human-standard AI voice agents.",
    sub: "Out of the box, ready to use.",
    cards: [
      { name: "Professional Sarah", label: "Warm & reassuring", sampleLine: "Cedar Grove Dental — let me get you in this week." },
      { name: "Executive Marcus", label: "Authoritative", sampleLine: "Thank you for calling Cedar Grove Dental." },
      { name: "Casual Jamie", label: "Conversational", sampleLine: "Cedar Grove Dental — how can we help?" },
    ],
  },

  compare: {
    sectionNum: "07 · Compare",
    title: "What you'd pay otherwise.",
    rows: [
      { what: "Voicemail at lunch + after-hours", cost: "$0/mo", result: "Lose 20–38% of calls · $850 per new patient" },
      { what: "Second front-desk hire (CA)", cost: "$3,200–$4,000/mo", result: "9–5 only · $48K/yr loaded · 60-day replacement" },
      { what: "WellReceived / TrueLark", cost: "$249–$395/mo", result: "Capped minutes · bilingual upcharge" },
    ],
  },

  unlimited: {
    headline: "Most dental answering services cap minutes and charge for Spanish. We don't.",
    competitors: [
      { name: "WellReceived $375/mo", cap: "150–300 minute cap" },
      { name: "TrueLark $249/mo", cap: "Limited intake hours" },
      { name: "NotifyMD enterprise", cap: "Custom pricing, multi-month contract" },
    ],
  },

  pricingAudience: "For California dental practices losing $850 new patients at lunch and after 5 PM",

  faqs: [
    {
      q: "How does the AI front desk work?",
      a: "You forward your overflow or after-hours line to a number we provide. Every call is answered within 2 rings, 24/7. The AI qualifies the caller — new patient or existing, insurance basics, pain level, urgency — books the appointment into your PMS, and texts your office a summary within 60 seconds. Emergencies route to the on-call dentist within 30 seconds.",
    },
    {
      q: "Is it HIPAA-compliant?",
      a: "We operate in HIPAA-aware mode by default. Intake is set to 'minimum necessary' — no PHI in transcripts unless you explicitly enable it. Recordings are encrypted at rest and in transit. A signed BAA is available on request. Deletion requests honored within 30 days.",
    },
    {
      q: "Will it sound like a real front desk person?",
      a: "Call our demo line and judge for yourself. We use the best-in-class TTS stack tuned for phone audio with dental-specific scripting that sounds like someone who's worked at a practice — not a phone tree.",
    },
    {
      q: "How does it integrate with my PMS?",
      a: "Native integration with Dentrix, Open Dental, Eaglesoft, Curve, and NexHealth. New-patient bookings push directly into your schedule with intake notes attached. Setup is included in onboarding.",
    },
    {
      q: "Can it handle Spanish-speaking patients?",
      a: "Yes — native EN/ES on every account, no upcharge. The AI detects the caller's language in the first 3 seconds and switches automatically. In CA, Spanish-speaking new patients are 25–40% of inbound in most metros.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI for your practice's tone, integrate your PMS, and go live before you lose another lunch-hour new patient.",
    },
  ],

  finalCta: {
    headline: "Your front desk shouldn't end at 5 PM.",
    sub: "Three minutes to know if this is for you.",
  },
};
