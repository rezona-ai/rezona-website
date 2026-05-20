export type FlyCard = {
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

export type HeroSlice = {
  id: string;
  asset: string;
  xPct: number;
  yPct: number;
  wPct: number;
  hPct: number;
};

export type ShowcaseScene = {
  id: string;
  media: string;
  mediaAlt: string;
  title: string;
  description: string;
  reverse: boolean;
};

export type TailScene = {
  id: string;
  asset: string;
  alt: string;
  ratio: string;
};

export const flyCards: FlyCard[] = [
  {
    id: "1",
    asset: "/assets/home/fly/desktop/fly-1.webp",
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
    asset: "/assets/home/fly/desktop/fly-8.webp",
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
    asset: "/assets/home/fly/desktop/fly-11.webp",
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
    asset: "/assets/home/fly/desktop/fly-10.webp",
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
    asset: "/assets/home/fly/desktop/fly-4.webp",
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
    asset: "/assets/home/fly/desktop/fly-9.webp",
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
    asset: "/assets/home/fly/desktop/fly-6.webp",
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
    asset: "/assets/home/fly/desktop/fly-7.webp",
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
    asset: "/assets/home/fly/desktop/fly-5.webp",
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
    asset: "/assets/home/fly/desktop/fly-104.webp",
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
    asset: "/assets/home/fly/desktop/fly-3.webp",
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
    asset: "/assets/home/fly/desktop/fly-105.webp",
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

export const heroBgSlices: HeroSlice[] = [
  {
    id: "left",
    asset: "/assets/home/hero-bg/desktop/pc-yourideas.webp",
    xPct: -1.2,
    yPct: 4.9,
    wPct: 26.4,
    hPct: 89.8,
  },
  {
    id: "right",
    asset: "/assets/home/hero-bg/desktop/pc-yourtool.webp",
    xPct: 74.8,
    yPct: 4.9,
    wPct: 26.4,
    hPct: 86.8,
  },
  {
    id: "bottom",
    asset: "/assets/home/hero-bg/desktop/pc-games.webp",
    xPct: -3.6,
    yPct: 81,
    wPct: 107.4,
    hPct: 20,
  },
  {
    id: "top",
    asset: "/assets/home/hero-bg/desktop/pc-rznai.webp",
    xPct: -2,
    yPct: -0.6,
    wPct: 104,
    hPct: 19.5,
  },
];

export const narrowPcHeroBgSlices: HeroSlice[] = [
  {
    id: "left",
    asset: "/assets/home/hero-bg/desktop/pc-yourideas.webp",
    xPct: 2,
    yPct: 22,
    wPct: 16,
    hPct: 60,
  },
  {
    id: "right",
    asset: "/assets/home/hero-bg/desktop/pc-yourtool.webp",
    xPct: 82,
    yPct: 22,
    wPct: 16,
    hPct: 60,
  },
  {
    id: "bottom",
    asset: "/assets/home/hero-bg/desktop/pc-games.webp",
    xPct: 2,
    yPct: 87,
    wPct: 96,
    hPct: 12,
  },
  {
    id: "top",
    asset: "/assets/home/hero-bg/desktop/pc-rznai.webp",
    xPct: 2,
    yPct: 1,
    wPct: 96,
    hPct: 12,
  },
];

export const heroGameSlices: HeroSlice[] = [
  {
    id: "main",
    asset: "/assets/home/hero-game/hero-game-main-2x.avif",
    xPct: 53.2,
    yPct: 18.6,
    wPct: 21.8,
    hPct: 61.3,
  },
  {
    id: "up",
    asset: "/assets/home/hero-game/hero-game-up-2x.webp",
    xPct: 75.6,
    yPct: 66.8,
    wPct: 4.562422,
    hPct: 4.562422,
  },
  {
    id: "down",
    asset: "/assets/home/hero-game/hero-game-down-2x.webp",
    xPct: 75.6,
    yPct: 74.7,
    wPct: 4.562422,
    hPct: 4.562422,
  },
];

export const narrowPcHeroGameSlices: HeroSlice[] = [
  {
    id: "main",
    asset: "/assets/home/hero-game/hero-game-main-2x.avif",
    xPct: 54.5,
    yPct: 21.5,
    wPct: 28,
    hPct: 49,
  },
  {
    id: "up",
    asset: "/assets/home/hero-game/hero-game-up-2x.webp",
    xPct: 83.6,
    yPct: 61,
    wPct: 5.2,
    hPct: 5.2,
  },
  {
    id: "down",
    asset: "/assets/home/hero-game/hero-game-down-2x.webp",
    xPct: 83.6,
    yPct: 68.5,
    wPct: 5.2,
    hPct: 5.2,
  },
];

export const heroGameUrls = [
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/5eea8523-1e7c-4034-9e2c-49ecf6484e17/italian-brainrot-surfers.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/e927a528-687b-4189-b26d-e817c6bc1983/cartman_kfc.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/37575c0a-1269-4815-86ab-f0d62fe14b4c/nuke-darts.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/18e7ae65-afcc-4cfc-8d01-a1b2d53b9ff0/escape-herbert.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/dist/5812251/12621602/index.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/dist/5812884/12623016/index.html",
  "https://storage.googleapis.com/rezona-ai-prod/agent-jobs/minigame/ffcd7454-29a8-42e0-8871-b3d833d9a4c1/brainrot-solitaire.html",
];

export const mobileShowcaseScenes: ShowcaseScene[] = [
  {
    id: "mobile-showcase-sec4",
    media: "/assets/home/showcase/mobile/mobile-sec4-media-2x.webp",
    mediaAlt: "Fresh memes collage",
    title: "Freshest memes\nfrom every corner",
    description:
      "A library that never gets stale. Memes from every culture, every trend cycle, every timezone — drop one into a game before it even peaks.",
    reverse: false,
  },
  {
    id: "mobile-showcase-sec5",
    media: "/assets/home/showcase/mobile/mobile-sec5-media-2x.webp",
    mediaAlt: "VR creator portrait",
    title: "Total creative\ncontrol",
    description:
      "Upload whatever assets you want — no limits on what you bring in. Remix, layer, and personalize until the game feels exactly like you made it.",
    reverse: false,
  },
  {
    id: "mobile-showcase-sec6",
    media: "/assets/home/showcase/mobile/mobile-sec6-media-2x.webp",
    mediaAlt: "Sound production studio",
    title: "Your sounds —\nor ours",
    description:
      "Bring your own beats, voice clips, or effects — or let Rezona build it from scratch. Either path lands you a game with sound design that actually slaps.",
    reverse: false,
  },
  {
    id: "mobile-showcase-sec7",
    media: "/assets/home/showcase/mobile/mobile-sec7-media-2x.webp",
    mediaAlt: "Cyber crew group portrait",
    title: "Bring the crew",
    description:
      "The first — and only — AI game platform with real multiplayer. Build a game, share the lobby, and drop in together.",
    reverse: false,
  },
];

export const showcaseScenes: ShowcaseScene[] = [
  {
    id: "showcase-sec4",
    media: "/assets/home/showcase/mobile/mobile-sec4-media-2x.webp",
    mediaAlt: "Fresh memes collage",
    title: "Freshest Memes\nFrom Every\nCorner",
    description:
      "A library that never gets stale. Memes from every culture, every trend cycle, every timezone drop one into a game before it even peaks.",
    reverse: false,
  },
  {
    id: "showcase-sec5",
    media: "/assets/home/showcase/mobile/mobile-sec5-media-2x.webp",
    mediaAlt: "VR creator portrait",
    title: "Total Creative\nControl",
    description:
      "Upload whatever assets you want no limits on what you bring in. Remix, layer, and personalize until the game feels exactly like you made it (welp actually you did).",
    reverse: true,
  },
  {
    id: "showcase-sec6",
    media: "/assets/home/showcase/mobile/mobile-sec6-media-2x.webp",
    mediaAlt: "Sound production studio",
    title: "Your Sounds –Or Ours",
    description:
      "Bring your own beats, voice clips, or effects—or let Rezo build it from scratch. Either path lands you a game with sound design that actually slaps.",
    reverse: false,
  },
  {
    id: "showcase-sec7",
    media: "/assets/home/showcase/mobile/mobile-sec7-media-2x.webp",
    mediaAlt: "Cyber crew group portrait",
    title: "Bring The Crew",
    description:
      "The first and only AI game platform with real multiplayer. Build a game, share the lobby, and drop in together. Nobody else does this like Rezo.",
    reverse: true,
  },
];

export const swiperStates = [
  { id: "yellow", asset: "/assets/home/stats/1.webp", alt: "10M game play yellow card" },
  { id: "pink", asset: "/assets/home/stats/3.webp", alt: "10M game play pink card" },
  { id: "blue", asset: "/assets/home/stats/4.webp", alt: "10M game play blue card" },
  { id: "green", asset: "/assets/home/stats/2.webp", alt: "10M game play green card" },
];

export const swiperStripOrder = [
  swiperStates[3],
  swiperStates[0],
  swiperStates[1],
  swiperStates[2],
];

export const tailScenes: TailScene[] = [
  {
    id: "tail-998-25744",
    asset: "/assets/home/footer/tail-2x.avif",
    alt: "Rezona tail section top",
    ratio: "1920 / 790",
  },
];
