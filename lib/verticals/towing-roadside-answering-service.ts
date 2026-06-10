import type { VerticalConfig } from "./types";
import type { ServiceDetail } from "@/lib/services-data";

export const towingRoadsideConfig: VerticalConfig = {
  slug: "towing-roadside-answering-service",

  meta: {
    title: "Towing Answering Service — 24/7 AI Dispatch for Tow Companies",
    description:
      "24/7 bilingual AI answering service for California towing and roadside assistance companies. Every stranded motorist answered fast, location captured, truck dispatched with ETA. Flat $500/mo, no per-minute fees. 7-day free trial.",
    canonical: "/services/towing-roadside-answering-service",
  },

  verticalBar: {
    icon: "truck",
    label: "Built for California towing & roadside companies",
  },

  oneLiner:
    "A stranded motorist will call the next tow company in 30 seconds if no one picks up. We answer every call 24/7 in English and Spanish, capture their exact location and vehicle, and dispatch your driver with an ETA — so you stop losing jobs to whoever answered first.",

  hero: {
    eyebrow: "AI dispatcher · 24/7 · Bilingual EN/ES",
    headline: "Never lose another {italicWord} to a missed call.",
    italicWord: "tow",
    subhead: {
      seoBold: "24/7 bilingual AI answering service for California towing and roadside assistance companies.",
      body:
        "A stranded driver doesn't leave a voicemail — they call the next truck. We answer every call, capture location and vehicle details, and dispatch your driver with an ETA before they dial your competitor.",
    },
    sampleBusinessName: "Bay Area Towing & Roadside",
    chat: [
      { speaker: "bot", text: "Bay Area Towing — we're here 24/7. Where are you and what's going on?" },
      { speaker: "user", text: "I'm on 880 near Hegenberger, my car won't start, I think the battery died." },
      { speaker: "bot", text: "Got it — sending a driver now. ETA is about 25 minutes. Stay in a safe spot." },
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
        num: "~62%",
        // source: https://medium.com/@jtgrahamm/the-silent-profit-killer-why-62-of-your-business-calls-go-unanswered-and-what-its-costing-you-7619af72cce4
        label: "of small business calls go unanswered — stranded motorists move on in seconds",
      },
      {
        num: "$110–$600+",
        // source: https://www.lookupaplate.com/blog/towing-industry-statistics/ (national avg $110 per tow, heavy jobs $600+)
        label: "value of each job that walks to the competitor who picked up first",
      },
      {
        num: "30 sec",
        // source: https://www.getnextphone.com/answering-service-for-towing (stranded callers will hang up and dial next listing)
        /* est. based on industry pattern; no single published survey but consistent across towing answering-service providers */
        label: "before a stranded motorist hangs up and dials the next tow truck on Google",
      },
    ],
    rankingNote:
      "Google sees roughly half of US phone calls through Android — whether you answered, how fast, and whether the caller immediately dialed a competitor. Tow companies that miss calls consistently see their Google Maps rank erode. A 100% answer rate protects the local visibility that generates every stranded-driver call.",
  },

  vocQuote: {
    quote:
      "An automated voice is the last thing a stranded driver wants to hear — in many cases they'll just hang up and dial the competing towing company instead.",
    // source: https://www.mapcommunications.com/industries/transportation/towing/
    attribution: "— MAP Communications, towing industry call center analysis",
  },

  scenarios: {
    sectionNum: "02 · This happened to you last night",
    title: "The jobs you're already losing.",
    cards: [
      {
        time: "2:17 AM",
        body: "Breakdown on I-680. Driver calls your number. Voicemail. Calls the next listing. That's a $200 tow you'll never know you lost.",
      },
      {
        time: "Friday dispatch chaos",
        body: "Your driver is mid-tow, your other line is ringing, and a motor-club overflow call drops. Three calls in 20 minutes — two go unanswered. Both callers are already in a competitor's truck.",
      },
      {
        time: "Location confusion",
        body: "Panicked caller can't describe where they are. Driver circles for 20 minutes. Caller hangs up and calls someone else. You ate the fuel and lost the job.",
      },
    ],
  },

  guide: {
    sectionNum: "03 · We get it",
    title: "You didn't start a tow company to miss the calls that pay for your trucks.",
    empathy:
      "You're running trucks around the clock, managing drivers, handling motor-club dispatches, and trying to build direct business on top. Every time your phone rings and no one answers, a stranded motorist — who needed you now — calls someone else. They're not leaving a voicemail. They're on the side of the highway, anxious, and will take the first truck that answers.",
    authority: [
      { num: "24/7", label: "Every call answered — including 2 AM breakdowns and holiday spikes" },
      { num: "EN/ES", label: "Bilingual from the first ring — critical for California's roads" },
      { num: "< 2 rings", label: "Location, vehicle, and issue captured before the caller panics" },
      { num: "5+", label: "Native sync with the dispatch software you already use" },
    ],
  },

  plan: {
    sectionNum: "04 · How your AI dispatcher works",
    title: "Three steps to never miss another tow.",
    steps: [
      {
        num: 1,
        heading: "Forward your phone",
        body: "60 seconds. Works with any provider — Twilio, Google Voice, RingCentral, Verizon, AT&T. Your number stays yours.",
      },
      {
        num: 2,
        heading: "We capture the call",
        body: "Exact location (cross-streets, mile marker, landmark), vehicle make/model/year, issue, and callback — in English or Spanish. All in under 90 seconds so the caller doesn't panic and hang up.",
      },
      {
        num: 3,
        heading: "You get the dispatch",
        body: "Job details pushed to Towbook, TRAXERO (Dispatch Anywhere), or your preferred dispatch tool, plus SMS to your on-call driver within 60 seconds. Emergencies (accidents, blocked lanes) escalate to your cell in 30 seconds.",
      },
    ],
  },

  integrations: {
    label: "Syncs with your dispatch software",
    items: ["Towbook", "TRAXERO (Dispatch Anywhere)", "Ringy", "Beans.ai", "Google Calendar"],
  },

  success: {
    sectionNum: "05 · Imagine this",
    title: "A month from now.",
    lead:
      "Your drivers finish their last run and head home. Your phone keeps ringing — every stranded motorist reaches a calm, bilingual voice that gets their location, their vehicle, and dispatches the closest truck. By Monday, you've recovered every after-hours call you used to lose to voicemail.",
    items: [
      { icon: "clock-24", text: "Every 2 AM call answered — driver dispatched, ETA given." },
      { icon: "map-pin", text: "Location captured cleanly every time — no more circles." },
      { icon: "trending-up", text: "Direct call volume grows without paying per-minute dispatch fees." },
      { icon: "mood-smile", text: "You run a tow company again — not a phone answering service." },
    ],
    before: [
      { icon: "phone-ringing", text: "Your cell rings at 2 AM — you answer half-asleep." },
      { icon: "map-off", text: "Caller can't explain where they are. Driver gets lost." },
      { icon: "trending-down", text: "After-hours calls bleed to whoever picks up first." },
      { icon: "mood-sad", text: "You're the dispatcher, driver, and owner all at once." },
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
      { what: "Voicemail", cost: "$0/mo", result: "62% of after-hours calls lost; motorists move on in 30 sec" },
      {
        what: "Full-time CA dispatcher",
        cost: "~$3,500/mo",
        result: "9–5 only, English only, can't scale for holiday spikes",
      },
      {
        what: "Human answering service",
        cost: "$200–$500/mo",
        result: "Per-minute overages, message-only (no dispatch), no bilingual",
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
    "For tow companies losing $110–$600 jobs every time an after-hours call hits voicemail",

  faqs: [
    {
      q: "How does the AI dispatcher work for towing?",
      a: "You forward your business line to a number we provide. Every incoming call is answered within 2 rings, 24/7. Our AI captures the caller's exact location (cross-streets, mile marker, or landmark), vehicle make/model/year, issue, and callback number — then pushes the job to Towbook, TRAXERO, or your preferred dispatch tool and texts your on-call driver within 60 seconds. Accident scenes and blocked-lane emergencies escalate directly to your cell in 30 seconds.",
    },
    {
      q: "Can the AI handle callers who don't know exactly where they are?",
      a: "Yes. The AI is scripted to walk panicked callers through location identification step by step — nearby landmarks, cross-streets, highway signs, mile markers, or the last exit they passed. It can also prompt the caller to share their phone's GPS location via text. The goal is to get a usable dispatch address before the caller hangs up.",
    },
    {
      q: "Does it work with motor-club (AAA, NSD, Agero) overflow calls?",
      a: "Yes. Motor-club dispatch jobs come in separately from your direct line. We can handle direct-consumer calls on your primary business number and log motor-club overflow separately — keeping your reporting clean and your drivers' boards accurate.",
    },
    {
      q: "Is it bilingual? Most of our callers are Spanish speakers.",
      a: "Bilingual EN/ES is standard on every account — no upcharge. The AI detects the caller's language within the first three seconds and switches to native Spanish automatically. Same location capture, same dispatch flow, same SMS summary to your driver. For a California tow company, this alone pays for the service.",
    },
    {
      q: "Is there a contract or can I cancel anytime?",
      a: "Month-to-month. Cancel anytime. The 7-day free trial requires no credit card. Annual prepay saves you $900/year and waives the setup fee.",
    },
    {
      q: "How long does setup take?",
      a: "48 hours from your kickoff call. We script the AI for your service area, dispatch rules, and escalation thresholds, integrate your dispatch software, and go live before you lose another overnight job.",
    },
    {
      q: "What's the booking guarantee?",
      a: "10 booked jobs in your first 30 days or a full refund. At an average $110–$200 per tow, that's $1,100–$2,000 in recovered revenue against a $500 service — the math is the guarantee.",
    },
  ],

  finalCta: {
    headline: "Your trucks should run on dispatches, not voicemails.",
    sub: "Three minutes to know if this is for you.",
  },
};

export const towingRoadsideDetail: ServiceDetail = {
  slug: "towing-roadside-answering-service",
  title: "Towing Answering Service — 24/7 AI Dispatch for California Tow Companies",
  metaDescription:
    "AI dispatcher for California towing and roadside assistance companies. Answers every call 24/7, captures exact location and vehicle, dispatches via Towbook or TRAXERO. Bilingual EN/ES. Flat $500/mo, no overages.",
  h1: "Never Lose Another Tow to a Missed Call",
  intro:
    "An estimated 88 million roadside assistance calls are made in the US each year — and a stranded motorist will hang up and dial the next listing in as little as 30 seconds if no one answers. Every missed call is a $110–$600+ job walking to whichever tow company picked up first. California tow operators face the sharpest version of this problem: overnight call volume spikes 22% higher in winter, motor-club overflow floods direct lines during peak demand, and bilingual coverage is non-negotiable across most of the state. Live Answer is the done-for-you AI dispatcher built for California towing and roadside assistance companies. We answer every call in under two rings, 24/7, in English or Spanish — capture the caller's exact location, vehicle details, and issue — then push the dispatch to Towbook, TRAXERO (Dispatch Anywhere), or your existing system and text your on-call driver within 60 seconds. You capture the job before the caller dials the next number on Google.",
  sections: [
    {
      heading: "What the AI Dispatcher Captures on Every Call",
      content:
        "Speed and accuracy are everything in a roadside call. The AI dispatcher follows a towing-specific intake script: location first (cross-streets, mile marker, last exit, or GPS-share prompt if the caller is disoriented), then vehicle make, model, and year, then the issue — won't start, flat tire, lockout, accident, fuel delivery — then callback number. The AI is scripted to de-escalate anxious callers and keep them on the line long enough to get a usable dispatch address. If a caller genuinely cannot identify their location, the AI prompts them to text their GPS pin and stays on the call while the location resolves. Accident scenes, blocked lanes, and injury calls escalate to your cell within 30 seconds so you can make the judgment call on which driver to send and whether to call police. Routine roadside jobs — jump-starts, lockouts, flat tires — push directly to Towbook or TRAXERO as a new job with all intake fields pre-filled. By the time your driver accepts the dispatch, the job is documented and the caller has already received an ETA by text.",
    },
    {
      heading: "Bilingual Is Non-Negotiable on California Roads",
      content:
        "California has 10.4 million Spanish speakers and a large share of stranded-motorist calls across the Bay Area, Central Valley, and Southern California come in Spanish. A monolingual voicemail or an English-only answering service loses those callers immediately — they hang up and find the next tow operator who can communicate clearly. Live Answer includes native EN/ES bilingual on every account at no upcharge. The AI detects the caller's language within three seconds of the call starting and switches automatically — same location-capture script, same dispatch flow, same SMS summary to your driver, same ETA confirmation to the caller. The Spanish voice model is tuned for phone audio and native phonetics, not English text run through translation mid-call. For a California tow company operating in mixed-language service areas, this single capability routinely pays for the service by itself.",
    },
    {
      heading: "Flat Rate Beats Per-Minute During Every Spike",
      content:
        "Towing demand is not linear. Winter nights, holiday weekends, and major weather events can triple your call volume in hours — exactly when you need every call answered and cannot afford to hit a cap or receive a surprise overage invoice. Human answering services typically charge $0.85–$1.50 per minute, which means a busy holiday weekend can generate a bill several times the base rate. AI competitors at $25–$49/mo cap at 100–200 calls and simply stop answering when you hit the limit — again, on the nights you need coverage most. Live Answer charges a flat $500/mo unlimited. No call caps, no per-minute fees, no overage charges, and the rate is locked at sign-up regardless of volume. One recovered $200 tow pays for nearly half a month of service. Recover ten jobs in a month — our first-30-day guarantee — and you've covered the year at cost.",
    },
    {
      heading: "What Onboarding Actually Looks Like",
      content:
        "Live Answer is a done-for-you managed service, not a self-serve AI tool you configure yourself. The 30-minute kickoff call covers your service area and radius, escalation rules (when to page you vs. dispatch directly), your rate sheet for quoting on-call (if you want the AI to quote), driver on-call schedule structure, motor-club vs. direct-consumer call routing, and your dispatch software credentials. We build the agent in 48 hours and go live by day three. The 7-day free trial requires no credit card. The booking guarantee is 10 booked, dispatched jobs in your first 30 days or a full refund — at an average $110–$200 per local tow, that's $1,100–$2,000 in recovered revenue against a $500 service. If the math doesn't work for your operation, you don't pay.",
    },
  ],
  relatedServices: [],
  relatedLocations: ["san-jose", "sacramento", "los-angeles", "san-francisco-bay-area"],
};
