import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { loadSitePlan, noindexSlugs, gatedRobots } from "@/lib/site-plan";
import HeroCallForm from "@/components/HeroCallForm";

const SLUG = "24-7-answering-service";
const NOINDEX = noindexSlugs(loadSitePlan()).has(SLUG);

export const metadata: Metadata = {
  openGraph: {
  url: "https://liveanswerservice.com/24-7-answering-service",
  images: [{ url: "https://liveanswerservice.com/opengraph-image.png", width: 1024, height: 1024, alt: "Live Answer Service" }],
  },
  robots: gatedRobots("/24-7-answering-service"),
  title: "24/7 Answering Service — Genuine Round-the-Clock Coverage",
  description:
    "Live Answer is genuinely 24/7 — 3 AM Sunday gets the same answer as 10 AM Tuesday. No queues, no after-hours degradation. Flat $500/mo unlimited.",
  alternates: { canonical: `/${SLUG}` },
  ...(NOINDEX ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } } : {}),
};

const HOUR_CALLS: Array<{ hour: string; calls: number; note?: string }> = [
  { hour: "12a", calls: 1 }, { hour: "1a", calls: 1 }, { hour: "2a", calls: 0 },
  { hour: "3a", calls: 2, note: "AC failure" }, { hour: "4a", calls: 1 },
  { hour: "5a", calls: 2 }, { hour: "6a", calls: 4 }, { hour: "7a", calls: 7 },
  { hour: "8a", calls: 11, note: "Owner driving" }, { hour: "9a", calls: 14 },
  { hour: "10a", calls: 13 }, { hour: "11a", calls: 12 }, { hour: "12p", calls: 9, note: "Lunch" },
  { hour: "1p", calls: 10 }, { hour: "2p", calls: 11 }, { hour: "3p", calls: 12 },
  { hour: "4p", calls: 10 }, { hour: "5p", calls: 9, note: "Crew off" },
  { hour: "6p", calls: 8 }, { hour: "7p", calls: 7 }, { hour: "8p", calls: 5 },
  { hour: "9p", calls: 4, note: "DUI intake" }, { hour: "10p", calls: 3 },
  { hour: "11p", calls: 2 },
];

export default function TwentyFourSevenPage() {
  const totalCalls = HOUR_CALLS.reduce((s, h) => s + h.calls, 0);
  const afterHours = HOUR_CALLS.filter((h) => {
    const n = parseInt(h.hour);
    const isPm = h.hour.endsWith("p");
    const hr24 = h.hour === "12a" ? 0 : h.hour === "12p" ? 12 : isPm ? n + 12 : n;
    return hr24 < 8 || hr24 >= 18;
  }).reduce((s, h) => s + h.calls, 0);
  const maxCalls = Math.max(...HOUR_CALLS.map((h) => h.calls));

  return (
    <>
      <style>{`
        @media (max-width: 760px) {
          .p247-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .p247-bars-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
          .p247-bars-grid { min-width: 560px; }
          .p247-legend { flex-wrap: wrap; gap: 12px !important; font-size: 12px !important; }
        }
      `}</style>
      <section className="la-hero">
        <div className="wrap p247-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <div className="hero-eyebrow">
              <span className="dot" aria-hidden="true" />
              <span>Always open · always answering</span>
            </div>
            <h1>24/7. <em>Genuinely.</em></h1>
            <p className="sub">
              Most &ldquo;24/7&rdquo; answering services route after-hours to voicemail-style intake
              or a smaller skeleton crew. <strong>Live Answer answers every call in parallel — 3 AM
              Sunday the same as 10 AM Tuesday.</strong>
            </p>
            <HeroCallForm recaptchaSiteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} label="Call me now" />
            <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
              Test the line — it&rsquo;s the same agent at 3 AM as 3 PM.
            </div>
            <div className="hero-transitional">
              Prefer a human? <Link href="/book">Book a 30-min setup consult →</Link>
            </div>
          </div>

          <div className="hero-phone-wrap">
            <div className="phone-mockup" role="img" aria-label="Sample 3 AM emergency call">
              <div className="phone-notch" aria-hidden="true" />
              <div className="phone-screen">
                <div className="phone-status">
                  <span>3:14 AM</span>
                  <span aria-hidden="true"><i className="ti ti-signal-4g" /> <i className="ti ti-wifi" /> <i className="ti ti-battery" /></span>
                </div>
                <div className="phone-callbar">
                  <i className="ti ti-phone-call" aria-hidden="true" />
                  <span>Live Answer · 0:42</span>
                </div>
                <div className="chat-thread">
                  <div className="chat-bubble ai">Live Answer — this is Sarah. How can I help?</div>
                  <div className="chat-bubble caller">My pipe burst. Water&rsquo;s everywhere.</div>
                  <div className="chat-bubble ai">I&rsquo;m sorry — turning off the main is step one. Address?</div>
                  <div className="chat-bubble caller">412 Elm, San Jose.</div>
                  <div className="chat-bubble ai">Tech dispatched. ETA 35 min. Owner&rsquo;s been texted.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="voc-pullout" aria-label="Owner quote">
        <div className="wrap-narrow">
          <blockquote className="voc-quote">&ldquo;I get a phone call at 11pm. The call every single one of us dreads.&rdquo;</blockquote>
          <div className="voc-attribution">— small-firm attorney, r/Lawyertalk</div>
        </div>
      </section>

      <section className="scenarios" aria-label="What 24/7 actually means">
        <div className="wrap">
          <div className="section-eyebrow">The reality</div>
          <h2 className="section-title">Most &ldquo;24/7&rdquo; isn&rsquo;t.</h2>
          <div className="scenarios-grid">
            <div className="scenario-card">
              <div className="time"><i className="ti ti-moon" aria-hidden="true" /> 3 AM Saturday</div>
              <div className="body">
                Same engine, same intake script, same booking integration, same SMS summary to you
                within 60 seconds. No degraded mode.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-sun" aria-hidden="true" /> Peak hours</div>
              <div className="body">
                No queue. Every inbound call answered in parallel. Human services queue and overflow;
                we don&rsquo;t have that bottleneck.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-flame" aria-hidden="true" /> Holidays</div>
              <div className="body">
                Thanksgiving. Christmas. New Year&rsquo;s Eve. Memorial Day. Same service, same price.
                No surge fees, no &ldquo;reduced hours&rdquo; pages.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stakes" aria-label="Why round-the-clock matters">
        <div className="wrap">
          <div className="stakes-grid">
            <div className="stakes-stat">
              <div className="num">38%</div>
              <div className="label">of HVAC emergency calls land after-hours</div>
            </div>
            <div className="stakes-stat">
              <div className="num">52%</div>
              <div className="label">of legal intake calls hit voicemail outside 9-5</div>
            </div>
            <div className="stakes-stat">
              <div className="num">~60 sec</div>
              <div className="label">until a missed-call caller dials a competitor</div>
            </div>
          </div>
        </div>
      </section>

      <section className="scenarios" aria-label="A real 24-hour call distribution">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="section-eyebrow">24 hours · real distribution</div>
            <h2 className="section-title">A typical day of calls.</h2>
            <p style={{ maxWidth: 640, margin: "12px auto 0", color: "var(--color-text)" }}>
              Pulled from a real HVAC client&rsquo;s call log. {totalCalls} inbound calls in one day —{" "}
              <strong>{afterHours} of them landed outside 8 AM – 6 PM.</strong> That&rsquo;s the bleed
              a 9-to-5 service can&rsquo;t catch.
            </p>
          </div>
          <div className="p247-bars-wrap" style={{ marginTop: 24 }}>
          <div className="p247-bars-grid" style={{ display: "grid", gridTemplateColumns: "repeat(24, 1fr)", gap: 4, alignItems: "end", padding: 16, background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }}>
            {HOUR_CALLS.map((h) => {
              const heightPct = (h.calls / maxCalls) * 100;
              const hr = parseInt(h.hour);
              const isPm = h.hour.endsWith("p");
              const hr24 = h.hour === "12a" ? 0 : h.hour === "12p" ? 12 : isPm ? hr + 12 : hr;
              const offHours = hr24 < 8 || hr24 >= 18;
              return (
                <div key={h.hour} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <div title={h.note ? `${h.calls} calls — ${h.note}` : `${h.calls} calls`} style={{ width: "100%", height: 120, display: "flex", alignItems: "flex-end" }}>
                    <div style={{ width: "100%", height: `${heightPct}%`, background: offHours ? "var(--color-brand)" : "var(--color-text-muted)", borderRadius: "4px 4px 0 0", minHeight: h.calls > 0 ? 4 : 0 }} />
                  </div>
                  <span style={{ fontSize: 10, color: "var(--color-text-muted)" }}>{h.hour}</span>
                </div>
              );
            })}
          </div>
          </div>
          <div className="p247-legend" style={{ display: "flex", gap: 24, justifyContent: "center", marginTop: 16, fontSize: 13, color: "var(--color-text)" }}>
            <span><span style={{ display: "inline-block", width: 12, height: 12, background: "var(--color-text-muted)", borderRadius: 2, marginRight: 6, verticalAlign: "middle" }} /> Business hours</span>
            <span><span style={{ display: "inline-block", width: 12, height: 12, background: "var(--color-brand)", borderRadius: 2, marginRight: 6, verticalAlign: "middle" }} /> After-hours (where you&rsquo;re bleeding)</span>
          </div>
        </div>
      </section>

      <section className="compare-section" aria-label="Real 24/7 vs fake 24/7">
        <div className="wrap-narrow">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="section-eyebrow">Real vs fake</div>
            <h2 className="section-title">Most &ldquo;24/7&rdquo; isn&rsquo;t actually 24/7.</h2>
          </div>
          <div className="compare-table">
            <div className="compare-row compare-head">
              <div>What &ldquo;24/7&rdquo; means</div>
              <div>Typical service</div>
              <div>Live Answer</div>
            </div>
            <div className="compare-row">
              <div>3 AM call</div>
              <div>Voicemail or skeleton crew</div>
              <div>Same agent, same quality</div>
            </div>
            <div className="compare-row">
              <div>Two calls simultaneously</div>
              <div>Second one queued / dropped</div>
              <div>Both answered in parallel</div>
            </div>
            <div className="compare-row">
              <div>Thanksgiving / Christmas</div>
              <div>&ldquo;Reduced hours&rdquo; or surge fees</div>
              <div>Same service, same $500</div>
            </div>
            <div className="compare-row">
              <div>Spanish at 11 PM</div>
              <div>Routed to English voicemail</div>
              <div>Native EN/ES from first ring</div>
            </div>
            <div className="compare-row">
              <div>CRM booking after hours</div>
              <div>Message taken, booked next day</div>
              <div>Booked live into your calendar</div>
            </div>
          </div>
        </div>
      </section>

      <section className="plan" aria-label="How always-on works">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-num">03 · Mechanism</span>
            <h2 className="section-title" style={{ margin: 0 }}>Why we can do this.</h2>
          </div>
          <div className="plan-grid">
            <div className="plan-step">
              <div className="num">1</div>
              <h3>No staff to schedule</h3>
              <p>AI doesn&rsquo;t sleep, take PTO, or call out sick. There&rsquo;s no &ldquo;graveyard shift&rdquo; quality drop because there&rsquo;s no shift.</p>
            </div>
            <div className="plan-step">
              <div className="num">2</div>
              <h3>Parallel by default</h3>
              <p>50 simultaneous callers? Each one gets their own agent instance. Human services queue; we don&rsquo;t.</p>
            </div>
            <div className="plan-step">
              <div className="num">3</div>
              <h3>Flat-rate, every hour</h3>
              <p>Holiday calls cost the same as Tuesday-morning calls. $500/mo, no surge pricing, no minute caps.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="guarantees" aria-label="Risk reversal" style={{ padding: "32px 0", display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
        <span><i className="ti ti-shield-check" aria-hidden="true" /> 7-day free trial · no card</span>
        <span><i className="ti ti-shield-check" aria-hidden="true" /> Miss a booking? Month free</span>
        <span><i className="ti ti-shield-check" aria-hidden="true" /> Cancel anytime</span>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <h2>Call right now. We&rsquo;re open.</h2>
          <div className="sub">Doesn&rsquo;t matter what time it is when you&rsquo;re reading this.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
          <div style={{ marginTop: 20 }}>
            <Link href="/book" className="btn-secondary">
              Or book a 30-min setup consult →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
