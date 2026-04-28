/* eslint-disable @next/next/no-img-element */
"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { memo, useEffect, useRef, useState } from "react";
import GetAppButton from "./components/get-app-button";
import heroParticleUgcAssets from "./data/hero-particle-ugc.json";
import footerDinoAnimation from "./data/footer-dino-animation.json";

type FlyCard = {
  id: string;
  asset: string;
  width: number;
  height: number;
  xPct: number;
  yPct: number;
  wPct: number;
  hPct: number;
  depth: number;
  tilt: number;
};

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

type HeroSlice = {
  id: string;
  asset: string;
  xPct: number;
  yPct: number;
  wPct: number;
  hPct: number;
};

type MobileFlyCard = {
  id: string;
  asset: string;
  xPct: number;
  yPct: number;
  wPct: number;
  hPct: number;
};

type ShowcaseScene = {
  id: string;
  media: string;
  mediaAlt: string;
  title: string;
  description: string;
  reverse: boolean;
};

type TailScene = {
  id: string;
  asset: string;
  alt: string;
  ratio: string;
};

const flyCards: FlyCard[] = [
  {
    id: "1",
    asset: "/figma/assets/fly-1.webp",
    width: 195,
    height: 315,
    xPct: 2.653,
    yPct: 15.265,
    wPct: 10.137,
    hPct: 24.533,
    depth: 980,
    tilt: -8,
  },
  {
    id: "8",
    asset: "/figma/assets/fly-8.webp",
    width: 311,
    height: 503,
    xPct: -4.058,
    yPct: 68.224,
    wPct: 16.181,
    hPct: 39.161,
    depth: 1320,
    tilt: 7,
  },
  {
    id: "11",
    asset: "/figma/assets/fly-11.webp",
    width: 248,
    height: 372,
    xPct: 72.737,
    yPct: 3.271,
    wPct: 12.903,
    hPct: 28.972,
    depth: 1160,
    tilt: 10,
  },
  {
    id: "10",
    asset: "/figma/assets/fly-10.webp",
    width: 141,
    height: 169,
    xPct: 25.182,
    yPct: 35.748,
    wPct: 7.336,
    hPct: 13.162,
    depth: 760,
    tilt: -9,
  },
  {
    id: "4",
    asset: "/figma/assets/fly-4.webp",
    width: 136,
    height: 241,
    xPct: 18.106,
    yPct: 6.854,
    wPct: 7.076,
    hPct: 18.769,
    depth: 720,
    tilt: 4,
  },
  {
    id: "9",
    asset: "/figma/assets/fly-9.webp",
    width: 89,
    height: 144,
    xPct: 66.857,
    yPct: 47.04,
    wPct: 4.634,
    hPct: 11.215,
    depth: 640,
    tilt: -5,
  },
  {
    id: "6",
    asset: "/figma/assets/fly-6.webp",
    width: 157,
    height: 254,
    xPct: 50.0,
    yPct: 70.093,
    wPct: 8.174,
    hPct: 19.782,
    depth: 960,
    tilt: 0,
  },
  {
    id: "7",
    asset: "/figma/assets/fly-7.webp",
    width: 330,
    height: 534,
    xPct: 88.085,
    yPct: 38.396,
    wPct: 17.17,
    hPct: 41.554,
    depth: 1450,
    tilt: -8,
  },
  {
    id: "5",
    asset: "/figma/assets/fly-5.webp",
    width: 252,
    height: 407,
    xPct: 70.656,
    yPct: 79.984,
    wPct: 13.111,
    hPct: 31.732,
    depth: 1280,
    tilt: 9,
  },
  {
    id: "104",
    asset: "/figma/assets/fly-104.webp",
    width: 160,
    height: 160,
    xPct: 54.006,
    yPct: 43.925,
    wPct: 8.314,
    hPct: 12.445,
    depth: 880,
    tilt: -14,
  },
  {
    id: "3",
    asset: "/figma/assets/fly-3.webp",
    width: 164,
    height: 265,
    xPct: 48.075,
    yPct: 16.199,
    wPct: 8.533,
    hPct: 20.639,
    depth: 810,
    tilt: 5,
  },
  {
    id: "105",
    asset: "/figma/assets/fly-105.webp",
    width: 191,
    height: 245,
    xPct: 21.977,
    yPct: 58.723,
    wPct: 9.938,
    hPct: 19.081,
    depth: 1080,
    tilt: -16,
  },
];

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
const heroBurstRecentVisualIds: string[] = [];

const deterministicUnitBySeed = (seed: number) => {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

const pickHeroBurstVisualAssetBySeed = (seed: number): HeroBurstVisualAsset => {
  const shouldUseGif =
    heroBurstGifVisualAssets.length > 0 &&
    deterministicUnitBySeed(seed) < HERO_BURST_GIF_RATE;
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
      asset: "/figma/assets/hero-particles/ugc-new/capybara.webp",
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
const HERO_BURST_SECONDARY_EMITTER_RATE = 0.62;
const HERO_BURST_ALPHA_GAIN = 0.92;

const randomBetween = (min: number, max: number) =>
  min + Math.random() * (max - min);

const pickRandom = <T,>(items: readonly T[]) =>
  items[Math.floor(Math.random() * items.length)];

const createRandomHeroBurstParticle = (
  seed: number,
  options?: { prefillPhase?: boolean }
): HeroBurstParticle => {
  const motionSource = pickRandom(flyCards);
  const visualSource = pickHeroBurstVisualAssetBySeed(seed);
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
  const sizeVw = Math.max(
    2.5,
    Math.min(
      isNearPass ? 14.4 : 11.6,
      motionSource.wPct *
        randomBetween(0.46, 0.66) *
        (1 + nearWeight * 0.12) *
        rareLargeBoost
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
  const startScale = randomBetween(0.07, 0.14) + nearWeight * 0.02;
  const midScale = randomBetween(0.46, isNearPass ? 0.82 : 0.72) + nearWeight * 0.08;
  const endScale = randomBetween(isNearPass ? 1.24 : 1.02, isNearPass ? 1.56 : 1.28) +
    nearWeight * (isNearPass ? 0.28 : 0.2);
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
  onExited,
}: {
  cardId: number;
  seed: number;
  prefillPhase?: boolean;
  performanceLite?: boolean;
  onExited: (cardId: number) => void;
}) {
  const [particle] = useState<HeroBurstParticle>(() =>
    createRandomHeroBurstParticle(seed, { prefillPhase })
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
}: {
  performanceLite?: boolean;
}) {
  const particleCount = performanceLite
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
            onExited={handleCardExited}
          />
        ))}
      </div>
    </div>
  );
});

const mobileFlyCards: MobileFlyCard[] = [
  {
    id: "1",
    asset: "/figma/assets/mobile-fly-1-2x.webp",
    xPct: 2.1333,
    yPct: 1.81,
    wPct: 21.3333,
    hPct: 29.4118,
  },
  {
    id: "8",
    asset: "/figma/assets/mobile-fly-8-2x.webp",
    xPct: 61.0667,
    yPct: 0,
    wPct: 21.3333,
    hPct: 29.1855,
  },
  {
    id: "4",
    asset: "/figma/assets/mobile-fly-4-2x.webp",
    xPct: 76.5333,
    yPct: 18.0995,
    wPct: 21.3333,
    hPct: 32.1267,
  },
  {
    id: "6",
    asset: "/figma/assets/mobile-fly-6-2x.webp",
    xPct: 31.7333,
    yPct: 5.8824,
    wPct: 21.3333,
    hPct: 29.1855,
  },
  {
    id: "11",
    asset: "/figma/assets/mobile-fly-11-2x.webp",
    xPct: 50.1333,
    yPct: 29.1855,
    wPct: 21.3333,
    hPct: 27.1493,
  },
  {
    id: "5",
    asset: "/figma/assets/mobile-fly-5-2x.webp",
    xPct: 2.1333,
    yPct: 35.7466,
    wPct: 21.3333,
    hPct: 29.1855,
  },
  {
    id: "3",
    asset: "/figma/assets/mobile-fly-3-2x.webp",
    xPct: 71.7333,
    yPct: 56.5611,
    wPct: 21.3333,
    hPct: 29.1855,
  },
  {
    id: "10",
    asset: "/figma/assets/mobile-fly-10-2x.webp",
    xPct: 26.1333,
    yPct: 54.9774,
    wPct: 21.3333,
    hPct: 21.7195,
  },
  {
    id: "9",
    asset: "/figma/assets/mobile-fly-9-2x.webp",
    xPct: 14.6667,
    yPct: 69.0045,
    wPct: 21.3333,
    hPct: 29.1855,
  },
  {
    id: "7",
    asset: "/figma/assets/mobile-fly-7-2x.webp",
    xPct: 43.2,
    yPct: 69.0045,
    wPct: 21.3333,
    hPct: 29.1855,
  },
];

const heroBgSlices: HeroSlice[] = [
  {
    id: "left",
    asset: "/figma/website-materials/mobile/desktop/pc-yourideas.webp",
    xPct: -1.2,
    yPct: 4.9,
    wPct: 26.4,
    hPct: 89.8,
  },
  {
    id: "right",
    asset: "/figma/website-materials/mobile/desktop/pc-yourtool.webp",
    xPct: 74.8,
    yPct: 4.9,
    wPct: 26.4,
    hPct: 86.8,
  },
  {
    id: "bottom",
    asset: "/figma/website-materials/mobile/desktop/pc-games.webp",
    xPct: -3.6,
    yPct: 81,
    wPct: 107.4,
    hPct: 20,
  },
  {
    id: "top",
    asset: "/figma/website-materials/mobile/desktop/pc-rznai.webp",
    xPct: -2,
    yPct: -0.6,
    wPct: 104,
    hPct: 19.5,
  },
];

const heroGameSlices: HeroSlice[] = [
  {
    id: "main",
    asset: "/figma/assets/hero-game-main-2x.avif",
    xPct: 53.2,
    yPct: 19.8,
    wPct: 21.8,
    hPct: 61.3,
  },
  {
    id: "up",
    asset: "/figma/assets/hero-game-up-2x.webp",
    xPct: 75.6,
    yPct: 65.8,
    wPct: 4.562422,
    hPct: 4.562422,
  },
  {
    id: "down",
    asset: "/figma/assets/hero-game-down-2x.webp",
    xPct: 75.6,
    yPct: 73.7,
    wPct: 4.562422,
    hPct: 4.562422,
  },
];

const heroGameUrls = [
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/dist/5812251/12621602/index.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/e927a528-687b-4189-b26d-e817c6bc1983/cartman_kfc.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/37575c0a-1269-4815-86ab-f0d62fe14b4c/nuke-darts.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/18e7ae65-afcc-4cfc-8d01-a1b2d53b9ff0/escape-herbert.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/5eea8523-1e7c-4034-9e2c-49ecf6484e17/italian-brainrot-surfers.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/dist/5812884/12623016/index.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/ffcd7454-29a8-42e0-8871-b3d833d9a4c1/brainrot-solitaire.html",
];

const mobileShowcaseScenes: ShowcaseScene[] = [
  {
    id: "mobile-showcase-sec4",
    media: "/figma/assets/mobile-sec4-media-2x.webp",
    mediaAlt: "Fresh memes collage",
    title: "Freshest memes\nfrom every corner",
    description:
      "A library that never gets stale. Memes from every culture, every trend cycle, every timezone — drop one into a game before it even peaks.",
    reverse: false,
  },
  {
    id: "mobile-showcase-sec5",
    media: "/figma/assets/mobile-sec5-media-2x.webp",
    mediaAlt: "VR creator portrait",
    title: "Total creative\ncontrol",
    description:
      "Upload whatever assets you want — no limits on what you bring in. Remix, layer, and personalize until the game feels exactly like you made it.",
    reverse: false,
  },
  {
    id: "mobile-showcase-sec6",
    media: "/figma/assets/mobile-sec6-media-2x.webp",
    mediaAlt: "Sound production studio",
    title: "Your sounds —\nor ours",
    description:
      "Bring your own beats, voice clips, or effects — or let Rezona build it from scratch. Either path lands you a game with sound design that actually slaps.",
    reverse: false,
  },
  {
    id: "mobile-showcase-sec7",
    media: "/figma/assets/mobile-sec7-media-2x.webp",
    mediaAlt: "Cyber crew group portrait",
    title: "Bring the crew",
    description:
      "The first — and only — AI game platform with real multiplayer. Build a game, share the lobby, and drop in together.",
    reverse: false,
  },
];

const showcaseScenes: ShowcaseScene[] = [
  {
    id: "showcase-sec4",
    media: "/figma/assets/mobile-sec4-media-2x.webp",
    mediaAlt: "Fresh memes collage",
    title: "Freshest Memes\nFrom Every\nCorner",
    description:
      "A library that never gets stale. Memes from every culture, every trend cycle, every timezone drop one into a game before it even peaks.",
    reverse: false,
  },
  {
    id: "showcase-sec5",
    media: "/figma/assets/mobile-sec5-media-2x.webp",
    mediaAlt: "VR creator portrait",
    title: "Total Creative\nControl",
    description:
      "Upload whatever assets you want no limits on what you bring in. Remix, layer, and personalize until the game feels exactly like you made it (welp actually you did).",
    reverse: true,
  },
  {
    id: "showcase-sec6",
    media: "/figma/assets/mobile-sec6-media-2x.webp",
    mediaAlt: "Sound production studio",
    title: "Your Sounds –Or Ours",
    description:
      "Bring your own beats, voice clips, or effects—or let Rezo build it from scratch. Either path lands you a game with sound design that actually slaps.",
    reverse: false,
  },
  {
    id: "showcase-sec7",
    media: "/figma/assets/mobile-sec7-media-2x.webp",
    mediaAlt: "Cyber crew group portrait",
    title: "Bring The Crew",
    description:
      "The first and only AI game platform with real multiplayer. Build a game, share the lobby, and drop in together. Nobody else does this like Rezo.",
    reverse: true,
  },
];

const swiperStates = [
  { id: "yellow", asset: "/figma/swiper/1.webp", alt: "10M game play yellow card" },
  { id: "pink", asset: "/figma/swiper/3.webp", alt: "10M game play pink card" },
  { id: "blue", asset: "/figma/swiper/4.webp", alt: "10M game play blue card" },
  { id: "green", asset: "/figma/swiper/2.webp", alt: "10M game play green card" },
];

const swiperStripOrder = [
  swiperStates[3],
  swiperStates[0],
  swiperStates[1],
  swiperStates[2],
];

const tailScenes: TailScene[] = [
  {
    id: "tail-998-25744",
    asset: "/figma/assets/tail-2x.avif",
    alt: "Rezona tail section top",
    ratio: "1920 / 790",
  },
];

const footerSocialSlices = [
  {
    id: "x",
    asset: "/figma/assets/footer-social-x-2x.webp",
    left: 66.1667,
    href: "https://x.com/rezona_ai",
  },
  {
    id: "telegram",
    asset: "/figma/assets/footer-social-telegram-2x.webp",
    left: 70.3333,
    href: "https://t.me/rezona_ai",
  },
  {
    id: "discord",
    asset: "/figma/assets/footer-social-discord-2x.webp",
    left: 74.5,
    href: "https://discord.gg/rezona",
  },
  {
    id: "tiktok",
    asset: "/figma/assets/footer-social-tiktok-2x.webp",
    left: 78.6667,
    href: "https://www.tiktok.com/@rezona.ai",
  },
  {
    id: "youtube",
    asset: "/figma/assets/footer-social-youtube-2x.webp",
    left: 82.8333,
    href: "https://www.youtube.com/@rezona-app",
  },
  {
    id: "instagram",
    asset: "/figma/assets/footer-social-instagram-2x.webp",
    left: 87.0,
    href: "https://www.instagram.com/rezona.ai",
  },
  {
    id: "threads",
    asset: "/figma/assets/footer-social-threads-2x.webp",
    left: 91.1667,
    href: "https://www.threads.com/@rezona.ai",
  },
  {
    id: "social",
    asset: "/figma/assets/social.webp",
    left: 95.1667,
    href: "https://www.reddit.com/r/rezona/",
  },
];

const mobileFooterSocialSlices = [
  {
    id: "x",
    asset: "/figma/assets/mobile-social-x-2x.webp",
    href: "https://x.com/rezona_ai",
  },
  {
    id: "telegram",
    asset: "/figma/assets/mobile-social-telegram-2x.webp",
    href: "https://t.me/rezona_ai",
  },
  {
    id: "discord",
    asset: "/figma/assets/mobile-social-discord-2x.webp",
    href: "https://discord.gg/rezona",
  },
  {
    id: "tiktok",
    asset: "/figma/assets/mobile-social-tiktok-2x.webp",
    href: "https://www.tiktok.com/@rezona.ai",
  },
  {
    id: "youtube",
    asset: "/figma/assets/mobile-social-youtube-2x.webp",
    href: "https://www.youtube.com/@rezona-app",
  },
  {
    id: "instagram",
    asset: "/figma/assets/mobile-social-instagram-2x.webp",
    href: "https://www.instagram.com/rezona.ai",
  },
  {
    id: "threads",
    asset: "/figma/assets/mobile-social-threads-2x.webp",
    href: "https://www.threads.com/@rezona.ai",
  },
  {
    id: "social",
    asset: "/figma/assets/social-mobile.webp",
    href: "https://www.reddit.com/r/rezona/",
  },
];

const asVars = (values: Record<string, string | number>) =>
  values as CSSProperties;

const DinoLottie = memo(function DinoLottie({
  className,
  fallbackSrc,
  alt,
}: {
  className: string;
  fallbackSrc: string;
  alt: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<import("lottie-web").AnimationItem | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const mountNode = containerRef.current;
    if (!mountNode) return;

    const mountAnimation = async () => {
      try {
        const lottieModule = await import("lottie-web");
        const lottie = lottieModule.default;
        if (!isMounted) return;

        animationRef.current = lottie.loadAnimation({
          container: mountNode,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: footerDinoAnimation,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid meet",
          },
        });
        setIsReady(true);
      } catch {
        setIsReady(false);
      }
    };

    mountAnimation();

    return () => {
      isMounted = false;
      animationRef.current?.destroy();
      animationRef.current = null;
    };
  }, []);

  return (
    <div className={`${className} dino-lottie-shell`} role="img" aria-label={alt}>
      <div className="dino-lottie-canvas" ref={containerRef} aria-hidden="true" />
      {!isReady && (
        <img
          className="dino-lottie-fallback"
          src={fallbackSrc}
          alt=""
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
      )}
    </div>
  );
});

const StatsLoopScene = memo(function StatsLoopScene() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isSceneActive, setIsSceneActive] = useState(true);
  const [statsActiveIndex, setStatsActiveIndex] = useState(0);
  const statsPrevIndex =
    (statsActiveIndex - 1 + swiperStates.length) % swiperStates.length;
  const statsNextIndex = (statsActiveIndex + 1) % swiperStates.length;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const syncActive = () =>
      setIsSceneActive(section.getAttribute("data-active") !== "false");

    syncActive();
    const observer = new MutationObserver(syncActive);
    observer.observe(section, { attributes: true, attributeFilter: ["data-active"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isSceneActive) return;
    const timer = window.setInterval(() => {
      setStatsActiveIndex((prev) => (prev + 1) % swiperStates.length);
    }, 1600);
    return () => window.clearInterval(timer);
  }, [isSceneActive]);

  return (
    <section
      className="scene stats-loop-scene"
      data-scene="stats-loop"
      id="scene3"
      ref={sectionRef}
    >
      <div className="sticky">
        <div className="stats-carousel-shell" aria-hidden="true">
          <div className="stats-strip">
            <div className="stats-strip-track">
              {[0, 1, 2].flatMap((copy) =>
                swiperStripOrder.map((state, index) => (
                  <div className="stats-strip-card" key={`${state.id}-strip-${copy}-${index}`}>
                    <img
                      src={state.asset}
                      alt={state.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="stats-carousel-stage">
            {swiperStates.map((state, index) => (
              <div
                key={state.id}
                className={`stats-state ${
                  index === statsActiveIndex
                    ? "is-active"
                    : index === statsNextIndex
                      ? "is-next"
                      : index === statsPrevIndex
                        ? "is-prev"
                        : "is-hidden"
                }`}
              >
                <img
                  className="stats-state-image"
                  src={state.asset}
                  alt={state.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

const MobileStatsLoopScene = memo(function MobileStatsLoopScene() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isSceneActive, setIsSceneActive] = useState(true);
  const [statsActiveIndex, setStatsActiveIndex] = useState(0);
  const statsPrevIndex =
    (statsActiveIndex - 1 + swiperStates.length) % swiperStates.length;
  const statsNextIndex = (statsActiveIndex + 1) % swiperStates.length;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const syncActive = () =>
      setIsSceneActive(section.getAttribute("data-active") !== "false");

    syncActive();
    const observer = new MutationObserver(syncActive);
    observer.observe(section, { attributes: true, attributeFilter: ["data-active"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isSceneActive) return;
    const timer = window.setInterval(() => {
      setStatsActiveIndex((prev) => (prev + 1) % swiperStates.length);
    }, 1600);
    return () => window.clearInterval(timer);
  }, [isSceneActive]);

  return (
    <section
      className="mobile-fly-divider mobile-stats-loop"
      aria-label="Game play stats"
      ref={sectionRef}
    >
      <div className="mobile-stats-loop-canvas" aria-hidden="true">
        <div className="stats-carousel-shell">
          <div className="stats-strip">
            <div className="stats-strip-track">
              {[0, 1, 2].flatMap((copy) =>
                swiperStripOrder.map((state, index) => (
                  <div className="stats-strip-card" key={`${state.id}-mobile-strip-${copy}-${index}`}>
                    <img
                      src={state.asset}
                      alt={state.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="stats-carousel-stage">
            {swiperStates.map((state, index) => (
              <div
                key={`${state.id}-mobile-state`}
                className={`stats-state ${
                  index === statsActiveIndex
                    ? "is-active"
                    : index === statsNextIndex
                      ? "is-next"
                      : index === statsPrevIndex
                        ? "is-prev"
                        : "is-hidden"
                }`}
              >
                <img
                  className="stats-state-image"
                  src={state.asset}
                  alt={state.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isSmallDesktop, setIsSmallDesktop] = useState(false);
  const [mobileHeroPanelsReady, setMobileHeroPanelsReady] = useState(false);
  const mobileHeroPanelsLoadedRef = useRef(0);
  const [heroGameIndex, setHeroGameIndex] = useState(0);
  const [heroGameLoading, setHeroGameLoading] = useState(true);

  const switchHeroGame = (direction: 1 | -1) => {
    setHeroGameIndex((prev) =>
      (prev + direction + heroGameUrls.length) % heroGameUrls.length
    );
    setHeroGameLoading(true);
  };

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 900px)");
    const smallDesktopQuery = window.matchMedia(
      "(max-width: 1366px) and (min-width: 901px)"
    );
    const syncLayout = () => {
      setIsMobile(mobileQuery.matches);
      setIsSmallDesktop(smallDesktopQuery.matches);
    };

    syncLayout();

    if (typeof mobileQuery.addEventListener === "function") {
      mobileQuery.addEventListener("change", syncLayout);
      smallDesktopQuery.addEventListener("change", syncLayout);
      return () => {
        mobileQuery.removeEventListener("change", syncLayout);
        smallDesktopQuery.removeEventListener("change", syncLayout);
      };
    }

    mobileQuery.addListener(syncLayout);
    smallDesktopQuery.addListener(syncLayout);
    return () => {
      mobileQuery.removeListener(syncLayout);
      smallDesktopQuery.removeListener(syncLayout);
    };
  }, []);

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

  return (
    <main className="rezona-page">
      {!isMobile && (
        <>
          <header className="figma-header desktop-only">
            <img
              src="/figma/assets/header.webp"
              alt="Rezona Header"
              width={1920}
              height={109}
              loading="eager"
              decoding="async"
            />
            <Link
              className="home-top-explore-link"
              href="/explore-more"
              aria-label="Explore more games"
            >
              Explore more games
            </Link>
          </header>

          <div className="desktop-layout">
      <section className="scene hero-fly-scene" data-scene="hero-fly" data-active="true">
        <div className="sticky">
          <div className="hero-canvas">
            <HeroBurstCanvas performanceLite={isSmallDesktop} />

            <div className="hero-world">
              {heroBgSlices.map((slice) => (
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
              {heroGameSlices
                .filter((slice) => slice.id === "main")
                .map((slice) => {
                  const sliceStyle = asVars({
                    "--x": `${slice.xPct}%`,
                    "--y": `${slice.yPct}%`,
                    "--w": `${slice.wPct}%`,
                    "--h": `${slice.hPct}%`,
                  });
                  return (
                    <div key={slice.id} className="hero-game-frame" style={sliceStyle}>
                      <iframe
                        className="hero-game-iframe"
                        src={heroGameUrls[heroGameIndex]}
                        title="Hero game main"
                        loading="eager"
                        allow="autoplay; fullscreen; gamepad; gyroscope; accelerometer; xr-spatial-tracking"
                        onLoad={() => setHeroGameLoading(false)}
                      />
                      {heroGameLoading && (
                        <div className="game-skeleton" aria-hidden="true" />
                      )}
                    </div>
                  );
                })}

              <div className="hero-game-controls">
                {heroGameSlices
                  .filter((slice) => slice.id !== "main")
                  .map((slice) => {
                    const isUp = slice.id === "up";
                    return (
                      <button
                        key={slice.id}
                        type="button"
                        className="hero-game-nav"
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
              fallbackSrc="/figma/assets/footer-dino-loading-animation-1.svg"
              alt="Dino"
            />
            <img
              className="footer-bottom-brand"
              src="/figma/assets/footer-rezona-text-2x.webp"
              alt="REZONA.AI"
              loading="lazy"
              decoding="async"
            />
            <a
              className="footer-bottom-appstore"
              href="https://apps.apple.com/us/app/rezona-ai-game-maker/id6752310101"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open App Store"
            >
              <img
                src="/figma/assets/store-appstore-new.webp"
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
                src="/figma/assets/store-qr-new.webp"
                alt="Google Play"
                loading="lazy"
                decoding="async"
              />
            </a>
            <div className="footer-bottom-qr-wrap">
              <img
                className="footer-bottom-qr"
                src="/figma/assets/popup-qr-content-2x.webp"
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
                <Link className="footer-legal-link" href="/privacy">
                  Privacy Policy
                </Link>
                <span aria-hidden="true"> | </span>
                <Link className="footer-legal-link" href="/terms">
                  Term of Service
                </Link>
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
              src="/figma/website-materials/mobile/mb-youridea.webp"
              alt=""
              loading="eager"
              decoding="async"
              onLoad={handleMobileHeroPanelAssetReady}
              onError={handleMobileHeroPanelAssetReady}
            />
            <img
              className="mobile-hero-panel mobile-hero-panel-2"
              src="/figma/website-materials/mobile/mb-yourtool.webp"
              alt=""
              loading="eager"
              decoding="async"
              onLoad={handleMobileHeroPanelAssetReady}
              onError={handleMobileHeroPanelAssetReady}
            />
            <img
              className="mobile-hero-panel mobile-hero-panel-3"
              src="/figma/website-materials/mobile/mb-yourgame.webp"
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
              src="/figma/assets/mobile-top-logo-2x.webp"
              alt="Rezona"
              width={173}
              height={28}
              loading="lazy"
              decoding="async"
            />
            <a
              className="mobile-top-cta"
              href="/explore-more"
              aria-label="Explore more"
            >
              <img
                src="/figma/assets/mobile-top-cta-2x.webp"
                alt="Explore more"
                width={90}
                height={40}
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>

          <div className="mobile-hero-copy">
            <h1 className="mobile-hero-title">Meme culture, now a social platform.</h1>
            <GetAppButton
              className="mobile-hero-cta"
              aria-label="Get App Now"
              label="Get App Now"
            >
              <img
                src="/figma/assets/mobile-hero-cta-2x.webp"
                alt="Get App Now"
                width={156}
                height={44}
                loading="lazy"
                decoding="async"
              />
            </GetAppButton>
          </div>
        </section>
        <div className="mobile-content-shell">
          <section className="mobile-fly-section">
            <HeroBurstCanvas performanceLite />
          </section>

          <section className="mobile-content-game-section">
            <div className="mobile-content-game-frame">
              <iframe
                className="mobile-content-game-main"
                src={heroGameUrls[heroGameIndex]}
                title="Rezona game hero"
                loading="eager"
                allow="autoplay; fullscreen; gamepad; gyroscope; accelerometer; xr-spatial-tracking"
                onLoad={() => setHeroGameLoading(false)}
              />
              {heroGameLoading && (
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
                  src="/figma/assets/hero-game-up-2x.webp"
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
                  src="/figma/assets/hero-game-down-2x.webp"
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
              src="/figma/assets/mobile-built-2x.webp"
              alt="Built for meme"
              width={359}
              height={102}
              loading="lazy"
              decoding="async"
            />
          </section>

          <footer className="mobile-footer">
            <div className="mobile-footer-top">
              <div className="mobile-footer-qr-wrap">
                <img
                  className="mobile-footer-qr"
                  src="/figma/assets/popup-qr-content-2x.webp"
                  alt="QR code"
                  width={61}
                  height={61}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="mobile-footer-store">
                <a
                  href="https://apps.apple.com/us/app/rezona-ai-game-maker/id6752310101"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open App Store"
                >
                  <img
                    src="/figma/assets/store-appstore-new.webp"
                    alt="App Store"
                    width={120}
                    height={40}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=ai.rezona.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Google Play"
                >
                  <img
                    src="/figma/assets/store-qr-new.webp"
                    alt="Google Play"
                    width={120}
                    height={40}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </div>

            <div className="mobile-footer-social">
              {mobileFooterSocialSlices.map((item) => (
                <a
                  key={`mobile-${item.id}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${item.id}`}
                >
                  <img
                    src={item.asset}
                    alt={item.id}
                    width={24}
                    height={24}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              ))}
            </div>

            <img
              className="mobile-footer-brand"
              src="/figma/assets/mobile-footer-brand-2x.webp"
              alt="REZONA.AI"
              width={343}
              height={47}
              loading="lazy"
              decoding="async"
            />
            <DinoLottie
              className="mobile-footer-dino"
              fallbackSrc="/figma/assets/footer-dino-loading-animation-1.svg"
              alt="Dino walking"
            />

            <div className="mobile-footer-legal" aria-label="Legal information">
              <div className="mobile-footer-legal-links">
                <Link className="mobile-footer-legal-link" href="/privacy">
                  Privacy Policy
                </Link>
                <span aria-hidden="true"> | </span>
                <Link className="mobile-footer-legal-link" href="/terms">
                  Term of Service
                </Link>
              </div>
              <p className="mobile-footer-legal-copy">© 2026 All Rights Reserved, Rezona</p>
            </div>
          </footer>
        </div>
        </div>
      )}

    </main>
  );
}
