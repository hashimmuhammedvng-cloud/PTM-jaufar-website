import React from "react";
import Link from "next/link";
import { ProgramItem } from "@/data/siteData";
import { Clock, Presentation, ArrowRight, Check } from "lucide-react";

interface ProgramCardProps {
  program: ProgramItem;
  theme?: "navy" | "ivory";
}

export default function ProgramCard({ program, theme = "navy" }: ProgramCardProps) {
  const isNavy = theme === "navy";

  return (
    <div
      className={`group flex flex-col justify-between p-6 sm:p-8 rounded-card border transition-all duration-300 relative ${
        isNavy
          ? "bg-navy-light/40 border-gold/20 hover:border-gold hover:shadow-xl hover:shadow-black/30"
          : "bg-white border-charcoal/10 hover:border-gold hover:shadow-xl hover:shadow-navy/5"
      }`}
    >
      {/* Featured Badge if applicable */}
      {program.featured && (
        <span className="absolute top-6 right-6 px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-widest bg-gold/15 text-gold border border-gold/30">
          Flagship Program
        </span>
      )}

      <div>
        {/* Category */}
        <div className="text-[11px] uppercase font-bold tracking-widest text-gold mb-3">
          {program.category}
        </div>

        {/* Title */}
        <h3
          className={`font-heading text-xl sm:text-2xl font-normal tracking-tight leading-snug mb-3 group-hover:text-gold transition-colors ${
            isNavy ? "text-white" : "text-navy"
          }`}
        >
          {program.title}
        </h3>

        {/* Short Description */}
        <p
          className={`text-sm leading-relaxed mb-6 ${
            isNavy ? "text-slate-300" : "text-charcoal/80"
          }`}
        >
          {program.shortDescription}
        </p>

        {/* Key Highlights / Topics */}
        <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
          {program.topicsCovered.slice(0, 3).map((topic, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs">
              <span className="w-4 h-4 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 text-gold stroke-[3]" />
              </span>
              <span className={isNavy ? "text-slate-300" : "text-charcoal/80"}>
                {topic}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Meta Specs & CTA */}
      <div className="pt-5 border-t border-white/10 mt-2">
        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs mb-5 text-muted">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Presentation className="w-3.5 h-3.5 text-gold shrink-0" />
            <span className="truncate max-w-[200px]">{program.deliveryFormat}</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 pt-1">
          <Link
            href={`/programs/${program.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold hover:text-gold-light group-hover:underline underline-offset-4 transition-colors"
          >
            <span>Explore Program</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href={`/contact?program=${encodeURIComponent(program.title)}#inquiry`}
            className="px-3.5 py-1.5 rounded-button text-[11px] font-semibold uppercase tracking-wider bg-white/10 text-white hover:bg-gold hover:text-navy transition-all"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}

