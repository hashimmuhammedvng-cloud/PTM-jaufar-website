import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, ArrowUpRight, Award, Compass, HeartHandshake, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PTM Jaufar Swadiq — Human Excellence Strategist",
  description:
    "Learn about PTM Jaufar Swadiq, his philosophy that 'Excellence Begins Within', his journey in leadership development, emotional intelligence, and human transformation.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-navy text-white">
      {/* Hero Banner */}
      <section className="relative py-16 sm:py-24 border-b border-gold/15 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/25">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  THE PERSON BEHIND THE PURPOSE
                </span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
                Leadership Begins with <span className="text-gold">Understanding People.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
                {siteConfig.aboutShort}
              </p>

              <div className="text-sm text-gold italic border-l-2 border-gold pl-3 py-1">
                “{siteConfig.corePhilosophy}”
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-gold/30 shadow-2xl aspect-[3/4] bg-navy-card">
                <Image
                  src={siteConfig.images.about}
                  alt="PTM Jaufar Swadiq portrait"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative & Philosophy */}
      <section id="approach" className="py-24 bg-ivory text-charcoal">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 sticky top-28 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-gold" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                  CORE PHILOSOPHY
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl text-navy font-normal leading-tight">
                Excellence is an Inward Awakening, Not an External Veneer.
              </h2>

              <p className="text-charcoal/80 leading-relaxed text-sm sm:text-base">
                In a world obsessed with superficial charisma and transactional
                tactics, true leadership endures only when rooted in genuine
                self-awareness, empathy, and steadfast moral conviction.
              </p>

              <div className="p-6 rounded-xl bg-white border border-charcoal/10 shadow-sm space-y-3">
                <div className="font-heading text-lg text-navy">
                  The Three Core Directives:
                </div>
                <div className="text-xs sm:text-sm text-charcoal/85 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
                    <strong>Develop Yourself:</strong> The inner mastery of emotions and mindset.
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
                    <strong>Elevate Others:</strong> Empowering team and community without ego.
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
                    <strong>Lead with Purpose:</strong> Aligning daily action with lasting values.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-charcoal/85 text-base sm:text-lg leading-relaxed">
              <h3 className="font-heading text-2xl text-navy">
                The Journey of Human Transformation
              </h3>

              <p>
                My path as a Human Excellence Strategist grew out of a simple yet
                uncompromising realization: every great institutional breakdown is
                rarely an intellectual failure; it is an emotional and relational
                failure.
              </p>

              <p>
                When leaders struggle with their own unspoken anxieties, they
                project fear onto their teams. When students lack self-awareness,
                they succumb to societal pressure and self-doubt. When educators
                rely strictly on syllabus delivery without emotional connection,
                learning becomes an empty exercise.
              </p>

              <p>
                To reverse this dynamic, my work focuses on creating experiential,
                high-trust learning environments where individuals can safely
                confront their blind spots, regulate their emotional responses, and
                discover their inherent capacity for greatness.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-card bg-white border border-charcoal/10">
                  <HeartHandshake className="w-6 h-6 text-gold-dark mb-2" />
                  <h4 className="font-heading text-lg text-navy mb-1">
                    Human-Centered
                  </h4>
                  <p className="text-xs text-charcoal/70">
                    Prioritizing emotional safety, radical honesty, and mutual respect.
                  </p>
                </div>

                <div className="p-5 rounded-card bg-white border border-charcoal/10">
                  <ShieldCheck className="w-6 h-6 text-gold-dark mb-2" />
                  <h4 className="font-heading text-lg text-navy mb-1">
                    Evidence-Grounded
                  </h4>
                  <p className="text-xs text-charcoal/70">
                    Synthesizing modern cognitive psychology with timeless leadership values.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/contact#inquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-button text-xs font-bold uppercase tracking-wider bg-navy text-white hover:bg-navy-light transition-all shadow-md"
                >
                  <span>Invite Jaufar to Train or Speak</span>
                  <ArrowUpRight className="w-4 h-4 text-gold stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Gallery */}
      <section className="py-24 bg-navy text-white border-t border-gold/15">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="MOMENTS OF IMPACT"
            title="Facilitating Breakthroughs Across Rooms & Stages"
            highlightWord="Breakthroughs"
            description="Authentic photographs capturing Jaufar in action during university seminars, corporate leadership retreats, and intensive workshops."
            theme="dark"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-gold/25 group">
              <Image
                src={siteConfig.images.workshop1}
                alt="Jaufar Swadiq leading workshop"
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                Interactive Group Facilitation
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-gold/25 group">
              <Image
                src={siteConfig.images.training1}
                alt="Jaufar Swadiq corporate session"
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                Corporate Leadership Alignment
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-gold/25 group">
              <Image
                src={siteConfig.images.sessionCorporate}
                alt="Jaufar Swadiq youth & educator address"
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                Educator & Youth Summit
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

