"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig, WhatYouDoSlide } from "@/data/siteData";
import { CheckCircle2, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WhatYouDoSlider() {
  const slides = siteConfig.whatYouDo.slides;
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides every 5.5s unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const currentSlide = slides[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveIdx(idx)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              activeIdx === idx
                ? "btn-white-blue-gradient scale-[1.02] shadow-lg shadow-sky-500/25"
                : "bg-navy-light/60 text-slate-300 hover:text-white hover:bg-navy-light border border-white/10"
            }`}
          >
            <span className="font-mono text-[10px] opacity-80">0{idx + 1}</span>
            <span>{slide.title}</span>
          </button>
        ))}
      </div>

      {/* Main Slide Card */}
      <div className="p-6 sm:p-10 lg:p-12 rounded-2xl bg-navy-light/40 border border-gold/25 backdrop-blur-md shadow-2xl relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[90px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Slide Text Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/30">
              <span className="font-mono text-xs font-bold text-gold">
                PILLAR 0{activeIdx + 1} OF 0{slides.length}
              </span>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-gold-light block mb-1">
                {currentSlide.subtitle}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {currentSlide.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {currentSlide.description}
            </p>

            {/* Key Delivery Points */}
            <div className="space-y-2.5 pt-2 w-full">
              {currentSlide.points.map((pt, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-navy-dark/70 border border-white/5 text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Controls & CTA Row */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 w-full border-t border-white/10">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold hover:text-gold-light"
              >
                <span>Inquire About {currentSlide.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2.5 rounded-full bg-navy-dark border border-white/15 text-slate-300 hover:text-gold hover:border-gold transition-colors focus:outline-none"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="text-xs font-mono text-slate-400 px-1">
                  0{activeIdx + 1} / 0{slides.length}
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-navy-dark border border-white/15 text-slate-300 hover:text-gold hover:border-gold transition-colors focus:outline-none"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Slide Authentic Image (5 cols) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-gold/30 shadow-2xl bg-navy-dark">
              <Image
                key={currentSlide.image}
                src={currentSlide.image}
                alt={currentSlide.title}
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-xs font-semibold text-white drop-shadow">
                {currentSlide.title} in Action
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

