"use client";

import React, { useEffect, useRef, useState } from "react";
import { minimalistMetrics, MetricItem } from "@/data/siteData";

interface CounterProps {
  item: MetricItem;
  inView: boolean;
}

function SingleCounter({ item, inView }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplayValue(item.value);
      return;
    }

    const duration = 1600;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(easeProgress * item.value);

      if (frame >= totalFrames) {
        setDisplayValue(item.value);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [inView, item.value]);

  const formattedNumber = displayValue.toLocaleString();

  return (
    <div className="flex flex-col items-start py-2">
      {/* Plain Animated Counter */}
      <div className="flex items-baseline gap-1">
        <span className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          {formattedNumber}
        </span>
        <span className="text-gold font-heading font-extrabold text-3xl sm:text-4xl">
          {item.suffix}
        </span>
      </div>

      {/* Label */}
      <div className="font-heading font-semibold text-sm sm:text-base text-slate-100 mt-2">
        {item.label}
      </div>

      {/* Sublabel */}
      <div className="text-xs text-muted font-normal mt-0.5 tracking-wide">
        {item.sublabel}
      </div>
    </div>
  );
}

export default function ImpactCounters() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-20 max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 border-b border-white/5"
    >
      {/* Completely Plain Numbers — No Box, No Container Card */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {minimalistMetrics.map((metric) => (
          <SingleCounter key={metric.id} item={metric} inView={inView} />
        ))}
      </div>
    </div>
  );
}
