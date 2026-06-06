import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { loadSitePlan, noindexSlugs, gatedRobots } from "@/lib/site-plan";

const SLUG = "comparison";
const NOINDEX = noindexSlugs(loadSitePlan()).has(SLUG);

export const metadata: Metadata = {
  robots: gatedRobots("/comparison"),
  title: "Live Answer vs Ruby, Smith.ai, AnswerConnect — Comparison",
  description:
    "How Live Answer compares to Ruby, Smith.ai, AnswerConnect, Posh, and other answering services. Coverage, cost, bilingual depth, CRM integrations.",
  alternates: { canonical: `/${SLUG}` },
  ...(NOINDEX ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } } : {}),
};

const ROWS: Array<{ feature: string; live: string; human: string; cheap: string }> = [
  { feature: "Base price",          live: "$500/mo flat",        human: "$245–$400/mo + per-min",  cheap: "$25–$99/mo + per-min" },
  { feature: "Per-minute fees",     live: "None",                human: "$0.90–$2.50/min",         cheap: "$0.04–$1.50/min" },
  { feature: "Call cap",            live: "Unlimited",           human: "Soft cap, then overages", cheap: "100–200 calls/mo" },
  { feature: "24/7 coverage",       live: "Yes, parallel",       human: "Routed, often skeleton",  cheap: "Caps fire after hours" },
  { feature: "Bilingual EN/ES",     live: "Standard",            human: "Upcharge or unavailable", cheap: "Rare" },
  { feature: "Vertical scripts",    live: "10+ verticals",       human: "Generic + custom",        cheap: "Generic" },
  { feature: "CRM sync",            live: "35+ direct",          human: "Manual operator entry",   cheap: "Zapier only" },
  { feature: "Demo line",           live: "Yes — call it",       human: "Sales call required",     cheap: "Sign-up required" },
  { feature: "Setup",               live: "30-min kickoff",      human: "Multi-day onboarding",    cheap: "Self-serve" },
  { feature: "Booking guarantee",   live: "Per-vertical SLA",    human: "Rare",                    cheap: "None" },
];

export default function ComparisonPage() {
  return (
    <>
      <section className="la-hero">
        <div className="wrap-narrow">
          <h1>How we stack up against <em>everyone else</em>.</h1>
          <p className="sub">
            Honest comparison against Ruby, Smith.ai, AnswerConnect, Posh, and the cheap-AI tier.
            The trade-offs are real — here&rsquo;s where each one actually wins.
          </p>
        </div>
      </section>

      <section className="scenarios" aria-label="Feature comparison">
        <div className="wrap">
          <div className="section-eyebrow">Side by side</div>
          <h2 className="section-title">Feature-by-feature.</h2>
          <div style={{ overflowX: "auto", maxWidth: 900, margin: "0 auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#f7f2e7", textAlign: "left" }}>
                  <th style={{ padding: 12, fontWeight: 500 }}>Feature</th>
                  <th style={{ padding: 12, fontWeight: 500, color: "#1a1611" }}>Live Answer</th>
                  <th style={{ padding: 12, fontWeight: 500 }}>Human services</th>
                  <th style={{ padding: 12, fontWeight: 500 }}>Cheap AI</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr key={r.feature} style={{ background: i % 2 ? "#f7f2e7" : "#fdfaf3", borderBottom: "1px solid #d9cdb1" }}>
                    <td style={{ padding: 12, fontWeight: 500 }}>{r.feature}</td>
                    <td style={{ padding: 12, color: "#1a1611" }}>{r.live}</td>
                    <td style={{ padding: 12, color: "#5c5147" }}>{r.human}</td>
                    <td style={{ padding: 12, color: "#5c5147" }}>{r.cheap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="plan" aria-label="Where each wins">
        <div className="wrap">
          <div className="section-eyebrow">Honest take</div>
          <h2 className="section-title">Where each one actually wins.</h2>
          <div className="plan-grid">
            <div className="plan-step">
              <div className="num">L</div>
              <h3>Live Answer wins when</h3>
              <p>24/7 matters, call volume is variable, bilingual is required, your CRM is one of the 35+ we integrate, you want predictable monthly cost.</p>
            </div>
            <div className="plan-step">
              <div className="num">H</div>
              <h3>Human services win when</h3>
              <p>Inbound is low-volume but complex, callers need emotional sensitivity that AI doesn&rsquo;t do well yet, budget isn&rsquo;t a constraint.</p>
            </div>
            <div className="plan-step">
              <div className="num">C</div>
              <h3>Cheap AI wins when</h3>
              <p>You truly have under 100 calls/month, you don&rsquo;t need bilingual, you don&rsquo;t need CRM integration, voicemail-with-AI-transcripts is enough.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <h2>The fastest comparison is the demo line.</h2>
          <div className="sub">Call it, then call any competitor and call them. You&rsquo;ll know.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </section>
    </>
  );
}
