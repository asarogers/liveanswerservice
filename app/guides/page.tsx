import type { Metadata } from "next";
import Link from "next/link";
import { getAllGuides } from "@/lib/guides";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Guides — Live Answer",
  description:
    "In-depth guides on AI receptionists, missed-call economics, and bilingual answering coverage for California small businesses.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "Guides — Live Answer",
    description:
      "In-depth guides on AI receptionists, missed-call economics, and bilingual answering coverage for California small businesses.",
    url: `${siteConfig.url}/guides`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      { url: `${siteConfig.url}/opengraph-image.png`, width: 1200, height: 630, alt: "Live Answer guides" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guides — Live Answer",
    description:
      "In-depth guides on AI receptionists, missed-call economics, and bilingual answering coverage for California small businesses.",
    images: [`${siteConfig.url}/opengraph-image.png`],
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function GuidesIndexPage() {
  const guides = getAllGuides();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="la-hero" style={{ paddingBottom: 32 }}>
        <div className="wrap-narrow">
          <h1>
            Answering service <em>guides</em>.
          </h1>
          <p className="sub">
            Missed-call economics, bilingual coverage, and AI vs. human comparisons for California
            small business owners. Written by practitioners, not content farms.
          </p>
        </div>
      </section>

      {/* Guide grid */}
      <section className="section-pad" aria-labelledby="all-guides-heading">
        <div className="wrap" style={{ maxWidth: 1100 }}>
          <h2
            id="all-guides-heading"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(22px, 2.4vw, 28px)",
              fontWeight: 400,
              letterSpacing: "-0.015em",
              color: "#1a1611",
              margin: "0 0 24px",
            }}
          >
            All guides
          </h2>

          {guides.length === 0 ? (
            <p style={{ color: "#5c5147" }}>Guides coming soon.</p>
          ) : (
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 24,
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
              aria-label="Guide list"
            >
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/guides/${g.slug}`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      padding: 24,
                      background: "#fdfaf3",
                      border: "1px solid #d9cdb1",
                      borderRadius: 12,
                      textDecoration: "none",
                      transition: "border-color 0.15s, transform 0.15s",
                    }}
                    aria-label={`Read guide: ${g.h1 || g.title}`}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 20,
                        fontWeight: 400,
                        lineHeight: 1.25,
                        letterSpacing: "-0.015em",
                        color: "#1a1611",
                        margin: "0 0 10px",
                      }}
                    >
                      {g.h1 || g.title}
                    </h3>
                    <p style={{ fontSize: 14, lineHeight: 1.55, color: "#5c5147", flex: 1, margin: "0 0 16px" }}>
                      {g.description}
                    </p>
                    <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "1px solid #d9cdb1", fontSize: 12, color: "#94867a", display: "flex", gap: 8, alignItems: "center" }}>
                      {g.author && <span>{g.author}</span>}
                      {g.author && <span aria-hidden="true">·</span>}
                      <time dateTime={g.datePublished}>{formatDate(g.datePublished)}</time>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <div className="wrap">
          <h2>Done reading? Start dialing.</h2>
          <div className="sub">Call the demo line and roleplay your worst customer.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </section>
    </>
  );
}
