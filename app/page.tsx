/* eslint-disable @next/next/no-img-element */
"use client";

import type { CSSProperties, MouseEvent } from "react";
import { memo, useEffect, useRef, useState } from "react";

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
    asset: "/figma/assets/fly-1.png",
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
    asset: "/figma/assets/fly-10.png",
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
    asset: "/figma/assets/fly-4.png",
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
    asset: "/figma/assets/fly-9.png",
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
    asset: "/figma/assets/fly-6.png",
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
    asset: "/figma/assets/fly-104.png",
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
    asset: "/figma/assets/fly-3.png",
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
    asset: "/figma/assets/fly-105.png",
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

const toParticleAsset = (assetPath: string) =>
  assetPath.replace("/figma/assets/", "/figma/assets/hero-particles/");

const HERO_BURST_PARTICLE_COUNT = Math.round(flyCards.length * 2.35);
const HERO_BURST_SECONDARY_EMITTER_RATE = 0.62;

const randomBetween = (min: number, max: number) =>
  min + Math.random() * (max - min);

const pickRandom = <T,>(items: readonly T[]) =>
  items[Math.floor(Math.random() * items.length)];

const createRandomHeroBurstParticle = (seed: number): HeroBurstParticle => {
  const source = pickRandom(flyCards);
  const nearWeight = Math.min(1, Math.max(0, (source.depth - 640) / (1450 - 640)));
  const farWeight = 1 - nearWeight;
  const isNearPass = Math.random() < 0.12;
  const useSecondaryEmitter = Math.random() < HERO_BURST_SECONDARY_EMITTER_RATE;
  const emitterOffsetXVw = 6.2;
  const originXVw = useSecondaryEmitter
    ? emitterOffsetXVw + randomBetween(-1.2, 1.2)
    : -emitterOffsetXVw + randomBetween(-1.2, 1.2);
  const originYVh = randomBetween(-0.9, 0.9);

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
    randomBetween(-15, 15) *
    (0.62 + farWeight * 0.38) *
    (isNearPass ? randomBetween(1.18, 1.38) : 1);

  const midXVw = directionX * midRadius + randomBetween(-1.2, 1.2);
  const midYVh = directionY * midRadius + randomBetween(-1.1, 1.1);
  const endXVw = directionX * endRadiusX + randomBetween(-4.8, 4.8);
  const endYVh = directionY * endRadiusY + randomBetween(-4.6, 4.6);
  const curveXVw = endXVw * randomBetween(0.66, 0.78) + tangentX * curveBias;
  const curveYVh = endYVh * randomBetween(0.66, 0.78) + tangentY * curveBias * 0.84;

  const ratio = source.width / source.height;
  const rareLargeBoost = isNearPass
    ? randomBetween(1.4, 1.86)
    : Math.random() < 0.16
      ? randomBetween(1.18, 1.48)
      : 1;
  const sizeVw = Math.max(
    2.5,
    Math.min(
      isNearPass ? 14.4 : 11.6,
      source.wPct *
        randomBetween(0.46, 0.66) *
        (1 + nearWeight * 0.12) *
        rareLargeBoost
    )
  );

  const durationS =
    randomBetween(isNearPass ? 5.8 : 6.8, isNearPass ? 8.2 : 9.8) *
    (1 + farWeight * 0.1);
  const delayS = randomBetween(0, 0.06);
  const startScale = randomBetween(0.07, 0.14) + nearWeight * 0.02;
  const midScale = randomBetween(0.46, isNearPass ? 0.82 : 0.72) + nearWeight * 0.08;
  const endScale = randomBetween(isNearPass ? 1.24 : 1.02, isNearPass ? 1.56 : 1.28) +
    nearWeight * (isNearPass ? 0.28 : 0.2);
  const zStartPx = randomBetween(-1240, -780) + nearWeight * 180;
  const zMidPx = randomBetween(-760, -340) + nearWeight * 170;
  const zEndPx = randomBetween(isNearPass ? -24 : -120, isNearPass ? 224 : 84) +
    nearWeight * (isNearPass ? 156 : 120);
  const alpha = Math.min(
    isNearPass ? 0.84 : 0.76,
    randomBetween(isNearPass ? 0.46 : 0.38, isNearPass ? 0.7 : 0.62) +
      nearWeight * (isNearPass ? 0.12 : 0.1)
  );

  return {
    id: `${source.id}-${seed}-${Math.random().toString(36).slice(2, 7)}`,
    asset: toParticleAsset(source.asset),
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
  onExited,
}: {
  cardId: number;
  seed: number;
  onExited: (cardId: number) => void;
}) {
  const [particle] = useState<HeroBurstParticle>(() => createRandomHeroBurstParticle(seed));

  return (
    <img
      className="meme-static-card"
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
        "--duration": `${particle.durationS.toFixed(2)}s`,
        "--delay": `${particle.delayS.toFixed(2)}s`,
        "--s-start": particle.startScale.toFixed(3),
        "--s-mid": particle.midScale.toFixed(3),
        "--s-end": particle.endScale.toFixed(3),
        "--z-start": `${particle.zStartPx}px`,
        "--z-mid": `${particle.zMidPx}px`,
        "--z-end": `${particle.zEndPx}px`,
        "--alpha": particle.alpha.toFixed(3),
      })}
      src={particle.asset}
      alt={`Meme card ${particle.id}`}
      loading="lazy"
      decoding="async"
      onAnimationEnd={() => onExited(cardId)}
    />
  );
});

const HeroBurstCanvas = memo(function HeroBurstCanvas() {
  const particleSeedRef = useRef(HERO_BURST_PARTICLE_COUNT);
  const particleCardIdRef = useRef(HERO_BURST_PARTICLE_COUNT);
  const [cards, setCards] = useState<{ id: number; seed: number }[]>(() =>
    Array.from({ length: HERO_BURST_PARTICLE_COUNT }, (_, index) => ({
      id: index,
      seed: index,
    }))
  );

  const handleCardExited = (cardId: number) => {
    setCards((prevCards) => {
      const cardIndex = prevCards.findIndex((card) => card.id === cardId);
      if (cardIndex < 0) return prevCards;

      const nextSeed = particleSeedRef.current;
      particleSeedRef.current += 1;

      const nextCardId = particleCardIdRef.current;
      particleCardIdRef.current += 1;

      const nextCards = [...prevCards];
      nextCards.splice(cardIndex, 1);
      nextCards.push({
        id: nextCardId,
        seed: nextSeed,
      });
      return nextCards;
    });
  };

  return (
    <div className="meme-transition-canvas">
      <div className="meme-transition-stage">
        {cards.map((card) => (
          <HeroBurstParticleCard
            key={`meme-transition-card-${card.id}`}
            cardId={card.id}
            seed={card.seed}
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
    asset: "/figma/assets/mobile-fly-1-1110-1790@2x.png",
    xPct: 2.1333,
    yPct: 1.81,
    wPct: 21.3333,
    hPct: 29.4118,
  },
  {
    id: "8",
    asset: "/figma/assets/mobile-fly-8-1110-1791@2x.png",
    xPct: 61.0667,
    yPct: 0,
    wPct: 21.3333,
    hPct: 29.1855,
  },
  {
    id: "4",
    asset: "/figma/assets/mobile-fly-4-1110-1792@2x.png",
    xPct: 76.5333,
    yPct: 18.0995,
    wPct: 21.3333,
    hPct: 32.1267,
  },
  {
    id: "6",
    asset: "/figma/assets/mobile-fly-6-1110-1793@2x.png",
    xPct: 31.7333,
    yPct: 5.8824,
    wPct: 21.3333,
    hPct: 29.1855,
  },
  {
    id: "11",
    asset: "/figma/assets/mobile-fly-11-1110-1794@2x.png",
    xPct: 50.1333,
    yPct: 29.1855,
    wPct: 21.3333,
    hPct: 27.1493,
  },
  {
    id: "5",
    asset: "/figma/assets/mobile-fly-5-1110-1795@2x.png",
    xPct: 2.1333,
    yPct: 35.7466,
    wPct: 21.3333,
    hPct: 29.1855,
  },
  {
    id: "3",
    asset: "/figma/assets/mobile-fly-3-1110-1796@2x.png",
    xPct: 71.7333,
    yPct: 56.5611,
    wPct: 21.3333,
    hPct: 29.1855,
  },
  {
    id: "10",
    asset: "/figma/assets/mobile-fly-10-1110-1797@2x.png",
    xPct: 26.1333,
    yPct: 54.9774,
    wPct: 21.3333,
    hPct: 21.7195,
  },
  {
    id: "9",
    asset: "/figma/assets/mobile-fly-9-1110-1798@2x.png",
    xPct: 14.6667,
    yPct: 69.0045,
    wPct: 21.3333,
    hPct: 29.1855,
  },
  {
    id: "7",
    asset: "/figma/assets/mobile-fly-7-1110-1799@2x.png",
    xPct: 43.2,
    yPct: 69.0045,
    wPct: 21.3333,
    hPct: 29.1855,
  },
];

const heroBgSlices: HeroSlice[] = [
  {
    id: "left",
    asset: "/figma/WebsiteMaterials/Mobile/Desktop/PC_YOURIDEAS.webp",
    xPct: -0.5,
    yPct: 5.3,
    wPct: 25.5,
    hPct: 88,
  },
  {
    id: "right",
    asset: "/figma/WebsiteMaterials/Mobile/Desktop/PC_YourTool.webp",
    xPct: 74.5,
    yPct: 5.3,
    wPct: 25.5,
    hPct: 88,
  },
  {
    id: "bottom",
    asset: "/figma/WebsiteMaterials/Mobile/Desktop/PC_Games.webp",
    xPct: -2.5,
    yPct: 82.4,
    wPct: 106,
    hPct: 18.4,
  },
  {
    id: "top",
    asset: "/figma/WebsiteMaterials/Mobile/Desktop/PC_RZNAI.webp",
    xPct: -1.2,
    yPct: 0.7,
    wPct: 102.4,
    hPct: 18.1,
  },
];

const heroGameSlices: HeroSlice[] = [
  {
    id: "main",
    asset: "/figma/assets/hero-game-main-941-22455@2x.avif",
    xPct: 53.2,
    yPct: 19.8,
    wPct: 21.8,
    hPct: 61.3,
  },
  {
    id: "up",
    asset: "/figma/assets/hero-game-up-941-22455@2x.png",
    xPct: 75.6,
    yPct: 65.8,
    wPct: 4.562422,
    hPct: 4.562422,
  },
  {
    id: "down",
    asset: "/figma/assets/hero-game-down-941-22455@2x.png",
    xPct: 75.6,
    yPct: 73.7,
    wPct: 4.562422,
    hPct: 4.562422,
  },
];

const heroGameUrls = [
  "https://storage.googleapis.com/rezona-ai-prod/minigame/8e946a5c-5e1d-48b2-b73f-1768449b29c3/index.html",
  "https://storage.googleapis.com/rezona-ai-prod/minigame/1366b42a-687e-4794-9bf1-da98b681331e/index.html",
  "https://storage.googleapis.com/rezona-ai-prod/minigame/3c300dab-eccb-4d3f-b8bc-55ca811f11dd/index.html",
  "https://web.rezona.ai/bridge?src=https%3A%2F%2Fstorage.googleapis.com%2Frezona-ai-prod%2Fminigame%2F30569222-6790-4ff9-aa5f-60f841d531c5%2Findex.html&mask=https%3A%2F%2Fstorage.googleapis.com%2Frezona-ai-prod%2Fuser_upload%2Fdynamic-cover%2F381946%2Fdynamic-cover-381946-1771166941620-5ed79527-8291-43b9-9e7a-49451a1d2794.webp",
  "https://storage.googleapis.com/rezona-ai-prod/minigame/20d90e41-52b5-41b0-aaee-9a149abf4b4f/index.html",
];

const mobileShowcaseScenes: ShowcaseScene[] = [
  {
    id: "mobile-showcase-sec4",
    media: "/figma/assets/mobile-sec4-media-1110-1807@2x.webp",
    mediaAlt: "Fresh memes collage",
    title: "Freshest memes\nfrom every corner",
    description:
      "A library that never gets stale. Memes from every culture, every trend cycle, every timezone — drop one into a game before it even peaks.",
    reverse: false,
  },
  {
    id: "mobile-showcase-sec5",
    media: "/figma/assets/mobile-sec5-media-1110-1829@2x.webp",
    mediaAlt: "VR creator portrait",
    title: "Total creative\ncontrol",
    description:
      "Upload whatever assets you want — no limits on what you bring in. Remix, layer, and personalize until the game feels exactly like you made it.",
    reverse: false,
  },
  {
    id: "mobile-showcase-sec6",
    media: "/figma/assets/mobile-sec6-media-1110-1836@2x.webp",
    mediaAlt: "Sound production studio",
    title: "Your sounds —\nor ours",
    description:
      "Bring your own beats, voice clips, or effects — or let Rezona build it from scratch. Either path lands you a game with sound design that actually slaps.",
    reverse: false,
  },
  {
    id: "mobile-showcase-sec7",
    media: "/figma/assets/mobile-sec7-media-1110-1843@2x.webp",
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
    media: "/figma/assets/sec4-media-968-23809@2x.webp",
    mediaAlt: "Fresh memes collage",
    title: "Freshest memes\nfrom every\ncorner",
    description:
      "A library that never gets stale. Memes from every culture, every trend cycle, every timezone — drop one into a game before it even peaks.",
    reverse: false,
  },
  {
    id: "showcase-sec5",
    media: "/figma/assets/sec5-media-968-23811@2x.webp",
    mediaAlt: "VR creator portrait",
    title: "Total creative\ncontrol",
    description:
      "Upload whatever assets you want — no limits on what you bring in. Remix, layer, and personalize until the game feels exactly like you made it (welp actually you did).",
    reverse: true,
  },
  {
    id: "showcase-sec6",
    media: "/figma/assets/sec6-media-968-23813@2x.webp",
    mediaAlt: "Sound production studio",
    title: "Your sounds – or Ours",
    description:
      "Bring your own beats, voice clips, or effects—or let Rezo build it from scratch. Either path lands you a game with sound design that actually slaps.",
    reverse: false,
  },
  {
    id: "showcase-sec7",
    media: "/figma/assets/sec7-media-968-23815@2x.webp",
    mediaAlt: "Cyber crew group portrait",
    title: "Bring The Crew",
    description:
      "The first - and only - AI game platform with real multiplayer. Build a game, share the lobby, and drop in together. Nobody else does this like Rezo.",
    reverse: true,
  },
];

const swiperStates = [
  { id: "yellow", asset: "/figma/swiper/1.png", alt: "10M game play yellow card" },
  { id: "pink", asset: "/figma/swiper/3.png", alt: "10M game play pink card" },
  { id: "blue", asset: "/figma/swiper/4'.png", alt: "10M game play blue card" },
  { id: "green", asset: "/figma/swiper/2'.png", alt: "10M game play green card" },
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
    asset: "/figma/assets/tail-998-25744@2x.avif",
    alt: "Rezona tail section top",
    ratio: "1920 / 790",
  },
];

const footerSocialSlices = [
  {
    id: "x",
    asset: "/figma/assets/footer-social-x-968-23986@2x.png",
    left: 66.1667,
    href: "https://x.com/rezona_ai",
  },
  {
    id: "telegram",
    asset: "/figma/assets/footer-social-telegram-968-23986@2x.png",
    left: 70.3333,
    href: "https://t.me/rezona_ai",
  },
  {
    id: "discord",
    asset: "/figma/assets/footer-social-discord-968-23986@2x.png",
    left: 74.5,
    href: "https://discord.gg/rezona",
  },
  {
    id: "tiktok",
    asset: "/figma/assets/footer-social-tiktok-968-23986@2x.png",
    left: 78.6667,
    href: "https://www.tiktok.com/@rezona.ai",
  },
  {
    id: "youtube",
    asset: "/figma/assets/footer-social-youtube-968-23986@2x.png",
    left: 82.8333,
    href: "https://www.youtube.com/@rezona-app",
  },
  {
    id: "instagram",
    asset: "/figma/assets/footer-social-instagram-968-23986@2x.png",
    left: 87.0,
    href: "https://www.instagram.com/rezona.ai",
  },
  {
    id: "threads",
    asset: "/figma/assets/footer-social-threads-968-23986@2x.png",
    left: 91.1667,
    href: "https://www.threads.com/@rezona.ai",
  },
  {
    id: "social",
    asset: "/figma/assets/social.png",
    left: 95.1667,
    href: "https://www.reddit.com/r/rezona/",
  },
];

const mobileFooterSocialSlices = [
  {
    id: "x",
    asset: "/figma/assets/mobile-social-x-1110-1865@2x.png",
    href: "https://x.com/rezona_ai",
  },
  {
    id: "telegram",
    asset: "/figma/assets/mobile-social-telegram-1110-1867@2x.png",
    href: "https://t.me/rezona_ai",
  },
  {
    id: "discord",
    asset: "/figma/assets/mobile-social-discord-1110-1869@2x.png",
    href: "https://discord.gg/rezona",
  },
  {
    id: "tiktok",
    asset: "/figma/assets/mobile-social-tiktok-1110-1871@2x.png",
    href: "https://www.tiktok.com/@rezona.ai",
  },
  {
    id: "youtube",
    asset: "/figma/assets/mobile-social-youtube-1110-1873@2x.png",
    href: "https://www.youtube.com/@rezona-app",
  },
  {
    id: "instagram",
    asset: "/figma/assets/mobile-social-instagram-1110-1875@2x.png",
    href: "https://www.instagram.com/rezona.ai",
  },
  {
    id: "threads",
    asset: "/figma/assets/mobile-social-threads-1110-1877@2x.png",
    href: "https://www.threads.com/@rezona.ai",
  },
  {
    id: "social",
    asset: "/figma/assets/social-mobile.png",
    href: "https://www.reddit.com/r/rezona/",
  },
];

const asVars = (values: Record<string, string | number>) =>
  values as CSSProperties;

const StatsLoopScene = memo(function StatsLoopScene() {
  const [statsActiveIndex, setStatsActiveIndex] = useState(0);
  const statsPrevIndex =
    (statsActiveIndex - 1 + swiperStates.length) % swiperStates.length;
  const statsNextIndex = (statsActiveIndex + 1) % swiperStates.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStatsActiveIndex((prev) => (prev + 1) % swiperStates.length);
    }, 1200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="scene stats-loop-scene" data-scene="stats-loop" id="scene3">
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
  const [statsActiveIndex, setStatsActiveIndex] = useState(0);
  const statsPrevIndex =
    (statsActiveIndex - 1 + swiperStates.length) % swiperStates.length;
  const statsNextIndex = (statsActiveIndex + 1) % swiperStates.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStatsActiveIndex((prev) => (prev + 1) % swiperStates.length);
    }, 1200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="mobile-fly-divider mobile-stats-loop" aria-label="Game play stats">
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
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [heroGameIndex, setHeroGameIndex] = useState(0);
  const [heroGameLoading, setHeroGameLoading] = useState(true);
  const [heroGameLiveMode, setHeroGameLiveMode] = useState(false);

  const switchHeroGame = (direction: 1 | -1) => {
    setHeroGameLiveMode(true);
    setHeroGameIndex((prev) =>
      (prev + direction + heroGameUrls.length) % heroGameUrls.length
    );
    setHeroGameLoading(true);
  };

  const openAppModal = (event?: MouseEvent<HTMLAnchorElement>) => {
    event?.preventDefault();
    setIsAppModalOpen(true);
  };

  const closeAppModal = () => {
    setIsAppModalOpen(false);
  };

  useEffect(() => {
    const query = window.matchMedia("(max-width: 900px)");
    const syncLayout = () => setIsMobile(query.matches);

    syncLayout();

    if (typeof query.addEventListener === "function") {
      query.addEventListener("change", syncLayout);
      return () => query.removeEventListener("change", syncLayout);
    }

    query.addListener(syncLayout);
    return () => query.removeListener(syncLayout);
  }, []);

  useEffect(() => {
    if (isMobile !== false) return;

    const scenes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scene]")
    );
    const byName = new Map<string, HTMLElement>();

    scenes.forEach((scene) => {
      const key = scene.dataset.scene;
      if (key) byName.set(key, scene);
    });

    const clamp = (value: number, min: number, max: number) =>
      Math.min(max, Math.max(min, value));
    const easeInOutCubic = (value: number) =>
      value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;

    const getProgress = (element: HTMLElement) => {
      const viewHeight = window.innerHeight;
      const rect = element.getBoundingClientRect();
      return clamp((viewHeight - rect.top) / (viewHeight + rect.height), 0, 1);
    };

    const heroFlyScene = byName.get("hero-fly");
    const heroCopyExitParticleStart = 0.88;
    const heroCopyExitTriggerPx = 360;
    const heroCopyExitTravelPx = 140;
    const invertEaseInOutCubic = (value: number) =>
      value < 0.5
        ? Math.cbrt(value / 4)
        : 1 - Math.cbrt((1 - value) / 4);
    const update = () => {
      scenes.forEach((scene) => {
        const p = getProgress(scene);
        scene.style.setProperty("--p", p.toFixed(4));
      });

      if (heroFlyScene) {
        const rect = heroFlyScene.getBoundingClientRect();
        const travel = Math.max(heroFlyScene.offsetHeight - window.innerHeight, 1);
        const heroOutRaw = clamp(-rect.top / travel, 0, 1);
        const heroOut = easeInOutCubic(heroOutRaw);
        heroFlyScene.style.setProperty("--hero-out", heroOut.toFixed(4));

        const particleStartRaw = invertEaseInOutCubic(heroCopyExitParticleStart);
        const particleStartPx = travel * particleStartRaw;
        const scrolledInHeroPx = Math.max(0, -rect.top);
        const particleScrolledPx = Math.max(0, scrolledInHeroPx - particleStartPx);
        const exitRaw = clamp(
          (particleScrolledPx - heroCopyExitTriggerPx) / heroCopyExitTravelPx,
          0,
          1
        );
        const heroCopyExit = easeInOutCubic(exitRaw);
        heroFlyScene.style.setProperty("--hero-copy-exit", heroCopyExit.toFixed(4));
      }
    };

    let ticking = false;
    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("load", update);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("load", update);
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isAppModalOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscClose = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsAppModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscClose);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscClose);
    };
  }, [isAppModalOpen]);

  if (isMobile === null) {
    return <main className="rezona-page" style={{ minHeight: "100vh" }} />;
  }

  return (
    <main className="rezona-page">
      {!isMobile && (
        <>
          <header className="figma-header desktop-only">
            <img
              src="/figma/assets/header.png"
              alt="Rezona Header"
              width={1920}
              height={109}
              loading="eager"
              decoding="async"
            />
          </header>

          <div className="desktop-layout">
      <section className="scene hero-fly-scene" data-scene="hero-fly">
        <div className="sticky">
          <div className="hero-canvas">
            <HeroBurstCanvas />

            <div className="hero-world">
              {heroBgSlices.map((slice) => (
                <img
                  key={slice.id}
                  className="hero-slice hero-bg-slice"
                  style={asVars({
                    "--x": `${slice.xPct}%`,
                    "--y": `${slice.yPct}%`,
                    "--w": `${slice.wPct}%`,
                    "--h": `${slice.hPct}%`,
                  })}
                  src={slice.asset}
                  alt={`Hero background ${slice.id}`}
                  loading={slice.id === "bot-bot" ? "eager" : "lazy"}
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
                      {heroGameLiveMode ? (
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
                          src="/figma/assets/hero-game-main-941-22455@2x.avif"
                          alt="Hero game preview"
                          loading="eager"
                          decoding="async"
                        />
                      )}
                      {heroGameLiveMode && heroGameLoading && (
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
              <a
                className="hero-center-cta"
                href="https://apps.apple.com/us/app/rezona-ai-game-maker/id6752310101"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get App Now"
                onClick={openAppModal}
              >
                <span>Get App Now</span>
              </a>
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
            <img
              className="footer-bottom-dino"
              src="/figma/assets/footer-dino-loading-animation-1.svg"
              alt="Dino"
              loading="lazy"
              decoding="async"
            />
            <img
              className="footer-bottom-brand"
              src="/figma/assets/footer-rezona-text-968-23986@2x.png"
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
                src="/figma/assets/store-appstore-new.png"
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
                src="/figma/assets/store-qr-new.png"
                alt="Google Play"
                loading="lazy"
                decoding="async"
              />
            </a>
            <img
              className="footer-bottom-qr"
              src="/figma/assets/store-googleplay-new.png"
              alt="QR"
              loading="lazy"
              decoding="async"
            />

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
          </div>
        </div>
      </section>
          </div>
        </>
      )}

      {isMobile && (
        <div className="mobile-layout">
        <section className="mobile-hero-section">
          <img
            className="mobile-hero-bg"
            src="/figma/assets/mobile-hero-bg-1110-1766@2x.webp"
            alt="Mobile hero background"
            loading="eager"
            decoding="async"
          />

          <div className="mobile-top-nav">
            <img
              className="mobile-top-logo"
              src="/figma/assets/mobile-top-logo-1110-1771@2x.png"
              alt="Rezona"
              width={173}
              height={28}
              loading="lazy"
              decoding="async"
            />
            <a
              className="mobile-top-cta"
              href="https://apps.apple.com/us/app/rezona-ai-game-maker/id6752310101"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get App"
              onClick={openAppModal}
            >
              <img
                src="/figma/assets/mobile-top-cta-1110-1774@2x.png"
                alt="Get App"
                width={90}
                height={40}
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>

          <div className="mobile-hero-game-wrap">
            <div className="mobile-hero-game-frame">
              {heroGameLiveMode ? (
                <iframe
                  className="mobile-hero-game-main"
                  src={heroGameUrls[heroGameIndex]}
                  title="Rezona game hero"
                  loading="eager"
                  allow="autoplay; fullscreen; gamepad; gyroscope; accelerometer; xr-spatial-tracking"
                  onLoad={() => setHeroGameLoading(false)}
                />
              ) : (
                <img
                  className="mobile-hero-game-main hero-game-poster"
                  src="/figma/assets/hero-game-main-941-22455@2x.avif"
                  alt="Hero game preview"
                  loading="eager"
                  decoding="async"
                />
              )}
              {heroGameLiveMode && heroGameLoading && (
                <div className="game-skeleton" aria-hidden="true" />
              )}
            </div>
            <div className="mobile-hero-game-nav">
              <button
                className="mobile-hero-nav-btn"
                type="button"
                aria-label="Previous game"
                onClick={() => switchHeroGame(-1)}
              >
                <img
                  src="/figma/assets/mobile-hero-up-1110-1782@2x.png"
                  alt=""
                  width={58}
                  height={58}
                  loading="lazy"
                  decoding="async"
                />
              </button>
              <button
                className="mobile-hero-nav-btn"
                type="button"
                aria-label="Next game"
                onClick={() => switchHeroGame(1)}
              >
                <img
                  src="/figma/assets/mobile-hero-down-1110-1784@2x.png"
                  alt=""
                  width={58}
                  height={58}
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </div>
          </div>

          <div className="mobile-hero-copy">
            <img
              className="mobile-hero-title"
              src="/figma/assets/mobile-hero-title-1110-1786@2x.png"
              alt="Meme culture, now a social platform."
              width={343}
              height={62}
              loading="eager"
              decoding="async"
            />
            <a
              className="mobile-hero-cta"
              href="https://apps.apple.com/us/app/rezona-ai-game-maker/id6752310101"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get App Now"
              onClick={openAppModal}
            >
              <img
                src="/figma/assets/mobile-hero-cta-1110-1787@2x.png"
                alt="Get App Now"
                width={156}
                height={44}
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </section>
        <div className="mobile-content-shell">
          <section className="mobile-fly-section">
            <HeroBurstCanvas />
          </section>

          <MobileStatsLoopScene />

          <section className="mobile-showcase-list">
            {mobileShowcaseScenes.map((scene) => (
              <article className="mobile-showcase-item" key={scene.id}>
                <img
                  className="mobile-showcase-media"
                  src={scene.media}
                  alt={scene.mediaAlt}
                  width={343}
                  height={343}
                  loading="lazy"
                  decoding="async"
                />
                <h2 className="mobile-showcase-title">{scene.title}</h2>
                <p className="mobile-showcase-description">{scene.description}</p>
              </article>
            ))}
          </section>

          <section className="mobile-built-section">
            <img
              src="/figma/assets/mobile-built-1110-1849@2x.png"
              alt="Built for meme"
              width={359}
              height={102}
              loading="lazy"
              decoding="async"
            />
          </section>

          <footer className="mobile-footer">
            <div className="mobile-footer-top">
              <img
                className="mobile-footer-qr"
                src="/figma/assets/store-googleplay-new.png"
                alt="QR code"
                width={61}
                height={61}
                loading="lazy"
                decoding="async"
              />
              <div className="mobile-footer-store">
                <a
                  href="https://apps.apple.com/us/app/rezona-ai-game-maker/id6752310101"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open App Store"
                >
                  <img
                    src="/figma/assets/store-appstore-new.png"
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
                    src="/figma/assets/store-qr-new.png"
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
              src="/figma/assets/mobile-footer-brand-1110-1878@2x.png"
              alt="REZONA.AI"
              width={343}
              height={47}
              loading="lazy"
              decoding="async"
            />
            <img
              className="mobile-footer-dino"
              src="/figma/assets/footer-dino-loading-animation-1.svg"
              alt="Dino walking"
              width={200}
              height={200}
              loading="lazy"
              decoding="async"
            />
          </footer>
        </div>
        </div>
      )}

      {isAppModalOpen && (
        <div
          className="app-download-modal-overlay"
          role="presentation"
          onClick={closeAppModal}
        >
          <div
            className="app-download-modal-shell"
            role="dialog"
            aria-modal="true"
            aria-labelledby="app-download-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="app-download-modal-card">
              <img
                className="app-download-modal-texture"
                src="/figma/assets/popup-bg-texture-1083-7906@2x.png"
                alt=""
                aria-hidden="true"
              />

              <div className="app-download-modal-header">
                <span className="app-download-modal-close-spacer" aria-hidden="true" />
                <h2 id="app-download-modal-title">Use the app for more fun</h2>
                <button
                  type="button"
                  className="app-download-modal-close"
                  aria-label="Close app download modal"
                  onClick={closeAppModal}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <div className="app-download-modal-qr-frame">
                <div className="app-download-modal-qr-inner">
                  <img
                    src="/figma/assets/popup-qr-content-1083-7914@2x.png"
                    alt="Scan QR code to download the app"
                    width={262}
                    height={267}
                  />
                </div>
              </div>
            </div>

            <img
              className="app-download-modal-mascot"
              src="/figma/assets/popup-mascot-1178-8299@2x.png"
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      )}
    </main>
  );
}
