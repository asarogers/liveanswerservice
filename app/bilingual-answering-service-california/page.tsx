import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { loadSitePlan, noindexSlugs, gatedRobots } from "@/lib/site-plan";
import HeroCallForm from "@/components/HeroCallForm";

const SLUG = "bilingual-answering-service-california";
const NOINDEX = noindexSlugs(loadSitePlan()).has(SLUG);

export const metadata: Metadata = {
  openGraph: {
  url: "https://liveanswerservice.com/bilingual-answering-service-california",
  images: [{ url: "https://liveanswerservice.com/opengraph-image.png", width: 1024, height: 1024, alt: "Live Answer Service" }],
  },
  robots: gatedRobots("/bilingual-answering-service-california"),
  title: "Bilingual Answering Service in California — Native EN/ES",
  description:
    "Native bilingual English-Spanish answering service for California small business. AI detects caller language in 3 seconds. Included standard, not an upcharge.",
  alternates: { canonical: `/${SLUG}` },
  ...(NOINDEX ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } } : {}),
};

const ES_CHAT: Array<{ speaker: "ai" | "caller"; text: string }> = [
  { speaker: "caller", text: "Hola, mi aire acondicionado no funciona." },
  { speaker: "ai", text: "Lo siento mucho. ¿Cuál es su dirección?" },
  { speaker: "caller", text: "1240 Lincoln Ave, San José." },
  { speaker: "ai", text: "Un técnico llegará a las 4:30 PM. Le envío confirmación por mensaje." },
];

export default function BilingualPage() {
  return (
    <>
      <style>{`
        @media (max-width: 760px) {
          .bil-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .bil-compare-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .bil-timeline { grid-template-columns: 1fr !important; gap: 24px !important; }
          .bil-timeline-line { display: none !important; }
          .bil-metro-row { grid-template-columns: 1fr !important; gap: 6px !important; }
          .bil-metro-row > div:last-child { text-align: left !important; }
        }
      `}</style>
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="la-hero">
        <div className="wrap bil-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <div className="hero-eyebrow">
              <span className="dot" aria-hidden="true" />
              <span>EN/ES native · included standard</span>
            </div>
            <h1>Bilingual. <em>Standard.</em></h1>
            <p className="sub">
              <strong>You serve California — that means half your callers may speak Spanish first.</strong>{" "}
              Live Answer detects the caller&rsquo;s language in three seconds and answers natively in
              either. Included on every plan. Never an upcharge.
            </p>
            <HeroCallForm recaptchaSiteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} label="Llámame · Call me" />
            <div style={{ fontSize: 13, color: "#94867a" }}>
              Speak Spanish or English when we call — the AI matches you.
            </div>
            <div className="hero-transitional">
              ¿Prefiere hablar con una persona? <Link href="/book">Book a 30-min consult →</Link>
            </div>
          </div>

          <div className="hero-phone-wrap">
            <div className="phone-mockup" role="img" aria-label="Sample Spanish-language AI call">
              <div className="phone-notch" aria-hidden="true" />
              <div className="phone-screen">
                <div className="phone-status">
                  <span>9:41</span>
                  <span aria-hidden="true"><i className="ti ti-language" /></span>
                </div>
                <div className="phone-callbar">
                  <i className="ti ti-phone-call" aria-hidden="true" />
                  <span>Live Answer · 0:28 · ES</span>
                </div>
                <div className="chat-thread">
                  {ES_CHAT.map((msg, i) => (
                    <div key={i} className={`chat-bubble ${msg.speaker}`}>{msg.text}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAKES ──────────────────────────────────────────── */}
      <section className="stakes" aria-label="Spanish-speaking population in CA">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-num">01 · The market</span>
            <h2 className="section-title" style={{ margin: 0 }}>The customers you&rsquo;re leaving on the table.</h2>
          </div>
          <div className="stakes-grid">
            <div className="stakes-stat">
              <div className="num">10.4M</div>
              <div className="label">Californians speak Spanish at home</div>
            </div>
            <div className="stakes-stat">
              <div className="num">48%</div>
              <div className="label">of LA County is Hispanic / Latino</div>
            </div>
            <div className="stakes-stat">
              <div className="num">30–50%</div>
              <div className="label">hang-up rate on English-only voicemail</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VOC PULLOUT ─────────────────────────────────────── */}
      <section className="voc-pullout" aria-label="What Spanish-speaking callers do">
        <div className="wrap-narrow">
          <blockquote className="voc-quote">
            &ldquo;Si no contestan en español, cuelgo y llamo al siguiente. Hay diez plomeros más
            en Google.&rdquo;
          </blockquote>
          <div className="voc-attribution">— LA homeowner · &ldquo;If they don&rsquo;t answer in Spanish, I hang up and call the next one. There are ten more plumbers on Google.&rdquo;</div>
        </div>
      </section>

      {/* ── PROBLEM — SIDE-BY-SIDE CALL TRANSCRIPTS ─────────── */}
      <section className="section-pad" aria-label="What English-only sounds like" style={{ background: "#f7f2e7" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-num">02 · Same caller. Two outcomes.</span>
            <h2 className="section-title" style={{ margin: 0 }}>Watch what happens when Spanish hits English.</h2>
          </div>
          <div className="bil-compare-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "stretch" }}>
            <div style={{ background: "#fbe2e2", border: "1px solid #d9cdb1", borderRadius: 12, padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
                <strong style={{ fontSize: 17, color: "#5a1f2e" }}>Competitor · English-only</strong>
                <span style={{ fontSize: 11, color: "#5a1f2e", textTransform: "uppercase", letterSpacing: 0.5 }}>3 seconds</span>
              </div>
              <div className="chat-thread" style={{ background: "#fdfaf3", padding: 16, borderRadius: 8 }}>
                <div className="chat-bubble caller">¿Hola? Mi aire acondicionado no funciona.</div>
                <div className="chat-bubble ai">Sorry, I didn&rsquo;t catch that. Could you repeat?</div>
                <div className="chat-bubble caller" style={{ opacity: 0.6, fontStyle: "italic" }}>*click*</div>
              </div>
              <div style={{ marginTop: 16, fontSize: 13, color: "#5a1f2e", textAlign: "center" }}>
                Lost lead. Caller dialed the next plumber on Google.
              </div>
            </div>
            <div style={{ background: "#fdfaf3", border: "1px solid #d9cdb1", borderRadius: 12, padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
                <strong style={{ fontSize: 17, color: "#1a1611" }}>Live Answer · auto-detect</strong>
                <span style={{ fontSize: 11, color: "#5a1f2e", textTransform: "uppercase", letterSpacing: 0.5 }}>Booked</span>
              </div>
              <div className="chat-thread" style={{ background: "#f7f2e7", padding: 16, borderRadius: 8 }}>
                <div className="chat-bubble caller">¿Hola? Mi aire acondicionado no funciona.</div>
                <div className="chat-bubble ai">Hola, lo siento mucho. ¿Cuál es su dirección?</div>
                <div className="chat-bubble caller">1240 Lincoln Ave, San José.</div>
                <div className="chat-bubble ai">Técnico a las 4:30. Confirmación por texto.</div>
              </div>
              <div style={{ marginTop: 16, fontSize: 13, color: "#5c5147", textAlign: "center" }}>
                Booked into your calendar. SMS sent. You go back to work.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — HORIZONTAL TIMELINE ──────────────── */}
      <section className="section-pad" aria-label="How bilingual works">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-num">03 · How it works</span>
            <h2 className="section-title" style={{ margin: 0 }}>Three seconds, from &ldquo;Hola&rdquo; to booked.</h2>
          </div>
          <div className="bil-timeline" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0, alignItems: "start", maxWidth: 1000, margin: "0 auto" }}>
            <div className="bil-timeline-line" style={{ position: "absolute", top: 28, left: "10%", right: "10%", height: 2, background: "var(--color-border)", zIndex: 0 }} />
            {[
              { t: "0.0s", icon: "ti-phone-incoming", label: "Call rings", body: "Single number. No menus." },
              { t: "0.5s", icon: "ti-ear", label: "AI greets", body: "Neutral opener — no &ldquo;press 2.&rdquo;" },
              { t: "1.5s", icon: "ti-language", label: "Caller speaks", body: "Detects Spanish or English." },
              { t: "3.0s", icon: "ti-arrows-left-right", label: "Switches native", body: "Same voice, native phonemes." },
              { t: "2:30", icon: "ti-calendar-check", label: "Booked", body: "Into your CRM in their language." },
            ].map((step, i) => (
              <div key={i} style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 8px" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#1a1611", color: "#f7f2e7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                  <i className={`ti ${step.icon}`} aria-hidden="true" style={{ fontSize: 22 }} />
                </div>
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 0.6, color: "#94867a", marginBottom: 4 }}>{step.t}</div>
                <div style={{ fontWeight: 600, fontSize: 15, color: "#1a1611", marginBottom: 6 }}>{step.label}</div>
                <div style={{ fontSize: 13, color: "#5c5147", lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: step.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METROS — HORIZONTAL BAR CHART ───────────────────── */}
      <section className="section-pad" aria-label="Hispanic share by metro" style={{ background: "#f7f2e7" }}>
        <div className="wrap" style={{ maxWidth: 880 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-num">04 · Where it pays</span>
            <h2 className="section-title" style={{ margin: 0 }}>How much of each metro speaks Spanish.</h2>
            <p style={{ maxWidth: 540, margin: "12px auto 0", color: "#5c5147" }}>
              Hispanic / Latino share by California county. Every red bar is a missed-call rate.
            </p>
          </div>
          <div style={{ display: "grid", gap: 18 }}>
            {[
              { metro: "Imperial County",   pct: 86, note: "Border / agriculture" },
              { metro: "Tulare County",     pct: 66, note: "Central Valley" },
              { metro: "Fresno County",     pct: 55, note: "Central Valley" },
              { metro: "Riverside / SB",    pct: 52, note: "Inland Empire" },
              { metro: "Los Angeles County",pct: 48, note: "10M residents" },
              { metro: "Orange County",     pct: 34, note: "Coastal South CA" },
              { metro: "Sacramento County", pct: 24, note: "State capital" },
              { metro: "Santa Clara County",pct: 25, note: "Silicon Valley" },
            ].map((row) => (
              <div key={row.metro} className="bil-metro-row" style={{ display: "grid", gridTemplateColumns: "200px 1fr 60px", gap: 16, alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "#1a1611" }}>{row.metro}</div>
                  <div style={{ fontSize: 11, color: "#94867a", textTransform: "uppercase", letterSpacing: 0.5 }}>{row.note}</div>
                </div>
                <div style={{ height: 28, background: "#fdfaf3", border: "1px solid #d9cdb1", borderRadius: 4, overflow: "hidden", position: "relative" }}>
                  <div style={{ height: "100%", width: `${row.pct}%`, background: "#5a1f2e", borderRadius: 4, transition: "width 0.6s" }} />
                </div>
                <div style={{ fontWeight: 700, fontSize: 18, color: "#1a1611", textAlign: "right" }}>{row.pct}%</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 32, fontSize: 14, color: "#5c5147", fontStyle: "italic" }}>
            Source: US Census, 2020. Half the calls in most CA service businesses are bilingual-relevant.
          </p>
        </div>
      </section>

      {/* ── EXTREME BILINGUAL ANCHOR ────────────────────────── */}
      <section className="stakes" aria-label="The most extreme bilingual upcharge">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-num">05 · The extreme case</span>
            <h2 className="section-title" style={{ margin: 0 }}>One CA service charges <em>$4,000/mo</em> for what we include.</h2>
            <p style={{ maxWidth: 640, margin: "12px auto 0", color: "#5c5147" }}>
              Reliable Receptionist (Bay Area) is the gold-standard bilingual human service. Real
              people, native Spanish, full coverage. Real price: <strong>$4,000 a month.</strong>{" "}
              That&rsquo;s 8× ours — for a feature we hand you on day one at zero upcharge.
            </p>
          </div>
          <div className="stakes-grid">
            <div className="stakes-stat">
              <div className="num">$4,000</div>
              <div className="label">Reliable Receptionist — full bilingual, per month</div>
            </div>
            <div className="stakes-stat">
              <div className="num">$48,000</div>
              <div className="label">what that costs you over a year</div>
            </div>
            <div className="stakes-stat">
              <div className="num">$0</div>
              <div className="label">what bilingual costs on Live Answer Unlimited</div>
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: 24, fontSize: 15, color: "#5c5147", maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
            You can pay $42,000/year extra for a Spanish-speaking human to sit at a desk.
            Or you can flip a switch and have it included tomorrow.
          </p>
        </div>
      </section>

      {/* ── SUCCESS ─────────────────────────────────────────── */}
      <section className="success" aria-label="What you get">
        <div className="wrap-narrow">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-num">06 · What you get</span>
            <h2 className="section-title" style={{ margin: 0 }}>Spanish callers stop hanging up.</h2>
          </div>
          <div className="success-grid">
            <div className="success-item">
              <i className="ti ti-language" aria-hidden="true" />
              <strong>Auto language detection</strong>
            </div>
            <div className="success-item">
              <i className="ti ti-volume" aria-hidden="true" />
              <strong>Native Spanish voice</strong>
            </div>
            <div className="success-item">
              <i className="ti ti-calendar-event" aria-hidden="true" />
              <strong>Bilingual CRM booking</strong>
            </div>
            <div className="success-item">
              <i className="ti ti-message-2" aria-hidden="true" />
              <strong>SMS summaries to you in English</strong>
            </div>
            <div className="success-item">
              <i className="ti ti-headset" aria-hidden="true" />
              <strong>No &ldquo;press 2&rdquo; menus</strong>
            </div>
            <div className="success-item">
              <i className="ti ti-cash-off" aria-hidden="true" />
              <strong>Zero bilingual upcharge</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAILURE PATH ────────────────────────────────────── */}
      <section className="stakes" aria-label="What it costs to skip this">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-num">07 · What skipping costs</span>
            <h2 className="section-title" style={{ margin: 0 }}>The competitor who answers in Spanish gets the job.</h2>
          </div>
          <div className="stakes-grid">
            <div className="stakes-stat">
              <div className="num">3 sec</div>
              <div className="label">average time before a Spanish caller hangs up on English greeting</div>
            </div>
            <div className="stakes-stat">
              <div className="num">2.4</div>
              <div className="label">competitors a CA homeowner calls before giving up</div>
            </div>
            <div className="stakes-stat">
              <div className="num">$0</div>
              <div className="label">value of a $1,200 HVAC job that went to the next plumber</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────── */}
      <section className="final-cta">
        <div className="wrap">
          <h2>Llama y prueba el demo.</h2>
          <div className="sub">Speak Spanish to the AI — it&rsquo;ll switch on its own.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
          <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/book" className="btn-secondary">Book a 30-min consult →</Link>
            <Link href="/start-trial" className="btn-secondary">Start 7-day free trial →</Link>
          </div>
          <div className="guarantees" style={{ marginTop: 24, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            <span><i className="ti ti-shield-check" aria-hidden="true" /> Bilingual included · always</span>
            <span><i className="ti ti-shield-check" aria-hidden="true" /> Cancel anytime</span>
            <span><i className="ti ti-shield-check" aria-hidden="true" /> Miss a booking? Month free</span>
          </div>
        </div>
      </section>
    </>
  );
}
