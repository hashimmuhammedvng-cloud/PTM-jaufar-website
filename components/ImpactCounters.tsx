"use client";

import React, { useEffect, useRef, useState } from "react";
import { impactMetrics, MetricItem } from "@/data/siteData";
import { CheckCircle2, Info } from "lucide-react";

interface CounterProps {
  item: MetricItem;
  inView: boolean;
}

function SingleCounter({ item, inView }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplayValue(item.value);
      return;
    }

    const duration = 1800; // ms
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      // Ease out cubic
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
    <div className="relative group flex flex-col p-6 rounded-card bg-navy-light/40 border border-gold/15 hover:border-gold/40 transition-all duration-300">
      {/* Verification status pill */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] uppercase font-bold tracking-widest text-gold/80">
          Metric {item.verified ? "Verified" : "Indicative"}
        </span>
        {item.verified ? (
          <span title="Verified metric from official records">
            <CheckCircle2 className="w-3.5 h-3.5 text-gold/70" />
          </span>
        ) : (
          <span title="Estimated figure pending certification">
            <Info className="w-3.5 h-3.5 text-muted" />
          </span>
        )}
      </div>

      {/* Counter value */}
      <div className="font-heading text-4xl sm:text-5xl lg:text-6xl text-gold font-normal tracking-tight">
        {formattedNumber}
        <span className="text-gold-light ml-0.5">{item.suffix}</span>
      </div>

      {/* Label */}
      <h3 className="text-white font-medium text-base sm:text-lg mt-2 mb-1 tracking-tight">
        {item.label}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed mt-1">
        {item.description}
      </p>

      {/* Fine gold bottom highlight */}
      <div className="w-8 h-[2px] bg-gold/30 group-hover:w-16 group-hover:bg-gold transition-all duration-300 mt-4" />
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
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-20 -mt-10 sm:-mt-14 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Professional Impact Metrics"
    >
      <div className="bg-navy-dark/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 border border-gold/20 shadow-2xl shadow-black/40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {impactMetrics.map((metric) => (
            <SingleCounter key={metric.id} item={metric} inView={inView} />
          ))}
        </div>

        {/* Data Governance Disclaimer */}
        <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <span>
            Data Integrity: Figures represent documented participants and engagements across professional programs.
          </span>
          <span className="text-gold/80 italic font-mono">
            Audited & Maintained in Data Config
          </span>
        </div>
      </div>
    </section>
  );
}

