/* eslint-disable @next/next/no-img-element */
"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { Fragment, memo, useEffect, useRef, useState } from "react";
import GetAppButton from "./components/get-app-button";
import SiteFooter from "./components/site-footer";
import DinoLottie from "./components/dino-lottie";
import { MobileStatsLoopScene, StatsLoopScene } from "./components/home-stats-loop";
import heroParticleUgcAssets from "./data/hero-particle-ugc.json";
import { legalLinks } from "./data/legal-links";
import {
  flyCards,
  heroBgSlices,
  heroGameSlices,
  heroGameUrls,
  mobileShowcaseScenes,
  narrowPcHeroBgSlices,
  narrowPcHeroGameSlices,
  showcaseScenes,
  tailScenes,
} from "./data/home";
import { footerSocialSlices } from "./data/social-links";

type HeroBurstParticle = {
  id: string;
  asset: string;
  ratio: number;
  sizeVw: number;
  originXVw: number;
  originYVh: number;
  midXVw: number;
  midYVh: number;
  curveXVw: number;
  curveYVh: number;
  endXVw: number;
  endYVh: number;
  durationS: number;
  delayS: number;
  startScale: number;
  midScale: number;
  endScale: number;
  zStartPx: number;
  zMidPx: number;
  zEndPx: number;
  alpha: number;
};

type HeroBurstVisualAsset = {
  id: string;
  asset: string;
  ratio: number;
};

const heroBurstUgcPoolAssets: HeroBurstVisualAsset[] = heroParticleUgcAssets.map(
  (item, index) => ({
    id: `ugc-${index + 1}`,
    asset: item.asset,
    ratio: item.ratio,
  })
);

const heroBurstVisualAssets: HeroBurstVisualAsset[] = [...heroBurstUgcPoolAssets];
const heroBurstGifVisualAssets: HeroBurstVisualAsset[] = heroBurstVisualAssets.filter(
  (item) => item.asset.toLowerCase().endsWith(".gif")
);
const heroBurstNonGifVisualAssets: HeroBurstVisualAsset[] = heroBurstVisualAssets.filter(
  (item) => !item.asset.toLowerCase().endsWith(".gif")
);

const HERO_BURST_VISUAL_RECENT_WINDOW = 10;
const HERO_BURST_GIF_RATE = 0.16;
const HERO_BURST_GIF_RATE_MOBILE = 0;
const heroBurstRecentVisualIds: string[] = [];

const deterministicUnitBySeed = (seed: number) => {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

const pickHeroBurstVisualAssetBySeed = (
  seed: number,
  options?: { preferNonGif?: boolean }
): HeroBurstVisualAsset => {
  const gifRate = options?.preferNonGif ? HERO_BURST_GIF_RATE_MOBILE : HERO_BURST_GIF_RATE;
  const shouldUseGif =
    heroBurstGifVisualAssets.length > 0 &&
    deterministicUnitBySeed(seed) < gifRate;
  const pool =
    shouldUseGif && heroBurstGifVisualAssets.length > 0
      ? heroBurstGifVisualAssets
      : heroBurstNonGifVisualAssets.length > 0
        ? heroBurstNonGifVisualAssets
        : heroBurstVisualAssets;
  const total = pool.length;
  if (total === 0) {
    return {
      id: "ugc-fallback",
      asset: "/assets/home/particles/ugc-new/ugc-particle-06.webp",
      ratio: 1,
    };
  }

  const recentWindow = Math.min(HERO_BURST_VISUAL_RECENT_WINDOW, Math.max(total - 1, 0));
  const recentSet = new Set(heroBurstRecentVisualIds.slice(-recentWindow));
  let index = ((seed % total) + total) % total;

  // Avoid showing recently-used assets back-to-back to reduce visible repetition.
  if (recentSet.has(pool[index]?.id) && recentSet.size < total) {
    const stride = 7;
    for (let step = 1; step <= total; step += 1) {
      const candidate = (index + step * stride) % total;
      if (!recentSet.has(pool[candidate]?.id)) {
        index = candidate;
        break;
      }
    }
  }

  const picked = pool[index];
  heroBurstRecentVisualIds.push(picked.id);
  const maxHistory = Math.max(recentWindow * 2, 20);
  if (heroBurstRecentVisualIds.length > maxHistory) {
    heroBurstRecentVisualIds.splice(0, heroBurstRecentVisualIds.length - maxHistory);
  }

  return picked;
};

const HERO_BURST_PARTICLE_COUNT = Math.round(flyCards.length * 2.35);
const HERO_BURST_PARTICLE_COUNT_LITE = Math.max(
  10,
  Math.round(HERO_BURST_PARTICLE_COUNT * 0.4)
);
const HERO_BURST_PARTICLE_COUNT_MOBILE_LITE = 6;
const HERO_BURST_SECONDARY_EMITTER_RATE = 0.62;
const HERO_BURST_ALPHA_GAIN = 0.92;

const randomBetween = (min: number, max: number) =>
  min + Math.random() * (max - min);

const pickRandom = <T,>(items: readonly T[]) =>
  items[Math.floor(Math.random() * items.length)];

const createRandomHeroBurstParticle = (
  seed: number,
  options?: { prefillPhase?: boolean; preferNonGif?: boolean; mobileLite?: boolean }
): HeroBurstParticle => {
  const motionSource = pickRandom(flyCards);
  const visualSource = pickHeroBurstVisualAssetBySeed(seed, {
    preferNonGif: options?.preferNonGif,
  });
  const nearWeight = Math.min(
    1,
    Math.max(0, (motionSource.depth - 640) / (1450 - 640))
  );
  const farWeight = 1 - nearWeight;
  const isNearPass = Math.random() < 0.12;
  const useSecondaryEmitter = Math.random() < HERO_BURST_SECONDARY_EMITTER_RATE;
  const emitterBaseXVw = -8.8;
  const emitterOffsetXVw = 1.9;
  const originXVw =
    emitterBaseXVw +
    (useSecondaryEmitter ? emitterOffsetXVw : -emitterOffsetXVw) +
    randomBetween(-0.9, 0.9);
  const originYVh = randomBetween(-0.7, 0.7);

  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const angle = (seed * goldenAngle + randomBetween(-0.42, 0.42)) % (Math.PI * 2);
  const radiusBias = Math.pow(Math.random(), 1.75);
  const midRadius = 8 + radiusBias * 34;
  const endRadiusX = isNearPass
    ? randomBetween(154, 208)
    : Math.random() < 0.84
      ? randomBetween(96, 152)
      : randomBetween(144, 190);
  const endRadiusY = isNearPass
    ? randomBetween(136, 188)
    : Math.random() < 0.84
      ? randomBetween(86, 132)
      : randomBetween(126, 172);

  const directionX = Math.cos(angle);
  const directionY = Math.sin(angle);
  const tangentX = -directionY;
  const tangentY = directionX;
  const curveBias =
    randomBetween(-11, 11) *
    (0.62 + farWeight * 0.38) *
    (isNearPass ? randomBetween(1.18, 1.38) : 1);

  const midXVw = directionX * midRadius + randomBetween(-1.2, 1.2);
  const midYVh = directionY * midRadius + randomBetween(-1.1, 1.1);
  const endXVw = directionX * endRadiusX + randomBetween(-4.8, 4.8);
  const endYVh = directionY * endRadiusY + randomBetween(-4.6, 4.6);
  const curveXVw = endXVw * randomBetween(0.66, 0.78) + tangentX * curveBias;
  const curveYVh = endYVh * randomBetween(0.66, 0.78) + tangentY * curveBias * 0.84;

  const ratio = visualSource.ratio;
  const rareLargeBoost = isNearPass
    ? randomBetween(1.4, 1.86)
    : Math.random() < 0.16
      ? randomBetween(1.18, 1.48)
      : 1;
  const mobileScale = options?.mobileLite ? 0.82 : 1;
  const sizeVw = Math.max(
    2.5,
    Math.min(
      isNearPass ? 14.4 : 11.6,
      motionSource.wPct *
        randomBetween(0.46, 0.66) *
        (1 + nearWeight * 0.12) *
        rareLargeBoost *
        mobileScale
    )
  );

  const durationS =
    randomBetween(isNearPass ? 9.6 : 11.2, isNearPass ? 13.4 : 15.8) *
    (1 + farWeight * 0.14);
  const delayMin = Math.max(0, farWeight * 0.12 - nearWeight * 0.02);
  const delayMax = Math.min(
    0.4,
    0.26 + farWeight * 0.14 + (isNearPass ? -0.04 : 0.02)
  );
  const baseDelayS = randomBetween(delayMin, Math.max(delayMin + 0.01, delayMax));
  const delayS = options?.prefillPhase
    ? -randomBetween(durationS * 0.08, durationS * 0.72)
    : baseDelayS;
  const startScale = randomBetween(0.018, 0.06) + nearWeight * 0.008;
  const midScale = randomBetween(0.7, isNearPass ? 1.18 : 1.02) + nearWeight * 0.14;
  const endScale = randomBetween(isNearPass ? 1.9 : 1.48, isNearPass ? 2.45 : 1.98) +
    nearWeight * (isNearPass ? 0.48 : 0.34);
  const zStartPx = randomBetween(-1520, -980) + nearWeight * 160;
  const zMidPx = randomBetween(-940, -460) + nearWeight * 150;
  const zEndPx = randomBetween(isNearPass ? -24 : -120, isNearPass ? 224 : 84) +
    nearWeight * (isNearPass ? 156 : 120);
  const alpha =
    Math.min(
      isNearPass ? 0.84 : 0.76,
      randomBetween(isNearPass ? 0.46 : 0.38, isNearPass ? 0.7 : 0.62) +
        nearWeight * (isNearPass ? 0.12 : 0.1)
    ) * HERO_BURST_ALPHA_GAIN;

  return {
    id: `${visualSource.id}-${seed}-${Math.random().toString(36).slice(2, 7)}`,
    asset: visualSource.asset,
    ratio,
    sizeVw,
    originXVw,
    originYVh,
    midXVw,
    midYVh,
    curveXVw,
    curveYVh,
    endXVw,
    endYVh,
    durationS,
    delayS,
    startScale,
    midScale,
    endScale,
    zStartPx,
    zMidPx,
    zEndPx,
    alpha,
  };
};

const HeroBurstParticleCard = memo(function HeroBurstParticleCard({
  cardId,
  seed,
  prefillPhase = false,
  performanceLite = false,
  preferNonGif = false,
  mobileLite = false,
  onExited,
}: {
  cardId: number;
  seed: number;
  prefillPhase?: boolean;
  performanceLite?: boolean;
  preferNonGif?: boolean;
  mobileLite?: boolean;
  onExited: (cardId: number) => void;
}) {
  const [particle] = useState<HeroBurstParticle>(() =>
    createRandomHeroBurstParticle(seed, { prefillPhase, preferNonGif, mobileLite })
  );
  const durationS = performanceLite ? particle.durationS * 1.24 : particle.durationS;
  const alpha = performanceLite ? particle.alpha * 0.88 : particle.alpha;

  return (
    <img
      className={`meme-static-card${performanceLite ? " meme-static-card--lite" : ""}`}
      style={asVars({
        "--size": `${particle.sizeVw.toFixed(3)}vw`,
        "--ratio": particle.ratio.toFixed(4),
        "--origin-x": `${particle.originXVw.toFixed(3)}vw`,
        "--origin-y": `${particle.originYVh.toFixed(3)}vh`,
        "--mid-x": `${particle.midXVw.toFixed(3)}vw`,
        "--mid-y": `${particle.midYVh.toFixed(3)}vh`,
        "--curve-x": `${particle.curveXVw.toFixed(3)}vw`,
        "--curve-y": `${particle.curveYVh.toFixed(3)}vh`,
        "--end-x": `${particle.endXVw.toFixed(3)}vw`,
        "--end-y": `${particle.endYVh.toFixed(3)}vh`,
        "--duration": `${durationS.toFixed(2)}s`,
        "--delay": `${particle.delayS.toFixed(2)}s`,
        "--s-start": particle.startScale.toFixed(3),
        "--s-mid": particle.midScale.toFixed(3),
        "--s-end": particle.endScale.toFixed(3),
        "--z-start": `${particle.zStartPx}px`,
        "--z-mid": `${particle.zMidPx}px`,
        "--z-end": `${particle.zEndPx}px`,
        "--alpha": alpha.toFixed(3),
      })}
      src={particle.asset}
      alt={`Meme card ${particle.id}`}
      loading="lazy"
      decoding="async"
      onAnimationEnd={() => onExited(cardId)}
    />
  );
});

const HeroBurstCanvas = memo(function HeroBurstCanvas({
  performanceLite = false,
  preferNonGif = false,
  mobileLite = false,
}: {
  performanceLite?: boolean;
  preferNonGif?: boolean;
  mobileLite?: boolean;
}) {
  const particleCount = mobileLite
    ? HERO_BURST_PARTICLE_COUNT_MOBILE_LITE
    : performanceLite
      ? HERO_BURST_PARTICLE_COUNT_LITE
      : HERO_BURST_PARTICLE_COUNT;
  const particleSeedRef = useRef(particleCount);
  const particleCardIdRef = useRef(particleCount);
  const pendingExitedIdsRef = useRef<number[]>([]);
  const recycleFrameRef = useRef<number | null>(null);
  const [cards, setCards] = useState<
    { id: number; seed: number; prefillPhase: boolean }[]
  >(() =>
    Array.from({ length: particleCount }, (_, index) => ({
      id: index,
      seed: index,
      prefillPhase: true,
    }))
  );

  useEffect(() => {
    particleSeedRef.current = particleCount;
    particleCardIdRef.current = particleCount;
    pendingExitedIdsRef.current = [];
    if (recycleFrameRef.current !== null) {
      cancelAnimationFrame(recycleFrameRef.current);
      recycleFrameRef.current = null;
    }
    setCards(
      Array.from({ length: particleCount }, (_, index) => ({
        id: index,
        seed: index,
        prefillPhase: true,
      }))
    );
    return () => {
      if (recycleFrameRef.current !== null) {
        cancelAnimationFrame(recycleFrameRef.current);
        recycleFrameRef.current = null;
      }
    };
  }, [particleCount]);

  const flushExitedCards = () => {
    recycleFrameRef.current = null;
    const exitedIds = Array.from(new Set(pendingExitedIdsRef.current));
    if (exitedIds.length === 0) return;
    pendingExitedIdsRef.current = [];

    setCards((prevCards) => {
      const nextCards = [...prevCards];

      exitedIds.forEach((cardId) => {
        const cardIndex = nextCards.findIndex((card) => card.id === cardId);
        if (cardIndex < 0) return;

        const nextSeed = particleSeedRef.current;
        particleSeedRef.current += 1;

        const nextCardId = particleCardIdRef.current;
        particleCardIdRef.current += 1;

        nextCards.splice(cardIndex, 1);
        nextCards.push({
          id: nextCardId,
          seed: nextSeed,
          prefillPhase: false,
        });
      });

      return nextCards;
    });
  };

  const handleCardExited = (cardId: number) => {
    pendingExitedIdsRef.current.push(cardId);
    if (recycleFrameRef.current !== null) return;
    recycleFrameRef.current = requestAnimationFrame(flushExitedCards);
  };

  return (
    <div className="meme-transition-canvas">
      <div
        className={`meme-transition-stage${
          performanceLite ? " meme-transition-stage--lite" : ""
        }`}
      >
        {cards.map((card) => (
          <HeroBurstParticleCard
            key={`meme-transition-card-${card.id}`}
            cardId={card.id}
            seed={card.seed}
            prefillPhase={card.prefillPhase}
            performanceLite={performanceLite}
            preferNonGif={preferNonGif}
            mobileLite={mobileLite}
            onExited={handleCardExited}
          />
        ))}
      </div>
    </div>
  );
});

const heroGamePosterAsset =
  heroGameSlices.find((slice) => slice.id === "main")?.asset ??
  "/assets/home/hero-game/hero-game-main-2x.avif";

const asVars = (values: Record<string, string | number>) =>
  values as CSSProperties;

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isSmallDesktop, setIsSmallDesktop] = useState(false);
  const [useCompactHeroGame, setUseCompactHeroGame] = useState(false);
  const [isMobilePerfLite, setIsMobilePerfLite] = useState(false);
  const [mobileHeroPanelsReady, setMobileHeroPanelsReady] = useState(false);
  const mobileHeroPanelsLoadedRef = useRef(0);
  const desktopHeroSceneRef = useRef<HTMLElement | null>(null);
  const mobileHeroGameSectionRef = useRef<HTMLElement | null>(null);
  const [heroGameIndex, setHeroGameIndex] = useState(1);
  const [heroGameLoading, setHeroGameLoading] = useState(true);
  const [shouldLoadMobileHeroGame, setShouldLoadMobileHeroGame] = useState(false);
  const [isDesktopHeroGameVisible, setIsDesktopHeroGameVisible] = useState(true);
  const [isMobileHeroGameVisible, setIsMobileHeroGameVisible] = useState(false);
  const [hasHomeTopNavBg, setHasHomeTopNavBg] = useState(false);

  const switchHeroGame = (direction: 1 | -1) => {
    setHeroGameIndex((prev) =>
      (prev + direction + heroGameUrls.length) % heroGameUrls.length
    );
    setHeroGameLoading(true);
  };

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 1024px)");
    const narrowDesktopQuery = window.matchMedia(
      "(max-width: 1366px) and (min-width: 1025px)"
    );
    const tallDesktopQuery = window.matchMedia(
      "(min-width: 1025px) and (max-aspect-ratio: 3/2)"
    );
    const syncLayout = () => {
      setIsMobile(mobileQuery.matches);
      setIsSmallDesktop(narrowDesktopQuery.matches || tallDesktopQuery.matches);
      setUseCompactHeroGame(narrowDesktopQuery.matches);
    };

    syncLayout();

    if (typeof mobileQuery.addEventListener === "function") {
      mobileQuery.addEventListener("change", syncLayout);
      narrowDesktopQuery.addEventListener("change", syncLayout);
      tallDesktopQuery.addEventListener("change", syncLayout);
      return () => {
        mobileQuery.removeEventListener("change", syncLayout);
        narrowDesktopQuery.removeEventListener("change", syncLayout);
        tallDesktopQuery.removeEventListener("change", syncLayout);
      };
    }

    mobileQuery.addListener(syncLayout);
    narrowDesktopQuery.addListener(syncLayout);
    tallDesktopQuery.addListener(syncLayout);
    return () => {
      mobileQuery.removeListener(syncLayout);
      narrowDesktopQuery.removeListener(syncLayout);
      tallDesktopQuery.removeListener(syncLayout);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsMobilePerfLite(false);
      return;
    }
    const hardwareCores = navigator.hardwareConcurrency ?? 4;
    const memorySize = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const liteMode = reducedMotion || hardwareCores <= 6 || memorySize <= 4;
    setIsMobilePerfLite(liteMode);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile !== false) {
      setHasHomeTopNavBg(false);
      return;
    }

    const syncHomeTopNavBg = () => {
      const firstScreenExitY = Math.max(window.innerHeight - 96, 0);
      setHasHomeTopNavBg(window.scrollY >= firstScreenExitY);
    };

    syncHomeTopNavBg();
    window.addEventListener("scroll", syncHomeTopNavBg, { passive: true });
    window.addEventListener("resize", syncHomeTopNavBg);
    return () => {
      window.removeEventListener("scroll", syncHomeTopNavBg);
      window.removeEventListener("resize", syncHomeTopNavBg);
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      setShouldLoadMobileHeroGame(false);
      setIsMobileHeroGameVisible(false);
      return;
    }
    const section = mobileHeroGameSectionRef.current;
    if (!section) return;
    if (typeof IntersectionObserver !== "function") {
      setShouldLoadMobileHeroGame(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        setShouldLoadMobileHeroGame(true);
        observer.disconnect();
      },
      { root: null, rootMargin: "260px 0px 260px 0px", threshold: 0.01 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    if (isMobile === null) return;
    const target = isMobile ? mobileHeroGameSectionRef.current : desktopHeroSceneRef.current;
    if (!target) return;

    if (typeof IntersectionObserver !== "function") {
      if (isMobile) {
        setIsMobileHeroGameVisible(true);
      } else {
        setIsDesktopHeroGameVisible(true);
      }
      return;
    }

    const visibilityThreshold = isMobile ? 0.2 : 0.16;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const inView = Boolean(
          entry?.isIntersecting && entry.intersectionRatio >= visibilityThreshold
        );
        if (isMobile) {
          setIsMobileHeroGameVisible(inView);
        } else {
          setIsDesktopHeroGameVisible(inView);
        }
        if (!inView) {
          setHeroGameLoading(true);
        }
      },
      { threshold: [0, visibilityThreshold, 0.33, 0.5] }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    const syncMobileViewportHeight = () => {
      const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
      document.documentElement.style.setProperty(
        "--mobile-screen-h",
        `${Math.max(viewportHeight, 1) * 0.01}px`
      );
    };

    syncMobileViewportHeight();

    window.addEventListener("resize", syncMobileViewportHeight, { passive: true });
    window.addEventListener("orientationchange", syncMobileViewportHeight);
    window.visualViewport?.addEventListener("resize", syncMobileViewportHeight);

    return () => {
      window.removeEventListener("resize", syncMobileViewportHeight);
      window.removeEventListener("orientationchange", syncMobileViewportHeight);
      window.visualViewport?.removeEventListener("resize", syncMobileViewportHeight);
    };
  }, []);

  useEffect(() => {
    if (isMobile === null) return;

    const animatedSections = Array.from(
      document.querySelectorAll<HTMLElement>(
        '[data-scene], .mobile-fly-section, .mobile-stats-loop, .mobile-showcase-item'
      )
    );
    if (animatedSections.length === 0) return;

    if (typeof IntersectionObserver !== "function") {
      animatedSections.forEach((section) =>
        section.setAttribute("data-active", "true")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.setAttribute(
            "data-active",
            entry.isIntersecting ? "true" : "false"
          );
        });
      },
      {
        root: null,
        rootMargin: "12% 0px 12% 0px",
        threshold: 0.16,
      }
    );

    animatedSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;
    mobileHeroPanelsLoadedRef.current = 0;
    setMobileHeroPanelsReady(false);
  }, [isMobile]);

  const handleMobileHeroPanelAssetReady = () => {
    if (mobileHeroPanelsReady) return;
    mobileHeroPanelsLoadedRef.current += 1;
    if (mobileHeroPanelsLoadedRef.current < 3) return;
    requestAnimationFrame(() => {
      setMobileHeroPanelsReady(true);
    });
  };

  useEffect(() => {
    if (isMobile !== false) return;

    const heroFlyScene = document.querySelector<HTMLElement>(
      '[data-scene="hero-fly"]'
    );
    if (!heroFlyScene) return;
    const statsLoopScene = document.querySelector<HTMLElement>(
      '[data-scene="stats-loop"]'
    );

    const clamp = (value: number, min: number, max: number) =>
      Math.min(max, Math.max(min, value));
    const easeInOutCubic = (value: number) =>
      value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;
    const heroCopyExitTriggerPx = 200;
    const heroCopyExitTravelPx = isSmallDesktop ? 72 : 88;
    const styleWriteThreshold = isSmallDesktop ? 0.0065 : 0.0012;
    const minFrameGapMs = isSmallDesktop ? 20 : 0;
    let heroTravel = 1;
    let heroSceneTopPx = 0;
    let heroCopyExitAnchorScrollY: number | null = null;
    let lastHeroOut = -1;
    let lastHeroCopyExit = -1;
    let lastFrameTime = 0;
    let rafId: number | null = null;

    const syncHeroMetrics = () => {
      const viewportHeight = Math.max(window.innerHeight, 1);
      heroTravel = Math.max(heroFlyScene.offsetHeight - viewportHeight, 1);
      heroSceneTopPx = heroFlyScene.getBoundingClientRect().top + window.scrollY;
    };

    const update = () => {
      const scrollY = window.scrollY;
      const scrolledInHeroPx = clamp(scrollY - heroSceneTopPx, 0, heroTravel);
      const heroOutRaw = clamp(scrolledInHeroPx / heroTravel, 0, 1);
      const heroOut = easeInOutCubic(heroOutRaw);
      if (Math.abs(heroOut - lastHeroOut) >= styleWriteThreshold) {
        heroFlyScene.style.setProperty("--hero-out", heroOut.toFixed(4));
        lastHeroOut = heroOut;
      }

      let exitRaw = 0;
      if (statsLoopScene) {
        const statsTop = statsLoopScene.getBoundingClientRect().top;
        const isStatsVisible = statsTop <= window.innerHeight;
        if (!isStatsVisible) {
          heroCopyExitAnchorScrollY = null;
        } else if (heroCopyExitAnchorScrollY === null) {
          heroCopyExitAnchorScrollY = scrollY;
        }
        const anchorScrollY = heroCopyExitAnchorScrollY ?? scrollY;
        exitRaw = clamp(
          (scrollY - anchorScrollY - heroCopyExitTriggerPx) /
            heroCopyExitTravelPx,
          0,
          1
        );
      }
      const heroCopyExit = easeInOutCubic(exitRaw);
      if (Math.abs(heroCopyExit - lastHeroCopyExit) >= styleWriteThreshold) {
        heroFlyScene.style.setProperty("--hero-copy-exit", heroCopyExit.toFixed(4));
        lastHeroCopyExit = heroCopyExit;
      }
    };

    let ticking = false;
    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      rafId = requestAnimationFrame((timestamp) => {
        rafId = null;
        if (minFrameGapMs > 0 && timestamp - lastFrameTime < minFrameGapMs) {
          ticking = false;
          return;
        }
        lastFrameTime = timestamp;
        update();
        ticking = false;
      });
    };
    const onResize = () => {
      syncHeroMetrics();
      onScrollOrResize();
    };
    const onLoad = () => {
      syncHeroMetrics();
      update();
    };

    syncHeroMetrics();
    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onLoad);

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onLoad);
    };
  }, [isMobile, isSmallDesktop]);

  if (isMobile === null) {
    return <main className="rezona-page" style={{ minHeight: "100vh" }} />;
  }

  const shouldRunDesktopHeroGame = !isMobile && isDesktopHeroGameVisible;
  const shouldRunMobileHeroGame =
    isMobile && shouldLoadMobileHeroGame && isMobileHeroGameVisible;
  const activeHeroBgSlices = isSmallDesktop ? narrowPcHeroBgSlices : heroBgSlices;
  const activeHeroGameSlices = useCompactHeroGame ? narrowPcHeroGameSlices : heroGameSlices;

  return (
    <main className="rezona-page">
      {!isMobile && (
        <>
          <header
            className={`home-top-nav desktop-only${hasHomeTopNavBg ? " has-nav-bg" : ""}`}
          >
            <Link className="home-top-logo" href="/" aria-label="Go back to home">
              <img
                src="/assets/shared/brand/mobile-top-logo-2x.webp"
                alt="REZONA"
                width={261}
                height={60}
                loading="eager"
                decoding="async"
              />
            </Link>

            <Link
              className="home-top-explore-link home-top-explore-pill"
              href="/explore-more"
              aria-label="Explore more games"
            >
              Explore more games
            </Link>
          </header>

          <div className="desktop-layout">
      <section
        ref={desktopHeroSceneRef}
        className="scene hero-fly-scene"
        data-scene="hero-fly"
        data-active="true"
      >
        <div className="sticky">
          <div className="hero-canvas">
            <HeroBurstCanvas performanceLite={isSmallDesktop} />

            <div className="hero-world">
              {activeHeroBgSlices.map((slice) => (
                <img
                  key={slice.id}
                  className="hero-slice hero-bg-slice"
                  data-slice-id={slice.id}
                  style={asVars({
                    "--x": `${slice.xPct}%`,
                    "--y": `${slice.yPct}%`,
                    "--w": `${slice.wPct}%`,
                    "--h": `${slice.hPct}%`,
                  })}
                  src={slice.asset}
                  alt={`Hero background ${slice.id}`}
                  loading="eager"
                  decoding="async"
                />
              ))}
            </div>

            <div className="hero-focus-stage">
              {activeHeroGameSlices
                .filter((slice) => slice.id === "main")
                .map((slice) => {
                  const sliceStyle = asVars({
                    "--x": `${slice.xPct}%`,
                    "--y": `${slice.yPct}%`,
                    "--w": `${slice.wPct}%`,
                    "--h": `${slice.hPct}%`,
                  });
                  return (
                    <div
                      key={slice.id}
                      className="hero-game-frame"
                      data-slice-id={slice.id}
                      style={sliceStyle}
                    >
                      {shouldRunDesktopHeroGame ? (
                        <iframe
                          className="hero-game-iframe"
                          src={heroGameUrls[heroGameIndex]}
                          title="Hero game main"
                          loading="eager"
                          allow="autoplay; fullscreen; gamepad; gyroscope; accelerometer; xr-spatial-tracking"
                          onLoad={() => setHeroGameLoading(false)}
                        />
                      ) : (
                        <img
                          className="hero-game-poster"
                          src={heroGamePosterAsset}
                          alt="Hero game preview"
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                      {shouldRunDesktopHeroGame && heroGameLoading && (
                        <div className="game-skeleton" aria-hidden="true" />
                      )}
                    </div>
                  );
                })}

              <div className="hero-game-controls">
                {activeHeroGameSlices
                  .filter((slice) => slice.id !== "main")
                  .map((slice) => {
                    const isUp = slice.id === "up";
                    return (
                      <button
                        key={slice.id}
                        type="button"
                        className="hero-game-nav"
                        data-slice-id={slice.id}
                        style={asVars({
                          "--x": `${slice.xPct}%`,
                          "--y": `${slice.yPct}%`,
                          "--w": `${slice.wPct}%`,
                          "--h": `${slice.hPct}%`,
                        })}
                        onClick={() => switchHeroGame(isUp ? -1 : 1)}
                        aria-label={isUp ? "Previous game" : "Next game"}
                      >
                        <img
                          src={slice.asset}
                          alt={`Hero game ${slice.id}`}
                          loading="lazy"
                          decoding="async"
                        />
                      </button>
                    );
                  })}
              </div>
            </div>

            <div className="hero-center-copy-layer">
              <h1 className="hero-center-text">
                Meme culture,
                <br />
                now a social
                <br />
                platform.
              </h1>
              <GetAppButton
                className="hero-center-cta"
                aria-label="Get App Now"
                label="Get App Now"
              >
                <span>Get App Now</span>
              </GetAppButton>
            </div>
          </div>
        </div>
      </section>

      <StatsLoopScene />

      {showcaseScenes.map((scene) => (
        <section className="scene showcase-scene" data-scene={scene.id} key={scene.id}>
          <div className="showcase-frame">
            <div className={`showcase-content${scene.reverse ? " is-reverse" : ""}`}>
              <div className="showcase-copy">
                <h2 className="showcase-title">{scene.title}</h2>
                <p className="showcase-description">{scene.description}</p>
              </div>
              <div className="showcase-media">
                <img
                  className="showcase-image"
                  src={scene.media}
                  alt={scene.mediaAlt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="scene footer-scene" data-scene="footer">
        <div className="footer-stack">
          {tailScenes.map((scene) => (
            <div
              key={scene.id}
              className="footer-tail-frame"
              style={asVars({ "--tail-ratio": scene.ratio })}
            >
              <img
                className="footer-tail-image"
                src={scene.asset}
                alt={scene.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}

          <div className="footer-tail-composed">
            <DinoLottie
              className="footer-bottom-dino"
              fallbackSrc="/assets/shared/footer/footer-dino-loading-animation-1.svg"
              alt="Dino"
            />
            <p className="footer-bottom-brand" aria-label="REZONA.AI">
              REZONA.AI
            </p>
            <a
              className="footer-bottom-appstore"
              href="https://apps.apple.com/us/app/rezona-ai-game-maker/id6752310101"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open App Store"
            >
              <img
                src="/assets/shared/store/store-appstore-new.webp"
                alt="App Store"
                loading="lazy"
                decoding="async"
              />
            </a>
            <a
              className="footer-bottom-googleplay"
              href="https://play.google.com/store/apps/details?id=ai.rezona.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Google Play"
            >
              <img
                src="/assets/shared/store/store-qr-new.webp"
                alt="Google Play"
                loading="lazy"
                decoding="async"
              />
            </a>
            <div className="footer-bottom-qr-wrap">
              <img
                className="footer-bottom-qr"
                src="/assets/shared/app-download/popup-qr-content-2x.webp"
                alt="QR"
                loading="lazy"
                decoding="async"
              />
            </div>

            {footerSocialSlices.map((item) => (
              <a
                key={item.id}
                className="footer-bottom-social"
                style={asVars({ "--social-left": `${item.left}%` })}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${item.id}`}
              >
                <img src={item.asset} alt={item.id} loading="lazy" decoding="async" />
              </a>
            ))}

            <div className="footer-legal" aria-label="Legal information">
              <div className="footer-legal-links">
                {legalLinks.map((item, index) => (
                  <Fragment key={item.href}>
                    {index > 0 && <span aria-hidden="true">{" | "}</span>}
                    <Link className="footer-legal-link" href={item.href}>
                      {item.label}
                    </Link>
                  </Fragment>
                ))}
              </div>
              <p className="footer-legal-copy">© 2026 All Rights Reserved, Rezona</p>
            </div>
          </div>
        </div>
      </section>
          </div>
        </>
      )}

      {isMobile && (
        <div className="mobile-layout">
        <section className="mobile-hero-section">
          <div
            className={`mobile-hero-panels${mobileHeroPanelsReady ? " is-ready" : ""}`}
            aria-hidden="true"
          >
            <img
              className="mobile-hero-panel mobile-hero-panel-1"
              src="/assets/home/hero-bg/mobile/mb-youridea.webp"
              alt=""
              loading="eager"
              decoding="async"
              onLoad={handleMobileHeroPanelAssetReady}
              onError={handleMobileHeroPanelAssetReady}
            />
            <img
              className="mobile-hero-panel mobile-hero-panel-2"
              src="/assets/home/hero-bg/mobile/mb-yourtool.webp"
              alt=""
              loading="eager"
              decoding="async"
              onLoad={handleMobileHeroPanelAssetReady}
              onError={handleMobileHeroPanelAssetReady}
            />
            <img
              className="mobile-hero-panel mobile-hero-panel-3"
              src="/assets/home/hero-bg/mobile/mb-yourgame.webp"
              alt=""
              loading="eager"
              decoding="async"
              onLoad={handleMobileHeroPanelAssetReady}
              onError={handleMobileHeroPanelAssetReady}
            />
          </div>

          <div className="mobile-top-nav">
            <img
              className="mobile-top-logo"
              src="/assets/shared/brand/mobile-top-logo-2x.webp"
              alt="Rezona"
              width={173}
              height={28}
              loading="lazy"
              decoding="async"
            />
            <a
              className="mobile-top-cta home-mobile-top-cta"
              href="/explore-more"
              aria-label="Explore more"
            >
              Explore more
            </a>
          </div>

          <div className="mobile-hero-copy">
            <h1 className="mobile-hero-title">Meme culture, now a social platform.</h1>
            <GetAppButton
              className="mobile-hero-cta home-mobile-hero-cta"
              aria-label="Get App Now"
              label="Get App Now"
            />
          </div>
        </section>
        <div className="mobile-content-shell">
          <section
            className={`mobile-fly-section${isMobilePerfLite ? " is-performance-lite" : ""}`}
          >
            <HeroBurstCanvas
              performanceLite
              preferNonGif
              mobileLite={isMobilePerfLite}
            />
          </section>

          <section className="mobile-content-game-section" ref={mobileHeroGameSectionRef}>
            <div className="mobile-content-game-frame">
              {shouldRunMobileHeroGame ? (
                <iframe
                  className="mobile-content-game-main"
                  src={heroGameUrls[heroGameIndex]}
                  title="Rezona game hero"
                  loading="lazy"
                  allow="autoplay; fullscreen; gamepad; gyroscope; accelerometer; xr-spatial-tracking"
                  onLoad={() => setHeroGameLoading(false)}
                />
              ) : (
                <img
                  className="hero-game-poster"
                  src={heroGamePosterAsset}
                  alt="Hero game preview"
                  loading="lazy"
                  decoding="async"
                />
              )}
              {shouldRunMobileHeroGame && heroGameLoading && (
                <div className="game-skeleton" aria-hidden="true" />
              )}
            </div>
            <div className="mobile-content-game-nav">
              <button
                className="mobile-content-game-nav-btn"
                type="button"
                aria-label="Previous game"
                onClick={() => switchHeroGame(-1)}
              >
                <img
                  src="/assets/home/hero-game/hero-game-up-2x.webp"
                  alt=""
                  width={58}
                  height={58}
                  loading="lazy"
                  decoding="async"
                />
              </button>
              <button
                className="mobile-content-game-nav-btn"
                type="button"
                aria-label="Next game"
                onClick={() => switchHeroGame(1)}
              >
                <img
                  src="/assets/home/hero-game/hero-game-down-2x.webp"
                  alt=""
                  width={58}
                  height={58}
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </div>
          </section>

          <MobileStatsLoopScene />

          <section className="mobile-showcase-list">
            {mobileShowcaseScenes.map((scene) => (
              <article
                className="mobile-showcase-item"
                data-mobile-scene={scene.id}
                data-active="false"
                key={scene.id}
              >
                <div className="mobile-showcase-media-shell">
                  <img
                    className="mobile-showcase-media"
                    src={scene.media}
                    alt={scene.mediaAlt}
                    width={343}
                    height={343}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h2 className="mobile-showcase-title">{scene.title}</h2>
                <p className="mobile-showcase-description">{scene.description}</p>
              </article>
            ))}
          </section>

          <section className="mobile-built-section">
            <img
              src="/assets/home/showcase/mobile/mobile-built-2x.webp"
              alt="Built for meme"
              width={359}
              height={102}
              loading="lazy"
              decoding="async"
            />
          </section>

          <SiteFooter />
        </div>
        </div>
      )}

    </main>
  );
}
