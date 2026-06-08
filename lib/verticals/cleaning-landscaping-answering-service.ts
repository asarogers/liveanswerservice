import type { VerticalConfig } from "./types";
import type { ServiceDetail } from "@/lib/services-data";

/**
 * Cleaning & Landscaping vertical — residential/commercial cleaning companies
 * and lawn-care / landscaping services (California SMBs). Core angle: crews are
 * always in the field, quote requests pile up unanswered, and recurring-contract
 * revenue is won by whoever picks up first.
 *
 * Sources used inline:
 *   [JOBBER]    https://www.getjobber.com/academy/cleaning/cleaning-industry-trends/
 *   [MAIDCENTRAL] https://maidcentral.com/2021/06/24/how-to-calculate-the-lifetime-value-of-a-residential-cleaning-customer/
 *   [CALLJOLT]  https://calljolt.com/blog/landscaping/landscaping-spring-call-surge-ai
 *   [HOUSECALLPRO] https://www.housecallpro.com/resources/missed-calls/
 *   [AIRA]      https://www.getaira.io/blog/missed-business-calls-statistics
 *   [NALP]      https://blog.landscapeprofessionals.org/spring-surge-playbook-how-landscape-companies-navigate-seasonal-workload-spikes/
 *   [MAIDTHIS]  https://maidthisfranchise.com/economics-of-a-cleaning-franchise/
 *   [SCHEDULINGKIT] https://schedulingkit.com/statistics/missed-call-statistics
 */

export const cleaningLandscapingConfig: VerticalConfig = {
  slug: "cleaning-landscaping-answering-service",

  meta: {
    title: "Cleaning Service Answering Service — 24/7 AI Receptionist",
    description:
      "24/7 bilingual AI answering service for California cleaning and landscaping businesses. Every quote request captured, every recurring contract booked — while your crews stay in the field. Flat $500/mo, no per-minute fees, bilingual EN/ES standard.",
    canonical: "/services/cleaning-landscaping-answering-service",
  },

  verticalBar: {
    icon: "leaf",
    label: "Built for California cleaning & landscaping businesses",
  },

  oneLiner:
    "California cleaning and landscaping owners lose recurring contracts every day because their crews are in the field and can't answer the phone. We capture every quote request and book every recurring client 24/7 in English and Spanish — so you stop handing jobs to whoever happened to pick up first.",

  hero: {
    eyebrow: "AI receptionist · 24/7 · Bilingual EN/ES",
    headline: "Never lose another {italicWord} to a missed call.",
    italicWord: "contract",
    subhead: {
      seoBold: "24/7 bilingual AI answering service for California cleaning and landscaping services.",
      body:
        "Your crews can't answer quotes from a client's backyard or a job site. We capture every call, qualify the scope, and book the estimate or recurring service — in English or Spanish, around the clock.",
    },
    sampleBusinessName: "Verde Clean & Landscape",
    chat: [
      { speaker: "bot", text: "Hi, thank you for calling! Are you looking for a quote or scheduling a service?" },
      { speaker: "user", text: "I need a quote for weekly cleaning — 3-bedroom house in Fremont." },
      { speaker: "bot", text: "Perfect. Let me get your details and book your free walk-through estimate today." },
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
    sectionNum: "01 · The in-the-field problem",
    title: "The math behind every missed quote.",
    stats: [
      {
        num: "62%",
        // source: https://www.housecallpro.com/resources/missed-calls/ [HOUSECALLPRO]
        label: "of inbound calls to home-service companies go unanswered while crews work",
      },
      {
        num: "$11,250",
        // source: https://maidthisfranchise.com/economics-of-a-cleaning-franchise/ [MAIDTHIS]
        label: "average lifetime value of a single recurring cleaning client",
      },
      {
        num: "200–300%",
        // source: https://calljolt.com/blog/landscaping/landscaping-spring-call-surge-ai [CALLJOLT]
        label: "spring call-volume spike — when most landscaping crews are already slammed",
      },
    ],
    rankingNote:
      "Google sees roughly half of US phone calls through Android — whether you answered, how long you talked, and whether the homeowner called a second company right after. Services that stop picking up measurably drop in local rank. A 100% answer rate protects the Maps position your quote requests come from.",
  },

  vocQuote: {
    quote:
      "We'd get tons of quote requests on Monday morning and I couldn't call everyone back. Half of them already hired someone else by Tuesday.",
    attribution: "— What we hear from California cleaning & landscaping owners every week",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last week",
    title: "The calls you're already losing.",
    cards: [
      {
        time: "9:15 AM Tuesday",
        body: "Your whole crew is deep-cleaning a commercial office. A homeowner calls wanting a weekly cleaning quote. She's already called two other services by the time you check voicemail at noon.",
      },
      {
        time: "March — spring cleanup rush",
        body: "Phones go crazy for six weeks straight. You're running three crews. 31% of those calls hit voicemail. Most never call back. Those aren't one-time jobs — they're recurring lawn-care contracts worth $1,800/year each.",
        // source: https://calljolt.com/blog/landscaping/landscaping-spring-call-surge-ai [CALLJOLT]
      },
      {
        time: "Holiday season",
        body: "Move-out cleans, holiday deep-cleans, end-of-year commercial contracts — all peak at once. You answer what you can. The Spanish-speaking caller who couldn't reach anyone? She booked with your bilingual competitor.",
      },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You didn't start a cleaning or landscaping business to answer phones.",
    empathy:
      "You started it to build a crew, do quality work, and grow a roster of reliable recurring clients. But quote requests don't wait until you're back at the office. They come in when your hands are dirty, when you're driving between jobs, when your crew lead is knee-deep in a spring cleanup. Every call you miss is a recurring contract someone else just signed.",
    authority: [
      { num: "24/7", label: "Every quote and booking call, every hour — including weekends" },
      { num: "EN/ES", label: "Bilingual from the first ring — essential for your clients and your crews" },
      { num: "60 sec", label: "From call ending to booking confirmation in your field software" },
      { num: "5+", label: "Native sync with the scheduling tools you already use" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI receptionist works",
    title: "Three steps to never miss another contract.",
    steps: [
      {
        num: 1,
        heading: "Forward your phone",
        body: "60 seconds. Works with any provider — Twilio, Google Voice, RingCentral, Verizon, AT&T.",
      },
      {
        num: 2,
        heading: "We qualify the request",
        body: "One-time deep clean, recurring weekly/biweekly, commercial janitorial, spring lawn cleanup, or year-round landscape maintenance — triaged, scoped, and scheduled 24/7, in English or Spanish.",
      },
      {
        num: 3,
        heading: "You get the job",
        body: "Booked into Jobber, Housecall Pro, ServiceMonster, Aspire, or LawnPro — plus an SMS summary in 60 seconds. High-value commercial quote requests routed to your cell within 30 seconds.",
      },
    ],
  },

  integrations: {
    label: "Syncs with your field-service software",
    items: ["Jobber", "Housecall Pro", "ServiceMonster", "Aspire", "LawnPro"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "Your crews finish the last property at 5 PM. You drive home. Your phone kept ringing all day — every quote request answered, every recurring client booked. By Monday, your schedule is stacked three weeks out with recurring contracts. You didn't take a single booking call yourself.",
    items: [
      { icon: "calendar-check", text: "Your recurring-client roster grows on autopilot." },
      { icon: "trending-up", text: "Revenue compounds — one recurring client pays $11K over their lifetime." },
      { icon: "users", text: "Crews stay busy. Seasonal surges are handled before you feel them." },
      { icon: "mood-smile", text: "You manage the business, not the phone." },
    ],
    before: [
      { icon: "phone-ringing", text: "Quote calls ring out while you're on a job site." },
      { icon: "moon-off", text: "You return calls at 7 PM and half already hired someone else." },
      { icon: "trending-down", text: "Recurring contracts go to whoever answered first." },
      { icon: "mood-sad", text: "Spring rush arrives and you're already behind." },
    ],
  },

  // VERBATIM from hvac.ts
  voices: {
    sectionNum: "06 · Voices",
    title: "Human-standard AI voice agents.",
    sub: "Out of the box, ready to use.",
    cards: [
      { name: "Professional Sarah", label: "Warm & friendly", sampleLine: "Hi, this is Sarah at Verde Clean & Landscape..." },
      { name: "Executive Marcus", label: "Authoritative", sampleLine: "Thank you for calling Verde Clean & Landscape." },
      { name: "Casual Jamie", label: "Conversational", sampleLine: "Hey, Verde Clean — how can I help?" },
    ],
  },

  compare: {
    sectionNum: "07 · Compare",
    title: "What you'd pay otherwise.",
    rows: [
      {
        what: "Voicemail",
        cost: "$0/mo",
        result: "Lose 62% of calls mid-job; 85% of those callers never call back",
        // source: https://schedulingkit.com/statistics/missed-call-statistics [SCHEDULINGKIT]
      },
      {
        what: "Part-time CA office admin",
        cost: "~$1,600/mo",
        result: "20 hrs/week, English only, no weekend or evening coverage",
      },
      {
        what: "Full-time CA receptionist",
        cost: "$3,200–$4,000/mo",
        result: "9–5 only · $48K/yr loaded · still can't handle spring surge",
      },
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

  pricingAudience:
    "For cleaning and landscaping businesses that lose $11,000 recurring contracts to whoever answered first",

  faqs: [
    {
      q: "How does the AI receptionist handle quote requests?",
      a: "You forward your business line to a number we provide. Every incoming call is answered within 2 rings, 24/7. Our AI qualifies the caller — name, callback number, service address, job type (one-time vs. recurring), scope, and preferred schedule — books the estimate or recurring appointment into your field-service software, and texts you a summary within 60 seconds. Commercial quote requests route to your cell within 30 seconds.",
    },
    {
      q: "Can it tell the difference between a one-time and recurring request?",
      a: "Yes. The AI is scripted to ask the right qualifying questions — frequency preference, number of bedrooms/square footage for cleaning, or property size and service scope for landscaping — so by the time you see the SMS summary, you already know whether this is a one-time job or a $11K recurring contract.",
    },
    {
      q: "What if the AI can't answer a question?",
      a: "It takes a message, texts you the details immediately, and books a callback slot at a time the customer picks. Custom pricing, seasonal packages, and edge-case questions get escalated to you personally — nothing gets guessed.",
    },
    {
      q: "Does it work for both cleaning AND landscaping?",
      a: "Yes. We configure a single agent for however your business is structured — cleaning only, landscaping only, or both under one company. Each service type gets its own qualifying script so quote calls are always scoped correctly.",
    },
    {
      q: "Is bilingual really standard, or an upcharge?",
      a: "Bilingual EN/ES is standard on every account at no extra cost. The AI detects the caller's language in the first few seconds and continues in that language. No upcharge, no toggle — it just works.",
    },
    {
      q: "Is there a contract or can I cancel anytime?",
      a: "Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI for your service types, integrate your scheduling software, and go live before you lose another spring-rush quote.",
    },
    {
      q: "Do you integrate with my existing phone system?",
      a: "Yes — Twilio, Google Voice, RingCentral, Verizon, AT&T, and most VoIP systems. Setup takes 60 seconds and works without changing your business number.",
    },
  ],

  finalCta: {
    headline: "Your crews should run on booked contracts, not voicemails.",
    sub: "Three minutes to know if this is for you.",
  },
};

export const cleaningLandscapingDetail: ServiceDetail = {
  slug: "cleaning-landscaping-answering-service",
  name: "Cleaning & Landscaping",
  title: "Cleaning Service Answering Service — 24/7 AI Receptionist for CA",
  metaDescription:
    "AI receptionist for California cleaning and landscaping businesses. Captures every quote request 24/7, books recurring clients into Jobber, Housecall Pro, ServiceMonster, Aspire, or LawnPro. Bilingual EN/ES standard. Flat $500/mo, no overages.",
  h1: "Never Lose Another Cleaning or Landscaping Contract to Voicemail",
  intro:
    "When a homeowner calls for a recurring cleaning quote on a Tuesday morning, she is not leaving a voicemail and waiting until your crew finishes the job. Industry data shows 62% of inbound calls to home-service companies go unanswered while staff are in the field — and 85% of callers who reach voicemail never call back. For a cleaning or landscaping business, that is not a missed call. That is a missed recurring client worth an average $11,250 in lifetime revenue. We built Live Answer specifically for the California cleaning and landscaping owner who is running crews and watching quote requests pile up in voicemail. Our AI receptionist answers in under two rings, qualifies the scope — one-time, recurring, commercial, or seasonal — and books it directly into Jobber, Housecall Pro, ServiceMonster, Aspire, or LawnPro in English or Spanish, 24/7, for less than the cost of one recurring contract per month.",
  sections: [
    {
      heading: "What the AI Receptionist Actually Does on a Quote Call",
      content:
        "The AI answers within two rings, in English or Spanish — the caller picks the language or the AI detects it in the first few seconds. For cleaning calls, it takes the standard intake: name, callback number, service address, number of bedrooms or square footage, frequency preference (weekly, biweekly, monthly, or one-time), and any special scope items like move-out conditions or post-construction cleanup. For landscaping calls, it covers property size, service type (lawn maintenance, spring cleanup, irrigation, hardscape), and whether the client wants recurring visits or a one-time project. The AI books the estimate or recurring appointment directly into your scheduling software, tags the job type so it surfaces correctly on your dispatch board, and sends you an SMS summary within 60 seconds. It never guesses on custom pricing or edge cases — those route to you personally. The whole interaction sounds like a competent human receptionist, not a phone tree, because the system prompt is cleaning-and-landscaping-specific and the voice model is tuned for phone audio.",
    },
    {
      heading: "Recurring Contracts: Why the First Responder Wins",
      content:
        "A recurring cleaning client is worth roughly $11,250 in lifetime value — an average billing rate across biweekly visits over two to three years. A recurring lawn-care contract for a standard residential property runs $1,500–$3,000 per year. Research consistently shows that 78% of home-service leads choose the first company to respond, and that a lead who waits 10 minutes is half as likely to book as one who gets a response in under 60 seconds. That math is punishing for field-based businesses. When your best crew is finishing a commercial deep-clean and a new client calls wanting weekly service, the business that answers the phone gets the $11,000 relationship. We answer in under two rings, every time, so the first-responder advantage always belongs to you — not the competitor who happened to be in the office.",
      // source: https://www.adleverage.com/blog/why-speed-to-lead-still-wins-in-home-services/ and https://maidthisfranchise.com/economics-of-a-cleaning-franchise/
    },
    {
      heading: "Spring Surge and Holiday Spikes: Covered Before You Feel Them",
      content:
        "Landscaping call volume increases 200–300% in a six-week window between mid-March and late April — spring cleanup, lawn-care signups, mulching, and irrigation startups all converge at once. Holiday cleaning surges hit in November and December. Both spikes arrive exactly when your crews are already running flat out. Industry data shows 31% of landscaping calls go unanswered during peak season, and the same pattern holds for cleaning businesses running extra holiday crews. Live Answer handles unlimited call volume — no per-minute caps, no overage fees. Whether it is a quiet January Tuesday or the first Monday of spring, every call gets answered in under two rings at the same flat $500/mo.",
      // source: https://calljolt.com/blog/landscaping/landscaping-spring-call-surge-ai
    },
    {
      heading: "What Sign-Up Actually Looks Like",
      content:
        "We are a done-for-you service, not a self-serve AI tool you configure yourself. The 30-minute kickoff call covers the questions that matter: your service types and geography, recurring vs. one-time pricing tiers, after-hours rules, who gets paged for urgent commercial requests, your crew schedule so the AI knows when to book estimates, and your existing field-service software. We build the agent in 48 hours and you are live before the next spring rush. The 7-day free trial has no credit card and no setup fee. Our booking guarantee is concrete: capture ten booked jobs in your first 30 days or get a full refund. At an average $200–$400 per initial cleaning or $300 per landscaping job, that is $2,000–$4,000 of recovered revenue against a sub-$500 service — the math is the guarantee.",
    },
  ],
  relatedServices: [],
  relatedLocations: ["san-jose", "sacramento", "los-angeles", "san-francisco-bay-area"],
};
