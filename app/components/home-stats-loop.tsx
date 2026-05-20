/* eslint-disable @next/next/no-img-element */
"use client";

import { memo, useEffect, useRef, useState } from "react";
import { swiperStates, swiperStripOrder } from "../data/home";

const useStatsLoop = () => {
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

  return { sectionRef, statsActiveIndex, statsPrevIndex, statsNextIndex };
};

const StatsCarousel = memo(function StatsCarousel({
  statsActiveIndex,
  statsPrevIndex,
  statsNextIndex,
  keyPrefix,
}: {
  statsActiveIndex: number;
  statsPrevIndex: number;
  statsNextIndex: number;
  keyPrefix?: string;
}) {
  const suffix = keyPrefix ? `-${keyPrefix}` : "";

  return (
    <div className="stats-carousel-shell" aria-hidden="true">
      <div className="stats-strip">
        <div className="stats-strip-track">
          {[0, 1, 2].flatMap((copy) =>
            swiperStripOrder.map((state, index) => (
              <div
                className="stats-strip-card"
                key={`${state.id}${suffix}-strip-${copy}-${index}`}
              >
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
            key={`${state.id}${suffix}-state`}
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
  );
});

export const StatsLoopScene = memo(function StatsLoopScene() {
  const { sectionRef, statsActiveIndex, statsPrevIndex, statsNextIndex } =
    useStatsLoop();

  return (
    <section
      className="scene stats-loop-scene"
      data-scene="stats-loop"
      id="scene3"
      ref={sectionRef}
    >
      <div className="sticky">
        <StatsCarousel
          statsActiveIndex={statsActiveIndex}
          statsPrevIndex={statsPrevIndex}
          statsNextIndex={statsNextIndex}
        />
      </div>
    </section>
  );
});

export const MobileStatsLoopScene = memo(function MobileStatsLoopScene() {
  const { sectionRef, statsActiveIndex, statsPrevIndex, statsNextIndex } =
    useStatsLoop();

  return (
    <section
      className="mobile-fly-divider mobile-stats-loop"
      aria-label="Game play stats"
      ref={sectionRef}
    >
      <div className="mobile-stats-loop-canvas" aria-hidden="true">
        <StatsCarousel
          statsActiveIndex={statsActiveIndex}
          statsPrevIndex={statsPrevIndex}
          statsNextIndex={statsNextIndex}
          keyPrefix="mobile"
        />
      </div>
    </section>
  );
});
