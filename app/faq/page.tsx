import type { Metadata } from "next";
import "../legal-pages.css";
import LegalHeader from "../components/legal-header";
import SiteFooter from "../components/site-footer";
import { createPageMetadata } from "../shared-metadata";
import FaqList from "./page-client";

export const metadata: Metadata = createPageMetadata();

export default function FaqPage() {
  return (
    <main className="privacy-page faq-page">
      <LegalHeader />

      <section className="privacy-content-shell faq-content-shell">
        <div className="privacy-title-block faq-title-block">
          <p className="privacy-brand">REZONA.AI</p>
          <h1 className="privacy-title faq-title">Frequently Asked Questions</h1>
        </div>

        <p className="privacy-date faq-date">Last updated: 28 May 2026</p>

        <p className="faq-intro">
          Welcome to Rezona! Here&apos;s everything you need to know - from getting started
          to making, playing, and remixing memeplays.
        </p>

        <FaqList />

        <section className="privacy-section privacy-contact faq-contact">
          <h2>Contact Us</h2>
          <p>If you have questions or suggestions about Rezona, please contact us:</p>
          <p>
            <a className="faq-email-link" href="mailto:support@rezona.ai">
              Email: <strong><u>support@rezona.ai</u></strong>
            </a>
            <br />
            Contact: <strong>Stratava Group</strong>
          </p>
        </section>
      </section>

      <SiteFooter variant="legal" />
    </main>
  );
}
