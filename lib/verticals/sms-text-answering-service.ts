import type { VerticalConfig } from "./types";
import type { ServiceDetail } from "@/lib/services-data";

export const smsTextConfig: VerticalConfig = {
  slug: "sms-text-answering-service",

  meta: {
    title: "SMS & Text Answering Service — AI That Replies to Texts 24/7",
    description:
      "A text answering service that replies to every inbound SMS in seconds and texts back every missed call — books appointments and qualifies leads by text. Bilingual EN/ES, 24/7, flat $500/mo. 7-day free trial.",
    canonical: "/services/sms-text-answering-service",
  },

  verticalBar: {
    icon: "message-2",
    label: "Answers texts for California businesses",
  },

  oneLiner:
    "Customers text your business and hear nothing back for hours — or never. We answer every inbound text in seconds and text back every missed call automatically, so the conversation never goes cold and the booking never walks.",

  hero: {
    eyebrow: "AI text receptionist · Replies in seconds · Bilingual EN/ES",
    headline: "The text answering service that {italicWord} every message.",
    italicWord: "answers",
    subhead: {
      seoBold: "An SMS answering service that replies to every text and missed call 24/7.",
      body:
        "98% of texts get read — but most businesses take hours to reply, or never do. We answer every inbound SMS in seconds, text back every call you miss, and book the appointment by text before the caller moves on to the next result.",
    },
    sampleBusinessName: "Bay Area Comfort Pros",
    chat: [
      { speaker: "user", text: "Hi, do you have anyone who can come look at my water heater this week?" },
      { speaker: "bot", text: "We do — I can get you in Thursday morning or Friday afternoon. Which works? I'll lock it in by text." },
      { speaker: "user", text: "Thursday morning, thanks!" },
    ],
  },

  trustStrip: [
    { icon: "map-pin", label: "Made in California" },
    { icon: "shield-check", label: "CCPA-compliant recording" },
    { icon: "language", label: "Bilingual EN/ES" },
    { icon: "lock", label: "TCPA-aware texting" },
  ],

  stakes: {
    sectionNum: "01 · The texting gap",
    title: "The math behind every text you didn't answer.",
    stats: [
      {
        num: "98%",
        label: "SMS open rate — texts get read where voicemail and email don't", // https://www.gartner.com/en/digital-markets/insights/sms-marketing-statistics
      },
      {
        num: "90 sec",
        label: "median time to read a text — reply late and the customer has already moved on", // https://www.gartner.com/en/digital-markets/insights/sms-marketing-statistics
      },
      {
        num: "60%+",
        label: "of customers say they'd choose a business they can text over one they can't", // https://www.zipwhip.com/state-of-texting/
      },
    ],
    rankingNote:
      "Google sees roughly half of US phone calls through Android — including whether a missed call ever got a follow-up. A missed call that gets an instant text-back keeps the conversation (and the customer) yours instead of bleeding to the next business they call. A 100% response rate across calls and texts protects the Maps position your leads come from.",
  },

  vocQuote: {
    quote: "We had a whole inbox of texts nobody was watching. People asking to book, asking for quotes — sitting there for two days. Those were customers we just lost.",
    attribution: "— What we hear from California service-business owners every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The texts you're already losing.",
    cards: [
      {
        time: "8:10 PM Wednesday",
        body: "A customer texts your business line asking if you can come out tomorrow. You're done for the day and don't see it. By morning they've texted two competitors and booked whoever replied first.",
      },
      {
        time: "Call missed, no text",
        body: "Someone calls during your job and hangs up at voicemail. No text-back ever goes out. They assume you're closed or too busy and call the next listing — you never even knew they tried.",
      },
      {
        time: "The 'Click to Text' button",
        body: "Your Google Business Profile shows a text button. Customers tap it expecting a quick reply. The texts land in a phone nobody checks until evening — so the fastest, highest-intent leads are the ones you answer slowest.",
      },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You can't watch your texts and run the business at the same time.",
    empathy:
      "Customers expect a text answered like a conversation, not a support ticket — within minutes, not hours. But you're on a job, with a client, or asleep when half of them come in. Letting texts pile up unread is the same as sending calls to voicemail: the intent is highest the moment they reach out, and every hour of silence is a customer drifting to whoever replied. We watch the line for you — answering every text and texting back every missed call in seconds, around the clock, in English or Spanish.",
    authority: [
      {
        num: "24/7",
        label: "Every text answered and every missed call texted back, including 9 PM Sunday",
      },
      {
        num: "EN/ES",
        label: "Bilingual texting from the first message — no Spanish customer left waiting",
      },
      {
        num: "<60s",
        label: "Reply time on inbound texts and missed-call text-backs — measured in seconds",
      },
      {
        num: "1 thread",
        label: "Calls, texts, and bookings handled in one conversation — nothing falls through",
      },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI text receptionist works",
    title: "Three steps to a line that never goes silent.",
    steps: [
      {
        num: 1,
        heading: "Point your number at us",
        body: "60 seconds. We text-enable your existing business line — or provide one. Works with any provider; your number stays yours. Calls and texts both route to the AI.",
      },
      {
        num: 2,
        heading: "We answer every text and missed call",
        body: "Inbound SMS gets a real reply in seconds. Every unanswered call triggers an instant text-back. The AI qualifies the lead, answers common questions, and books the slot — by text, in English or Spanish.",
      },
      {
        num: 3,
        heading: "You get the summary, the booking lands",
        body: "Appointments push into Calendly, Acuity, Google Calendar, Jobber, or your CRM within 60 seconds. You get an SMS summary of every conversation. Anything needing your judgement is flagged and escalated.",
      },
    ],
  },

  integrations: {
    label: "Texts, books, and logs into your stack",
    items: [
      "Twilio",
      "RingCentral",
      "Google Business Profile messaging",
      "Calendly",
      "Acuity Scheduling",
      "Google Calendar",
      "Jobber",
      "ServiceTitan",
      "HubSpot",
    ],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "You stop checking your business texts at red lights. Every message that comes in — at 8 AM or 11 PM, in English or Spanish — gets a real reply within a minute, and every call you miss gets texted back before the caller dials anyone else. You read the summaries when you have time, not in a panic.",
    items: [
      { icon: "message-check", text: "Every inbound text answered in seconds, day or night." },
      { icon: "phone-incoming", text: "Every missed call gets an instant text-back — no lead goes dark." },
      { icon: "calendar-check", text: "Bookings get confirmed by text before the customer shops around." },
      { icon: "mood-smile", text: "Your text inbox stops being a pile of missed revenue." },
    ],
    before: [
      { icon: "message-off", text: "Texts sit unread for hours — or days." },
      { icon: "phone-x", text: "Missed calls vanish with no follow-up." },
      { icon: "trending-down", text: "High-intent leads book whoever replied first — not you." },
      { icon: "mood-sad", text: "You're refreshing your inbox between jobs, still missing messages." },
    ],
  },

  voices: {
    sectionNum: "06 · Voices",
    title: "Human-standard AI agents.",
    sub: "Out of the box, ready to use.",
  },

  compare: {
    sectionNum: "07 · Compare",
    title: "What you'd pay otherwise.",
    rows: [
      { what: "Unwatched text inbox", cost: "$0/mo", result: "Texts read hours late; high-intent leads book a competitor first" },
      {
        what: "Full-time CA receptionist watching texts",
        cost: "$4,000–$6,000/mo", // https://ringeden.com/blog/how-much-does-a-full-time-receptionist-cost
        result: "9–5 only, English only, can't watch the line overnight",
      },
      { what: "Auto-reply bot / canned text", cost: "$30–$100/mo", result: "One robotic 'we'll get back to you' — no real conversation, no booking" },
    ],
  },

  unlimited: {
    headline: "Most services take a message. We hold the whole text conversation.",
    competitors: [
      { name: "Voicemail-to-text only", cap: "Transcribes — doesn't reply or book" },
      { name: "Canned auto-responder $49/mo", cap: "One templated text, no two-way conversation" },
      { name: "Per-message texting platforms", cap: "You still have to write and send every reply" },
    ],
  },

  pricingAudience:
    "For California businesses losing customers to an inbox of unanswered texts and missed calls that never got a follow-up",

  faqs: [
    {
      q: "What is an SMS or text answering service?",
      a: "It's a service that watches your business text line and replies to every inbound message — and texts back every call you miss — without you lifting a finger. Instead of a customer's text sitting unread for hours, our AI answers in seconds, holds a real two-way conversation, answers common questions, and books the appointment by text. It's the texting equivalent of a 24/7 receptionist, in English or Spanish.",
    },
    {
      q: "How is this different from a voicemail-to-text or auto-reply bot?",
      a: "Voicemail-to-text just transcribes a message and leaves the reply to you. A basic auto-responder fires one canned 'we'll get back to you' text and stops. We do neither — the AI carries the full conversation: it understands the question, gives a real answer, qualifies the lead, and books the slot, all by text. The customer experiences a competent front desk replying, not a robot stalling.",
    },
    {
      q: "Does it text back missed calls automatically?",
      a: "Yes. Every call that goes unanswered triggers an instant text-back within seconds — 'Sorry we missed you, how can we help?' — and the AI takes the conversation from there: answering questions, qualifying the job, and booking the appointment. Missed-call text-back is one of the highest-ROI features we run, because it recovers leads you'd otherwise never know called.",
    },
    {
      q: "Can it handle Spanish-language texts?",
      a: "Yes. Native EN/ES on every account at no upcharge. The AI detects the customer's language from their first message and replies in the same language — same qualifying questions, same booking flow, same summary to you.",
    },
    {
      q: "Will it book appointments and send to my calendar?",
      a: "Yes. The AI books directly into Calendly, Acuity, Google Calendar, Jobber, ServiceTitan, or your CRM in real time, confirms by text, and sends you an SMS summary within 60 seconds. The customer leaves the text thread with a confirmed booking, not a promise to hear back.",
    },
    {
      q: "Is business texting compliant — am I going to get in trouble with TCPA?",
      a: "We run TCPA-aware texting: the AI only texts people who texted you first or whose call you missed (both established business-relationship cases), honors STOP/opt-out instantly, and timestamps consent. We don't do cold or bulk outbound marketing texts from your line. Conversations are logged and CCPA-compliant.",
    },
    {
      q: "How long does setup take and is there a contract?",
      a: "48 hours from your kickoff call — we text-enable your line, script the AI for your business, and go live. Month-to-month, cancel anytime. The 7-day free trial requires no credit card and no setup fee. Flat $500/mo, unlimited texts and calls, no per-message fees.",
    },
  ],

  finalCta: {
    headline: "Your texts should answer themselves — not pile up unread.",
    sub: "Three minutes to know if this is for you.",
  },
};

export const smsTextDetail: ServiceDetail = {
  slug: "sms-text-answering-service",
  title: "SMS & Text Answering Service — AI That Replies 24/7 | Live Answer Service",
  metaDescription:
    "An AI text answering service that replies to every inbound SMS in seconds and texts back every missed call — qualifying leads and booking appointments by text. Bilingual EN/ES, flat $500/mo, 7-day free trial.",
  h1: "The Text Answering Service That Replies to Every Message in Seconds",
  intro:
    "Customers would rather text your business than call it — and the data backs them up: SMS messages see a 98% open rate and get read within about 90 seconds, while more than 60% of customers say they'd choose a business they can text over one they can't. The problem is that most businesses treat their text inbox like email: messages sit unread for hours, or nobody is watching it at all. Every one of those texts is a high-intent lead drifting to whichever competitor replied first. Live Answer Service closes that gap on the texting channel: we answer every inbound SMS in seconds, text back every missed call automatically, hold a real two-way conversation in English or Spanish, and book the appointment by text — 24/7, for a flat monthly rate with no per-message fees.",
  sections: [
    {
      heading: "What 'Answering Texts' Actually Means on Your Line",
      content:
        "An unwatched text inbox is the new voicemail — and a one-line auto-responder ('Thanks, we'll get back to you') is barely better, because it stalls the customer instead of helping them. Live Answer Service does neither. When a customer texts your business line, our AI replies within seconds and holds a genuine conversation: it understands the question, answers it with your business's real information, qualifies the lead (service needed, location, urgency), and books the appointment directly into your calendar — all inside the same text thread. The customer experiences what it feels like to text a sharp front-desk person who replies instantly and gets things done. You experience a text line that handles itself while you're on a job, with a client, or asleep. We text-enable your existing business number (or provide one), so customers reach you at the number they already have.",
    },
    {
      heading: "Missed-Call Text-Back: Recovering the Leads You Never Knew You Lost",
      content:
        "The single highest-ROI piece of a text answering service is missed-call text-back. When a call to your business goes unanswered — you're on another line, on a job, or it's after hours — the system fires an instant text to the caller within seconds: 'Sorry we missed you — how can we help?' The AI then carries the conversation by text, qualifying the job and booking the slot. This matters because most callers who hit voicemail simply hang up and dial the next business; you never even learn they tried to reach you. An automatic text-back converts that dead-end into a live conversation before the caller moves on. For a business that misses even a handful of calls a day, recovering a fraction of them as text conversations is, in practice, worth more than the entire cost of the service.",
    },
    {
      heading: "Compliant Two-Way Texting, Built In",
      content:
        "Business texting has rules, and getting them wrong is expensive — so compliance is built into how the service runs, not bolted on. The AI only texts people who have an established relationship with you: customers who texted your line first, or callers whose call you missed. It does not send cold or bulk marketing texts from your number. Every conversation honors STOP and opt-out requests instantly, consent is timestamped and logged, and all threads are stored CCPA-compliant with 90-day history. This keeps you on the right side of TCPA while still letting the AI do the one thing that actually drives revenue — replying fast and conversationally to customers who reached out to you.",
    },
    {
      heading: "What Setup and the 7-Day Trial Look Like",
      content:
        "Live Answer Service is a done-for-you managed service — we build and run the agent, you don't configure anything. The 30-minute kickoff call covers your common questions and answers, services and pricing you're comfortable quoting by text, booking rules, escalation logic, and which calendar or CRM to book into. We text-enable your line, script and test the AI, and go live within 48 hours. Texts and calls are both handled — there's no separate plan for each. The 7-day free trial requires no credit card and no setup fee. Flat $500/mo, unlimited texts and calls, no per-message fees, month-to-month. A single recovered job typically pays for the month — the rest of the conversations the AI handles are upside.",
    },
  ],
  relatedServices: [],
  relatedLocations: ["san-jose", "sacramento", "los-angeles", "san-francisco-bay-area"],
};
