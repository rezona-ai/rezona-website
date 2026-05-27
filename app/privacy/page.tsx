import type { Metadata } from "next";
import "../legal-pages.css";
import LegalHeader from "../components/legal-header";
import SiteFooter from "../components/site-footer";
import { createPageMetadata } from "../shared-metadata";

export const metadata: Metadata = createPageMetadata();

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <LegalHeader />

      <section className="privacy-content-shell">
        <div className="privacy-title-block">
          <p className="privacy-brand">
            REZONA.<wbr />
            AI
          </p>
          <h1 className="privacy-title">Privacy Policy</h1>
        </div>

        <p className="privacy-date">
          Effective Date: 01 June 2026
          <br />
          Last updated: 01 June 2026
        </p>

        <div className="privacy-intro">
          <p>
            The Service is provided by Stratava HK Limited (&quot;Stratava,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a company incorporated
            in the Hong Kong Special Administrative Region. This Privacy Policy explains how
            we collect, use, store, share, and protect your personal information when you use
            the Service.
          </p>
          <p>
            By using the Service, you agree to the collection and use of your information as
            described in this Privacy Policy. If you do not agree, please do not use the
            Service.
          </p>
          <p>
            This Privacy Policy should be read together with our Terms of Service and
            Community Guidelines, which govern your use of the Service.
          </p>
        </div>

        <section className="privacy-section">
          <h2>1. Who This Policy Applies To</h2>
          <p>
            This Privacy Policy applies to all users of the Service, regardless of age or
            location. The Service is intended for a general audience. Parents and guardians
            who permit minors to use the Service are responsible for supervising that use and
            are subject to this Privacy Policy in connection with the minor&apos;s account
            and data.
          </p>
          <p>
            We may apply additional data protections for certain users as required by
            applicable law in their jurisdiction. If you have questions about how we handle
            data for a minor in your care, contact us at{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>
            .
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Information We Collect</h2>

          <h3>2.1. Information You Provide</h3>
          <p>When you create an account or use the Service, you may provide us with:</p>
          <ul>
            <li>
              Account registration data: Username, email address, and any other information
              submitted at sign-up.
            </li>
            <li>
              User-generated content: Memeplays, memes, remixes, text inputs, audio
              recordings, images, videos, AI prompts, comments, and any other content you
              create, upload, or publish on the Service (&quot;Your Content&quot;).
            </li>
            <li>
              Communications: Direct messages, comments, reactions, and any communications
              you send to other users or to us through support channels.
            </li>
          </ul>

          <h3>2.2. Identity Verification Data</h3>
          <p>
            To access certain features of the Service, we may collect identity or consent
            verification data as required. The type of data collected depends on the feature
            being accessed and the laws and regulations applicable in your jurisdiction.
            Verification data is stored securely and used only for the purpose for which it
            was collected.
          </p>

          <h3>2.3. Virtual Items &amp; Transaction Data</h3>
          <p>
            When you use virtual item features within the Service, we collect and process
            transaction data necessary to operate those features, including records of
            purchases, transfers, and balances associated with your account at the specific
            purchasing time. All purchases of virtual items are processed through authorized
            third-party payment merchants and platform vendors.
          </p>
          <p>
            Stratava does not collect, receive, or store your payment card details, bank
            account information, or any other raw payment credentials. Your payment data is
            governed by the relevant authorized vendors&apos; privacy policy.
          </p>

          <h3>2.4. Automatically Collected Data</h3>
          <p>
            When you use the Service, we automatically collect certain technical and usage
            data:
          </p>
          <ul>
            <li>
              Log data: IP address, device name, operating system version, app
              configuration, timestamps of use, in-app actions, and crash logs, collected via
              third-party diagnostic tools when an error occurs.
            </li>
            <li>
              Analytics data: We use analytics tools to understand how users interact with
              the Service. We have disabled all features of these tools that collect or
              report personal data, including Demographics and Interest Reports, User ID
              features, Advertising Reporting Features, and data sharing within analytics
              tools.
            </li>
            <li>
              Push notification interaction data: Whether a push notification was delivered
              and whether it was tapped, tied to Service activity events.
            </li>
          </ul>

          <h3>2.5. Social &amp; Interaction Data</h3>
          <p>
            When you interact with other users on the Service, we generate and store data
            associated with those interactions. This includes, but is not limited to, data
            related to your connections with other users, the nature and frequency of your
            communications, and any actions you take in relation to other users&apos;
            accounts or content.
          </p>

          <h3>2.6. Risk &amp; Anti-Fraud Data</h3>
          <p>
            To protect the integrity of the Service and its users, we collect and process
            signals for fraud detection and risk control purposes, including transaction
            frequency and velocity, high-value transaction flags, and device identifiers and
            behavioral signals used to detect unauthorized or suspicious activity. This data
            is used solely for risk management and anti-fraud enforcement and is not used for
            advertising purposes.
          </p>

          <h3>2.7. AI Feature Data</h3>
          <p>
            When you use our AI-powered features, we collect AI inputs (prompts, source
            content, images, voice recordings, and any other materials you submit), AI
            outputs generated in response to your inputs, and your interactions with AI
            features including ratings, edits, and regenerations. See Section 5 for
            information on how AI data is used.
          </p>

          <h3>2.8. Third-Party Data</h3>
          <p>
            We may receive limited data from third parties in connection with your use of the
            Service, including from Apple and Google in connection with in-app purchases,
            account authentication, and platform compliance, and from third-party service
            providers who help us operate the Service, subject to contractual restrictions.
          </p>
        </section>

        <section className="privacy-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>

          <h3>Operating the Service</h3>
          <ul>
            <li>Providing, maintaining, and improving the Service and its features.</li>
            <li>Creating and managing your account.</li>
            <li>Displaying your content to other users in accordance with your settings.</li>
            <li>
              Enabling and enforcing social features (follow relationships, DM eligibility,
              block status).
            </li>
          </ul>

          <h3>Virtual Items &amp; Transactions</h3>
          <ul>
            <li>Processing, recording, and displaying virtual item purchase and transfer transactions.</li>
            <li>Maintaining accurate virtual item balances.</li>
            <li>Sending push notifications and in-app alerts for transaction events.</li>
            <li>Enforcing transaction eligibility rules.</li>
          </ul>

          <h3>Safety &amp; Security</h3>
          <ul>
            <li>Detecting and preventing fraud, unauthorized transactions, and abuse.</li>
            <li>Risk control and anti-cheat enforcement.</li>
            <li>Enforcing our Community Guidelines and Terms of Service.</li>
            <li>Moderating content and taking enforcement action where necessary.</li>
            <li>Reporting illegal content to relevant authorities where required by law.</li>
          </ul>

          <h3>AI Development</h3>
          <ul>
            <li>Operating AI-powered features within the Service.</li>
            <li>
              Improving and developing our AI models using AI inputs, outputs, and
              interaction data, in accordance with the license granted in our Terms of
              Service.
            </li>
          </ul>

          <h3>Legal &amp; Compliance</h3>
          <ul>
            <li>Complying with applicable laws, regulations, and legal processes.</li>
            <li>Responding to intellectual property complaints.</li>
            <li>Retaining records as required by applicable law.</li>
          </ul>

          <h3>Communications</h3>
          <ul>
            <li>Responding to support requests.</li>
            <li>Notifying you of changes to these policies or the Service.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>4. How We Share Your Information</h2>
          <p>
            We do not sell your personal information to third parties. We share your
            information only in the following circumstances:
          </p>

          <h3>With other users</h3>
          <ul>
            <li>
              Content you publish on the Service is visible to other users in accordance
              with your privacy settings.
            </li>
            <li>
              Virtual item transfers may display sender and recipient usernames to the
              relevant parties.
            </li>
            <li>Direct messages are visible only to the participants in the conversation.</li>
          </ul>

          <h3>With service providers</h3>
          <ul>
            <li>
              We work with third-party companies to help operate the Service, including
              analytics providers, content moderation tools, identity verification services,
              and fraud detection systems. These providers access only the data necessary to
              perform their tasks and are contractually prohibited from disclosing or
              misusing it.
            </li>
          </ul>

          <h3>With Apple and Google</h3>
          <ul>
            <li>
              In connection with in-app purchases, authentication, and platform compliance,
              we share and receive limited data with Apple Inc. and Google LLC as necessary
              to operate the Service on their platforms.
            </li>
          </ul>

          <h3>With law enforcement and authorities</h3>
          <ul>
            <li>
              We may disclose personal data where required by law, court order, or
              governmental authority, or where we reasonably believe disclosure is necessary
              to protect the safety of any person, prevent fraud, or enforce our Terms of
              Service. We report suspected child sexual abuse material (CSAM) to the
              applicable authorities as required by law.
            </li>
          </ul>

          <h3>In connection with a business transfer</h3>
          <ul>
            <li>
              In the event of a merger, acquisition, asset sale, or restructuring involving
              Stratava, your personal data may be transferred to the acquiring entity. We
              will notify you of any such transfer through the Service or by email before it
              takes effect.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>5. AI-Generated Content &amp; Data</h2>
          <p>
            When you use our AI features, your AI inputs and the outputs generated from them
            are treated as Your Content under our Terms of Service. We may use your AI
            inputs, AI outputs, and your interactions with AI features to improve and develop
            our AI models and systems, in accordance with the license you grant us under our
            Terms of Service.
          </p>
          <p>
            AI inputs and outputs are stored on our servers and associated with your account
            for as long as your account is active, subject to our data retention practices in
            Section 6. If you delete Your Content or your account, we will stop using your AI
            inputs for new model training going forward. However, we cannot and will not
            &quot;untrain&quot; AI models that have already been trained using your data.
            Anonymized or aggregated data derived from your inputs may be retained.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Data Retention</h2>
          <p>
            We retain your personal data for as long as necessary to fulfill the purposes
            described in this Privacy Policy, subject to the following:
          </p>
          <ul>
            <li>
              Account data: Retained while your account is active and for a defined period
              following account deletion, as required for legal and operational purposes.
            </li>
            <li>
              Transaction and financial data: Purchase and transfer records are retained for
              the period required by applicable financial recordkeeping laws in relevant
              jurisdictions, which may extend beyond account deletion.
            </li>
            <li>
              Risk and fraud data: Transaction frequency, behavioral signals, and fraud flags
              are retained for a defined period for anti-fraud and platform integrity
              purposes.
            </li>
            <li>
              Push notification interaction data: Retained for a defined period for analytics
              and operational purposes.
            </li>
            <li>
              AI input and output data: Retained for model training purposes as described in
              Section 5. Deletion requests are honored prospectively.
            </li>
            <li>
              Log and diagnostic data: Retained for a defined period for security, debugging,
              and service improvement purposes.
            </li>
            <li>
              Verification data: Retained for the period required by applicable identity
              verification and compliance laws in relevant jurisdictions.
            </li>
            <li>
              Social and interaction data: Retained while your account is active and deleted
              upon account deletion, subject to any applicable legal hold.
            </li>
            <li>
              Content in remixed works: Where Your Content has been incorporated into another
              user&apos;s memeplay through the remix feature, it may persist on the Service
              after you delete the original, in accordance with the remix license described
              in our Terms of Service.
            </li>
          </ul>
          <p>When data is no longer required for any of the above purposes, we delete or anonymize it.</p>
        </section>

        <section className="privacy-section">
          <h2>7. Data Security</h2>
          <p>
            We use HTTPS and other commercially reasonable technical and organizational
            measures to protect your personal data against unauthorized access, disclosure,
            alteration, and destruction. You are responsible for maintaining the security of
            your account credentials and for any activity that occurs under your account. If
            you believe your account has been compromised, contact us at{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>{" "}
            immediately.
          </p>
          <p>
            No method of electronic transmission or storage is 100% secure. While we take
            reasonable steps to protect your data, we cannot guarantee absolute security. In
            the event of a data breach that is likely to result in a risk to your rights, we
            will notify you and the relevant authorities in accordance with applicable law.
          </p>
        </section>

        <section className="privacy-section">
          <h2>8. Cross-Border Data Transfers</h2>
          <p>
            Stratava HK Limited is based in Hong Kong. However, the data we collect may be
            processed, stored, or transferred to countries or territories outside Hong Kong
            where our service providers operate. These jurisdictions may have data protection
            laws that differ from those in your country of residence.
          </p>
          <p>
            Where we transfer personal data across borders, we apply appropriate safeguards -
            such as standard contractual clauses or equivalent mechanisms recognized under
            applicable law - to ensure your data is protected to a standard consistent with
            this Privacy Policy.
          </p>
          <p>
            By using the Service, you acknowledge that your data may be transferred to and
            processed in countries outside your own.
          </p>
        </section>

        <section className="privacy-section">
          <h2>9. Your Rights &amp; Controls</h2>
          <p>
            Depending on your jurisdiction, you may have the following rights in relation to
            your personal data:
          </p>
          <ul>
            <li>Access: Request a copy of the personal data we hold about you.</li>
            <li>
              Correction: Request that we correct inaccurate or incomplete personal data.
            </li>
            <li>
              Deletion: Request deletion of your account and associated personal data,
              subject to the limitations described in Section 6 and our Terms of Service.
            </li>
            <li>
              Portability: Request that we provide your personal data in a structured,
              commonly used, machine-readable format where technically feasible.
            </li>
            <li>
              Objection: Object to certain uses of your personal data, including the use of
              your AI inputs for model training, where permitted by applicable law.
            </li>
            <li>
              Withdrawal of consent: Where we process your data on the basis of consent, you
              may withdraw that consent at any time. Withdrawal does not affect the
              lawfulness of processing carried out before the withdrawal.
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>
            . We will respond within a reasonable timeframe and in accordance with applicable
            law. We may need to verify your identity before processing your request.
          </p>
        </section>

        <section className="privacy-section">
          <h2>10. Third-Party Links &amp; Services</h2>
          <p>
            The Service may contain links to or interoperate with third-party websites,
            services, or content. Stratava does not control and is not responsible for the
            privacy practices of any third-party service. We encourage you to review the
            privacy policies of any third-party services you access through or in connection
            with the Service.
          </p>
        </section>

        <section className="privacy-section">
          <h2>11. User Data Deletion Request</h2>
          <p>You may request deletion of your personal data in the following ways:</p>
          <ul>
            <li>
              By email: Send a request to{" "}
              <a className="privacy-email-link" href="mailto:support@rezona.ai">
                support@rezona.ai
              </a>{" "}
              with the subject line &quot;Data Deletion Request,&quot; including the email
              address or username associated with your account.
            </li>
            <li>In-app: Go to Profile -&gt; Settings -&gt; Account Deletion -&gt; Delete Account.</li>
          </ul>
          <p>
            We will process your request within a reasonable timeframe. Please be aware of
            the following limitations:
          </p>
          <ul>
            <li>
              Remixed content: Where Your Content has been incorporated into another
              user&apos;s memeplay, it may remain on the Service after your account is
              deleted, in accordance with the remix license in our Terms of Service.
            </li>
            <li>
              Financial records: Transaction records may be retained for the period required
              by applicable financial recordkeeping laws, even after account deletion.
            </li>
            <li>
              AI model training: We will stop using your data for new AI model training upon
              deletion, but we cannot reverse training that has already taken place.
            </li>
            <li>
              Fraud and risk data: Data used for anti-fraud purposes may be retained for a
              defined period to prevent circumvention of enforcement actions.
            </li>
            <li>
              Legal holds: We may be required to retain certain data where required by law,
              court order, or regulatory authority.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>12. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our
            practices, features, or applicable law. For material changes - such as new data
            collection practices, new sharing arrangements, or changes that affect your
            rights - we will provide advance notice through the Service, by email to the
            address associated with your account, or by other reasonable means, at least [30]
            days before the changes take effect.
          </p>
          <p>
            Non-material changes or updates required for legal or regulatory compliance may
            take effect immediately. We encourage you to review this page periodically.
          </p>
          <p>
            Your continued use of the Service after the effective date of a revised Privacy
            Policy constitutes your acceptance of the changes. If you do not agree to the
            revised policy, you must stop using the Service.
          </p>
        </section>

        <div className="privacy-divider" aria-hidden="true" />

        <section className="privacy-section privacy-contact">
          <h2>13. Contact &amp; Data Controller</h2>
          <p>The data controller for the purposes of this Privacy Policy is:</p>
          <p>
            Stratava HK Limited [Registered Address - TBD]
            <br />
            Hong Kong Special Administrative Region
          </p>
          <p>
            For privacy-related inquiries, requests, or complaints, contact us at{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>
            . We will acknowledge your inquiry promptly and respond within the timeframe
            required by applicable law.
          </p>
          <p>
            The Service is provided by Stratava HK Limited. &copy; 2026 Stratava HK Limited.
            All rights reserved.
          </p>
        </section>
      </section>

      <SiteFooter variant="legal" />
    </main>
  );
}
