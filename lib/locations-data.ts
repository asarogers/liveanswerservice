/**
 * ============================================================
 *  LIVE ANSWER — Location Page Data
 *
 *  Each metro area gets a location landing page consumed by
 *  app/locations/[slug]/page.tsx. San Jose is the HQ + NAP city
 *  (indexed Week 1); Sacramento / LA / Bay Area are scheduled
 *  for Week 4 launch (noindex via site-plan.json until then).
 *
 *  Phone: (669) 365-6533 | liveanswerservice.com
 * ============================================================
 */

export interface LocationDetail {
  slug: string;
  city: string;
  state: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { heading: string; content: string }[];
  neighborhoods: string[];
  nearbyLocations: string[];
  latitude: number;
  longitude: number;
}

export const locationDetails: LocationDetail[] = [
  /* ──────────────────────────────────────────────────────────
     SAN JOSE — NAP / HQ city, indexed Week 1
     ────────────────────────────────────────────────────────── */
  {
    slug: "san-jose",
    city: "San Jose",
    state: "CA",
    title: "San Jose Answering Service — 24/7 AI Receptionist",
    metaDescription:
      "AI answering service for San Jose small businesses. 24/7 bilingual EN/ES, books into your calendar, $500/mo flat. Local team in Willow Glen — call (669) 365-6533.",
    h1: "AI Answering Service in San Jose, California",
    intro:
      "Live Answer is headquartered in San Jose's Willow Glen neighborhood, and the San Jose small-business market is exactly the customer we built the product for. The South Bay runs on small operators — HVAC and plumbing shops servicing the housing stock from Almaden to Berryessa, dental and medical practices clustered around Good Samaritan and Regional Medical, legal offices downtown and along Stevens Creek, salons and restaurants in Willow Glen and Japantown, real estate brokerages from Cambrian to Evergreen. All of them share the same problem: the owner or one staff member is still answering the phone, and the calls that come in during a job, during lunch, or after 5 PM go to voicemail. We answer every one of them, 24/7, in English or Spanish, and book the appointment directly into your calendar.",
    sections: [
      {
        heading: "Industries We Serve in San Jose",
        content:
          "Our top three verticals in San Jose are HVAC and home services, legal solo and small firms, and dental and medical practices — these are the industries where missed-call math hits hardest. HVAC contractors in the South Bay regularly miss $500–$4,000 emergency jobs to whichever competitor picked up first; we built an AI dispatcher specifically for that vertical that books straight into Jobber, ServiceTitan, or Housecall Pro. Solo and small attorneys in San Jose lose retainers worth $3,000–$10,000+ to bar-association referrals that hit voicemail, especially Spanish-speaking PI and immigration leads; our legal intake AI runs a real conflict check during the call. Dental practices around Good Samaritan and Regional Medical lose new patients worth $850 in lifetime value at lunch and after-hours; our Front Desk On-Call books directly into Dentrix, Open Dental, Eaglesoft, or Curve. We also serve restaurants, salons, real estate, property management, and any other San Jose small business where the phone is the front door.",
      },
      {
        heading: "Bilingual English-Spanish for San Jose's Population",
        content:
          "San Jose is roughly 31% Hispanic / Latino by population, with neighborhoods like East San Jose, Alum Rock, and parts of Evergreen carrying significantly higher Spanish-speaking concentrations. The standard answering services on the market either don't offer Spanish or charge extra for a transfer-to-Spanish-line that runs business hours only. Live Answer's bilingual coverage is included standard — the AI detects the caller's language in the first three seconds and switches to native Spanish automatically. Same qualifying questions, same booking flow, same CRM sync, same SMS summary to you, regardless of language. For a San Jose business serving East San Jose, Alum Rock, the airport corridor, or southern parts of the city, this single feature usually pays for the service in the first month — those are the customers most likely to hang up on English-only voicemail.",
      },
      {
        heading: "Local, On-the-Ground, and Reachable",
        content:
          "We're not a national call center. Our office is in Willow Glen at 2561 Skylark Drive, and the people who set up your AI agent and review your monthly call quality are local. You can call (669) 365-6533 for a setup consult, or stop by the office — we're between Lincoln Avenue and Meridian, two blocks south of Willow Glen Way. The 7-day free trial is no credit card, no setup fee, and no contract. We port a forwarding number, you point your after-hours or overflow line at it, the AI starts taking real calls within 24 hours. If it isn't capturing measurable bookings in your first 30 days, you get a full refund. The booking guarantee is per-vertical and concrete — see the relevant service page for the specifics for your industry.",
      },
    ],
    neighborhoods: [
      "Willow Glen",
      "Rose Garden",
      "Cambrian Park",
      "Almaden Valley",
      "Evergreen",
      "Berryessa",
      "Japantown",
      "Downtown San Jose",
      "Alum Rock",
      "East San Jose",
      "Naglee Park",
      "Blossom Valley",
    ],
    nearbyLocations: ["san-francisco-bay-area", "sacramento", "los-angeles"],
    latitude: 37.298,
    longitude: -121.873,
  },

  /* ──────────────────────────────────────────────────────────
     SAN FRANCISCO BAY AREA — Wave 2 launch (Week 4)
     ────────────────────────────────────────────────────────── */
  {
    slug: "san-francisco-bay-area",
    city: "San Francisco Bay Area",
    state: "CA",
    title: "Bay Area Answering Service — 24/7 AI Receptionist",
    metaDescription:
      "AI answering service for Bay Area small businesses. 24/7 bilingual EN/ES coverage from San Francisco to San Jose. $500/mo flat. Call (669) 365-6533.",
    h1: "AI Answering Service for the San Francisco Bay Area",
    intro:
      "The Bay Area is nine counties, dozens of distinct submarkets, and tens of thousands of small businesses that all share the same structural problem: the cost of front-desk staff is prohibitively high, and the alternative — voicemail — is bleeding revenue. A Bay Area receptionist runs $48,000–$60,000 a year fully loaded. Live Answer covers every call 24/7, books into your calendar, in English or Spanish, for $500 a month flat. We're headquartered in San Jose's Willow Glen neighborhood and service the entire region from San Francisco proper through the Peninsula, Oakland and the East Bay, the Marin and North Bay markets, and the South Bay down through Gilroy.",
    sections: [
      {
        heading: "Submarkets We Serve Across the Bay Area",
        content:
          "Our Bay Area coverage is genuinely region-wide. In the City, we work with SoMa restaurants, Mission salons, Marina law firms, and Sunset healthcare practices. On the Peninsula, our HVAC and home services customer base runs from Daly City through Redwood City to Palo Alto. In the East Bay, we work with Oakland and Berkeley restaurants and legal practices, and Hayward through Fremont contractors and medical offices. In Marin and the North Bay, we cover San Rafael, Novato, Petaluma, and Santa Rosa real estate, property management, and home services. In the South Bay our work is densest — San Jose, Sunnyvale, Mountain View, Cupertino, Santa Clara, Milpitas. Every submarket has different call patterns and different bilingual demand, but the AI is configured per-customer so a Mission restaurant gets a different intake from a Marin attorney.",
      },
      {
        heading: "Time-Zone Reality of 24/7 Coverage",
        content:
          "Bay Area businesses get inbound calls from every US time zone and frequently from overseas (especially in trades like immigration law and international real estate). A traditional human answering service either staffs around the clock at high cost or routes after-hours to voicemail labeled \"24/7.\" Live Answer is genuinely 24/7 — 3 AM Saturday gets the same answer as 10 AM Tuesday, with the same booking sync, the same SMS summary, the same call quality. For trades like HVAC and plumbing in winter cold-snap conditions, or PI law on Saturday nights after major events, this is the practical difference between catching the lead and losing it.",
      },
      {
        heading: "Bilingual at Bay Area Population Levels",
        content:
          "The Bay Area Spanish-speaking population is concentrated in the Mission and Excelsior in SF, East Oakland and Fruitvale in Oakland, and large parts of San Jose, but Spanish-speaking customers exist in every Bay Area submarket. Live Answer's bilingual standard means a Marin attorney can serve a Spanish-speaking PI client from the East Bay without paying extra for a translator. The AI handles same-language confirmation SMS, same-language follow-up reminders, and same-language CRM notes. The cost-effectiveness of bilingual is one of the strongest sell-throughs of the service in the region.",
      },
    ],
    neighborhoods: [
      "San Francisco",
      "Oakland",
      "Berkeley",
      "San Jose",
      "Sunnyvale",
      "Mountain View",
      "Palo Alto",
      "Redwood City",
      "Daly City",
      "Hayward",
      "Fremont",
      "San Rafael",
      "Santa Rosa",
      "Walnut Creek",
    ],
    nearbyLocations: ["san-jose", "sacramento"],
    latitude: 37.7749,
    longitude: -122.4194,
  },

  /* ──────────────────────────────────────────────────────────
     SACRAMENTO — Wave 2 launch (Week 4)
     ────────────────────────────────────────────────────────── */
  {
    slug: "sacramento",
    city: "Sacramento",
    state: "CA",
    title: "Sacramento Answering Service — 24/7 AI Receptionist",
    metaDescription:
      "AI answering service for Sacramento small businesses. Built for HVAC, legal, dental. 24/7 bilingual EN/ES. $500/mo flat. Call (669) 365-6533.",
    h1: "AI Answering Service in Sacramento, California",
    intro:
      "Sacramento is HVAC-dense — Bell Bros has 11,000+ Google reviews, Rooter Hero 3,300+, and the Central Valley summer heat reliably drives a measurable spike in inbound emergency-service calls every June through September. The miss rate during those months pushes well past industry-typical 27–62% because owners can't keep up with the call volume. Live Answer was built for exactly that problem. We answer every inbound 24/7, triage HVAC emergencies, book routine into Jobber / ServiceTitan / Housecall Pro, and the rate is a flat $500 a month no matter how busy your week gets. Beyond HVAC we serve Sacramento legal, dental, medical, real estate, and small business markets with the same model.",
    sections: [
      {
        heading: "Why Sacramento HVAC Is Our Flagship Vertical Here",
        content:
          "Sacramento and the broader Central Valley have one of the densest concentrations of HVAC and plumbing shops in California, driven by hot summers, an aging housing stock, and a growing population. The big shops (Bell Bros, Hatch Heating, Service Champions) have already built out call centers. The 80% of the market that's solo-to-30-truck shops are the ones still answering the phone personally, missing emergency calls during dispatch, and losing $500–$4,000 jobs to whichever shop their customer reached first. Our HVAC AI dispatcher handles emergency triage natively, books into the four dominant CRMs (Jobber, ServiceTitan, Housecall Pro, FieldEdge), and the cost-recovery math is so favorable in this vertical that the average Sacramento HVAC customer breaks even on Live Answer in the first month.",
      },
      {
        heading: "Bilingual for Sacramento's Population Mix",
        content:
          "Sacramento County is approximately 24% Hispanic / Latino, with much higher concentrations in South Sacramento, North Highlands, and West Sacramento. Spanish-speaking customers are a meaningful share of inbound calls for HVAC, plumbing, dental, and legal practices across the region — and they are the segment most likely to hang up on English-only voicemail and dial the next business. Live Answer's bilingual coverage is included standard. For a Sacramento HVAC contractor serving the south part of the county, capturing the Spanish-speaking emergency calls alone typically pays for the service many times over.",
      },
      {
        heading: "Beyond HVAC — Sacramento Legal, Dental, Real Estate",
        content:
          "Sacramento legal is dominated by Capitol-adjacent practices in the downtown core and family / immigration / PI firms in the surrounding neighborhoods — all of whom share the same after-hours intake problem as San Francisco firms but with the added wrinkle that Sacramento Spanish-speaking legal demand is heavy in immigration. Our legal AI intake handles that natively. Sacramento dental practices in Arden-Arcade, Folsom, and Roseville lose new patients to lunch and after-hours voicemail at the same rates as the Bay Area; our dental AI books into Dentrix, Open Dental, Eaglesoft, and Curve. Real estate brokerages serving the metro from Granite Bay through Elk Grove get the same speed-to-lead benefit as Bay Area agents — and the Spanish-speaking buyer / seller share in Sacramento is meaningfully higher than San Francisco, making bilingual a stronger wedge here.",
      },
    ],
    neighborhoods: [
      "Downtown Sacramento",
      "Midtown",
      "Arden-Arcade",
      "Natomas",
      "Land Park",
      "East Sacramento",
      "South Sacramento",
      "North Highlands",
      "Folsom",
      "Roseville",
      "Elk Grove",
      "Citrus Heights",
    ],
    nearbyLocations: ["san-francisco-bay-area", "san-jose"],
    latitude: 38.5816,
    longitude: -121.4944,
  },

  /* ──────────────────────────────────────────────────────────
     LOS ANGELES — Wave 2 launch (Week 4)
     ────────────────────────────────────────────────────────── */
  {
    slug: "los-angeles",
    city: "Los Angeles",
    state: "CA",
    title: "Los Angeles Answering Service — 24/7 AI Receptionist",
    metaDescription:
      "AI answering service for LA County small businesses. Bilingual EN/ES standard. Built for HVAC, legal, dental, restaurants. $500/mo flat. Call (669) 365-6533.",
    h1: "AI Answering Service for Los Angeles & Inland Empire",
    intro:
      "Los Angeles County is the single biggest opportunity for Live Answer in California — over 800,000 small businesses, the highest concentration of Spanish-speaking customers of any US metro (LA County is roughly 48% Hispanic / Latino), and a competitive density that makes speed-to-lead the decisive factor for every service business. Whether you're an HVAC contractor in the San Fernando Valley, a PI law firm in Long Beach, a dental practice in Pasadena, or a restaurant in Koreatown, the call you don't answer is the call your competitor does. We answer every one of them, 24/7, in English or Spanish, and book the appointment directly. Flat $500 a month, no per-minute fees, locked rate at sign-up.",
    sections: [
      {
        heading: "LA County's Bilingual Reality",
        content:
          "LA County's Spanish-speaking share is so significant that for most service businesses serving the region, bilingual is not optional — it's the difference between capturing and not capturing roughly half your inbound. The standard answering service market response is either no Spanish coverage or an English-only voicemail. A handful of bilingual incumbents charge a premium for it (Acena, Reliable Receptionist, AnswerHero). Live Answer includes native bilingual standard, with the AI detecting the caller's language within three seconds and handling the full booking flow in either language. For an LA contractor or attorney, this is usually the single feature that closes the sale on a demo call.",
      },
      {
        heading: "Verticals That Move Hardest in LA",
        content:
          "Our highest-fit LA verticals are: HVAC and home services across the San Fernando Valley, Inland Empire, and South Bay (where summer cooling demand is steep and Spanish-speaking customer share is high); PI and immigration law across LA County (Spanish-speaking immigration in particular — multiple firms call simultaneously and the first answer wins); dental and medical practices serving densely Spanish-speaking neighborhoods like East LA, Boyle Heights, and South LA; restaurants throughout the city where the dinner-rush miss problem is acute; salons and spas where bilingual is the entire wedge in many neighborhoods. Real estate is also strong — LA commission averages run higher than the state average and the speed-to-lead penalty is severe.",
      },
      {
        heading: "Why LA Wins on the Speed-to-Lead Math",
        content:
          "LA has the highest competitive density of small businesses in California. A homeowner with a broken AC in Pasadena, a buyer interested in a Westside listing, a Spanish-speaking PI plaintiff in Long Beach — all of them call multiple businesses, often in the same minute. The business that answers first wins. The business that goes to voicemail loses, every time. Live Answer's value proposition in LA is the simplest of any market: be the first to answer, every time, in the caller's language, with a real intake and a booked appointment. Our 7-day free trial — no card, no setup fee, port a forwarding number, AI takes real calls within 24 hours — is structured around exactly this proof. Customers count what they would have missed without us; the math closes itself.",
      },
    ],
    neighborhoods: [
      "Downtown LA",
      "Hollywood",
      "West LA",
      "Santa Monica",
      "Pasadena",
      "San Fernando Valley",
      "Long Beach",
      "Inland Empire",
      "South LA",
      "East LA",
      "Boyle Heights",
      "Koreatown",
      "Mid-City",
      "Glendale",
      "Burbank",
    ],
    nearbyLocations: ["san-jose", "sacramento", "san-francisco-bay-area"],
    latitude: 34.0522,
    longitude: -118.2437,
  },
];

/* ============================================================
   LANDMARK PAGES
   ────────────────────────────────────────────────────────────
   LandmarkPage powers "[Service] near [Landmark], [City]" pages.
   These are a step below full location pages in the content hierarchy:
   one service + one named landmark + one city.

   ONLY create a LandmarkPage when the rank map shows position 4–6 for
   the target keyword in that grid cell (see rankMapTrigger). Creating
   landmark pages without rank-map justification wastes crawl budget and
   dilutes topical authority. Set draft: true until the page is ready to
   index — draft pages are excluded from generateStaticParams and sitemap.

   ── CONTENT MODEL ─────────────────────────────────────────────────────
   Good landmark pages for an AI receptionist service look like:
     • Named hospital / medical center anchors (dental/medical verticals)
     • Named courthouse / law firm cluster (legal vertical)
     • Named arena / event venue (restaurant vertical — pre/post event)
     • Named business park / tech campus (any vertical)
   They should contain: real driving context, vertical-specific job stories
   anchored to that location, nearby business names where possible.
   ─────────────────────────────────────────────────────────────────────
   ============================================================ */
export interface LandmarkPage {
  slug: string;            // e.g. "dental-answering-service-near-good-samaritan-hospital-san-jose"
  landmark: string;        // e.g. "Good Samaritan Hospital"
  city: string;            // e.g. "San Jose"
  state: string;           // e.g. "CA"
  targetService: string;   // must match a ServiceDetail.slug
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  jobStories: { heading: string; content: string }[];
  drivingDirections: string;
  nearbyLandmarks: string[];
  latitude: number;
  longitude: number;
  /**
   * Required field: the rank-map position and grid date that triggered
   * this page's creation. Only create when position is 4–6.
   * Example: { position: 5, gridDate: "2026-07-01" }
   */
  rankMapTrigger: {
    position: number;
    gridDate: string; // ISO date of the rank-map snapshot
  };
  draft?: boolean; // true = excluded from generateStaticParams and sitemap
}

export const landmarkPages: LandmarkPage[] = [
  /* ── DRAFT EXAMPLE ─────────────────────────────────────────────────
     Adapt this entry when the rank map shows position 4–6 for
     "dental answering service near Good Samaritan Hospital San Jose".
     Remove draft: true when content is reviewed and ready to index.
     ──────────────────────────────────────────────────────────────── */
  {
    slug: "dental-answering-service-near-good-samaritan-hospital-san-jose",
    landmark: "Good Samaritan Hospital",
    city: "San Jose",
    state: "CA",
    targetService: "dental-answering-service",
    title: "Dental Answering Service near Good Samaritan Hospital, San Jose | Live Answer",
    metaDescription:
      "AI receptionist for dental offices near Good Samaritan Hospital in San Jose. 24/7 bilingual EN/ES, books into Dentrix/Open Dental, flat $500/mo. Call (669) 365-6533.",
    h1: "AI Receptionist for Dental Offices near Good Samaritan Hospital, San Jose",
    intro:
      "Good Samaritan Hospital anchors a dense healthcare corridor along Bascom Avenue between San Jose and Campbell. Dental practices within a half-mile — from Bascom south to Hamilton, and east through the Cambrian Park neighborhoods — serve a patient base that skews toward families with active insurance, making every missed new-patient call a measurable lifetime-value loss. Live Answer answers every call 24/7, books directly into Dentrix, Open Dental, Eaglesoft, or Curve, and handles Spanish-speaking patients automatically. Flat $500/mo, no per-minute fees.",
    jobStories: [
      {
        heading: "After-hours new-patient intake",
        content:
          "A patient was referred by their primary care doctor at Good Sam after a checkup. They called the dental practice at 7:30 PM — after front desk hours. Live Answer's dental AI qualified the referral, collected insurance information, and booked a new-patient exam in the first available morning slot. The practice received an SMS summary within 60 seconds. The patient confirmed via text. No callback loop.",
      },
      {
        heading: "Spanish-speaking emergency call",
        content:
          "A Spanish-speaking patient from the Cambrian Park area called with tooth pain on a Sunday morning. Live Answer detected Spanish in the first three seconds, switched language automatically, triaged the emergency, and booked a same-day emergency slot. The dentist was notified via SMS with the patient's name, contact, pain description, and insurance info. No missed call. No language barrier.",
      },
    ],
    drivingDirections:
      "Good Samaritan Hospital is at 2425 Samaritan Drive, San Jose, CA 95124, at the intersection of Samaritan Drive and Bascom Avenue. Dental practices in this corridor are accessible via Bascom Ave (north–south) and Camden Ave / Hamilton Ave (east–west). From Highway 17, take the Camden Ave exit east; from 85, take Samaritan Drive north.",
    nearbyLandmarks: [
      "O'Connor Hospital",
      "Valley Medical Center",
      "Cambrian Park Plaza",
      "Pruneyard Shopping Center, Campbell",
    ],
    latitude: 37.2682,
    longitude: -121.9393,
    rankMapTrigger: {
      // Replace with actual rank-map data before removing draft: true.
      position: 5,
      gridDate: "2026-07-01",
    },
    draft: true,
  },
];

/* ============================================================
   HELPERS — stable export shape
   ============================================================ */
export function getLocationBySlug(slug: string): LocationDetail | null {
  return locationDetails.find((l) => l.slug === slug) ?? null;
}

export function getAllLocationSlugs(): string[] {
  return locationDetails.map((l) => l.slug);
}

export function getAllLocations(): LocationDetail[] {
  return locationDetails;
}

/** Returns only landmark pages where draft !== true. */
export function getPublishedLandmarkPages(): LandmarkPage[] {
  return landmarkPages.filter((p) => !p.draft);
}

/** Looks up a landmark page by slug regardless of draft status. */
export function getLandmarkPageBySlug(slug: string): LandmarkPage | undefined {
  return landmarkPages.find((p) => p.slug === slug);
}

/**
 * Returns all slugs for both regular location pages and published landmark
 * pages, for use in generateStaticParams on the [slug] route.
 */
export function getAllLocationAndLandmarkSlugs(): string[] {
  const locationSlugs = locationDetails.map((l) => l.slug);
  const landmarkSlugs = getPublishedLandmarkPages().map((p) => p.slug);
  return [...locationSlugs, ...landmarkSlugs];
}
