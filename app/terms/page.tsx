import type { Metadata } from "next";
import "../legal-pages.css";
import LegalHeader from "../components/legal-header";
import SiteFooter from "../components/site-footer";
import { createPageMetadata } from "../shared-metadata";

export const metadata: Metadata = createPageMetadata();

export default function TermsPage() {
  return (
    <main className="privacy-page terms-page">
      <LegalHeader />

      <section className="privacy-content-shell">
        <div className="privacy-title-block">
          <p className="privacy-brand">
            REZONA.<wbr />
            AI
          </p>
          <h1 className="privacy-title">Terms of Service</h1>
        </div>

        <p className="privacy-date">
          Effective Date: 01 June 2026
          <br />
          Last updated: 01 June 2026
        </p>

        <div className="privacy-intro">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
            Rezona application, website, and related services (collectively, the
            &quot;Service&quot;), provided by Stratava HK Limited (&quot;Stratava,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a company incorporated
            in the Hong Kong Special Administrative Region. For the purposes of this
            Agreement, you and Stratava will be jointly referred to as the &quot;Parties&quot;
            and respectively as a &quot;Party.&quot;
          </p>
          <p>
            Please read these Terms carefully before using the Service. By downloading,
            installing, accessing, or using the Service - including by tapping &quot;Sign
            Up,&quot; &quot;Continue,&quot; &quot;Agree,&quot; or any equivalent button - you
            confirm that you have read, understood, and agreed to be bound by these Terms,
            our Privacy Policy, our Community Guidelines, and any additional terms applicable
            to specific features (collectively, the &quot;Agreement&quot;).
          </p>
          <p>
            If you are a minor in your jurisdiction, your parent or legal guardian must read
            and agree to these Terms on your behalf before you use the Service. By permitting
            a minor to use the Service, the parent or legal guardian agrees to be bound by
            this Agreement and accepts full responsibility for the minor&apos;s activities on
            the Service.
          </p>
          <p>If you do not agree to these Terms, you must not access or use the Service.</p>
          <p>
            These Terms reference but do not replace your agreements with the relevant app
            store operator (Apple Inc. or Google LLC), which separately govern your download
            and use of the Service on their platforms.
          </p>
        </div>

        <section className="privacy-section">
          <h2>1. The Service</h2>
          <p>
            The Service is an AI-powered platform built around memeplays - a new interactive
            content format where memes are tappable, playable, and remixable. The Service
            allows users to create, publish, play, and remix memeplays using AI-powered
            tools; browse and interact with a community feed; send and receive direct
            messages and social reactions; and access virtual items and platform features.
          </p>
          <p>
            The Service is available through the Apple App Store and Google Play Store, and
            may be expanded to additional platforms over time. We reserve the right to
            modify, suspend, or discontinue any feature of the Service at any time, with or
            without notice.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Eligibility &amp; Parental Consent</h2>
          <p>
            The Service is intended for a general audience and may be used by minors with
            appropriate parental or guardian supervision. By using the Service, you confirm
            that your use complies with all applicable laws and regulations in your
            jurisdiction, including any age-related requirements.
          </p>
          <p>
            If you are a parent or legal guardian who has permitted a minor to use the
            Service, you agree to be bound by this Agreement and accept full responsibility
            for the minor&apos;s activities on the Service, including all purchases, content
            creation, and interactions. We strongly encourage parents and guardians to enable
            device-level parental controls, including Apple &quot;Ask to Buy&quot; and Google
            Family Link, to manage and monitor in-app activity.
          </p>
          <p>
            We reserve the right to suspend, restrict, or delete any account where we
            reasonably believe the Service is being used in a manner inconsistent with
            applicable laws or these Terms.
          </p>
        </section>

        <section className="privacy-section">
          <h2>3. Account Registration</h2>
          <p>
            You are solely responsible for maintaining the confidentiality of your account
            credentials, restricting access to your device and account, and all activities
            and content that occur under your account.
          </p>
          <p>
            You may register for and log on to the Service via certain third-party services
            that are provided from time to time. The third party&apos;s collection, use, and
            disclosure of your information will be subject to that third party&apos;s privacy
            policy.
          </p>
          <p>
            We reserve the right to disable your account at any time if you have failed to
            comply with any provision of these Terms, or if activities occur on your account
            that, in our reasonable judgment, would or might cause damage to or impair the
            Service, infringe or violate any third-party rights, or violate any applicable
            laws or regulations.
          </p>
          <p>
            If you wish to delete your account, you may do so via Settings -&gt; Delete
            Account in the app, or by contacting us at{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>
            . Once your account is deleted, you will not be able to reactivate it or retrieve
            any content or information you have shared on the Service, subject to the
            limitations described in Section 4.
          </p>
        </section>

        <section className="privacy-section">
          <h2>4. Your Content &amp; AI Features</h2>

          <h3>4.1. What &quot;Your Content&quot; Means</h3>
          <p>
            The Service allows you to create, upload, publish, generate (including with AI
            tools), transmit, or otherwise make available memeplays, memes, characters, voice
            inputs, audio, graphics, text, comments, messages, and other materials
            (collectively, &quot;Your Content&quot;).
          </p>

          <h3>4.2. You Own Your Content</h3>
          <p>
            You retain all rights, title, and interest in Your Content. Stratava does not
            claim ownership of Your Content.
          </p>

          <h3>4.3. License You Grant to the Service</h3>
          <p>
            To use and allow the Service to operate, you grant Stratava and our affiliates,
            successors, and service providers a non-exclusive, royalty-free, perpetual,
            irrevocable, transferable, and fully sublicensable worldwide license to host,
            store, use, copy, reproduce, modify, adapt, publish, run, create derivative works
            of, distribute, and publicly display Your Content, in any media or format now
            known or hereafter developed, for the purposes of operating, maintaining, and improving the Service; researching, developing, and offering new features, products, and services, including training, developing, and deploying AI models and systems; promoting and publicizing the Service; and enforcing these Terms and complying with legal obligations.
            Nothing in this Section 4.3 limits or affects any statutory rights you may have under applicable data protection law, including your right to object to the use of your AI Inputs for model training as described in our Privacy Policy. Where you exercise such a right, this license remains valid for uses already made and for uses not covered by that right.
          </p>

          <h3>4.4. License You Grant to Other Users</h3>
          <p>
            By publishing Your Content on the Service, you grant each other user a
            non-exclusive, royalty-free, worldwide license to access, view, play, and share
            Your Content within the Service. Where you have enabled the remix feature for
            Your Content, you additionally grant other users the right to reproduce, adapt,
            and create derivative works (&quot;remix&quot;) from Your Content within the
            Service.
          </p>
          <p>
            You may turn off the remix feature for Your Content at any time, and no new
            remixes may be created after that point. However, any derivative works created by
            other users prior to you disabling the remix feature will remain on the Service
            in accordance with the license granted at the time of their creation.
          </p>

          <h3>4.5. AI Features &amp; Outputs</h3>
          <p>
            The Service offers AI-powered features that generate memeplays, characters,
            audio, text, or other outputs from your inputs (&quot;AI Outputs&quot;). Anything
            you submit to these AI features (&quot;AI Inputs&quot;) is treated as Your
            Content under this Section. Subject to your compliance with these Terms, you own
            the AI Outputs you generate. However, Stratava retains all rights in the AI
            models and systems that generate AI Outputs, and other users may generate similar
            or identical outputs from the same inputs.
          </p>
          <p>
            AI Outputs are provided &quot;as is&quot; and may be inaccurate, biased, or
            otherwise inappropriate - you are responsible for reviewing and deciding whether
            to use or share them. You agree that Stratava may use AI Inputs, AI Outputs, and
            your interactions with AI features to improve and develop our AI systems, in
            accordance with our Privacy Policy.
          </p>

          <h3>4.6. Your Promises About Your Content</h3>
          <p>
            By publishing Your Content, you represent and warrant that you own Your Content
            or have all necessary rights to grant the licenses above; that Your Content does
            not infringe any third party&apos;s rights; that Your Content complies with these
            Terms, our Community Guidelines, and all applicable laws; and that Your Content
            is not fraudulent, deceptive, or misleading. You are solely responsible for Your
            Content and the consequences of publishing it.
          </p>

          <h3>4.7. Deleting Your Content</h3>
          <p>
            You may delete Your Content or your account at any time. However, Your Content
            may remain on the Service if it has been remixed into another user&apos;s
            content. We may retain backup copies or anonymized data for legitimate business,
            security, or legal purposes. Once Your Content has been used to train an AI
            model, we cannot &quot;untrain&quot; the model, though we will stop using Your
            Content for new training upon deletion.
          </p>

          <h3>4.8. Name, Likeness, and Voice</h3>
          <p>
            You grant Stratava a non-exclusive, royalty-free, worldwide license to use your
            username, handle, display name, profile image, voice, and likeness (as embodied
            in Your Content) in connection with operating, promoting, and publicizing the
            Service - including in marketing materials, featured content placements, creator
            program promotion, and announcements on and off the Service. We will not use your
            name or likeness to endorse third-party products or services without your
            separate, prior consent.
          </p>

          <h3>4.9. Moral Rights</h3>
          <p>
            To the extent permitted by applicable law, you waive any moral rights (or
            analogous rights, including rights of attribution and integrity) you may have in
            Your Content with respect to the licensed uses under Sections 4.3, 4.4, and 4.8.
            Where such rights cannot be waived under applicable law, you agree not to assert
            them against Stratava, its affiliates, sublicensees, or other users acting in
            accordance with these Terms.
          </p>

          <h3>4.10. Reporting Infringement</h3>
          <p>
            If you believe content on the Service infringes your intellectual property
            rights, you may submit a takedown notice to{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>
            . We respond to valid notices in accordance with applicable law.
          </p>

          <h3>4.11. Survival of Licenses</h3>
          <p>
            The licenses granted in Sections 4.3, 4.4, 4.5, 4.8, and 4.12 survive termination of
            your account, termination of these Terms, and any discontinuation of the Service.
            Content published, remixed, or used to train AI models before termination may
            continue to exist and be used in accordance with these Terms after termination.
          </p>

          <h3>4.12. De-identified & Aggregated Data</h3>
          <p>
Stratava may create de-identified, anonymized, or aggregated data from Your Content, AI Inputs, AI Outputs, and your use of the Service. Such data does not identify you. Stratava may use, retain, license, and disclose such data for any lawful purpose, without restriction, attribution, or compensation, during and after the term of this Agreement.
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. Acceptable Use &amp; Prohibited Conduct</h2>

          <h3>5.1. General Standard</h3>
          <p>
            You agree to use the Service only for its intended purposes and in compliance
            with these Terms, our Community Guidelines, and all applicable laws.
          </p>

          <h3>5.2. You Will Not</h3>
          <p>Content-based prohibitions:</p>
          <ul>
            <li>
              Publish content that is unlawful, defamatory, obscene, pornographic, sexually
              explicit, threatening, abusive, harassing, hateful, discriminatory, or that
              promotes violence or self-harm.
            </li>
            <li>
              Publish any content that sexualizes, exploits, endangers, or solicits minors
              in any way, including AI-generated depictions.
            </li>
            <li>
              Publish content depicting real, identifiable people without their consent in a
              misleading, defamatory, sexualized, or harmful manner.
            </li>
            <li>
              Publish content that infringes any third party&apos;s intellectual property,
              privacy, or other rights.
            </li>
            <li>
              Publish content containing personal or private information about any person
              that could enable harm.
            </li>
            <li>Publish content that constitutes harassment, bullying, stalking, or threats.</li>
          </ul>
          <p>Behavior-based prohibitions:</p>
          <ul>
            <li>
              Impersonate any person or entity, including Stratava employees, Service staff,
              Rezonasaur, or representatives of any other platform or IP.
            </li>
            <li>
              Create or maintain accounts using false or misleading information, or operate
              multiple accounts in violation of our policies.
            </li>
            <li>
              Collect, harvest, or scrape information about other users without express
              permission.
            </li>
            <li>
              Engage in any conduct that exploits or attempts to harm minors, including
              grooming or solicitation.
            </li>
            <li>Promote or facilitate illegal activity.</li>
            <li>
              Use Virtual Items to solicit prohibited content, personal information, or any
              exchange outside the Service&apos;s intended features.
            </li>
          </ul>
          <p>Technical and security prohibitions:</p>
          <ul>
            <li>
              Reverse engineer, decompile, or disassemble the Service except where expressly
              permitted by applicable law.
            </li>
            <li>
              Remove, circumvent, or interfere with any security, authentication, or content
              moderation feature.
            </li>
            <li>Upload or transmit viruses, malware, or any other harmful code.</li>
            <li>
              Use bots, scrapers, or other automated means to access or interact with the
              Service.
            </li>
            <li>Manipulate identifiers to disguise the origin of Your Content or your activity.</li>
            <li>Attempt to bypass any age-gating, parental control, or other access control.</li>
          </ul>
          <p>Commercial and economic prohibitions:</p>
          <ul>
            <li>Send spam, chain messages, or unsolicited commercial communications.</li>
            <li>
              Buy, sell, trade, or transfer Service accounts, Virtual Items, or other
              Service entitlements outside the Service.
            </li>
            <li>Engage in fraud, chargeback abuse, or unauthorized payment activity.</li>
            <li>
              Artificially inflate follower counts, engagement metrics, or leaderboard
              rankings.
            </li>
          </ul>

          <h3>5.3. Enforcement</h3>
          <p>
            We may at any time review, screen, moderate, remove, restrict, or refuse to
            display any content; suspend, restrict, or terminate accounts; restrict access to
            any feature; and cooperate with law enforcement where required. Where reasonably
            practicable, we will provide an appeal process at{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>
            .
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Termination &amp; Suspension</h2>

          <h3>6.1. Termination by You</h3>
          <p>
            You may stop using the Service at any time. You may delete your account via
            Settings -&gt; Delete Account or by contacting{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>
            .
          </p>

          <h3>6.2. Termination by Us</h3>
          <p>
            We may suspend, restrict, or terminate your account or access to all or part of
            the Service, with or without notice, if you have violated these Terms, our
            Community Guidelines, or any applicable law; your conduct creates risk of harm to
            other users, to Stratava, or to third parties; you have engaged in fraud,
            chargeback abuse, or unauthorized payment activity; we are required to do so by
            law, court order, or governmental authority; or we discontinue the Service or a
            relevant feature.
          </p>

          <h3>6.3. Appeals &amp; Effect of Termination</h3>
          <p>
            If your account is suspended or terminated, you may request a review by
            contacting{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>
            . We will respond in good faith within a reasonable time. Upon termination, your
            right to access and use the Service ends immediately, your Virtual Items will be
            forfeited as set out in Section 7.6 except where refunds are required by law, and
            the licenses in Sections 4.3 and 4.4 survive in accordance with their terms.
          </p>
        </section>

        <section className="privacy-section">
          <h2>7. Virtual Items</h2>

          <h3>7.1. What Are Virtual Items</h3>
          <p>
            The Service offers virtual items, including in-app currency and digital goods
            (collectively, &quot;Virtual Items&quot;), that can be accessed or used within
            the Service. Virtual Items enable users to engage with platform features, support
            creators, and access digital content within the Service.
          </p>
          <p>
            Virtual Items are digital content made available by Stratava that can be
            purchased with real money and are only usable within the Service. They have no
            monetary value outside the Service and do not constitute currency, legal tender,
            securities, or any form of financial instrument. All Virtual Items, including any
            associated benefits or features, are provided to you as a limited, revocable,
            non-transferable license to use such digital content within the Service for
            personal, non-commercial purposes only.
          </p>

          <h3>7.2. Purchasing Virtual Items</h3>
          <p>
            The price of Virtual Items will be displayed at the point of purchase in your
            local currency. All charges and payments for Virtual Items will be made through
            authorized third-party payment merchants and platform vendors through which the
            Service is distributed. Currency exchange settlements, foreign transaction fees,
            and payment channel fees, if any, are based on your agreement with the applicable
            payment provider. Stratava does not directly receive, store, or process your
            payment card information.
          </p>
          <p>
            We reserve the right to modify the pricing, availability, and composition of
            Virtual Items at any time with reasonable notice.
          </p>

          <h3>7.3. Nature &amp; Restrictions</h3>
          <p>Virtual Items:</p>
          <ul>
            <li>
              Have no equivalent value in real currency and are not money or any form of
              financial instrument.
            </li>
            <li>
              Cannot be redeemed for cash or exchanged for legal tender, except as required
              by applicable law.
            </li>
            <li>
              Cannot be transferred, sold, traded, gifted, or exchanged outside the Service,
              except where we expressly enable such functionality.
            </li>
            <li>Are personal to your account and are not your property.</li>
            <li>Do not expire based on inactivity, unless they are Promotional Virtual Items.</li>
          </ul>

          <h3>Refunds and Changing Your Mind</h3>
          <p>
            If you have purchased Virtual Items through authorized third-party payment
            merchants and platform vendors, you will need to contact the relevant merchants
            or vendors directly for any refund or cancellation requests. Refunds or
            cancellations of such purchases are handled by those vendors and merchants, not
            Stratava, and are subject to their refund policies.
          </p>
          <p>
            When you submit a refund request, we may freeze the corresponding Virtual Items
            for which you are seeking a refund. If your refund request is successful, we will
            deduct the relevant Virtual Items from your account. If the remaining balance in
            your account is insufficient for deduction, we reserve the right to deduct the
            applicable amount from your future Virtual Item purchases.
          </p>
          <p>
            All other sales of Virtual Items are final. We do not offer refunds outside of
            the circumstances described above, except where required by applicable law.
          </p>

          <h3>7.4. Promotional Virtual Items</h3>
          <p>
            We may from time to time grant Virtual Items for promotional purposes. Such
            Promotional Virtual Items are granted at our discretion, may be subject to
            additional terms and expiration periods disclosed at the time of grant, are not
            refundable under any circumstances, and have no cash value.
          </p>

          <h3>7.5. Fraud, Errors &amp; Abuse</h3>
          <p>
            We reserve the right to correct any error in Virtual Item balances and to
            suspend, freeze, or revoke Virtual Items where we reasonably suspect fraud,
            chargeback abuse, account compromise, or violation of these Terms.
          </p>

          <h3>7.6. Termination of License</h3>
          <p>
            Your limited license to use Virtual Items ends if you violate these Terms or any
            Service policy, or if your account is suspended, terminated, or deleted. In these
            cases, we are not required to refund any Virtual Items or amounts spent, except
            where legally required.
          </p>

          <h3>7.7. Removal of Virtual Content</h3>
          <p>
            We have the right, in our sole discretion, to suspend or remove any Virtual Items
            from the Service and your account without advance notice. We are not liable for
            any losses resulting from such removal, except where legally required.
          </p>
        </section>

        <section className="privacy-section">
          <h2>8. Payment Terms</h2>

          <h3>8.1. Payment Processing</h3>
          <p>
            All payments for Virtual Items are processed by authorized third-party payment
            merchants and platform vendors through which the Service is distributed, not by
            Stratava. Your payment is subject to the terms and conditions of the relevant
            payment merchant or platform vendor.
          </p>

          <h3>8.2. Taxes</h3>
          <p>
            Prices may or may not include applicable taxes depending on your location and the
            relevant platform vendor&apos;s display settings. You are responsible for any
            taxes, duties, or governmental charges associated with your purchases.
          </p>

          <h3>8.3. Payment Failures &amp; Transaction Anomalies</h3>
          <p>
            Payment failures, duplicate charges, and other transaction errors are processed
            and managed by the relevant authorized third-party payment merchant or platform
            vendor, not by Stratava. If you experience a payment failure, duplicate charge,
            or any other transaction anomaly, you must contact the relevant payment merchant
            or platform vendor directly.
          </p>
          <p>
            Stratava is not responsible for resolving payment processing errors and does not
            have access to your payment transaction data. Where a transaction error is
            confirmed and verified by the relevant vendor, we will adjust your Virtual Item
            balance accordingly.
          </p>

          <h3>8.4. User Authorization &amp; Risk Acknowledgment</h3>
          <p>
            By proceeding with any purchase on the Service, you confirm that you have read
            and agree to the applicable terms of service and privacy policy of the relevant
            authorized payment merchant or platform vendor through which your purchase is
            processed. You acknowledge that your payment transaction is subject solely to
            that vendor&apos;s terms and policies, and that Stratava bears no liability for
            any issues, losses, or disputes arising out of or related to your agreement with,
            or use of, any third-party payment merchant or platform vendor.
          </p>

          <h3>8.5. Disputed Payments &amp; Chargebacks</h3>
          <p>
            If you have a concern about a purchase, please contact us first at{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>
            . If a chargeback or payment reversal is initiated, we may suspend or restrict
            your account&apos;s ability to make further purchases, adjust your Virtual Item
            balance to reflect the reversed payment, and in cases of repeated or fraudulent
            chargebacks, suspend or terminate your account.
          </p>
        </section>

        <section className="privacy-section">
          <h2>9. Intellectual Property Rights</h2>

          <h3>9.1. The Service&apos;s Intellectual Property</h3>
          <p>
            All elements of the Service - including its name, Rezonasaur (Rezona&apos;s
            orange mascot), logos, designs, trade dress, underlying technology, AI models,
            and all platform-generated content - are the property of Stratava and are
            protected by applicable intellectual property laws. Nothing in this Agreement
            grants you any rights in the Service&apos;s intellectual property except as
            expressly set out herein.
          </p>

          <h3>9.2. Your Obligations</h3>
          <p>
            You may only post content that you own, have created, or have the rights to use.
            Without the permission of the rights holder, you may not share copyrighted music,
            video, or imagery belonging to others; content belonging to other creators on the
            Service or sourced from other platforms without permission; trademarked
            characters, logos, or brand assets used in an unauthorized or misleading way; or
            content subject to NDA, embargo, or pre-release restrictions.
          </p>

          <h3>9.3. IP Complaints</h3>
          <p>
            If you believe that content on the Service infringes your intellectual property
            rights, please send a written notice to{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>{" "}
            including your contact details, a description of the right claimed to have been
            infringed, identification of the allegedly infringing content, a statement of
            good-faith belief that the use is not authorized, a statement under penalty of
            perjury that the information is accurate and that you are the rights holder or
            authorized agent, and your physical or electronic signature. Upon receipt of a
            valid notice, we may remove or restrict access to the content and notify the
            responsible user.
          </p>

          <h3>9.4. Counter-Notices &amp; Repeat Infringers</h3>
          <p>
            If your content has been removed in response to an IP complaint and you believe
            this was an error, you may submit a counter-notice to{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>
            . We will suspend or terminate the accounts of users determined to be repeat
            infringers.
          </p>
        </section>

        <section className="privacy-section">
          <h2>10. Disclaimers</h2>

          <h3>10.1. Service Provided &quot;As Is&quot;</h3>
          <p>
            To the fullest extent permitted by applicable law, the Service, including all
            features, content, AI Outputs, and Virtual Items, is provided on an &quot;as
            is&quot; and &quot;as available&quot; basis, without warranties of any kind.
            Stratava expressly disclaims all warranties of merchantability, fitness for a
            particular purpose, non-infringement, and accuracy.
          </p>

          <h3>10.2. No Guarantee of Service Quality</h3>
          <p>
            Stratava does not warrant that the Service will meet your requirements, be
            uninterrupted, timely, secure, or error-free. Your use of the Service and your
            interaction with content created by others is at your own risk. Stratava does not
            endorse any user content, opinion, recommendation, or advice expressed by users
            and disclaims all liability in connection with user content.
          </p>

          <h3>10.3. AI Outputs</h3>
          <p>
            AI Outputs are generated by automated systems and may be inaccurate, biased,
            offensive, or otherwise inappropriate. Stratava makes no warranty regarding the
            quality, accuracy, originality, or fitness of any AI Output for any purpose.
          </p>

          <h3>10.4. Third-Party Links &amp; Force Majeure</h3>
          <p>
            The Service may contain links to or interoperate with third-party websites or
            services. Stratava does not control and is not responsible for any third-party
            content or services. Stratava is not liable for any failure or delay in providing
            the Service caused by events beyond our reasonable control.
          </p>

          <h3>10.5. Mandatory Consumer Rights</h3>
          <p>
            Nothing in this Section limits any non-waivable rights you may have under
            applicable consumer-protection law in your jurisdiction.
          </p>
        </section>

        <section className="privacy-section">
          <h2>11. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Stratava, its affiliates, and
            their respective officers, directors, employees, agents, and licensors will not
            be liable for any indirect, incidental, special, consequential, exemplary, or
            punitive damages - including loss of profits, loss of data, loss of goodwill, or
            business interruption - arising out of or related to your use of the Service,
            regardless of the legal theory on which the claim is based.
          </p>
          <p>
            This includes but is not limited to damages arising from user content created by
            others, AI Outputs, loss of Your Content, third-party services, unauthorized
            account access (except where caused by Stratava&apos;s gross negligence or
            willful misconduct), or disputes between users.
          </p>
          <p>
            Nothing in this Section limits or excludes any liability that cannot be limited
            or excluded under applicable law, including liability for fraud, willful
            misconduct, gross negligence, or death or personal injury caused by negligence.
          </p>
        </section>

        <section className="privacy-section">
          <h2>12. Indemnification</h2>
          <p>
            To the fullest extent permitted by applicable law, you agree to defend,
            indemnify, and hold harmless Stratava, its affiliates, and their respective
            officers, directors, employees, agents, and licensors from and against any and
            all claims, losses, liabilities, costs, and expenses (including reasonable legal
            fees) arising out of or related to Your Content; your violation of these Terms,
            our Community Guidelines, or any applicable law; your fraudulent, illegal, or
            willfully harmful use of the Service; or your violation of any third party&apos;s
            rights.
          </p>
          <p>
            If you are a parent or legal guardian who has consented to a minor&apos;s use of
            the Service, this indemnity applies to the minor&apos;s acts as if they were your
            own.
          </p>
        </section>

        <section className="privacy-section">
          <h2>13. Governing Law &amp; Dispute Resolution</h2>

          <h3>13.1. Governing Law</h3>
          <p>
            These Terms, and any dispute arising out of or related to them or the Service,
            are governed by the laws of the Hong Kong Special Administrative Region, without
            regard to its conflict-of-laws principles. The application of the United Nations
            Convention on Contracts for the International Sale of Goods is expressly
            excluded.
          </p>

          <h3>13.2. Informal Resolution First</h3>
          <p>
            You and Stratava agree to first attempt to resolve any dispute informally by
            contacting us at{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>{" "}
            with a written description of the dispute and the relief you seek. The Parties
            will negotiate in good faith for at least sixty (60) days before initiating
            arbitration.
          </p>

          <h3>13.3. Binding Arbitration</h3>
          <p>
            If a dispute is not resolved informally, it will be finally resolved by binding
            arbitration administered by the Hong Kong International Arbitration Centre
            (HKIAC) under the HKIAC Administered Arbitration Rules in force at the time. The
            arbitration will be seated in Hong Kong, conducted before one (1) arbitrator,
            conducted in English, and confidential except as required by law or to enforce an
            award.
          </p>

          <h3>13.4. Class Action Waiver</h3>
          <p>
            You and Stratava agree that each may bring claims against the other only in your
            or its individual capacity, and not as a plaintiff or class member in any
            purported class or representative proceeding.
          </p>

          <h3>13.5. Mandatory Consumer Rights</h3>
          <p>
            Nothing in this Section limits any non-waivable rights you have under applicable
            consumer-protection law in your jurisdiction, including the right to bring
            proceedings in the courts of your country of residence where such law requires.
          </p>
        </section>

        <section className="privacy-section">
          <h2>14. Platform-Specific Provisions</h2>

          <h3>14.1. Apple App Store</h3>
          <p>
            If you downloaded the Service from the Apple App Store: these Terms are between
            you and Stratava only, not Apple Inc.; Apple has no obligation to provide
            maintenance or support; Stratava, not Apple, is responsible for addressing
            claims relating to the Service; and Apple and Apple&apos;s subsidiaries are
            third-party beneficiaries of these Terms and may enforce them against you upon
            your acceptance.
          </p>

          <h3>14.2. Google Play Store</h3>
          <p>
            If you downloaded the Service from the Google Play Store: your use is also
            subject to the Google Play Terms of Service; Stratava, not Google LLC, is
            responsible for the Service and its content; and Google is not a third-party
            beneficiary of these Terms.
          </p>
        </section>

        <section className="privacy-section">
          <h2>15. Miscellaneous</h2>
          <p>
            These Terms, together with our Privacy Policy, Community Guidelines, and any
            additional terms applicable to specific features, constitute the entire agreement
            between you and Stratava regarding the Service. We may amend these Terms from
            time to time; for material changes, we will provide reasonable advance notice.
            Your continued use of the Service after the effective date of revised Terms
            constitutes your acceptance.
          </p>
          <p>
            If any provision of these Terms is held invalid or unenforceable, the remaining
            provisions will remain in full force. Stratava&apos;s failure to enforce any
            right or provision is not a waiver. You may not assign or transfer these Terms
            without our prior written consent. Nothing in these Terms creates any agency,
            partnership, or employment relationship between you and Stratava. These Terms are
            made available in English; where we provide translations, the English version
            controls except where applicable consumer-protection law requires otherwise.
          </p>
        </section>

        <div className="privacy-divider" aria-hidden="true" />

        <section className="privacy-section privacy-contact">
          <h2>16. Contact</h2>
          <p>
            For inquiries, complaints, or claims concerning the Service, please contact us at{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>
            .
          </p>
          <p>
            Stratava HK Limited [Registered Address - TBD]
            <br />
            Hong Kong Special Administrative Region
          </p>
          <p>
            The Service is provided by Stratava HK Limited. &copy; 2026 Stratava HK Limited. All
            rights reserved.
          </p>
        </section>
      </section>

      <SiteFooter variant="legal" />
    </main>
  );
}
