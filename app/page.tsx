import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import ImpactCounters from "@/components/ImpactCounters";
import WhatYouDoSlider from "@/components/WhatYouDoSlider";
import WhoYouHelpCoverflow from "@/components/WhoYouHelpCoverflow";
import InquiryForm from "@/components/InquiryForm";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/SocialIcons";

export default function HomePage() {
  const pillarIcons = [
    <ShieldCheck key="1" className="w-6 h-6 text-gold stroke-[2]" />,
    <HeartHandshake key="2" className="w-6 h-6 text-gold stroke-[2]" />,
    <Sparkles key="3" className="w-6 h-6 text-gold stroke-[2]" />,
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden text-slate-200 font-body">
      {/* =========================================================================
          HERO SECTION — BRIGHT VISIBLE STAGE PHOTO & LUXURY NAVY GRADIENT
          ========================================================================= */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#081324] via-[#0E203B] to-[#070F1E]">
        {/* Stage Photo on the Right */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] xl:w-[55%] h-full z-0 pointer-events-none">
          <Image
            src={siteConfig.images.stageHero}
            alt="PTM Jaufar Swadiq on stage speaking at the podium"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-[78%_center] lg:object-right brightness-105 contrast-[1.02]"
          />
          {/* Soft Left Feather */}
          <div className="absolute inset-y-0 left-0 w-1/3 lg:w-1/2 bg-gradient-to-r from-[#081324] via-[#081324]/60 to-transparent hidden sm:block" />
          {/* Light Mobile Contrast Mask */}
          <div className="absolute inset-0 bg-[#081324]/65 sm:hidden" />
          {/* Bottom Transition */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070F1E] to-transparent" />
        </div>

        {/* Multi-Dimensional Silk Navy & Ambient Gold Glow (Image 2 Inspiration) */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#163666]/40 via-[#1F4682]/25 to-gold/5 blur-[140px] pointer-events-none" />

        {/* Hero Foreground Content */}
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-xl lg:max-w-lg xl:max-w-xl flex flex-col items-start space-y-6">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-dark/90 border border-gold/30 backdrop-blur-md shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
                {siteConfig.title}
              </span>
            </div>

            {/* Impactful Headline with Cinematic Reveal & Silk Gold Shimmer */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.12] uppercase flex flex-col items-start">
              <span className="animate-hero-line-1 inline-block">
                Unlock <span className="gold-shimmer-text">Human Potential.</span>
              </span>
              <span className="animate-hero-line-2 inline-block">
                Inspire Leadership.
              </span>
              <span className="animate-hero-line-3 inline-block text-slate-100">
                Transform Lives.
              </span>
            </h1>

            {/* Single Supporting Statement */}
            <p className="animate-hero-desc text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {siteConfig.heroParagraphs[0]}
            </p>

            {/* Circular CTA Button + Explore Link */}
            <div className="animate-hero-cta pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3.5 text-left focus:outline-none"
              >
                {/* Circular Accent Badge with Arrow (Silk Gold Gradient) */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-navy-dark/90 border border-gold/40 flex items-center justify-center p-1 shadow-xl group-hover:border-gold transition-all duration-300 shrink-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full btn-gold-gradient flex items-center justify-center text-navy group-hover:scale-105 transition-all shadow-md">
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                {/* Button Text */}
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-sm sm:text-base text-white uppercase tracking-wider group-hover:text-gold transition-colors">
                    Invite Jaufar for Your Event
                  </span>
                  <span className="text-xs text-gold/90 font-medium">
                    Keynote Speaking & Training →
                  </span>
                </div>
              </Link>

              {/* Secondary Clean Action */}
              <Link
                href="#expertise"
                className="sm:ml-3 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-button text-xs font-semibold uppercase tracking-wider border border-white/20 text-slate-300 hover:text-white hover:bg-white/5 active:scale-[0.98] transition-all"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT SECTION — SIMPLE & ELEGANT WITH TRANSPARENT CUTOUT PHOTO
          (Inspired by Riyas Hakkim Reference with Cutout & "Know More" CTA)
          ========================================================================= */}
      <section id="about" className="py-20 sm:py-28 bg-gradient-to-b from-[#070F1E] via-[#0B1A33] to-[#070F1E] border-y border-white/5 relative overflow-hidden">
        {/* Subtle Silk Glow Accent */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Photo: Cutout of Jaufar Waving with Microphone (5 cols) */}
            <div className="lg:col-span-5 flex justify-center items-end">
              <div className="relative w-full max-w-sm sm:max-w-md h-[420px] sm:h-[480px] flex items-end justify-center">
                <Image
                  src={siteConfig.images.cutout}
                  alt="PTM Jaufar Swadiq — Human Excellence Strategist"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
                  priority
                />
              </div>
            </div>

            {/* Right Narrative: Simple About Text + Gold Underline + "Know More" Button (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-5">
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  About PTM Jaufar Swadiq
                </h2>
                {/* Gold Underline Bar */}
                <div className="w-16 h-[3px] bg-gold mt-3.5 rounded-full" />
              </div>

              <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal pt-2">
                <p>
                  PTM Jaufar Swadiq doesn't just train; he catalyzes human transformation.
                  With a deep focus on leadership development, emotional intelligence, and
                  human excellence, his programs are purposefully designed to empower people
                  to discover their strengths, overcome limitations, and lead with clarity,
                  confidence, and compassion.
                </p>
                <p className="text-slate-400 text-sm sm:text-base">
                  From executive boardrooms to vibrant university auditoriums, his work
                  turns self-awareness into purposeful action, potential into performance,
                  and leadership into lasting influence.
                </p>
              </div>

              <div className="pt-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-button text-xs font-bold uppercase tracking-wider btn-gold-gradient shadow-lg"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHAT YOU DO — INTERACTIVE SLIDER WITH 3 IMAGES
          ========================================================================= */}
      <section id="what-i-do" className="py-20 sm:py-28 bg-gradient-to-b from-[#070F1E] via-[#0F2242] to-[#070F1E] relative overflow-hidden">
        {/* Subtle Ambient Silk Navy Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-900/20 via-[#15315C]/25 to-blue-900/20 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block mb-2">
              WHAT I DO
            </span>
            <div className="w-12 h-[2px] bg-gold mx-auto rounded-full" />
          </div>

          {/* Interactive 3-Slide Showcase */}
          <WhatYouDoSlider />
        </div>
      </section>

      {/* =========================================================================
          TOPICS / EXPERTISE — 3 CORE PILLARS
          ========================================================================= */}
      <section id="expertise" className="py-20 sm:py-28 bg-gradient-to-b from-[#070F1E] via-[#0A182E] to-[#060D1A] border-y border-white/5 relative">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block">
              AREAS OF EXPERTISE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Core Training Disciplines
            </h2>
            <p className="text-sm text-slate-400">
              Three interconnected pillars of leadership, emotional intelligence, and human development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {siteConfig.expertiseList.map((item, idx) => (
              <div
                key={item.id}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#10223D]/70 to-[#0A1628]/90 border border-white/10 hover:border-gold/40 transition-colors flex flex-col justify-between backdrop-blur-sm"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-dark border border-gold/25 flex items-center justify-center mb-6">
                    {pillarIcons[idx]}
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-6">
                    {item.title}
                  </h3>

                  <div className="space-y-3">
                    {item.topics.map((topic, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 mt-8">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold hover:text-gold-light"
                  >
                    <span>Request Workshop on this Topic</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHO YOU HELP — INTERACTIVE 3D COVERFLOW SLIDER (MATCHING PHOTO 2)
          ========================================================================= */}
      <section id="who-i-help" className="py-20 sm:py-28 bg-gradient-to-b from-[#060D1A] via-[#102547] to-[#070F1F] relative overflow-hidden">
        {/* Subtle Ambient Silk Navy Glow Behind Carousel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-gradient-to-r from-[#143260]/30 via-gold/5 to-[#143260]/30 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block mb-2">
            {siteConfig.whoYouHelp.badge}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {siteConfig.whoYouHelp.title}
          </h2>
          <div className="w-16 h-[3px] bg-gold mx-auto mt-3.5 mb-3.5 rounded-full" />
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
            {siteConfig.whoYouHelp.subtitle}
          </p>
        </div>

        {/* 3D Coverflow Carousel with 5 Cards & Centered Controls (← 1/5 →) */}
        <WhoYouHelpCoverflow />
      </section>

      {/* =========================================================================
          CALL TO ACTION, SOCIAL CHANNELS & INQUIRY FORM
          ========================================================================= */}
      <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-[#070F1F] via-[#0C1B33] to-[#050A14] border-t border-gold/15 relative overflow-hidden">
        {/* Soft Ambient Depth Glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info & Social Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block">
                CALL TO ACTION
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                {siteConfig.callToAction.title}
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                {siteConfig.callToAction.paragraph}
              </p>

              <div className="p-5 rounded-xl bg-navy-light/50 border border-gold/25 text-gold font-heading font-medium text-base">
                “{siteConfig.callToAction.motto}”
              </div>

              <p className="text-sm text-slate-300 font-medium pt-1">
                {siteConfig.callToAction.invitation}
              </p>

              {/* Social Channels Row (Instagram, Facebook, LinkedIn, YouTube) */}
              <div className="pt-2 border-t border-white/10">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-3">
                  Connect on Social Media:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={siteConfig.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-navy-light border border-white/15 flex items-center justify-center text-slate-200 hover:text-navy hover:bg-gold hover:border-gold transition-all shadow-sm"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-navy-light border border-white/15 flex items-center justify-center text-slate-200 hover:text-navy hover:bg-gold hover:border-gold transition-all shadow-sm"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-navy-light border border-white/15 flex items-center justify-center text-slate-200 hover:text-navy hover:bg-gold hover:border-gold transition-all shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-navy-light border border-white/15 flex items-center justify-center text-slate-200 hover:text-navy hover:bg-gold hover:border-gold transition-all shadow-sm"
                    aria-label="YouTube"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400">
                Direct executive inquiry:{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gold underline hover:text-gold-light"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            {/* Right Clean Form (7 cols) */}
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
