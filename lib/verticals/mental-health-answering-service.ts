import type { VerticalConfig } from "./types";
import type { ServiceDetail } from "@/lib/services-data";

/**
 * Mental Health / Therapy vertical — solo therapists, group practices,
 * counseling centers, and behavioral health clinics across California.
 *
 * Core angle: HIPAA-aware warm intake, never clinical advice, crisis-safe
 * protocol (988 redirect + clinician flag), new-client scheduling into
 * behavioral-health EHR/scheduling software.
 */
export const mentalHealthConfig: VerticalConfig = {
  slug: "mental-health-answering-service",

  meta: {
    title: "Mental Health Answering Service — 24/7 HIPAA-Aware Intake",
    description:
      "24/7 bilingual AI answering service for California therapy practices. Warm new-client intake, insurance questions, scheduling into SimplePractice, TherapyNotes, or Jane. HIPAA-aware. Flat $500/mo, no per-minute fees. 7-day free trial.",
    canonical: "/services/mental-health-answering-service",
  },

  verticalBar: {
    icon: "heart",
    label: "Built for California therapy practices",
  },

  oneLiner:
    "California therapists lose new clients every week to voicemail — 67% of callers who hit voicemail never leave a message, and prospective clients in distress often call once and move on. We answer every call 24/7 with warm, sensitive scripting, handle the intake and scheduling, and keep every interaction HIPAA-aware — so you can be present in session without turning away the people who need you.",

  hero: {
    eyebrow: "AI intake specialist · 24/7 · Bilingual EN/ES",
    headline: "Never turn away a new {italicWord} to voicemail.",
    italicWord: "client",
    subhead: {
      seoBold: "24/7 bilingual mental health answering service for California therapy practices.",
      body:
        "You can't pick up mid-session. You shouldn't have to. We answer every call with warmth and care, walk prospective clients through your intake questions, handle insurance and scheduling, and flag anything urgent — so your next session is already booked before the current one ends.",
    },
    sampleBusinessName: "Serene Counseling Group",
    chat: [
      { speaker: "bot", text: "Thank you for calling. I'm here to help. Are you looking to get started with therapy?" },
      { speaker: "user", text: "Yes — I've been putting this off for a while. I wasn't sure who to call." },
      { speaker: "bot", text: "I'm really glad you reached out. Let me find you an appointment that works for you." },
    ],
  },

  // VERBATIM from hvac.ts per spec
  trustStrip: [
    { icon: "map-pin", label: "Made in California" },
    { icon: "shield-check", label: "CCPA-compliant recording" },
    { icon: "language", label: "Bilingual EN/ES" },
    { icon: "lock", label: "HIPAA-aware mode available" },
  ],

  stakes: {
    sectionNum: "01 · The intake gap",
    title: "The math behind every missed call.",
    stats: [
      {
        num: "67%",
        // source: https://captureclient.com/blog/why-67-percent-callers-never-leave-voicemail
        label: "of prospective clients who reach voicemail never leave a message — and most don't call back",
      },
      {
        num: "$3,000–$5,400",
        // source: https://navazonbh.com/client-lifetime-value/ — behavioral health outpatient LTV $4K–$6K; https://www.myrecovery.pro/p/calculating-lifetime-value-of-clients
        label: "lifetime value of each new therapy client your voicemail just turned away", /* est. midpoint of $4K–$6K behavioral health LTV */
      },
      {
        num: "~20%",
        // source: American Psychological Association, cited at https://www.myrecovery.pro/p/calculating-lifetime-value-of-clients
        label: "of therapy clients end prematurely — every initial friction point raises that risk before therapy even starts",
      },
    ],
    rankingNote:
      "Google sees roughly half of US phone calls through Android — whether you answered, how long the conversation lasted, and whether the caller immediately dialed another practice. Practices that let calls fall to voicemail measurably drop in local Maps rank. A 100% answer rate protects the visibility that brings new clients to you in the first place.",
  },

  vocQuote: {
    quote:
      "I finally worked up the courage to call a therapist and got voicemail. I didn't leave a message. I told myself I'd try again — but I didn't, not for months.",
    attribution: "— What prospective therapy clients tell us they experience every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The calls you're already losing.",
    cards: [
      {
        time: "3:12 PM Thursday",
        body: "You're in session. Someone nervous about starting therapy calls for the first time. They hit voicemail. They hang up without leaving a message and don't call back.",
      },
      {
        time: "7:45 PM",
        body: "A working parent can only call after the kids are in bed. Your office line goes dark after 5. They try another practice that has evening availability — and schedule there instead.",
      },
      {
        time: "New client, Monday morning",
        body: "They called Friday afternoon, left a voicemail, got a callback Tuesday. By then they'd found another therapist. Your first open session slot stays empty.",
      },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You didn't become a therapist to screen your own calls.",
    empathy:
      "You became a therapist to help people — not to juggle intake paperwork between sessions, call back insurance questions at lunch, and feel guilty every time you see a missed-call notification. But the phone is still the front door. A prospective client who works up the courage to call and reaches voicemail may not try again for months. We handle that front door 24/7, with warmth, patience, and a protocol that keeps every interaction appropriate — so you can give every session your full attention.",
    authority: [
      { num: "24/7", label: "Every call, every hour — including evenings and weekends when clients most often reach out" },
      { num: "EN/ES", label: "Bilingual from the first ring — no upcharge" },
      { num: "HIPAA", label: "HIPAA-aware scripting and data handling on every account" },
      { num: "5+", label: "Native sync with SimplePractice, TherapyNotes, Headway, Calendly, Jane" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI intake specialist works",
    title: "Three steps to a full therapy caseload.",
    steps: [
      {
        num: 1,
        heading: "Forward your phone",
        body: "60 seconds. Works with any provider — Twilio, Google Voice, RingCentral, Verizon, AT&T. Your number stays yours.",
      },
      {
        num: 2,
        heading: "We handle the intake",
        body: "Warm greeting, new-client questions, insurance verification basics, and scheduling — 24/7, in English or Spanish. If a caller expresses a crisis or self-harm concern, the AI immediately directs them to 988 or emergency services and sends you an alert per your protocol. No advice, no assessment — just the right redirect, immediately.",
      },
      {
        num: 3,
        heading: "You get a full schedule",
        body: "Appointments booked directly into SimplePractice, TherapyNotes, Headway, Calendly, or Jane — plus an SMS summary within 60 seconds. You review transcripts, not call logs.",
      },
    ],
  },

  integrations: {
    label: "Syncs with your practice management software",
    items: ["SimplePractice", "TherapyNotes", "Headway", "Calendly", "Jane"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "You finish your last session at 6 PM. You close your laptop. While you were with clients, three prospective clients called, got a warm and caring intake, and booked their first appointments. Your schedule is full. You didn't miss a single one.",
    items: [
      { icon: "calendar-check", text: "Your intake calendar fills between sessions." },
      { icon: "heart-handshake", text: "Prospective clients feel heard from the first ring." },
      { icon: "trending-up", text: "Caseload grows without an expensive admin hire." },
      { icon: "mood-smile", text: "You're present in session — not watching for missed calls." },
    ],
    before: [
      { icon: "phone-ringing", text: "You call back between sessions, mid-notes." },
      { icon: "moon-off", text: "Evening callers go to voicemail and don't leave a message." },
      { icon: "trending-down", text: "New clients find another practice before you call back." },
      { icon: "mood-sad", text: "Admin friction follows you into every session." },
    ],
  },

  // VERBATIM from hvac.ts per spec
  voices: {
    sectionNum: "06 · Voices",
    title: "Human-standard AI voice agents.",
    sub: "Out of the box, ready to use.",
  },

  compare: {
    sectionNum: "07 · Compare",
    title: "What you'd pay otherwise.",
    rows: [
      { what: "Voicemail", cost: "$0/mo", result: "67% of prospective clients never leave a message" },
      { what: "Part-time admin (CA)", cost: "~$1,800/mo", result: "Business hours only, no evenings or weekends" },
      { what: "Human answering service", cost: "$300–$500/mo", result: "Per-minute fees, no EHR sync, mental health scripts extra" },
    ],
  },

  unlimited: {
    headline: "Most answering services cap your minutes and charge extra for mental health scripting. We don't.",
    competitors: [
      { name: "Simple Phones $49/mo", cap: "100 calls cap" },
      { name: "AnswerConnect $350/mo", cap: "$1.85/min overage" },
      { name: "Upfirst $24.95/mo", cap: "30 calls cap" },
    ],
  },

  pricingAudience:
    "For therapy practices that lose a $4,000–$6,000 lifetime client every time their voicemail picks up",

  faqs: [
    {
      q: "How does the AI handle a caller who mentions a crisis or self-harm?",
      a: "This is the protocol we're most careful about. The AI is scripted to immediately — without hesitation — direct any caller who mentions a crisis, self-harm, or suicidal ideation to call 988 (Suicide & Crisis Lifeline) or 911. It does not attempt to assess, counsel, or de-escalate. It then sends you an alert through your specified channel (SMS, email, or EHR flag) per the protocol you define during onboarding. The AI's role ends at the redirect — all clinical judgment stays with you and your team.",
    },
    {
      q: "Is the AI HIPAA-compliant?",
      a: "We operate in HIPAA-aware mode: call recordings and transcripts are encrypted in transit and at rest, access is role-restricted, and we sign a Business Associate Agreement (BAA) with every practice on our platform. The AI is scripted to collect only the intake information you specify — name, contact, insurance basics, appointment preference — and never stores sensitive clinical information. We recommend a HIPAA privacy notice on your website and a two-party consent disclosure at the start of recorded calls (we include this by default in California).",
    },
    {
      q: "Does the AI give clinical advice or therapeutic guidance?",
      a: "No — this is a hard guardrail. The AI is explicitly scripted to say it cannot provide clinical guidance, assessments, or recommendations, and it tells callers so directly if asked. Its role is warm, professional intake: answering questions about your practice, handling scheduling, and routing the call appropriately. It will never attempt to suggest diagnoses, treatment approaches, or coping strategies.",
    },
    {
      q: "Which EHR and scheduling platforms do you integrate with?",
      a: "We have native integrations with SimplePractice, TherapyNotes, Headway, Calendly, and Jane App. Appointments push directly as new-client bookings with intake notes attached. If you use a platform not on this list, reach out — we build custom integrations for most behavioral health tools within two weeks.",
    },
    {
      q: "Can you handle insurance verification questions?",
      a: "Yes — within limits. The AI can collect a caller's insurance carrier, plan name, and member ID, and answer basic questions about whether your practice accepts a given carrier (based on the list you provide). It cannot run a real-time eligibility check or quote copays. For anything requiring live verification, it books the caller and flags the insurance details for your admin team to confirm before the first session.",
    },
    {
      q: "Is there a contract or can I cancel anytime?",
      a: "Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI for your practice's voice and intake questions, integrate your scheduling software, and go live before you lose another week of new-client calls.",
    },
    {
      q: "Can the AI answer in Spanish?",
      a: "Yes — bilingual EN/ES is standard on every account, no upcharge. The AI detects the caller's language in the first few seconds and switches to native Spanish. California has millions of Spanish-speaking residents who face real barriers finding therapists they can communicate with comfortably; we make sure language is never the reason a new client hangs up.",
    },
  ],

  finalCta: {
    headline: "Your practice should grow from sessions, not voicemails.",
    sub: "Three minutes to know if this is for you.",
  },
};

export const mentalHealthDetail: ServiceDetail = {
  slug: "mental-health-answering-service",
  title: "Mental Health Answering Service — 24/7 HIPAA-Aware AI Intake",
  metaDescription:
    "AI intake specialist for California therapy practices. 24/7 bilingual EN/ES, HIPAA-aware, books into SimplePractice, TherapyNotes, or Jane. Flat $500/mo, no per-minute fees. 7-day free trial.",
  h1: "Mental Health Answering Service That Treats Every Caller With Care",
  intro:
    "Most therapy practices lose prospective clients before the first session ever happens. Research shows 67% of callers who reach voicemail never leave a message — and for someone who spent weeks working up the courage to call a therapist, that voicemail is often the end of the road, not a detour. Live Answer's mental health answering service is built specifically for solo therapists, group practices, and behavioral health clinics that can't be on the phone between sessions. We answer every call 24/7 with warm, sensitive scripting — no clinical language, no cold phone-tree prompts — handle the new-client intake and insurance questions, book directly into SimplePractice, TherapyNotes, Headway, Calendly, or Jane, and follow a clear crisis protocol: if any caller expresses crisis or self-harm, the AI immediately directs them to 988 and emergency services, and alerts the clinician per the practice's protocol. Flat $500/mo. Unlimited calls. Bilingual EN/ES standard. HIPAA-aware on every account.",
  sections: [
    {
      heading: "Warm, Sensitive Scripting — Never Clinical, Never Robotic",
      content:
        "The intake script is built for the emotional reality of mental health calls. Prospective clients calling a therapy practice for the first time are often anxious, hesitant, or in genuine distress — the worst possible experience for them is a cold prompt asking them to press 1 for scheduling. Our AI opens with warmth, moves at the caller's pace, and is scripted to acknowledge discomfort without projecting or advising. It asks only the intake questions you specify — name, contact, preferred scheduling window, insurance carrier, reason for seeking therapy at whatever level of detail the caller is comfortable sharing — and never attempts assessment, clinical suggestion, or emotional interpretation. The AI is explicitly scripted to tell callers it cannot provide clinical guidance, and to say so directly and compassionately if asked. The crisis protocol is non-negotiable: any mention of crisis, self-harm, or suicidal ideation triggers an immediate, scripted redirect to 988 or 911 — the AI does not attempt to de-escalate, assess risk, or keep the conversation going. An alert goes to the clinician through the channel specified during onboarding.",
    },
    {
      heading: "HIPAA-Aware From the First Ring",
      content:
        "We operate in HIPAA-aware mode on every mental health account. Call recordings and transcripts are encrypted in transit and at rest, access is role-restricted, and we sign a Business Associate Agreement with every practice at onboarding. A two-party consent disclosure plays at the start of every recorded call — required under California law and included by default. The AI collects only the intake data you authorize: typically name, callback number, insurance basics, and scheduling preference. It does not store sensitive clinical information, diagnostic history, or medication details. If you prefer transcripts only with no recording, we support that configuration. We recommend pairing the service with your existing HIPAA-compliant notice on your website; we can provide language for the telephone-intake section if helpful. Practices on SimplePractice, TherapyNotes, or Jane already store client data in HIPAA-compliant environments — our integration writes only to the fields you specify, and the data pathway between the call and your EHR is encrypted end-to-end.",
    },
    {
      heading: "Scheduling Into the Software You Already Use",
      content:
        "Live Answer integrates natively with SimplePractice, TherapyNotes, Headway, Calendly, and Jane App — the five platforms that cover the majority of California solo and group practices. New-client appointments push directly into your calendar as pending or confirmed (your choice), with the intake notes attached so you have context before the first session. The AI books against your real availability, not a generic template — you set the rules during onboarding (which session types are open to new clients, which days, buffer time between sessions, whether waitlist is active), and the AI enforces them on every call. Insurance intake data is flagged for your admin team to verify before the first session, so you're not walking into a session blind on coverage. If you use a platform not on our standard list, contact us — we've added custom integrations for behavioral health tools in under two weeks. The end result: you finish a session, check your phone, and your next new-client slot is already filled.",
    },
    {
      heading: "The Pricing Math for a Therapy Practice",
      content:
        "A new therapy client in an outpatient behavioral health setting carries a lifetime value of $4,000–$6,000 — that's sessions at $150–$200/hour over an average engagement of 10–18 months. Against that number, $500/mo for an answering service that captures every prospective caller is straightforward math: a single new client retained pays for eight to twelve months of service. The alternative — a part-time admin in California — runs $1,800+/mo for business-hours-only coverage with no evening or weekend intake. Human answering services at $300–$500/mo add per-minute fees and rarely offer mental health-specific scripting or EHR integration without an upcharge. Live Answer is flat $500/mo, unlimited calls, bilingual EN/ES, HIPAA-aware, with native EHR sync and a crisis protocol built in. The 7-day free trial requires no credit card, and our booking guarantee is ten booked appointments in your first 30 days or a full refund.",
    },
  ],
  relatedServices: [],
  relatedLocations: ["san-jose", "los-angeles", "sacramento", "san-francisco-bay-area"],
};
