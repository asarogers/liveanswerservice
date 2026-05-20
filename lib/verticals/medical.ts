import type { VerticalConfig } from "./types";

/**
 * Medical vertical — California single-location medical/wellness practices
 * (1–5 provider). Sister to dental. HIPAA-aware mode required.
 */
export const medicalConfig: VerticalConfig = {
  slug: "medical-office-answering-service",

  meta: {
    title: "Live Answer for Medical Offices — Never lose another new patient",
    description:
      "24/7 bilingual AI receptionist for California medical practices. Books new patients into Athena, eClinicalWorks, NextGen, Practice Fusion. HIPAA-aware, CCPA-compliant.",
    canonical: "/services/medical-office-answering-service",
  },

  verticalBar: {
    icon: "stethoscope",
    label: "Built for California medical practices",
  },

  hero: {
    eyebrow: "AI receptionist · 24/7 · Bilingual EN/ES",
    headline: "Never lose another {italicWord}.",
    italicWord: "new patient",
    subhead: {
      seoBold: "24/7 bilingual AI receptionist for California medical practices.",
      body:
        "You shouldn't lose new-patient referrals because the front desk is on lunch, on another call, or already gone for the day. We answer every call, qualify the patient, and book straight into your EHR.",
    },
    sampleBusinessName: "Hillview Family Medicine",
    chat: [
      { speaker: "bot", text: "Hillview Family Medicine — how can I help you?" },
      { speaker: "user", text: "I need to see a doctor — I think I have a UTI." },
      { speaker: "bot", text: "Let me get you in today. Are you a new or existing patient?" },
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
      { num: "20–35%", label: "of calls miss your front desk (lunch, with a patient, after-hours)" },
      { num: "$600–$2,000", label: "value of a new-patient acquisition walking to the next clinic" },
      { num: "$45K/yr", label: "CA medical receptionist salary loaded · we cover the gap at 13% of that" },
    ],
  },

  vocQuote: {
    quote: "I can't stand when I have to call in and go through the old school phone trees and then wait on hold forever.",
    attribution: "— What we hear from California patients every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The calls you're already losing.",
    cards: [
      { time: "12:15 PM", body: "Front desk is at lunch. A referral from a specialist calls. They book the other primary care office instead." },
      { time: "5:30 PM", body: "Doors closed 30 minutes ago. A worried parent with a sick kid leaves a voicemail and calls urgent care." },
      { time: "Spanish-language", body: "Mom calls in Spanish about her son's asthma. Your IVR doesn't have a Spanish option. She hangs up." },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "Your front desk shouldn't end at 5 PM or pause at lunch.",
    empathy:
      "Your front desk is checking in patients, processing insurance, calling pharmacies, and somehow also answering the phone. Every call that hits voicemail is a new patient who'll call the next office on the list. The phone shouldn't be the bottleneck on your panel growth.",
    authority: [
      { num: "24/7", label: "Every call, lunch + after-hours + weekends" },
      { num: "EN/ES", label: "Bilingual from the first ring" },
      { num: "HIPAA", label: "Minimum-necessary intake, encrypted in transit + at rest" },
      { num: "4+", label: "Native sync: Athena, eClinicalWorks, NextGen, Practice Fusion" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI receptionist works",
    title: "Three steps to never miss another patient.",
    steps: [
      { num: 1, heading: "Forward your phone", body: "60 seconds. Works with any provider — RingCentral, Twilio, Verizon, AT&T, most VoIP systems." },
      { num: 2, heading: "We qualify the patient", body: "New patient or existing? Reason for visit? Urgency? Insurance basics? Triaged and booked — 24/7, in English or Spanish." },
      { num: 3, heading: "Books into your EHR", body: "Straight into Athena, eClinicalWorks, NextGen, or Practice Fusion — plus SMS to the office within 60 seconds. Urgent cases route to on-call." },
    ],
  },

  integrations: {
    label: "Syncs with your EHR / practice management",
    items: ["Athena", "eClinicalWorks", "NextGen", "Practice Fusion", "Google Calendar"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "Your panel is growing. Your front desk is focused on the patients in the lobby, not the phone. New-patient referrals don't bounce to voicemail anymore. Your Spanish-speaking patients reach a human-sounding receptionist on the first ring.",
    items: [
      { icon: "moon", text: "After-hours leads stop going to voicemail." },
      { icon: "calendar-check", text: "New-patient schedule fills itself." },
      { icon: "trending-up", text: "Panel grows without a front-desk hire." },
      { icon: "mood-smile", text: "Your team focuses on patients in chairs." },
    ],
  },

  voices: {
    sectionNum: "06 · Voices",
    title: "Human-standard AI voice agents.",
    sub: "Out of the box, ready to use.",
    cards: [
      { name: "Professional Sarah", label: "Warm & reassuring", sampleLine: "Hillview Family Medicine — how can I help?" },
      { name: "Executive Marcus", label: "Authoritative", sampleLine: "Thank you for calling Hillview Family Medicine." },
      { name: "Casual Jamie", label: "Conversational", sampleLine: "Hillview Family — what brings you in?" },
    ],
  },

  compare: {
    sectionNum: "07 · Compare",
    title: "What you'd pay otherwise.",
    rows: [
      { what: "Voicemail + IVR", cost: "$0/mo", result: "Lose 20–35% of calls · $600–$2,000 per new patient" },
      { what: "Second front-desk hire (CA)", cost: "$3,200–$3,800/mo", result: "9–5 only · $45K/yr loaded · 60-day replacement" },
      { what: "Medical answering services", cost: "$300–$500/mo", result: "Capped minutes · bilingual upcharge" },
    ],
  },

  unlimited: {
    headline: "Most medical answering services cap minutes and charge for Spanish. We don't.",
    competitors: [
      { name: "notifyMD $355/mo", cap: "250-minute cap, $1.35/min overage" },
      { name: "Specialty $300+/mo", cap: "Limited bilingual hours" },
      { name: "Generic answering", cap: "No HIPAA-aware mode" },
    ],
  },

  pricingAudience: "For California medical practices losing $600–$2,000 new patients at lunch and after hours",

  faqs: [
    {
      q: "How does the AI receptionist work?",
      a: "You forward your overflow or after-hours line to a number we provide. Every call is answered within 2 rings, 24/7. The AI qualifies the patient — new vs existing, reason for visit, urgency — books the appointment into your EHR, and texts your front desk within 60 seconds. Urgent cases route to on-call within 30 seconds.",
    },
    {
      q: "Is it HIPAA-compliant?",
      a: "We operate in HIPAA-aware mode by default. Intake is set to 'minimum necessary' — no PHI in transcripts unless you enable it. Recordings are encrypted at rest and in transit. A signed BAA is available. Deletion requests honored within 30 days.",
    },
    {
      q: "Does it give medical advice?",
      a: "No. The AI is scripted to refer all clinical questions to your team and to route urgent symptoms to on-call. It handles intake and scheduling, not triage. It will recognize emergencies (chest pain, breathing difficulty, etc.) and route to 911 + your provider within seconds.",
    },
    {
      q: "How does it integrate with my EHR?",
      a: "Native integration with Athena, eClinicalWorks, NextGen, and Practice Fusion. New-patient bookings push directly into your schedule with intake notes. Setup is handled by our team during onboarding.",
    },
    {
      q: "Can it handle Spanish-speaking patients?",
      a: "Yes — native EN/ES on every account, no upcharge. The AI detects the caller's language in the first 3 seconds and switches automatically. Critical in California, where ~40% of inbound is Spanish in some metros.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI for your practice's tone, integrate your EHR, and go live.",
    },
  ],

  finalCta: {
    headline: "Your panel should grow on referrals, not stall at voicemail.",
    sub: "Three minutes to know if this is for you.",
  },
};
