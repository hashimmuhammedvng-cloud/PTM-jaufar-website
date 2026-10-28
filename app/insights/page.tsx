import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { articlesList } from "@/data/siteData";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Articles — Ideas for Human Excellence",
  description:
    "Thought leadership essays, reflections on emotional agility, and practical frameworks by PTM Jaufar Swadiq.",
};

export default function InsightsPage() {
  return (
    <div className="pt-28 pb-20 bg-navy text-white">
      {/* Header */}
      <section className="py-16 sm:py-24 border-b border-gold/15 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/25 mb-4">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              IDEAS FOR GROWTH
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight max-w-4xl mx-auto">
            Think Deeper. <span className="text-gold">Lead Better.</span> Grow Intentionally.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Essays and reflections on emotional intelligence, self-leadership, and the
            inner foundations of human excellence.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 sm:py-28 bg-navy-dark">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articlesList.map((art) => (
              <article
                key={art.id}
                className="group flex flex-col justify-between p-6 rounded-card bg-navy-light/40 border border-gold/15 hover:border-gold/40 transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-5 bg-navy-card">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-navy/85 text-gold border border-gold/20">
                      {art.category}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted mb-2">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    <span>{art.readTime}</span>
                    <span>•</span>
                    <span>{art.date}</span>
                  </div>

                  <h2 className="font-heading text-xl text-white mb-3 group-hover:text-gold transition-colors leading-snug">
                    {art.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Link
                    href={`/insights/${art.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold hover:text-gold-light group-hover:underline underline-offset-4"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

