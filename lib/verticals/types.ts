/**
 * VerticalConfig — the data shape every vertical landing page renders from.
 *
 * Designed for fast vertical authoring: add a config object in
 * lib/verticals/<slug>.ts, register it in lib/verticals/index.ts, and the page
 * renders. All copy is centralized here so design changes propagate.
 */
export type VerticalConfig = {
  /** URL slug — must match the route at /services/<slug> (HVAC uses "/" too). */
  slug: string;

  /** SEO + nav metadata */
  meta: {
    title: string;
    description: string;
    /** Canonical path (e.g. "/" or "/services/attorney-answering-service") */
    canonical: string;
  };

  /** Top bar above hero ("Built for California HVAC contractors") */
  verticalBar: {
    icon: string; // tabler icon name without "ti-" prefix
    label: string;
  };

  /**
   * The StoryBrand one-liner — a single memorable sentence repeated everywhere:
   * [character] + [problem] + [solution/plan] + [success]. Rendered as a band
   * directly under the hero. Keep it to one or two sentences, customer's words.
   */
  oneLiner: string;

  /** Hero section */
  hero: {
    eyebrow: string; // small line above H1
    headline: string; // H1; supports inline <em></em> markers via {italicWord}
    italicWord: string; // the word wrapped in <em> inside the H1
    subhead: {
      seoBold: string; // bolded first sentence (SEO subhead per data analysis)
      body: string; // rest of the paragraph
    };
    /** Phone-mockup chat bubbles (3 messages: bot → user → bot) */
    chat: { speaker: "bot" | "user"; text: string }[];
    /** Business name shown in the phone mockup ("Sunrise Heating & Air") */
    sampleBusinessName: string;
  };

  /** "Built for X" CA trust strip — kept consistent across verticals */
  trustStrip?: { icon: string; label: string }[];

  /** Stakes section — 3 stats showing the cost of inaction */
  stakes: {
    sectionNum: string; // "01 · The after-hours problem"
    title: string; // "The math behind every missed call."
    stats: { num: string; label: string }[]; // exactly 3
    /**
     * Goal-completion hook (hook #4) — "missed calls lower your Google Maps
     * ranking." Our only unique angle in the 611-vendor set; one line per
     * vertical, rendered under the stats grid. [LIVEANSWERSERVICE.md §alignment 1]
     */
    rankingNote?: string;
  };

  /** Voice-of-customer pull-out quote (real Reddit/forum-style) */
  vocQuote: {
    quote: string;
    attribution: string;
  };

  /** Scenarios — 3 vivid moments where they lose calls today */
  scenarios: {
    sectionNum: string;
    title: string;
    cards: { time: string; body: string }[]; // 3 cards
  };

  /** Guide section — empathy + authority */
  guide: {
    sectionNum: string;
    title: string;
    empathy: string; // paragraph
    authority: { num: string; label: string }[]; // 4 stat cards
  };

  /** Plan — 3-step "how it works" */
  plan: {
    sectionNum: string;
    title: string;
    steps: { num: number; heading: string; body: string }[]; // 3 steps
  };

  /** Integrations strip — software the AI books into */
  integrations: {
    label: string; // "Syncs with your dispatch software"
    items: string[]; // ["Jobber", "ServiceTitan", ...]
  };

  /** Success vision — "A month from now" */
  success: {
    sectionNum: string;
    title: string;
    lead: string; // paragraph
    items: { icon: string; text: string }[]; // 4 outcome cards (the "after")
    /** Optional Before/After split — when present, renders side-by-side */
    before?: { icon: string; text: string }[];
  };

  /** Voice agents — 3 sample voices (kept identical across verticals) */
  voices: {
    sectionNum: string;
    title: string;
    sub: string;
    cards: { name: string; label: string; sampleLine: string }[]; // 3
  };

  /** Comparison table — anchors $500 against "what you'd pay otherwise" */
  compare: {
    sectionNum: string;
    title: string;
    rows: { what: string; cost: string; result: string }[]; // 3 alternatives + us
  };

  /** Unlimited differentiator bar — 3 competitor caps + us */
  unlimited: {
    headline: string;
    competitors: { name: string; cap: string }[]; // 3 bad
  };

  /** Pricing card audience line (the "for X who Y" tagline on the Unlimited card) */
  pricingAudience: string;

  /**
   * Cross-vertical editorial links (homepage only) — one H2 + 50–300 words per
   * live vertical, with an in-content link. Nav links pass no authority; this
   * is the crawl/authority path to the other Wave-1 verticals. Cap 7–8 as
   * waves publish. [STRATEGY-PLAYBOOK §3]
   */
  crossVerticals?: {
    sectionNum: string;
    title: string;
    items: { heading: string; body: string; href: string; linkText: string; after: string }[];
  };

  /** FAQ list */
  faqs: { q: string; a: string }[];

  /** Final CTA section */
  finalCta: {
    headline: string; // "Your trucks should run on bookings, not voicemails."
    sub: string;
  };
};
