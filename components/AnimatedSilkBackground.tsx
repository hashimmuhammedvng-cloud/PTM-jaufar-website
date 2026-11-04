"use client";

import React from "react";

export default function AnimatedSilkBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Base Deep Midnight Navy Canvas */}
      <div className="absolute inset-0 bg-[#050B14]" />

      {/* Primary Floating Sapphire Silk Wave — Top-Left to Center-Right Drift */}
      <div className="absolute -top-[12%] -left-[10%] w-[68vw] h-[68vw] max-w-[920px] max-h-[920px] rounded-full bg-[radial-gradient(circle,rgba(32,90,185,0.6)_0%,rgba(18,52,118,0.32)_45%,transparent_70%)] blur-[95px] animate-silk-orb-1" />

      {/* Secondary Royal Navy Indigo Wave — Top-Right to Bottom-Center Drift */}
      <div className="absolute top-[18%] -right-[12%] w-[62vw] h-[62vw] max-w-[880px] max-h-[880px] rounded-full bg-[radial-gradient(circle,rgba(26,76,160,0.55)_0%,rgba(14,40,92,0.28)_50%,transparent_72%)] blur-[105px] animate-silk-orb-2" />

      {/* Tertiary Deep Ocean Blue Surge — Bottom-Left to Center Drift */}
      <div className="absolute bottom-[8%] -left-[8%] w-[72vw] h-[72vw] max-w-[980px] max-h-[980px] rounded-full bg-[radial-gradient(circle,rgba(38,102,205,0.48)_0%,rgba(18,50,110,0.24)_52%,transparent_75%)] blur-[115px] animate-silk-orb-3" />

      {/* Quaternary Silk Gold Ambient Glow — Gentle Golden Ribbon Swell */}
      <div className="absolute top-[42%] left-[28%] w-[48vw] h-[48vw] max-w-[680px] max-h-[680px] rounded-full bg-[radial-gradient(circle,rgba(209,167,81,0.22)_0%,rgba(148,113,47,0.08)_48%,transparent_72%)] blur-[110px] animate-silk-gold" />

      {/* Subtle Vignette & Silk Depth Mask to keep typography ultra-readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_50%,transparent_35%,rgba(5,11,20,0.65)_100%)]" />
    </div>
  );
}
