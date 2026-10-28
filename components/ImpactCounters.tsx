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
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left py-4 sm:py-2 px-3">
      {/* Animated Counter */}
      <div className="flex items-baseline gap-1">
        <span className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          {formattedNumber}
        </span>
        <span className="text-gold font-heading font-extrabold text-3xl sm:text-4xl">
          {item.suffix}
        </span>
      </div>

      {/* Label */}
      <div className="font-heading font-medium text-sm sm:text-base text-slate-200 mt-2">
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
      className="relative z-20 max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10"
    >
      <div className="rounded-2xl bg-navy-light/60 backdrop-blur-xl border border-gold/20 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/40">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {minimalistMetrics.map((metric) => (
            <SingleCounter key={metric.id} item={metric} inView={inView} />
          ))}
        </div>
      </div>
    </div>
  );
}
