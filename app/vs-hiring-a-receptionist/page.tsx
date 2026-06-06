import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { loadSitePlan, noindexSlugs, gatedRobots } from "@/lib/site-plan";

const SLUG = "vs-hiring-a-receptionist";
const NOINDEX = noindexSlugs(loadSitePlan()).has(SLUG);

export const metadata: Metadata = {
  robots: gatedRobots("/vs-hiring-a-receptionist"),
  title: "AI Receptionist vs Hiring a Human — California Cost Comparison",
  description:
    "California receptionist costs $38K–$48K/yr loaded vs. Live Answer at $500/mo flat. Coverage, bilingual, sick days, turnover — the honest comparison.",
  alternates: { canonical: `/${SLUG}` },
  ...(NOINDEX ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } } : {}),
};

const HUMAN_LEDGER: Array<{ month: string; line: string; amount: number }> = [
  { month: "Jan", line: "Payroll + 30% burden",     amount: 4333 },
  { month: "Feb", line: "Payroll + burden",          amount: 4333 },
  { month: "Mar", line: "Payroll + 3 sick days",     amount: 4333 },
  { month: "Apr", line: "Payroll + burden",          amount: 4333 },
  { month: "May", line: "Payroll + 1 wk PTO",        amount: 4333 },
  { month: "Jun", line: "Payroll + burden",          amount: 4333 },
  { month: "Jul", line: "Payroll — gave 2 wks notice", amount: 4333 },
  { month: "Aug", line: "Job posting + recruiter",   amount: 1200 },
  { month: "Sep", line: "Coverage gap (voicemail)",  amount: 0 },
  { month: "Oct", line: "New hire + onboarding",     amount: 5500 },
  { month: "Nov", line: "Payroll + burden",          amount: 4333 },
  { month: "Dec", line: "Payroll + holiday OT",      amount: 4800 },
];

const LA_LEDGER = Array.from({ length: 12 }, (_, i) => ({
  month: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][i],
  line: "Unlimited · 24/7 · bilingual",
  amount: 500,
}));

const fmt = (n: number) => `$${n.toLocaleString()}`;

export default function VsHiringPage() {
  const humanTotal = HUMAN_LEDGER.reduce((s, r) => s + r.amount, 0);
  const laTotal = LA_LEDGER.reduce((s, r) => s + r.amount, 0);
  const savings = humanTotal - laTotal;

  return (
    <>
      <style>{`
        @media (max-width: 760px) {
          .vshire-ledger-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
      <section className="la-hero">
        <div className="wrap-narrow">
          <h1>AI receptionist <em>vs hiring</em> in California.</h1>
          <p className="sub">
            $38K–$48K/yr fully loaded vs. $500/mo flat-rate. Coverage, bilingual, sick days,
            and 60-day replacement gaps when they quit. Honest math.
          </p>
        </div>
      </section>

      <section className="scenarios" aria-label="Year-one cost ledger demo">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="section-eyebrow">Year-one ledger</div>
            <h2 className="section-title">Watch the bleed, month by month.</h2>
            <p style={{ maxWidth: 640, margin: "12px auto 0", color: "#5c5147" }}>
              Two ledgers, twelve months, same business. One has payroll, payroll burden, PTO,
              turnover, and a 60-day coverage gap. The other has a flat invoice.
            </p>
          </div>

          <div className="vshire-ledger-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
            {/* HUMAN COLUMN */}
            <div style={{ background: "#fdfaf3", border: "1px solid #d9cdb1", borderRadius: 12, padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
                <strong style={{ fontSize: 18, color: "#1a1611" }}>California receptionist</strong>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#5a1f2e", background: "#fbe2e2", border: "1px solid #d9cdb1", padding: "3px 8px", borderRadius: 4, textTransform: "uppercase", letterSpacing: 0.6 }}>Year 1</span>
              </div>
              <div style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 14 }}>
                {HUMAN_LEDGER.map((row) => (
                  <div key={row.month} style={{ display: "grid", gridTemplateColumns: "44px 1fr auto", gap: 8, padding: "8px 0", borderBottom: "1px dashed #d9cdb1" }}>
                    <span style={{ color: "#1a1611", fontWeight: 600 }}>{row.month}</span>
                    <span style={{ color: "#5c5147" }}>{row.line}</span>
                    <span style={{ fontWeight: 600, color: "#1a1611" }}>
                      {row.amount === 0 ? "—" : fmt(row.amount)}
                    </span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16, paddingTop: 12, borderTop: "2px solid #1a1611", fontSize: 18, fontWeight: 700, color: "#1a1611" }}>
                  <span>Total</span>
                  <span>{fmt(humanTotal)}</span>
                </div>
                <div style={{ marginTop: 8, fontSize: 12, color: "#94867a" }}>
                  Plus: 60-day coverage gap, English-only, 40 hrs/wk.
                </div>
              </div>
            </div>

            {/* LIVE ANSWER COLUMN */}
            <div style={{ background: "#fdfaf3", border: "1px solid #d9cdb1", borderRadius: 12, padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
                <strong style={{ fontSize: 18, color: "#1a1611" }}>Live Answer Unlimited</strong>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#5a1f2e", background: "#fdfaf3", border: "1px solid #d9cdb1", padding: "3px 8px", borderRadius: 4, textTransform: "uppercase", letterSpacing: 0.6 }}>Year 1</span>
              </div>
              <div style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 14 }}>
                {LA_LEDGER.map((row) => (
                  <div key={row.month} style={{ display: "grid", gridTemplateColumns: "44px 1fr auto", gap: 8, padding: "8px 0", borderBottom: "1px dashed #d9cdb1" }}>
                    <span style={{ color: "#1a1611", fontWeight: 600 }}>{row.month}</span>
                    <span style={{ color: "#5c5147" }}>{row.line}</span>
                    <span style={{ fontWeight: 600, color: "#1a1611" }}>{fmt(row.amount)}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16, paddingTop: 12, borderTop: "2px solid #1a1611", fontSize: 18, fontWeight: 700, color: "#1a1611" }}>
                  <span>Total</span>
                  <span>{fmt(laTotal)}</span>
                </div>
                <div style={{ marginTop: 8, fontSize: 12, color: "#94867a" }}>
                  Plus: 168 hrs/wk coverage, EN/ES native, zero turnover.
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 32, padding: 24, background: "#fdfaf3", border: "1px solid #d9cdb1", borderRadius: 12 }}>
            <div style={{ fontSize: 14, color: "#5c5147", textTransform: "uppercase", letterSpacing: 0.5 }}>You keep</div>
            <div style={{ fontSize: 48, fontWeight: 800, margin: "8px 0", color: "#5a1f2e" }}>{fmt(savings)}</div>
            <div style={{ color: "#5c5147" }}>per year, every year — and you stop missing calls when she&rsquo;s sick.</div>
            <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={siteConfig.phone.href} className="phone-btn">
                <i className="ti ti-phone-call" aria-hidden="true" />
                <span>Call the demo · {siteConfig.phone.display}</span>
              </a>
              <Link href="/book" className="btn-secondary">
                Book a 30-min setup consult →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="scenarios" aria-label="Side-by-side cost comparison">
        <div className="wrap">
          <div className="section-eyebrow">The cost stack</div>
          <h2 className="section-title">What you&rsquo;re actually paying for.</h2>
          <div className="scenarios-grid">
            <div className="scenario-card">
              <div className="time"><i className="ti ti-user" aria-hidden="true" /> A California hire</div>
              <div className="body">
                Base $40K + 30% payroll burden = ~$52K/yr. PTO, sick days, training time,
                turnover (60+ days to replace). Covers 40hrs/wk, English usually only.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-robot" aria-hidden="true" /> Live Answer Unlimited</div>
              <div className="body">
                $500/mo flat = $6,000/yr. 168hrs/wk (24/7). Native EN/ES. No sick days, no
                turnover. CRM sync standard. ~12% of a human hire.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-scale" aria-hidden="true" /> The hybrid</div>
              <div className="body">
                Many customers keep ONE receptionist for daytime warmth and complex cases, run
                Live Answer for overflow + after-hours. Best-of-both at a fraction of two hires.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stakes" aria-label="Annual cost comparison">
        <div className="wrap">
          <div className="stakes-grid">
            <div className="stakes-stat">
              <div className="num">$52K</div>
              <div className="label">avg California receptionist, loaded</div>
            </div>
            <div className="stakes-stat">
              <div className="num">$6,000</div>
              <div className="label">Live Answer Unlimited per year, flat</div>
            </div>
            <div className="stakes-stat">
              <div className="num">88%</div>
              <div className="label">cost savings vs hiring</div>
            </div>
          </div>
        </div>
      </section>

      <section className="plan" aria-label="Where humans still win">
        <div className="wrap">
          <div className="section-eyebrow">Honest take</div>
          <h2 className="section-title">When a human still beats AI.</h2>
          <div className="plan-grid">
            <div className="plan-step">
              <div className="num">1</div>
              <h3>High-touch emotional calls</h3>
              <p>Psychiatric intake, end-of-life decisions, grief, intense conflict. Empathy still wins.</p>
            </div>
            <div className="plan-step">
              <div className="num">2</div>
              <h3>Walk-in / in-person duties</h3>
              <p>If your receptionist greets people in a lobby, an AI can&rsquo;t do that. AI handles phones only.</p>
            </div>
            <div className="plan-step">
              <div className="num">3</div>
              <h3>Genuinely complex judgment</h3>
              <p>Negotiating pricing on the call, reading subtle context, handling an upset VIP customer. Hard to script.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <h2>Or hire neither — keep the line and add the AI.</h2>
          <div className="sub">Most customers find that&rsquo;s the right answer.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </section>
    </>
  );
}
