"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";

export default function SplashScreen({ duration = 5000 }: { duration?: number }) {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Only run on client after hydration
    if (sessionStorage.getItem("splash_shown")) {
      return;
    }

    // Now we can safely mount the splash screen
    // eslint-disable-next-line
    setIsMounted(true);
    sessionStorage.setItem("splash_shown", "1");

    // 1. Fetch the SVG file from the public folder
    fetch("/file.svg")
      .then((res) => res.text())
      .then((text) => setSvgContent(text))
      .catch((err) => console.error("Failed to load Splash Screen SVG:", err));

    // 2. Timeline for Fade Out and Unmount
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    const unmountTimer = setTimeout(() => {
      setIsMounted(false);
    }, duration + 500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [duration]);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 bg-white flex items-center justify-center transition-opacity duration-700 ease-in-out pointer-events-none ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {svgContent && (
        <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
          {/* SVG Outline layer */}
          <div
            className="splash-logo-container absolute inset-0 w-full h-full"
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
          {/* Full Color Logo layer */}
          <Image
            src="/logo.png"
            alt="Al Zekry Logo"
            fill
            className="object-contain opacity-0 animate-[fadeInColorLogo_1s_ease-in-out_1.5s_forwards]"
          />
        </div>
      )}
      
      <style dangerouslySetInnerHTML={{
        __html: `
          .splash-logo-container svg {
            width: 100%;
            height: 100%;
          }

          /* General path styles: transparent fill, greenish stroke, hidden dasharray */
          .splash-logo-container svg path {
            fill: transparent !important;
            stroke: #1A7A43 !important; /* Forest Green for outline */
            stroke-width: 1.5px !important;
            stroke-dasharray: 4500;
            stroke-dashoffset: 4500;
            animation: 
              drawLogo 1.5s ease-in-out forwards,
              fadeOutStroke 0.8s ease-in-out 1.5s forwards;
          }

          /* Step 1: Draw out the paths */
          @keyframes drawLogo {
            to { stroke-dashoffset: 0; }
          }

          /* Step 2: Fade out the stroke as the real logo fades in */
          @keyframes fadeOutStroke {
            to { stroke: transparent !important; }
          }

          /* Step 3: Fade in the PNG logo */
          @keyframes fadeInColorLogo {
            from { opacity: 0; transform: scale(0.98); }
            to { opacity: 1; transform: scale(1); }
          }
        `
      }} />
    </div>
  );
}
