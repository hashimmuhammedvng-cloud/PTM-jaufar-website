"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, AudienceItem } from "@/data/siteData";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

export default function WhoYouHelpCoverflow() {
  const audiences: AudienceItem[] = siteConfig.whoYouHelp.audiences;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = audiences.length;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Auto-advance every 5.5s unless hovered or interacted with
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Keyboard navigation when user is focused or uses arrow keys
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      handleNext(); // swipe left -> next
    } else if (distance < -45) {
      handlePrev(); // swipe right -> prev
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative w-full max-w-[1300px] mx-auto px-4 select-none focus:outline-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Who You Help 3D Carousel"
    >
      {/* 3D Coverflow Container */}
      <div
        className="relative w-full h-[460px] sm:h-[520px] md:h-[560px] flex items-center justify-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {audiences.map((aud, index) => {
          // Calculate modular offset relative to active card (-2 to +2)
          let offset = (index - activeIndex + total) % total;
          if (offset > 2) offset -= total;

          // Determine 3D positioning, scale, opacity, and layering
          const isActive = offset === 0;
          const isMidLeft = offset === -1;
          const isMidRight = offset === 1;
          const isFarLeft = offset === -2;
          const isFarRight = offset === 2;

          let translateX = "0%";
          let scale = 1;
          let zIndex = 30;
          let opacity = 1;
          let brightness = "brightness(100%)";
          let rotateY = "0deg";

          if (isActive) {
            translateX = "0%";
            scale = 1.04;
            zIndex = 30;
            opacity = 1;
            brightness = "brightness(100%)";
            rotateY = "0deg";
          } else if (isMidLeft) {
            translateX = "-62%";
            scale = 0.86;
            zIndex = 20;
            opacity = 0.82;
            brightness = "brightness(70%)";
            rotateY = "8deg";
          } else if (isMidRight) {
            translateX = "62%";
            scale = 0.86;
            zIndex = 20;
            opacity = 0.82;
            brightness = "brightness(70%)";
            rotateY = "-8deg";
          } else if (isFarLeft) {
            translateX = "-118%";
            scale = 0.72;
            zIndex = 10;
            opacity = 0.45;
            brightness = "brightness(45%)";
            rotateY = "14deg";
          } else if (isFarRight) {
            translateX = "118%";
            scale = 0.72;
            zIndex = 10;
            opacity = 0.45;
            brightness = "brightness(45%)";
            rotateY = "-14deg";
          }

          return (
            <div
              key={aud.number}
              onClick={() => setActiveIndex(index)}
              style={{
                transform: `translate(calc(-50% + ${translateX}), -50%) scale(${scale}) perspective(1200px) rotateY(${rotateY})`,
                zIndex,
                opacity,
                filter: brightness,
                transition: "all 600ms cubic-bezier(0.25, 1, 0.5, 1)",
              }}
              className={`absolute top-1/2 left-1/2 w-[280px] sm:w-[340px] md:w-[390px] lg:w-[420px] h-[400px] sm:h-[460px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 border ${
                isActive
                  ? "border-gold/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(209,167,81,0.25)]"
                  : "border-white/10 hover:border-gold/30 hover:opacity-90"
              }`}
            >
              {/* Background Photo */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={aud.image || "/images/training-session-1.jpg"}
                  alt={aud.target}
                  fill
                  sizes="(max-width: 768px) 300px, 440px"
                  className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  priority={isActive}
                />
                {/* Vignette Gradients for High Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/65 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
              </div>

              {/* Card Badge on Top */}
              <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-gold px-2.5 py-1 rounded-full bg-navy-dark/70 border border-gold/30 backdrop-blur-md">
                  {aud.number}
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-navy-dark/70 text-slate-200 border border-white/15 backdrop-blur-md">
                  {aud.badge}
                </span>
              </div>

              {/* Bottom Card Content: Title, Description & Action */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 flex flex-col justify-end">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug drop-shadow-md">
                  {aud.target}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-2.5 leading-relaxed font-normal line-clamp-3 drop-shadow">
                  {aud.description}
                </p>

                {/* Subtle Interactive Link */}
                <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-gold-light group/link"
                    onClick={(e) => {
                      if (!isActive) {
                        e.preventDefault();
                        setActiveIndex(index);
                      }
                    }}
                  >
                    <span>Tailored Support</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Program Focus
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls Row — ( ← )  1 / 5  ( → ) with White & Blue Accent */}
      <div className="flex items-center justify-center gap-6 mt-6 sm:mt-8">
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous card"
          className="w-11 h-11 rounded-full border border-sky-400/40 text-sky-200 hover:border-white hover:btn-white-blue-gradient hover:text-navy-dark active:scale-95 transition-all duration-200 flex items-center justify-center shadow-lg group focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.2] group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Counter Indicator: 1 / 5 */}
        <div className="font-heading font-semibold text-sm sm:text-base text-slate-300 tracking-wider flex items-center gap-2 px-2">
          <span className="text-white font-bold text-lg sm:text-xl">
            {activeIndex + 1}
          </span>
          <span className="text-sky-400/70 font-light">/</span>
          <span className="text-slate-400">
            {total}
          </span>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next card"
          className="w-11 h-11 rounded-full border border-sky-400/40 text-sky-200 hover:border-white hover:btn-white-blue-gradient hover:text-navy-dark active:scale-95 transition-all duration-200 flex items-center justify-center shadow-lg group focus:outline-none"
        >
          <ArrowRight className="w-4 h-4 stroke-[2.2] group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}

