/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import "../legal-pages.css";
import Link from "next/link";
import SiteFooter from "../components/site-footer";
import FaqList from "./page-client";

export const metadata: Metadata = {
  title: "REZONA",
  description:
    "Frequently asked questions about Rezona, an AI-powered game creation platform.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function FaqPage() {
  return (
    <main className="privacy-page faq-page">
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
          Explore more<span className="privacy-top-cta-extra"> games</span>
        </Link>
      </header>

      <section className="privacy-content-shell faq-content-shell">
        <div className="privacy-title-block faq-title-block">
          <p className="privacy-brand">REZONA.AI</p>
          <h1 className="privacy-title faq-title">Frequently Asked Questions</h1>
        </div>

        <p className="privacy-date faq-date">Last updated: 24 April 2026</p>

        <FaqList />

        <section className="privacy-section privacy-contact faq-contact">
          <h2>Contact Us</h2>
          <p>If you have questions or suggestions about our Privacy Policy, please contact us:</p>
          <p>
            <a className="faq-email-link" href="mailto:support@rezona.ai">
              <u>Email:</u> <strong>support@rezona.ai</strong>
            </a>
            <br />
            <u>Contact:</u> <strong>Stratava Group</strong>
          </p>
        </section>
      </section>

      <SiteFooter variant="legal" />
    </main>
  );
}
