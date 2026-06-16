import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllGuides, getGuideBySlug } from "@/lib/guides";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-static";

/* ──────────────────────────────────────────────────────────
   STATIC PARAMS + METADATA
   ────────────────────────────────────────────────────────── */
export async function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }));
}

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${slug}` },
    ...(guide.targetKeyword && { keywords: guide.targetKeyword }),
    authors: [{ name: guide.author ?? siteConfig.founder }],
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `${siteConfig.url}/guides/${slug}`,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
      authors: [guide.author ?? siteConfig.founder],
      images: [
        { url: `${siteConfig.url}/opengraph-image.png`, width: 1200, height: 630, alt: "Live Answer" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: [`${siteConfig.url}/opengraph-image.png`],
    },
  };
}

/* ──────────────────────────────────────────────────────────
   HELPERS
   ────────────────────────────────────────────────────────── */
function extractFAQ(content: string): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  const seen = new Set<string>();

  const faqMatch = content.match(
    /##\s+(?:Frequently Asked Questions|FAQ)[^\n]*\n([\s\S]*?)(?=\n##\s|\n---\s*$|$)/i,
  );
  if (faqMatch) {
    const qRegex = /###\s+(.+?)\n([\s\S]*?)(?=###\s|$)/g;
    let m;
    while ((m = qRegex.exec(faqMatch[0])) !== null) {
      const q = m[1].trim();
      if (!seen.has(q)) {
        seen.add(q);
        faqs.push({
          question: q,
          answer: m[2].trim().replace(/\*\*/g, "").replace(/\n+/g, " ").slice(0, 320),
        });
      }
    }
  }

  return faqs;
}

/* ──────────────────────────────────────────────────────────
   PAGE
   ────────────────────────────────────────────────────────── */
export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const author = guide.author ?? siteConfig.founder;
  const faqs = extractFAQ(guide.content);
  // Contextual internal linking: surface other guides so each page passes link
  // equity and crawlers discover the full set (the /guides hub alone is thin).
  const related = getAllGuides().filter((g) => g.slug !== guide.slug).slice(0, 4);

  // Article JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.h1 || guide.title,
    description: guide.description,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    ...(guide.targetKeyword && { keywords: guide.targetKeyword }),
    author: {
      "@type": "Person",
      name: author,
      url: `${siteConfig.url}/about`,
    },
    publisher: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      telephone: siteConfig.phone.schema,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/guides/${guide.slug}`,
    },
  };

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }
      : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteConfig.url}/guides/${guide.slug}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.h1 || guide.title,
        item: `${siteConfig.url}/guides/${guide.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        style={{ background: "#f7f2e7", padding: "12px 0", borderBottom: "1px solid #d9cdb1" }}
      >
        <div className="wrap">
          <ol
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 4,
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: 13,
              color: "#5c5147",
            }}
          >
            <li>
              <Link href="/" style={{ color: "#5c5147", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li aria-hidden="true" style={{ userSelect: "none" }}>/</li>
            <li>
              <Link href="/guides" style={{ color: "#5c5147", textDecoration: "none" }}>
                Guides
              </Link>
            </li>
            <li aria-hidden="true" style={{ userSelect: "none" }}>/</li>
            <li
              style={{ color: "#1a1611", fontWeight: 500, maxWidth: 280, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
              aria-current="page"
            >
              {guide.h1 || guide.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <header style={{ background: "#f7f2e7", padding: "48px 0 32px" }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#1a1611",
              margin: 0,
            }}
          >
            {guide.h1 || guide.title}
          </h1>
          <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 12 }}>
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#1a1611", margin: 0 }}>{author}</p>
              <p style={{ fontSize: 12, color: "#94867a", margin: "2px 0 0" }}>
                <time dateTime={guide.dateModified}>
                  Updated{" "}
                  {new Date(guide.dateModified).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <article style={{ background: "#f7f2e7", padding: "32px 0 64px" }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: guide.contentHtml }}
          />
        </div>
      </article>

      {/* Related guides — contextual internal links */}
      {related.length > 0 && (
        <section style={{ background: "#f7f2e7", padding: "0 0 56px" }}>
          <div className="wrap" style={{ maxWidth: 800 }}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 22,
                fontWeight: 400,
                color: "#1a1611",
                margin: "0 0 16px",
              }}
            >
              Related guides
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
              {related.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/guides/${g.slug}`}
                    style={{ color: "#5a1f2e", textDecoration: "none", fontSize: 16, fontWeight: 500 }}
                  >
                    {g.h1 || g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="final-cta">
        <div className="wrap">
          <h2>Ready to stop missing calls?</h2>
          <div className="sub">
            Call the demo line and hear Live Answer handle your toughest caller type.
          </div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </section>
    </>
  );
}
