import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import ImpactCounters from "@/components/ImpactCounters";
import InquiryForm from "@/components/InquiryForm";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Users,
} from "lucide-react";

export default function HomePage() {
  const pillarIcons = [
    <ShieldCheck key="1" className="w-6 h-6 text-gold stroke-[2]" />,
    <HeartHandshake key="2" className="w-6 h-6 text-gold stroke-[2]" />,
    <Sparkles key="3" className="w-6 h-6 text-gold stroke-[2]" />,
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-navy text-slate-200 font-body">
      {/* =========================================================================
          HERO SECTION — BRIGHT VISIBLE STAGE PHOTO & MINIMALIST LEAN CONTENT
          ========================================================================= */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-navy">
        {/* Stage Photo on the Right — Crisp, Bright & Fully Visible */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] xl:w-[55%] h-full z-0 pointer-events-none">
          <Image
            src={siteConfig.images.stageHero}
            alt="PTM Jaufar Swadiq on stage speaking at the podium"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-[78%_center] lg:object-right brightness-105 contrast-[1.02]"
          />

          {/* Seamless Soft Left Feather Only — Does NOT Darken the Man */}
          <div className="absolute inset-y-0 left-0 w-1/3 lg:w-1/2 bg-gradient-to-r from-navy via-navy/60 to-transparent hidden sm:block" />

          {/* Light Mobile Contrast Mask */}
          <div className="absolute inset-0 bg-navy/65 sm:hidden" />

          {/* Subtle Bottom Transition */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy to-transparent" />
        </div>

        {/* Hero Foreground Content — Lean, Focused & Clean */}
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-xl lg:max-w-lg xl:max-w-xl flex flex-col items-start space-y-6">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-dark/90 border border-gold/30 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
                {siteConfig.title}
              </span>
            </div>

            {/* Impactful Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.12] uppercase">
              Unlock <span className="text-gold">Human Potential.</span>
              <br />
              Inspire Leadership.
              <br />
              <span className="text-slate-100">Transform Lives.</span>
            </h1>

            {/* Lean Single Supporting Sentence */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {siteConfig.heroParagraphs[0]}
            </p>

            {/* Circular CTA Button + Explore Link */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3.5 text-left focus:outline-none"
              >
                {/* Circular Accent Badge with Arrow */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-navy-dark/90 border border-gold/40 flex items-center justify-center p-1 shadow-xl group-hover:border-gold transition-all duration-300 shrink-0">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gold flex items-center justify-center text-navy group-hover:bg-gold-light group-hover:scale-105 transition-all shadow-md">
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
          MINIMALIST PLAIN NUMBERS (No Box)
          ========================================================================= */}
      <ImpactCounters />

      {/* =========================================================================
          1. POWERFUL HOOK
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-navy border-t border-white/5 relative">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block">
              1. THE CORE CONVICTION
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight uppercase">
              {siteConfig.powerfulHook.headline}
            </h2>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal pt-2">
              {siteConfig.powerfulHook.body}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. YOUR PHILOSOPHY
          ========================================================================= */}
      <section id="philosophy" className="py-20 sm:py-28 bg-navy-dark border-y border-white/5 relative">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Philosophy Text (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block">
                2. YOUR PHILOSOPHY
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                “{siteConfig.philosophy.title}”
              </h2>
              <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>{siteConfig.philosophy.paragraphs[0]}</p>
                <p className="text-slate-200 font-medium">
                  {siteConfig.philosophy.paragraphs[1]}
                </p>
              </div>
            </div>

            {/* Right Supporting Photo (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-gold/20 shadow-xl aspect-[4/5] bg-navy-light">
                <Image
                  src={siteConfig.images.about}
                  alt="PTM Jaufar Swadiq in session"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHO YOU ARE
          ========================================================================= */}
      <section id="about" className="py-20 sm:py-28 bg-navy relative">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Photo (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-white/10 shadow-xl aspect-[4/5] bg-navy-light">
                <Image
                  src={siteConfig.images.action1}
                  alt="Meet PTM Jaufar Swadiq"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Narrative (7 cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block">
                3. WHO YOU ARE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {siteConfig.whoYouAre.title}
              </h2>
              <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>{siteConfig.whoYouAre.paragraphs[0]}</p>
                <p>{siteConfig.whoYouAre.paragraphs[1]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHAT YOU DO
          ========================================================================= */}
      <section id="what-i-do" className="py-20 sm:py-28 bg-navy-dark border-y border-white/5 relative">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block">
              4. WHAT YOU DO
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {siteConfig.whatYouDo.title}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed text-left sm:text-center">
              <p>{siteConfig.whatYouDo.paragraphs[0]}</p>
              <p className="text-gold font-medium">
                {siteConfig.whatYouDo.paragraphs[1]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. WHO YOU HELP
          ========================================================================= */}
      <section id="who-i-help" className="py-20 sm:py-28 bg-navy relative">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block">
              5. WHO YOU HELP
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {siteConfig.whoYouHelp.title}
            </h2>
            <p className="text-sm text-slate-400">
              Guiding people across varied stages of life, leadership, and responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteConfig.whoYouHelp.audiences.map((aud, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-navy-light/40 border border-white/10 hover:border-gold/40 transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center text-gold font-mono text-xs font-bold mb-4">
                    0{index + 1}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">
                    {aud.target}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {aud.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Custom Cohort Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-light to-navy-dark border border-gold/30 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center text-gold mb-4">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  Custom Cohorts
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Tailored development modules designed specifically for your organization's
                  unique strategic vision and goals.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="#contact"
                  className="text-xs font-semibold text-gold hover:text-gold-light inline-flex items-center gap-1"
                >
                  <span>Inquire for Custom Engagement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. TRANSFORMATION
          ========================================================================= */}
      <section id="transformation" className="py-20 sm:py-28 bg-navy-dark border-y border-white/5 relative">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block">
              6. TRANSFORMATION
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {siteConfig.transformation.title}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed text-left sm:text-center">
              <p>{siteConfig.transformation.paragraphs[0]}</p>
              <p>{siteConfig.transformation.paragraphs[1]}</p>
            </div>

            {/* Closing Motto Highlight */}
            <div className="mt-8 p-6 rounded-2xl bg-navy-light/60 border border-gold/30 text-white font-heading font-semibold text-lg sm:text-xl">
              “{siteConfig.transformation.closingMotto}”
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. TOPICS / EXPERTISE
          ========================================================================= */}
      <section id="expertise" className="py-20 sm:py-28 bg-navy relative">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block">
              7. TOPICS / EXPERTISE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Areas of Expertise
            </h2>
            <p className="text-sm text-slate-400">
              Three interconnected pillars of leadership and human excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {siteConfig.expertiseList.map((item, idx) => (
              <div
                key={item.id}
                className="p-8 rounded-2xl bg-navy-light/40 border border-white/10 hover:border-gold/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy border border-gold/25 flex items-center justify-center mb-6">
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
          8. CALL TO ACTION & INQUIRY FORM
          ========================================================================= */}
      <section id="contact" className="py-20 sm:py-28 bg-navy-dark border-t border-gold/15 relative">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block">
                8. CALL TO ACTION
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

              <div className="pt-2 text-xs text-slate-400">
                Direct inquiry:{" "}
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
