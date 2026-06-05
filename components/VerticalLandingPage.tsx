import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import type { VerticalConfig } from "@/lib/verticals/types";
import HeroLogoVideo from "@/components/HeroLogoVideo";

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

  return (
    <>
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
            <form className="hero-call-form" action="/api/demo-call" method="post">
              <input type="tel" name="phone" placeholder="Enter your phone number" required aria-label="Your phone number" />
              <button type="submit">
                <i className="ti ti-phone-outgoing" aria-hidden="true" />
                Call me
              </button>
            </form>
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
            {c.voices.cards.map((v, i) => {
              const seed = i * 1.3;
              return (
                <div key={i} className="voice-card">
                  <span className="voice-pill">{v.label}</span>
                  <div className="voice-name">{v.name}</div>
                  <button type="button" className="voice-play" aria-label={`Play ${v.name}`}>
                    <svg width="20" height="20" viewBox="0 0 16 16" aria-hidden="true" style={{ display: "block" }}>
                      <polygon points="5,3 13,8 5,13" fill="#1a1611" stroke="#1a1611" strokeLinejoin="round" strokeWidth="0.5" />
                    </svg>
                  </button>
                  <div className="voice-wave" aria-hidden="true">
                    <div className="voice-wave-bars">
                      {Array.from({ length: 64 }).map((_, j) => {
                        const h = 18 + (Math.sin(j * 0.45 + seed) + 1) * 30 + (Math.sin(j * 0.13 + seed * 2) + 1) * 18;
                        return <span key={j} style={{ height: `${Math.min(100, h)}%` }} />;
                      })}
                    </div>
                    <span className="voice-wave-scrub" />
                  </div>
                </div>
              );
            })}
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
              <div><strong>LiveAnswerService</strong></div>
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
              <strong>LiveAnswerService $500/mo</strong>
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
              title="California coverage map — San Francisco"
              src="https://maps.google.com/maps?q=San+Francisco,+California&ll=37.75,-122.25&z=9&t=m&ie=UTF8&iwloc=&output=embed"
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
              {c.faqs.map((faq, i) => (
                <details key={i}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────── */}
      <section className="final-cta">
        <div className="wrap">
          <h2>{c.finalCta.headline}</h2>
          <div className="sub">{c.finalCta.sub}</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </section>
    </>
  );
}
