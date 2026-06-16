import type { FAQ } from "@/lib/common-faqs";

/**
 * Per-city FAQ overrides — appended to the universal LOCATION_FAQS
 * from common-faqs.ts. Keep wording aligned with PAA queries for the
 * relevant metro.
 */
export const locationLocalFaqs: Record<string, FAQ[]> = {
  "san-jose": [
    {
      q: "Where is Live Answer's San Jose office?",
      a: "Live Answer is headquartered at 2561 Skylark Drive in San Jose's Willow Glen neighborhood — between Lincoln Avenue and Meridian, two blocks south of Willow Glen Way. We're locally staffed; setup consults and monthly call reviews are handled by the San Jose team, not a national call center.",
    },
    {
      q: "Does Live Answer work for HVAC contractors in San Jose?",
      a: "Yes — HVAC is one of our top three verticals in the South Bay. Our AI dispatcher integrates with Jobber, ServiceTitan, Housecall Pro, and FieldEdge, and handles bilingual emergency triage for the heavily Spanish-speaking East San Jose and Alum Rock customer base. Flat $500/mo, unlimited calls.",
    },
  ],

  "san-francisco-bay-area": [
    {
      q: "Does Live Answer serve the entire Bay Area or just South Bay?",
      a: "Entire Bay Area. We work with businesses in San Francisco, the Peninsula (Daly City through Palo Alto), East Bay (Oakland, Berkeley, Hayward, Fremont), Marin and North Bay (San Rafael, Petaluma, Santa Rosa), and the South Bay (San Jose, Sunnyvale, Mountain View, Cupertino, Santa Clara, Milpitas).",
    },
    {
      q: "How does Bay Area pricing compare to hiring a receptionist?",
      a: "A Bay Area receptionist runs $48,000–$60,000/yr fully loaded plus 60+ days to replace when they quit. Live Answer is $500/mo flat-rate with no per-minute fees — about 0.7–1.2% of a receptionist's annual cost — and covers 24/7 plus bilingual.",
    },
  ],

  "sacramento": [
    {
      q: "Is Live Answer good for Sacramento HVAC shops?",
      a: "Yes — Sacramento HVAC is one of our flagship verticals. The Central Valley summer drives a measurable spike in emergency-service calls every June through September, and miss-rates during those months easily exceed 50% for shops still answering the phone personally. Our AI dispatcher handles the triage, books into Jobber / ServiceTitan / Housecall Pro, and the cost-recovery math typically breaks even in the first month.",
    },
    {
      q: "Does Live Answer have a Sacramento office?",
      a: "We're headquartered in San Jose's Willow Glen neighborhood but service all of California including Sacramento. Phone consults, demo line, 7-day free trial, and monthly call-quality review all work the same whether you're in Sacramento, Folsom, Elk Grove, or Roseville.",
    },
  ],

  "los-angeles": [
    {
      q: "Does Live Answer cover LA County and the Inland Empire?",
      a: "Yes — both. We work with businesses across LA County (Downtown LA, Hollywood, West LA, Santa Monica, Pasadena, San Fernando Valley, Long Beach, South LA, East LA, Boyle Heights) and the Inland Empire (Riverside and San Bernardino counties). Bilingual standard, 24/7 coverage, flat rate.",
    },
    {
      q: "Why does bilingual matter so much in LA?",
      a: "LA County is roughly 48% Hispanic / Latino — the highest concentration of Spanish-speaking customers of any US metro. For most LA service businesses, bilingual is not optional; it's the difference between capturing and not capturing roughly half your inbound. Live Answer includes native bilingual standard at no extra cost.",
    },
  ],
};
