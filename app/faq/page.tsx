import type { Metadata } from "next";
import "../legal-pages.css";
import LegalHeader from "../components/legal-header";
import SiteFooter from "../components/site-footer";
import { createPageMetadata } from "../shared-metadata";
import FaqList from "./page-client";

export const metadata: Metadata = createPageMetadata("REZONA | FAQ", {
  description:
    "Frequently asked questions about Rezona, an AI-powered game creation platform.",
});

export default function FaqPage() {
  return (
    <main className="privacy-page faq-page">
      <LegalHeader />

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
