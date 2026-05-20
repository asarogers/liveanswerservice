import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/siteConfig";
import { getAllServices } from "@/lib/services-data";
import { SERVICE_TINTS } from "@/lib/vertical-tints";
import { loadSitePlan, noindexSlugs } from "@/lib/site-plan";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    ...(post.keywords && { keywords: post.keywords }),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: `${siteConfig.url}/opengraph-image.png`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${siteConfig.url}/opengraph-image.png`],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Extract FAQ entries — explicit "## FAQ" section + any question-shaped H2 */
function extractFAQ(content: string): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  const seen = new Set<string>();

  const faqMatch = content.match(/##\s+(?:Frequently Asked Questions|FAQ)[^\n]*\n([\s\S]*?)(?=\n##\s|\n---\s*$|$)/i);
  if (faqMatch) {
    const qRegex = /###\s+(.+?)\n([\s\S]*?)(?=###\s|$)/g;
    let m;
    while ((m = qRegex.exec(faqMatch[0])) !== null) {
      const q = m[1].trim();
      if (!seen.has(q)) {
        seen.add(q);
        faqs.push({ question: q, answer: m[2].trim().replace(/\*\*/g, "").replace(/\n+/g, " ").slice(0, 320) });
      }
    }
  }

  const sectionRegex = /^##\s+(.+)$/gm;
  let sm;
  while ((sm = sectionRegex.exec(content)) !== null) {
    const heading = sm[1].trim();
    if (!seen.has(heading) && /^(what|how|who|why|when|where|can|is|are|does|do|should|will)\b/i.test(heading)) {
      const afterHeading = content.slice(sm.index + sm[0].length);
      const paraMatch = afterHeading.match(/^\n+([\s\S]+?)(?=\n##|\n---|\n###|$)/);
      const answer = paraMatch
        ? paraMatch[1].trim().replace(/\*\*/g, "").replace(/\n+/g, " ").slice(0, 320)
        : heading;
      seen.add(heading);
      faqs.push({ question: heading, answer });
    }
  }
  return faqs;
}

function extractH2Headings(content: string): { text: string; id: string }[] {
  const regex = /^##\s+(.+)$/gm;
  const headings: { text: string; id: string }[] = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const text = match[1].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    headings.push({ text, id });
  }
  return headings;
}

/** Pick 2-3 related services to surface at the bottom of a post, weighted by
 *  keyword overlap. Only suggest services that are currently indexed. */
function suggestServices(text: string, max = 3): Array<{ slug: string; label: string; accent: string }> {
  const lower = text.toLowerCase();
  const KEYWORDS: Array<{ kw: RegExp; slug: string }> = [
    { kw: /\b(hvac|plumb|emergency|after.?hours|dispatch|jobber|service.?titan)\b/, slug: "hvac-answering-service" },
    { kw: /\b(attorney|lawyer|legal|retainer|firm|intake|clio|mycase)\b/,           slug: "attorney-answering-service" },
    { kw: /\b(dental|dentist|patient|dentrix|open.?dental)\b/,                       slug: "dental-answering-service" },
    { kw: /\b(restaurant|reservation|opentable|resy|toast)\b/,                       slug: "restaurant-answering-service" },
    { kw: /\b(salon|spa|stylist|vagaro|mindbody)\b/,                                 slug: "salon-and-spa-answering-service" },
    { kw: /\b(real.?estate|broker|listing|showing|zillow)\b/,                        slug: "real-estate-answering-service" },
    { kw: /\b(property.?manage|tenant|landlord|lease|maintenance)\b/,                slug: "property-management-answering-service" },
    { kw: /\b(medical|physician|clinic|ehr|insurance.?verif)\b/,                     slug: "medical-office-answering-service" },
    { kw: /\b(bilingual|spanish|español|hispanic|latino)\b/,                         slug: "small-business-answering-service" },
  ];
  const noindex = noindexSlugs(loadSitePlan());
  const all = getAllServices();
  const seen = new Set<string>();
  const out: Array<{ slug: string; label: string; accent: string }> = [];
  for (const { kw, slug } of KEYWORDS) {
    if (!kw.test(lower) || seen.has(slug) || noindex.has(slug)) continue;
    const svc = all.find((s) => s.slug === slug);
    if (!svc) continue;
    const tint = SERVICE_TINTS[slug];
    out.push({
      slug,
      label: svc.h1.replace(/^Never (lose|miss) another /i, "").replace(/\.$/, ""),
      accent: tint?.accent ?? "#1A1A17",
    });
    seen.add(slug);
    if (out.length >= max) break;
  }
  return out;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const headings = post.content.length > 1200 ? extractH2Headings(post.content) : [];
  const faqs = extractFAQ(post.content);
  const related = suggestServices(`${post.title} ${post.content} ${post.category}`);

  // JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}/opengraph-image.png`,
    datePublished: post.date,
    dateModified: post.date,
    ...(post.keywords && { keywords: post.keywords }),
    author: { "@type": "Person", name: post.author, url: `${siteConfig.url}/about` },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/icon.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/blog/${post.slug}` },
  };
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  } : null;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteConfig.url}/blog/${post.slug}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}/blog/${post.slug}` },
    ],
  };
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/blog/${post.slug}`,
    url: `${siteConfig.url}/blog/${post.slug}`,
    name: post.title,
    description: post.excerpt,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    breadcrumb: { "@id": `${siteConfig.url}/blog/${post.slug}#breadcrumb` },
    about: { "@id": `${siteConfig.url}/#business` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ padding: "12px 0", borderBottom: "1px solid #d9cdb1", background: "#f7f2e7" }}>
        <div className="wrap">
          <ol style={{ display: "flex", flexWrap: "wrap", gap: 6, fontSize: 13, color: "#5c5147", listStyle: "none", padding: 0, margin: 0 }}>
            <li><Link href="/" style={{ color: "inherit" }}>Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blog" style={{ color: "inherit" }}>Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li style={{ color: "#1a1611" }} aria-current="page">{post.title}</li>
          </ol>
        </div>
      </nav>

      {/* Article header */}
      <header className="la-hero" style={{ paddingTop: 64, paddingBottom: 24, textAlign: "left" }}>
        <div className="wrap-narrow">
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", color: "#94867a" }}>
            <Link
              href={`/blog?category=${encodeURIComponent(post.category)}`}
              style={{ color: "#1a1611", fontWeight: 500 }}
            >
              {post.category}
            </Link>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <h1 style={{ textAlign: "left", margin: "0 0 16px" }}>{post.title}</h1>
          <p className="sub" style={{ textAlign: "left", margin: 0 }}>{post.excerpt}</p>
          <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid #d9cdb1", fontSize: 13, color: "#5c5147" }}>
            By <strong style={{ color: "#1a1611", fontWeight: 500 }}>{post.author}</strong> · Founder, Live Answer
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className="section-pad" aria-label={post.title} style={{ paddingTop: 32 }}>
        <div className="wrap-narrow">
          {headings.length > 0 && (
            <nav
              aria-label="Table of contents"
              style={{
                padding: 20,
                marginBottom: 32,
                background: "#f7f2e7",
                border: "1px solid #d9cdb1",
                borderRadius: 12,
              }}
            >
              <p style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", color: "#94867a", margin: "0 0 8px" }}>
                In this article
              </p>
              <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {headings.map((h, i) => (
                  <li key={h.id} style={{ padding: "4px 0", fontSize: 14 }}>
                    <a href={`#${h.id}`} style={{ color: "#5c5147" }}>
                      <span style={{ marginRight: 8, color: "#1a1611", fontWeight: 500 }}>{i + 1}.</span>
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Markdown-rendered article HTML */}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            style={{ fontSize: 17, lineHeight: 1.7, color: "#5c5147" }}
          />
        </div>
      </article>

      {/* Related services (tinted dots per vertical) */}
      {related.length > 0 && (
        <section className="plan" aria-labelledby="related-services-heading">
          <div className="wrap" style={{ maxWidth: 880 }}>
            <div className="section-eyebrow">Related verticals</div>
            <h2 id="related-services-heading" className="section-title">Want this for your business?</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 18px",
                    borderRadius: 999,
                    border: "1px solid #d9cdb1",
                    background: "#fdfaf3",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#1a1611",
                    textDecoration: "none",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{ width: 10, height: 10, borderRadius: "50%", background: s.accent }}
                  />
                  {s.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="section-pad" aria-labelledby="related-posts-heading" style={{ background: "#f7f2e7" }}>
          <div className="wrap" style={{ maxWidth: 1100 }}>
            <h2
              id="related-posts-heading"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 26,
                fontWeight: 400,
                letterSpacing: "-0.015em",
                margin: "0 0 24px",
                color: "#1a1611",
              }}
            >
              More from {post.category}
            </h2>
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 16,
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {relatedPosts.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/blog/${r.slug}`}
                    style={{
                      display: "block",
                      padding: 20,
                      background: "#fdfaf3",
                      border: "1px solid #d9cdb1",
                      borderRadius: 12,
                      textDecoration: "none",
                    }}
                  >
                    <div style={{ fontSize: 11, color: "#94867a", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                      {r.category} · {r.readTime}
                    </div>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 18, fontWeight: 400, lineHeight: 1.3, color: "#1a1611", margin: 0 }}>
                      {r.title}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Final CTA */}
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
