import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FAQSection from "@/components/FAQSection";
import { siteConfig } from "@/lib/siteConfig";
import {
  getLocationBySlug,
  getAllLocationSlugs,
  getAllLocations,
} from "@/lib/locations-data";
import { getAllServices } from "@/lib/services-data";
import { LOCATION_FAQS, resolveFAQ } from "@/lib/common-faqs";
import { locationLocalFaqs } from "@/lib/locations-faqs";
import { locationEnrichments } from "@/lib/locations-enrichment";
import { loadSitePlan, noindexSlugs } from "@/lib/site-plan";
import { tintForLocation, tintStyleVars } from "@/lib/vertical-tints";

const NOINDEX_SLUGS = noindexSlugs(loadSitePlan());

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  const isNoindex = NOINDEX_SLUGS.has(slug);

  return {
    title: location.title,
    description: location.metaDescription,
    alternates: { canonical: `/locations/${slug}` },
    ...(isNoindex
      ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } }
      : {}),
    openGraph: {
      title: location.title,
      description: location.metaDescription,
      url: `${siteConfig.url}/locations/${location.slug}`,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: `${location.title} | ${siteConfig.name}`,
        },
      ],
    },
  };
}

export default async function LocationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const tint = tintForLocation(location.slug);
  const tintStyle = tintStyleVars(tint);

  const allLocations = getAllLocations();
  const nearbyLocationDetails = location.nearbyLocations
    .map((rl) => allLocations.find((l) => l.slug === rl))
    .filter((l): l is NonNullable<typeof l> => !!l);

  /* LocalBusiness JSON-LD specific to this location */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/locations/${location.slug}#business`,
    name: `${siteConfig.name} — ${location.city}`,
    url: `${siteConfig.url}/locations/${location.slug}`,
    telephone: siteConfig.phone.schema,
    email: siteConfig.email,
    description: location.metaDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: location.latitude, longitude: location.longitude },
    areaServed: [
      { "@type": "City", name: `${location.city}, ${location.state}` },
      ...nearbyLocationDetails.map((loc) => ({ "@type": "City", name: `${loc.city}, ${loc.state}` })),
    ],
    serviceType: ["AI Receptionist", "Answering Service", "24/7 Call Answering", "Bilingual Answering Service"],
    priceRange: "$$",
    openingHours: ["Mo-Su 00:00-23:59"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.tiktok,
      siteConfig.social.linkedin,
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteConfig.url}/locations/${location.slug}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",      item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Locations", item: `${siteConfig.url}/locations` },
      { "@type": "ListItem", position: 3, name: `${location.city}, ${location.state}`, item: `${siteConfig.url}/locations/${location.slug}` },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/locations/${location.slug}`,
    url: `${siteConfig.url}/locations/${location.slug}`,
    name: location.title,
    description: location.metaDescription,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    breadcrumb: { "@id": `${siteConfig.url}/locations/${location.slug}#breadcrumb` },
    about: { "@id": `${siteConfig.url}/#business` },
  };

  // FAQ — universal + per-city
  const cityFaqs = (locationLocalFaqs[location.slug] ?? []).map((f) =>
    resolveFAQ(f, { city: location.city }),
  );
  const universalFaqs = LOCATION_FAQS.map((f) => resolveFAQ(f, { city: location.city }));
  const allFaqs = [...cityFaqs, ...universalFaqs];

  const enrichment = locationEnrichments[location.slug];
  const indexedServices = getAllServices().filter((s) => !NOINDEX_SLUGS.has(s.slug));

  return (
    <div style={tintStyle}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <div className="vertical-bar">
        <i className={`ti ti-${tint.icon}`} aria-hidden="true" />
        {tint.label}
      </div>

      {/* ── HERO (StoryBrand: character + problem) ─────────── */}
      <section className="la-hero">
        <div className="wrap la-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <div className="hero-eyebrow">
              <span className="dot" aria-hidden="true" />
              <span>{location.city} · always answering</span>
            </div>
            <h1>{location.h1}</h1>
            <p className="sub">{splitFirstSentence(location.intro).lead}</p>
            <form className="hero-call-form" action="/api/demo-call" method="post">
              <input type="tel" name="phone" placeholder="Enter your phone number" required aria-label="Your phone number" />
              <button type="submit">
                <i className="ti ti-phone-outgoing" aria-hidden="true" />
                Call me
              </button>
            </form>
            <div style={{ fontSize: 13, color: "#94867a" }}>
              7-day free trial · no card · cancel anytime
            </div>
            <div className="hero-transitional">
              Prefer a human? <Link href="/book">Book a 30-min setup consult →</Link>
            </div>
          </div>

          <div className="hero-phone-wrap">
            <div className="phone-mockup" role="img" aria-label={`Sample ${location.city} call`}>
              <div className="phone-notch" aria-hidden="true" />
              <div className="phone-screen">
                <div className="phone-status">
                  <span>9:41</span>
                  <span aria-hidden="true"><i className="ti ti-signal-4g" /> <i className="ti ti-wifi" /> <i className="ti ti-battery" /></span>
                </div>
                <div className="phone-callbar">
                  <i className="ti ti-phone-call" aria-hidden="true" />
                  <span>Live Answer · {location.city}</span>
                </div>
                <div className="chat-thread">
                  <div className="chat-bubble ai">Thanks for calling — how can I help?</div>
                  <div className="chat-bubble caller">My AC&rsquo;s out and it&rsquo;s 96 inside.</div>
                  <div className="chat-bubble ai">I&rsquo;m sorry — what part of {location.city}?</div>
                  <div className="chat-bubble caller">{location.neighborhoods[0]}.</div>
                  <div className="chat-bubble ai">Booked for 4:30 PM. Text confirmation sent.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO REMAINDER (rest of intro paragraph as readable lead) ── */}
      {splitFirstSentence(location.intro).rest && (
        <section className="voc-pullout" aria-label={`Why ${location.city}`}>
          <div className="wrap-narrow">
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "#5c5147", textAlign: "center", margin: 0 }}>
              {splitFirstSentence(location.intro).rest}
            </p>
          </div>
        </section>
      )}

      {/* ── STAKES grid — the universal missed-call math ─── */}
      <section className="stakes" aria-label="What missed calls cost">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-num">01 · The bleed</span>
            <h2 className="section-title" style={{ margin: 0 }}>What missed calls cost {location.city} owners.</h2>
          </div>
          <div className="stakes-grid">
            <div className="stakes-stat">
              <div className="num">62%</div>
              <div className="label">of business calls go unanswered without us</div>
            </div>
            <div className="stakes-stat">
              <div className="num">$126K</div>
              <div className="label">average yearly cost of missed calls per SMB</div>
            </div>
            <div className="stakes-stat">
              <div className="num">~60 sec</div>
              <div className="label">until a missed-call caller dials a {location.city} competitor</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Phone CTA (mid-page anchor) ───────────────────── */}
      <section className="phone-cta">
        <div className="eyebrow">Call to test. Three minutes.</div>
        <a href={siteConfig.phone.href} className="phone-btn">
          <i className="ti ti-phone-call" aria-hidden="true" />
          <span>{siteConfig.phone.display}</span>
        </a>
        <div className="phone-secondary">
          Or <Link href="/start-trial">start a 7-day free trial</Link>
        </div>
      </section>

      {/* ── Content sections — spread out, no walls of text ─ */}
      {location.sections.map((section, idx) => {
        const isAlt = idx % 2 === 1;
        const sentences = splitSentences(section.content);
        const lead = sentences[0];
        const bullets = sentences.slice(1);
        return (
          <section
            key={idx}
            className="section-pad"
            style={{ background: isAlt ? "#f7f2e7" : "#f7f2e7" }}
            aria-labelledby={`section-${idx}-heading`}
          >
            <div className="wrap" style={{ maxWidth: 1080 }}>
              <div className="loc-section-split" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 56, alignItems: "start" }}>
                <div>
                  <span className="section-num">{String(idx + 2).padStart(2, "0")} · {location.city}</span>
                  <hr className="accent-rule" style={{ marginInlineStart: 0, marginTop: 12 }} />
                  <h2
                    id={`section-${idx}-heading`}
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(24px, 2.6vw, 32px)",
                      fontWeight: 400,
                      lineHeight: 1.2,
                      letterSpacing: "-0.015em",
                      color: "#1a1611",
                      margin: "12px 0 20px",
                    }}
                  >
                    {section.heading}
                  </h2>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.6, color: "#5c5147", margin: 0, fontWeight: 500 }}>
                    {lead}
                  </p>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 16 }}>
                  {bullets.map((s, i) => (
                    <li key={i} style={{ display: "flex", gap: 12, padding: 16, background: isAlt ? "#f7f2e7" : "#f7f2e7", borderRadius: 8, fontSize: 15, lineHeight: 1.6, color: "#5c5147" }}>
                      <i className="ti ti-check" aria-hidden="true" style={{ color: "var(--accent, #5a1f2e)", flexShrink: 0, marginTop: 2 }} />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Neighborhoods chips ─────────────────────────────── */}
      {location.neighborhoods.length > 0 && (
        <section className="plan" aria-label={`${location.city} neighborhoods we cover`}>
          <div className="wrap" style={{ maxWidth: 880 }}>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <span className="section-num">Coverage</span>
              <h2 className="section-title" style={{ margin: "8px 0 0" }}>Every neighborhood in {location.city}.</h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {location.neighborhoods.map((n) => (
                <span key={n} style={{ padding: "6px 14px", background: "#f7f2e7", borderRadius: 999, fontSize: 13, color: "#5c5147" }}>
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Plan — 3 steps ──────────────────────────────────── */}
      <section className="plan" aria-label="How it works">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-num">How it works</span>
            <h2 className="section-title" style={{ margin: "8px 0 0" }}>Three steps to never miss another {location.city} call.</h2>
          </div>
          <div className="plan-grid">
            <div className="plan-step">
              <div className="num">1</div>
              <h3>Forward your phone</h3>
              <p>60 seconds with any carrier. Test the line first — call (669) 365-6533 and try to break it.</p>
            </div>
            <div className="plan-step">
              <div className="num">2</div>
              <h3>We answer every call</h3>
              <p>24/7, bilingual EN/ES, with a real intake — booked into Jobber, ServiceTitan, Clio, Dentrix, whatever you use.</p>
            </div>
            <div className="plan-step">
              <div className="num">3</div>
              <h3>You get the booking</h3>
              <p>SMS + email summary in 60 seconds. The customer thinks they reached your front desk. You went on with your day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local context (enrichment) */}
      {enrichment && (
        <section className="plan" aria-labelledby="local-heading">
          <div className="wrap" style={{ maxWidth: 880 }}>
            <div className="section-eyebrow">On the ground</div>
            <h2 id="local-heading" className="section-title">{location.city} at a glance.</h2>
            <p style={{ maxWidth: 640, margin: "0 auto 32px", fontSize: 15, lineHeight: 1.7, color: "#5c5147" }}>
              {enrichment.localParagraph}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24, textAlign: "left" }}>
              <Column title="Districts" items={enrichment.hospitals} />
              <Column title="Industries we serve" items={enrichment.seniorCenters} />
              <Column title="Landmarks" items={enrichment.landmarks} />
            </div>
          </div>
        </section>
      )}

      {/* Industries we serve here */}
      <section className="scenarios" aria-labelledby="services-here">
        <div className="wrap">
          <div className="section-eyebrow">Verticals</div>
          <h2 id="services-here" className="section-title">Industries we serve in {location.city}.</h2>
          <div className="scenarios-grid">
            {indexedServices.slice(0, 6).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="scenario-card" style={{ display: "block", textDecoration: "none" }}>
                <div className="time">
                  <i className="ti ti-briefcase" aria-hidden="true" /> {s.h1.replace(/^Never (lose|miss) another /i, "").replace(/\.$/, "")}
                </div>
                <div className="body">{s.metaDescription}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby metros */}
      {nearbyLocationDetails.length > 0 && (
        <section className="plan" aria-labelledby="nearby-heading">
          <div className="wrap" style={{ maxWidth: 720 }}>
            <div className="section-eyebrow">Nearby</div>
            <h2 id="nearby-heading" className="section-title">Other metros we cover.</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              {nearbyLocationDetails.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 999,
                    border: "1px solid #d9cdb1",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--accent)",
                  }}
                >
                  {loc.city} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {allFaqs.length > 0 && (
        <FAQSection faqs={allFaqs} headingId={`faq-${location.slug}`} />
      )}

      {/* Final CTA */}
      <style>{`
        @media (max-width: 760px) {
          .la-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .loc-section-split { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
      <section className="final-cta">
        <div className="wrap">
          <h2>Try it from {location.city}.</h2>
          <div className="sub">Dial the demo line. Three minutes to know.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
          <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/book" className="btn-secondary">Book a 30-min setup consult →</Link>
            <Link href="/start-trial" className="btn-secondary">Start 7-day free trial →</Link>
          </div>
          <div className="guarantees" style={{ marginTop: 24, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            <span><i className="ti ti-shield-check" aria-hidden="true" /> 7-day free trial · no card</span>
            <span><i className="ti ti-shield-check" aria-hidden="true" /> Miss a booking? Month free</span>
            <span><i className="ti ti-shield-check" aria-hidden="true" /> Cancel anytime</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+(?=[A-Z])/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function splitFirstSentence(text: string): { lead: string; rest: string } {
  const sentences = splitSentences(text);
  if (sentences.length <= 1) return { lead: text, rest: "" };
  const lead = sentences.slice(0, 2).join(" ");
  const rest = sentences.slice(2).join(" ");
  return { lead, rest };
}

function Column({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 13, color: "#1a1611", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>
        {title}
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((it) => (
          <li key={it} style={{ padding: "4px 0", fontSize: 14, color: "#5c5147", lineHeight: 1.5 }}>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
