import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Sticky top navigation. Matches the design from
 * /important/business/liveanswerservice/files/index.html (.nav).
 * Mobile collapses the inline links and keeps only the brand + phone CTA.
 */
export default function Navigation() {
  return (
    <nav className="la-nav" aria-label="Primary">
      <div className="wrap la-nav-inner">
        <Link href="/" className="la-brand">
          <span className="brand-dot" aria-hidden="true" />Live Answer
        </Link>
        <div className="la-nav-links">
          <Link href="/pricing"   className="la-hide-mobile">Pricing</Link>
          <Link href="/services"  className="la-hide-mobile">Industries</Link>
          <Link href="/#how"      className="la-hide-mobile">How it works</Link>
          <a href={siteConfig.phone.href} className="la-nav-cta" style={{ color: 'white' }}>
            <i className="ti ti-phone-call" style={{ color: 'white' }} aria-hidden="true" />
            Call to test
          </a>
        </div>
      </div>
    </nav>
  );
}
