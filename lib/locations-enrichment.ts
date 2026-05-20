/**
 * Per-city enrichment used by app/locations/[slug]/page.tsx for the
 * "local feel" block. Fields are reinterpreted for Live Answer:
 *   - districts:      major business districts / neighborhoods
 *   - industries:     industries we serve heavily in that metro
 *   - landmarks:      landmarks / waypoints
 *   - localParagraph: short paragraph for the local-presence section
 */
export interface LocationEnrichment {
  /** Major business districts in the metro (rendered as a list) */
  hospitals: string[];      // semantic: districts (kept name for template compat)
  /** Industries we serve most heavily in the metro */
  seniorCenters: string[];  // semantic: industries (kept name for template compat)
  landmarks: string[];
  localParagraph: string;
}

export const locationEnrichments: Record<string, LocationEnrichment> = {
  "san-jose": {
    hospitals: [
      "Willow Glen (HQ)",
      "Downtown San Jose",
      "Rose Garden",
      "Cambrian Park",
      "Almaden Valley",
      "Evergreen",
      "East San Jose",
      "Berryessa",
    ],
    seniorCenters: [
      "HVAC / Home Services",
      "Legal (PI, Immigration, Family)",
      "Dental & Medical",
      "Restaurants & Salons",
      "Real Estate & Property Management",
    ],
    landmarks: [
      "Santana Row",
      "SAP Center",
      "Willow Glen Way",
      "San Jose State University",
      "Mineta International Airport",
    ],
    localParagraph:
      "Live Answer's office is on Skylark Drive in Willow Glen — between Lincoln Avenue and Meridian, two blocks south of Willow Glen Way. We're the local team that builds your AI agent, handles your monthly call-quality review, and answers questions when you have them. San Jose is also our highest-density customer market: HVAC contractors from Almaden to Berryessa, legal offices downtown, dental practices around Good Samaritan and Regional Medical, restaurants in Willow Glen and Japantown, salons across the city, real estate brokerages on the east and south sides. Bilingual coverage matters here — East San Jose, Alum Rock, and parts of Evergreen carry significantly higher Spanish-speaking demand, and that's where the AI's bilingual detection drives the strongest capture-rate uplift.",
  },

  "san-francisco-bay-area": {
    hospitals: [
      "San Francisco",
      "Oakland",
      "Berkeley",
      "Peninsula (Daly City — Palo Alto)",
      "South Bay (San Jose, Sunnyvale, Cupertino)",
      "Marin & North Bay",
      "East Bay (Hayward, Fremont)",
    ],
    seniorCenters: [
      "HVAC / Home Services",
      "Legal Solo & Small Firms",
      "Dental & Medical Practices",
      "Restaurants",
      "Salons & Spas",
      "Real Estate & Property Management",
    ],
    landmarks: [
      "Salesforce Tower",
      "Oakland Coliseum",
      "Stanford",
      "Golden Gate Bridge",
      "SFO / OAK / SJC",
    ],
    localParagraph:
      "Live Answer is HQ'd in San Jose's Willow Glen neighborhood and services the entire nine-county Bay Area. We work with SoMa restaurants, Mission salons, and Marina law firms in the City; Peninsula HVAC and home services from Daly City through Palo Alto; Oakland and Berkeley restaurants and legal practices; Hayward through Fremont contractors; Marin and North Bay real estate and property management; and the full South Bay where our customer density is highest. The Bay Area's structural problem is the cost of front-desk staff — $48K–$60K/yr fully loaded plus 60+ days to replace — against an answering service that runs $500/mo flat flat with 24/7 plus bilingual coverage included.",
  },

  "sacramento": {
    hospitals: [
      "Downtown Sacramento",
      "Midtown",
      "Arden-Arcade",
      "Folsom",
      "Roseville",
      "Elk Grove",
      "South Sacramento",
      "Natomas",
    ],
    seniorCenters: [
      "HVAC / Plumbing (flagship vertical)",
      "Legal — Immigration & Family",
      "Dental Practices",
      "Real Estate",
      "Restaurants & Salons",
    ],
    landmarks: [
      "California State Capitol",
      "Sacramento Kings Arena",
      "American River Parkway",
      "Old Sacramento",
    ],
    localParagraph:
      "Sacramento is one of the densest HVAC markets in California — Bell Bros has 11,000+ Google reviews, Rooter Hero 3,300+ — and the summer heat reliably drives a measurable spike in emergency calls every June through September. Solo-to-30-truck shops are exactly the customer profile Live Answer was built for: still answering the phone personally, losing $500–$4,000 emergency jobs to whichever competitor picked up first. Beyond HVAC we serve Sacramento dental practices in Arden-Arcade and Folsom, real estate brokerages from Granite Bay through Elk Grove, and immigration / family legal practices clustered around downtown and West Sacramento. Spanish-speaking customer share in Sacramento is meaningfully higher than the Bay Area, making bilingual a stronger ROI lever here.",
  },

  "los-angeles": {
    hospitals: [
      "Downtown LA",
      "Hollywood",
      "West LA / Santa Monica",
      "Pasadena",
      "San Fernando Valley",
      "Long Beach",
      "South LA / East LA / Boyle Heights",
      "Inland Empire (Riverside / San Bernardino)",
    ],
    seniorCenters: [
      "HVAC / Home Services",
      "Legal — PI, Immigration",
      "Dental & Medical",
      "Restaurants",
      "Salons & Spas",
      "Real Estate",
    ],
    landmarks: [
      "Griffith Observatory",
      "LAX",
      "Hollywood Sign",
      "Dodger Stadium",
      "Crypto.com Arena",
    ],
    localParagraph:
      "LA County is the single largest opportunity for Live Answer in California — over 800,000 small businesses and the highest concentration of Spanish-speaking customers of any US metro. Bilingual isn't optional in LA; it's the difference between capturing and not capturing roughly half your inbound. Our LA customer base is densest in HVAC across the San Fernando Valley and Inland Empire, PI / immigration legal across LA County, dental and medical practices serving East LA and Boyle Heights, restaurants across the city, salons in heavily Spanish-speaking neighborhoods, and real estate brokerages where commission averages run higher than the state mean.",
  },
};
