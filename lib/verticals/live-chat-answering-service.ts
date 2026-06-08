import type { VerticalConfig } from "./types";
import type { ServiceDetail } from "@/lib/services-data";

export const liveChatConfig: VerticalConfig = {
  slug: "live-chat-answering-service",

  meta: {
    title: "Live Chat Answering Service — 24/7 AI Chat + Phone for California SMBs",
    description:
      "One AI agent handles your website chat widget AND your phones — 24/7, bilingual EN/ES, flat $500/mo. Captures website visitors who won't call, qualifies them, books them. 7-day free trial, no credit card.",
    canonical: "/services/live-chat-answering-service",
  },

  verticalBar: {
    icon: "message-chatbot",
    label: "Built for California service businesses with a website",
  },

  oneLiner:
    "Most California service businesses lose over half their website visitors to unanswered chat and ignored contact forms. Our AI agent covers your chat widget and your phones in a single inbox — 24/7, bilingual EN/ES — so every visitor who won't call still gets a live response and a booked appointment.",

  hero: {
    eyebrow: "AI live chat + phone · 24/7 · Bilingual EN/ES",
    headline: "Turn every website visitor into a {italicWord}.",
    italicWord: "booked job",
    subhead: {
      seoBold: "24/7 bilingual live chat answering service for California service businesses.",
      body:
        "41% of website visitors expect a chat widget — and they'll leave without converting if no one answers. // source: https://www.freshworks.com/live-chat/statistics/ Our AI handles your chat and your phones from the same inbox, qualifies every lead, and books the appointment before the visitor clicks away.",
    },
    sampleBusinessName: "Bay Area Pro Services",
    chat: [
      { speaker: "bot", text: "Hi! Welcome to Bay Area Pro Services — how can we help you today?" },
      { speaker: "user", text: "Do you service Fremont? I need a quote ASAP." },
      { speaker: "bot", text: "Yes, we cover Fremont! Let me grab your info and get someone out this week." },
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
    sectionNum: "01 · The silent leak on your website",
    title: "The math behind every visitor who disappears.",
    stats: [
      {
        // source: https://www.freshworks.com/live-chat/statistics/
        num: "41%",
        label: "of website visitors expect a live chat widget — and leave without one",
      },
      {
        // source: https://www.intercom.com/blog/why-live-chat/
        num: "2.8×",
        label: "more likely to convert — website visitors who chat vs. those who don't (Forrester)",
      },
      {
        // source: https://www.nextiva.com/blog/live-chat-statistics.html
        num: "82%",
        label: "of chat inquiries go unanswered at most SMBs — those visitors bounce for good",
      },
    ],
    rankingNote:
      "Google uses engagement signals — time on site, return visits, direct navigation — as local-ranking inputs. A chat widget that actually responds keeps visitors on your site longer and converts them to customers who leave reviews and rebook. Businesses with zero live chat response effectively hand Google a signal that their site doesn't serve visitors well.",
  },

  vocQuote: {
    quote:
      "I filled out the contact form and heard nothing for three days. By then I'd already hired someone else.",
    attribution: "— What we hear from California homeowners and small-business clients every week",
  },

  scenarios: {
    sectionNum: "02 · This happened on your site last week",
    title: "The visitors you're already losing.",
    cards: [
      {
        time: "Tuesday 9:18 AM",
        body: "Someone lands on your site from a Google ad. They open the chat widget. No one answers in 2 minutes. They hit the back button and book with your competitor.",
      },
      {
        time: "Saturday 11:42 PM",
        body: "A homeowner needs a quote — not a phone call, just a quick chat question. You're asleep, the widget is offline. They fill out a competitor's form instead.",
      },
      {
        time: "Monday morning inbox",
        body: "Three contact forms from the weekend. Two of those people already hired someone else. The form is a black hole and they knew it before they submitted.",
      },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You built a website to get leads — not to miss them.",
    empathy:
      "You paid for the site, ran the ads, climbed the rankings — and visitors still slip through because there's no one on chat at 9 PM or on Saturday. Installing a widget isn't enough if no one's behind it 24/7. Hiring a chat agent on top of a phone receptionist is two payrolls for one inbox. We collapse both into one AI that covers your chat and your phones around the clock, in English and Spanish.",
    authority: [
      { num: "24/7", label: "Chat + phone covered — every hour, every day" },
      { num: "EN/ES", label: "Bilingual from the first message or ring" },
      { num: "1 inbox", label: "Chat, phone, SMS — unified so nothing slips through" },
      { num: "60 sec", label: "From chat or call ending to booking confirmation in your calendar" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI chat + phone agent works",
    title: "Three steps to capture every lead — on chat or phone.",
    steps: [
      {
        num: 1,
        heading: "Embed the widget + forward your phone",
        body: "One snippet on your site activates the chat widget. Forward your business line in 60 seconds. Both channels feed the same AI agent from day one.",
      },
      {
        num: 2,
        heading: "AI qualifies and books — chat or voice",
        body: "Whether the contact comes through chat, phone, or SMS, the same agent qualifies the lead, answers FAQs, and books the appointment. Handoff between channels is seamless — a visitor who starts in chat can finish over a call without repeating themselves.",
      },
      {
        num: 3,
        heading: "You see everything in one place",
        body: "Every chat thread, call transcript, and booked appointment appears in your CRM or calendar — plus an SMS summary within 60 seconds. Hot leads escalate to your cell immediately.",
      },
    ],
  },

  integrations: {
    label: "Connects with your chat and CRM stack",
    items: ["Website chat widget", "Intercom", "Drift", "Tidio", "Zapier", "Google Calendar", "CRM/SMS handoff"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "Your website runs ads overnight. Every visitor who opens the chat gets an instant response. Every contact form gets a follow-up in seconds, not days. By Monday morning your calendar is full of qualified appointments — and you didn't answer a single chat yourself.",
    items: [
      { icon: "message-check", text: "Every chat gets answered — including at 11 PM." },
      { icon: "calendar-check", text: "Your calendar fills from website visitors, not just calls." },
      { icon: "trending-up", text: "Ad spend converts — nothing leaks out the chat widget." },
      { icon: "mood-smile", text: "You run your business; the AI runs your inbox." },
    ],
    before: [
      { icon: "message-x", text: "Chat widget is offline after 6 PM." },
      { icon: "mail-off", text: "Contact forms sit for 48 hours." },
      { icon: "trending-down", text: "Paid traffic bounces without converting." },
      { icon: "mood-sad", text: "You're paying for ads that nobody follows up on." },
    ],
  },

  // VERBATIM from hvac.ts
  voices: {
    sectionNum: "06 · Voices",
    title: "Human-standard AI voice agents.",
    sub: "Out of the box, ready to use.",
    cards: [
      { name: "Professional Sarah", label: "Warm & friendly", sampleLine: "Hi, this is Sarah at Sunrise Heating..." },
      { name: "Executive Marcus", label: "Authoritative", sampleLine: "Thank you for calling Sunrise Heating & Air." },
      { name: "Casual Jamie", label: "Conversational", sampleLine: "Hey, Sunrise Heating — how can I help?" },
    ],
  },

  compare: {
    sectionNum: "07 · Compare",
    title: "What you'd pay otherwise.",
    rows: [
      { what: "Chat widget with no coverage", cost: "$0–$50/mo", result: "82% of chats go unanswered; visitors bounce" },
      { what: "Dedicated chat agent (part-time CA)", cost: "~$1,600/mo", result: "Business hours only, English only, phone separate" },
      { what: "Intercom / Drift with human agent team", cost: "$500–$2,000+/mo", result: "Still needs staff behind it 24/7" },
    ],
  },

  unlimited: {
    headline: "Most chat services cap agents or charge per seat. We don't.",
    competitors: [
      { name: "Tidio $29/mo base", cap: "3 agents, hours capped without upgrade" },
      { name: "Drift $2,500/mo+", cap: "Enterprise only; per-seat overages" },
      { name: "Smith.ai $255/mo", cap: "Capped minutes; phone and chat billed separately" },
    ],
  },

  pricingAudience:
    "For California service businesses losing paid-traffic leads to unanswered chat and ignored contact forms",

  faqs: [
    {
      q: "How does the live chat answering service work?",
      a: "We embed a chat widget on your website and forward your business phone line to our AI agent. From that moment on, every visitor who opens chat gets an instant response — 24/7, in English or Spanish. The same agent also answers your phones. Every qualifying conversation ends with a booked appointment in your calendar and an SMS summary to you within 60 seconds.",
    },
    {
      q: "Does the AI handle both chat and phone calls, or just one?",
      a: "Both — from the same agent, in the same inbox. A visitor can start in chat and ask for a callback; the AI hands off the context so they never repeat themselves. Chat transcripts, call transcripts, and bookings all appear in one place.",
    },
    {
      q: "What chat platforms does it integrate with?",
      a: "We support custom website widgets (a single embed snippet), Intercom, Drift, and Tidio out of the box. Zapier connects to any CRM or ticketing tool you already use. If you have a platform not on the list, ask during onboarding — most integrations ship in under two weeks.",
    },
    {
      q: "How fast does the AI respond to a chat message?",
      a: "Under 5 seconds on first message. Industry research shows 82% of chat users abandon after 12 minutes of silence and that any wait over 2 minutes risks losing the lead. Our AI responds instantly — there's no queue, no hold, no 'all agents are busy.'", // source: https://www.nextiva.com/blog/live-chat-statistics.html
    },
    {
      q: "Can the AI qualify leads and book appointments, or does it just collect contact info?",
      a: "It qualifies fully — service type, location, budget range, urgency, and any custom questions you specify during onboarding. It then books directly into your calendar or CRM. You receive a complete lead summary by SMS within 60 seconds of the conversation ending.",
    },
    {
      q: "Is there a contract or can I cancel anytime?",
      a: "Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI, drop the widget on your site, integrate your calendar or CRM, and go live before your next ad spend cycle.",
    },
    {
      q: "What is the booking guarantee?",
      a: "10 booked jobs in your first 30 days or a full refund. No asterisks.",
    },
    {
      q: "Is the service CCPA-compliant?",
      a: "Yes. Chat sessions and call recordings are disclosed at the start of every interaction. Data is encrypted at rest and in transit. Deletion requests honored within 30 days. HIPAA-aware mode is available on request.",
    },
  ],

  finalCta: {
    headline: "Your website should book jobs, not lose visitors.",
    sub: "Three minutes to know if this is for you.",
  },
};

export const liveChatDetail: ServiceDetail = {
  slug: "live-chat-answering-service",
  title: "Live Chat Answering Service — 24/7 AI Chat + Phone for California SMBs",
  metaDescription:
    "One AI agent covers your website chat widget and your phones 24/7 — bilingual EN/ES, flat $500/mo, no caps. Captures leads who won't call, qualifies them, and books them. 7-day free trial.",
  h1: "Live Chat Answering Service: Turn Every Website Visitor Into a Booked Job",
  intro:
    "Website visitors who open a chat widget and hear nothing back don't wait — they click away and book with whoever answered. Forrester research puts the conversion lift for chatted visitors at 2.8× over visitors who don't chat, and industry data shows 82% of chat inquiries go unanswered at most SMBs. // source: https://www.intercom.com/blog/why-live-chat/ Live Answer Service closes that gap with a single AI agent that covers your chat widget and your phones from one inbox — 24/7, in English and Spanish — for less than the cost of one part-time California chat agent per month. Every lead that comes through chat, phone, or contact form gets an instant response, a qualification conversation, and a booked appointment. You see everything in a 60-second SMS summary.",
  sections: [
    {
      heading: "One Agent, Two Channels: How Chat + Phone Works Together",
      content:
        "Most businesses treat live chat and phone answering as two separate problems requiring two separate hires or two separate tools. We collapse them: you embed one chat snippet on your site and forward your business line to us, and the same AI agent handles both from a unified inbox. A visitor who starts in chat can request a callback and the AI carries their context — service type, location, urgency — into the phone call without making them repeat themselves. A caller who prefers to confirm details via SMS gets that handoff automatically. The result is a seamless experience across every channel your customers actually use, covered 24/7, in English and Spanish, with zero additional headcount.",
    },
    {
      heading: "Why Instant Response Rate Matters More Than Chat Widget Brand",
      content:
        // source: https://www.nextiva.com/blog/live-chat-statistics.html
        "82% of customers abandon a live chat if they wait more than 12 minutes — and meaningful drop-off starts well before that. The industry target is 80% of chats answered within 20 seconds. Human chat agents, even well-staffed teams, can't sustain sub-20-second first response across nights, weekends, and lunch hours without significant labor cost. Our AI responds in under 5 seconds at any hour. For California service businesses running paid search — where you're paying $15–$40 per click — every chat that goes unanswered is a sunk ad dollar and a competitor's new customer.",
    },
    {
      heading: "What the AI Actually Does During a Chat Conversation",
      content:
        "The first message greets the visitor by business name and asks an open qualifier — 'How can we help you today?' — that's calibrated to your vertical. From there the AI follows a qualification script we build with you during onboarding: service type, zip code or city, urgency, preferred schedule, any verticals-specific questions (license required? site survey needed? emergency vs. routine?). For visitors who are price-shopping, the AI presents your service tiers without discounting. For visitors who are ready to book, it goes straight to calendar. For visitors who aren't ready, it captures name, email, and phone and logs them to your CRM for follow-up. Every session ends with a transcript, a lead score, and an SMS to you within 60 seconds.",
    },
    {
      heading: "Integrations: Chat Platforms, CRMs, and Booking Tools",
      content:
        "We embed on any website (WordPress, Squarespace, Wix, Webflow, custom HTML — one script tag). Pre-built integrations cover Intercom, Drift, and Tidio for businesses that already use those platforms. Zapier connects to HubSpot, Salesforce, Jobber, ServiceTitan, Housecall Pro, and most other CRMs or field-service tools without custom development. Google Calendar and Calendly integrations are standard. If your stack isn't on the pre-built list, request it during onboarding — most custom integrations ship in under two weeks. The goal is zero manual data entry: every lead the AI qualifies lands in your systems automatically.",
    },
    {
      heading: "Pricing, the Free Trial, and the Booking Guarantee",
      content:
        "Live Answer Service is a done-for-you managed service: we build the agent, write the scripts, integrate your tools, and run it for you. Flat $500/month, unlimited chats and calls, no per-minute fees, no overage charges, no seat costs. The 7-day free trial requires no credit card. Our booking guarantee is concrete: 10 booked jobs in your first 30 days or a full refund. Setup takes 48 hours from your kickoff call. Month-to-month with no long-term contract; annual prepay saves $900/year and waives the setup fee.",
    },
  ],
  relatedServices: [],
  relatedLocations: ["san-jose", "san-francisco-bay-area", "los-angeles", "sacramento"],
  name: "Live Chat Answering Service",
};
