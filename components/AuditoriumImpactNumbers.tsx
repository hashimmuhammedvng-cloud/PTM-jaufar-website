"use client";

import React, { useEffect, useRef, useState } from "react";
import { minimalistMetrics, MetricItem } from "@/data/siteData";

function AnimatedMetricItem({
  item,
  inView,
  delay,
}: {
  item: MetricItem;
  inView: boolean;
  delay: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      setDisplayValue(0);
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplayValue(item.value);
      return;
    }

    const timeout = setTimeout(() => {
      const duration = 2000;
      const frameRate = 1000 / 60;
      const totalFrames = Math.round(duration / frameRate);
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        // Ease out cubic for a silky smooth stop
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
    }, delay);

    return () => clearTimeout(timeout);
  }, [inView, item.value, delay]);

  return (
    <div
      className={`flex flex-col items-center transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight drop-shadow-lg flex items-baseline justify-center">
        <span>{displayValue.toLocaleString()}</span>
        <span className="text-gold ml-1 font-bold">{item.suffix}</span>
      </div>
      <div className="font-heading font-semibold text-base sm:text-lg text-slate-100 mt-2">
        {item.label}
      </div>
      <div className="text-xs text-gold/90 font-medium mt-0.5">
        {item.sublabel}
      </div>
    </div>
  );
}

export default function AuditoriumImpactNumbers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    const el = containerRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center"
    >
      {minimalistMetrics.map((m, index) => (
        <AnimatedMetricItem
          key={m.id}
          item={m}
          inView={inView}
          delay={index * 120}
        />
      ))}
    </div>
  );
}
