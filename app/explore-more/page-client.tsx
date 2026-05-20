/* eslint-disable @next/next/no-img-element */
"use client";

import type { PointerEvent } from "react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import GetAppButton from "../components/get-app-button";
import SiteFooter from "../components/site-footer";
import exploreGamesData from "../data/explore-more-games.json";

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

const cards: ExploreCard[] = exploreGamesData.map((game) => ({
  id: game.id,
  title: game.title,
  author: game.author,
  avatar: game.avatar,
  href: game.href,
  plays: game.stats.plays,
  shares: game.stats.shares,
  likes: game.stats.likes,
  chats: game.stats.chats,
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

function ExploreMoreMobileScrollControls() {
  const frameRef = useRef<number | null>(null);
  const stepFrameRef = useRef<number | null>(null);
  const holdTimerRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number | null>(null);
  const activeButtonRef = useRef<HTMLButtonElement | null>(null);
  const activePointerIdRef = useRef<number | null>(null);
  const directionRef = useRef<1 | -1>(1);

  const stopContinuousScroll = ({
    cancelStep = true,
  }: {
    cancelStep?: boolean;
  } = {}) => {
    if (holdTimerRef.current !== null) {
      window.clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    if (cancelStep && stepFrameRef.current !== null) {
      window.cancelAnimationFrame(stepFrameRef.current);
      stepFrameRef.current = null;
    }
    lastFrameTimeRef.current = null;
    if (
      activeButtonRef.current &&
      activePointerIdRef.current !== null &&
      activeButtonRef.current.hasPointerCapture(activePointerIdRef.current)
    ) {
      activeButtonRef.current.releasePointerCapture(activePointerIdRef.current);
    }
    activeButtonRef.current = null;
    activePointerIdRef.current = null;
  };

  const stopHoldScroll = () => {
    stopContinuousScroll({ cancelStep: false });
  };

  const cancelScroll = () => {
    stopContinuousScroll({ cancelStep: true });
  };

  const scrollStep = (direction: 1 | -1) => {
    if (stepFrameRef.current !== null) {
      window.cancelAnimationFrame(stepFrameRef.current);
      stepFrameRef.current = null;
    }

    const distance = direction * Math.max(360, window.innerHeight * 0.9);
    const startY = window.scrollY;
    const maxY = document.documentElement.scrollHeight - window.innerHeight;
    const targetY = Math.min(Math.max(startY + distance, 0), maxY);
    const duration = 420;
    let startTime: number | null = null;

    const animateStep = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress =
        progress * progress * progress * (progress * (progress * 6 - 15) + 10);
      window.scrollTo({
        top: startY + (targetY - startY) * easedProgress,
        behavior: "auto",
      });

      if (progress < 1) {
        stepFrameRef.current = window.requestAnimationFrame(animateStep);
        return;
      }
      stepFrameRef.current = null;
    };

    stepFrameRef.current = window.requestAnimationFrame(animateStep);
  };

  const tickContinuousScroll = (timestamp: number) => {
    const previousTime = lastFrameTimeRef.current ?? timestamp;
    const elapsed = timestamp - previousTime;
    lastFrameTimeRef.current = timestamp;

    const pixelsPerSecond = Math.max(960, window.innerHeight * 1.42);
    window.scrollBy({
      top: directionRef.current * (pixelsPerSecond * elapsed) / 1000,
      behavior: "auto",
    });

    frameRef.current = window.requestAnimationFrame(tickContinuousScroll);
  };

  const startContinuousScroll = (direction: 1 | -1) => {
    stopContinuousScroll({ cancelStep: true });
    directionRef.current = direction;
    scrollStep(direction);
    holdTimerRef.current = window.setTimeout(() => {
      if (stepFrameRef.current !== null) {
        window.cancelAnimationFrame(stepFrameRef.current);
        stepFrameRef.current = null;
      }
      lastFrameTimeRef.current = null;
      frameRef.current = window.requestAnimationFrame(tickContinuousScroll);
    }, 220);
  };

  const handlePointerDown = (
    event: PointerEvent<HTMLButtonElement>,
    direction: 1 | -1
  ) => {
    event.preventDefault();
    activeButtonRef.current = event.currentTarget;
    activePointerIdRef.current = event.pointerId;
    event.currentTarget.setPointerCapture(event.pointerId);
    startContinuousScroll(direction);
  };

  useEffect(() => () => stopContinuousScroll({ cancelStep: true }), []);

  return (
    <div
      className="explore-more-scroll-controls"
      role="group"
      aria-label="Page scroll controls"
    >
      <button
        type="button"
        className="explore-more-scroll-button explore-more-scroll-button-up"
        onPointerDown={(event) => handlePointerDown(event, -1)}
        onPointerUp={stopHoldScroll}
        onPointerCancel={cancelScroll}
        onPointerLeave={stopHoldScroll}
        onLostPointerCapture={stopHoldScroll}
        onContextMenu={(event) => event.preventDefault()}
        aria-label="Scroll up"
      />
      <button
        type="button"
        className="explore-more-scroll-button explore-more-scroll-button-down"
        onPointerDown={(event) => handlePointerDown(event, 1)}
        onPointerUp={stopHoldScroll}
        onPointerCancel={cancelScroll}
        onPointerLeave={stopHoldScroll}
        onLostPointerCapture={stopHoldScroll}
        onContextMenu={(event) => event.preventDefault()}
        aria-label="Scroll down"
      />
    </div>
  );
}

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
    const query = window.matchMedia("(max-width: 640px)");
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
              {desktopCards.slice(0, 10).map((card) => (
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
            <ExploreMoreMobileScrollControls />
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
