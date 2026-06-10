import type { VerticalConfig } from "./types";
import type { ServiceDetail } from "@/lib/services-data";

/**
 * Nonprofit vertical — California nonprofits (charities, community orgs,
 * foundations, social-service agencies). Angle: donation-line answering,
 * volunteer intake, program/client helpline triage, giving-season surge
 * (year-end / Giving Tuesday) when small teams are overwhelmed. Bilingual
 * community access is table stakes for California orgs.
 */
export const nonprofitConfig: VerticalConfig = {
  slug: "nonprofit-answering-service",

  meta: {
    title: "Nonprofit Answering Service — Never Miss Another Donor or Volunteer",
    description:
      "24/7 bilingual AI answering service for California nonprofits. Capture every donor call, volunteer inquiry, and program helpline request during giving season and year-round. Flat $500/mo, no per-minute fees. 10 captured calls in 30 days or full refund.",
    canonical: "/services/nonprofit-answering-service",
  },

  verticalBar: {
    icon: "heart-handshake",
    label: "Built for California nonprofits and charities",
  },

  oneLiner:
    "California nonprofits lose donor calls, volunteer inquiries, and client helpline requests to voicemail every day — especially during Giving Tuesday and the December surge when small teams are most overwhelmed. We answer every call 24/7 in English and Spanish and capture the gift, the pledge, or the intake before the moment passes.",

  hero: {
    eyebrow: "AI receptionist · 24/7 · Bilingual EN/ES",
    headline: "Never lose another {italicWord} to a missed call.",
    italicWord: "donor",
    subhead: {
      seoBold: "24/7 bilingual nonprofit answering service for California charities and community organizations.",
      body:
        "A donor calling to give during Giving Tuesday won't leave a voicemail and try again tomorrow. We answer every call, capture the gift or pledge details, route volunteer inquiries to the right program, and text your team the summary — so no moment of generosity goes to waste.",
    },
    sampleBusinessName: "Bay Area Community Fund",
    chat: [
      { speaker: "bot", text: "Thank you for calling Bay Area Community Fund! How can I help you today?" },
      { speaker: "user", text: "I'd like to make a donation and find out about volunteering." },
      { speaker: "bot", text: "Wonderful! I'd be happy to help with both. Let me get your information." },
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
    sectionNum: "01 · The giving-season problem",
    title: "The math behind every missed donor call.",
    stats: [
      {
        num: "30%",
        // source: https://www.goharness.com/blog-posts/year-end-giving-statistics
        label: "of all annual charitable giving happens in December — your busiest and most understaffed month",
      },
      {
        num: "$4B",
        // source: https://www.givingtuesday.org/blog/2025-results/
        label: "donated on Giving Tuesday 2025 alone — calls and inquiries spike and most small teams can't keep up",
      },
      {
        num: "85%",
        // source: https://nonprofitquarterly.org/meet-the-hidden-majority-of-nonprofits-the-all-volunteer-organization/
        label: "of nonprofits have no paid staff — giving-season call surges land on the same two or three people who are already stretched",
      },
    ],
    rankingNote:
      "Google sees roughly half of US phone calls through Android — whether you answered, how long you talked, and whether the caller reached out to a different organization next. Nonprofits that stop answering during giving season measurably lose community visibility. A 100% answer rate protects the search position your donor and volunteer traffic comes from.",
  },

  vocQuote: {
    quote:
      "We had three volunteers trying to staff the phones on Giving Tuesday. We still missed calls. We'll never know how many donations walked away.",
    attribution: "— What we hear from California nonprofit staff coordinators every December",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last giving season",
    title: "The calls you're already losing.",
    cards: [
      {
        time: "Giving Tuesday",
        body: "A donor calls to give $500 during the noon surge. Your two-person office is already on other lines. The call goes to voicemail. The donor doesn't leave one.",
      },
      {
        time: "Year-end rush",
        body: "A Spanish-speaking community member calls about your program services. No one who speaks Spanish is in the office. They never call back.",
      },
      {
        time: "Volunteer intake",
        body: "Someone saw your social post and wants to volunteer this Saturday. They called twice, got voicemail both times, and signed up with a different organization.",
      },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You didn't start a nonprofit to answer phones.",
    empathy:
      "You started it to serve your community — run programs, build relationships, move the mission forward. But during Giving Tuesday and year-end, the phone rings constantly while your tiny team juggles events, grant reports, and donor outreach. Every call you can't answer is a donor who moved on, a volunteer who signed up elsewhere, or a community member who couldn't reach your program. The mission deserves better.",
    authority: [
      { num: "24/7", label: "Every call answered — including year-end and holiday giving surges" },
      { num: "EN/ES", label: "Bilingual from the first ring — no community member left behind" },
      { num: "60 sec", label: "From call ending to gift capture summary in your inbox" },
      { num: "5+", label: "Native sync with the donor CRMs and tools you already use" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI receptionist works",
    title: "Three steps to never miss another donor or volunteer.",
    steps: [
      {
        num: 1,
        heading: "Forward your phone",
        body: "60 seconds. Works with any provider — Twilio, Google Voice, RingCentral, Verizon, AT&T. No need to change your published number.",
      },
      {
        num: 2,
        heading: "We capture the call",
        body: "Donation inquiries, volunteer sign-ups, program helpline requests, event questions — triaged and routed correctly, 24/7, in English or Spanish. Donor pledge details captured and logged.",
      },
      {
        num: 3,
        heading: "Your team gets the summary",
        body: "Captured donor info, volunteer availability, and intake details sync into Bloomerang, Donorbox, Kindful, or Salesforce NPSP — plus an SMS summary within 60 seconds. Urgent calls routed to the right staff member within 30 seconds.",
      },
    ],
  },

  integrations: {
    label: "Syncs with your donor management tools",
    items: ["Bloomerang", "Donorbox", "Kindful", "Salesforce Nonprofit Cloud", "Calendly"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "Giving Tuesday comes and goes. Your team focuses on thanking donors and coordinating volunteers — not scrambling to answer phones. Every inquiry was captured. Every pledge was logged. Your donor count is up. You didn't miss a single call yourself.",
    items: [
      { icon: "heart", text: "Every donor call captured — no gift left behind." },
      { icon: "users", text: "Volunteer roster fills without phone-tag." },
      { icon: "trending-up", text: "Year-end revenue climbs without burning out your team." },
      { icon: "mood-smile", text: "You focus on the mission, not the phone queue." },
    ],
    before: [
      { icon: "phone-ringing", text: "Staff sprint to cover Giving Tuesday calls." },
      { icon: "moon-off", text: "Donors leave voicemails — or just don't." },
      { icon: "trending-down", text: "Year-end pledges slip through in the year-end rush." },
      { icon: "mood-sad", text: "Your team burns out during the season that matters most." },
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
      {
        what: "Voicemail",
        cost: "$0/mo",
        result: "Miss 30%+ of giving-season calls; donors don't leave messages",
      },
      {
        what: "Part-time phone coordinator",
        cost: "~$1,800/mo",
        result: "20 hrs/week, business hours only, English only, no surge coverage",
      },
      {
        what: "Human answering service",
        cost: "$300–$600/mo",
        result: "Capped minutes, per-minute overage during giving surges, bilingual upcharge",
      },
    ],
  },

  unlimited: {
    headline: "Most answering services cap your minutes right when giving season hits hardest. We don't.",
    competitors: [
      { name: "Simple Phones $49/mo", cap: "100 calls cap" },
      { name: "AnswerConnect $350/mo", cap: "$1.85/min overage" },
      { name: "Upfirst $24.95/mo", cap: "30 calls cap" },
    ],
  },

  pricingAudience:
    "For California nonprofits losing donor calls and volunteer inquiries to voicemail during giving season",

  faqs: [
    {
      q: "How does the AI receptionist work for a nonprofit?",
      a: "You forward your organization's phone line to a number we provide. Every incoming call is answered within 2 rings, 24/7. Our AI greets callers in your nonprofit's name, qualifies the purpose of the call — donation inquiry, pledge, volunteer sign-up, program helpline, event question — captures the relevant details, and routes appropriately. Donor gift and pledge information syncs into your CRM (Bloomerang, Donorbox, Kindful, or Salesforce NPSP), and you receive an SMS summary within 60 seconds.",
    },
    {
      q: "Can the AI handle donation pledges and capture gift details?",
      a: "Yes. The AI is scripted to capture donor name, callback number, gift amount or pledge, designation (if your org has multiple programs or funds), and any specific instructions. It does not process payment — it captures intent and contact info for your follow-up. Pledge details are logged and synced to your donor management system within minutes.",
    },
    {
      q: "What about volunteer intake calls?",
      a: "The AI handles volunteer inquiries end-to-end: captures name, contact info, availability, skills or interest area, and any upcoming event they're asking about. It can book a volunteer orientation directly into Calendly or your calendar system, or simply route the inquiry to your volunteer coordinator with a complete summary.",
    },
    {
      q: "How does the booking guarantee work for nonprofits?",
      a: "Our standard guarantee is 10 captured calls in your first 30 days — defined as donor pledge or gift inquiries, volunteer sign-ups, or program intake requests with complete contact information logged. If we don't hit 10, you get a full refund. No fine print.",
    },
    {
      q: "Is there a contract or can we cancel anytime?",
      a: "Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee — which makes sense if you're planning for giving season.",
    },
    {
      q: "Is the service CCPA-compliant? We handle sensitive donor and client data.",
      a: "Yes. A two-party consent prompt plays at the start of every recorded call. Recordings are encrypted at rest and in transit. We can disable recording and retain transcripts only. Deletion requests honored within 30 days. HIPAA-aware mode is available for organizations handling health-related program intake.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI for your programs and call types, integrate your donor management system, and go live well before Giving Tuesday or your next major campaign.",
    },
    {
      q: "Can the AI handle calls for multiple programs or funds within our organization?",
      a: "Yes. We script the AI to recognize different programs, funds, and routing rules. A call about your food pantry routes differently than a call about your capital campaign or your volunteer program. Setup covers all of this in the kickoff call.",
    },
  ],

  finalCta: {
    headline: "Your mission deserves a phone line that never goes to voicemail.",
    sub: "Three minutes to know if this is for you.",
  },
};

export const nonprofitDetail: ServiceDetail = {
  slug: "nonprofit-answering-service",
  name: "Nonprofit Answering Service",
  title: "Nonprofit Answering Service — 24/7 AI Receptionist for California Charities",
  metaDescription:
    "AI receptionist for California nonprofits. Captures every donor call, volunteer inquiry, and program helpline request 24/7 in English and Spanish. Syncs with Bloomerang, Donorbox, Kindful, Salesforce NPSP. Flat $500/mo, no per-minute fees.",
  h1: "Never Lose a Donor Call, Volunteer Inquiry, or Program Request to Voicemail",
  intro:
    "California nonprofits raise 30% of their annual donations in December alone — and Giving Tuesday 2025 broke records with $4 billion donated in a single day. Yet 85% of nonprofits have no paid staff, which means the same two or three people running programs are also expected to answer every surge call during the year's highest-stakes fundraising window. A donor who calls during a Giving Tuesday push and hits voicemail rarely calls back. A volunteer who couldn't reach anyone signs up with a different organization. A Spanish-speaking community member who needed program information and got an English-only voicemail simply doesn't come back. Live Answer is the 24/7 bilingual AI receptionist built specifically for mission-driven organizations — we capture every donor pledge, log every volunteer inquiry, and triage every program helpline request, all year, for a flat $500/mo with no per-minute fees.",
  sections: [
    {
      heading: "What the AI Receptionist Actually Does on a Nonprofit Call",
      content:
        "The AI answers within two rings, in English or Spanish, greeting callers in your organization's name. It qualifies the call type in the first ten seconds — donation inquiry, pledge fulfillment, volunteer sign-up, program helpline request, event registration, or general question — and routes accordingly. For donation inquiries, it captures donor name, callback number, gift amount or pledge, and fund designation. For volunteer calls, it collects availability, interest area, and books orientation slots directly into Calendly or your calendar. For program and client helpline calls, it takes a structured intake and routes to the appropriate program coordinator with a complete summary via SMS within 60 seconds. The AI is explicitly scripted not to process payments or make program eligibility determinations — those stay with your staff. Urgent calls (crisis lines, safety issues, time-sensitive pledge deadlines) escalate to a designated staff member within 30 seconds. Every call ends with a transcript and summary stored for 90 days, synced to Bloomerang, Donorbox, Kindful, or Salesforce NPSP.",
    },
    {
      heading: "Why Giving Season Is When You Can Least Afford a Voicemail",
      content:
        "December giving accounts for roughly 30% of annual charitable revenue, and the last three days of the year alone represent 10% of that — meaning your phone rings most on the days your team is most stretched. Giving Tuesday 2025 generated $4 billion in US donations in a single day, with call and inquiry volume spiking hours before and after peak giving windows. A donor lifetime value study by Dataro found that monthly donors have an average lifetime value of $7,604 — a single retained donor captured on a Giving Tuesday call can be worth years of service fees. The retained donor retention math compounds fast: a 5-point lift in retention produces a 25–95% gain in lifetime donor value. The organizations that answer every call during giving season aren't just capturing more revenue this year; they're building a retained donor base that compounds for years. Live Answer is flat-rate unlimited, which means call volume spikes during Giving Tuesday and December don't come with surprise invoices — you answer every call, full stop.",
      // stat sources:
      // 30% December: https://www.goharness.com/blog-posts/year-end-giving-statistics
      // $4B Giving Tuesday 2025: https://www.givingtuesday.org/blog/2025-results/
      // $7,604 monthly donor LTV: https://dataro.io/blog/how-to-improve-donor-retention-data-insights-trends-strategies-for-nonprofits
      // 5-pt retention → 25-95% LTV gain: https://gitnux.org/donor-retention-statistics/
    },
    {
      heading: "Bilingual Access Is a Mission Requirement in California",
      content:
        "California has 10.4 million Spanish speakers, and for many nonprofits serving immigrant communities, low-income households, or mixed-language neighborhoods, Spanish isn't a nice-to-have — it's how you serve your actual constituency. Most answering services treat Spanish as an upcharge or limit it to business hours. Live Answer includes native bilingual EN/ES on every account. The AI detects the caller's language within three seconds and switches to a native Spanish voice model — not English text translated mid-call. For a community health organization, an immigration legal-aid nonprofit, or a social-service agency in the Inland Empire or Central Valley, this single feature pays for the service by itself: the callers most likely to hang up on an English-only phone tree are exactly the community members your mission exists to serve.",
    },
    {
      heading: "Setup, Pricing, and the Booking Guarantee",
      content:
        "Live Answer is a done-for-you managed service — we build and run the AI agent, you don't configure anything. The 30-minute kickoff call covers your programs and fund structure, call routing rules (which call types reach which staff members), emergency and crisis escalation protocol, your donor CRM credentials, and your volunteer management workflow. We go live in 48 hours. The flat $500/mo Unlimited plan covers 24/7 answering, bilingual EN/ES, unlimited calls with no caps, CRM sync to Bloomerang, Donorbox, Kindful, or Salesforce NPSP, and ongoing agent updates as your programs and campaigns change. The 7-day free trial requires no credit card. Our guarantee: 10 captured donor, volunteer, or program intake calls in your first 30 days with complete contact information logged — or a full refund. For a nonprofit losing giving-season calls to voicemail, that's a straightforward bar to clear in the first week.",
    },
  ],
  relatedServices: [],
  relatedLocations: ["san-jose", "sacramento", "los-angeles", "san-francisco-bay-area"],
};
