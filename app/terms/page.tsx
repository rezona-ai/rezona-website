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
          Effective Date: June 1, 2026
          <br />
          Last Updated: August 5, 2026
        </p>

        <div className="privacy-intro">
          <p>
            These Terms of Service (the &ldquo;Terms&rdquo;) govern your access to and use of
            the Rezona application, website, and related services (collectively, the
            &ldquo;Service&rdquo;). The Service is provided by Stratava HK Limited
            (&ldquo;Stratava,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;),
            a company incorporated in the Hong Kong Special Administrative Region. For the
            purposes of this Agreement, you and Stratava are collectively referred to as the
            &ldquo;Parties,&rdquo; and each individually as a &ldquo;Party.&rdquo;
          </p>
          <p>
            Please read these Terms carefully before using the Service. You accept these Terms
            by ticking the consent box when you create an account or first access the Service.
            By doing so, you confirm that you have read, understood, and agree to be bound by
            these Terms, our Privacy Policy, and any additional terms applicable to specific
            features (including the subscription and payment terms in Sections 8 and 9)
            (collectively, the &ldquo;Agreement&rdquo;). If you do not agree, do not create an
            account or use the Service. Your continued use of the Service after these Terms are
            updated constitutes your renewed acceptance of the Terms then in effect.
          </p>
          <p>
            If you are a minor in your jurisdiction, you may use the Service only after your
            parent or legal guardian has read and agreed to these Terms on your behalf. A
            parent or legal guardian who permits a minor to use the Service agrees to be bound
            by this Agreement and accepts full responsibility for that minor&rsquo;s activities
            on the Service, including all purchases and subscriptions.
          </p>
          <p>If you do not agree to these Terms, you may not access or use the Service.</p>
          <p>
            These Terms refer to, but do not replace, your agreements with the relevant app
            store operator (Apple Inc. or Google LLC), which separately govern your download
            and use of the Service on their platforms and the processing of your payments.
          </p>
        </div>

        <section className="privacy-section">
          <h2>1. The Service</h2>

          <h3>1.1. Overview of the Service</h3>
          <p>
            The Service is an AI platform centered on memeplays &mdash; a brand-new form of
            interactive content that makes memes tappable, playable, and remixable. The Service
            allows users to create, publish, play, and remix memeplays using AI tools; browse
            and engage with community feeds; send and receive private messages and engage in
            social interactions; and use virtual items, subscription plans, and platform
            features.
          </p>

          <h3>1.2. Availability and Changes</h3>
          <p>
            The Service is available through the Apple App Store, the Google Play Store, and
            our official website, and may expand to additional platforms over time. We reserve
            the right to modify, suspend, or discontinue any feature of the Service at any time,
            with or without notice, subject to Section 8 with respect to paid subscriptions.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Eligibility and Parental Consent</h2>

          <h3>2.1. Minimum Age and General Audience</h3>
          <p>
            The Service is directed to a general audience. The Service is not directed to, and
            may not be used by, children under 13 years of age. If you are at least 13 but under
            18 years of age (or below the age of majority in your jurisdiction), you may use the
            Service only if your parent or legal guardian has reviewed and agreed to these Terms
            on your behalf and accepts responsibility for your use, including all purchases and
            subscriptions. By using the Service, you confirm that your use complies with all
            applicable laws and regulations in your jurisdiction, including any age-related
            requirements.
          </p>

          <h3>2.2. Parental Responsibility</h3>
          <p>
            If you are a parent or legal guardian who permits a minor to use the Service, you
            agree to be bound by this Agreement and accept full responsibility for that
            minor&rsquo;s activities on the Service, including all purchases, subscriptions,
            content creation, and interactions. We strongly encourage parents and guardians to
            enable device-level parental controls.
          </p>

          <h3>2.3. Suspension for Violations</h3>
          <p>
            We reserve the right to suspend, restrict, or delete any account if we reasonably
            believe the Service is being used in a manner inconsistent with applicable law or
            these Terms.
          </p>
        </section>

        <section className="privacy-section">
          <h2>3. Account Registration</h2>

          <h3>3.1. Your Responsibilities</h3>
          <p>
            You are solely responsible for maintaining the confidentiality of your account
            credentials, restricting access to your device and account, and all activities and
            content that occur under your account.
          </p>

          <h3>3.2. Third-Party Sign-In</h3>
          <p>
            You may register and sign in through certain third-party services that we make
            available from time to time. The collection, use, and disclosure of your information
            by such third party is governed by that third party&rsquo;s privacy policy.
          </p>

          <h3>3.3. Deactivating Your Account</h3>
          <p>
            We reserve the right to deactivate your account at any time if you fail to comply
            with any provision of these Terms, or if activities occurring on your account, in
            our reasonable judgment, would or might cause damage to or impair the Service,
            infringe or violate any third-party rights, or violate any applicable laws or
            regulations.
          </p>

          <h3>3.4. Deleting Your Account</h3>
          <p>
            If you wish to delete your account, you may do so in the Service via &ldquo;Settings
            -&gt; Delete Account&rdquo; or by contacting{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>
            . Once your account is deleted, you will not be able to reactivate it or retrieve
            any content or information you have shared on the Service, subject to the limitations
            described in Section 4. Deleting your account does not by itself cancel any active
            subscription &mdash; see Section 8.1.
          </p>
        </section>

        <section className="privacy-section">
          <h2>4. Your Content and AI Features</h2>

          <h3>4.1. What &ldquo;Your Content&rdquo; Means</h3>
          <p>
            The Service allows you to create, upload, post, generate (including using AI tools),
            transmit, or otherwise make available memeplays, memes, characters, voice inputs,
            audio, graphics, text, comments, messages, and other materials (collectively,
            &ldquo;Your Content&rdquo;).
          </p>

          <h3>4.2. You Own Your Content</h3>
          <p>
            Except for content that remixes works in which Rezona holds its own intellectual
            property, you retain all rights, title, and interest in and to Your Content.
          </p>

          <h3>4.3. License You Grant to the Service</h3>
          <p>
            To enable the Service to operate, you grant Stratava and our affiliates, successors,
            and service providers a non-exclusive, royalty-free, perpetual, irrevocable,
            transferable, and fully sublicensable worldwide license to host, store, use, copy,
            reproduce, modify, adapt, publish, perform, create derivative works from,
            distribute, and publicly display Your Content, in any form and medium (whether now
            known or later developed), for purposes including: operating, maintaining, and
            improving the Service; researching, developing, and providing new features,
            products, and services, including training, developing, and deploying AI models and
            systems; promoting and publicizing the Service; and enforcing these Terms and
            complying with legal obligations. This Section 4.3 does not limit or affect any
            statutory rights you may have under applicable data protection laws, including your
            right, as described in our Privacy Policy, to object to the use of your AI Inputs for
            model training. If you exercise such rights, this license remains valid for uses
            already made and for uses outside the scope of those rights.
          </p>

          <h3>4.4. License You Grant to Other Users</h3>
          <p>
            By posting Your Content on the Service, you grant each other user a non-exclusive,
            royalty-free worldwide license to access, view, play, and share Your Content within
            the Service. If you enable the remix feature for Your Content, you additionally grant
            other users the right to copy, adapt, and create derivative works from Your Content
            (&ldquo;remix&rdquo;) within the Service.
          </p>
          <p>
            You may turn off the remix feature for your content at any time, after which no new
            remixes may be created. However, any derivative works that other users created
            before you turned off the feature will remain on the Service under the license
            granted at the time of creation.
          </p>

          <h3>4.5. AI Features and Outputs</h3>
          <p>
            The Service offers AI features that generate memeplays, characters, audio, text, or
            other outputs from your inputs (&ldquo;AI Outputs&rdquo;). Any content you submit to
            such AI features (&ldquo;AI Inputs&rdquo;) is treated as &ldquo;Your Content&rdquo;
            under this Section. However, Stratava retains all rights in the AI models and systems
            that generate AI Outputs, and other users may generate similar or identical outputs
            from the same inputs.
          </p>
          <p>
            AI Outputs are provided &ldquo;as is&rdquo; and may be inaccurate, biased, or
            otherwise inappropriate &mdash; you are responsible for reviewing them and deciding
            whether to use or share them. You agree that Stratava may, in accordance with our
            Privacy Policy, use AI Inputs, AI Outputs, and your interactions with the AI features
            to improve and develop our AI systems.
          </p>

          <h3>4.6. Your Commitments Regarding Content</h3>
          <p>
            By posting Your Content, you represent and warrant that: you own Your Content or have
            all rights necessary to grant the licenses above; Your Content does not infringe any
            third-party rights; Your Content complies with these Terms, our Community Guidelines,
            and all applicable laws; and Your Content is not fraudulent, deceptive, or
            misleading. You bear full responsibility for Your Content and the consequences of
            posting it.
          </p>

          <h3>4.7. Deleting Your Content</h3>
          <p>
            You may delete Your Content or your account at any time. However, if Your Content has
            been remixed into other users&rsquo; content, it may remain on the Service. We may
            retain backups or anonymized data for legitimate business, security, or legal
            purposes. Once Your Content has been used to train AI models, we cannot
            &ldquo;untrain&rdquo; the models, but after your deletion we will stop using Your
            Content for new training.
          </p>

          <h3>4.8. Name, Likeness, and Voice</h3>
          <p>
            You grant Stratava a non-exclusive, royalty-free worldwide license to use your
            username, account name, display name, avatar, and voice (as embodied in Your Content)
            in operating, promoting, and publicizing the Service &mdash; including in marketing
            materials, featured content placements, creator program promotions, and
            announcements within and outside the Service.
          </p>

          <h3>4.9. Moral Rights</h3>
          <p>
            To the extent permitted by applicable law, you waive any moral rights (or similar
            rights, including rights of attribution and integrity) you may have in Your Content
            with respect to the licensed uses under Sections 4.3, 4.4, and 4.8. Where such rights
            cannot be waived under applicable law, you agree not to assert them against Stratava,
            its affiliates, sublicensees, or other users acting in accordance with these Terms.
          </p>

          <h3>4.10. Reporting Infringement</h3>
          <p>
            If you believe content on the Service infringes your intellectual property rights,
            you may submit a takedown notice to{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>
            . We will respond to valid notices in accordance with applicable law and Section
            10.3.
          </p>

          <h3>4.11. Survival of Licenses</h3>
          <p>
            The licenses granted under Sections 4.3, 4.4, 4.5, 4.8, 4.12, and 4.13 survive the
            termination of your account, the termination of these Terms, and the discontinuation
            of the Service. Content that was posted, remixed, or used to train AI models before
            termination may continue to exist and be used in accordance with these Terms after
            termination.
          </p>

          <h3>4.12. De-identified and Aggregated Data</h3>
          <p>
            Stratava may create de-identified, anonymized, or aggregated data based on Your
            Content, AI Inputs, AI Outputs, and your use of the Service. Such data does not
            identify you. During and after the term of this Agreement, Stratava may use, retain,
            license, and disclose such data for any lawful purpose, without restriction,
            attribution, or compensation.
          </p>

          <h3>4.13. Feedback</h3>
          <p>
            If you provide us with suggestions, ideas, comments, or other feedback regarding the
            Service (&ldquo;Feedback&rdquo;), you grant Stratava a perpetual, irrevocable,
            worldwide, royalty-free, transferable, and fully sublicensable license to use,
            exploit, and incorporate such Feedback for any purpose, without restriction,
            attribution, or compensation to you. Feedback is not considered your confidential
            information, and we are under no obligation to adopt any Feedback.
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. Acceptable Use and Prohibited Conduct</h2>

          <h3>5.1. General Standard</h3>
          <p>
            You agree to use the Service only for its intended purposes and in compliance with
            these Terms and all applicable laws.
          </p>

          <h3>5.2. What You Must Not Do</h3>

          <h4>5.2.1. Content Prohibitions</h4>
          <ul>
            <li>
              Post content that is unlawful, defamatory, obscene, pornographic, sexually
              explicit, threatening, abusive, harassing, hateful, or discriminatory, or that
              promotes violence or self-harm.
            </li>
            <li>
              Post content that sexualizes, exploits, endangers, or grooms minors in any way,
              including AI-generated depictions.
            </li>
            <li>
              Content that depicts a real, identifiable person in a misleading, defamatory,
              sexualized, or harmful manner without that person&rsquo;s consent.
            </li>
            <li>
              Content that infringes any third party&rsquo;s intellectual property, privacy, or
              other rights.
            </li>
            <li>
              Content that contains any person&rsquo;s personal or private information that
              could lead to harm.
            </li>
            <li>Content that constitutes harassment, bullying, stalking, or threats.</li>
          </ul>

          <h4>5.2.2. Conduct Prohibitions</h4>
          <ul>
            <li>
              Impersonate any person or entity, including Stratava employees, Service personnel,
              Rezonasaur, or representatives of any other platform or IP.
            </li>
            <li>
              Create or maintain accounts using false or misleading information, or operate
              multiple accounts in violation of our policies.
            </li>
            <li>
              Collect, scrape, or harvest information about other users without express
              permission.
            </li>
            <li>
              Engage in any conduct that exploits or attempts to harm minors, including grooming
              or solicitation.
            </li>
            <li>Promote or facilitate illegal activities.</li>
            <li>
              Use virtual items to solicit prohibited content or personal information, or to
              conduct any exchange beyond the intended functionality of the Service.
            </li>
          </ul>

          <h4>5.2.3. Technical and Security Prohibitions</h4>
          <ul>
            <li>
              Reverse engineer, decompile, or disassemble the Service, except as expressly
              permitted by applicable law.
            </li>
            <li>
              Remove, circumvent, or interfere with any security, authentication, or content
              moderation features.
            </li>
            <li>Upload or transmit viruses, malware, or any other harmful code.</li>
            <li>
              Use bots, scrapers, or other automated means to access or interact with the
              Service.
            </li>
            <li>
              Manipulate identifiers to disguise the origin of Your Content or your activities.
            </li>
            <li>
              Attempt to bypass any age gates, parental controls, or other access controls.
            </li>
          </ul>

          <h4>5.2.4. Commercial and Economic Prohibitions</h4>
          <ul>
            <li>Send spam, chain messages, or unsolicited commercial communications.</li>
            <li>
              Buy, sell, trade, or transfer Service accounts, virtual items, subscriptions, or
              other Service benefits outside the Service.
            </li>
            <li>
              Engage in fraud, chargeback abuse, refund abuse, or unauthorized payment
              activities.
            </li>
            <li>
              Operate multiple accounts or use technical means to repeatedly obtain free
              allowances, or otherwise abuse the usage allowance system (see Section 8.4).
            </li>
            <li>
              Artificially inflate follower counts, engagement metrics, or leaderboard rankings.
            </li>
          </ul>

          <h3>5.3. Enforcement</h3>
          <p>
            We may at any time review, screen, moderate, remove, restrict, or decline to display
            any content; suspend, restrict, or terminate accounts; limit access to any feature;
            and cooperate with law enforcement where required by law. Where reasonably
            practicable, we will provide an appeal channel through{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>
            .
          </p>

          <h3>5.4. Export and Sanctions Compliance</h3>
          <p>
            You represent and warrant that you are not located in, a national or resident of, or
            habitually using the Service in any country or region subject to comprehensive trade
            sanctions, and that you are not a person or entity restricted or prohibited from
            transacting under applicable sanctions, export control, or anti-money laundering
            laws. You agree not to use the Service in violation of any such laws.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Termination and Suspension</h2>

          <h3>6.1. Termination by You</h3>
          <p>
            You may stop using the Service at any time. You may delete your account via
            &ldquo;Settings -&gt; Delete Account&rdquo; or by contacting{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>
            . Deleting your account does not by itself cancel an active subscription; you must
            also cancel the subscription through the channel where you purchased it in accordance
            with Section 8.1.
          </p>

          <h3>6.2. Termination by Us</h3>
          <p>
            We may suspend, restrict, or terminate your account or your access to all or part of
            the Service, with or without notice, if: you violate these Terms, our Community
            Guidelines, or any applicable law; your conduct creates a risk of harm to other
            users, Stratava, or third parties; you engage in fraud, chargeback abuse, refund
            abuse, or unauthorized payment activities; we are required to do so by law, court
            order, or a governmental authority; or we discontinue the Service or a related
            feature.
          </p>

          <h3>6.3. Appeals and Effect of Termination</h3>
          <p>
            If your account is suspended or terminated, you may contact{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>{" "}
            to request a review. We will respond in good faith within a reasonable time. Upon
            termination, your right to access and use the Service ends immediately, your virtual
            items and any unused usage allowances will be forfeited in accordance with Sections
            7.6 and 8.3 (except where a refund is required by law), and the licenses in Sections
            4.3 and 4.4 continue in effect in accordance with their terms.
          </p>
        </section>

        <section className="privacy-section">
          <h2>7. Virtual Items</h2>

          <h3>7.1. What Virtual Items Are</h3>
          <p>
            The Service offers virtual items and digital content (collectively, &ldquo;Virtual
            Items&rdquo;), which may be accessed or used within the Service. Virtual Items enable
            users to use platform features, support creators, and obtain digital content within
            the Service.
          </p>
          <p>
            Virtual Items are digital content provided by Stratava that may be purchased with
            real currency or granted as part of a subscription, and may be used only within the
            Service. They have no monetary value outside the Service and do not constitute
            currency, legal tender, securities, or any form of financial instrument. All Virtual
            Items (and their associated benefits or features) are granted to you only as a
            limited, revocable, non-transferable license to use such digital content within the
            Service solely for personal, non-commercial purposes.
          </p>

          <h3>7.2. Purchasing Virtual Items</h3>
          <p>
            Virtual Item prices will be displayed to you within the Service at the time of
            purchase, before you confirm the transaction. All charges and payments for Virtual
            Items are made through the authorized third-party payment merchants and platform
            providers described in Section 9.1. Currency conversion settlement, cross-border
            transaction fees, and payment channel fees (if any) are governed by your agreement
            with the relevant payment provider. Stratava does not directly receive, store, or
            process your payment card information.
          </p>
          <p>
            We reserve the right to modify the pricing, availability, and composition of Virtual
            Items at any time, with reasonable notice.
          </p>

          <h3>7.3. Nature and Restrictions</h3>
          <p>Virtual Items:</p>
          <ul>
            <li>
              Have no equivalent real-currency value and are not currency or any form of
              financial instrument.
            </li>
            <li>
              Are not redeemable for cash or exchangeable for legal tender, except as required by
              applicable law.
            </li>
            <li>
              May not be transferred, sold, traded, gifted, or exchanged outside the Service,
              except where we expressly enable such features.
            </li>
            <li>Are exclusive to your account and are not your property.</li>
            <li>Do not expire due to inactivity, except for promotional Virtual Items.</li>
          </ul>

          <h3>7.4. Refunds and Change of Mind</h3>
          <p>
            If you purchased Virtual Items through the Apple App Store or the Google Play Store,
            any refund or cancellation request must be made to the relevant store and is subject
            to its refund policies. Refund requests for Virtual Items purchased through our
            website should be submitted to{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>{" "}
            and are handled in accordance with Section 8.3.
          </p>
          <p>
            When you submit a refund request, we may freeze the Virtual Items corresponding to
            your requested refund. If your refund request is successful, we will deduct the
            relevant Virtual Items from your account. If the balance in your account is
            insufficient for the deduction, we reserve the right to deduct the corresponding
            amount from Virtual Items you purchase in the future.
          </p>
          <p>
            Except as described above, all sales of Virtual Items are final. Except as described
            above or as required by applicable law, we do not provide refunds.
          </p>

          <h3>7.5. Promotional Virtual Items</h3>
          <p>
            We may from time to time grant Virtual Items for promotional purposes. Such
            promotional Virtual Items are granted at our discretion, may be subject to additional
            terms and validity periods disclosed at the time of grant, are non-refundable in all
            circumstances, and have no cash value.
          </p>

          <h3>7.6. Fraud, Errors, and Abuse</h3>
          <p>
            We reserve the right to correct any errors in Virtual Item balances, and to suspend,
            freeze, or revoke Virtual Items where we reasonably suspect fraud, chargeback abuse,
            refund abuse, account compromise, or a violation of these Terms.
          </p>

          <h3>7.7. Termination of License</h3>
          <p>
            If you violate these Terms or any Service policy, or if your account is suspended,
            terminated, or deleted, your limited license to use Virtual Items terminates. In such
            cases, we are not required to refund any Virtual Items or amounts spent, except as
            required by law.
          </p>

          <h3>7.8. Removal of Virtual Content</h3>
          <p>
            We have the right, in our sole discretion, to suspend or remove any Virtual Items
            from the Service and your account without prior notice. Except as required by law, we
            are not liable for any loss resulting from such removal.
          </p>
        </section>

        <section className="privacy-section">
          <h2>8. Subscriptions</h2>

          <h3>8.1. Subscription Plans</h3>
          <p>
            The Service offers optional paid subscription plans (each, a &ldquo;Subscription&rdquo;)
            and related paid features. The specific plans available to you, their prices, billing
            periods, included benefits and usage allowances, free trial terms (if any), and the
            applicable purchase, renewal, upgrade, downgrade, and cancellation rules are displayed
            within the Service after you log in, and may differ depending on whether you access
            the Service through the app or through our website. Subscriptions purchased through
            the app and Subscriptions purchased through our website are separate offerings: their
            prices and benefits may differ, and benefits obtained through one channel cannot be
            transferred to, combined with, or redeemed through the other channel. Unless otherwise
            stated at the time of purchase, Subscriptions renew automatically at the end of each
            billing period and the payment method associated with your purchase channel will be
            charged the then-current price, until you cancel; you may cancel at any time before
            the end of the current billing period through the channel where you purchased (for app
            purchases, via your Apple or Google account settings; for website purchases, via your
            account settings on our website or by contacting{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>
            ), and cancellation takes effect at the end of the current paid period.
          </p>

          <h3>8.2. Price and Plan Changes</h3>
          <p>
            We or the relevant app store may change Subscription prices, and we may change the
            composition of plans, benefits, allowances, or model access. If we increase the
            recurring price of your Subscription or materially reduce a core benefit, we will give
            reasonable advance notice and, where required by the relevant platform or applicable
            law, obtain your consent or give you the opportunity to cancel before the change takes
            effect. If you do not agree to a price increase, you may cancel before it takes
            effect; continuing to subscribe after the change takes effect constitutes your
            acceptance of the new price.
          </p>

          <h3>8.3. Refunds</h3>
          <p>
            (a) Subscription made through the Apple App Store or the Google Play Store are subject
            to those stores&rsquo; refund and cancellation policies, and refund or cancellation
            requests must be made to the relevant store (not Stratava). Stratava does not process
            such payments and cannot directly issue store refunds.
          </p>
          <p>
            (b) Refund requests for purchases made through our website should be submitted to{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>
            . Except as required by applicable law or as expressly provided in these Terms,
            amounts paid for a purchase made through our website are non-refundable once the
            relevant Subscription period has begun or the relevant digital content has been
            credited to your account.
          </p>
          <p>
            (c) Nothing in these Terms excludes any non-waivable refund or cancellation rights you
            may have under the consumer protection laws of your place of residence.
          </p>
          <p>
            (d) Refund Recoupment. If you obtain a refund for a Subscription or other paid feature
            after having consumed part of the related usage allowance, the consumed portion cannot
            be recovered and your account may show a negative Usage balance. In that case,
            generation will be suspended (browsing and playing are unaffected) until your next
            daily free allowance, next Subscription grant, or next purchase makes up the
            shortfall. If we reasonably suspect fraud, refund abuse, or a violation of these
            Terms, we may also freeze, adjust, or revoke usage allowances, Virtual Items, or
            benefits and restrict further purchases, as described in Sections 7.6 and 8.4.
          </p>

          <h3>8.4. Fair Use and Anti-Abuse</h3>
          <p>
            Usage allowances and free allowances are intended solely for ordinary personal use of
            the Service. We may employ technical measures (including device-level checks) to
            prevent the repeated acquisition of free allowances through the operation of multiple
            accounts, and may take the measures described in Sections 5.3, 6.2, and 7.6 where
            abuse is detected. Usage is subject to the per-task limits and concurrency limits
            described within the Service; your available balance is the primary limit on Usage,
            and we do not impose hourly or weekly time-window rate limits unless otherwise stated
            within the Service.
          </p>

          <h3>8.5. Taxes, Regional Pricing, and Account Binding</h3>
          <p>
            Prices displayed at the time of purchase may or may not include applicable taxes,
            depending on your location and the settings of the relevant purchase channel; you are
            responsible for any taxes, duties, or governmental charges related to your purchases.
            Regional prices are automatically mapped from app store price tiers; the price
            displayed to you at the time of purchase is the price you will be charged.
            Subscriptions, usage allowances, and Virtual Items are bound to your account and,
            where applicable, to your app store account, and are shared only across devices on
            which you yourself are signed in. Subscriptions do not currently support Apple Family
            Sharing.
          </p>
        </section>

        <section className="privacy-section">
          <h2>9. Payment Terms</h2>

          <h3>9.1. Payment Processing</h3>
          <p>
            All payments for Subscriptions, other paid features, and Virtual Items are processed
            by the authorized third-party payment merchants and platform providers through which
            the Service is distributed, not by Stratava. Your payments are subject to the terms
            and conditions of the relevant payment merchant or platform provider.
          </p>

          <h3>9.2. Taxes</h3>
          <p>
            Prices may or may not include applicable taxes, depending on your location and the
            display settings of the relevant platform provider. You are responsible for any
            taxes, duties, or governmental charges related to your purchases.
          </p>

          <h3>9.3. Payment Failures and Transaction Issues</h3>
          <p>
            Payment failures, duplicate charges, and other transaction errors are handled and
            managed by the relevant authorized third-party payment merchant or platform provider,
            not Stratava. If you experience a payment failure, duplicate charge, or any other
            transaction issue, you must contact the relevant payment merchant or platform provider
            directly.
          </p>
          <p>
            Stratava is not responsible for resolving payment processing errors and does not have
            access to your payment transaction data. Once the relevant provider confirms and
            verifies a transaction error, we will adjust your Subscription status accordingly.
          </p>

          <h3>9.4. User Authorization and Acknowledgment of Risk</h3>
          <p>
            By making any purchase, you confirm that you have read and agree to the applicable
            terms of service and privacy policy of the relevant authorized payment merchant or
            platform provider processing your purchase. You acknowledge that your payment
            transactions are governed solely by that provider&rsquo;s terms and policies, and
            that, except to the extent that liability cannot be excluded under applicable law,
            Stratava is not liable for any issues, losses, or disputes arising out of or relating
            to your agreement with, or use of, any third-party payment merchant or platform
            provider.
          </p>

          <h3>9.5. Disputed Payments and Chargebacks</h3>
          <p>
            If you have a question about a purchase, please contact us first at{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>
            . If a chargeback or payment reversal is initiated, we may suspend or restrict your
            account&rsquo;s ability to make further purchases, adjust your Subscription to reflect
            the reversed payment, and, in cases of repeated or fraudulent chargebacks, suspend or
            terminate your account.
          </p>
        </section>

        <section className="privacy-section">
          <h2>10. Intellectual Property</h2>

          <h3>10.1. Intellectual Property of the Service</h3>
          <p>
            All elements of the Service &mdash; including its name, Rezonasaur (Rezona&rsquo;s
            orange mascot), logos, designs, trade dress, underlying technology, AI models, and all
            platform-generated content &mdash; are the property of Stratava and are protected by
            applicable intellectual property laws. Except as expressly provided in this Agreement,
            this Agreement grants you no rights in the Service&rsquo;s intellectual property.
          </p>

          <h3>10.2. Your Obligations</h3>
          <p>
            You may only post content that you own, created, or have the right to use. Without the
            rights holder&rsquo;s permission, you may not share copyrighted music, videos, or
            images belonging to others; content belonging to other creators on the Service or
            originating from other platforms without permission; trademarked characters, logos, or
            brand assets used in an unauthorized or misleading manner; or content subject to
            confidentiality agreements, injunctions, or unpublished-material restrictions.
          </p>

          <h3>10.3. Intellectual Property Complaints</h3>
          <p>
            If you believe content on the Service infringes your intellectual property rights,
            please send a written notice to{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>{" "}
            including: your contact information; a description of the rights you claim have been
            infringed; identification of the allegedly infringing content and its location on the
            Service; a statement of your good-faith belief that the use is not authorized by the
            rights holder, its agent, or the law; and confirmation that the information in your
            notice is accurate and that you are the rights holder or authorized to act on the
            rights holder&rsquo;s behalf. Upon receiving a valid notice, we may remove or restrict
            access to the content and notify the responsible user.
          </p>

          <h3>10.4. Review and Repeat Infringers</h3>
          <p>
            If your content was removed following an intellectual property complaint and you
            believe this was a mistake, you may contact{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>{" "}
            to request a review, and we may restore the content where we consider it appropriate.
            We will suspend or terminate the accounts of users we determine to be repeat
            infringers.
          </p>
        </section>

        <section className="privacy-section">
          <h2>11. Disclaimers</h2>

          <h3>11.1. Service Provided &ldquo;As Is&rdquo;</h3>
          <p>
            To the maximum extent permitted by applicable law, the Service (including all
            features, content, AI Outputs, Subscriptions, and Virtual Items) is provided on an
            &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis, without warranties of any
            kind. Stratava expressly disclaims all warranties of merchantability, fitness for a
            particular purpose, non-infringement, and accuracy.
          </p>

          <h3>11.2. No Warranty of Service Quality</h3>
          <p>
            Stratava does not warrant that the Service will meet your requirements, or that it
            will be uninterrupted, timely, secure, or error-free. Your use of the Service, and
            your interactions with content created by others, are at your own risk. Stratava does
            not endorse any user content, opinions, recommendations, or views expressed by users,
            and disclaims all liability in connection with user content.
          </p>

          <h3>11.3. AI Outputs</h3>
          <p>
            AI Outputs are generated by automated systems and may be inaccurate, biased,
            offensive, or otherwise inappropriate. Stratava makes no warranties as to the quality,
            accuracy, originality, or suitability for any purpose of any AI Output.
          </p>

          <h3>11.4. Beta and Preview Features</h3>
          <p>
            We may offer features, models, or programs identified as beta, preview, early-access,
            or &ldquo;early bird&rdquo; (&ldquo;Preview Features&rdquo;). Preview Features are
            provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis for
            evaluation, may be changed, suspended, or withdrawn at any time without notice, may not
            function as intended, and are excluded from any service commitments or availability
            expectations. Your use of Preview Features is at your own risk.
          </p>

          <h3>11.5. Third-Party Links and Services</h3>
          <p>
            The Service may contain links to, or interoperate with, third-party websites or
            services. Stratava does not control and is not responsible for any third-party content
            or services.
          </p>

          <h3>11.6. Force Majeure</h3>
          <p>
            Stratava is not liable for any failure or delay in performing its obligations or
            providing the Service caused by events beyond our reasonable control, including acts of
            God, natural disasters, epidemics or pandemics, war, civil unrest, governmental
            actions, labor disputes, telecommunications or internet infrastructure failures, power
            outages, or failures of third-party services or platforms.
          </p>

          <h3>11.7. Mandatory Consumer Rights</h3>
          <p>
            Nothing in this Section limits any non-waivable rights you may have under applicable
            consumer protection laws in your jurisdiction, including, to the extent applicable, any
            implied terms as to quality or fitness under the Sale of Goods Ordinance (Cap. 26) or
            the Supply of Services (Implied Terms) Ordinance (Cap. 457).
          </p>
        </section>

        <section className="privacy-section">
          <h2>12. Limitation of Liability</h2>

          <h3>12.1. Liability Cap</h3>
          <p>
            To the maximum extent permitted by applicable law, the total aggregate liability of
            Stratava, its affiliates, and their respective officers, directors, employees, agents,
            and licensors arising out of or relating to the Service or these Terms (whether in
            contract, tort (including negligence), statute, or otherwise) shall not exceed the
            greater of: (a) the total amount you paid to Stratava for the Service (through the
            relevant purchase channel) in the 12 months preceding the event giving rise to the
            claim; or (b) USD 100 (or its local currency equivalent).
          </p>

          <h3>12.2. Exclusion of Indirect Losses</h3>
          <p>
            To the maximum extent permitted by applicable law, Stratava, its affiliates, and their
            respective officers, directors, employees, agents, and licensors shall not be liable
            for any indirect, incidental, special, consequential, exemplary, or punitive damages
            (including loss of profits, loss of data, loss of goodwill, or business interruption)
            arising out of or relating to your use of the Service, regardless of the legal theory
            on which the claim is based.
          </p>
          <p>
            This includes, without limitation, damages arising from user content created by
            others, AI Outputs, loss of Your Content, third-party services, unauthorized access to
            your account (except where caused by Stratava&rsquo;s gross negligence or willful
            misconduct), or disputes between users.
          </p>

          <h3>12.3. Non-Excludable Liability</h3>
          <p>
            Nothing in these Terms limits or excludes any liability that cannot be limited or
            excluded under applicable law, including liability arising from fraud, willful
            misconduct, gross negligence, or death or personal injury caused by negligence. In
            Hong Kong, any exclusion or limitation of liability is subject to the Control of
            Exemption Clauses Ordinance (Cap. 71), including its reasonableness requirements for
            consumer contracts; the cap in Section 12.1 and the exclusions in Section 12.2 apply
            only to the extent reasonable and permitted under that Ordinance.
          </p>
        </section>

        <section className="privacy-section">
          <h2>13. Indemnification</h2>

          <h3>13.1. Your Indemnity</h3>
          <p>
            To the maximum extent permitted by applicable law, you agree to defend, indemnify, and
            hold harmless Stratava, its affiliates, and their respective officers, directors,
            employees, agents, and licensors from and against all claims, losses, liabilities,
            costs, and expenses (including reasonable attorneys&rsquo; fees) arising from: Your
            Content; your violation of these Terms, our Community Guidelines, or any applicable
            law; your fraudulent, unlawful, or intentionally harmful use of the Service; or your
            infringement of any third-party rights.
          </p>

          <h3>13.2. Guardian Indemnity</h3>
          <p>
            If you are a parent or legal guardian who has consented to a minor&rsquo;s use of the
            Service, this indemnity applies to that minor&rsquo;s conduct as if it were your own.
          </p>
        </section>

        <section className="privacy-section">
          <h2>14. Governing Law and Dispute Resolution</h2>

          <h3>14.1. Governing Law</h3>
          <p>
            These Terms, and any dispute arising out of or relating to them or the Service, are
            governed by the laws of the Hong Kong Special Administrative Region, without regard to
            its conflict of laws principles.
          </p>

          <h3>14.2. Informal Resolution First</h3>
          <p>
            You and Stratava agree to first attempt to resolve any dispute informally by
            contacting us at{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>{" "}
            with a written description of the dispute and the relief you seek. The Parties will
            negotiate in good faith for at least sixty (60) days before commencing arbitration.
          </p>

          <h3>14.3. Binding Arbitration</h3>
          <p>
            If a dispute is not resolved informally, it will be finally resolved by binding
            arbitration administered by the Hong Kong International Arbitration Centre (HKIAC)
            under the HKIAC Administered Arbitration Rules in force when the arbitration is
            commenced. The seat of arbitration will be Hong Kong, the arbitration will be conducted
            by one (1) arbitrator in English, and it will be kept confidential except as required
            by law or to enforce an award.
          </p>

          <h3>14.4. Exceptions to Arbitration</h3>
          <p>
            Notwithstanding Section 14.3, (a) either Party may bring an individual claim before
            any court or tribunal of competent jurisdiction (including the Small Claims Tribunal)
            for claims within that body&rsquo;s jurisdiction; and (b) either Party may seek urgent
            interim, injunctive, or other equitable relief from the Hong Kong courts without
            thereby waiving the arbitration agreement.
          </p>

          <h3>14.5. Class Action Waiver</h3>
          <p>
            You and Stratava agree that each Party may bring claims against the other only in its
            individual capacity, and not as a plaintiff or class member in any purported class or
            representative proceeding.
          </p>

          <h3>14.6. Mandatory Consumer Rights</h3>
          <p>
            Nothing in this Section limits any non-waivable rights you have under applicable
            consumer protection laws in your jurisdiction, including, where required by such laws,
            the right to bring proceedings in the courts of your country of residence.
          </p>
        </section>

        <section className="privacy-section">
          <h2>15. Platform-Specific Terms</h2>

          <h3>15.1. Apple App Store</h3>
          <p>
            If you download the Service from the Apple App Store: these Terms exist solely between
            you and Stratava, not Apple Inc.; Apple has no obligation to provide maintenance or
            support; Stratava, not Apple, is responsible for addressing claims relating to the
            Service; and Apple and Apple&rsquo;s subsidiaries are third-party beneficiaries of
            these Terms and may enforce them against you upon your acceptance of these Terms.
          </p>

          <h3>15.2. Google Play Store</h3>
          <p>
            If you download the Service from the Google Play Store: your use is also subject to the
            Google Play Terms of Service; Stratava, not Google LLC, is responsible for the Service
            and its content; and Google is not a third-party beneficiary of these Terms.
          </p>
        </section>

        <section className="privacy-section">
          <h2>16. Miscellaneous</h2>

          <h3>16.1. Entire Agreement and Amendments</h3>
          <p>
            These Terms, together with our Privacy Policy, Community Guidelines, and any additional
            terms applicable to specific features, constitute the entire agreement between you and
            Stratava regarding the Service. We may amend these Terms from time to time; for
            material changes (including changes to Subscription pricing or core benefits), we will
            give reasonable advance notice in accordance with Section 8.2. Your continued use of
            the Service after the effective date of the amended Terms constitutes your acceptance.
          </p>

          <h3>16.2. Electronic Communications</h3>
          <p>
            You agree to receive these Terms, notices, disclosures, billing information, and other
            communications from us electronically &mdash; including through messages, email, or
            posting within the Service &mdash; and agree that such electronic communications
            satisfy any legal requirement that communications be in writing.
          </p>

          <h3>16.3. Notices</h3>
          <p>
            We may give you notices relating to the Service through messages within the Service, by
            sending them to the email address associated with your account, or by posting within
            the Service; such notices are deemed delivered when sent or posted. You must send
            formal legal notices to Stratava at{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>{" "}
            and, once our registered address is published, also to that address.
          </p>

          <h3>16.4. Third-Party Rights (Contracts (Rights of Third Parties) Ordinance)</h3>
          <p>
            Except as expressly provided in these Terms, a person who is not a party to these
            Terms has no right under the Contracts (Rights of Third Parties) Ordinance (Cap. 623)
            to enforce any provision of these Terms. Notwithstanding the foregoing, (a)
            Stratava&rsquo;s affiliates and their respective officers, directors, employees,
            agents, and licensors may enforce Sections 11, 12, and 13; and (b) Apple Inc. and its
            subsidiaries may enforce these Terms to the extent described in Section 15.1. No
            consent of any such third party is required to vary, rescind, or terminate these
            Terms.
          </p>

          <h3>16.5. Assignment</h3>
          <p>
            You may not assign these Terms or any of your rights or obligations under them without
            our prior written consent. We may assign these Terms, in whole or in part, to an
            affiliate, or in connection with a merger, acquisition, corporate reorganization, or
            sale of assets, without your consent. These Terms bind and benefit the Parties and
            their permitted successors and assigns.
          </p>

          <h3>16.6. General Provisions</h3>
          <p>
            If any provision of these Terms is held invalid or unenforceable, the remaining
            provisions remain in full force and effect, and the invalid provision will be modified
            to the minimum extent necessary to make it enforceable. Stratava&rsquo;s failure to
            enforce any right or provision does not constitute a waiver. These Terms do not create
            any agency, partnership, or employment relationship between you and Stratava. These
            Terms are provided in English; if we provide a translation, the English version
            prevails except as otherwise required by applicable consumer protection law. Section
            headings are for convenience only. Any provisions that by their nature should survive
            termination (including Sections 4, 7, 8.3, 11, 12, 13, 14, and 16) survive the
            termination of these Terms.
          </p>
        </section>

        <div className="privacy-divider" aria-hidden="true" />

        <section className="privacy-section privacy-contact">
          <h2>17. Contact Us</h2>

          <h3>17.1. How to Contact Us</h3>
          <p>
            For inquiries, complaints, or claims relating to the Service, please contact us at{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              support@rezona.ai
            </a>
            .
          </p>

          <h3>17.2. Provider Information</h3>
          <p>
            Stratava HK Limited
            <br />
            Room 1006, 10/F, Po Yip Building, 23 Hing Yip Street, Kwun Tong, Hong Kong
            <br />
            Hong Kong Special Administrative Region
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
