import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { expertiseAreas, programsList } from "@/data/siteData";
import { ShieldCheck, HeartHandshake, Sparkles, ArrowRight, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas of Expertise — Leadership, EQ & Human Development",
  description:
    "Explore the three core disciplines of PTM Jaufar Swadiq: Leadership Development, Emotional Intelligence, and Experiential Human Development.",
};

export default function ExpertisePage() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-gold stroke-[1.8]" />,
    HeartHandshake: <HeartHandshake className="w-8 h-8 text-gold stroke-[1.8]" />,
    Sparkles: <Sparkles className="w-8 h-8 text-gold stroke-[1.8]" />,
  };

  return (
    <div className="pt-28 pb-20 bg-navy text-white">
      {/* Header */}
      <section className="py-16 sm:py-24 border-b border-gold/15 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/25 mb-4">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              CORE SPECIALIZATIONS
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight max-w-4xl mx-auto">
            Developing People. <span className="text-gold">Strengthening Leaders.</span> Creating Impact.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A comprehensive methodology rooted in human psychology, emotional
            literacy, and purposeful organizational leadership.
          </p>
        </div>
      </section>

      {/* Pillars Deep Dive */}
      <section className="py-20 sm:py-28 bg-navy-dark">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.id}
              id={area.id}
              className="scroll-mt-32 p-8 sm:p-12 rounded-2xl bg-navy-light/40 border border-gold/20 backdrop-blur-md relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Header info (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-navy border border-gold/30 flex items-center justify-center">
                    {iconMap[area.icon]}
                  </div>

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block">
                    Pillar 0{index + 1} • {area.subtitle}
                  </span>

                  <h2 className="font-heading text-3xl sm:text-4xl text-white font-normal">
                    {area.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
                    {area.description}
                  </p>

                  <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-gold-light italic">
                    “{area.highlight}”
                  </div>
                </div>

                {/* Right Topics & Programs (7 cols) */}
                <div className="lg:col-span-7 space-y-6 lg:pl-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0">
                  <h3 className="font-heading text-xl text-white">
                    Core Curricular Topics Covered
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {area.topics.map((topic, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-navy/60 border border-white/5 text-xs sm:text-sm text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-white/10">
                    <span className="text-xs text-slate-400">
                      Explore programs addressing this specific pillar:
                    </span>
                    <Link
                      href="/programs"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-button text-xs font-bold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light transition-all"
                    >
                      <span>Explore Programs</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-navy text-white text-center border-t border-gold/15">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl sm:text-4xl text-white mb-4">
            Custom Curriculum Architecture
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            Looking for a tailored organizational development module that bridges
            leadership strategy and emotional intelligence for your team?
          </p>
          <Link
            href="/contact#inquiry"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-button text-xs font-bold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light transition-all shadow-lg shadow-gold/20"
          >
            <span>Request Custom Training Consultation</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </section>
    </div>
  );
}

