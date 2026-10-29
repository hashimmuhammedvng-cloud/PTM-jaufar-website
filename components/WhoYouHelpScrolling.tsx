"use client";

import React from "react";
import { siteConfig, AudienceItem } from "@/data/siteData";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function WhoYouHelpScrolling() {
  const audiences = siteConfig.whoYouHelp.audiences;
  // Duplicate for seamless infinite loop
  const duplicated = [...audiences, ...audiences];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Edge Blur Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

      {/* Scrolling Track */}
      <div className="animate-marquee flex gap-5 sm:gap-6 py-2">
        {duplicated.map((aud, index) => (
          <div
            key={index}
            className="w-[280px] sm:w-[320px] shrink-0 p-6 sm:p-7 rounded-2xl bg-navy-light/50 border border-white/10 hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Top Row: Number & Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-gold">
                  {aud.number}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-white/10 text-slate-300 group-hover:bg-gold/20 group-hover:text-gold transition-colors">
                  {aud.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-gold transition-colors">
                {aud.target}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {aud.description}
              </p>
            </div>

            {/* Bottom Subtle Action Link */}
            <div className="pt-4 mt-4 border-t border-white/10">
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold group-hover:text-gold-light"
              >
                <span>Tailored Support</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
