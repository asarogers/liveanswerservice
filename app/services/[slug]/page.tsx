import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FAQSection from "@/components/FAQSection";
import VerticalLandingPage from "@/components/VerticalLandingPage";
import { siteConfig } from "@/lib/siteConfig";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  getChildServices,
  getHubService,
} from "@/lib/services-data";
import { getLocationBySlug } from "@/lib/locations-data";
import { SERVICE_FAQS } from "@/lib/common-faqs";
import { getServiceFAQs } from "@/lib/service-faqs";
import { loadSitePlan, noindexSlugs } from "@/lib/site-plan";
import { tintForService, tintStyleVars } from "@/lib/vertical-tints";
import { getVertical } from "@/lib/verticals";

/** Slugs the SEO pipeline marked exclude/orphan — emit noindex per page. */
const NOINDEX_SLUGS = noindexSlugs(loadSitePlan());

function slugToLabel(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  /* New StoryBrand template for registered verticals — use the config's meta.
     Must still honor the site-plan exclude bucket (publishing schedule): this
     branch previously bypassed NOINDEX_SLUGS, leaking week-gated verticals
     (e.g. dental) into the index ahead of schedule. */
  const vertical = getVertical(slug);
  if (vertical) {
    const isNoindex = NOINDEX_SLUGS.has(slug);
    return {
      title: vertical.meta.title,
      description: vertical.meta.description,
      alternates: { canonical: vertical.meta.canonical },
      ...(isNoindex
        ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } }
        : {}),
    };
  }

  const service = getServiceBySlug(slug);
  if (!service) return {};

  const isNoindex = NOINDEX_SLUGS.has(slug);

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    ...(isNoindex
      ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } }
      : {}),
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: `${service.title} | ${siteConfig.name}`,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;

  /* Registered verticals get the new StoryBrand template. */
  const vertical = getVertical(slug);
  if (vertical) {
    return <VerticalLandingPage config={vertical} />;
  }

  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const tint = tintForService(service.slug);
  const tintStyle = tintStyleVars(tint);

  // Hub / child silo context
  const hubService = service.hubSlug ? getHubService(service.slug) : null;
  const childServices = service.isHub ? getChildServices(service.slug) : [];

  /* Build labels for related services and locations */
  const relatedServiceItems = service.relatedServices.map((rs) => {
    const related = getServiceBySlug(rs);
    return { slug: rs, label: related?.h1 ?? slugToLabel(rs) };
  });
  const relatedLocationItems = service.relatedLocations.map((rl) => {
    const related = getLocationBySlug(rl);
    return { slug: rl, label: related?.city ?? slugToLabel(rl) };
  });

  /* JSON-LD schema */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone.schema,
      url: siteConfig.url,
      areaServed: relatedLocationItems.map((loc) => ({ "@type": "City", name: `${loc.label}, CA` })),
    },
    areaServed: relatedLocationItems.map((loc) => ({ "@type": "City", name: `${loc.label}, CA` })),
    url: `${siteConfig.url}/services/${service.slug}`,
  };

  const questionWords = /^(What|How|Why|Who|When|Can|Is|Are|Do|Does|Will|Should)\b/i;
  const faqSections = service.sections.filter((s) => questionWords.test(s.heading.trim()));
  const faqSchema = faqSections.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqSections.map((s) => ({
          "@type": "Question",
          name: s.heading.trim().endsWith("?") ? s.heading.trim() : `${s.heading.trim()}?`,
          acceptedAnswer: { "@type": "Answer", text: s.content.slice(0, 500) },
        })),
      }
    : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteConfig.url}/services/${service.slug}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
      { "@type": "ListItem", position: 3, name: service.h1, item: `${siteConfig.url}/services/${service.slug}` },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/services/${service.slug}`,
    url: `${siteConfig.url}/services/${service.slug}`,
    name: service.title,
    description: service.metaDescription,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    breadcrumb: { "@id": `${siteConfig.url}/services/${service.slug}#breadcrumb` },
    about: { "@id": `${siteConfig.url}/#business` },
  };

  return (
    <div style={tintStyle}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Vertical badge — uses --accent-soft from tintStyle */}
      <div className="vertical-bar">
        <i className={`ti ti-${tint.icon}`} aria-hidden="true" />
        {tint.label}
      </div>

      {/* Hero */}
      <section className="la-hero" aria-labelledby="service-hero-heading">
        <div className="wrap-narrow">
          <h1 id="service-hero-heading">{service.h1}</h1>
          <p className="sub">{service.intro}</p>
          <div className="proof-pill">
            <span className="dot" aria-hidden="true" />
            <span>Proof · A real customer. A real booking.</span>
          </div>
        </div>
      </section>

      {/* Phone CTA */}
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

      {/* Content sections — alternate background, accent rule above each heading */}
      {service.sections.map((section, idx) => {
        const isAlt = idx % 2 === 1;
        return (
          <section
            key={idx}
            className="section-pad"
            style={{ background: isAlt ? "#f7f2e7" : "#f7f2e7" }}
            aria-labelledby={`section-${idx}-heading`}
          >
            <div className="wrap" style={{ maxWidth: 760 }}>
              <hr className="accent-rule" style={{ marginInlineStart: 0 }} />
              <h2
                id={`section-${idx}-heading`}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(22px, 2.4vw, 30px)",
                  fontWeight: 400,
                  lineHeight: 1.25,
                  letterSpacing: "-0.015em",
                  color: "#1a1611",
                  marginBottom: 16,
                }}
              >
                {section.heading}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "#5c5147",
                  margin: 0,
                }}
              >
                {section.content}
              </p>
            </div>
          </section>
        );
      })}

      {/* Hub: list child services when this page IS a hub */}
      {service.isHub && childServices.length > 0 && (
        <section className="plan" aria-labelledby="hub-children-heading">
          <div className="wrap" style={{ maxWidth: 880 }}>
            <div className="section-eyebrow">In this category</div>
            <h2 id="hub-children-heading" className="section-title">
              Specific services in this category.
            </h2>
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 16,
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {childServices.map((child) => (
                <li key={child.slug}>
                  <Link
                    href={`/services/${child.slug}`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "16px 20px",
                      background: "#fdfaf3",
                      border: "1px solid #d9cdb1",
                      borderRadius: 10,
                      textDecoration: "none",
                    }}
                  >
                    <span style={{ fontWeight: 600, color: "#1a1611", fontSize: 15 }}>
                      {child.name ?? child.h1}
                    </span>
                    <span style={{ fontSize: 13, color: "#5c5147", marginTop: 6, lineHeight: 1.5 }}>
                      {child.metaDescription}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Child: link back to hub when this page IS a child */}
      {hubService && (
        <section className="plan" aria-label="Part of">
          <div className="wrap" style={{ maxWidth: 880 }}>
            <div className="section-eyebrow">Part of</div>
            <Link
              href={`/services/${hubService.slug}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                background: "#fdfaf3",
                border: "1px solid #d9cdb1",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 500,
                color: "var(--accent)",
                textDecoration: "none",
              }}
            >
              {hubService.name ?? hubService.h1} →
            </Link>
          </div>
        </section>
      )}

      {/* Related links */}
      <section className="plan" aria-labelledby="related-heading">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <div className="section-eyebrow">Explore more</div>
          <h2 id="related-heading" className="section-title">Related verticals &amp; metros.</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 32,
              textAlign: "left",
            }}
          >
            <div>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 14, color: "#1a1611", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Related services
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {relatedServiceItems.map((rs) => (
                  <li key={rs.slug} style={{ padding: "6px 0" }}>
                    <Link href={`/services/${rs.slug}`} style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: 3, fontWeight: 500 }}>
                      {rs.label} →
                    </Link>
                  </li>
                ))}
                <li style={{ padding: "6px 0" }}>
                  <Link href="/services" style={{ color: "#5c5147", textDecoration: "underline", textUnderlineOffset: 3 }}>
                    View all industries →
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 14, color: "#1a1611", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Where we serve this
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {relatedLocationItems.map((rl) => (
                  <li key={rl.slug} style={{ padding: "6px 0" }}>
                    <Link href={`/locations/${rl.slug}`} style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: 3, fontWeight: 500 }}>
                      {rl.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={getServiceFAQs(service.slug) ?? SERVICE_FAQS}
        headingId={`faq-${service.slug}`}
      />

      {/* Final CTA */}
      <section className="final-cta">
        <div className="wrap">
          <h2>Test it now. Three minutes.</h2>
          <div className="sub">Dial the demo line and roleplay your worst customer.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
