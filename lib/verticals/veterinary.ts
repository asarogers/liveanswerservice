import type { VerticalConfig } from "./types";

/**
 * Veterinary vertical — California single- and multi-doctor companion-animal
 * practices and animal hospitals. Practice manager / lead CSR screens, the
 * owner-DVM signs. After-hours emergencies and the front-desk bottleneck are
 * the buying triggers. Excluded from the index until Wave 5 (noindex handled
 * by the dynamic route via the site-plan exclude bucket).
 *
 * Stats are research-verified and conservative — see PR notes for sources.
 *
 * Stat source attribution (verified):
 *   - "1 in 4 calls unanswered": agentzap.ai/blog/veterinary-phone-statistics;
 *     peerlogic.com
 *   - "85% of callers never call back": peerlogic.com; articles.puppilot.co
 *   - "$5,000 new-client lifetime value" (worked example): happydoc.ai blog on
 *     client lifetime value; dvm360.com
 *   - "30–70% of after-hours emergency calls missed": peerlogic.com
 *   - PIMS list (ezyVet, Cornerstone, AVImark, Shepherd, Vetspire) verified via
 *     vetsoftwarehub.com (2026) + researchandmarkets.com
 */
export const veterinaryConfig: VerticalConfig = {
  slug: "veterinary-answering-service",

  meta: {
    title: "Live Answer for Veterinary — Never lose another new client",
    description:
      "24/7 bilingual AI front desk for California veterinary practices. Books into ezyVet, Cornerstone, AVImark, Shepherd, Vetspire. Triages after-hours emergencies. 1 in 4 calls go unanswered — captured.",
    canonical: "/services/veterinary-answering-service",
  },

  verticalBar: {
    icon: "paw",
    label: "Built for California veterinary practices",
  },

  oneLiner:
    "Most vet clinics miss one in four calls — at lunch, after close, and during the morning rush — and 85% of those callers never ring back. We answer every call 24/7, triage the emergencies, and book the routine ones straight into your practice software — so a new client worth $5,000 over their pet's life doesn't go to the clinic that picked up.",

  hero: {
    eyebrow: "AI front desk · 24/7 · Bilingual EN/ES",
    headline: "Never lose another {italicWord}.",
    italicWord: "new client",
    subhead: {
      seoBold: "24/7 bilingual AI front desk for California veterinary practices.",
      body:
        "You shouldn't lose a new client worth $5,000 because the front desk was on another line, the lobby was three deep, or it was 11 PM. We answer every call, triage the urgent ones, and book the rest straight into your practice software.",
    },
    sampleBusinessName: "Willow Creek Animal Hospital",
    chat: [
      { speaker: "bot", text: "Willow Creek Animal Hospital — how can I help you and your pet today?" },
      { speaker: "user", text: "My dog ate something and he's been throwing up. Are you open?" },
      { speaker: "bot", text: "Let's get him looked at. I can get you in this afternoon — is this a new patient?" },
    ],
  },

  trustStrip: [
    { icon: "map-pin", label: "Made in California" },
    { icon: "shield-check", label: "Emergency triage routing" },
    { icon: "language", label: "Bilingual EN/ES" },
    { icon: "lock", label: "CCPA-compliant recording" },
  ],

  stakes: {
    sectionNum: "01 · The front-desk bottleneck",
    title: "The math behind every missed call.",
    stats: [
      { num: "1 in 4", label: "calls go unanswered on an average day — more during the morning rush" },
      { num: "$5,000", label: "lifetime value of a new client walking to the clinic that picked up" },
      { num: "85%", label: "of callers who hit a busy line or voicemail never call back" },
    ],
  },

  vocQuote: {
    quote: "We're a small practice and the phones never stop. Half the time we're on a call and three more are rolling to voicemail nobody listens to until end of day.",
    attribution: "— What we hear from California veterinary practice managers every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The calls you're already losing.",
    cards: [
      { time: "10:42 PM", body: "A dog got into the chocolate. The owner is panicking. Your line rings to voicemail. They call the next animal hospital on Google — and you never knew they tried you first." },
      { time: "2:15 PM Wednesday", body: "Your CSR is in back helping restrain for a procedure. Four calls stack up. Two are new clients who needed a first appointment. Both book somewhere else." },
      { time: "8:05 AM Monday", body: "Doors just opened and the lobby is already three deep. The phone won't stop. A referral with a new puppy gives up after the fourth ring." },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "Your team should be with patients, not pinned to the phone.",
    empathy:
      "Your CSRs are restraining anxious animals, processing payments, filling scripts, and calming worried owners — all while the phone rings off the hook. Every call that stacks up at lunch, after close, or during the Monday rush is a new client you paid to attract or an emergency that just drove to the clinic that answered. The phone shouldn't be where you lose them.",
    authority: [
      { num: "24/7", label: "Every call — lunch, after-hours, weekends, and the morning rush" },
      { num: "EN/ES", label: "Bilingual from the first ring" },
      { num: "Triage", label: "Urgent cases routed to your on-call line; routine ones booked" },
      { num: "5+", label: "Native sync: ezyVet, Cornerstone, AVImark, Shepherd, Vetspire" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI front desk works",
    title: "Three steps to never miss another new client.",
    steps: [
      { num: 1, heading: "Forward your phone", body: "60 seconds. Works with any provider — Twilio, RingCentral, Verizon, AT&T, most VoIP systems." },
      { num: 2, heading: "We triage the call", body: "Emergency or routine? New client or existing? Species, symptom, urgency? Sorted and booked — 24/7, in English or Spanish." },
      { num: 3, heading: "Books into your PIMS", body: "Straight into ezyVet, Cornerstone, AVImark, Shepherd, or Vetspire — plus an SMS summary to the front desk in 60 seconds. Urgent cases route to your on-call line in 30 seconds." },
    ],
  },

  integrations: {
    label: "Syncs with your practice management software",
    items: ["ezyVet", "Cornerstone", "AVImark", "Shepherd", "Vetspire"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "Your CSRs work the lobby and the patients, not the phone queue. We answer every call — lunch through weekend — triage the emergencies to your on-call line, and book the routine ones into your PIMS without anyone lifting a finger. New clients schedule themselves. Your schedule fills without another hire.",
    items: [
      { icon: "moon", text: "After-hours emergencies reach a person, not voicemail." },
      { icon: "calendar-check", text: "New-client appointments book themselves." },
      { icon: "trending-up", text: "Revenue climbs without another front-desk hire." },
      { icon: "mood-smile", text: "Your team focuses on pets, not the phone queue." },
    ],
    before: [
      { icon: "phone-ringing", text: "Calls stack up while your CSR is in back." },
      { icon: "moon-off", text: "After-hours emergencies hit voicemail." },
      { icon: "trending-down", text: "New clients book the clinic that picked up." },
      { icon: "mood-sad", text: "Your team is burned out by the phones." },
    ],
  },

  voices: {
    sectionNum: "06 · Voices",
    title: "Human-standard AI voice agents.",
    sub: "Out of the box, ready to use.",
    cards: [
      { name: "Professional Sarah", label: "Warm & reassuring", sampleLine: "Willow Creek Animal Hospital — let's get your pet seen." },
      { name: "Executive Marcus", label: "Authoritative", sampleLine: "Thank you for calling Willow Creek Animal Hospital." },
      { name: "Casual Jamie", label: "Conversational", sampleLine: "Willow Creek Animal Hospital — how can we help?" },
    ],
  },

  compare: {
    sectionNum: "07 · Compare",
    title: "What you'd pay otherwise.",
    rows: [
      { what: "Voicemail at lunch + after-hours", cost: "$0/mo", result: "Lose 1 of 4 calls · $5,000 per new client · 85% never call back" },
      { what: "Another front-desk CSR (CA)", cost: "$3,200–$4,000/mo", result: "9–5 only · $48K/yr loaded · still rolls to voicemail at peak" },
      { what: "GuardianVets / NextPhone", cost: "$199/mo+ (per-vet scale)", result: "After-hours triage only · no daytime overflow · English-first" },
    ],
  },

  unlimited: {
    headline: "Most veterinary answering services only cover after-hours and charge for Spanish. We cover every hour.",
    competitors: [
      { name: "GuardianVets (per-vet)", cap: "After-hours triage only" },
      { name: "NextPhone $199/mo", cap: "Capped minutes" },
      { name: "Generic call center", cap: "No PIMS booking · English only" },
    ],
  },

  pricingAudience: "For California veterinary practices losing $5,000 new clients at lunch, after close, and during the Monday rush",

  faqs: [
    {
      q: "How does the AI front desk work?",
      a: "You forward your overflow or after-hours line to a number we provide. Every call is answered within 2 rings, 24/7. The AI triages the caller — emergency or routine, new client or existing, species, symptom, urgency — books routine appointments into your practice software, and texts your front desk a summary within 60 seconds. Urgent cases route to your on-call line within 30 seconds.",
    },
    {
      q: "Can it triage emergencies safely?",
      a: "Yes. The AI follows the triage rules you set — what counts as urgent for your practice, which symptoms route straight to your on-call DVM or your designated emergency hospital, and what gets booked routine. It never diagnoses or gives medical advice; it gathers the details, flags severity, and gets the right cases to a person in 30 seconds.",
    },
    {
      q: "Will it sound like a real front-desk person?",
      a: "Call our demo line and judge for yourself. We use the best-in-class TTS stack tuned for phone audio with veterinary-specific scripting that sounds like someone who's worked a busy CSR desk — calm with a panicking owner, not a phone tree.",
    },
    {
      q: "How does it integrate with my practice software?",
      a: "Native integration with ezyVet, Cornerstone, AVImark, Shepherd, and Vetspire. New-client and routine bookings push directly into your schedule with intake notes attached. Setup is included in onboarding.",
    },
    {
      q: "Can it handle Spanish-speaking pet owners?",
      a: "Yes — native EN/ES on every account, no upcharge. The AI detects the caller's language in the first 3 seconds and switches automatically. In most California metros, Spanish-speaking households are a meaningful and growing share of pet owners — and the clinic that answers in Spanish keeps the family.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI for your practice's tone and triage rules, integrate your practice software, and go live before you lose another after-hours emergency.",
    },
  ],

  finalCta: {
    headline: "Your front desk shouldn't roll to voicemail at the busiest hour.",
    sub: "Three minutes to know if this is for you.",
  },
};
