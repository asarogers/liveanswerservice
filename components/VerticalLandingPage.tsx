import Link from "next/link";
import VoiceSampleCard from "@/components/VoiceSampleCard";
import { VOICE_AGENTS } from "@/lib/voiceAgents";
import { siteConfig } from "@/lib/siteConfig";
import { getAllGuides } from "@/lib/guides";
import type { VerticalConfig } from "@/lib/verticals/types";
import HeroLogoVideo from "@/components/HeroLogoVideo";
import HeroCallForm from "@/components/HeroCallForm";

/**
 * VerticalLandingPage — renders the full StoryBrand HVAC-style landing for any
 * vertical. All copy comes from the config; layout/design is centralized here.
 *
 * Update this file to change every vertical at once. Update lib/verticals/<slug>.ts
 * to change one vertical's copy.
 */
export default function VerticalLandingPage({ config }: { config: VerticalConfig }) {
  const c = config;
  const [headBefore, headAfter] = c.hero.headline.split("{italicWord}");
  // ≥3 guide links on the homepage is a zero-tolerance check_all requirement —
  // this is the only crawl path from the homepage to longform content.
  const guides = getAllGuides().slice(0, 3);

  /* JSON-LD — vertical pages must carry the same schema stack as the legacy
     service template (Service + FAQPage + BreadcrumbList + WebPage). The
     homepage (canonical "/") gets FAQPage only — LocalBusiness/WebSite live
     in app/layout.tsx. */
  const canonicalPath = c.meta.canonical;
  const pageUrl =
    canonicalPath === "/" ? siteConfig.url : `${siteConfig.url}${canonicalPath}`;
  const isServicePage = canonicalPath.startsWith("/services/");
  const serviceName = c.meta.title.split("—")[0].trim();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = isServicePage
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: serviceName,
        description: c.meta.description,
        provider: {
          "@type": "LocalBusiness",
          name: siteConfig.name,
          telephone: siteConfig.phone.schema,
          url: siteConfig.url,
          areaServed: { "@type": "State", name: "California" },
        },
        areaServed: { "@type": "State", name: "California" },
        url: pageUrl,
      }
    : null;

  const breadcrumbSchema = isServicePage
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
          { "@type": "ListItem", position: 3, name: serviceName, item: pageUrl },
        ],
      }
    : null;

  const webPageSchema = isServicePage
    ? {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: c.meta.title,
        description: c.meta.description,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        about: { "@id": `${siteConfig.url}/#business` },
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {webPageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
      )}
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="la-hero la-hero--cream">
        <div className="wrap hero-wrap">
          <div className="hero-card">
            <div className="hero-eyebrow">
              <span className="dot" aria-hidden="true" />
              <span>{c.hero.eyebrow}</span>
            </div>
            <h1>
              {headBefore}
              <em>{c.hero.italicWord}</em>
              {headAfter}
            </h1>
            <p className="sub">
              <strong>{c.hero.subhead.seoBold}</strong> {c.hero.subhead.body}
            </p>
            <HeroCallForm recaptchaSiteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} />
            <div className="hero-foot-note">
              Have one of our AI agents call you now · no credit card · cancel anytime
            </div>
            <div className="hero-transitional">
              Not ready? <Link href="/calculator">See what you&rsquo;re losing →</Link>
            </div>
          </div>

          <div className="hero-phone-wrap">
            <HeroLogoVideo />
          </div>
        </div>
      </section>

      {/* ── CA TRUST STRIP ─────────────────────────────────── */}
      {c.trustStrip && (
        <section className="ca-trust-strip" aria-label="California trust signals">
          <div className="wrap">
            <div className="ca-trust-row">
              {c.trustStrip.map((t, i) => (
                <span key={i}>
                  <i className={`ti ti-${t.icon}`} aria-hidden="true" /> {t.label}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── ONE-LINER ──────────────────────────────────────── */}
      <section className="oneliner-band" aria-label="What Live Answer does">
        <div className="wrap-narrow">
          <p className="oneliner">{c.oneLiner}</p>
        </div>
      </section>

      {/* ── STAKES ─────────────────────────────────────────── */}
      <section className="stakes" aria-label="The cost of missed calls">
        <div className="wrap">
          <div className="stakes-box">
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <span className="section-num">{c.stakes.sectionNum}</span>
              <h2 className="section-title" style={{ margin: 0 }}>{c.stakes.title}</h2>
            </div>
            <div className="stakes-grid">
              {c.stakes.stats.map((s, i) => (
                <div key={i} className="stakes-stat">
                  <div className="num">{s.num}</div>
                  <div className="label">{s.label}</div>
                </div>
              ))}
            </div>
            {c.stakes.rankingNote && (
              <p
                className="stakes-ranking-note"
                style={{
                  textAlign: "center",
                  margin: "36px auto 0",
                  maxWidth: 720,
                  fontSize: 16,
                  lineHeight: 1.55,
                  color: "#5c5147",
                }}
              >
                <strong style={{ color: "#5a1f2e" }}>
                  Missed calls don&rsquo;t just lose the job — they lower your Google Maps ranking.
                </strong>{" "}
                {c.stakes.rankingNote}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── VOC PULL-OUT ───────────────────────────────────── */}
      <section className="voc-pullout" aria-label="What we hear from owners">
        <div className="wrap-narrow">
          <div className="voc-card">
            <div className="voc-bar-row">
              <div className="voc-bar" aria-hidden="true" />
              <div>
                <blockquote className="voc-quote">&ldquo;{c.vocQuote.quote}&rdquo;</blockquote>
                <div className="voc-attribution">{c.vocQuote.attribution}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCENARIOS ──────────────────────────────────────── */}
      <section className="scenarios" aria-label="Calls you're already losing">
        <div className="scenarios-wrap">
          <div className="scenarios-card">
            <div className="scenarios-card-grid">
              <div>
                <h2 className="scenarios-h2">{c.scenarios.title}</h2>
                <p className="scenarios-lede">
                  Every entry is a real California {c.verticalBar.label.toLowerCase().replace("built for california ", "").replace(" contractors", "")} owner&rsquo;s week. The calls you couldn&rsquo;t pick up. The ones that went somewhere else.
                </p>
              </div>
              <div className="scenarios-list">
                {c.scenarios.cards.map((card, i) => {
                  const icon = i === 0 ? "ti-clock" : i === 1 ? "ti-temperature-sun" : "ti-flame";
                  return (
                    <div key={i} className="scenarios-item">
                      <div className="scenarios-item-icon" aria-hidden="true">
                        <i className={`ti ${icon}`} />
                      </div>
                      <div>
                        <div className="scenarios-item-label">{card.time}</div>
                        <div className="scenarios-item-body">{card.body}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GUIDE ──────────────────────────────────────────── */}
      <section className="guide" aria-label="Why Live Answer">
        <div className="wrap-narrow">
          <div className="guide-box">
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <span className="section-num">{c.guide.sectionNum}</span>
              <h2 className="section-title" style={{ margin: 0 }}>{c.guide.title}</h2>
            </div>
            <p className="guide-empathy">{c.guide.empathy}</p>
            <div className="authority-grid">
              {c.guide.authority.map((a, i) => (
                <div key={i} className="authority-item">
                  <div className="authority-num">{a.num}</div>
                  <div className="authority-label">{a.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PLAN ───────────────────────────────────────────── */}
      <section className="plan" id="how" aria-label="How it works">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-num">{c.plan.sectionNum}</span>
            <h2 className="section-title" style={{ margin: 0 }}>{c.plan.title}</h2>
          </div>
          <div className="plan-timeline">
            <svg className="plan-timeline-line" viewBox="0 0 100 4" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <marker id="plan-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#5a1f2e" />
                </marker>
              </defs>
              <line x1="20" y1="2" x2="48" y2="2" stroke="#5a1f2e" strokeWidth="0.5" strokeDasharray="1.5 1" markerEnd="url(#plan-ah)" />
              <line x1="52" y1="2" x2="80" y2="2" stroke="#5a1f2e" strokeWidth="0.5" strokeDasharray="1.5 1" markerEnd="url(#plan-ah)" />
            </svg>
            {c.plan.steps.map((step) => (
              <div key={step.num} className="plan-tl-step">
                <div className="plan-tl-dot">{step.num}</div>
                <h3>{step.heading}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ───────────────────────────────────── */}
      <section className="integrations" aria-label="Software integrations">
        <div className="wrap">
          <div className="themed-box">
            <div className="label">{c.integrations.label}</div>
            <div className="integrations-row">
              {c.integrations.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SUCCESS VISION ─────────────────────────────────── */}
      <section className="success" aria-label="A month from now">
        <div className="wrap">
          <div className="themed-box">
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <span className="section-num">{c.success.sectionNum}</span>
              <h2 className="section-title" style={{ margin: 0 }}>{c.success.title}</h2>
            </div>
            <p className="success-lead">{c.success.lead}</p>
            {c.success.before ? (
              <div className="success-split">
                <div className="success-col success-col-before">
                  <div className="success-col-h">Before</div>
                  <ul>
                    {c.success.before.map((item, i) => (
                      <li key={i}>
                        <i className={`ti ti-${item.icon}`} aria-hidden="true" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="success-col success-col-after">
                  <div className="success-col-h">After</div>
                  <ul>
                    {c.success.items.map((item, i) => (
                      <li key={i}>
                        <i className={`ti ti-${item.icon}`} aria-hidden="true" />
                        <strong>{item.text}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="success-grid">
                {c.success.items.map((item, i) => (
                  <div key={i} className="success-item">
                    <i className={`ti ti-${item.icon}`} aria-hidden="true" />
                    <strong>{item.text}</strong>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── VOICE AGENTS ───────────────────────────────────── */}
      <section className="voices" aria-label="AI voice options">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-num">{c.voices.sectionNum}</span>
            <h2 className="section-title" style={{ margin: 0 }}>{c.voices.title}</h2>
            <p className="voices-sub">{c.voices.sub}</p>
          </div>
          <div className="voices-grid">
            {VOICE_AGENTS.map((a, i) => (
              <VoiceSampleCard key={a.name} index={i} name={a.name} env={a.env} src={a.src} />
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARE ────────────────────────────────────────── */}
      <section className="compare-section" aria-label="Compare what you'd pay">
        <div className="wrap">
          <div className="themed-box">
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <span className="section-num">{c.compare.sectionNum}</span>
              <h2 className="section-title" style={{ margin: 0 }}>{c.compare.title}</h2>
            </div>
            <div className="compare-table">
            <div className="compare-row compare-head">
              <div>What you do today</div>
              <div>Cost</div>
              <div>Result</div>
            </div>
            {c.compare.rows.map((row, i) => (
              <div key={i} className="compare-row">
                <div>{row.what}</div>
                <div>{row.cost}</div>
                <div>{row.result}</div>
              </div>
            ))}
            <div className="compare-row compare-us">
              <div><strong>Live Answer Service</strong></div>
              <div><strong>$500/mo flat</strong></div>
              <div>24/7 · bilingual · unlimited</div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ── UNLIMITED DIFFERENTIATOR ───────────────────────── */}
      {/* <section className="unlimited-bar" aria-label="Why unlimited matters">
        <div className="wrap-narrow">
          <h3 className="unlimited-h">{c.unlimited.headline}</h3>
          <div className="unlimited-grid">
            {c.unlimited.competitors.map((comp, i) => (
              <div key={i} className="unlimited-bad">
                <span className="x">✕</span>
                <strong>{comp.name}</strong>
                <span>{comp.cap}</span>
              </div>
            ))}
            <div className="unlimited-good">
              <span className="check">✓</span>
              <strong>Live Answer Service $500/mo</strong>
              <span>Unlimited, flat-rate, locked in</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* ── PRICING ────────────────────────────────────────── */}
      <section className="pricing-section" id="pricing" aria-label="Pricing">
        <div className="wrap">
          <div className="themed-box">
          <div className="pricing-head">
            <span className="section-num" style={{ textAlign: "center" }}>08 · Pricing</span>
            <h2 className="h2">
              One recovered call pays for <em>months</em>.
            </h2>
            <div className="sub">Flat-rate. Unlimited calls. No counting. No overages.</div>
          </div>
          <div className="pricing-grid">
            <div className="price-card featured">
              <div className="badge">Every call. Every minute.</div>
              <div className="tier">Unlimited</div>
              <div className="price">$500<span className="per">/mo</span></div>
              <div className="audience">{c.pricingAudience}</div>
              <ul>
                <li><i className="ti ti-check" aria-hidden="true" />Unlimited calls, 24/7 — no counting, no overages</li>
                <li><i className="ti ti-check" aria-hidden="true" />Bilingual English &amp; Spanish from the first ring</li>
                <li><i className="ti ti-check" aria-hidden="true" />Emergency triage + escalation to your cell</li>
                <li><i className="ti ti-check" aria-hidden="true" />SMS + email summary </li>
                <li><i className="ti ti-check" aria-hidden="true" />Call recordings + history</li>
                <li><i className="ti ti-check" aria-hidden="true" />No-show + follow-up SMS automation</li>
              </ul>
              <div className="setup-fee">
                $199 one-time setup · <em>waived with annual prepay</em>
              </div>
              <div className="annual">Annual: $5,100/yr ($425/mo)</div>
              <Link href="/start-trial" className="btn-secondary" style={{ marginTop: 16, display: "inline-block" }}>
                Start free trial →
              </Link>
            </div>
            <div className="price-card">
              <div className="tier">Custom</div>
              <div className="price">Let&rsquo;s talk</div>
              <div className="audience">Multi-location, franchise, or high-volume operations</div>
              <ul>
                <li><i className="ti ti-check" aria-hidden="true" />Multiple AI agents &amp; dedicated numbers</li>
                <li><i className="ti ti-check" aria-hidden="true" />Multi-location dispatch routing</li>
                <li><i className="ti ti-check" aria-hidden="true" />Custom CRM &amp; API integrations</li>
                <li><i className="ti ti-check" aria-hidden="true" />White-glove onboarding &amp; training</li>
                <li><i className="ti ti-check" aria-hidden="true" />Dedicated success manager</li>
                <li><i className="ti ti-check" aria-hidden="true" />SLA-backed uptime guarantee</li>
                <li><i className="ti ti-check" aria-hidden="true" />Volume discount on annual plans</li>
              </ul>
              <div className="annual">15-minute discovery call · custom quote in 24 hours</div>
              <a href={siteConfig.phone.href} className="btn-secondary" style={{ marginTop: 16, display: "inline-block" }}>
                Schedule a call →
              </a>
            </div>
          </div>
          <div className="guarantees">
            <span><i className="ti ti-shield-check" aria-hidden="true" />7-day free trial · no card</span>
            <span><i className="ti ti-shield-check" aria-hidden="true" />Miss a booking? Month free</span>
            <span><i className="ti ti-shield-check" aria-hidden="true" />Cancel anytime</span>
          </div>
          </div>
        </div>
      </section>

      {/* ── SETUP ──────────────────────────────────────────── */}
      {/* <section className="setup-info" aria-label="What your setup includes">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-num">09 · Setup</span>
            <h2 className="section-title" style={{ margin: 0 }}>What your setup includes.</h2>
            <p className="setup-sub">A real human builds your AI agent. Not a self-serve wizard.</p>
          </div>
          <div className="plan-grid">
            <div className="plan-step">
              <div className="num">1</div>
              <h3>24-hour kickoff call</h3>
              <p>We learn your business — services, pricing, service area, after-hours rules, escalation triggers.</p>
            </div>
            <div className="plan-step">
              <div className="num">2</div>
              <h3>Custom AI agent built</h3>
              <p>Trained on your terminology and your software. We write the script, you approve it.</p>
            </div>
            <div className="plan-step">
              <div className="num">3</div>
              <h3>Live within 48 hours</h3>
              <p>Phone forwarded. Calls answered. Bookings flowing into your calendar. You go back to the work you do best.</p>
            </div>
          </div>
          <div className="setup-fee-note">$199 one-time · waived with annual prepay</div>
        </div>
      </section> */}

      {/* ── CA MAP ─────────────────────────────────────────── */}
      <section className="ca-map" aria-label="California coverage">
        <div className="wrap">
          <div className="themed-box" style={{ textAlign: "center" }}>
          <span className="section-num">10 · Coverage</span>
          <div className="ca-map-visual">
            <iframe
              title="California coverage map — San Jose"
              src="https://maps.google.com/maps?q=San+Jose,+California&ll=37.298,-121.873&z=9&t=m&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="faq" aria-label="Frequently asked questions">
        <div className="wrap">
          <div className="themed-box">
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <span className="section-num">11 · FAQ</span>
              <h2 className="section-title" style={{ margin: 0 }}>Frequently asked questions.</h2>
            </div>
            <div className="faq-list">
              {/* `open` is required: answers must be in the initial HTML —
                  Google and LLM crawlers can't click (WEBSITE-TEMPLATE FAQ invariant) */}
              {c.faqs.map((faq, i) => (
                <details key={i} open>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CROSS-VERTICAL EDITORIAL LINKS (homepage only) ─── */}
      {c.crossVerticals && (
        <section
          className="cross-verticals"
          aria-label="Other industries we answer for"
          style={{ padding: "64px 24px" }}
        >
          <div className="wrap" style={{ maxWidth: 820 }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <span className="section-num">{c.crossVerticals.sectionNum}</span>
              <h2 className="section-title" style={{ margin: 0 }}>
                {c.crossVerticals.title}
              </h2>
            </div>
            {c.crossVerticals.items.map((item, i) => (
              <div key={i} style={{ marginBottom: i < c.crossVerticals!.items.length - 1 ? 40 : 0 }}>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(20px, 2.2vw, 26px)",
                    fontWeight: 400,
                    letterSpacing: "-0.015em",
                    color: "#1a1611",
                    margin: "0 0 12px",
                  }}
                >
                  {item.heading}
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: "#5c5147", margin: 0 }}>
                  {item.body}
                  <Link
                    href={item.href}
                    style={{ color: "#5a1f2e", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: 3 }}
                  >
                    {item.linkText}
                  </Link>
                  {item.after}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── GUIDES PREVIEW ─────────────────────────────────── */}
      {guides.length > 0 && (
        <section className="guides-preview" aria-label="Guides" style={{ padding: "64px 24px" }}>
          <div className="wrap" style={{ maxWidth: 1100 }}>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <span className="section-num">12 · Guides</span>
              <h2 className="section-title" style={{ margin: 0 }}>
                The numbers behind the problem.
              </h2>
            </div>
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
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
                    }}
                    aria-label={`Read guide: ${g.h1 || g.title}`}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 19,
                        fontWeight: 400,
                        lineHeight: 1.25,
                        letterSpacing: "-0.015em",
                        color: "#1a1611",
                        margin: "0 0 10px",
                      }}
                    >
                      {g.h1 || g.title}
                    </h3>
                    <p style={{ fontSize: 14, lineHeight: 1.55, color: "#5c5147", flex: 1, margin: 0 }}>
                      {g.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <p style={{ textAlign: "center", marginTop: 24 }}>
              <Link href="/guides" style={{ color: "#5a1f2e", fontWeight: 600 }}>
                All guides →
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ──────────────────────────────────────── */}
      <section className="final-cta">
        <div className="wrap">
          <h2>{c.finalCta.headline}</h2>
          <div className="sub">{c.finalCta.sub}</div>
          {/* Direct CTA — same button repeated from the hero & pricing */}
          <Link href="/start-trial" className="phone-btn">
            <i className="ti ti-rocket" aria-hidden="true" />
            <span>Start your free 7-day trial</span>
          </Link>
          {/* Transitional CTA — lower-risk: talk to a human */}
          <div className="final-cta-alt">
            Prefer to talk first?{" "}
            <a href={siteConfig.phone.href}>Call {siteConfig.phone.display}</a>
          </div>
        </div>
      </section>
    </>
  );
}
