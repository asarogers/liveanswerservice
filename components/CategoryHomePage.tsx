import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import HeroLogoVideo from "@/components/HeroLogoVideo";
import HeroCallForm from "@/components/HeroCallForm";

/**
 * CategoryHomePage — the true category homepage (2026-06-11 rework).
 *
 * The homepage previously rendered the HVAC vertical (VerticalLandingPage +
 * hvacConfig), wasting the site's strongest URL on a 480/mo vertical term and
 * duplicating /services/hvac-answering-service. This page targets the category
 * head terms instead — "AI receptionist" (5,400/mo · KD 9 · +237% YoY),
 * "AI answering service" (1,900/mo · +116% YoY), 24/7 / bilingual answering —
 * and routes visitors to their vertical. Copy rationale: COPY-REWORK-2026-06-11.md.
 *
 * Design system: reuses the section classes from VerticalLandingPage
 * (la-hero, ca-trust-strip, oneliner-band, stakes, plan, faq, final-cta) so the
 * homepage stays visually consistent while the structure is homepage-specific
 * (verticals router grid instead of a single-vertical pitch).
 */

const VERTICAL_CARDS = [
  // Wave-1-promoted service pages only; grow as waves promote (see site-plan.json).
  {
    href: "/services/hvac-answering-service",
    icon: "temperature",
    title: "HVAC & home services",
    line: "Emergency calls answered and booked into your dispatch software, 24/7.",
  },
  {
    href: "/services/attorney-answering-service",
    icon: "scale",
    title: "Attorneys & law firms",
    line: "Every potential client qualified and captured — in English and Spanish.",
  },
  {
    href: "/services/small-business-answering-service",
    icon: "building-store",
    title: "Small business",
    line: "A full-time receptionist's coverage for a fraction of the cost.",
  },
];

const FAQS = [
  {
    q: "How much does an answering service cost?",
    a: "Most services charge per minute ($1.55–$1.90/min adds up fast) or hide pricing behind a quote. Live Answer is $500/month flat with unlimited calls — bilingual English/Spanish included, no setup fee with annual prepay, month-to-month otherwise.",
  },
  {
    q: "Is this AI or real people?",
    a: "It's an AI receptionist that holds a natural conversation — not a phone tree. Call our live demo line and try to break it. Urgent calls can be transferred straight to you or your on-call person, so a human is always reachable.",
  },
  {
    q: "Do you answer in Spanish?",
    a: "Yes — bilingual English/Spanish answering is standard on every account, never an add-on. Spanish-speaking callers are handled natively, end to end.",
  },
  {
    q: "How fast can it go live?",
    a: "Days, not weeks. We build and manage everything for you — your greeting, your services, your booking calendar. The 7-day trial runs on your real calls with no credit card.",
  },
  {
    q: "How do I know my calls are actually being answered?",
    a: "You get a text summary within 60 seconds of every call — who called, what they wanted, and what was booked — plus a recording and transcript you can pull up any time. You see every answered call, booking, and transfer, so nothing happens on your line you can't verify.",
  },
];

export default function CategoryHomePage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="la-hero la-hero--cream">
        <div className="wrap hero-wrap">
          <div className="hero-card">
            <div className="hero-eyebrow">
              <span className="dot" aria-hidden="true" />
              <span>AI receptionist · 24/7 answering service · Bilingual EN/ES</span>
            </div>
            <h1>
              Never miss another <em>call</em>.
            </h1>
            <p className="sub">
              <strong>An AI receptionist that answers your business line 24/7 — in English and Spanish.</strong>{" "}
              It books appointments, qualifies leads, filters spam, and texts you the
              details. $500/month flat, unlimited calls. No per-minute meter, no missed
              customers.
            </p>
            <HeroCallForm recaptchaSiteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} />
            <div className="hero-foot-note">
              Have one of our AI agents call you now · no credit card · cancel anytime
            </div>
            <div className="hero-transitional">
              Not ready? <Link href="/calculator">See what missed calls cost you →</Link>
            </div>
          </div>

          <div className="hero-phone-wrap">
            <HeroLogoVideo />
          </div>
        </div>
      </section>

      {/* ── CA TRUST STRIP ─────────────────────────────────── */}
      <section className="ca-trust-strip" aria-label="California trust signals">
        <div className="wrap">
          <div className="ca-trust-row">
            <span><i className="ti ti-map-pin" aria-hidden="true" /> Made in California</span>
            <span><i className="ti ti-shield-check" aria-hidden="true" /> CCPA-compliant recording</span>
            <span><i className="ti ti-language" aria-hidden="true" /> Bilingual EN/ES standard</span>
            <span><i className="ti ti-lock" aria-hidden="true" /> HIPAA-aware mode available</span>
          </div>
        </div>
      </section>

      {/* ── ONE-LINER ──────────────────────────────────────── */}
      <section className="oneliner-band" aria-label="What Live Answer does">
        <div className="wrap-narrow">
          <p className="oneliner">
            62% of calls to small businesses go unanswered — nights, lunch hours,
            Spanish-speaking callers. Live Answer is a done-for-you AI answering service
            that picks up every one, books the appointment, and sends you the summary in
            60 seconds. Flat $500/month. Unlimited calls.
          </p>
        </div>
      </section>

      {/* ── VERTICALS ROUTER GRID (homepage-specific) ──────── */}
      <section className="stakes" aria-label="Industries we answer for">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-num">01 · Built for your industry</span>
            <h2 className="section-title" style={{ margin: 0 }}>Who we answer for.</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
              maxWidth: 980,
              margin: "0 auto",
            }}
          >
            {VERTICAL_CARDS.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                style={{
                  display: "block",
                  padding: "28px 24px",
                  background: "#fff",
                  border: "1px solid #e8e0d2",
                  borderRadius: 12,
                  textDecoration: "none",
                  color: "#1a1611",
                }}
              >
                <i className={`ti ti-${v.icon}`} aria-hidden="true" style={{ fontSize: 26, color: "#5a1f2e" }} />
                <h3 style={{ margin: "12px 0 6px", fontSize: 19 }}>{v.title}</h3>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.5, color: "#5c5147" }}>{v.line}</p>
                <span style={{ display: "inline-block", marginTop: 12, fontWeight: 600, color: "#5a1f2e" }}>
                  See how it works →
                </span>
              </Link>
            ))}
          </div>
          <p style={{ textAlign: "center", margin: "28px 0 0", fontSize: 16 }}>
            Dental, medical, plumbing, property management and more —{" "}
            <Link href="/services" style={{ fontWeight: 600, color: "#5a1f2e" }}>
              see all industries →
            </Link>
          </p>
        </div>
      </section>

      {/* ── THE MATH (stakes stats) ────────────────────────── */}
      <section className="stakes" aria-label="The cost of missed calls">
        <div className="wrap">
          <div className="stakes-box">
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <span className="section-num">02 · The missed-call problem</span>
              <h2 className="section-title" style={{ margin: 0 }}>The math behind every missed call.</h2>
            </div>
            <div className="stakes-grid">
              <div className="stakes-stat">
                <div className="num">62%</div>
                <div className="label">of small-business calls go unanswered</div>
              </div>
              <div className="stakes-stat">
                <div className="num">$126K</div>
                <div className="label">average yearly revenue lost to missed calls</div>
              </div>
              <div className="stakes-stat">
                <div className="num">$500</div>
                <div className="label">per month, flat — unlimited calls, bilingual included</div>
              </div>
            </div>
            <p
              className="stakes-ranking-note"
              style={{ textAlign: "center", margin: "36px auto 0", maxWidth: 720, fontSize: 16, lineHeight: 1.55, color: "#5c5147" }}
            >
              <strong style={{ color: "#5a1f2e" }}>
                Missed calls don&rsquo;t just lose the customer — they lower your Google Maps ranking.
              </strong>{" "}
              Google sees whether you answered and whether the caller dialed a competitor
              next. A 100% answer rate protects the local ranking your calls come from.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────── */}
      <section className="plan" id="how" aria-label="How it works">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-num">03 · Done for you</span>
            <h2 className="section-title" style={{ margin: 0 }}>Live in days. Managed forever.</h2>
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
            <div className="plan-tl-step">
              <div className="plan-tl-dot">1</div>
              <h3>We build your AI receptionist</h3>
              <p>
                Your greeting, your services, your booking calendar — we set up and manage
                everything. Nothing for you to configure.
              </p>
            </div>
            <div className="plan-tl-step">
              <div className="plan-tl-dot">2</div>
              <h3>It answers every call, 24/7</h3>
              <p>
                English or Spanish, day or night. It books appointments, qualifies leads,
                and transfers urgent calls straight to your cell.
              </p>
            </div>
            <div className="plan-tl-step">
              <div className="plan-tl-dot">3</div>
              <h3>You get the summary in 60 seconds</h3>
              <p>
                Every call summarized by text with the caller&rsquo;s details and a
                recording. Flat $500/month. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VOC PULL-OUT (real missed-call reviews) ────────────
          Honest framing: these are real one-star reviews of OTHER California
          service businesses that didn't answer — evidence of the problem, NOT
          Live Answer testimonials. Verbatims (anonymized) from the 36k-review
          VOC dataset, research.prospect_reviews. See COPY-REWORK Fix 4. */}
      <section className="voc-pullout" aria-label="What a missed call costs">
        <div className="wrap-narrow">
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <span className="section-num">— In their own words</span>
            <h2 className="section-title" style={{ margin: "6px 0 8px" }}>
              This is what a missed call sounds like.
            </h2>
            <p style={{ margin: "0 auto", maxWidth: 640, fontSize: 16, lineHeight: 1.55, color: "#5c5147" }}>
              Real one-star reviews of California service businesses. Every one started
              with a call that went unanswered — and ended with the customer telling the
              world.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 18,
              maxWidth: 920,
              margin: "0 auto",
            }}
          >
            {[
              {
                quote:
                  "We had a leak coming into our master bedroom. We called and left a message. Two weeks later, someone finally called back.",
                who: "Roofing customer · ★☆☆☆☆",
              },
              {
                quote:
                  "Takes your money then no call back or response to emails. WARNING — do not waste your time.",
                who: "Home-services customer · ★☆☆☆☆",
              },
              {
                quote:
                  "I've been trying to book for a month. I keep calling the number on the card and the website — no answer.",
                who: "Dental patient · ★☆☆☆☆",
              },
            ].map((r, i) => (
              <figure
                key={i}
                style={{
                  margin: 0,
                  padding: "22px 22px",
                  background: "#fff",
                  border: "1px solid #e8e0d2",
                  borderLeft: "3px solid #5a1f2e",
                  borderRadius: 12,
                }}
              >
                <blockquote style={{ margin: 0, fontSize: 16.5, lineHeight: 1.55, color: "#1a1611" }}>
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption style={{ margin: "12px 0 0", fontSize: 13.5, color: "#8a7d6f" }}>
                  {r.who}
                </figcaption>
              </figure>
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              margin: "26px auto 0",
              maxWidth: 660,
              fontSize: 16,
              lineHeight: 1.55,
              color: "#5c5147",
            }}
          >
            <strong style={{ color: "#5a1f2e" }}>Live Answer picks up on the first ring — every time.</strong>{" "}
            24/7, in English and Spanish, so the call that would have become a one-star
            review becomes a booked appointment instead.
          </p>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="faq" aria-label="Frequently asked questions">
        <div className="wrap">
          <div className="themed-box">
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <span className="section-num">04 · FAQ</span>
              <h2 className="section-title" style={{ margin: 0 }}>Frequently asked questions.</h2>
            </div>
            <div className="faq-list">
              {/* `open` is required: answers must be in the initial HTML —
                  Google and LLM crawlers can't click (WEBSITE-TEMPLATE FAQ invariant) */}
              {FAQS.map((faq, i) => (
                <details key={i} open>
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
          <h2>Hear it answer. Then put it on your line.</h2>
          <div className="sub">
            Call the live demo line and try to break it — then start a free 7-day trial on
            your real calls. No credit card.
          </div>
          <Link href="/start-trial" className="phone-btn">
            <i className="ti ti-rocket" aria-hidden="true" />
            <span>Start your free 7-day trial</span>
          </Link>
          <div className="final-cta-alt">
            Prefer to talk first?{" "}
            <a href={siteConfig.phone.href}>Call {siteConfig.phone.display}</a>
          </div>
        </div>
      </section>
    </>
  );
}
