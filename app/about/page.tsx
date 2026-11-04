import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import AuditoriumImpactNumbers from "@/components/AuditoriumImpactNumbers";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/SocialIcons";
import {
  Eye,
  Target,
  Star,
  Gem,
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PTM Jaufar Swadiq — Human Excellence Strategist",
  description:
    "Learn about PTM Jaufar Swadiq, his journey, philosophy, foundation pillars, and the transformative impact of his leadership and emotional intelligence programs.",
};

export default function AboutPage() {
  const foundationIcons: Record<string, React.ReactNode> = {
    vision: <Eye className="w-6 h-6 text-gold" />,
    mission: <Target className="w-6 h-6 text-gold" />,
    purpose: <Star className="w-6 h-6 text-gold" />,
    values: <Gem className="w-6 h-6 text-gold" />,
  };

  return (
    <div className="pt-24 pb-20 text-slate-200 font-body relative">
      {/* Top Breadcrumb */}
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* =========================================================================
          SECTION 1: PERSONAL STORY & BIO — CLEAN & MINIMALIST WITH TRANSPARENT CUTOUT
          ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-white/5 relative overflow-hidden bg-gradient-to-b from-[#091528]/85 via-[#0F2342]/70 to-[#070F1E]/85">
        {/* Animated Ambient Silk Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-700/25 via-gold/15 to-transparent rounded-full blur-[115px] pointer-events-none animate-silk-orb-1" />

        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Pure Transparent Cutout of Jaufar in Suit (5 cols) */}
            <div className="lg:col-span-5 flex justify-center items-end">
              <div className="relative w-full max-w-sm sm:max-w-md h-[420px] sm:h-[500px] lg:h-[560px] flex items-end justify-center">
                {/* Soft Warm Radial Glow Behind Cutout */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

                <Image
                  src={siteConfig.images.suitCutout}
                  alt="PTM Jaufar Swadiq — Human Excellence Strategist"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-contain object-bottom drop-shadow-[0_25px_45px_rgba(0,0,0,0.75)]"
                  priority
                />
              </div>
            </div>

            {/* Right: Story, Vision & Social Links (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/25">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
                  {siteConfig.title}
                </span>
              </div>

              <div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
                  Hi, I'm PTM Jaufar Swadiq
                </h1>
                <div className="w-16 h-[3px] bg-gold mt-3.5 rounded-full" />
              </div>

              <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal pt-1">
                <p>
                  My path has been shaped by a simple truth: genuine excellence begins
                  within. I have dedicated years to studying how emotions, values, and
                  character intertwine with our decisions, guiding people and organizations
                  to discover clarity, purpose, and lasting impact.
                </p>
                <p>
                  True leadership is not about managing or controlling people—it is about
                  understanding them, cultivating deep empathy, and inspiring them to
                  become their best selves.
                </p>
                <p className="text-sm sm:text-base text-slate-400">
                  Whether speaking in university auditoriums or facilitating intensive
                  executive workshops, my mission is to turn awareness into action,
                  potential into performance, and leadership into a force for good.
                </p>
              </div>

              {/* Social Channels Row */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-navy-light border border-white/15 flex items-center justify-center text-slate-300 hover:text-navy hover:bg-gold hover:border-gold transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-navy-light border border-white/15 flex items-center justify-center text-slate-300 hover:text-navy hover:bg-gold hover:border-gold transition-all"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-navy-light border border-white/15 flex items-center justify-center text-slate-300 hover:text-navy hover:bg-gold hover:border-gold transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-navy-light border border-white/15 flex items-center justify-center text-slate-300 hover:text-navy hover:bg-gold hover:border-gold transition-all"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OUR FOUNDATION (Inspired by Reference Image 4)
          (Vision • Mission • Purpose • Values)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#070F1E]/80 via-[#0C1B33]/65 to-[#060C16]/80 border-b border-white/5 relative overflow-hidden">
        {/* Animated Silk Drift Accent */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-blue-800/20 rounded-full blur-[120px] pointer-events-none animate-silk-orb-2" />
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Our Foundation
            </h2>
            {/* Gold Underline Bar */}
            <div className="w-16 h-[3px] bg-gold mx-auto mt-3 rounded-full" />
          </div>

          {/* 4 Foundation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.foundation.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-2xl bg-navy/80 border border-white/10 hover:border-gold/50 transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Circular Gold Icon Badge */}
                <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold/25 transition-transform duration-300">
                  {foundationIcons[item.id]}
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: IMPACT NUMBERS WITH AUDITORIUM PHOTO BACKGROUND (Reference Image 5)
          (Speaker Addressing a Packed Auditorium.png Background)
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background Auditorium Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={siteConfig.images.auditorium}
            alt="Speaker Addressing a Packed Auditorium"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dimmed Overlay for Contrast */}
          <div className="absolute inset-0 bg-navy-dark/85 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block mb-2">
              DOCUMENTED REACH & ENGAGEMENT
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Evidence of Enduring Impact
            </h2>
            <div className="w-16 h-[3px] bg-gold mx-auto mt-3.5 rounded-full" />
          </div>

          {/* Animated Numbers Grid */}
          <AuditoriumImpactNumbers />
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CALL TO ACTION
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-[#060C16]/80 via-[#0E203B]/65 to-[#050A14]/90 text-center border-t border-white/5 relative overflow-hidden">
        {/* Animated Silk Gold Drift */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-900/30 via-gold/15 to-transparent rounded-full blur-[115px] pointer-events-none animate-silk-gold" />
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to Unlock Human Excellence?
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Invite PTM Jaufar Swadiq to speak at your conference, train your corporate leaders,
            or facilitate an empowering student summit.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-button text-xs font-bold uppercase tracking-wider btn-gold-gradient shadow-xl"
            >
              <span>Invite Jaufar to Speak or Train</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
