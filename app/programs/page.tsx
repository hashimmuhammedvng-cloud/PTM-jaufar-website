"use client";

import React, { useState } from "react";
import Link from "next/link";
import { programsList, ProgramItem } from "@/data/siteData";
import ProgramCard from "@/components/ProgramCard";
import SectionHeading from "@/components/SectionHeading";
import { ArrowUpRight } from "lucide-react";

const categories = [
  "All",
  "Leadership Development",
  "Emotional Intelligence",
  "Personal Excellence",
  "Youth Development",
  "Trainer Development",
  "Keynote Speaking",
];

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPrograms =
    activeCategory === "All"
      ? programsList
      : programsList.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-20 bg-navy text-white">
      {/* Header */}
      <section className="py-16 sm:py-24 border-b border-gold/15 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/25 mb-4">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              LEARNING EXPERIENCES
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight max-w-4xl mx-auto">
            Growth That Moves <span className="text-gold">Beyond Theory.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Signature workshops, corporate intensives, and campus bootcamps designed
            to cultivate emotional intelligence and high-impact leadership.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gold text-navy shadow-md shadow-gold/20"
                    : "bg-navy-light/60 text-slate-300 hover:text-white hover:bg-navy-light border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Grid */}
      <section className="py-20 sm:py-24 bg-navy-dark">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((prog) => (
              <ProgramCard key={prog.id} program={prog} theme="navy" />
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-16 text-slate-400">
              No programs currently listed under this category.
            </div>
          )}
        </div>
      </section>

      {/* Custom Program Consulting Callout */}
      <section className="py-20 bg-navy text-white text-center border-t border-gold/15">
        <div className="max-w-[850px] mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block mb-2">
            BESPOKE ORGANIZATIONAL CURRICULUM
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-white mb-4">
            Need a Customized Cohort or Internal Training Program?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            We partner directly with HR directors, academic chancellors, and corporate
            leaders to co-design transformative multi-day retreats or ongoing leadership cohorts.
          </p>
          <Link
            href="/contact#inquiry"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-button text-xs font-bold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light transition-all shadow-lg shadow-gold/20"
          >
            <span>Request Corporate Training Consultation</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </section>
    </div>
  );
}

