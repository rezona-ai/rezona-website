/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import GetAppButton from "../components/get-app-button";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "Rezona Privacy Policy",
  description: "Read Rezona's privacy policy and data handling details.",
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <header className="privacy-top-nav">
        <Link href="/" className="privacy-top-logo" aria-label="Go back to home">
          <img
            src="/figma/assets/mobile-top-logo-2x.webp"
            alt="REZONA"
            width={261}
            height={60}
            loading="eager"
            decoding="async"
          />
        </Link>
        <GetAppButton className="privacy-top-cta" label="Get App" />
      </header>

      <section className="privacy-content-shell">
        <div className="privacy-title-block">
          <p className="privacy-brand">REZONA.AI</p>
          <h1 className="privacy-title">Privacy Policy</h1>
        </div>

        <p className="privacy-date">Last updated: 24 April 2026</p>

        <div className="privacy-intro">
          <p>
            Stratava Group built the &ldquo;Rezona&rdquo; app. This SERVICE is provided by
            Stratava Group and is intended for use as is.
          </p>
          <p>
            This page informs visitors about our policies regarding the collection, use,
            and disclosure of personal information if anyone decides to use our Service.
            By using our Service, you agree to these terms. We may update these terms at
            any time without prior notice.
          </p>
          <p>
            If you choose to use our Service, then you agree to the collection and use of
            information in relation to this policy. The personal information that we collect
            is used for providing and improving the Service. We do not use or share your
            information with anyone except as described in this Privacy Policy.
          </p>
        </div>

        <section className="privacy-section">
          <h2>Information Collection and Use</h2>
          <p>
            While using our Service, we may collect strictly necessary information, including
            but not limited to:
          </p>
          <ul>
            <li>Text inputs: required for the app to function as intended.</li>
            <li>
              Email address: may be collected to support account creation, communication, or
              customer support.
            </li>
          </ul>
          <p>
            We use analytics tools (such as Google Analytics) to track site visits without
            transferring personal information. We have disabled all features that can collect
            or report personal data, including:
          </p>
          <ul>
            <li>Demographics and Interest Reports</li>
            <li>User ID features</li>
            <li>Advertising Reporting Features</li>
          </ul>
          <p>We have also disabled data sharing within analytics tools.</p>
        </section>

        <section className="privacy-section">
          <h2>Log data</h2>
          <p>
            Whenever you use our Service and an error occurs, we collect diagnostic data
            (via third-party tools) called &ldquo;Log Data.&rdquo; This may include your:
          </p>
          <ul>
            <li>IP address</li>
            <li>Device name and OS version</li>
            <li>App configuration</li>
            <li>Timestamp of use</li>
            <li>In-app actions and crash logs</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Cookie</h2>
          <p>
            Cookies are small files stored on your device that help websites and services
            function better. Some may be used anonymously to understand traffic behavior and
            improve performance.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Service providers</h2>
          <p>We may work with third-party companies to:</p>
          <ul>
            <li>Facilitate our Service</li>
            <li>Operate the Service on our behalf</li>
            <li>Perform Service-related functions</li>
            <li>Analyze usage of the Service</li>
          </ul>
          <p>
            These third parties only access personal information necessary to perform their
            tasks and are contractually obligated not to disclose or misuse it.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Families Policies</h2>
          <ul>
            <li>
              <strong>Parental Supervision:</strong> Parents should supervise children&apos;s
              use of the app and review its content and features.
            </li>
            <li>
              <strong>Content:</strong> We prohibit violent, explicit, or otherwise
              inappropriate content. Violations may result in account suspension or
              termination.
            </li>
            <li>
              <strong>Community Guidelines:</strong> We expect all users to respect others.
              Violations of these guidelines may result in disciplinary actions.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Security</h2>
          <p>
            We use HTTPS and other commercially acceptable means to protect your personal data.
            However, no method of transmission or storage is 100% secure.
          </p>
        </section>

        <section className="privacy-section">
          <h2>User Data Deletion Request</h2>
          <p>
            If you would like to request deletion of your personal data collected by Rezona,
            you can do so in one of the following ways:
          </p>
          <ul>
            <li>
              <strong>Contact us by email:</strong> Send your request to{" "}
              <strong>support@rezona.ai</strong> with the subject line{" "}
              <strong>&ldquo;Data Deletion Request&rdquo;</strong>, and include the email or
              username linked to your account.
            </li>
            <li>
              <strong>In-app:</strong> If your version of the Rezona app includes account
              settings, go to: <strong>Settings → Delete account</strong>
            </li>
          </ul>
          <p>
            We will process your request within a reasonable timeframe and delete all associated
            user data from our systems unless retention is required by law.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Changes will be posted on this
            page, and users are encouraged to review this page periodically.
          </p>
        </section>

        <div className="privacy-divider" aria-hidden="true" />

        <section className="privacy-section privacy-contact">
          <h2>Contact Us</h2>
          <p>If you have questions or suggestions about our Privacy Policy, please contact us:</p>
          <p>
            <strong>Email:</strong> support@rezona.ai
            <br />
            <strong>Contact:</strong> Stratava Group
          </p>
        </section>
      </section>

      <SiteFooter variant="legal" />
    </main>
  );
}
