"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { Events } from "@/lib/analytics";

/* ============================================================
   CTABlock — the site-wide final call-to-action band.

   StoryBrand Ch.8: always pair a DIRECT call to action (high
   commitment — book / start trial / call) with a TRANSITIONAL
   one (low commitment on-ramp — leave info / hear a call / get
   the guide). Every page mounts this; new CTAs are a prop change,
   not a new build.
   ============================================================ */

type DirectVariant = "book" | "trial" | "call";

interface DirectCTA {
  /** Which primary action. Defaults to "book". */
  variant?: DirectVariant;
  /** Override the button label. */
  text?: string;
  /** Override the href (rarely needed — variant sets it). */
  href?: string;
}

interface TransitionalCTA {
  /** Button label, e.g. "Hear a real call", "Get the free guide". */
  text: string;
  /** Where it goes — an internal route or anchor. */
  href: string;
  /** Analytics location tag (defaults to "cta_block_transitional"). */
  event?: string;
}

interface CTABlockProps {
  /** Main headline. */
  headline?: string;
  /** Supporting paragraph. */
  subtext?: string;
  /** id for aria-labelledby (set when multiple CTABlocks appear on a page). */
  headingId?: string;
  /** The high-commitment primary action. Defaults to booking a consult. */
  direct?: DirectCTA;
  /**
   * The low-commitment on-ramp shown beside the primary button. Pass one to
   * capture the ~97% who aren't ready for the direct ask. Null = direct only.
   */
  transitional?: TransitionalCTA | null;
  /** Show "Or call us directly at [number]" under the buttons. */
  showPhone?: boolean;
  /** Reassurance line under the buttons. Set "" to hide. */
  footnote?: string;
  /** Per-placement analytics tag, e.g. "home_final", "how_it_works_final".
   *  Threaded into every CTA's cta_location so the funnel is segmentable. */
  location?: string;
}

const PHONE_DISPLAY = siteConfig.phone.display;
const PHONE_HREF = siteConfig.phone.href;

const DIRECT_DEFAULTS: Record<DirectVariant, { text: string; href: string; fire: (loc: string) => void }> = {
  book: {
    text: "Book Your Free 30-min Setup Consult",
    href: "/book",
    fire: (loc) => Events.bookClick(loc),
  },
  trial: {
    text: "Start Your 7-Day Free Trial",
    href: "/start-trial",
    fire: (loc) => Events.trialStart(loc),
  },
  call: {
    text: `Call ${PHONE_DISPLAY}`,
    href: PHONE_HREF,
    fire: (loc) => Events.phoneClick(loc),
  },
};

export default function CTABlock({
  headline = "Ready to Stop Missing Calls?",
  subtext = "Book a free 30-minute setup consult — no pressure, no obligation. Just a conversation about how a live AI receptionist stops missed calls from costing you business.",
  headingId = "cta-block-heading",
  direct = { variant: "book" },
  transitional = null,
  showPhone = false,
  footnote = "Free, no-obligation — real AI answering, live in minutes.",
  location = "cta_block",
}: CTABlockProps) {
  const variant = direct.variant ?? "book";
  const d = DIRECT_DEFAULTS[variant];
  const directText = direct.text ?? d.text;
  const directHref = direct.href ?? d.href;
  const isTelDirect = directHref.startsWith("tel:");

  return (
    <section aria-labelledby={headingId} className="bg-[#1A1A17] section-pad">
      <div className="container-xl">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Decorative divider */}
          <div
            className="w-12 h-[3px] rounded-full bg-[#FAF9F5]/50 mb-7"
            aria-hidden="true"
          />

          {/* Headline */}
          <h2 id={headingId} className="section-heading text-[#FAF9F5] mb-5">
            {headline}
          </h2>

          {/* Subtext */}
          <p
            className="text-lg md:text-xl text-[#FAF9F5]/90 leading-relaxed mb-10 max-w-2xl"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {subtext}
          </p>

          {/* Buttons: direct (burgundy, primary) + transitional (outline) */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* DIRECT — brand burgundy */}
            {isTelDirect ? (
              <a
                href={directHref}
                aria-label={directText}
                onClick={() => d.fire(location)}
                className={DIRECT_BTN}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {directText}
              </a>
            ) : (
              <Link
                href={directHref}
                aria-label={directText}
                onClick={() => d.fire(location)}
                className={DIRECT_BTN}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {directText}
              </Link>
            )}

            {/* TRANSITIONAL — outline on dark, the low-risk on-ramp */}
            {transitional ? (
              <Link
                href={transitional.href}
                aria-label={transitional.text}
                onClick={() =>
                  Events.ctaTransitional(transitional.event ?? location)
                }
                className={TRANSITIONAL_BTN}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {transitional.text}
              </Link>
            ) : null}
          </div>

          {/* Phone / footnote */}
          {showPhone ? (
            <p
              className="mt-6 text-base text-[#FAF9F5]/90"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Or call us directly at{" "}
              <a
                href={PHONE_HREF}
                aria-label={`Call us at ${PHONE_DISPLAY}`}
                onClick={() => Events.phoneClick(location)}
                className="font-bold text-[#FAF9F5] underline underline-offset-2 hover:text-[#F2F0E8] transition-colors"
              >
                {PHONE_DISPLAY}
              </a>
            </p>
          ) : footnote ? (
            <p
              className="mt-6 text-sm text-[#FAF9F5]/70"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {footnote}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* Shared button class strings — brand burgundy (#8E2138) primary, matching
   --color-accent, replacing the old off-brand terracotta. */
const DIRECT_BTN = [
  "inline-flex items-center justify-center gap-2",
  "px-9 py-4 rounded-xl",
  "bg-[#8E2138] border-2 border-[#8E2138]",
  "text-white text-lg font-bold leading-snug",
  "hover:bg-[#75182C] hover:border-[#75182C]",
  "hover:shadow-[0_6px_24px_rgba(142,33,56,0.5)]",
  "active:translate-y-px transition-all duration-150",
  "focus-visible:outline-none focus-visible:ring-3",
  "focus-visible:ring-white focus-visible:ring-offset-3",
  "focus-visible:ring-offset-[#1A1A17]",
].join(" ");

const TRANSITIONAL_BTN = [
  "inline-flex items-center justify-center gap-2",
  "px-9 py-4 rounded-xl",
  "bg-transparent border-2 border-[#FAF9F5]/40",
  "text-[#FAF9F5] text-lg font-semibold leading-snug",
  "hover:border-[#FAF9F5] hover:bg-[#FAF9F5]/10",
  "active:translate-y-px transition-all duration-150",
  "focus-visible:outline-none focus-visible:ring-3",
  "focus-visible:ring-white focus-visible:ring-offset-3",
  "focus-visible:ring-offset-[#1A1A17]",
].join(" ");
