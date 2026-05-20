import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { getAllPosts, getCategories } from "@/lib/blog";
import CategoryFilter from "@/components/CategoryFilter";
import BlogSearch from "@/components/BlogSearch";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-static";

interface BlogPageProps {
  searchParams: Promise<{ category?: string; q?: string }>;
}

export async function generateMetadata({ searchParams }: BlogPageProps): Promise<Metadata> {
  const { category, q } = await searchParams;
  const activeCategory = category || "All";
  const isFiltered = activeCategory !== "All";
  const hasSearchQuery = !!(q && q.trim());
  const title = isFiltered
    ? `${activeCategory} — Live Answer Blog`
    : "Live Answer Blog — AI Receptionist Strategy for CA Small Business";
  const description = isFiltered
    ? `${activeCategory} articles from Live Answer — AI receptionist strategy and missed-call economics for California small business.`
    : "Strategy, comparisons, and missed-call economics for California small business owners considering an AI receptionist.";
  return {
    title,
    description,
    alternates: { canonical: "/blog" },
    ...((isFiltered || hasSearchQuery) && { robots: { index: false, follow: true } }),
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/blog`,
      siteName: siteConfig.name,
      type: "website",
      images: [
        { url: `${siteConfig.url}/opengraph-image.png`, width: 1200, height: 630, alt: "Live Answer blog" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category, q } = await searchParams;
  const allPosts = getAllPosts();
  const categories = getCategories();
  const activeCategory = category || "All";
  const searchQuery = (q || "").toLowerCase().trim();

  const featuredPost = allPosts.find((p) => p.featured);

  const categoryCounts: Record<string, number> = { All: allPosts.length };
  for (const post of allPosts) {
    categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
  }

  const categoryFiltered =
    activeCategory === "All"
      ? allPosts
      : allPosts.filter((p) => p.category === activeCategory);

  const filteredPosts = searchQuery
    ? categoryFiltered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery) ||
          p.excerpt.toLowerCase().includes(searchQuery),
      )
    : categoryFiltered;

  const gridPosts = filteredPosts.filter(
    (p) => !p.featured || activeCategory !== "All" || !!searchQuery,
  );

  const showFeatured = featuredPost && activeCategory === "All" && !searchQuery;

  return (
    <>
      {/* Hero */}
      <section className="la-hero" style={{ paddingBottom: 32 }}>
        <div className="wrap-narrow">
          <h1>
            From the <em>blog</em>.
          </h1>
          <p className="sub">
            Strategy, vertical comparisons, and missed-call economics for California small
            business owners considering an AI receptionist.
          </p>
        </div>
      </section>

      {/* Featured */}
      {showFeatured && (
        <section className="section-pad" style={{ background: "#f7f2e7", paddingTop: 32, paddingBottom: 32 }}>
          <div className="wrap" style={{ maxWidth: 880 }}>
            <div className="section-eyebrow" style={{ textAlign: "left", marginBottom: 16 }}>
              Featured
            </div>
            <Link
              href={`/blog/${featuredPost.slug}`}
              style={{
                display: "block",
                background: "#fdfaf3",
                border: "1px solid #d9cdb1",
                borderRadius: 16,
                padding: 40,
                textDecoration: "none",
                transition: "border-color 0.15s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, fontSize: 12, color: "#94867a", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                <span>{featuredPost.category}</span>
                <span aria-hidden="true">·</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: "#1a1611",
                  margin: "0 0 12px",
                }}
              >
                {featuredPost.title}
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#5c5147", margin: "0 0 16px" }}>
                {featuredPost.excerpt}
              </p>
              <div style={{ fontSize: 13, color: "#94867a", display: "flex", gap: 8, alignItems: "center" }}>
                <span>{featuredPost.author}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={featuredPost.date}>{formatDate(featuredPost.date)}</time>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="section-pad" aria-labelledby="all-articles-heading">
        <div className="wrap" style={{ maxWidth: 1100 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 32 }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
              <h2
                id="all-articles-heading"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(22px, 2.4vw, 28px)",
                  fontWeight: 400,
                  letterSpacing: "-0.015em",
                  color: "#1a1611",
                  margin: 0,
                }}
              >
                {searchQuery
                  ? `Results for "${q}"`
                  : activeCategory === "All"
                    ? "All articles"
                    : activeCategory}
              </h2>
              <Suspense fallback={<div style={{ width: 280, height: 36 }} />}>
                <BlogSearch initialValue={q || ""} />
              </Suspense>
            </div>
            <Suspense fallback={<div style={{ height: 36 }} />}>
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                categoryCounts={categoryCounts}
              />
            </Suspense>
          </div>

          {gridPosts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "48px 0", color: "#5c5147" }}>
              <p>No posts found{searchQuery ? ` for "${q}"` : " in this category"}.</p>
              <Link
                href="/blog"
                style={{ display: "inline-block", marginTop: 16, padding: "8px 16px", border: "1px solid #d9cdb1", borderRadius: 8, color: "#1a1611" }}
              >
                View all articles
              </Link>
            </div>
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
              aria-label="Article list"
            >
              {gridPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
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
                    aria-label={`Read: ${post.title}`}
                  >
                    <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 11, color: "#94867a", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>
                      <span>{post.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                    </div>
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
                      {post.title}
                    </h3>
                    <p style={{ fontSize: 14, lineHeight: 1.55, color: "#5c5147", flex: 1, margin: "0 0 16px" }}>
                      {post.excerpt}
                    </p>
                    <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "1px solid #d9cdb1", fontSize: 12, color: "#94867a", display: "flex", gap: 8 }}>
                      <span>{post.author}</span>
                      <span aria-hidden="true">·</span>
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
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
