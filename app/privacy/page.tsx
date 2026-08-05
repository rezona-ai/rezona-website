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
          Rezona: Make Memeplays
          <br />
          Operated by: Stratava HK Limited
          <br />
          <br />
          Effective Date: July 24, 2026
          <br />
          Last Updated: August 5, 2026
        </p>

        <section className="privacy-section">
          <h2>Introduction</h2>
          <p>
            This Privacy Policy explains how Stratava HK Limited (&ldquo;we&rdquo;,
            &ldquo;us&rdquo; or &ldquo;the Company&rdquo;) collects, uses, discloses,
            transfers, stores and otherwise processes your personal data when you access or
            use the Rezona mobile application, the Rezona website (https://rezona.ai), the
            Rezona Lab (https://lab.rezona.ai) and related features and services (collectively,
            &ldquo;Rezona&rdquo; or the &ldquo;Service&rdquo;).
          </p>
          <p>
            Rezona is an AI-powered creation and social platform where users can generate
            playable interactive content (&ldquo;memeplays&rdquo;) from a single
            natural-language prompt. You can generate content with our AI, browse and play in
            a vertical feed, remix others&rsquo; works with one tap, follow and message other
            users, join community discussions and multiplayer games, and purchase and use
            virtual items and paid features within the Service.
          </p>
          <p>
            With respect to your personal data, we are a &ldquo;data user&rdquo; under the
            Personal Data (Privacy) Ordinance (Cap. 486) (the &ldquo;PDPO&rdquo;). We are
            committed to handling your personal data in accordance with the six Data
            Protection Principles (DPPs) of the PDPO and relevant PCPD guidance.
          </p>
          <p>
            Please read this Policy carefully. By creating an account or using Rezona, you
            acknowledge that you have read and understood this Policy. Where we rely on your
            consent to process personal data, we will seek that consent separately, and you
            may withdraw it at any time (see Section 5).
          </p>
        </section>

        <section className="privacy-section">
          <h2>1. Information We Collect</h2>
          <p>
            We collect personal data only by lawful and fair means, and only to the extent
            necessary and not excessive for the purposes described in this Policy (DPP1). Some
            information is provided by you directly; some is generated or collected
            automatically when you use Rezona.
          </p>

          <h3>1.1 Information You Provide</h3>
          <ul>
            <li>
              <strong>Account and profile:</strong> Username, nickname, email address, phone
              number and country/region code, avatar, bio and any other public profile
              information you choose to provide. Rezona verifies your identity through
              third-party sign-in or SMS verification codes and does not set a separate
              password for your account.
            </li>
            <li>
              <strong>Third-party sign-in information:</strong> When you sign in through
              Apple, Google, Facebook or other third parties, we obtain a basic account
              identifier and the associated email address, depending on that service&rsquo;s
              settings. You may also sign in with an SMS verification code or use Rezona in
              guest mode; in guest mode, we still generate a device identifier and collect
              limited information before you sign in, in order to maintain basic
              functionality.
            </li>
            <li>
              <strong>Content and creative input:</strong> The natural-language prompts you
              enter, the memeplays and interactive content you generate or remix, materials
              you upload such as images, audio and video, and the titles, covers,
              descriptions, comments, likes and community posts you publish.
            </li>
            <li>
              <strong>Social and communication information:</strong> Your follower and
              following relationships, and the content and metadata of communications within
              the Service.
            </li>
            <li>
              <strong>Transaction and purchase information:</strong> We collect and process
              information relating to all purchases, transactions, subscriptions and virtual
              items you acquire, hold, consume or transact in connection with the Service,
              however and wherever acquired, including through the Rezona mobile application,
              the Rezona website, Rezona Lab or any other Rezona property, and whether via an
              app store or web-based payment channel. This includes but is not limited to
              balances, top-ups, consumption and spending records for all Rezona virtual
              currencies, credits and consumable units, auto-renewing subscription memberships
              (including free trials, status and renewal or cancellation information). All such
              purchases and virtual items are recorded and maintained by us regardless of the
              channel or platform through which they are transacted. Payments are processed by
              the Apple App Store, Google Play, or our third-party web payment processor; we do
              not collect or store your full card number and receive only transaction
              confirmations and limited information.
            </li>
            <li>
              <strong>Support and correspondence:</strong> Information you provide when you
              contact{" "}
              <a className="privacy-email-link" href="mailto:support@rezona.ai">
                support@rezona.ai
              </a>
              , submit a report or complaint, seek assistance or take part in surveys. When
              you contact support or submit feedback within the Service, we may collect
              application diagnostic logs (which may include user identifiers, device status
              and similar information).
            </li>
          </ul>

          <h3>1.2 Information Collected Automatically</h3>
          <ul>
            <li>
              <strong>Device and technical information:</strong> Operating system and version,
              device identifiers, app version or browser type and version, language and region
              settings, network information and performance diagnostics; information such as
              device model and carrier is collected automatically by our analytics and
              crash-reporting service providers.
            </li>
            <li>
              <strong>Usage and interaction data:</strong> The content you browse, play,
              create, remix, like, comment on or share; time spent; features used; search
              history; and your interactions in the feed.
            </li>
            <li>
              <strong>Logs, analytics and diagnostic data:</strong> IP address, access times,
              crash reports, error logs and similar data, used for operations, security and
              service improvement.
            </li>
            <li>
              <strong>Cookies and similar technologies:</strong> On our website and in certain
              in-app browser containers, we use cookies, SDKs and similar technologies to keep
              you signed in, remember preferences and measure performance. You can manage these
              through your browser or device settings. In H5 games (which run in a WebView or
              browser environment), games may obtain your account identifiers (such as user ID
              and username) and device identifiers through a built-in bridge in order to
              provide interactive features.
            </li>
            <li>
              <strong>Push and notifications:</strong> To send you service notices,
              direct-message alerts and interaction reminders, we collect device or browser
              push tokens (such as FCM tokens).
            </li>
          </ul>

          <h3>1.3 AI Processing</h3>
          <p>
            Because Rezona is AI-powered, the prompts and materials you submit are processed by
            our AI systems (and AI service providers processing on our behalf) to generate
            playable content. We handle such data with reference to the PCPD&rsquo;s
            &ldquo;Artificial Intelligence: Model Personal Data Protection Framework&rdquo;.
            Please do not include unnecessary personal data in prompts, as generated content
            may be published and remixed by others.
          </p>

          <h3>1.4 Advertising Identifiers and Attribution</h3>
          <p>
            To measure advertising performance and user acquisition (attribution), we use
            advertising identifiers (IDFA on iOS and the Advertising ID/GAID on Android) and
            work with the attribution provider and platforms to process these identifiers and
            app events. On iOS devices, we request your permission as required by
            Apple&rsquo;s App Tracking Transparency (ATT) framework; you may decline, in which
            case we will not read the IDFA to track you across apps. If we introduce new uses
            such as personalised advertising in the future, we will obtain your separate
            consent in advance and update this Policy.
          </p>

          <h3>1.5 Sensitive Information</h3>
          <p>
            Rezona is not designed to collect sensitive personal data such as health,
            biometric, religious or political information. Please do not submit such
            information through prompts, content or messages; if you nevertheless choose to do
            so, you consent to our processing it in accordance with this Policy.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. How We Use Your Information</h2>
          <p>
            Under DPP1 and DPP3 of the PDPO, we use your personal data only for the purposes
            for which it was collected or purposes directly related to them. We will not use it
            for a new purpose without your express and voluntary (&ldquo;prescribed&rdquo;)
            consent. We use your personal data to:
          </p>
          <ul>
            <li>Create, verify and manage your account, and provide Rezona&rsquo;s core features;</li>
            <li>
              Generate, host, display, enable play of, remix and distribute interactive content
              in the feed, communities and multiplayer games;
            </li>
            <li>
              Operate social features, including following, likes, comments, sharing and direct
              messages;
            </li>
            <li>
              Process and account for purchases of virtual items, subscriptions and other paid
              features, and related balances and spending, and prevent fraud or unauthorised
              transactions;
            </li>
            <li>
              Personalise your experience, such as recommending content and remembering
              preferences;
            </li>
            <li>
              Operate, maintain, secure, debug and improve the Service, including analysing
              usage, diagnosing crashes and developing new features;
            </li>
            <li>
              Maintain platform safety &mdash; detecting, reviewing and acting on
              inappropriate, explicit, illegal or violating user content, and protecting users
              (especially minors) through content moderation and abuse prevention;
            </li>
            <li>
              Respond to your enquiries, requests, reports and complaints, and provide customer
              support;
            </li>
            <li>
              Comply with applicable laws and regulations, lawful requests and our legal
              obligations, and establish, exercise or defend legal rights.
            </li>
            <li>
              Send you service notices, direct-message alerts and interaction reminders (such
              as push notifications);
            </li>
            <li>
              Measure advertising performance and user acquisition (attribution) to evaluate
              and optimise our promotional campaigns;
            </li>
          </ul>

          <h3>2.1 Direct Marketing</h3>
          <p>
            If we introduce marketing features in the future, we will first obtain your consent
            in accordance with Part 6A of the PDPO, and every marketing message will include a
            simple, free opt-out; you may opt out at any time, after which we will no longer use
            your data for direct marketing, at no charge.
          </p>
        </section>

        <section className="privacy-section">
          <h2>3. How We Share Your Information</h2>
          <p>
            We do not sell your personal data. We disclose personal data only in the following
            circumstances and consistently with the purposes of collection (DPP3):
          </p>
          <ul>
            <li>
              <strong>Other users and the public:</strong> Your profile page, published
              memeplays, community posts, comments, likes and other public activity are visible
              to other users; when content is shared outside the Service, it may also be seen by
              the public. Content you publish may be played and remixed by others. Your
              membership tier badge (if any) may be publicly displayed to other users on your
              profile page and on feed cards.
            </li>
            <li>
              <strong>Service providers and data processors:</strong> We engage trusted vendors
              to provide cloud hosting and storage, AI models and generation, content delivery,
              analytics and attribution (advertising measurement), crash reporting, push
              notifications, instant messaging (direct-message delivery), real-time audio/video
              and signalling, customer support and communications services. They may process
              personal data only on our instructions and for our purposes. Under DPP2 and DPP4,
              we use contracts and other means to ensure they protect the data properly, do not
              retain it longer than necessary and do not use it for their own purposes.
            </li>
            <li>
              <strong>App stores and payment processors:</strong> The Apple App Store, Google
              Play and our third-party web payment processor process your purchases of virtual
              items, subscriptions and other paid features (depending on the channel through
              which you purchase) and provide us with transaction confirmations and limited
              transaction information.
            </li>
            <li>
              <strong>Legal, safety and compliance:</strong> We may disclose personal data
              where necessary to comply with applicable law or lawful requests, enforce our
              terms, detect or prevent fraud and security or technical issues, or protect the
              rights, property and safety of users, the public or the Company.
            </li>
            <li>
              <strong>Corporate transactions:</strong> In a merger, acquisition, financing or
              asset sale, personal data may be transferred as part of the transaction, subject
              to appropriate confidentiality and data protection safeguards.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>4. Where We Store Your Information</h2>
          <p>
            Rezona is operated from Hong Kong and offered to users globally. Your personal data
            may be stored and processed in Hong Kong and in other regions where we or our
            service providers operate, and may therefore be transferred outside Hong Kong and
            processed there. For example, some of our analytics and crash-reporting data (which
            may include search terms, comment content, usernames and browsing behaviour) is
            transmitted to service providers located in the United States for processing.
          </p>
          <p>
            When transferring personal data outside Hong Kong, we take measures consistent with
            section 33 of the PDPO and the PCPD&rsquo;s &ldquo;Guidance on Recommended Model
            Contractual Clauses for Cross-border Transfer of Personal Data&rdquo;, including
            contractual clauses requiring the recipient to provide a level of protection
            comparable to the PDPO, transfer impact assessments, and appropriate technical and
            organisational safeguards such as encryption and access controls.
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. Your Rights and Choices</h2>
          <p>
            The PDPO gives you important rights over your personal data, and we are committed to
            helping you exercise them. To the extent permitted by the PDPO, you may:
          </p>
          <ul>
            <li>
              <strong>Access your data (data access request):</strong> Ask whether we hold your
              personal data and request a copy. Under the PDPO, we will respond within 40 days
              and may charge a reasonable fee that is not excessive.
            </li>
            <li>
              <strong>Correct your data (data correction request):</strong> Request correction
              of inaccurate personal data; you can also update most profile information directly
              within the Service.
            </li>
            <li>
              <strong>Withdraw consent:</strong> Withdraw any consent you have previously given
              (including direct marketing consent) at any time, free of charge.
            </li>
            <li>
              <strong>Opt out of direct marketing:</strong> Require us at any time to stop using
              your personal data for direct marketing.
            </li>
            <li>
              <strong>Delete your account and data:</strong> You can delete your account
              directly in Settings within the Service, or ask us to delete your account and
              related personal data. Content you have published or that has been remixed by
              others, and records we must retain by law, may continue to exist as described in
              Section 7.
            </li>
            <li>
              <strong>Manage device permissions:</strong> Control notifications, tracking
              permission and access to device features through your device, browser and app
              settings.
            </li>
          </ul>
          <p>
            To exercise these rights, please contact us using the details in Section 10. We may
            need to verify your identity before handling a request. If you are dissatisfied with
            how we handle your personal data, you may complain to the Office of the Privacy
            Commissioner for Personal Data, Hong Kong (
            <a
              className="privacy-email-link"
              href="https://www.pcpd.org.hk"
              target="_blank"
              rel="noreferrer"
            >
              www.pcpd.org.hk
            </a>
            ).
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Security of Your Information</h2>
          <p>
            Under DPP4 of the PDPO, we take all reasonably practicable steps to protect your
            personal data against unauthorised or accidental access, processing, erasure, loss
            or use, having regard to the kind of data, the harm that could result, and how it is
            stored and transmitted. With reference to the PCPD&rsquo;s &ldquo;Guidance Note on
            Data Security Measures for Information and Communications Technology&rdquo; and
            privacy-by-design practices, our measures include:
          </p>
          <ul>
            <li>Encrypting personal data in transit (and, where appropriate, at rest);</li>
            <li>
              Access controls, authentication and least-privilege principles for personnel and
              systems;
            </li>
            <li>Secure software development, testing and regular security reviews;</li>
            <li>
              Logging, monitoring and measures to detect and respond to security incidents;
            </li>
            <li>Contractual security obligations imposed on data processors.</li>
          </ul>
          <p>
            Despite these safeguards, no method of transmission or storage is completely secure.
            We maintain a data breach response plan and, with reference to the PCPD&rsquo;s
            &ldquo;Guidance on Data Breach Handling and Data Breach Notifications&rdquo;, assess
            any suspected breach; where there is a real risk of harm, we will notify affected
            individuals and the PCPD as soon as practicable and take containment and remediation
            measures.
          </p>
        </section>

        <section className="privacy-section">
          <h2>7. How Long We Keep Your Information</h2>
          <p>
            Under DPP2 of the PDPO and PCPD guidance on erasure and anonymisation of personal
            data, we retain your personal data only for as long as necessary to fulfil the
            purposes of collection, or for the period required by law.
          </p>
          <ul>
            <li>Account and profile data is retained for as long as your account exists;</li>
            <li>
              Content you publish may remain visible to other users (and persist in others&rsquo;
              remixes) until removed;
            </li>
            <li>
              Transaction records are retained for the periods required by applicable
              accounting, tax and consumer protection laws;
            </li>
            <li>
              Logs, diagnostics and analytics data are retained for the limited periods needed
              to operate and secure the Service.
            </li>
          </ul>
          <p>
            When personal data is no longer needed, we delete it securely or irreversibly
            anonymise it so that it can no longer identify you. After account deletion, some
            data may remain briefly in backups until routinely overwritten; we may retain
            limited information where necessary to comply with legal obligations, resolve
            disputes or enforce agreements.
          </p>
        </section>

        <section className="privacy-section">
          <h2>8. Information Relating to Children and Teens</h2>
          <p>
            We value the privacy of children and teens and follow PCPD guidance on the
            collection and use of personal data over the internet and on the protection of
            children&rsquo;s personal data.
          </p>
          <ul>
            <li>
              <strong>Minimum age:</strong> Rezona is intended for users aged 13 and above. If
              you are under 13, please do not create an account or use the Service.
            </li>
            <li>
              <strong>Users under 18:</strong> If you are between 13 and 17, you must use Rezona
              with the involvement and verifiable consent of a parent or legal guardian. We
              encourage parents to supervise their children&rsquo;s use, including creation,
              spending on virtual items and paid features, community participation and direct
              messages.
            </li>
            <li>
              <strong>Data minimisation for minors:</strong> We collect only the personal data
              necessary to provide the Service and are especially careful with content
              moderation and safety features affecting minor users.
            </li>
            <li>
              <strong>Parental rights:</strong> Parents or guardians may contact us to access,
              correct or delete their child&rsquo;s personal data, withdraw consent or close
              their child&rsquo;s account.
            </li>
          </ul>
          <p>
            If we learn that we have collected personal data from a child below the minimum age
            without appropriate consent, we will take reasonable steps to delete such data and
            close the account.
          </p>
        </section>

        <section className="privacy-section">
          <h2>9. Updates to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in the
            Service, technology, legal requirements or business practices. When we do, we will
            revise the &ldquo;Last Updated&rdquo; date at the top of this Policy; for material
            changes, we will notify you more prominently (for example, by notice within the
            Service) before they take effect. Where required by law, we will seek your consent
            separately. Your continued use of Rezona after an update takes effect indicates your
            awareness of the revised Policy.
          </p>
        </section>

        <div className="privacy-divider" aria-hidden="true" />

        <section className="privacy-section privacy-contact">
          <h2>10. Contact</h2>
          <p>
            If you have any questions, requests or complaints about this Policy or how we handle
            your personal data (including access and correction requests), please contact our
            data protection officer / privacy team:
          </p>
          <p>
            Stratava HK Limited &mdash; Privacy Team / Data Protection Officer (DPO)
            <br />
            <strong>Email:</strong>{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>
            <br />
            <strong>Website:</strong>{" "}
            <a
              className="privacy-email-link"
              href="https://rezona.ai"
              target="_blank"
              rel="noreferrer"
            >
              https://rezona.ai
            </a>
          </p>
          <p>
            Stratava HK Limited
            <br />
            Room 1006, 10/F, Po Yip Building, 23 Hing Yip Street, Kwun Tong, Hong Kong
            <br />
            Hong Kong Special Administrative Region
          </p>
          <p>
            If you believe your rights under the PDPO have not been respected, you may also
            contact the Office of the Privacy Commissioner for Personal Data, Hong Kong (
            <a
              className="privacy-email-link"
              href="https://www.pcpd.org.hk"
              target="_blank"
              rel="noreferrer"
            >
              www.pcpd.org.hk
            </a>
            ).
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
