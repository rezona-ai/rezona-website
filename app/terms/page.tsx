/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import GetAppButton from "../components/get-app-button";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "REZONA",
  description:
    "Rezona is an AI-powered game creation platform where anyone can turn ideas into playable games in seconds. No coding, no limits, just creativity.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function TermsPage() {
  return (
    <main className="privacy-page terms-page">
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
          <h1 className="privacy-title" style={{ lineHeight: "35px" }}>
            End User License Agreement (EULA)
          </h1>
        </div>

        <p className="privacy-date">Last updated: 27 April 2026</p>

        <div className="privacy-intro">
          <p>
            Rezona is licensed to You (End-User) by Stratava AI Group (Licensor), for use
            only under the terms of this End User License Agreement (EULA).
          </p>
          <p>
            By downloading the Application from the Apple App Store, and any permitted
            updates, You agree to be bound by this agreement.
          </p>
          <p>
            Apple is not a party to this agreement and has no obligation regarding warranty,
            liability, maintenance, or support for the Application. Stratava AI Group is
            solely responsible for the licensed Application and its content.
          </p>
          <p>
            This agreement must not conflict with the latest App Store Terms of Service.
            All rights not expressly granted to You are reserved.
          </p>
        </div>

        <section className="privacy-section">
          <h2>1. The Application</h2>
          <p>
            Rezona is software created to provide AI-powered text and voice interactions,
            customized for Apple mobile devices.
          </p>
          <p>
            The Application is not tailored for industry-specific regulations (for example,
            HIPAA or FISMA). If your use is subject to such laws, you may not use this
            Application. You also may not use the Application in a way that would violate
            the Gramm-Leach-Bliley Act (GLBA).
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Scope of License</h2>
          <ul>
            <li>
              <strong>2.1</strong> You are granted a non-transferable, non-exclusive,
              non-sublicensable license to install and use the Application on Apple-branded
              devices you own or control, as permitted by App Store Usage Rules.
            </li>
            <li>
              <strong>2.2</strong> You may not reverse engineer, translate, disassemble,
              decompile, modify, or attempt to derive source code without prior written
              consent from Stratava AI Group.
            </li>
            <li>
              <strong>2.3</strong> You may not copy or alter the Application except as
              expressly authorized by this agreement and App Store terms. Backup copies may
              only be kept on devices you own or control.
            </li>
            <li>
              <strong>2.4</strong> Violations, or attempts to violate these obligations,
              may result in prosecution and damages.
            </li>
            <li>
              <strong>2.5</strong> Stratava AI Group may modify licensing terms and
              conditions.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. Technical Requirements</h2>
          <ul>
            <li>
              <strong>3.1</strong> The Application requires iOS version 1.0.0 or higher.
              Stratava AI Group recommends using the latest version.
            </li>
            <li>
              <strong>3.2</strong> You are responsible for ensuring your device meets
              technical requirements.
            </li>
            <li>
              <strong>3.3</strong> Stratava AI Group may update technical requirements at any
              time.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>4. Maintenance and Support</h2>
          <ul>
            <li>
              <strong>4.1</strong> Stratava AI Group is solely responsible for maintenance
              and support services for this Application.
            </li>
            <li>
              <strong>4.2</strong> Apple has no obligation to provide maintenance or support
              services.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>5. Use of Data</h2>
          <p>
            You acknowledge that Stratava AI Group may access and adjust your Application
            content and personal information, subject to your agreements with Stratava AI
            Group and the Rezona Privacy Policy.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. User Generated Contributions</h2>
          <p>
            Rezona may allow you to create, submit, or transmit content, including text,
            voice inputs, audio, graphics, and other materials. Such contributions may be
            processed according to our Privacy Policy.
          </p>
          <p>You represent and warrant that your contributions:</p>
          <ul>
            <li>Do not infringe third-party rights, including copyright and trademark.</li>
            <li>Are accurate and lawful.</li>
            <li>Do not contain harmful, obscene, violent, or objectionable material.</li>
            <li>Do not exploit or solicit minors.</li>
            <li>Do not violate privacy or publicity rights.</li>
            <li>Do not promote harassment, discrimination, or unlawful activity.</li>
          </ul>
          <p>
            Violations may result in suspension or termination of your rights to use the
            Application.
          </p>
        </section>

        <section className="privacy-section">
          <h2>7. Contribution License</h2>
          <p>
            By submitting contributions, you grant Stratava AI Group a limited license to
            process them solely for providing and improving the Service. You retain
            ownership of your contributions.
          </p>
          <p>
            You also agree that feedback or suggestions you provide may be used by Stratava
            AI Group without compensation.
          </p>
        </section>

        <section className="privacy-section">
          <h2>8. Liability</h2>
          <p>
            Stratava AI Group is not responsible for damages caused by misuse of the
            Application. You are responsible for backing up your data. Unauthorized
            alterations may void your access.
          </p>
        </section>

        <section className="privacy-section">
          <h2>9. Warranty</h2>
          <ul>
            <li>
              <strong>9.1</strong> Stratava AI Group warrants that the Application is free of
              spyware, viruses, and other malware at the time of download.
            </li>
            <li>
              <strong>9.2</strong> No warranty applies if the Application is used with
              unauthorized devices, modified without consent, or used outside our control.
            </li>
            <li>
              <strong>9.3</strong> Defects must be reported within 90 days of discovery.
            </li>
            <li>
              <strong>9.4</strong> In the event of defects, Stratava AI Group may choose to
              fix or replace the Application.
            </li>
            <li>
              <strong>9.5</strong> For App Store purchases, Apple may refund purchase price
              if the Application fails warranty obligations. Apple bears no further
              responsibility.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>10. Product Claims</h2>
          <p>
            Stratava AI Group, not Apple, is responsible for handling any claims relating to
            the Application, including:
          </p>
          <ul>
            <li>Product liability claims</li>
            <li>Failure to conform to legal or regulatory requirements</li>
            <li>Claims under consumer protection, privacy, or similar legislation</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>11. Legal Compliance</h2>
          <p>
            You represent and warrant that you are not located in a country subject to a
            U.S. Government embargo, and are not listed as a prohibited or restricted party
            by the U.S. Government.
          </p>
        </section>

        <section className="privacy-section">
          <h2>12. Contact Information</h2>
          <p>For inquiries, complaints, or claims concerning the Application, contact:</p>
          <p>
            <strong>Email:</strong> support@rezona.ai
            <br />
            <strong>Contact:</strong> Stratava AI Group
          </p>
        </section>

        <section className="privacy-section">
          <h2>13. Termination</h2>
          <p>
            This license remains valid until terminated by Stratava AI Group or You. Your
            rights terminate automatically without notice if you fail to comply with these
            Terms. Upon termination, you must stop all use and delete all copies of the
            Application.
          </p>
        </section>

        <section className="privacy-section">
          <h2>14. Third-Party Terms and Beneficiary</h2>
          <p>
            Stratava AI Group will comply with applicable third-party terms when providing
            this Application. Apple and its subsidiaries are third-party beneficiaries of
            this EULA and may enforce it against You upon acceptance.
          </p>
        </section>

        <section className="privacy-section">
          <h2>15. Intellectual Property Rights</h2>
          <p>
            If a third party claims that the Application or its use infringes intellectual
            property rights, Stratava AI Group (not Apple) is solely responsible for defense
            and settlement of such claims.
          </p>
        </section>

        <section className="privacy-section">
          <h2>16. Miscellaneous</h2>
          <ul>
            <li>
              <strong>16.1</strong> If any term of this agreement is found invalid, remaining
              terms remain effective.
            </li>
            <li>
              <strong>16.2</strong> Changes or amendments are valid only when made in
              writing.
            </li>
          </ul>
        </section>
      </section>

      <SiteFooter variant="legal" />
    </main>
  );
}
