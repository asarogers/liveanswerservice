import type { VerticalConfig } from "./types";
import type { ServiceDetail } from "@/lib/services-data";

export const appointmentSchedulingConfig: VerticalConfig = {
  slug: "appointment-scheduling-answering-service",

  meta: {
    title: "AI Appointment Setter — Answering Service That Books Appointments 24/7",
    description:
      "An answering service that books appointments directly into your calendar in real time — not just a message taken. Bilingual EN/ES, 24/7, flat $500/mo. Works with Calendly, Acuity, Google Calendar, Clio, Jobber, Dentrix, and more. 7-day free trial.",
    canonical: "/services/appointment-scheduling-answering-service",
  },

  verticalBar: {
    icon: "calendar-event",
    label: "Books appointments for California businesses",
  },

  oneLiner:
    "Most answering services take a message and hope you call back. We book the caller directly into your calendar before they hang up — so you wake up with a full schedule instead of a queue of callbacks nobody answers.",

  hero: {
    eyebrow: "AI receptionist · Books live into your calendar · Bilingual EN/ES",
    headline: "The AI appointment setter that {italicWord} your calendar.",
    italicWord: "fills",
    subhead: {
      seoBold: "An answering service that books appointments directly into your calendar, 24/7.",
      body:
        "Taking a message is not booking a job. We answer every call, capture the intent while it's hot, and lock the slot into your scheduling software in real time — confirmation SMS to the caller, summary to you within 60 seconds.",
    },
    sampleBusinessName: "Pacific Coast Wellness",
    chat: [
      { speaker: "bot", text: "Pacific Coast Wellness — how can I help you today?" },
      { speaker: "user", text: "Hi, I'd like to book a cleaning for next Tuesday if possible." },
      { speaker: "bot", text: "Absolutely — I have 10 AM or 2 PM open. Which works for you? I'll send you a confirmation right now." },
    ],
  },

  trustStrip: [
    { icon: "map-pin", label: "Made in California" },
    { icon: "shield-check", label: "CCPA-compliant recording" },
    { icon: "language", label: "Bilingual EN/ES" },
    { icon: "lock", label: "HIPAA-aware mode available" },
  ],

  stakes: {
    sectionNum: "01 · The scheduling gap",
    title: "The math behind every message you take instead of a booking you make.",
    stats: [
      {
        num: "40%",
        label: "of appointment requests come in after business hours — when no one's there to book them", // https://www.zippia.com/advice/appointment-scheduling-statistics/
      },
      {
        num: "80%",
        label: "of callers who hit voicemail hang up without leaving a message and call your competitor next", // https://oncallclerk.com/blog/why-callers-dont-leave-voicemail
      },
      {
        num: "30–45%",
        label: "more booked jobs when calls are scheduled live vs. a message left for a callback queue", // https://www.getnextphone.com/blog/answering-service-appointment-scheduling
      },
    ],
    rankingNote:
      "Google sees roughly half of US phone calls through Android — whether you answered, how long the conversation lasted, and whether the caller dialed the next business. Businesses that send calls to voicemail measurably drop in local search rank. A 100% answer rate with a live booking protects the Maps position your appointment leads come from.",
  },

  vocQuote: {
    quote: "They called, we sent it to voicemail, and by the time we called back they'd already booked somewhere else. That's how we lose clients.",
    attribution: "— What we hear from California appointment-based business owners every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The bookings you're already losing.",
    cards: [
      {
        time: "7:42 PM Tuesday",
        body: "A new patient finds you on Google and calls to book a consult. You're closed. They hear voicemail, hang up, and book the practice two listings down — all within four minutes.",
      },
      {
        time: "During your 11 AM",
        body: "You're with a client. Your phone rings four times and goes to voicemail. Two callers don't leave a message. By the time you check your phone at noon, those slots are still empty — and the callers are gone.",
      },
      {
        time: "No-show, again",
        body: "You booked it last week via a message callback. No confirmation SMS ever went out. They forgot. The slot is empty, the revenue is gone, and you're the one calling them to reschedule.",
      },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You didn't open a business to live inside a callback queue.",
    empathy:
      "You're good at what you do — not at chasing down people who called last Tuesday and never picked up when you called back. But taking a message and hoping to reconnect is how you lose the booking. The caller's intent is highest the moment they dial. We answer at that moment, ask the right questions, and lock the slot before they even think about calling anyone else.",
    authority: [
      {
        num: "24/7",
        label: "Every call answered, including 8 PM Sunday — when 40% of booking demand lands", // https://www.zippia.com/advice/appointment-scheduling-statistics/
      },
      {
        num: "EN/ES",
        label: "Bilingual from the first ring — no Spanish caller left on hold",
      },
      {
        num: "−50%",
        label: "No-shows drop ~50% when confirmation SMS goes out automatically at booking", // https://acuityscheduling.com/learn/cost-of-no-shows
      },
      {
        num: "9+",
        label: "Native calendar and scheduling integrations — we book into whatever you already use",
      },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI booking receptionist works",
    title: "Three steps to a calendar that fills itself.",
    steps: [
      {
        num: 1,
        heading: "Forward your phone",
        body: "60 seconds. Works with any provider — Twilio, Google Voice, RingCentral, Verizon, AT&T. Your number stays yours.",
      },
      {
        num: 2,
        heading: "We book the call live",
        body: "Name, callback, service type, preferred time — captured and confirmed in real time, in English or Spanish. The caller leaves with a booked slot and an SMS confirmation, not a promise to call back.",
      },
      {
        num: 3,
        heading: "Your calendar fills, you get the summary",
        body: "New appointments push directly into Calendly, Acuity, Google Calendar, Dentrix, Clio, Jobber, or ServiceTitan within 60 seconds. You get an SMS summary. The caller gets a reminder the morning of.",
      },
    ],
  },

  integrations: {
    label: "Books directly into your scheduling software",
    items: [
      "Calendly",
      "Cal.com",
      "Google Calendar",
      "Acuity Scheduling",
      "Dentrix",
      "Clio",
      "Jobber",
      "ServiceTitan",
      "Housecall Pro",
    ],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "You finish your last appointment at 6 PM. You go home. Your phone keeps ringing — every caller gets answered and every slot that's open gets filled. By Monday, next week's calendar is packed. You didn't manually book a single one.",
    items: [
      { icon: "calendar-check", text: "Your calendar fills overnight, on weekends, in Spanish." },
      { icon: "device-mobile-message", text: "Every new client gets a confirmation SMS before they hang up." },
      { icon: "trending-up", text: "No-shows fall. Revenue per week climbs." },
      { icon: "mood-smile", text: "You stop living inside your missed-call list." },
    ],
    before: [
      { icon: "phone-missed", text: "After-hours calls vanish into voicemail." },
      { icon: "clock", text: "You spend mornings calling back people who already booked elsewhere." },
      { icon: "trending-down", text: "No-shows eat the slots you did book." },
      { icon: "mood-sad", text: "You're the scheduling coordinator — and the one doing the work." },
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
      { what: "Voicemail + callbacks", cost: "$0/mo", result: "40% of demand goes to voicemail; 80% hang up and don't call back" },
      {
        what: "Full-time CA receptionist/scheduler",
        cost: "$4,000–$6,000/mo", // https://ringeden.com/blog/how-much-does-a-full-time-receptionist-cost
        result: "9–5 only, English only, benefits + taxes + churn",
      },
      { what: "Message-taking answering service", cost: "$200–$400/mo", result: "Takes a message — booking still falls on you" },
    ],
  },

  unlimited: {
    headline: "Most answering services take a message. We take the booking.",
    competitors: [
      { name: "Ruby Receptionists $235/mo", cap: "Message-taking only, no live booking" },
      { name: "AnswerConnect $350/mo", cap: "$1.85/min overage, no calendar sync" },
      { name: "PATLive $149/mo", cap: "Capped minutes, manual booking follow-up" },
    ],
  },

  pricingAudience:
    "For appointment-based California businesses that lose bookings every time a call goes unanswered after 5 PM",

  faqs: [
    {
      q: "What makes this different from a regular answering service?",
      a: "A regular answering service takes a message and emails it to you. We book the appointment directly into your calendar — Calendly, Acuity, Google Calendar, Dentrix, Clio, Jobber, ServiceTitan, or Housecall Pro — before the caller hangs up. The caller leaves with a confirmed slot and an SMS. You leave with a booking, not a callback to do.",
    },
    {
      q: "What if a time slot isn't available when the caller wants?",
      a: "The AI has live access to your availability and offers the nearest open alternatives in real time. It can also take a waitlist request and automatically confirm via SMS if a slot opens. Nothing sits in a voicemail queue waiting for a human to check it.",
    },
    {
      q: "Does the AI send appointment reminders?",
      a: "Yes. An SMS confirmation goes to the caller the moment the booking is made. A reminder goes out the morning of the appointment. Businesses using automatic reminders see no-show rates drop roughly 50% — every filled slot that actually shows up is recovered revenue.",
    },
    {
      q: "Can I customize the booking rules — services offered, time slots, intake questions?",
      a: "Yes. During the 30-minute kickoff call we map your service menu, booking rules, availability windows, intake questions, and escalation logic. The AI only offers slots you've approved and asks exactly the pre-visit questions you need.",
    },
    {
      q: "Is there a contract or can I cancel anytime?",
      a: "Month-to-month. Cancel anytime. The 7-day free trial requires no credit card and no setup fee. Annual prepay saves you $900/year and waives the setup fee.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We connect to your calendar or scheduling platform, script the AI for your service menu, and go live before the next after-hours booking walks to your competitor.",
    },
    {
      q: "What if my calendar software isn't on the integration list?",
      a: "If you use a platform we haven't pre-built (Mindbody, Jane App, SimplePractice, NexHealth), request a custom integration during onboarding. We ship most custom connectors in under two weeks.",
    },
  ],

  finalCta: {
    headline: "Your calendar should fill itself — not wait on a callback queue.",
    sub: "Three minutes to know if this is for you.",
  },
};

export const appointmentSchedulingDetail: ServiceDetail = {
  slug: "appointment-scheduling-answering-service",
  title: "Answering Service That Books Appointments — Live 24/7 | Live Answer Service",
  metaDescription:
    "An AI answering service that books appointments directly into your calendar in real time. Works with Calendly, Acuity, Google Calendar, Dentrix, Clio, Jobber, and more. Bilingual EN/ES, flat $500/mo, 7-day free trial.",
  h1: "The Answering Service That Books Appointments in Real Time",
  intro:
    "Taking a message is not booking a job. The average appointment-based California business misses roughly 40% of its booking demand because those calls arrive after hours, during a session, or in Spanish — and the standard response is voicemail. Research consistently shows 80% of callers who hit voicemail hang up without leaving a message and call the next result on Google. Live Answer Service is built specifically to close that gap: we answer every call 24/7 in English or Spanish, capture the caller's service request and preferred time, and book the slot directly into your scheduling software before the caller hangs up. Confirmation SMS goes to the caller, summary to you, within 60 seconds — no callback queue, no manual follow-up, no lost booking.",
  sections: [
    {
      heading: "What 'Books Directly' Actually Means on a Call",
      content:
        "Most answering services are message routers: they collect a name and number and email it to you, leaving the actual booking to you or a staff member the next morning. By that time, 40% of after-hours callers have already booked with a competitor. Live Answer Service connects live to your scheduling platform — Calendly, Cal.com, Google Calendar, Acuity Scheduling, Dentrix, Clio, Jobber, ServiceTitan, or Housecall Pro — and has read/write access to your real-time availability. When a caller asks to book a Tuesday afternoon slot, the AI checks live availability, offers the nearest open times, confirms the selection, writes the appointment to your calendar, and fires a confirmation SMS to the caller before they hang up. The caller experiences what it feels like to reach a competent front desk. You experience a calendar that fills itself while you sleep. The critical difference: intent is highest at the moment the caller dials. Capturing that intent live produces 30–45% more booked appointments than the callback model, according to data from NextPhone's 2025 analysis of live-booking vs. message-taking answering services.",
    },
    {
      heading: "No-Show Reduction Built Into Every Booking",
      content:
        "An empty slot from a no-show is revenue-equivalent to a missed call — you held the time, paid the overhead, and made nothing. The industry average no-show rate sits between 15–23% across appointment-based businesses, with higher rates in healthcare and personal services. The single highest-impact intervention is automatic SMS reminders: businesses using same-booking confirmation texts and morning-of reminders cut their no-show rate by approximately 50%, according to Acuity Scheduling's analysis of their platform data. Live Answer Service fires both automatically — confirmation at booking, reminder the morning of — without any staff action. For a business running 30 appointments per week at $100 average ticket and a 20% no-show rate, that is 6 empty slots per week and roughly $31,000 in annual lost revenue. Cutting that in half with reminders that cost zero marginal effort is, in practice, more valuable than the call-answering alone.",
    },
    {
      heading: "The Integration Stack and What It Actually Covers",
      content:
        "Our native integrations cover the scheduling and practice-management platforms used by the broadest slice of California's appointment-based SMBs. For general-purpose scheduling: Calendly, Cal.com, Google Calendar, and Acuity Scheduling. For dental and healthcare: Dentrix. For legal: Clio. For home services: Jobber, ServiceTitan, and Housecall Pro. Any iCal-compatible calendar — including Apple Calendar and Outlook — works with no additional setup. If you use a platform not on this list (Mindbody, Jane App, SimplePractice, NexHealth, RazorSync, Workiz), request a custom integration at onboarding and we ship it in under two weeks. Two-way SMS also means the AI can handle inbound reschedule requests, freeing your staff from the 30-minute-per-day phone tag loop that every front desk knows.",
    },
    {
      heading: "What Setup and the 7-Day Trial Look Like",
      content:
        "Live Answer Service is a done-for-you managed service — we build and run the agent, you don't configure anything. The 30-minute kickoff call covers your service menu, booking rules, availability windows, intake questions (new vs. returning, insurance, service type), escalation logic, and which staff member gets paged for urgent matters. We connect to your scheduling platform, script and test the AI, and go live within 48 hours. The 7-day free trial requires no credit card and no setup fee. Our booking guarantee is concrete: capture 10 booked appointments in your first 30 days or receive a full refund. At a conservative $100 per appointment, that is $1,000 of recovered revenue against a sub-$500 service — the math is the guarantee. Flat $500/mo, no per-minute fees, no call caps, month-to-month.",
    },
  ],
  relatedServices: [],
  relatedLocations: ["san-jose", "sacramento", "los-angeles", "san-francisco-bay-area"],
};
