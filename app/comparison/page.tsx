import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { loadSitePlan, noindexSlugs, gatedRobots } from "@/lib/site-plan";

const SLUG = "comparison";
const NOINDEX = noindexSlugs(loadSitePlan()).has(SLUG);

export const metadata: Metadata = {
  openGraph: {
  url: "https://liveanswerservice.com/comparison",
  },
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
            Choosing the right phone answering service can make a significant difference in your business operations. An answering service isn't just about handling calls—it's about how those interactions impact your customer relationships, operational efficiency, and ultimately, your bottom line. That's why we've compiled this comprehensive comparison to help you understand where Live Answer fits into the landscape compared to competitors like Ruby, Smith.ai, AnswerConnect, Posh, and others.
          </p>
        </div>
      </section>

      <section className="scenarios" aria-label="Feature comparison">
        <div className="wrap">
          <div className="section-eyebrow">Side by side</div>
          <h2 className="section-title">Feature-by-feature.</h2>
          <p>When evaluating an answering service, it's essential to look beyond just cost and consider how each feature impacts your business needs:</p>
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
          <p>Understanding your business needs is key to making the right choice. Here's a breakdown of scenarios where each service truly excels:</p>
          <div className="plan-grid">
            <div className="plan-step">
              <div className="num">L</div>
              <h3>Live Answer wins when</h3>
              <ul>
                <li><strong>24/7 coverage matters.</strong> Live Answer ensures consistent, round-the-clock support without the risk of call caps or overages.</li>
                <li><strong>Your CRM is critical.</strong> With 35+ direct integrations, we sync seamlessly with your existing systems to maintain operational efficiency.</li>
                <li><strong>Bilingual support is essential.</strong> Our standard EN/ES bilingual service helps you connect with a broader audience without additional costs or hassle.</li>
                <li><strong>Your call volume fluctuates.</strong> A flat monthly rate means no surprises, whether your business experiences high call volumes or slow periods.</li>
              </ul>
            </div>
            <div className="plan-step">
              <div className="num">H</div>
              <h3>Human services win when</h3>
              <ul>
                <li><strong>Your inbound volume is low but complex.</strong> Human operators can handle nuanced or sensitive calls that require emotional intelligence and tailored responses.</li>
                <li><strong>You need customized call handling.</strong> If your business requires highly specific scripts or procedures, human services may offer more flexibility in customization.</li>
                <li><strong>Budget isn't a constraint.</strong> For businesses with ample resources, human services can provide dedicated operators and premium service tiers.</li>
              </ul>
            </div>
            <div className="plan-step">
              <div className="num">C</div>
              <h3>Cheap AI wins when</h3>
              <ul>
                <li><strong>You have minimal call volume.</strong> If you're expecting under 100 calls per month, cheap AI services can be a cost-effective solution.</li>
                <li><strong>Voice-to-text transcription is sufficient.</strong> For businesses that don't require live interaction and are okay with voicemail transcripts, AI-based solutions can save costs.</li>
                <li><strong>Your needs are basic and static.</strong> If you have simple, repetitive calls that don't require complex decision-making or emotional support, AI can handle them efficiently.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <h2>The fastest comparison is the demo line.</h2>
          <p>There's no better way to evaluate any service than experiencing it firsthand. We invite you to call our demo line and then compare it with competitors. This hands-on experience will give you a clear idea of which service aligns best with your business needs and values.</p>
          <div className="sub">Call it, then call any competitor and call them. You&rsquo;ll know.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </section>

      <section className="faq" aria-label="Frequently Asked Questions">
        <div className="wrap">
          <div className="section-eyebrow">Common questions</div>
          <h2 className="section-title">FAQ: Choosing the right service</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>What's included in Live Answer's flat-rate pricing?</h3>
              <p>Our $500/mo fee includes unlimited calls, 24/7 coverage, standard bilingual support (EN/ES), and direct CRM integrations. There are no hidden fees for additional features or services.</p>
            </div>
            <div className="faq-item">
              <h3>Can I test your service before committing?</h3>
              <p>Absolutely! We offer a demo line so you can experience our service firsthand and compare it to competitors. Simply call the number below and see the difference live.</p>
            </div>
            <div className="faq-item">
              <h3>How do I know which plan is right for me?</h3>
              <p>We recommend evaluating your business needs based on call volume, required features (like bilingual support or CRM integration), and budget. Our team is happy to help you determine the best fit during a free consultation.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}