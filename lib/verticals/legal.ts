import type { VerticalConfig } from "./types";

/**
 * Legal vertical — solo + small CA law firms (PI / immigration / family /
 * criminal / employment / estate). Wave 2 launch per the brief. Higher LTV
 * than HVAC; per-retainer math anchors the offer.
 */
export const legalConfig: VerticalConfig = {
  slug: "attorney-answering-service",

  meta: {
    title: "Attorney Answering Service for CA Law Firms — Never Miss a Retainer",
    description:
      "Attorney answering service for California solo and small law firms: 24/7 bilingual AI intake, conflict check at the call, qualified intake, books into Clio, MyCase, PracticePanther. One captured retainer pays for a full year.",
    canonical: "/services/attorney-answering-service",
  },

  verticalBar: {
    icon: "scale",
    label: "Built for California law firms",
  },

  oneLiner:
    "Most law firms lose potential clients who call after hours, on weekends, or in Spanish. We answer every one 24/7, run the conflict check, and book the consult — so you stop losing retainers to the firm that picked up first.",

  hero: {
    eyebrow: "AI intake specialist · 24/7 · Bilingual EN/ES",
    headline: "Never miss another {italicWord}.",
    italicWord: "retainer",
    subhead: {
      seoBold: "24/7 bilingual AI intake for California solo and small law firms.",
      body:
        "You shouldn't lose a $5,000 retainer because the call came in on a Saturday or in Spanish. We answer every potential client, run the conflict check, qualify the matter, and book the consult.",
    },
    sampleBusinessName: "Anderson Law Firm",
    chat: [
      { speaker: "bot", text: "Anderson Law Firm — thank you for calling. How can I help?" },
      { speaker: "user", text: "I was in a car accident this morning, I need an attorney." },
      { speaker: "bot", text: "I'm so sorry. Let me get some details so we can get you in with an attorney today." },
    ],
  },

  trustStrip: [
    { icon: "map-pin", label: "Made in California" },
    { icon: "shield-check", label: "CCPA-compliant recording" },
    { icon: "language", label: "Bilingual EN/ES" },
    { icon: "lock", label: "Conflict check at intake" },
  ],

  stakes: {
    sectionNum: "01 · The after-hours problem",
    title: "The math behind every missed call.",
    stats: [
      { num: "~35%", label: "of after-hours and Spanish-language calls go unanswered" },
      { num: "$3K–$10K+", label: "value of each retainer walking to the next firm on Google" },
      { num: "60 sec", label: "before a PI lead calls the next listing — they don't wait" },
    ],
    rankingNote:
      "Google sees roughly half of US phone calls through Android — whether your firm answered, how long the intake lasted, and whether the caller dialed the next firm. Firms that stop answering measurably drop in local rank. A 100% answer rate protects the Maps position your case leads come from.",
  },

  vocQuote: {
    quote: "I vividly remember how I felt immediately before and after that phone call.",
    attribution: "— What we hear from California legal-services clients every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The calls you're already losing.",
    cards: [
      { time: "10:47 PM Saturday", body: "DUI arrest. They want a lawyer tonight. Your office line goes to voicemail. They call the next firm on Google." },
      { time: "Mid-deposition", body: "You can't pick up. A $5,000 employment matter leaves a voicemail. Two days later they've retained someone else." },
      { time: "Spanish-language", body: "Immigration client calls three firms in 20 minutes. The first one to answer gets the retainer. It isn't you." },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You didn't go to law school to answer phones.",
    empathy:
      "You went to practice law — write briefs, take depositions, advocate for clients. But the phone never stops. It rings while you're in court. It rings at 11 PM. It rings in Spanish when your intake VA is out. Every potential client who hits voicemail is a retainer your competitor just signed.",
    authority: [
      { num: "24/7", label: "Every call, every hour — including weekend emergencies" },
      { num: "EN/ES", label: "Bilingual from the first ring" },
      { num: "Conflict", label: "Conflict check at the call, before the consult is booked" },
      { num: "5+", label: "Native sync: Clio, MyCase, PracticePanther, Lawmatics" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI intake specialist works",
    title: "Three steps to never miss another retainer.",
    steps: [
      { num: 1, heading: "Forward your phone", body: "60 seconds. Works with any provider — Twilio, Google Voice, RingCentral, Verizon, AT&T." },
      { num: 2, heading: "We qualify the matter", body: "Practice area, urgency, conflict check against your client list — all in the first 90 seconds. 24/7, in English or Spanish." },
      { num: 3, heading: "You get the consult", body: "Booked into Clio, MyCase, PracticePanther, or Lawmatics — plus SMS in 60 seconds. High-value matters hot-transferred to your cell." },
    ],
  },

  integrations: {
    label: "Syncs with your case management software",
    items: ["Clio", "MyCase", "PracticePanther", "Lawmatics", "Google Calendar"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "You finish the deposition at 5 PM. You drive home. Your phone keeps ringing — every potential client gets an empathetic, professional intake. By Monday, your consult calendar is full of qualified matters. You didn't take a single call yourself.",
    items: [
      { icon: "moon", text: "You stop carrying your firm in your pocket." },
      { icon: "calendar-check", text: "Your consult calendar fills itself." },
      { icon: "trending-up", text: "Retainer revenue climbs without hiring intake staff." },
      { icon: "mood-smile", text: "You practice law again — not phone tag." },
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
      { what: "Voicemail", cost: "$0/mo", result: "Lose 35% of after-hours and Spanish calls" },
      { what: "Part-time intake VA", cost: "~$2,000/mo", result: "20 hrs/week, English only, 9–5" },
      { what: "Answering Legal / LexReception", cost: "$300–$500/mo", result: "Capped minutes, bilingual upcharge" },
    ],
  },

  unlimited: {
    headline: "Most legal answering services cap minutes and charge for Spanish. We don't.",
    competitors: [
      { name: "Answering Legal $297/mo", cap: "Limited intake minutes" },
      { name: "LexReception $49/mo base", cap: "Real-use $300+ with overages" },
      { name: "Smith.ai $255/mo", cap: "Capped at 200 minutes" },
    ],
  },

  pricingAudience: "For solo and small CA law firms losing $5,000 retainers to voicemail",

  faqs: [
    {
      q: "How does the AI intake specialist work?",
      a: "You forward your firm's line to a number we provide. Every incoming call is answered within 2 rings, 24/7. Our AI qualifies the matter (practice area, urgency, parties involved), runs a conflict check against your client list, books the consult into your case management software, and texts you a summary within 60 seconds. High-value matters route to your cell within 30 seconds.",
    },
    {
      q: "Does the AI give legal advice?",
      a: "No — strictly intake and scheduling. The AI is explicitly scripted to say it cannot provide legal advice and to refer all substantive questions to the attorney. ABA model rules on attorney-client privilege are respected from the first ring.",
    },
    {
      q: "How does the conflict check work?",
      a: "You upload your client list during onboarding (we accept Clio, MyCase, PracticePanther exports, or a CSV). When a new call comes in, the AI cross-references the caller's name and key parties against the list. Any potential conflict is flagged to you, not handled by the AI.",
    },
    {
      q: "Is there a contract or can I cancel anytime?",
      a: "Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI for your practice areas, integrate your case management software, and go live before you lose another after-hours retainer.",
    },
    {
      q: "Is this CCPA-compliant?",
      a: "Yes. A two-party consent prompt plays at the start of every recorded call. Recordings are encrypted at rest and in transit. We can disable recording entirely and retain transcripts only, if you prefer. Deletion requests honored within 30 days.",
    },
  ],

  finalCta: {
    headline: "Your firm should run on retainers, not voicemails.",
    sub: "Three minutes to know if this is for you.",
  },
};
