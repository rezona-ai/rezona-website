/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import GetAppButton from "../components/get-app-button";
import SiteFooter from "../components/site-footer";

type ExploreCard = {
  id: string;
  title: string;
  author: string;
  plays: string;
  shares: string;
  likes: string;
  chats: string;
  href: string;
};

const statIcons = {
  plays: "/figma/assets/explore-more/icon-gamepad-2x.webp",
  shares: "/figma/assets/explore-more/icon-share-2x.webp",
  likes: "/figma/assets/explore-more/icon-heart-2x.webp",
  chats: "/figma/assets/explore-more/icon-chat-2x.webp",
} as const;

const exploreGameUrls = [
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/18e7ae65-afcc-4cfc-8d01-a1b2d53b9ff0/escape-herbert.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/5eea8523-1e7c-4034-9e2c-49ecf6484e17/italian-brainrot-surfers.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/dist/5812884/12623016/index.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/cf4e870e-c812-49bb-8e8f-9c794b36689b/backrooms-hamster-3d.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/ffcd7454-29a8-42e0-8871-b3d833d9a4c1/brainrot-solitaire.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/dist/6511875/14464824/index.html",
  "https://storage.googleapis.com/rezona-ai-prod/minigame/b2f6f6e5-c351-4a89-8f2e-069b1ed1a51f/index.html",
  "https://storage.googleapis.com/rezona-ai-prod/user_upload/game/version/latest-989c3b3a-a6b1-4f1d-b0ab-6b809fcff88b.html",
  "https://storage.googleapis.com/rezona-ai-prod/user_upload/game/version/latest-7cb252df-71cc-4312-8f56-7cb7cc8b2d3f.html",
  "https://storage.googleapis.com/rezona-ai-dev/minigame/fe302bce-01c6-40d2-b305-78f24af81890/index.html",
  "https://storage.googleapis.com/rezona-ai-prod/games/pgc/game3/video-fighters.html",
  "https://storage.googleapis.com/rezona-ai-prod/minigame/823369f1-e19e-48a5-878b-fdf3a6ae7baa/index.html",
  "https://storage.googleapis.com/rezona-ai-prod/minigame/2862bc43-c8f3-4745-930c-346315712497/index.html",
  "https://storage.googleapis.com/rezona-ai-prod/minigame/a8479c74-1bfe-4bde-8cd3-7a7c9f22b35c/index.html",
  "https://storage.googleapis.com/rezona-ai-prod/minigame/48073f9b-c7be-4162-a7ce-d0fa55176c52/index.html",
];

const cardTitles = [
  "Escape Herbert",
  "Italian Brainrot Surfers",
  "Pixel Drift",
  "Backrooms Hamster 3D",
  "Brainrot Solitaire",
  "Turbo Quest",
  "Orbit Clash",
  "Rezona UGC One",
  "Rezona UGC Two",
  "Brainrot Arena",
  "Video Fighters",
  "Meme Dash",
  "Neon Vault",
  "Retro Arena",
  "Chaos Loop",
];

const cardAuthors = [
  "@Maika",
  "@Nova",
  "@Riku",
  "@Yuna",
  "@Kai",
  "@Ivy",
  "@Luca",
  "@Milo",
  "@Sena",
  "@Ari",
  "@Toma",
  "@Rei",
  "@Niko",
  "@Uma",
  "@Zed",
];

const cardStats = [
  ["3.5K", "3.5K", "3.5K", "3.5K"],
  ["4.2K", "1.8K", "5.1K", "2.0K"],
  ["8.4K", "2.4K", "6.6K", "1.5K"],
  ["6.9K", "3.1K", "4.8K", "1.9K"],
  ["5.3K", "2.2K", "4.3K", "1.2K"],
  ["7.2K", "2.9K", "5.7K", "2.4K"],
  ["3.8K", "1.6K", "4.0K", "1.1K"],
  ["9.1K", "4.3K", "8.5K", "2.7K"],
  ["6.1K", "2.0K", "4.9K", "1.6K"],
  ["7.9K", "3.2K", "6.2K", "2.3K"],
  ["5.8K", "2.1K", "5.0K", "1.7K"],
  ["4.7K", "1.7K", "4.2K", "1.4K"],
  ["6.6K", "2.6K", "5.6K", "2.1K"],
  ["5.0K", "1.9K", "4.5K", "1.5K"],
  ["8.8K", "3.8K", "7.4K", "2.8K"],
] as const;

const cards: ExploreCard[] = exploreGameUrls.map((href, index) => ({
  id: `explore-card-${index + 1}`,
  title: cardTitles[index],
  author: cardAuthors[index],
  plays: cardStats[index][0],
  shares: cardStats[index][1],
  likes: cardStats[index][2],
  chats: cardStats[index][3],
  href,
}));

const desktopCards = cards;
const mobileCards = cards;

function ExploreMoreCard({ card }: { card: ExploreCard }) {
  const [loaded, setLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const [reloadToken, setReloadToken] = useState(0);
  const stats = [
    { key: "plays", value: card.plays, icon: statIcons.plays },
    { key: "shares", value: card.shares, icon: statIcons.shares },
    { key: "likes", value: card.likes, icon: statIcons.likes },
    { key: "chats", value: card.chats, icon: statIcons.chats },
  ] as const;

  useEffect(() => {
    if (loaded || timedOut) return;

    const timeoutId = window.setTimeout(() => {
      setTimedOut(true);
    }, 15000);

    return () => window.clearTimeout(timeoutId);
  }, [loaded, timedOut]);

  const handleRetryLoad = () => {
    setLoaded(false);
    setTimedOut(false);
    setReloadToken((prev) => prev + 1);
  };

  return (
    <div className="explore-more-card" aria-label={card.title}>
      <div className="explore-more-card-media-frame">
        {!timedOut ? (
          <>
            <iframe
              key={`${card.id}-${reloadToken}`}
              className="explore-more-card-media-iframe"
              src={card.href}
              title={card.title}
              loading="lazy"
              allow="autoplay; fullscreen; gamepad; gyroscope; accelerometer; xr-spatial-tracking"
              onLoad={() => setLoaded(true)}
            />
            {!loaded && <div className="game-skeleton" aria-hidden="true" />}
          </>
        ) : (
          <button
            type="button"
            className="explore-more-card-retry"
            onClick={handleRetryLoad}
            aria-label={`Reload ${card.title}`}
          >
            <img
              className="explore-more-card-media-cover"
              src="/figma/assets/explore-more/card-media-2x.webp"
              alt={card.title}
              width={684}
              height={1092}
              loading="lazy"
              decoding="async"
            />
          </button>
        )}
      </div>
      <div className="explore-more-card-meta">
        <div className="explore-more-card-author">
          <img
            className="explore-more-card-avatar"
            src="/figma/assets/explore-more/card-avatar-plus-2x.webp"
            alt=""
            width={80}
            height={80}
            loading="lazy"
            decoding="async"
            aria-hidden="true"
          />
          <div className="explore-more-card-author-copy">
            <div className="explore-more-card-author-line">
              <span>{card.author}</span>
              <img
                className="explore-more-verify"
                src="/figma/assets/explore-more/icon-verify-2x.webp"
                alt=""
                width={28}
                height={28}
                loading="lazy"
                decoding="async"
                aria-hidden="true"
              />
            </div>
            <strong>{card.title}</strong>
          </div>
        </div>
        <div className="explore-more-card-stats">
          {stats.map((stat) => (
            <span key={`${card.id}-${stat.key}`}>
              <img
                src={stat.icon}
                alt=""
                width={45}
                height={45}
                loading="lazy"
                decoding="async"
                aria-hidden="true"
              />
              {stat.value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExploreMoreClient() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 900px)");
    const sync = () => setIsMobile(query.matches);
    sync();
    if (typeof query.addEventListener === "function") {
      query.addEventListener("change", sync);
      return () => query.removeEventListener("change", sync);
    }
    query.addListener(sync);
    return () => query.removeListener(sync);
  }, []);

  return (
    <main className="explore-more-page">
      <header className="explore-more-top-nav">
        <Link href="/" className="explore-more-top-logo" aria-label="Go back to home">
          <img
            src="/figma/assets/mobile-top-logo-2x.webp"
            alt="REZONA"
            width={261}
            height={60}
            loading="eager"
            decoding="async"
          />
        </Link>
        <GetAppButton className="explore-more-top-cta" label="Get App" />
      </header>

      <section className="explore-more-content">
        <nav className="explore-more-breadcrumb" aria-label="Breadcrumb">
          <span className="explore-more-breadcrumb-desktop">
            <Link href="/">Home</Link>
            <span className="explore-more-breadcrumb-separator" aria-hidden="true" />
            <span className="explore-more-breadcrumb-current">Explore more games</span>
          </span>
          <span className="explore-more-breadcrumb-mobile">
            <span className="explore-more-breadcrumb-back" aria-hidden="true" />
            <Link href="/">Home</Link>
          </span>
        </nav>

        <h1 className="explore-more-title">
          Explore, <span>create</span>
          <br />
          Play and share
        </h1>

        {isMobile === null ? null : !isMobile ? (
          <div className="explore-more-desktop-grid">
            <div className="explore-more-card-row">
              {desktopCards.slice(0, 5).map((card) => (
                <ExploreMoreCard key={card.id} card={card} />
              ))}
            </div>
            <div className="explore-more-card-row">
              {desktopCards.slice(5, 10).map((card) => (
                <ExploreMoreCard key={card.id} card={card} />
              ))}
            </div>
            <img
              className="explore-more-tagline-desktop"
              src="/figma/assets/explore-more/tagline-desktop-2x.webp"
              alt="Built for meme"
              width={2598}
              height={750}
              loading="lazy"
              decoding="async"
            />
            <div className="explore-more-card-row">
              {desktopCards.slice(10, 15).map((card) => (
                <ExploreMoreCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        ) : (
          <div className="explore-more-mobile-list">
            {mobileCards.slice(0, 7).map((card) => (
              <ExploreMoreCard key={card.id} card={card} />
            ))}
            <img
              className="explore-more-tagline-mobile"
              src="/figma/assets/explore-more/tagline-mobile-2x.webp"
              alt="Built for meme"
              width={684}
              height={204}
              loading="lazy"
              decoding="async"
            />
            {mobileCards.slice(7).map((card) => (
              <ExploreMoreCard key={card.id} card={card} />
            ))}
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
