/* eslint-disable @next/next/no-img-element */
"use client";

import { memo, useEffect, useRef, useState } from "react";
import footerDinoAnimation from "../data/footer-dino-animation.json";

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

export default DinoLottie;
