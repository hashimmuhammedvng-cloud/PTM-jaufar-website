import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { programsList, ProgramItem } from "@/data/siteData";
import InquiryForm from "@/components/InquiryForm";
import { Clock, Presentation, Users, CheckCircle2, ArrowLeft, ArrowUpRight } from "lucide-react";
import { Metadata } from "next";

export function generateStaticParams() {
  return programsList.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const program = programsList.find((p) => p.slug === params.slug);
  if (!program) return { title: "Program Not Found" };

  return {
    title: `${program.title} — PTM Jaufar Swadiq`,
    description: program.shortDescription,
  };
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = programsList.find((p) => p.slug === params.slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 bg-navy text-white">
      {/* Breadcrumb & Navigation */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Programs</span>
        </Link>
      </div>

      {/* Program Hero */}
      <section className="py-12 sm:py-16 border-b border-gold/15 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block mb-3">
              {program.category}
            </span>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight mb-6">
              {program.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-200/90 leading-relaxed">
              {program.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 sm:py-20 bg-navy-dark">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Program Overview */}
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl text-white mb-4">
                  Program Overview
                </h2>
                <div className="text-base text-slate-300 leading-relaxed space-y-4">
                  <p>{program.longDescription}</p>
                </div>
              </div>

              {/* Key Learning Objectives */}
              <div className="p-8 rounded-2xl bg-navy-light/40 border border-gold/20">
                <h3 className="font-heading text-2xl text-white mb-6">
                  Key Learning Objectives
                </h3>
                <div className="space-y-4">
                  {program.keyObjectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Topics Covered */}
              <div>
                <h3 className="font-heading text-2xl text-white mb-6">
                  Core Modules & Curricular Topics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {program.topicsCovered.map((topic, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-navy-light/50 border border-white/10 flex items-start gap-3 text-sm text-slate-200"
                    >
                      <span className="font-mono text-gold text-xs font-bold mt-0.5">
                        0{i + 1}
                      </span>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tailored Booking Inquiry Form */}
              <div className="pt-8 border-t border-white/10">
                <InquiryForm defaultInquiryType={program.title} />
              </div>
            </div>

            {/* Right Meta Sidebar (4 cols) */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="p-6 rounded-2xl bg-navy-light/50 border border-gold/25 shadow-xl space-y-6">
                <h3 className="text-xs uppercase font-bold tracking-widest text-gold border-b border-white/10 pb-3">
                  Program Specifications
                </h3>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-xs text-muted block mb-1">Duration:</span>
                    <div className="flex items-center gap-2 font-medium text-white">
                      <Clock className="w-4 h-4 text-gold shrink-0" />
                      <span>{program.duration}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-muted block mb-1">Delivery Format:</span>
                    <div className="flex items-center gap-2 font-medium text-white">
                      <Presentation className="w-4 h-4 text-gold shrink-0" />
                      <span>{program.deliveryFormat}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-muted block mb-2">Designed For:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {program.targetAudience.map((aud, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md text-xs bg-navy text-slate-300 border border-white/10"
                        >
                          {aud}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href="#inquiry"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-button text-xs font-bold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light transition-all shadow-md shadow-gold/20"
                  >
                    <span>Enquire for this Program</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

