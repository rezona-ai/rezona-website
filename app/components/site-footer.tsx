/* eslint-disable @next/next/no-img-element */
"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import DinoLottie from "./dino-lottie";
import { footerSocialSlices, mobileFooterSocialSlices } from "../data/social-links";

type SiteFooterProps = {
  variant?: "default" | "legal";
};

export default function SiteFooter({ variant = "default" }: SiteFooterProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 640px)");
    const sync = () => setIsMobile(query.matches);
    sync();
    if (typeof query.addEventListener === "function") {
      query.addEventListener("change", sync);
      return () => query.removeEventListener("change", sync);
    }
    query.addListener(sync);
    return () => query.removeListener(sync);
  }, []);

  if (isMobile === null) {
    return null;
  }

  if (!isMobile) {
    const desktopContent = (
      <>
        <DinoLottie
          className="footer-bottom-dino"
          fallbackSrc="/assets/shared/footer/footer-dino-loading-animation-1.svg"
          alt="Dino"
        />
        <p className="footer-bottom-brand" aria-label="REZONA.AI">
          REZONA.AI
        </p>
        <a
          className="footer-bottom-appstore"
          href="https://apps.apple.com/us/app/rezona-ai-game-maker/id6752310101"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open App Store"
        >
          <img
            src="/assets/shared/store/store-appstore-new.webp"
            alt="App Store"
            loading="lazy"
            decoding="async"
          />
        </a>
        <a
          className="footer-bottom-googleplay"
          href="https://play.google.com/store/apps/details?id=ai.rezona.app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Google Play"
        >
          <img
            src="/assets/shared/store/store-qr-new.webp"
            alt="Google Play"
            loading="lazy"
            decoding="async"
          />
        </a>
        <div className="footer-bottom-qr-wrap">
          <img
            className="footer-bottom-qr"
            src="/assets/shared/app-download/popup-qr-content-2x.webp"
            alt="QR"
            loading="lazy"
            decoding="async"
          />
        </div>

        {footerSocialSlices.map((item) => (
          <a
            key={item.id}
            className="footer-bottom-social"
            style={{ "--social-left": `${item.left}%` } as CSSProperties}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${item.id}`}
          >
            <img src={item.asset} alt={item.id} loading="lazy" decoding="async" />
          </a>
        ))}

        <div className="footer-legal" aria-label="Legal information">
          <div className="footer-legal-links">
            <Link className="footer-legal-link" href="/privacy">
              Privacy Policy
            </Link>
            <span aria-hidden="true"> | </span>
            <Link className="footer-legal-link" href="/terms">
              Term of Service
            </Link>
            {/* <span aria-hidden="true"> | </span>
            <Link className="footer-legal-link" href="/faq">
              Faq
            </Link> */}
          </div>
          <p className="footer-legal-copy">© 2026 All Rights Reserved, Rezona</p>
        </div>
      </>
    );

    if (variant === "legal") {
      return (
        <section className="footer-scene privacy-desktop-footer" data-scene="privacy-footer-desktop">
          <div className="footer-stack">
            <div className="footer-tail-composed">{desktopContent}</div>
          </div>
        </section>
      );
    }

    return (
      <div className="site-footer-desktop">
        <div className="footer-tail-composed">
          {desktopContent}
        </div>
      </div>
    );
  }

  const mobileContent = (
    <>
      <div className="mobile-footer-top">
        <div className="mobile-footer-qr-wrap">
          <img
            className="mobile-footer-qr"
            src="/assets/shared/app-download/popup-qr-content-2x.webp"
            alt="QR"
            width={61}
            height={61}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="mobile-footer-store">
          <a
            href="https://apps.apple.com/us/app/rezona-ai-game-maker/id6752310101"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open App Store"
          >
            <img
              src="/assets/shared/store/store-appstore-new.webp"
              alt="App Store"
              width={120}
              height={40}
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=ai.rezona.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Google Play"
          >
            <img
              src="/assets/shared/store/store-qr-new.webp"
              alt="Google Play"
              width={120}
              height={40}
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
      </div>

      <div className="mobile-footer-social">
        {mobileFooterSocialSlices.map((item) => (
          <a
            key={`mobile-${item.id}`}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${item.id}`}
          >
            <img
              src={item.asset}
              alt={item.id}
              width={24}
              height={24}
              loading="lazy"
              decoding="async"
            />
          </a>
        ))}
      </div>

      <p className="mobile-footer-brand" aria-label="REZONA.AI">
        REZONA.AI
      </p>
      <DinoLottie
        className="mobile-footer-dino"
        fallbackSrc="/assets/shared/footer/footer-dino-loading-animation-1.svg"
        alt="Dino walking"
      />

      <div className="mobile-footer-legal" aria-label="Legal information">
        <div className="mobile-footer-legal-links">
          <Link className="mobile-footer-legal-link" href="/privacy">
            Privacy Policy
          </Link>
          <span aria-hidden="true"> | </span>
          <Link className="mobile-footer-legal-link" href="/terms">
            Term of Service
          </Link>
          {/* <span aria-hidden="true"> | </span>
          <Link className="mobile-footer-legal-link" href="/faq">
            Faq
          </Link> */}
        </div>
        <p className="mobile-footer-legal-copy">© 2026 All Rights Reserved, Rezona</p>
      </div>
    </>
  );

  if (variant === "legal") {
    return (
      <div className="privacy-mobile-footer-wrap">
        <footer className="mobile-footer privacy-mobile-footer">{mobileContent}</footer>
      </div>
    );
  }

  return (
    <>
      <footer className="mobile-footer site-footer-mobile">
        {mobileContent}
      </footer>
    </>
  );
}
