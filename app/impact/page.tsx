import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ImpactCounters from "@/components/ImpactCounters";
import {
  testimonialsList,
  transformationStages,
  shifts,
  siteConfig,
} from "@/data/siteData";
import { Quote, CheckCircle2, ArrowUpRight, TrendingUp } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact & Achievements — Transforming Potential into Performance",
  description:
    "Explore the measurable impact of PTM Jaufar Swadiq's training programs across corporate enterprises, educational institutions, and individuals.",
};

export default function ImpactPage() {
  return (
    <div className="pt-28 pb-20 bg-navy text-white">
      {/* Header */}
      <section className="py-16 sm:py-24 border-b border-gold/15 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/25 mb-4">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              EVIDENCE OF TRANSFORMATION
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight max-w-4xl mx-auto">
            From Potential to <span className="text-gold">Measurable Performance.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Documented reach, authentic client testimonials, and enduring behavioral
            elevation across communities and corporations.
          </p>
        </div>
      </section>

      {/* Counters */}
      <div className="py-12">
        <ImpactCounters />
      </div>

      {/* Framework & Shifts */}
      <section className="py-20 sm:py-28 bg-ivory text-charcoal">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="THE ARCHITECTURE OF CHANGE"
            title="A Proven 4-Stage Human Development Methodology"
            highlightWord="4-Stage Human Development"
            description="How Jaufar guides participants from initial unexamined habits to lasting, conscious daily excellence."
            theme="light"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {transformationStages.map((stage) => (
              <div
                key={stage.step}
                className="p-7 rounded-card bg-white border border-charcoal/10 hover:border-gold transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-3xl sm:text-4xl text-gold-dark font-normal">
                      {stage.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-gold-dark" />
                  </div>
                  <h3 className="font-heading text-2xl text-navy mb-1">
                    {stage.title}
                  </h3>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-3">
                    {stage.subtitle}
                  </span>
                  <p className="text-xs text-charcoal/80 leading-relaxed mb-4">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-charcoal/10 text-xs text-navy font-semibold italic">
                  Outcome: {stage.outcomes}
                </div>
              </div>
            ))}
          </div>

          {/* Shifts table */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-charcoal/10 shadow-lg max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl text-navy mb-6 text-center">
              The Measurable Mindset & Behavioral Shifts
            </h3>
            <div className="space-y-3">
              {shifts.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 sm:grid-cols-11 gap-3 p-3.5 rounded-lg bg-ivory/60 items-center text-xs sm:text-sm"
                >
                  <div className="sm:col-span-5 text-charcoal/70 line-through decoration-gold/60">
                    {item.from}
                  </div>
                  <div className="sm:col-span-1 text-center text-gold-dark font-bold">
                    →
                  </div>
                  <div className="sm:col-span-5 font-semibold text-navy flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-dark shrink-0" />
                    <span>{item.to}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy-dark text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CLIENT VOICES"
            title="The Real-World Echo of Transformation"
            highlightWord="Transformation"
            description="Verified feedback from executives, chancellors, and corporate trainees."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsList.map((test) => (
              <div
                key={test.id}
                className="p-8 rounded-card bg-navy-light/40 border border-gold/20 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-gold/40 mb-4" />
                  <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                    “{test.quote}”
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="font-semibold text-white text-sm">
                    {test.author}
                  </div>
                  <div className="text-xs text-gold mt-0.5">
                    {test.designation}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {test.organization} • {test.program}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-navy text-white text-center border-t border-gold/15">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl sm:text-4xl text-white mb-4">
            Create an Impact Story in Your Organization
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            Schedule a conversation with PTM Jaufar Swadiq to design an impactful
            training engagement tailored to your specific organizational goals.
          </p>
          <Link
            href="/contact#inquiry"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-button text-xs font-bold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light transition-all shadow-lg shadow-gold/20"
          >
            <span>Discuss Your Impact Objectives</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </section>
    </div>
  );
}

