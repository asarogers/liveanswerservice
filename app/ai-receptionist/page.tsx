import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { loadSitePlan, noindexSlugs, gatedRobots } from "@/lib/site-plan";

const SLUG = "ai-receptionist";
const NOINDEX = noindexSlugs(loadSitePlan()).has(SLUG);

export const metadata: Metadata = {
  robots: gatedRobots("/ai-receptionist"),
  title: "Best AI Receptionist for Small Business — Live Answer",
  description:
    "The best AI receptionist for small business is one you don't run yourself. Live Answer builds & runs your agent — bilingual, $500/mo flat, human-backed.",
  alternates: { canonical: `/${SLUG}` },
  ...(NOINDEX ? { robots: { index: false, follow: true, googleBot: { index: false, follow: true } } } : {}),
};

export default function AIReceptionistPage() {
  return (
    <>
      <style>{`
        @media (max-width: 760px) {
          .air-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>

      {/* ── HERO (Character + the honest managed-AI frame) ───── */}
      <section className="la-hero">
        <div className="wrap air-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <div className="hero-eyebrow">
              <span className="dot" aria-hidden="true" />
              <span>Done-for-you · managed · San Jose CA</span>
            </div>
            <h1>An AI receptionist that <em>answers like a person.</em></h1>
            <p className="sub">
              Built and run for you — with a human on the hard ones.{" "}
              <strong>Live Answer is a managed AI answering service: we build your agent, tune it, and
              monitor it. You just forward your phone.</strong>{" "}
              Not a DIY tool you configure and babysit.
            </p>
            <form className="hero-call-form" action="/api/demo-call" method="post">
              <input type="tel" name="phone" placeholder="Enter your phone number" required aria-label="Your phone number" />
              <button type="submit">
                <i className="ti ti-phone-outgoing" aria-hidden="true" />
                Call me now
              </button>
            </form>
            <div style={{ fontSize: 13, color: "#94867a" }}>
              Or hear it yourself — call the live demo line: <strong>{siteConfig.phone.display}</strong>
            </div>
            <div className="hero-transitional">
              Prefer a human first? <Link href="/book">Book a 30-min setup consult →</Link>
            </div>
          </div>

          <div className="hero-phone-wrap">
            <div className="phone-mockup" role="img" aria-label="Sample AI receptionist call">
              <div className="phone-notch" aria-hidden="true" />
              <div className="phone-screen">
                <div className="phone-status">
                  <span>10:02 AM</span>
                  <span aria-hidden="true"><i className="ti ti-signal-4g" /> <i className="ti ti-wifi" /> <i className="ti ti-battery" /></span>
                </div>
                <div className="phone-callbar">
                  <i className="ti ti-phone-call" aria-hidden="true" />
                  <span>Live Answer · 0:38</span>
                </div>
                <div className="chat-thread">
                  <div className="chat-bubble ai">Live Answer — this is Maya. How can I help?</div>
                  <div className="chat-bubble caller">Hi, my furnace won&rsquo;t turn on.</div>
                  <div className="chat-bubble ai">I can get a tech out. Are you safe and warm right now?</div>
                  <div className="chat-bubble caller">Yeah, just cold. Today if possible.</div>
                  <div className="chat-bubble ai">Booked 2–4 PM. Texting you the confirmation now.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VOC PULLOUT — the #1 objection, named honestly ──── */}
      <section className="voc-pullout" aria-label="The objection we hear most">
        <div className="wrap-narrow">
          <blockquote className="voc-quote">
            &ldquo;Pawning me off to AI is not good customer service.&rdquo;
          </blockquote>
          <div className="voc-attribution">— the objection we hear most, and the one we answer below</div>
        </div>
      </section>

      {/* ── THE REFRAME (Internal/philosophical problem) ────── */}
      <section className="stakes" aria-label="The honest reframe">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-num">01 · The honest part</span>
            <h2 className="section-title" style={{ margin: 0 }}>The real choice isn&rsquo;t AI vs. a person.</h2>
            <p style={{ maxWidth: 660, margin: "12px auto 0", color: "#5c5147" }}>
              It&rsquo;s AI vs. <em>nobody.</em> Right now, the caller you can&rsquo;t pick up gets your
              voicemail — and most of them never leave one. They dial the next business instead.
            </p>
          </div>
          <div className="stakes-grid">
            <div className="stakes-stat">
              <div className="num">~60%</div>
              <div className="label">of callers hit voicemail today — and most just hang up</div>
            </div>
            <div className="stakes-stat">
              <div className="num">~60 sec</div>
              <div className="label">until a missed-call caller dials your competitor</div>
            </div>
            <div className="stakes-stat">
              <div className="num">Human</div>
              <div className="label">hot-transfer on the genuinely hard calls — the AI knows when to hand off</div>
            </div>
          </div>
          <p style={{ textAlign: "center", maxWidth: 680, margin: "24px auto 0", color: "#5c5147", fontSize: 15 }}>
            An AI that answers in two rings, qualifies the lead, and books the job{" "}
            <strong>beats nobody answering</strong> — every time. And when a call needs a person, it
            escalates to one. That&rsquo;s the honest version of &ldquo;AI answering service.&rdquo;
          </p>
        </div>
      </section>

      {/* ── WHAT AN AI RECEPTIONIST ACTUALLY DOES ───────────── */}
      <section className="scenarios" aria-label="What an AI receptionist actually does">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-num">02 · The job</span>
            <h2 className="section-title" style={{ margin: 0 }}>What an AI receptionist actually does.</h2>
            <p style={{ maxWidth: 640, margin: "12px auto 0", color: "#5c5147" }}>
              Not a robo-menu. Not &ldquo;press 1.&rdquo; A real conversation that ends with a booked job
              and a summary in your pocket.
            </p>
          </div>
          <div className="scenarios-grid">
            <div className="scenario-card">
              <div className="time"><i className="ti ti-phone-incoming" aria-hidden="true" /> Answers in ≤2 rings</div>
              <div className="body">
                Every call, 24/7, in parallel. No queue, no &ldquo;all agents are busy,&rdquo; no
                after-hours voicemail. Bilingual EN/ES from the first hello.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-list-check" aria-hidden="true" /> Qualifies the lead</div>
              <div className="body">
                Asks the questions your front desk would — service needed, address, urgency — using
                an intake script we build around <em>your</em> operation, not a generic template.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-calendar-check" aria-hidden="true" /> Books into your calendar</div>
              <div className="body">
                Live, during the call — into your real calendar or CRM, not a message taken to be
                booked tomorrow. The caller hangs up with an appointment.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-message-2-check" aria-hidden="true" /> Texts you a summary in 60s</div>
              <div className="body">
                Name, number, what they need, and what was booked — by SMS within a minute of the
                call ending. You&rsquo;re never out of the loop.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-urgent" aria-hidden="true" /> Escalates emergencies</div>
              <div className="body">
                Burst pipe, after-hours legal crisis, true emergency? The agent recognizes it and
                hot-transfers to a human — the hard 20% never falls through.
              </div>
            </div>
            <div className="scenario-card">
              <div className="time"><i className="ti ti-settings-automation" aria-hidden="true" /> Gets tuned — by us</div>
              <div className="body">
                We monitor real calls and tune the agent over time. It gets better at your business
                every month. You never open a dashboard.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE BUYER CHECKLIST — "best AI receptionist" ────── */}
      <section className="plan" aria-label="How to choose the best AI receptionist">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-num">03 · The buyer&rsquo;s checklist</span>
            <h2 className="section-title" style={{ margin: 0 }}>What to look for in the best AI receptionist.</h2>
            <p style={{ maxWidth: 660, margin: "12px auto 0", color: "#5c5147" }}>
              The cheap DIY tools tick one box and miss the rest. Use this when you compare anyone.
            </p>
          </div>
          <div className="plan-grid">
            <div className="plan-step">
              <div className="num">1</div>
              <h3>Managed, not DIY</h3>
              <p>Does the vendor build and run the agent for you, or hand you a dashboard to configure and babysit? The $14–$99 tools are the latter. The real work — wiring it into your operation — is the product.</p>
            </div>
            <div className="plan-step">
              <div className="num">2</div>
              <h3>A human on the hard ones</h3>
              <p>Pure-AI tools with no escalation path drop the call that actually mattered. Insist on human hot-transfer for emergencies and edge cases.</p>
            </div>
            <div className="plan-step">
              <div className="num">3</div>
              <h3>Bilingual EN/ES</h3>
              <p>In California, English-only loses calls. Only ~29% of services offer Spanish — and many charge extra. It should be standard, from the first ring.</p>
            </div>
            <div className="plan-step">
              <div className="num">4</div>
              <h3>Flat pricing, no minutes trap</h3>
              <p>Most plans sell a small minute bucket that balloons via per-minute overage on a busy month. Demand flat-unlimited so your bill never punishes a good month.</p>
            </div>
            <div className="plan-step">
              <div className="num">5</div>
              <h3>Real CRM &amp; calendar integration</h3>
              <p>Booking live into your actual system beats &ldquo;a message will be emailed to you.&rdquo; Generic bots can&rsquo;t reach your tools — managed setups are built to.</p>
            </div>
            <div className="plan-step">
              <div className="num">6</div>
              <h3>Proof you can hear right now</h3>
              <p>The best test isn&rsquo;t a sales call — it&rsquo;s the bot itself. A real demo line you can dial today says more than any feature list. Ours: {siteConfig.phone.display}.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HONEST COMPARISON: DIY tools vs human vs Live Answer */}
      <section className="compare-section" aria-label="DIY AI tools vs human services vs Live Answer">
        <div className="wrap-narrow">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-num">04 · Side-by-side</span>
            <h2 className="section-title" style={{ margin: 0 }}>DIY AI tools vs. human services vs. us.</h2>
            <p style={{ maxWidth: 660, margin: "12px auto 0", color: "#5c5147" }}>
              Two honest extremes — and the spot in the middle they both miss.
            </p>
          </div>
          <div className="compare-table">
            <div className="compare-row compare-head">
              <div></div>
              <div>DIY AI tools ($14–$99)</div>
              <div>Human services</div>
              <div>Live Answer</div>
            </div>
            <div className="compare-row">
              <div>Who runs it</div>
              <div>You configure &amp; babysit</div>
              <div>Done for you</div>
              <div>Done for you, fully managed</div>
            </div>
            <div className="compare-row">
              <div>Scripts</div>
              <div>Generic templates</div>
              <div>Built for you</div>
              <div>Built around your operation</div>
            </div>
            <div className="compare-row">
              <div>Hard calls</div>
              <div>No human escalation</div>
              <div>Human, but queues</div>
              <div>Human hot-transfer</div>
            </div>
            <div className="compare-row">
              <div>Bilingual EN/ES</div>
              <div>Rare / extra</div>
              <div>Often an upcharge</div>
              <div>Standard</div>
            </div>
            <div className="compare-row">
              <div>Pricing</div>
              <div>Cheap sticker, overage trap</div>
              <div>Metered, balloons to $1.5–3k</div>
              <div>$500 flat, unlimited</div>
            </div>
            <div className="compare-row">
              <div>Proof</div>
              <div>No visible escalation, thin proof</div>
              <div>Reviews, but pricey</div>
              <div>Live demo line you can dial</div>
            </div>
            <div className="compare-row compare-us">
              <div><strong>Net</strong></div>
              <div>Cheap, but it&rsquo;s your problem</div>
              <div>Great, but the bill grows</div>
              <div><strong>Managed AI, human-backed, flat</strong></div>
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: 24, fontSize: 15, color: "#5c5147" }}>
            DIY tools make the AI <em>your</em> job. Human services make every busy month <em>cost more.</em>{" "}
            <strong>Live Answer is managed AI with a human on the hard calls — at one flat price.</strong>
          </p>
        </div>
      </section>

      {/* ── AI RECEPTIONIST SAN JOSE (local intent) ─────────── */}
      <section className="stakes" aria-label="AI receptionist San Jose">
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <span className="section-num">05 · Local</span>
            <h2 className="section-title" style={{ margin: 0 }}>An AI receptionist built in San Jose.</h2>
            <p style={{ maxWidth: 680, margin: "12px auto 0", color: "#5c5147" }}>
              We&rsquo;re a San Jose, CA company building AI receptionists for California small
              businesses — HVAC, legal, dental, home services, salons. Bilingual EN/ES out of the box,
              because a Bay Area phone line that can&rsquo;t take a Spanish call is leaving money on the
              table. There&rsquo;s an owner with a name behind this, not a faceless dashboard — and a
              demo line you can dial right now.
            </p>
          </div>
        </div>
      </section>

      {/* ── SUCCESS / what changes ──────────────────────────── */}
      <section className="success" aria-label="What changes with a managed AI receptionist">
        <div className="wrap-narrow">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-num">06 · What changes</span>
            <h2 className="section-title" style={{ margin: 0 }}>A week from now.</h2>
          </div>
          <div className="success-grid">
            <div className="success-item">
              <i className="ti ti-phone-check" aria-hidden="true" />
              <strong>Every call answered</strong>
            </div>
            <div className="success-item">
              <i className="ti ti-calendar-check" aria-hidden="true" />
              <strong>Booked into your calendar</strong>
            </div>
            <div className="success-item">
              <i className="ti ti-message-2-check" aria-hidden="true" />
              <strong>SMS summary in 60s</strong>
            </div>
            <div className="success-item">
              <i className="ti ti-language" aria-hidden="true" />
              <strong>Bilingual standard</strong>
            </div>
            <div className="success-item">
              <i className="ti ti-user-up" aria-hidden="true" />
              <strong>Human on the hard ones</strong>
            </div>
            <div className="success-item">
              <i className="ti ti-receipt" aria-hidden="true" />
              <strong>$500 flat, no surprises</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ (long-tail absorption) ──────────────────────── */}
      <section className="faq" aria-label="AI receptionist FAQ">
        <div className="wrap-narrow">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-num">07 · FAQ</span>
            <h2 className="section-title" style={{ margin: 0 }}>Questions owners ask before switching.</h2>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <h3>What does a virtual receptionist do?</h3>
              <p>
                A virtual receptionist answers your business calls for you instead of letting them ring
                out to voicemail. The core job is the same whether it&rsquo;s a person or an AI: greet
                the caller, find out what they need, answer common questions, qualify and book the
                appointment, and pass you the message. A modern AI receptionist like Live Answer does
                all of that in two rings, 24/7, in English or Spanish — and texts you a summary within
                60 seconds — while a human handles the genuinely hard calls.
              </p>
            </div>
            <div className="faq-item">
              <h3>What&rsquo;s the difference between an AI receptionist and a virtual receptionist?</h3>
              <p>
                &ldquo;Virtual receptionist&rdquo; is the job; &ldquo;AI receptionist&rdquo; is one way
                to do it. A traditional virtual receptionist is a remote human (often shared across many
                clients, so calls queue and the bill is metered by the minute). An AI receptionist
                answers with software — instantly, in parallel, with no queue and no per-minute meter.
                The best setups, like ours, are managed AI <em>with</em> a human hot-transfer for
                emergencies — you get the speed and flat price of AI plus a person on the calls that
                actually need one.
              </p>
            </div>
            <div className="faq-item">
              <h3>What&rsquo;s the best AI receptionist for a small business?</h3>
              <p>
                The best AI receptionist for a small business is the one you don&rsquo;t have to run
                yourself. The cheap $14–$99 tools hand you a dashboard, generic scripts, and no human
                escalation — the AI becomes your part-time job. Look instead for a <em>managed</em>{" "}
                service that builds the agent around your operation, integrates with your real calendar
                and CRM, includes bilingual EN/ES, escalates hard calls to a human, and charges a flat
                rate so a busy month doesn&rsquo;t blow up the bill. That&rsquo;s exactly how Live Answer
                is built — and you can hear it right now at {siteConfig.phone.display}.
              </p>
            </div>
            <div className="faq-item">
              <h3>Is an AI receptionist good for an HVAC business?</h3>
              <p>
                Yes — home services is where it pays off fastest. Most HVAC calls are after-hours or
                while you&rsquo;re on a job, and a missed call is worth $275–$1,200. The AI answers in
                two rings, qualifies the job, books it into your calendar, and hot-transfers a true
                emergency (no heat in winter, a burst line) to a human. One recovered install pays for
                months of service. The same applies to legal, dental, and other appointment-driven small
                businesses.
              </p>
            </div>
            <div className="faq-item">
              <h3>Isn&rsquo;t pushing callers to AI bad customer service?</h3>
              <p>
                It would be — if the alternative were a person. It usually isn&rsquo;t. Around 60% of
                callers already hit voicemail today, and most never leave a message; they just call your
                competitor. An AI that answers in two rings, sounds human, qualifies the lead, and books
                the job is far better than nobody answering — and when a call genuinely needs a person,
                ours transfers to one. We&rsquo;d rather catch the call than protect a voicemail box.
              </p>
            </div>
            <div className="faq-item">
              <h3>How much does Live Answer cost?</h3>
              <p>
                $500/mo, flat, for unlimited calls — bilingual EN/ES, 24/7, with bookings into your
                calendar and human escalation included. No per-minute meter, no overage, no surprise
                bills. There&rsquo;s a 7-day free trial with no card required, and you can cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="guarantees" aria-label="Risk reversal" style={{ padding: "32px 0", display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
        <span><i className="ti ti-shield-check" aria-hidden="true" /> 7-day free trial · no card</span>
        <span><i className="ti ti-shield-check" aria-hidden="true" /> Miss a booking? Month free</span>
        <span><i className="ti ti-shield-check" aria-hidden="true" /> Cancel anytime</span>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────── */}
      <section className="final-cta">
        <div className="wrap">
          <h2>Hear the AI receptionist before you decide.</h2>
          <div className="sub">Call the live demo line. It&rsquo;s the same agent we&rsquo;d build for you.</div>
          <a href={siteConfig.phone.href} className="phone-btn">
            <i className="ti ti-phone-call" aria-hidden="true" />
            <span>{siteConfig.phone.display}</span>
          </a>
          <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/start-trial" className="btn-secondary">Start 7-day free trial →</Link>
            <Link href="/book" className="btn-secondary">Book a 30-min consult →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
