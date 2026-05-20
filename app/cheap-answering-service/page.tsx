import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { loadSitePlan, noindexSlugs } from "@/lib/site-plan";

const SLUG = "cheap-answering-service";
const NOINDEX = noindexSlugs(loadSitePlan()).has(SLUG);

export const metadata: Metadata = {
  title: "Affordable Answering Service — Flat $500/mo, No Per-Minute Fees",
  description:
    "Affordable answering service for California small business — flat $500/mo for unlimited calls, bilingual EN/ES, no per-minute fees, no overages. 7-day free trial.",
  alternates: { canonical: `/${SLUG}` },
  ...(NOINDEX ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } } : {}),
};

export default function CheapPage() {
  return (
    <>
      <style>{`
        @media (max-width: 760px) {
          .cheap-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
      {/* ── HERO (Character + external problem) ─────────────── */}
      <section className="la-hero">
        <div className="wrap cheap-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <div className="hero-eyebrow">
              <span className="dot" aria-hidden="true" />
              <span>Flat-rate · unlimited · no surprises</span>
            </div>
            <h1>Affordable. <em>Without the per-minute trap.</em></h1>
            <p className="sub">
              <strong>You&rsquo;re a small business owner trying to stop bleeding leads — not start
              bleeding to your phone vendor.</strong>{" "}
              $500/mo flat. Unlimited calls. Bilingual EN/ES. No overages, no surprise bills,
              locked rate at sign-up.
            </p>
            <form className="hero-call-form" action="/api/demo-call" method="post">
              <input type="tel" name="phone" placeholder="Enter your phone number" required aria-label="Your phone number" />
              <button type="submit">
                <i className="ti ti-phone-outgoing" aria-hidden="true" />
                Call me
              </button>
            </form>
            <div style={{ fontSize: 13, color: "#94867a" }}>
              No card · 7-day free trial · cancel anytime
            </div>
            <div className="hero-transitional">
              Want to crunch the math first? <Link href="/calculator">See what you&rsquo;re losing →</Link>
            </div>
          </div>

          <div className="hero-phone-wrap">
            <div className="phone-mockup" role="img" aria-label="Surprise bill nightmare">
              <div className="phone-notch" aria-hidden="true" />
              <div className="phone-screen">
                <div className="phone-status">
                  <span>9:41</span>
                  <span aria-hidden="true"><i className="ti ti-mail" /></span>
                </div>
                <div style={{ padding: "20px 16px", color: "#5a1f2e" }}>
                  <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.5, color: "#5a1f2e" }}>From: Dialzara billing</div>
                  <div style={{ fontWeight: 700, marginTop: 4, fontSize: 16 }}>Your bill: $387.20</div>
                  <div style={{ fontSize: 13, color: "#5a1f2e", marginTop: 12, lineHeight: 1.5 }}>
                    Base plan: $29.00<br />
                    Overage (382 minutes): $343.80<br />
                    Late-evening surcharge: $14.40
                  </div>
                  <div style={{ marginTop: 16, fontSize: 12, color: "#5c5147", fontStyle: "italic" }}>
                    &ldquo;Wait, I thought this was $29/mo?&rdquo;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAKES (Internal/philosophical problem) ─────────── */}
      <section className="stakes" aria-label="The hidden cost of cheap">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-num">01 · The trap</span>
            <h2 className="section-title" style={{ margin: 0 }}>Cheap isn&rsquo;t cheap when you grow.</h2>
          </div>
          <div className="stakes-grid">
            <div className="stakes-stat">
              <div className="num">$29</div>
              <div className="label">advertised monthly price for budget AI services</div>
            </div>
            <div className="stakes-stat">
              <div className="num">$300+</div>
              <div className="label">typical actual bill after overage on a busy month</div>
            </div>
            <div className="stakes-stat">
              <div className="num">10×</div>
              <div className="label">price variance month-to-month on per-minute plans</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VOC PULLOUT ─────────────────────────────────────── */}
      <section className="voc-pullout" aria-label="What real owners say">
        <div className="wrap-narrow">
          <blockquote className="voc-quote">
            &ldquo;The cost — monthly costs and service costs — of such a service is always a concern.
            I signed up for the cheap one and got a $400 bill the first busy month.&rdquo;
          </blockquote>
          <div className="voc-attribution">— HVAC owner, r/smallbusiness</div>
        </div>
      </section>

      {/* ── SCENARIOS (Failure paths) ───────────────────────── */}
      <section className="scenarios" aria-label="Why $29/mo usually costs more">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-num">02 · The math</span>
            <h2 className="section-title" style={{ margin: 0 }}>Why $29/mo usually costs more.</h2>
          </div>
          <div className="scenarios-grid">
            <div className="scenario-card">
              <div className="time"><i className="ti ti-currency-dollar" aria-hidden="true" /> Dialzara $29/mo</div>
              <div className="body">
                Caps at ~50 calls/mo. Per-minute overage after that. A busy month easily clocks
                $150–$300 in surprise charges.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-currency-dollar" aria-hidden="true" /> Simple Phones $49/mo</div>
              <div className="body">
                100 calls/mo cap. Then overage. Two months of HVAC summer or legal cold-snap
                volume blows past the cap, and the bill triples.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-currency-dollar" aria-hidden="true" /> Trillet $49/mo</div>
              <div className="body">
                150 minutes included. Average call is 2–3 minutes. You hit the wall around call
                #50 and start paying $0.99/min on top.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARE TABLE ───────────────────────────────────── */}
      <section className="compare-section" aria-label="Honest pricing comparison">
        <div className="wrap-narrow">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-num">03 · Side-by-side</span>
            <h2 className="section-title" style={{ margin: 0 }}>What you actually pay on a busy month.</h2>
          </div>
          <div className="compare-table">
            <div className="compare-row compare-head">
              <div>Service</div>
              <div>Sticker</div>
              <div>400-call month</div>
            </div>
            <div className="compare-row"><div>Dialzara</div><div>$29</div><div>~$735</div></div>
            <div className="compare-row"><div>Simple Phones</div><div>$49</div><div>~$640</div></div>
            <div className="compare-row"><div>Trillet</div><div>$49</div><div>~$885</div></div>
            <div className="compare-row"><div>My AI Front Desk</div><div>$79</div><div>~$520</div></div>
            <div className="compare-row"><div>GoodCall</div><div>$79</div><div>~$960</div></div>
            <div className="compare-row"><div>Ringly</div><div>$349</div><div>~$890</div></div>
            <div className="compare-row"><div>Smith.ai</div><div>$255</div><div>~$1,580</div></div>
            <div className="compare-row"><div>AnswerHero</div><div>$249</div><div>~$1,260</div></div>
            <div className="compare-row"><div>Ruby</div><div>$245</div><div>~$1,420</div></div>
            <div className="compare-row"><div>AnswerConnect</div><div>$350</div><div>~$1,650</div></div>
            <div className="compare-row"><div>Posh</div><div>$65</div><div>~$1,725</div></div>
            <div className="compare-row"><div>Reliable Receptionist</div><div>$4,000</div><div>$4,000</div></div>
            <div className="compare-row compare-us">
              <div><strong>Live Answer</strong></div>
              <div><strong>$500</strong></div>
              <div><strong>$500</strong></div>
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: 16, fontSize: 14, color: "#5c5147" }}>
            Every service except Live Answer charges you <em>more</em> when your business does well.
            On a 400-call month, you&rsquo;ll pay <strong>2–8×</strong> the sticker price — except
            here.
          </p>
        </div>
      </section>

      {/* ── EXTREME ANCHOR — what the premium services charge ── */}
      <section className="stakes" aria-label="What the premium incumbents charge">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-num">03b · The other end</span>
            <h2 className="section-title" style={{ margin: 0 }}>What the &ldquo;real&rdquo; answering services cost.</h2>
            <p style={{ maxWidth: 640, margin: "12px auto 0", color: "#5c5147" }}>
              These are the human and hybrid services positioned above us. Same job. 2–8× the bill.
            </p>
          </div>
          <div className="stakes-grid">
            <div className="stakes-stat">
              <div className="num">$4,000</div>
              <div className="label">Reliable Receptionist — full bilingual coverage, per month</div>
            </div>
            <div className="stakes-stat">
              <div className="num">$2,825</div>
              <div className="label">Ambs Call Center — high-tier monthly retainer</div>
            </div>
            <div className="stakes-stat">
              <div className="num">$1,725</div>
              <div className="label">Posh — high-volume tier with after-hours surcharges</div>
            </div>
          </div>
        </div>
      </section>

      <section className="compare-section" aria-label="Live Answer vs the premium incumbents">
        <div className="wrap-narrow">
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <span className="section-num">03c · Side-by-side, premium tier</span>
            <h2 className="section-title" style={{ margin: 0 }}>Pay more, get less.</h2>
          </div>
          <div className="compare-table">
            <div className="compare-row compare-head">
              <div>Service</div>
              <div>Monthly</div>
              <div>Catch</div>
            </div>
            <div className="compare-row">
              <div>Reliable Receptionist</div>
              <div>$4,000</div>
              <div>Human, capped hours, bilingual extra</div>
            </div>
            <div className="compare-row">
              <div>Ambs Call Center</div>
              <div>$345 – $2,825</div>
              <div>Per-minute overage, surge fees</div>
            </div>
            <div className="compare-row">
              <div>Posh</div>
              <div>$65 – $1,725</div>
              <div>Per-minute, after-hours premium</div>
            </div>
            <div className="compare-row">
              <div>Ruby</div>
              <div>$245 – $1,200+</div>
              <div>Bilingual is +$100/mo, capped minutes</div>
            </div>
            <div className="compare-row">
              <div>Slang.ai (restaurants)</div>
              <div>$399 – $899</div>
              <div>Vertical-only, no general intake</div>
            </div>
            <div className="compare-row">
              <div>AnswerHero</div>
              <div>$249 – $449</div>
              <div>Per-minute overage after cap</div>
            </div>
            <div className="compare-row">
              <div>AnswerConnect</div>
              <div>$350 – $1,500+</div>
              <div>Tiered minutes, escalating bills</div>
            </div>
            <div className="compare-row">
              <div>Smith.ai</div>
              <div>$255 – $1,580</div>
              <div>Per-call billing on every tier</div>
            </div>
            <div className="compare-row compare-us">
              <div><strong>Live Answer Unlimited</strong></div>
              <div><strong>$500 flat</strong></div>
              <div><strong>None. Unlimited. Locked rate.</strong></div>
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: 24, fontSize: 15, color: "#5c5147" }}>
            The cheap services cost more on busy months. The premium services cost more every month.
            <strong> $500 flat sits in the only honest spot.</strong>
          </p>
        </div>
      </section>

      {/* ── HORROR-STORY MONTH ──────────────────────────────── */}
      <section className="scenarios" aria-label="A real worst-case month">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-num">03d · Worst case</span>
            <h2 className="section-title" style={{ margin: 0 }}>What a heat-wave month actually costs.</h2>
            <p style={{ maxWidth: 640, margin: "12px auto 0", color: "#5c5147" }}>
              HVAC shop, Sacramento, August. 600 inbound calls.
            </p>
          </div>
          <div className="scenarios-grid">
            <div className="scenario-card" style={{ borderLeft: "4px solid #5a1f2e" }}>
              <div className="time"><i className="ti ti-currency-dollar" aria-hidden="true" /> Dialzara $29 → <strong style={{ color: "#5a1f2e" }}>$1,108</strong></div>
              <div className="body">
                $29 base + 550 overage calls × $1.96 = $1,108. Most of it billed the day after the
                month closed. The owner finds out by email.
              </div>
            </div>
            <div className="scenario-card" style={{ borderLeft: "4px solid #5a1f2e" }}>
              <div className="time"><i className="ti ti-currency-dollar" aria-hidden="true" /> Ruby $245 → <strong style={{ color: "#5a1f2e" }}>$1,640</strong></div>
              <div className="body">
                Base + 200-call cap blown + per-minute overage + after-hours premium + bilingual
                upcharge. Itemized across 4 line items so it&rsquo;s harder to challenge.
              </div>
            </div>
            <div className="scenario-card" style={{ borderLeft: "4px solid #5a1f2e" }}>
              <div className="time"><i className="ti ti-currency-dollar" aria-hidden="true" /> AnswerConnect $350 → <strong style={{ color: "#5a1f2e" }}>$2,180</strong></div>
              <div className="body">
                350 sticker + minute overage + holiday surcharges. Their own pricing FAQ warns of
                this — the buyer just didn&rsquo;t read it.
              </div>
            </div>
            <div className="scenario-card" style={{ borderLeft: "4px solid #5a1f2e", background: "#fdfaf3" }}>
              <div className="time"><i className="ti ti-currency-dollar" aria-hidden="true" /> Live Answer → <strong style={{ color: "#5a1f2e" }}>$500</strong></div>
              <div className="body">
                Same 600 calls. Same bilingual. Same booking sync. Same invoice as last month and
                the one before it. The owner doesn&rsquo;t open the billing email.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GUIDE / Honest take ─────────────────────────────── */}
      <section className="plan" aria-label="When cheap is the right answer">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-num">04 · Honest take</span>
            <h2 className="section-title" style={{ margin: 0 }}>When the cheap option <em>is</em> right.</h2>
          </div>
          <div className="plan-grid">
            <div className="plan-step">
              <div className="num">1</div>
              <h3>You truly do under 50 calls/mo</h3>
              <p>If your inbound is genuinely that low, Dialzara at $29 may be the right answer. Most California small businesses are not that low.</p>
            </div>
            <div className="plan-step">
              <div className="num">2</div>
              <h3>You don&rsquo;t need bilingual</h3>
              <p>If your customer base is 100% English-speaking, you save ~$100/mo vs services that include bilingual standard. Most CA businesses can&rsquo;t skip it.</p>
            </div>
            <div className="plan-step">
              <div className="num">3</div>
              <h3>You don&rsquo;t need CRM sync</h3>
              <p>If you&rsquo;re fine with calls landing in voicemail-style email and moving them to your CRM manually, the cheap tier works.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLAN (3 steps) ──────────────────────────────────── */}
      <section className="plan" aria-label="How to switch">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-num">05 · The plan</span>
            <h2 className="section-title" style={{ margin: 0 }}>Three steps to predictable phone bills.</h2>
          </div>
          <div className="plan-grid">
            <div className="plan-step">
              <div className="num">1</div>
              <h3>Forward your phone</h3>
              <p>60 seconds with any carrier. Test the line first — call (669) 365-6533 and see the agent in action.</p>
            </div>
            <div className="plan-step">
              <div className="num">2</div>
              <h3>We answer every call</h3>
              <p>Unlimited, 24/7, bilingual. Same flat $500 whether you take 10 calls or 1,000.</p>
            </div>
            <div className="plan-step">
              <div className="num">3</div>
              <h3>You see one invoice</h3>
              <p>$500. Every month. Locked at sign-up — never goes up. No surprise bills, no &ldquo;your usage exceeded&rdquo; emails.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUCCESS / Failure ───────────────────────────────── */}
      <section className="success" aria-label="What changes when you switch">
        <div className="wrap-narrow">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-num">06 · What changes</span>
            <h2 className="section-title" style={{ margin: 0 }}>A month from now.</h2>
          </div>
          <div className="success-grid">
            <div className="success-item">
              <i className="ti ti-receipt" aria-hidden="true" />
              <strong>One invoice. $500. Always.</strong>
            </div>
            <div className="success-item">
              <i className="ti ti-bell-off" aria-hidden="true" />
              <strong>No overage emails</strong>
            </div>
            <div className="success-item">
              <i className="ti ti-phone-check" aria-hidden="true" />
              <strong>Unlimited calls answered</strong>
            </div>
            <div className="success-item">
              <i className="ti ti-language" aria-hidden="true" />
              <strong>Bilingual standard</strong>
            </div>
            <div className="success-item">
              <i className="ti ti-clock-24" aria-hidden="true" />
              <strong>24/7 — no extra charge</strong>
            </div>
            <div className="success-item">
              <i className="ti ti-lock-square" aria-hidden="true" />
              <strong>Locked rate forever</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────── */}
      <section className="final-cta">
        <div className="wrap">
          <h2>$500 flat beats $29 + overages.</h2>
          <div className="sub">Try it. If it doesn&rsquo;t book, you owe nothing.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
          <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/start-trial" className="btn-secondary">Start 7-day free trial →</Link>
            <Link href="/book" className="btn-secondary">Book a 30-min consult →</Link>
          </div>
          <div className="guarantees" style={{ marginTop: 24, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            <span><i className="ti ti-shield-check" aria-hidden="true" /> 7-day free trial · no card</span>
            <span><i className="ti ti-shield-check" aria-hidden="true" /> Miss a booking? Month free</span>
            <span><i className="ti ti-shield-check" aria-hidden="true" /> Cancel anytime</span>
          </div>
        </div>
      </section>
    </>
  );
}
