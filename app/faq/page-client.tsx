"use client";

import Link from "next/link";
import { Fragment, type ReactNode, useId, useState } from "react";
import { footerSocialSlices } from "../data/social-links";

type FaqLinkKey =
  | "terms"
  | "support"
  | "discord"
  | "telegram"
  | "reddit"
  | "tiktok"
  | "x"
  | "instagram"
  | "youtube";

type FaqTextPart =
  | string
  | {
      label: string;
      link: FaqLinkKey;
    };

type FaqItem = {
  question: string;
  answer: FaqTextPart[];
};

type FaqCategory = {
  title: string;
  items: FaqItem[];
};

const socialHrefByKey = footerSocialSlices.reduce<Record<string, string>>(
  (acc, item) => {
    acc[item.id] = item.href;
    return acc;
  },
  {}
);

const faqCategories: FaqCategory[] = [
  {
    title: "Getting Started",
    items: [
      {
        question: "What is a memeplay?",
        answer: [
          "A memeplay is an interactive, playable meme. Unlike a static image or video, you can tap it, react with it, and remix it. Some are tiny games. Some are weird interactive jokes. Some are just chaos. All of them are made by Rezonians using Rezona's AI tools.",
        ],
      },
      {
        question: "Who is Rezonasaur?",
        answer: [
          "Rezonasaur is Rezona's mascot - an orange dino who lives inside the app. He's part companion, part chaos, and he's always rooting for whatever cursed thing you're about to create.",
        ],
      },
    ],
  },
  {
    title: "Creating",
    items: [
      {
        question: "Can I edit or update a memeplay after publishing it?",
        answer: [
          "Yes. Go to your profile, find the memeplay, and tap the Edit option. Changes will apply to your version, but any remixes others have already made will remain as they were.",
        ],
      },
      {
        question: "How do I delete a memeplay I've posted?",
        answer: [
          "Go to your profile, choose the memeplay, tap three-dot button, and select Delete. Note: if other users have remixed your memeplay, those remixes will remain on the platform under the remix license described in our ",
          { label: "Terms of Service", link: "terms" },
          ".",
        ],
      },
      {
        question: "Can I use my own images, pixel art, or transparent PNGs?",
        answer: [
          "Yes. Rezona supports custom images, including PNGs with transparent backgrounds. Upload through the asset menu when creating or editing your memeplay.",
        ],
      },
      {
        question: "Why does the AI sometimes misunderstand me or make mistakes?",
        answer: [
          "AI is powerful but imperfect. Sometimes it interprets prompts differently than expected. The more specific your prompt, the better the result. You can also regenerate, edit, or tweak any output. We're actively improving the AI based on user feedback.",
        ],
      },
      {
        question: "Can I save progress or play memeplays offline?",
        answer: [
          "Yes. Anything you're working on is automatically saved as a draft. To access your drafts, tap the plus (+) button to start creating, and you'll find the Drafts section inside the creation flow. You can pick up where you left off anytime. However, offline play is not currently supported.",
        ],
      },
    ],
  },
  {
    title: "Remixing & Sharing",
    items: [
      {
        question: "What is the remix feature?",
        answer: [
          "Remixing lets you take any memeplay on Rezona and make it yours - change the text, swap assets, adjust the colors, or build something new on top. It's the core of how Rezona works.",
        ],
      },
      {
        question: "Can I turn off remixing for my content?",
        answer: [
          "Yes. You can toggle the remix feature on or off for each of your memeplays in your account settings. Disabling it stops new remixes from being made, but any existing remixes will remain on the platform.",
        ],
      },
      {
        question: "Who owns the content I create?",
        answer: [
          "You do. Rezona doesn't claim ownership of your content. By posting, you grant Rezona a license to display and distribute your content within the platform, and you grant other users the right to view, share, and (if enabled) remix it. Full details are in our ",
          { label: "Terms of Service", link: "terms" },
          ".",
        ],
      },
      {
        question: "What about AI-generated content - is that mine too?",
        answer: [
          "Yes. AI outputs you generate from your prompts are yours, subject to compliance with our ",
          { label: "Terms", link: "terms" },
          ". Just be aware that other users may generate similar or identical outputs from similar prompts.",
        ],
      },
    ],
  },
  {
    title: "Virtual Items & Earnings",
    items: [
      {
        question: "What are Virtual Items?",
        answer: [
          'Virtual Items are digital items, representations, or services that Rezona may make available to users from time to time for use solely on our Services, including, for example: Rezo Coins, Rezo Diamonds, and other in-app assets we may offer (each, a "Virtual Item"). They can be used to tip creators, make in-app purchases, and unlock certain features at the point of purchase. Virtual Items are digital and are not real money. They may only be used within Rezona and, unless otherwise specified by Rezona, cannot be exchanged for cash or anything of monetary value.',
        ],
      },
      {
        question: "How do I buy Virtual Items?",
        answer: [
          "You can purchase Virtual Items through authorized payment merchants available at the point of purchasing. Tap the wallet button to see the provided options.",
        ],
      },
      {
        question: "Can I earn money from the memeplays I create?",
        answer: [
          "Yep~ Creators may receive tips from other users in the form of Virtual Items. You'll need to complete our creator verification process before you can start receiving tips. Withdrawal features are currently available in select markets and supported currencies.",
        ],
      },
      {
        question: "Can I get a refund on Virtual Items?",
        answer: [
          "Refunds for Virtual Item purchases are generally handled by the relevant payment merchant or platform vendor available at the point of purchasing, not by Rezona directly. Submit refund requests through the vendors or merchants you decide to pay with. If you have a specific concern, contact ",
          { label: "support@rezona.ai", link: "support" },
          ".",
        ],
      },
      {
        question: "What happens if my payment fails or I'm charged twice?",
        answer: [
          "Payment processing is handled by authorized vendors or merchants available at the point of purchasing. If you experience a failed payment or duplicate charge, please contact the relevant merchants or vendors directly - they manage all payment-related issues. We'll adjust your Virtual Items balance once the issue is confirmed.",
        ],
      },
      {
        question: "Can I tip myself or send Virtual Items to anyone?",
        answer: [
          "You can tip any creator on Rezona except yourself. You also can't tip or be tipped by users you've blocked or who've blocked you.",
        ],
      },
      {
        question: "Is it safe to spend money on Rezona?",
        answer: [
          'Yes. All payments are processed by authorized payment merchants - Rezona can not see or store your payment card details. Every transaction requires confirmation. For users under 18, we strongly recommend parents enable device-level controls like Apple\'s "Ask to Buy" or Google\'s Family Link.',
        ],
      },
    ],
  },
  {
    title: "Account, Safety & Community",
    items: [
      {
        question: "How old do I need to be to use Rezona?",
        answer: [
          "Rezona is intended for a general audience. Users under the minimum age in their country should have parental or guardian consent before using the platform.",
        ],
      },
      {
        question: "Can parents manage or monitor a child's account?",
        answer: [
          'Yes. We strongly encourage parents and guardians to enable device-level parental controls like Apple "Ask to Buy" and Google Family Link. Parents can also contact ',
          { label: "support@rezona.ai", link: "support" },
          " to request account review or removal.",
        ],
      },
      {
        question: "How do I recover my account?",
        answer: [
          "If you're having trouble accessing your account, contact ",
          { label: "support@rezona.ai", link: "support" },
          " with your username or registered email.",
        ],
      },
      {
        question: "Why was my account banned or suspended?",
        answer: [
          "Account suspensions happen when our internal team identifies a violation of our Community Guidelines or ",
          { label: "Terms of Service", link: "terms" },
          ". If you believe this was an error, you can appeal by contacting ",
          { label: "support@rezona.ai", link: "support" },
          " within 30 days.",
        ],
      },
      {
        question: "How do I block someone?",
        answer: [
          "Tap their profile, then tap Block. Blocking prevents all interactions between the two of you - including DMs, comments, tips, and content visibility - across the entire platform.",
        ],
      },
      {
        question: "What happens when I report someone?",
        answer: [
          "Reports are reviewed by Rezona's internal team. We take action based on the severity of the violation, ranging from shadowbanning to permanent account suspension. We don't share specific outcomes with the reporter to protect privacy.",
        ],
      },
      {
        question: "How do DMs work?",
        answer: [
          "Direct messages are available between mutual followers. If you don't follow each other, you can send up to 3 messages before a mutual follow is required to continue the conversation. This is an intentional safety feature.",
        ],
      },
      {
        question: "My memeplay was lost or broken - can you recover it?",
        answer: [
          "Contact ",
          { label: "support@rezona.ai", link: "support" },
          " with your username and details of what happened. We'll do our best to help, though recovery depends on the situation.",
        ],
      },
    ],
  },
  {
    title: "Devices, Discovery & Settings",
    items: [
      {
        question: "What devices does Rezona work on?",
        answer: [
          "Rezona is currently available on iOS and Android through the App Store and Google Play, as well as on the web. Some features may only be accessible on web or mobile at any given time. Specific device requirements can be found on the store listing pages or on our website.",
        ],
      },
      {
        question: "Why does Rezona need camera or microphone permissions?",
        answer: [
          "Rezona does not require camera or microphone access by default. Certain memeplay features created by users on the platform - such as live camera reactions and audio recordings - require camera or microphone access. Because these are user-generated experiences (not built by Rezona itself), permissions are only requested when a memeplay calls for them. You can decline these permissions and still use most of the app, though some interactive features within specific memeplays won't be available.",
        ],
      },
      {
        question:
          "How does memeplay discovery work? Why do some memeplays get all the views?",
        answer: [
          "Rezona's discovery system surfaces content using a combination of engagement signals - including but not limited to likes, shares, comments, and remixes - alongside freshness. Leaderboards like Top Rising Games, Top Searches, and Top Creators update in real time as the community interacts - and the specific leaderboards we feature may change from time to time.",
        ],
      },
      {
        question: "When is the next Rezona update coming?",
        answer: [
          "We ship updates regularly to improve performance, add features, and fix bugs. Follow our community channels (",
          { label: "Discord", link: "discord" },
          ", ",
          { label: "Telegram", link: "telegram" },
          ", ",
          { label: "Reddit", link: "reddit" },
          ", ",
          { label: "TikTok", link: "tiktok" },
          ", ",
          { label: "X", link: "x" },
          ", ",
          { label: "Instagram", link: "instagram" },
          ", ",
          { label: "YouTube", link: "youtube" },
          ") for the latest news.",
        ],
      },
    ],
  },
];

const renderFaqAnswer = (parts: FaqTextPart[]) =>
  parts.map((part, index): ReactNode => {
    if (typeof part === "string") {
      return <Fragment key={`text-${index}`}>{part}</Fragment>;
    }

    if (part.link === "terms") {
      return (
        <Link className="faq-inline-link" href="/terms" key={`link-${index}`}>
          {part.label}
        </Link>
      );
    }

    if (part.link === "support") {
      return (
        <a
          className="faq-inline-link"
          href="mailto:support@rezona.ai"
          key={`link-${index}`}
        >
          {part.label}
        </a>
      );
    }

    const socialKey = part.link === "reddit" ? "social" : part.link;
    const href = socialHrefByKey[socialKey];

    return (
      <a
        className="faq-inline-link"
        href={href}
        key={`link-${index}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {part.label}
      </a>
    );
  });

export default function FaqList() {
  const baseId = useId();
  const [openKeys, setOpenKeys] = useState<string[]>(["0-0"]);

  const toggleItem = (itemKey: string) => {
    setOpenKeys((current) =>
      current.includes(itemKey)
        ? current.filter((key) => key !== itemKey)
        : [...current, itemKey]
    );
  };

  return (
    <section className="faq-list" aria-label="Frequently asked questions">
      {faqCategories.map((category, categoryIndex) => (
        <div className="faq-category" key={category.title}>
          <h2 className="faq-category-title">{category.title}</h2>

          {category.items.map((item, itemIndex) => {
            const itemKey = `${categoryIndex}-${itemIndex}`;
            const isOpen = openKeys.includes(itemKey);
            const panelId = `${baseId}-panel-${itemKey}`;
            const buttonId = `${baseId}-button-${itemKey}`;

            return (
              <article className={`faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
                <button
                  className="faq-question"
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(itemKey)}
                >
                  <img
                    className="faq-question-mark"
                    src="/assets/faq/Bullet.svg"
                    alt=""
                    aria-hidden="true"
                  />
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-question-chevron" aria-hidden="true" />
                </button>

                {isOpen && (
                  <div
                    className="faq-answer"
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                  >
                    <p>{renderFaqAnswer(item.answer)}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      ))}
    </section>
  );
}
