import type { VerticalConfig } from "./types";
import type { ServiceDetail } from "@/lib/services-data";

export const outboundReminderConfig: VerticalConfig = {
  slug: "outbound-reminder-answering-service",

  meta: {
    title: "Outbound Appointment Reminder Call Service — Cut No-Shows",
    description:
      "Done-for-you outbound appointment reminder call service for California SMBs. AI calls every booked customer to confirm, then reschedules anyone who can't make it — before the empty slot costs you. Bilingual EN/ES. Flat $500/mo, no caps.",
    canonical: "/services/outbound-reminder-answering-service",
  },

  verticalBar: {
    icon: "phone-outgoing",
    label: "Outbound reminder calls for California service businesses",
  },

  oneLiner:
    "The average service business loses 20–30% of its booked appointments to no-shows — and most of those slots never get filled. We call every booked customer before their appointment, confirm they're coming, and reschedule the ones who aren't, so your calendar stays full instead of bleeding revenue into empty time slots.",

  hero: {
    eyebrow: "Outbound reminder calls · Confirm · Reschedule · Bilingual EN/ES",
    headline: "Stop paying for {italicWord} that never show up.",
    italicWord: "appointments",
    subhead: {
      seoBold: "Done-for-you outbound appointment reminder call service for California businesses.",
      body:
        "You already booked the job. Our AI calls them 48 hours out to confirm, and if they can't make it we reschedule the slot on the spot — in English or Spanish — before it turns into a $200 hole in your day.",
    },
    sampleBusinessName: "Bay Area Wellness Studio",
    chat: [
      {
        speaker: "bot",
        text: "Hi, this is a reminder from Bay Area Wellness — you have an appointment tomorrow at 2 PM. Can you confirm you'll be there?",
      },
      { speaker: "user", text: "Oh — actually I need to reschedule. Something came up." },
      {
        speaker: "bot",
        text: "No problem! I have Thursday at 10 AM or Friday at 3 PM open. Which works better for you?",
      },
    ],
  },

  trustStrip: [
    { icon: "map-pin", label: "Made in California" },
    { icon: "shield-check", label: "CCPA-compliant recording" },
    { icon: "language", label: "Bilingual EN/ES" },
    { icon: "lock", label: "HIPAA-aware mode available" },
  ],

  stakes: {
    sectionNum: "01 · The no-show problem",
    title: "The math behind every empty slot.",
    stats: [
      {
        num: "23–30%",
        // source: https://curogram.com/blog/average-patient-no-show-rate
        label: "of booked appointments are no-shows across service industries",
      },
      {
        num: "$200+",
        // source: https://www.prospyrmed.com/blog/post/no-show-rates-impact-revenue
        label: "in direct revenue lost per missed appointment — before staff overhead",
      },
      {
        num: "38%",
        // source: https://www.klara.com/blog/text-message-appointment-reminders-reduce-no-shows-by-38-study-finds
        label: "fewer no-shows when customers receive a proactive reminder call or text",
      },
    ],
    rankingNote:
      "Google sees engagement signals from Android calls — businesses that consistently fill their schedules and generate completed appointments build stronger local-rank signals than shops running at 70% capacity. A full calendar is also a signal machine.",
  },

  vocQuote: {
    quote:
      "We had a 25% no-show rate. We thought that was just normal. Turns out the ones who were going to cancel would reschedule if someone actually called them first.",
    attribution: "— What we hear from California service-business owners every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The empty slots you're already absorbing.",
    cards: [
      {
        time: "Tuesday 10 AM",
        body: "The plumber shows up. No one's home. The homeowner forgot — and never called. That's two hours of labor and a $280 slot gone.",
      },
      {
        time: "Friday afternoon",
        body: "Three back-to-back no-shows at your salon. Each one was booked a week ago. None of them got a reminder call. The chair sat empty.",
      },
      {
        time: "Last-minute Monday",
        body: "A client cancels at 8 AM for an 8:30 appointment. No one on your waitlist knows the slot opened. It goes unfilled. You pay staff anyway.",
      },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You already did the hard part — you booked the job.",
    empathy:
      "Winning a new customer and booking the appointment is the hard part. Losing that booked job to a no-show — because no one remembered to call them — is a different kind of pain. You've already sold it. You just didn't keep it. Most service businesses absorb no-shows as a cost of doing business when the real fix is a single outbound call placed 24–48 hours before the appointment.",
    authority: [
      {
        num: "48 hr",
        label: "Reminder call placed before every appointment — the window that actually works",
      },
      { num: "EN/ES", label: "Bilingual from the first ring — no customer left behind" },
      {
        num: "Live reschedule",
        label: "If they can't make it, we rebook on the call — slot stays filled",
      },
      { num: "8+", label: "Calendar and scheduling integrations — no new software to learn" },
    ],
  },

  plan: {
    sectionNum: "04 · How your outbound reminder service works",
    title: "Three steps to a no-show rate that stops hurting.",
    steps: [
      {
        num: 1,
        heading: "Connect your calendar",
        body: "We sync with Google Calendar, Calendly, Acuity, Jobber, or any of 8+ platforms. Setup takes 48 hours — we configure the AI, not you.",
      },
      {
        num: 2,
        heading: "We call every booked customer",
        body: "48 hours before each appointment, our AI places an outbound call — bilingual EN/ES — confirms attendance, answers basic questions, and flags any issues to you immediately.",
      },
      {
        num: 3,
        heading: "Can't make it? We reschedule on the spot",
        body: "If the customer needs to move the appointment, we offer available slots, book the new time, and update your calendar in real time — so the empty slot gets filled before you even know about it.",
      },
    ],
  },

  integrations: {
    label: "Syncs with your scheduling software",
    items: [
      "Google Calendar",
      "Calendly",
      "Acuity",
      "Dentrix",
      "Jane",
      "SimplePractice",
      "Boulevard",
      "Jobber",
    ],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "Your technician heads out at 8 AM — all four jobs are confirmed. Your front desk handles service, not phone tag. Your revenue-per-day climbs because the slots you were already selling are actually filled. You didn't chase a single customer yourself.",
    items: [
      { icon: "calendar-check", text: "Every booked slot confirmed before the day starts." },
      { icon: "refresh", text: "Cancellations turn into reschedules automatically." },
      { icon: "trending-up", text: "Revenue-per-slot climbs without new marketing spend." },
      { icon: "mood-smile", text: "You stop absorbing no-shows as just \"the cost of doing business.\"" },
    ],
    before: [
      { icon: "calendar-off", text: "25% of booked jobs go empty." },
      { icon: "clock", text: "Staff shows up for appointments that don't." },
      { icon: "trending-down", text: "Revenue leaks out of slots you already sold." },
      { icon: "mood-sad", text: "You accept no-shows because you don't have time to chase them." },
    ],
  },

  voices: {
    sectionNum: "06 · Voices",
    title: "Human-standard AI voice agents.",
    sub: "Out of the box, ready to use.",
    cards: [
      {
        name: "Professional Sarah",
        label: "Warm & friendly",
        sampleLine: "Hi, this is Sarah calling to confirm your appointment...",
      },
      {
        name: "Executive Marcus",
        label: "Authoritative",
        sampleLine: "Thank you for booking — I'm calling to confirm your upcoming visit.",
      },
      {
        name: "Casual Jamie",
        label: "Conversational",
        sampleLine: "Hey! Just a quick reminder about your appointment tomorrow...",
      },
    ],
  },

  compare: {
    sectionNum: "07 · Compare",
    title: "What you'd pay otherwise.",
    rows: [
      {
        what: "Manual front-desk reminder calls",
        cost: "~$1,800/mo",
        result: "Part-time staff, English only, limited hours",
      },
      {
        what: "Reminder-only SMS platform (Solutionreach, Klara)",
        cost: "$300–$600/mo",
        result: "Texts only — no one reschedules on the spot",
      },
      {
        what: "No reminders at all",
        cost: "$0/mo spent",
        result: "23–30% no-show rate eating $25K+/yr in empty slots",
      },
    ],
  },

  unlimited: {
    headline: "Most reminder tools send texts and stop there. We call, confirm, and reschedule.",
    competitors: [
      { name: "Solutionreach $299/mo", cap: "Texts only — no live reschedule" },
      { name: "Klara $200/mo", cap: "Messaging only, no outbound voice" },
      { name: "Luma Health $200+/mo", cap: "Healthcare-only, no voice rescheduling" },
    ],
  },

  pricingAudience:
    "For California service businesses losing $25K/yr to no-shows they never tried to prevent",

  faqs: [
    {
      q: "How does the outbound reminder call service work?",
      a: "We sync with your calendar. 48 hours before every booked appointment, our AI places an outbound call to the customer in English or Spanish to confirm attendance. If they need to reschedule, the AI offers available slots and books the new time on the spot, updating your calendar immediately. You receive a summary of every call.",
    },
    {
      q: "What if the customer doesn't answer the reminder call?",
      a: "The AI leaves a brief voicemail and follows up with a text confirmation link. If we still don't get a confirmation within 4 hours, we flag the appointment to you as an unconfirmed risk so you can decide how to handle it.",
    },
    {
      q: "Can you reschedule into my calendar automatically?",
      a: "Yes — for Google Calendar, Calendly, Acuity, Jobber, and all other supported integrations, the AI sees your real-time availability and books the new slot immediately on the call. No manual follow-up needed on your end.",
    },
    {
      q: "How much can this actually reduce my no-show rate?",
      a: "Studies across service industries consistently show 29–38% fewer no-shows with proactive reminder calls and texts. A manual phone reminder reduces non-attendance by 39% of baseline, per a systematic review in the American Journal of Medicine. For a business running a 25% no-show rate, that translates to recovering 8–10 lost slots per 40 booked appointments.",
    },
    {
      q: "Is there a contract or can I cancel anytime?",
      a: "Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We connect to your scheduling software, configure the reminder flow, and go live before your next appointment cycle.",
    },
    {
      q: "Does this replace my inbound answering service?",
      a: "No — this is a separate outbound service. We also offer a 24/7 inbound AI receptionist. Many clients run both: outbound reminders cut no-shows, inbound answering fills new slots. Together they keep the calendar full from both ends.",
    },
  ],

  finalCta: {
    headline: "You already booked the job. Let's make sure it actually happens.",
    sub: "Three minutes to know if this is for you.",
  },
};

export const outboundReminderDetail: ServiceDetail = {
  slug: "outbound-reminder-answering-service",
  name: "Outbound Reminder Calls",
  title: "Outbound Appointment Reminder Call Service — Cut No-Shows for California SMBs",
  metaDescription:
    "Done-for-you outbound appointment reminder call service. AI calls every booked customer 48 hours out to confirm, then reschedules anyone who can't make it — before the empty slot costs you. Bilingual EN/ES. Flat $500/mo.",
  h1: "Outbound Appointment Reminder Call Service",
  intro:
    "The average service business loses 23–30% of its booked appointments to no-shows — and most of those slots go unfilled because no one called to confirm or catch the cancellation in time to rebook. The fix is a single outbound call placed 48 hours before every appointment. If the customer confirms, you show up. If they need to reschedule, the AI offers your next available slot on the spot and updates the calendar before the call ends. No staff time. No text-only tools that leave rescheduling to the customer. We build and run the entire outbound reminder workflow for you — bilingual EN/ES, synced to your calendar, at a flat $500/mo with no per-call fees.",
  sections: [
    {
      heading: "The Reminder → Confirm → Reschedule Flow",
      content:
        "Our AI places an outbound call to every booked customer 48 hours before their appointment. The call is short: it states the business name, appointment time, and location, then asks the customer to confirm. If they confirm, we log it and you're done. If they need to reschedule, the AI checks your real-time availability and offers two or three open slots. The customer picks one, the AI books it, and your calendar updates immediately — all before the original slot goes empty. If the customer doesn't answer, the AI leaves a voicemail and sends a follow-up text with a one-tap confirmation link. Any appointment that remains unconfirmed within four hours is flagged to you as an at-risk slot so you can make a judgment call. The whole flow happens in the background while you run your business.",
    },
    {
      heading: "What the Data Says About Reminder Calls",
      content:
        "A systematic review published in the American Journal of Medicine found that manual phone reminders reduced non-attendance by 39% of baseline rates, and automated voice or text reminders reduced non-attendance by 29%. A study cited by Klara found text reminders alone cut no-show rates by 38%. Mayo Clinic's Jacksonville facility reduced no-shows by nearly 50% using two-day-prior text reminders. For a service business running at a 25% no-show rate — close to the national average across healthcare, fitness, home services, and personal care — those figures mean recovering 7–10 filled slots per 40 booked appointments per month. At $150–$300 per service appointment, that is $1,000–$3,000/month in recovered revenue from a $500/mo service.",
    },
    {
      heading: "Integrations: We Work in Your Stack",
      content:
        "We sync with the scheduling software you already use: Google Calendar, Calendly, Acuity Scheduling, Jobber, Dentrix, Jane App, SimplePractice, and Boulevard. The integration is bidirectional — we read your confirmed appointments, place the reminder calls, and write reschedules back in real time. No new software to learn, no manual import/export. If you use a platform not on this list, request a custom integration; we ship most in under two weeks. The AI is also aware of buffer times, cancellation windows, and any custom booking rules you want enforced — so it won't offer a slot that conflicts with a travel block or a prep time requirement.",
    },
    {
      heading: "Done-for-You — Not a Tool You Have to Configure",
      content:
        "This is a managed service. You do not configure a bot. You do not write scripts. You do not train a model. Our team handles the onboarding call (30 minutes), connects to your calendar, scripts the reminder flow in your business's tone and language, and goes live within 48 hours. If your customer mix is primarily Spanish-speaking, the AI leads in Spanish. If you want the AI to offer a discount for customers who reschedule instead of canceling outright, we configure that. The 7-day free trial has no credit card requirement, and our booking guarantee applies here too: if you don't capture measurable no-show recovery in the first 30 days, you get a full refund.",
    },
  ],
  relatedServices: [],
  relatedLocations: ["san-jose", "sacramento", "los-angeles", "san-francisco-bay-area"],
};
