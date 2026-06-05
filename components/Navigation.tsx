import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Sticky top navigation. Brand mark + wordmark on the left, links + CTA on the right.
 * Mobile collapses the inline links and keeps only the brand + phone CTA.
 */
export default function Navigation() {
  return (
    <nav className="la-nav" aria-label="Primary">
      <div className="wrap la-nav-inner">
        <Link href="/" className="la-brand" aria-label="Live Answer — home">
          <Image
            src="/brand/mark-light.png"
            alt=""
            width={50}
            height={50}
            priority
          />
          <span className="la-brand-text">
            Live Answer<span className="la-brand-sub">SERVICE</span>
          </span>
        </Link>
        <div className="la-nav-links">
          <Link href="/pricing" className="la-hide-mobile">Pricing</Link>
          <Link href="/services" className="la-hide-mobile">Industries</Link>
          <Link href="/#how" className="la-hide-mobile">How it works</Link>
          <a href={siteConfig.phone.href} className="la-nav-cta">
            <i className="ti ti-phone-call" aria-hidden="true" />
            Call to test
          </a>
        </div>
      </div>
    </nav>
  );
}
