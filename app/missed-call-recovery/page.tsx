import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { loadSitePlan, noindexSlugs, gatedRobots } from "@/lib/site-plan";

const SLUG = "missed-call-recovery";
const NOINDEX = noindexSlugs(loadSitePlan()).has(SLUG);

export const metadata: Metadata = {
  robots: gatedRobots("/missed-call-recovery"),
  title: "Missed Call Recovery — Turn Lost Calls Into Booked Jobs",
  description:
    "Every call that would've hit voicemail gets answered, qualified, and booked. Missed-callers get auto follow-up; emergencies escalate to your cell. $500/mo flat.",
  alternates: { canonical: `/${SLUG}` },
  ...(NOINDEX ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } } : {}),
};

const CHAIN: Array<{ icon: string; title: string; body: string }> = [
  {
    icon: "ti-arrow-fork",
    title: "The call gets caught",
    body: "Overflow, no-answer, and after-hours forwarding route the call to Live Answer the instant your line doesn't pick up. Nothing rolls to voicemail.",
  },
  {
    icon: "ti-phone-incoming",
    title: "Answered in 2 rings, then qualified",
    body: "The AI picks up within two rings and runs your intake script — name, service, urgency, location — in native English or Spanish.",
  },
  {
    icon: "ti-calendar-check",
    title: "Booked into your calendar",
    body: "If it's a job, it goes straight onto your calendar live on the call — not a message for you to call back and chase.",
  },
  {
    icon: "ti-message-2",
    title: "Summary to your phone in 60 seconds",
    body: "You get an SMS and email summary of the call within 60 seconds — caller, what they needed, what was booked.",
  },
  {
    icon: "ti-send",
    title: "Missed-connection follow-up SMS",
    body: "If a caller drops or can't be fully handled, they get an automatic follow-up text so the lead doesn't go cold.",
  },
  {
    icon: "ti-alert-triangle",
    title: "Emergencies escalate in 30 seconds",
    body: "A burst pipe or an after-hours legal emergency hot-transfers or texts your cell within 30 seconds — you decide what counts as urgent.",
  },
];

const RECOVERED: Array<{ icon: string; title: string; body: string }> = [
  {
    icon: "ti-moon",
    title: "After-hours",
    body: "The 7 PM HVAC emergency and the 11 PM DUI intake both get a real answer instead of a voicemail box.",
  },
  {
    icon: "ti-tools",
    title: "Mid-job",
    body: "You're on a roof or under a sink. The call you can't take is answered, qualified, and booked without you touching your phone.",
  },
  {
    icon: "ti-coffee",
    title: "Lunch rush",
    body: "The noon spike that normally rolls to voicemail gets handled in parallel — every caller, at once, no queue.",
  },
  {
    icon: "ti-chart-arrows-vertical",
    title: "Seasonal spikes",
    body: "Heat wave, cold snap, storm week. Volume triples and the price doesn't move — recovery scales with no surge fee.",
  },
];

export default function MissedCallRecoveryPage() {
  return (
    <>
      <style>{`
        @media (max-width: 760px) {
          .mcr-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .mcr-chain-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section className="la-hero">
        <div className="wrap mcr-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <div className="hero-eyebrow">
              <span className="dot" aria-hidden="true" />
              <span>Missed call recovery</span>
            </div>
            <h1>The calls you miss <em>still get booked.</em></h1>
            <p className="sub">
              Missed call recovery is a system, not a voicemail. Every call that would have gone
              unanswered gets <strong>answered, qualified, and either booked or followed up</strong> —
              while you&rsquo;re on the job, after hours, or slammed at lunch.
            </p>
            <form className="hero-call-form" action="/api/demo-call" method="post">
              <input type="tel" name="phone" placeholder="Enter your phone number" required aria-label="Your phone number" />
              <button type="submit">
                <i className="ti ti-phone-outgoing" aria-hidden="true" />
                Watch a call get recovered
              </button>
            </form>
            <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
              Call the demo line and watch the recovery chain run live.
            </div>
            <div className="hero-transitional">
              Want the math first? <Link href="/calculator">See what your missed calls cost &rarr;</Link>
            </div>
          </div>

          <div className="hero-phone-wrap">
            <div className="phone-mockup" role="img" aria-label="A missed call being recovered">
              <div className="phone-notch" aria-hidden="true" />
              <div className="phone-screen">
                <div className="phone-status">
                  <span>6:48 PM</span>
                  <span aria-hidden="true"><i className="ti ti-signal-4g" /> <i className="ti ti-wifi" /> <i className="ti ti-battery" /></span>
                </div>
                <div className="phone-callbar">
                  <i className="ti ti-phone-call" aria-hidden="true" />
                  <span>Recovered call · 0:51</span>
                </div>
                <div className="chat-thread">
                  <div className="chat-bubble ai">Live Answer — this is Sarah. How can I help?</div>
                  <div className="chat-bubble caller">My furnace just died. It&rsquo;s freezing.</div>
                  <div className="chat-bubble ai">I can get a tech out. What&rsquo;s the address?</div>
                  <div className="chat-bubble caller">88 Oak, San Jose.</div>
                  <div className="chat-bubble ai">Booked for 8 AM. Owner&rsquo;s been texted the summary.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stakes" aria-label="The cost of the status quo">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="section-eyebrow">The cost of the status quo</div>
            <h2 className="section-title">A missed call isn&rsquo;t a missed call. It&rsquo;s a booked competitor.</h2>
            <p style={{ maxWidth: 660, margin: "12px auto 0", color: "var(--color-text)" }}>
              <strong>62% of business calls go unanswered. 62% of those callers dial a competitor
              immediately</strong> — they don&rsquo;t leave a voicemail, they don&rsquo;t call back. The
              job is gone before you&rsquo;ve seen the missed-call notification.
            </p>
          </div>
          <div className="stakes-grid">
            <div className="stakes-stat">
              <div className="num">$5,000+</div>
              <div className="label">what one missed legal intake call can cost</div>
            </div>
            <div className="stakes-stat">
              <div className="num">$275–$1,200</div>
              <div className="label">value of a single missed HVAC call</div>
            </div>
            <div className="stakes-stat">
              <div className="num">~$850</div>
              <div className="label">average value of a missed dental call</div>
            </div>
          </div>
        </div>
      </section>

      <section className="plan" aria-label="How missed call recovery works">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-num">The recovery chain</span>
            <h2 className="section-title" style={{ margin: 0 }}>What actually happens to a call you can&rsquo;t take.</h2>
            <p style={{ maxWidth: 660, margin: "12px auto 0", color: "var(--color-text)" }}>
              This is the chain Live Answer runs on every recovered call — from the moment your line
              doesn&rsquo;t pick up to the summary on your phone.
            </p>
          </div>
          <div className="plan-grid mcr-chain-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {CHAIN.map((step, i) => (
              <div className="plan-step" key={step.title}>
                <div className="num">{i + 1}</div>
                <h3><i className={`ti ${step.icon}`} aria-hidden="true" style={{ marginRight: 8 }} />{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scenarios" aria-label="What gets recovered">
        <div className="wrap">
          <div className="section-eyebrow">What gets recovered</div>
          <h2 className="section-title">Every call you can&rsquo;t pick up.</h2>
          <div className="scenarios-grid">
            {RECOVERED.map((s) => (
              <div className="scenario-card" key={s.title}>
                <div className="time"><i className={`ti ${s.icon}`} aria-hidden="true" /> {s.title}</div>
                <div className="body">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="voc-pullout" aria-label="Proof — the demo line">
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <div className="section-eyebrow">Proof, not a promise</div>
          <h2 className="section-title">Call the line. Watch the recovery happen.</h2>
          <p style={{ maxWidth: 600, margin: "12px auto 24px", color: "var(--color-text)" }}>
            Don&rsquo;t take our word for it. Call the demo line right now, play a customer with a
            burst pipe or a new-patient question, and watch the AI answer, qualify, and book — the
            exact chain that recovers your real calls.
          </p>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
        </div>
      </section>

      <section className="scenarios" aria-label="Pricing context">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="section-eyebrow">Pricing context</div>
            <h2 className="section-title">Recovery doesn&rsquo;t cost more on your busiest month.</h2>
            <p style={{ maxWidth: 660, margin: "12px auto 0", color: "var(--color-text)" }}>
              Metered answering services sell small minute buckets that balloon with every recovered
              call — exactly when recovery matters most. Live Answer is <strong>$500/mo flat,
              unlimited</strong>. The price is the same whether you recover 20 calls or 2,000.
            </p>
          </div>
          <div className="scenarios-grid">
            <div className="scenario-card">
              <div className="time"><i className="ti ti-clock-dollar" aria-hidden="true" /> Metered services</div>
              <div className="body">
                A 100–500 minute bucket, then $1.50–$3.45 per extra minute. A busy storm week of
                recovered calls turns a $350 sticker into $1,500–$3,000+. You pay most when you
                recover most.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-infinity" aria-hidden="true" /> Live Answer flat</div>
              <div className="body">
                $500/mo, unlimited calls, no overage, no surge. Recover every call on your busiest
                month and the invoice doesn&rsquo;t move. Recovery you can actually rely on.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-calculator" aria-hidden="true" /> See your number</div>
              <div className="body">
                One recovered HVAC call covers weeks of service; one recovered legal intake covers
                the year. <Link href="/calculator">See what your missed calls cost &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="guarantees" aria-label="Risk reversal" style={{ padding: "32px 0", display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
        <span><i className="ti ti-shield-check" aria-hidden="true" /> 7-day free trial · no card</span>
        <span><i className="ti ti-shield-check" aria-hidden="true" /> Bilingual EN/ES from the first ring</span>
        <span><i className="ti ti-shield-check" aria-hidden="true" /> Cancel anytime</span>
      </section>

      <section className="faq" aria-label="Missed call recovery FAQ">
        <div className="wrap">
          <h2>Missed call recovery questions</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <h3>What is missed call recovery?</h3>
              <p>
                Missed call recovery is a system that makes sure every call you can&rsquo;t pick up
                still gets handled. Instead of rolling to voicemail, the call is forwarded, answered
                within two rings, qualified, and either booked into your calendar or followed up with
                an automatic SMS — so the lead never goes cold.
              </p>
            </li>
            <li>
              <h3>How fast are missed calls answered?</h3>
              <p>
                Within two rings. Overflow, no-answer, and after-hours forwarding route the call to
                Live Answer the moment your line doesn&rsquo;t pick up, and you get an SMS and email
                summary within 60 seconds. Emergencies escalate to your cell within 30 seconds.
              </p>
            </li>
            <li>
              <h3>Does it work after hours?</h3>
              <p>
                Yes. Recovery runs 24/7 — the 7 PM emergency and the 11 PM intake get the same
                answer as a 10 AM call. There&rsquo;s no degraded after-hours mode and no surge fee,
                because it&rsquo;s the same AI agent every hour of every day, including holidays.
              </p>
            </li>
            <li>
              <h3>What does a missed call cost my business?</h3>
              <p>
                More than most owners think. 62% of business calls go unanswered, and 62% of those
                callers contact a competitor immediately. A single missed call is worth $275–$1,200
                for HVAC, around $850 for dental, and $5,000+ for legal intake. Use the{" "}
                <Link href="/calculator">cost calculator</Link> to see your number.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap">
          <h2>Stop missing the call. Start recovering it.</h2>
          <div className="sub">Every call that would&rsquo;ve gone to voicemail, answered and booked instead.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
          <div style={{ marginTop: 20 }}>
            <Link href="/calculator" className="btn-secondary">
              See what your missed calls cost &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
