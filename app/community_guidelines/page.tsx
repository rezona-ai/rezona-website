import type { Metadata } from "next";
import "../legal-pages.css";
import LegalHeader from "../components/legal-header";
import SiteFooter from "../components/site-footer";
import { createPageMetadata } from "../shared-metadata";

export const metadata: Metadata = createPageMetadata();

export default function CommunityGuidelinesPage() {
  return (
    <main className="privacy-page terms-page community-guidelines-page">
      <LegalHeader />

      <section className="privacy-content-shell">
        <div className="privacy-title-block">
          <p className="privacy-brand">
            REZONA.<wbr />
            AI
          </p>
          <h1 className="privacy-title">Community Guidelines</h1>
        </div>

        <p className="privacy-date">Last updated: 01 June 2026</p>

        <div className="privacy-intro">
          <p>
            Rezona is built for chaos, but even chaos has rules. These guidelines apply to
            everything on the platform: memeplays, comments, DMs, reactions, and how things
            get chaotic. Read them, know them, play by them.
          </p>
          <p>
            Rezona is the home of memeplays: interactive, tappable, playable memes. We are
            open to users of all ages, with tiered protections in place to ensure everyone
            can create, play, and connect safely. These guidelines are enforced by Rezona&apos;s
            Safety team, which reviews reports and takes action to maintain a platform that
            works for the whole community.
          </p>
          <p>
            In addition to these guidelines, users can use Rezona&apos;s built-in safety tools,
            including blocking and reporting, to manage their own experience and flag content
            that breaks our rules.
          </p>
        </div>

        <section className="privacy-section">
          <h2>1. Age &amp; Account Requirements</h2>
          <p>
            Rezona is intended for a general audience. By creating an account, you confirm
            that you meet the minimum age requirement applicable in your country or region,
            or that you have obtained the consent of a parent or legal guardian to use the
            Service. Parents and guardians are responsible for supervising minors in their
            care and ensuring their use of the platform complies with these guidelines.
            Rezona reserves the right to suspend or remove any account found to be in
            violation of applicable age requirements.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Content Standards</h2>
          <p>
            Rezona supports a wide range of creative content, but certain types of content
            are strictly prohibited due to the nature of our platform and the safety of our
            community.
          </p>

          <h3>What&apos;s Welcome</h3>
          <p>
            Rezona exists for memeplays, memes, remixes, and creative content that is
            playful, weird, and chaotic. Infrequent cartoon or fantasy violence and crude
            humor are permitted within the boundaries of our store age rating. Internet
            culture, brainrot humor, absurdist creativity, and niche content are all welcome
            here.
          </p>

          <h3>Sexual &amp; Explicit Content</h3>
          <p>
            Rezona has a zero-tolerance policy for sexual, explicit, or suggestive content.
            This applies to all formats across the platform: memeplays, images, video,
            audio, and text.
          </p>
          <p>For example, you may not post or share:</p>
          <ul>
            <li>Content that depicts, implies, or simulates sexual acts in any form.</li>
            <li>
              Sexually suggestive content directed at or involving any user, including
              through camera focus or framing.
            </li>
            <li>Solicitation of sexual content, services, or interactions in any form.</li>
          </ul>

          <h3>Content Endangering Minors</h3>
          <p>
            Any content that sexualizes, exploits, endangers, or targets minors will result
            in immediate permanent account suspension and will be reported to the National
            Center for Missing and Exploited Children (NCMEC) or the applicable local
            authority. There are no exceptions and no appeals for violations in this
            category.
          </p>
          <p>Examples of prohibited content include:</p>
          <ul>
            <li>Sexually explicit or suggestive material featuring minors.</li>
            <li>
              Content that facilitates grooming, inappropriate interaction, or isolation of
              a minor from trusted adults.
            </li>
            <li>Sharing links to third-party content that violates this policy.</li>
          </ul>

          <h3>Violence &amp; Graphic Content</h3>
          <p>
            Rezona permits infrequent cartoon or fantasy violence consistent with its store
            age rating. Realistic depictions of violence, gore, or real-world harm are not
            permitted.
          </p>
          <p>For example, you may not post:</p>
          <ul>
            <li>Content depicting real injury, death, or mutilation.</li>
            <li>Threats of physical harm directed at any individual or group.</li>
            <li>Content that encourages others to engage in violent acts.</li>
          </ul>

          <h3>Harmful &amp; Dangerous Content</h3>
          <p>
            Rezona does not allow content that glorifies, promotes, or provides instruction
            for behaviors that endanger the physical or mental wellbeing of users. We do not
            make exceptions for content framed as a joke or meant to entertain when the
            behavior could reasonably cause harm.
          </p>
          <p>For example, you may not post content that includes:</p>
          <ul>
            <li>Glorification or promotion of self-harm or suicide.</li>
            <li>Promotion of eating disorders or dangerous dietary practices.</li>
            <li>
              Encouragement of dangerous stunts, substance abuse, or other physically
              harmful behavior.
            </li>
          </ul>
          <p>
            If you or someone you know is struggling, please reach out to a mental health
            professional, a trusted adult, or a local crisis support service.
          </p>

          <h3>Hate Speech &amp; Discrimination</h3>
          <p>
            Rezona has a zero-tolerance policy for hateful conduct motivated by intolerance
            or prejudice based on protected characteristics, including race, ethnicity,
            gender, gender identity, sexual orientation, religion, disability, age, and
            veteran status.
          </p>
          <p>Users are prohibited from:</p>
          <ul>
            <li>
              Using hateful slurs or posting content that dehumanizes individuals or groups
              based on protected characteristics.
            </li>
            <li>
              Promoting or glorifying discrimination, segregation, or violence against any
              protected group.
            </li>
            <li>Perpetuating harmful stereotypes through content or memeplays.</li>
          </ul>

          <h3>Misinformation</h3>
          <p>
            To protect the safety of our community, Rezona prohibits the spread of harmful
            misinformation. This includes health misinformation, safety-related falsehoods,
            and civic misinformation that could cause real-world harm or undermine public
            trust.
          </p>
        </section>

        <section className="privacy-section">
          <h2>3. Community Behavior</h2>

          <h3>Respect &amp; Civility</h3>
          <p>
            Rezona&apos;s tone is chaotic, weird, and unhinged, but it is not cruel. All
            users are expected to treat each other with basic respect. Targeted attacks,
            personal cruelty, and deliberate harm directed at another user are not the same
            as internet humor, and will be treated as violations.
          </p>

          <h3>Harassment &amp; Bullying</h3>
          <p>
            Harassment can take many forms, including personal attacks, repeated unwanted
            contact, and content designed to demean or intimidate a specific individual.
            Rezona takes harassment seriously and will take enforcement action against any
            account engaging in such behavior.
          </p>
          <p>For example, you may not:</p>
          <ul>
            <li>Send repeated unwanted messages or contact to another user.</li>
            <li>Post content that attacks, mocks, or degrades a specific individual.</li>
            <li>Coordinate or encourage others to target a specific user.</li>
          </ul>

          <h3>Impersonation</h3>
          <p>
            To protect the integrity of our platform and the safety of our users,
            impersonation is strictly prohibited on Rezona. This includes impersonating
            individuals, creators, celebrities, companies, and organizations.
          </p>
          <p>For example, you may not:</p>
          <ul>
            <li>Claim to be a Rezona staff member or represent Rezona officially.</li>
            <li>Create an account designed to impersonate another Rezona user or public figure.</li>
            <li>Impersonate Rezonasaur or use Rezona&apos;s brand assets to mislead others.</li>
            <li>
              Pose as a representative of an external platform or IP, such as TikTok,
              Roblox, or YouTube, or their associated characters and properties.
            </li>
          </ul>

          <h3>Comments &amp; Reactions</h3>
          <p>
            All comments, photo reactions, and text responses must comply with the content
            standards in Section 2. You may not use comments or reactions to harass other
            users, spam a creator&apos;s content, or flood sections with repetitive or unwanted
            messages.
          </p>

          <h3>DMs &amp; Direct Sharing</h3>
          <p>
            Direct messaging on Rezona is available between mutual followers only. Users who
            do not follow each other are limited to 3 messages before a mutual follow is
            required to continue the conversation. This is an intentional safety feature.
          </p>
          <p>
            Sending prohibited content, including explicit material, threats, or harassment,
            via DMs is a violation of these guidelines regardless of the relationship
            between users.
          </p>
          <p>
            Rezona has a zero-tolerance policy for any use of DMs or direct sharing features
            to facilitate grooming, exploitation, or inappropriate contact with users who
            are identified as minors. This includes but is not limited to: soliciting
            personal information from them, attempting to establish secretive or private
            relationships with them, sending sexual or suggestive content to them, or
            attempting to move conversations with minors off-platform to unmonitored
            channels.
          </p>
          <p>
            Violations of this policy will result in immediate permanent suspension and may
            be reported to relevant authorities.
          </p>
          <p>
            Blocked users cannot contact each other in any form, including through DMs,
            comments, tips, or content interactions.
          </p>

          <h3>Spam, Scams &amp; Malicious Conduct</h3>
          <p>To maintain trust and a positive experience for all users, the following are strictly prohibited:</p>
          <ul>
            <li>Distributing spam, unauthorized advertisements, or mass unsolicited messages.</li>
            <li>Engaging in phishing, spreading malware, or attempting to defraud other users.</li>
            <li>
              Artificially inflating follower counts, engagement metrics, or leaderboard
              rankings.
            </li>
            <li>Selling, sharing, or transferring accounts or platform features.</li>
            <li>Cheating, botting, or exploiting platform systems for unfair advantage.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>4. Intellectual Property</h2>
          <p>
            Rezona respects intellectual property rights and requires all users to do the
            same. You may only post content that you own, have created, or have the rights
            to use.
          </p>
          <p>Without the permission of the rights holder, you may not share:</p>
          <ul>
            <li>Copyrighted music, video, or imagery belonging to others.</li>
            <li>
              Content belonging to other creators on Rezona or sourced from other platforms
              without permission.
            </li>
            <li>
              Trademarked characters, logos, or brand assets used in a misleading or
              unauthorized way.
            </li>
          </ul>
          <p>
            Remixing content created natively on Rezona is encouraged and is a core part of
            how the platform works. Remixing content that originates from an external source
            and is protected by third-party copyright is not permitted without the rights
            holder&apos;s consent.
          </p>
          <p>
            Content you create on Rezona remains your intellectual property. By posting it
            to the platform, you grant Rezona a non-exclusive license to display, distribute,
            and promote your content within the Rezona platform and its associated channels.
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. Safety Tools &amp; Reporting</h2>
          <p>
            All users can report content, comments, or accounts that violate these
            guidelines at any time. Reports are reviewed by Rezona&apos;s Safety team. Urgent
            cases, including anything involving the safety of minors or suspected child
            sexual abuse material (CSAM), are escalated immediately to the appropriate
            authorities.
          </p>
          <p>
            You can block any account at any time. Blocking immediately prevents all
            interactions between you and the blocked account across the entire platform,
            including DMs, comments, tips, and content visibility.
          </p>
          <p>
            Rezona may also proactively remove content or suspend accounts without a user
            report when violations are identified through our moderation systems.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Enforcement</h2>
          <p>Violations of these guidelines are actioned based on severity and frequency:</p>
          <p>Content removal → Warning → Shadowban → Permanent ban</p>
          <p>
            The following violations result in immediate permanent suspension with no prior
            warning, and may be referred to law enforcement:
          </p>
          <ul>
            <li>Any content that sexualizes, exploits, or endangers minors (CSAM).</li>
            <li>Credible threats of mass violence or real-world harm.</li>
            <li>Terrorism or recruitment for violent extremism.</li>
            <li>Persistent severe harassment or targeted abuse.</li>
          </ul>
          <p>
            Repeated lower-level violations carry the same cumulative weight as a single
            severe violation. Accounts that attempt to evade enforcement, including by
            creating new accounts following a suspension, will face additional action up to
            and including permanent ban of all associated accounts.
          </p>
          <p>Users may submit an appeal within 30 days of an enforcement action being taken.</p>
        </section>

        <section className="privacy-section">
          <h2>7. Updates to These Guidelines</h2>
          <p>
            Rezona reserves the right to update these Community Guidelines as the platform
            grows and evolves. Users will be notified of material changes. Continued use of
            the platform following notification of an update constitutes acceptance of the
            revised guidelines.
          </p>
          <p>
            To report a violation or contact Rezona&apos;s Safety team, use the in-app reporting
            tool or reach us at{" "}
            <a className="privacy-email-link" href="mailto:support@rezona.ai">
              <u>support@rezona.ai</u>
            </a>
            .
          </p>
        </section>
      </section>

      <SiteFooter variant="legal" />
    </main>
  );
}
