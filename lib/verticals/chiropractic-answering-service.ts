import type { VerticalConfig } from "./types";
import type { ServiceDetail } from "@/lib/services-data";

/**
 * Chiropractic vertical — California chiropractic clinics and wellness practices.
 * Angle: new-patient intake and booking. New patients are high LTV ($1,000–$3,000)
 * and call multiple clinics in one sitting — the first to answer books the case.
 * The front desk is busy assisting/rooming patients while the doctor adjusts.
 */
export const chiropracticConfig: VerticalConfig = {
  slug: "chiropractic-answering-service",

  meta: {
    title: "Chiropractic Answering Service — Book New Patients 24/7",
    description:
      "24/7 bilingual AI receptionist for California chiropractic clinics. Every new-patient call answered, intake captured, appointment booked into Jane, ChiroTouch, or Genesis. Flat $500/mo — one new patient more than covers it.",
    canonical: "/services/chiropractic-answering-service",
  },

  verticalBar: {
    icon: "spine",
    label: "Built for California chiropractic & wellness clinics",
  },

  oneLiner:
    "A new chiropractic patient is worth $1,000–$3,000 over their lifetime — and they're calling 2–5 clinics right now, booking with whoever picks up first. We answer every call 24/7 in English and Spanish, capture the intake, and book the appointment while the doctor is still adjusting.",

  hero: {
    eyebrow: "AI receptionist · 24/7 · Bilingual EN/ES",
    headline: "Book every new {italicWord} before they call the next clinic.",
    italicWord: "patient",
    subhead: {
      seoBold: "24/7 bilingual chiropractic answering service for California clinics.",
      body:
        "New patients with back pain don't leave voicemails — they move on. We answer every call, handle the new-patient intake and insurance questions, and book the appointment directly into your practice software before the caller hangs up.",
    },
    sampleBusinessName: "East Bay Chiropractic & Wellness",
    chat: [
      { speaker: "bot", text: "East Bay Chiropractic — thank you for calling. How can I help you today?" },
      { speaker: "user", text: "Hi, I've had really bad lower back pain for a week — can I get in to see the doctor?" },
      { speaker: "bot", text: "Absolutely, we'd love to help you. Let me get you set up as a new patient and find the next available slot." },
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
    sectionNum: "01 · The missed-call problem",
    title: "The math behind every unanswered ring.",
    stats: [
      {
        num: "$1,000–$3,000",
        // source: https://www.theevidencebasedchiropractor.com/blog/lifetime-value-of-a-patient
        label: "lifetime value of each new chiropractic patient you didn't answer for",
      },
      {
        num: "$318",
        // source: https://skipcalls.com/resources/missed-call-cost/chiropractor
        label: "expected revenue lost on every missed new-patient call (voicemail drops booking rate from 65% → 12%)",
      },
      {
        num: "87%",
        // source: https://www.perfectpatients.com/the-cost-of-missed-calls/
        label: "of prospective patients won't leave a voicemail — they call the next clinic on Google",
      },
    ],
    rankingNote:
      "Google sees roughly half of US phone calls through Android — whether you answered, how long you spoke, and whether the patient immediately called another clinic. Practices with low answer rates measurably drop in local Maps rank. A 100% answer rate protects the position your new-patient calls come from.",
  },

  vocQuote: {
    quote:
      "My back went out on a Saturday. I called three chiropractors. The first one who answered got my business — I never even listened to the other two voicemails.",
    attribution: "— What we hear from new chiropractic patients every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The new patients you're already losing.",
    cards: [
      {
        time: "2:30 PM Tuesday",
        body: "You're adjusting back-to-back. A prospective new patient with acute sciatica calls, reaches voicemail, and books with the clinic that picked up. That's $2,000 in lifetime value gone in 30 seconds.",
      },
      {
        time: "7:15 PM Friday",
        body: "After-hours. Someone rear-ended, neck pain, searching \"chiropractor near me.\" They call four clinics in a row. Only one answers. It isn't you.",
      },
      {
        time: "Monday morning rush",
        // no-show rate stat: https://www.trackstat.org/news/the-cost-of-missed-appointments-for-busy-chiropractic-clinics/
        body: "Your 9 AM no-showed. You're scrambling to fill the slot. Meanwhile the front desk is rooming the 9:30 and a new-patient call on hold drops — your no-show rate is already 16–18% without the missed calls piling on.",
      },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You didn't open a chiropractic practice to answer the phone.",
    empathy:
      "You opened it to adjust patients and see them get better. But the phone rings while you're mid-adjustment with both hands on a spine. It rings after the last patient of the day. It rings in Spanish when your front desk only speaks English. Every unanswered ring is a new patient — worth $1,000 to $3,000 over their lifetime — booking at the clinic down the street that happened to pick up.",
    authority: [
      { num: "24/7", label: "Every call, every hour — including weekends and after-hours" },
      { num: "EN/ES", label: "Bilingual intake from the first ring" },
      { num: "90 sec", label: "Full new-patient intake and booking in under 90 seconds" },
      { num: "5+", label: "Native sync with Jane, ChiroTouch, Genesis, and more" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI receptionist works",
    title: "Three steps to fill your schedule with new patients.",
    steps: [
      {
        num: 1,
        heading: "Forward your phone",
        body: "60 seconds. Works with any provider — Twilio, Google Voice, RingCentral, Verizon, AT&T. Your number stays yours.",
      },
      {
        num: 2,
        heading: "We handle the intake",
        body: "Chief complaint, insurance vs. cash-pay, availability, new-patient paperwork prompts — all captured in the call, 24/7, in English or Spanish.",
      },
      {
        num: 3,
        heading: "You get the booking",
        body: "Appointment pushed into Jane, ChiroTouch, Genesis, SimplePractice, or Calendly — plus an SMS summary to you in 60 seconds. Urgent cases (acute injury, post-accident) route to your cell within 30 seconds.",
      },
    ],
  },

  integrations: {
    label: "Syncs with your practice management software",
    items: ["Jane", "ChiroTouch", "Genesis Chiropractic", "SimplePractice", "Calendly"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "You finish your last adjustment at 6 PM. You go home. Every call that came in while your hands were on a patient — every new patient asking about back pain, insurance, availability — got answered, intake captured, appointment booked. Your schedule next week is already full. You didn't answer a single one yourself.",
    items: [
      { icon: "calendar-check", text: "Your new-patient slots fill themselves." },
      { icon: "trending-up", text: "Revenue climbs without adding staff." },
      { icon: "mood-smile", text: "You focus on adjusting, not the front desk." },
      { icon: "users", text: "Your panel grows — no missed calls, no lost LTV." },
    ],
    before: [
      { icon: "phone-ringing", text: "Calls stack up while you're adjusting." },
      { icon: "mood-sad", text: "New patients book with whoever answers." },
      { icon: "trending-down", text: "No-shows eat your revenue; missed calls add to the hole." },
      { icon: "clock", text: "You return calls at 7 PM — they already booked elsewhere." },
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
      { what: "Voicemail", cost: "$0/mo", result: "87% of new patients hang up and call the next clinic" },
      { what: "Part-time CA front desk", cost: "~$1,600/mo", result: "20 hrs/week, English only, can't answer while rooming patients" },
      { what: "Full-time CA receptionist", cost: "$3,200–$4,000/mo", result: "9–5 only · misses all after-hours new-patient calls" },
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

  pricingAudience: "For chiropractic clinics losing $1,000–$3,000 new-patient LTV every time a call goes to voicemail",

  faqs: [
    {
      q: "How does the AI receptionist handle new-patient intake?",
      a: "When a new patient calls, the AI answers within 2 rings, 24/7. It captures chief complaint, name, callback number, insurance vs. cash-pay preference, and scheduling availability — then books the appointment directly into Jane, ChiroTouch, Genesis, SimplePractice, or Calendly and texts you a summary within 60 seconds. Acute or post-accident calls escalate to your cell within 30 seconds.",
    },
    {
      q: "Can it answer insurance and cash-pay questions?",
      a: "Yes. We script the AI with your accepted insurances, your cash-pay rates, and your new-patient special — so it can answer the top 10 questions every prospective patient asks before booking, without putting them on hold.",
    },
    {
      q: "Is this HIPAA-compliant?",
      a: "We operate in HIPAA-aware mode for healthcare verticals. A two-party consent prompt plays at the start of every recorded call. Transcripts and recordings are encrypted at rest and in transit. We can disable recording and retain transcripts only if your compliance requirements demand it.",
    },
    {
      q: "What happens with a no-show or cancellation request?",
      a: "The AI handles reschedules and cancellations too — it confirms the reason, offers the next available slot, and updates your practice management calendar directly. You get an SMS whenever a slot opens up so you can fill it fast.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI on your accepted insurances, cash-pay rates, new-patient protocol, and emergency escalation rules, integrate your practice software, and go live before you lose another new-patient call.",
    },
    {
      q: "Is there a contract or can I cancel anytime?",
      a: "Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee.",
    },
    {
      q: "What is the booking guarantee?",
      a: "We guarantee 10 booked patient appointments in your first 30 days — or a full refund. At $100–$150 per visit and a $1,000–$3,000 lifetime value per new patient, those 10 bookings return the cost of service many times over.",
    },
  ],

  finalCta: {
    headline: "Your schedule should fill itself — not go to voicemail.",
    sub: "Three minutes to know if this is for you.",
  },
};

export const chiropracticDetail: ServiceDetail = {
  slug: "chiropractic-answering-service",
  name: "Chiropractic",
  title: "Chiropractic Answering Service — 24/7 AI Receptionist for California Clinics",
  metaDescription:
    "AI receptionist for California chiropractic and wellness clinics. Answers every new-patient call 24/7, captures full intake, books into Jane, ChiroTouch, or Genesis. Bilingual EN/ES. Flat $500/mo, no overages.",
  h1: "Never Lose Another New Patient to Voicemail",
  intro:
    "A prospective chiropractic patient with acute back pain doesn't leave a voicemail and wait. They search Google, call 2–5 clinics in rapid succession, and book with the first one that answers confidently and sounds available. Industry data puts the lifetime value of a chiropractic patient at $1,000–$3,000 — and a missed new-patient call costs roughly $318 in expected revenue because voicemail collapses booking conversion from 65% to 12%. We built Live Answer specifically for the California chiropractor whose front desk is busy rooming patients and assisting adjustments while new-patient calls stack up unanswered. Our AI receptionist answers in under two rings, handles the full new-patient intake — chief complaint, insurance vs. cash-pay, scheduling preference — and books the appointment directly into Jane, ChiroTouch, Genesis Chiropractic, SimplePractice, or Calendly. In English or Spanish. 24/7. For less than one day of a California receptionist's pay per month.",
  sections: [
    {
      heading: "What the AI Receptionist Does on a New-Patient Call",
      content:
        "The AI answers within two rings, in English or Spanish (auto-detected or caller-selected). For new patients it captures the standard intake: full name, callback number, chief complaint (back pain, neck pain, sciatica, post-accident, wellness), insurance carrier or cash-pay preference, preferred appointment days and times, and how they heard about the practice. The AI is scripted with your accepted insurance plans and cash-pay rates so it can answer the top questions every prospective patient asks before booking — 'do you take Blue Shield?', 'what's your new-patient special?', 'do you do X-rays?' — without putting the caller on hold or saying 'I'll have someone call you back.' Acute or post-accident callers (whiplash, acute disc, numbness) trigger a priority flag and an SMS to the on-call doctor within 30 seconds. Routine new patients get booked directly into the next available slot. Every call ends with an SMS summary to the practice and a transcript stored for 90 days.",
    },
    {
      heading: "Why New-Patient Calls Are Your Highest-Stakes Calls",
      // LTV source: https://www.theevidencebasedchiropractor.com/blog/lifetime-value-of-a-patient
      // missed-call cost source: https://skipcalls.com/resources/missed-call-cost/chiropractor
      content:
        "A new chiropractic patient is worth $1,000–$3,000 in lifetime revenue — often more if they refer family members or transition to wellness care. Yet the conversion math on missed calls is brutal: live answer converts roughly 65% of new-patient callers into booked appointments; voicemail drops that to about 12%. Every missed new-patient call represents approximately $318 in lost expected revenue, and missing just one per day quietly costs a clinic over $80,000 per year. Unlike HVAC emergencies or legal intakes, chiropractic callers are almost always comparison-shopping in real time — they've already Googled three or four clinics, and they're calling them in order. The clinic that answers first and sounds competent gets the patient. The rest get a polite hang-up.",
    },
    {
      heading: "Handling Reschedules, No-Shows, and Insurance Questions",
      // no-show source: https://www.chirotouch.com/article/reduce-missed-appointments
      content:
        "Chiropractic practices without automated reminders see no-show rates of 16–18%; even with reminders the industry average runs 7–10%. The AI handles both sides of that equation: it answers new-patient calls that would otherwise go to voicemail, and it manages inbound reschedule and cancellation calls so your front desk isn't tied up on the phone when it should be rooming the next patient. When a patient calls to cancel, the AI captures the reason, offers the next two available slots, books the replacement, and pings you with the freed slot so you can fill it from your waitlist. Insurance verification questions — accepted plans, referral requirements, how many visits a plan typically covers — are scripted in during onboarding so the AI answers them accurately rather than forcing a callback.",
    },
    {
      heading: "Integrations Built for the Chiropractic Practice Stack",
      content:
        "We book into the five platforms that cover the majority of California chiropractic practices: Jane App, ChiroTouch, Genesis Chiropractic Software, SimplePractice, and Calendly. Bookings push as new-patient appointments with the intake notes attached so the front desk sees full context before the patient arrives — no double data entry. If you use a platform we haven't pre-built (Platinum System, ECLIPSE, Kareo), we ship custom integrations in under two weeks. Two-way SMS means the AI can also confirm appointments the morning before and reroute reschedule requests without the front desk touching them. The result: by the time the doctor finishes the morning's adjustments, the afternoon is already booked.",
    },
    {
      heading: "What Onboarding Looks Like",
      content:
        "We are a done-for-you managed service, not a self-serve tool. The 30-minute kickoff call covers: your accepted insurances, cash-pay rates and new-patient special, appointment types and typical duration, after-hours escalation rules (who gets paged for acute post-accident callers), your waitlist process, scheduling rules (e.g., new patients on Tuesdays only), and competitor list (so the AI never recommends them by accident). We build the agent in 48 hours and go live by day three. The 7-day free trial requires no credit card. Our booking guarantee: 10 booked patient appointments in your first 30 days or a full refund. At a $1,000–$3,000 patient lifetime value, those 10 bookings pay back the service cost many times over.",
    },
  ],
  relatedServices: [],
  relatedLocations: ["san-jose", "sacramento", "los-angeles", "san-francisco-bay-area"],
};
