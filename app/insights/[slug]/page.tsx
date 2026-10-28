import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articlesList, siteConfig } from "@/data/siteData";
import { Clock, ArrowLeft, ArrowUpRight, Share2 } from "lucide-react";
import { Metadata } from "next";

export function generateStaticParams() {
  return articlesList.map((a) => ({
    slug: a.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articlesList.find((a) => a.slug === params.slug);
  if (!article) return { title: "Insight Not Found" };

  return {
    title: `${article.title} | PTM Jaufar Swadiq`,
    description: article.summary,
  };
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = articlesList.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articlesList.filter((a) => a.slug !== params.slug).slice(0, 2);

  return (
    <div className="pt-28 pb-20 bg-navy text-white">
      {/* Top Nav */}
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 pt-6 pb-4">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Insights</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-[900px] mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-gold/15 text-gold border border-gold/30">
            {article.category}
          </span>
          <span className="text-xs text-muted">•</span>
          <div className="flex items-center gap-1.5 text-xs text-slate-300">
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight mb-6">
          {article.title}
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed italic border-l-2 border-gold pl-4 py-1">
          {article.summary}
        </p>
      </header>

      {/* Featured Cover Image */}
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 mb-12">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-gold/25 shadow-2xl bg-navy-card">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 900px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Editorial Content */}
      <article className="max-w-[800px] mx-auto px-4 sm:px-6 space-y-6 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {/* Author Byline Card */}
        <div className="mt-14 pt-8 border-t border-white/10 p-6 rounded-2xl bg-navy-light/40 border border-gold/20 flex flex-col sm:flex-row items-center gap-5">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border border-gold shrink-0">
            <Image
              src={siteConfig.images.hero}
              alt={siteConfig.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-heading text-lg text-white">
              Written by {siteConfig.name}
            </div>
            <div className="text-xs text-gold uppercase tracking-wider mb-1">
              {siteConfig.title}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Guiding leaders, educators, and organizations to achieve enduring
              excellence through emotional intelligence and human-centered mastery.
            </p>
          </div>
        </div>
      </article>

      {/* Related Insights */}
      {relatedArticles.length > 0 && (
        <section className="max-w-[900px] mx-auto px-4 sm:px-6 mt-20 pt-12 border-t border-white/10">
          <h3 className="font-heading text-2xl text-white mb-6">
            Continue Reading
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/insights/${rel.slug}`}
                className="group p-6 rounded-xl bg-navy-light/40 border border-gold/15 hover:border-gold transition-colors block"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-gold mb-1">
                  {rel.category}
                </div>
                <h4 className="font-heading text-lg text-white group-hover:text-gold transition-colors leading-snug mb-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {rel.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

