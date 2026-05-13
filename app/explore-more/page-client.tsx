/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import GetAppButton from "../components/get-app-button";
import SiteFooter from "../components/site-footer";

type ExploreCard = {
  id: string;
  title: string;
  author: string;
  avatar: string;
  plays: string;
  shares: string;
  likes: string;
  chats: string;
  href: string;
};

const statIcons = {
  plays: "/assets/explore-more/icon-gamepad-2x.webp",
  shares: "/assets/explore-more/icon-share-2x.webp",
  likes: "/assets/explore-more/icon-heart-2x.webp",
  chats: "/assets/explore-more/icon-chat-2x.webp",
} as const;

const exploreGameUrls = [
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/c3230800-b189-4fc2-8417-f49b1bc6706f/rip-the-net_1.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/3e3cf72e-6c46-4833-852f-1d5c6f283a39/index.html",
  "https://storage.googleapis.com/rezona-ai-prod/minigame/8c2f3b01-2529-4bf6-9bbf-9ef081aefa4d/index.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/dist/6734420/15315675/index.html",
  "https://storage.googleapis.com/rezona-ai-prod/games/pgc/game3/video-fighters.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/5eea8523-1e7c-4034-9e2c-49ecf6484e17/italian-brainrot-surfers.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/9e6f8c4e-ad79-4576-945f-2dae90c805d3/oil_tycoon.html",
  "https://storage.googleapis.com/rezona-ai-prod/minigame/a8479c74-1bfe-4bde-8cd3-7a7c9f22b35c/index.html",
  "https://storage.googleapis.com/rezona-ai-prod/minigame/2862bc43-c8f3-4745-930c-346315712497/index.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/1ac6405c-b6dc-4d12-b3c3-ff54ecc86b53/cartman_kfc.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/25e2cc83-fd50-4be5-bdd1-4b7711912579/episode1_colarina.html",
  "https://storage.googleapis.com/rezona-ai-prod/minigame/4f724db2-2a16-4263-8740-60a2506822dc/index.html",
  "https://storage.googleapis.com/rezona-ai-prod/minigame/87faa715-8b6a-47e0-a6cd-f5865ccd2718/index.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/1519db18-54e9-4274-9395-95e2a64f3025/episode1_the_wolfs_secret.html",
  "https://storage.googleapis.com/rezona-ai-prod/minigame/823369f1-e19e-48a5-878b-fdf3a6ae7baa/index.html",
];

const cardTitles = [
  "RIP the net",
  "Steel Ball run",
  "Dragonball R: The Saiyan Arrival V3",
  "Un día en el Oxxo",
  "Fruit Fight",
  "Italian Brainrot Surfers",
  "Oil Tycoon",
  "Five Nights at Mom's",
  "los river game",
  "Eric Cartman's Bucket Run",
  "Interactive Story: Colarina",
  "dinosaur game",
  "Nailoong Run!",
  "The Wolf's Secret",
  "Army of Light: White Knight",
];

const cardAuthors = [
  "@Nhân Xa",
  "@DuongVatAKAMasterBaiter",
  "@Goshumio",
  "@Senior Juniors",
  "@Ali Chhipa",
  "@non",
  "@non",
  "@True Art 🎭",
  "@Abdulhadi",
  "@Ladis Washerum",
  "@dblswrddhrs",
  "@Syed Mursaleen",
  "@Serenox",
  "@dblswrddhrs",
  "@Hadi Ghandour",
];

const cardAvatars = [
  "/assets/avatar/nhan-xa.webp",
  "/assets/avatar/non.webp",
  "/assets/avatar/game-3.webp",
  "/assets/avatar/game-4.webp",
  "/assets/avatar/ali-chhipa.webp",
  "/assets/avatar/non.webp",
  "/assets/avatar/non.webp",
  "/assets/avatar/true-art.webp",
  "/assets/avatar/abdulhadi.webp",
  "/assets/avatar/game-10.webp",
  "/assets/avatar/dblswrddhrs.webp",
  "/assets/avatar/syed-mursaleen.webp",
  "/assets/avatar/serenox.webp",
  "/assets/avatar/dblswrddhrs.webp",
  "/assets/avatar/hadi-ghandour.webp",
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
  avatar: cardAvatars[index],
  plays: cardStats[index][0],
  shares: cardStats[index][1],
  likes: cardStats[index][2],
  chats: cardStats[index][3],
  href,
}));

const desktopCards = cards;
const mobileCards = cards;
const MAX_CONCURRENT_IFRAME_LOADS = 2;
const MIN_GAME_SKELETON_MS = 650;
let activeIframeLoads = 0;
const iframeLoadQueue: Array<() => void> = [];

const acquireIframeLoadSlot = (start: () => void) => {
  if (activeIframeLoads < MAX_CONCURRENT_IFRAME_LOADS) {
    activeIframeLoads += 1;
    start();
    return;
  }
  iframeLoadQueue.push(start);
};

const releaseIframeLoadSlot = () => {
  activeIframeLoads = Math.max(0, activeIframeLoads - 1);
  const next = iframeLoadQueue.shift();
  if (!next) return;
  activeIframeLoads += 1;
  next();
};

function ExploreMoreCard({
  card,
  strictInView = false,
  keepIframeLoaded = false,
}: {
  card: ExploreCard;
  strictInView?: boolean;
  keepIframeLoaded?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const requestSerialRef = useRef(0);
  const hasSlotRef = useRef(false);
  const entrySkeletonTimerRef = useRef<number | null>(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const [canLoad, setCanLoad] = useState(false);
  const [showEntrySkeleton, setShowEntrySkeleton] = useState(false);
  const [reloadToken, setReloadToken] = useState(0);
  const stats = [
    { key: "plays", value: card.plays, icon: statIcons.plays },
    { key: "shares", value: card.shares, icon: statIcons.shares },
    { key: "likes", value: card.likes, icon: statIcons.likes },
    { key: "chats", value: card.chats, icon: statIcons.chats },
  ] as const;

  useEffect(() => {
    const target = cardRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const visible = strictInView
          ? Boolean(entry?.isIntersecting && entry.intersectionRatio >= 0.35)
          : Boolean(entry?.isIntersecting);
        setInView(visible);
      },
      strictInView
        ? { root: null, rootMargin: "-8% 0px -8% 0px", threshold: [0, 0.35, 0.55] }
        : { root: null, rootMargin: "220px 0px 220px 0px", threshold: 0.01 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [strictInView]);

  useEffect(() => {
    if (!inView || loaded || timedOut || canLoad) return;

    setShowEntrySkeleton(true);
    if (entrySkeletonTimerRef.current) {
      window.clearTimeout(entrySkeletonTimerRef.current);
    }
    entrySkeletonTimerRef.current = window.setTimeout(() => {
      setShowEntrySkeleton(false);
      entrySkeletonTimerRef.current = null;
    }, MIN_GAME_SKELETON_MS);

    const requestId = ++requestSerialRef.current;
    acquireIframeLoadSlot(() => {
      if (
        requestId !== requestSerialRef.current ||
        !inView ||
        loaded ||
        timedOut
      ) {
        releaseIframeLoadSlot();
        return;
      }
      hasSlotRef.current = true;
      setCanLoad(true);
    });
  }, [inView, loaded, timedOut, canLoad, reloadToken]);

  useEffect(() => {
    if (!canLoad || loaded || timedOut) return;

    const timeoutId = window.setTimeout(() => {
      setTimedOut(true);
      setCanLoad(false);
      if (hasSlotRef.current) {
        hasSlotRef.current = false;
        releaseIframeLoadSlot();
      }
    }, 15000);

    return () => window.clearTimeout(timeoutId);
  }, [canLoad, loaded, timedOut]);

  useEffect(() => {
    if (keepIframeLoaded) return;
    if (inView || !canLoad || loaded || timedOut) return;
    requestSerialRef.current += 1;
    setCanLoad(false);
    if (hasSlotRef.current) {
      hasSlotRef.current = false;
      releaseIframeLoadSlot();
    }
  }, [keepIframeLoaded, inView, canLoad, loaded, timedOut]);

  useEffect(() => {
    if (keepIframeLoaded || !strictInView || inView) return;

    requestSerialRef.current += 1;
    setLoaded(false);
    setCanLoad(false);
    if (hasSlotRef.current) {
      hasSlotRef.current = false;
      releaseIframeLoadSlot();
    }
  }, [keepIframeLoaded, strictInView, inView]);

  useEffect(() => {
    return () => {
      requestSerialRef.current += 1;
      if (entrySkeletonTimerRef.current) {
        window.clearTimeout(entrySkeletonTimerRef.current);
        entrySkeletonTimerRef.current = null;
      }
      if (hasSlotRef.current) {
        hasSlotRef.current = false;
        releaseIframeLoadSlot();
      }
    };
  }, []);

  const handleRetryLoad = () => {
    requestSerialRef.current += 1;
    if (hasSlotRef.current) {
      hasSlotRef.current = false;
      releaseIframeLoadSlot();
    }
    setLoaded(false);
    setTimedOut(false);
    setCanLoad(false);
    setShowEntrySkeleton(true);
    setReloadToken((prev) => prev + 1);
  };

  const handleIframeLoaded = () => {
    setLoaded(true);
    if (hasSlotRef.current) {
      hasSlotRef.current = false;
      releaseIframeLoadSlot();
    }
  };

  const shouldRenderIframe =
    canLoad &&
    !timedOut &&
    (keepIframeLoaded || inView);

  return (
    <div className="explore-more-card" aria-label={card.title} ref={cardRef}>
      <div className="explore-more-card-media-frame">
        {shouldRenderIframe ? (
          <>
            <iframe
              key={`${card.id}-${reloadToken}`}
              className="explore-more-card-media-iframe"
              src={card.href}
              title={card.title}
              loading="lazy"
              allow="autoplay; fullscreen; gamepad; gyroscope; accelerometer; xr-spatial-tracking"
              onLoad={handleIframeLoaded}
            />
            {(!loaded || showEntrySkeleton) && (
              <div className="game-skeleton" aria-hidden="true" />
            )}
          </>
        ) : timedOut ? (
          <button
            type="button"
            className="explore-more-card-retry"
            onClick={handleRetryLoad}
            aria-label={`Reload ${card.title}`}
          >
            <img
              className="explore-more-card-media-cover"
              src="/assets/explore-more/card-media-2x.webp"
              alt={card.title}
              width={684}
              height={1092}
              loading="lazy"
              decoding="async"
            />
          </button>
        ) : strictInView && !inView ? null : (
          <div className="game-skeleton" aria-hidden="true" />
        )}
      </div>
      <div className="explore-more-card-meta">
        <div className="explore-more-card-author">
          <img
            className="explore-more-card-avatar"
            src={card.avatar}
            alt={`${card.author} avatar`}
            width={80}
            height={80}
            loading="lazy"
            decoding="async"
          />
          <div className="explore-more-card-author-copy">
            <div className="explore-more-card-author-line">
              <span>{card.author}</span>
              <img
                className="explore-more-verify"
                src="/assets/explore-more/icon-verify-2x.webp"
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
            src="/assets/shared/brand/mobile-top-logo-2x.webp"
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
                <ExploreMoreCard
                  key={card.id}
                  card={card}
                  strictInView
                  keepIframeLoaded
                />
              ))}
            </div>
            <div className="explore-more-card-row">
              {desktopCards.slice(5, 10).map((card) => (
                <ExploreMoreCard
                  key={card.id}
                  card={card}
                  strictInView
                  keepIframeLoaded
                />
              ))}
            </div>
            <img
              className="explore-more-tagline-desktop"
              src="/assets/explore-more/tagline-desktop-2x.webp"
              alt="Built for meme"
              width={2598}
              height={750}
              loading="lazy"
              decoding="async"
            />
            <div className="explore-more-card-row">
              {desktopCards.slice(10, 15).map((card) => (
                <ExploreMoreCard
                  key={card.id}
                  card={card}
                  strictInView
                  keepIframeLoaded
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="explore-more-mobile-list">
            {mobileCards.slice(0, 7).map((card) => (
              <ExploreMoreCard key={card.id} card={card} strictInView />
            ))}
            <img
              className="explore-more-tagline-mobile"
              src="/assets/explore-more/tagline-mobile-2x.webp"
              alt="Built for meme"
              width={684}
              height={204}
              loading="lazy"
              decoding="async"
            />
            {mobileCards.slice(7).map((card) => (
              <ExploreMoreCard key={card.id} card={card} strictInView />
            ))}
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
