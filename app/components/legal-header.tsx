/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function LegalHeader() {
  return (
    <header className="privacy-top-nav">
      <Link href="/" className="privacy-top-logo" aria-label="Go back to home">
        <img
          src="/assets/shared/brand/mobile-top-logo-2x.webp"
          alt="REZONA"
          width={261}
          height={60}
          loading="eager"
          decoding="async"
        />
      </Link>
      <Link href="/explore-more" className="privacy-top-cta">
        Explore more&nbsp;<span className="privacy-top-cta-extra">games</span>
      </Link>
    </header>
  );
}
