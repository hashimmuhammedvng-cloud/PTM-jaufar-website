import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  siteConfig,
  expertiseAreas,
  audienceCategories,
  programsList,
  transformationStages,
  shifts,
  testimonialsList,
  eventsList,
  articlesList,
} from "@/data/siteData";
import ImpactCounters from "@/components/ImpactCounters";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import InquiryForm from "@/components/InquiryForm";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Users,
  Compass,
  CheckCircle2,
  Calendar,
  Quote,
  Clock,
  Layers,
} from "lucide-react";

export default function HomePage() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-7 h-7 text-gold stroke-[1.8]" />,
    HeartHandshake: <HeartHandshake className="w-7 h-7 text-gold stroke-[1.8]" />,
    Sparkles: <Sparkles className="w-7 h-7 text-gold stroke-[1.8]" />,
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* =========================================================================
          SECTION 1: HERO
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 bg-navy text-white overflow-hidden">
        {/* Subtle Background Radial Aura */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-navy-light/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Brand Identity, Headlines & CTAs (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/25">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  {siteConfig.title}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-normal tracking-tight leading-[1.12]">
                Unlock <span className="text-gold">Human Potential.</span>
                <br />
                Inspire Leadership.
                <br />
                <span className="text-gold-light italic">Transform Lives.</span>
              </h1>

              {/* Supporting Statement */}
              <p className="text-lg sm:text-xl text-slate-200/90 max-w-xl font-normal leading-relaxed pt-1">
                {siteConfig.heroSummary}
              </p>

              {/* Secondary Tagline Pill */}
              <div className="text-sm font-medium tracking-wide text-gold/90 border-l-2 border-gold pl-3 py-0.5">
                “{siteConfig.secondaryTagline}”
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-button text-xs font-bold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light active:scale-[0.98] transition-all duration-200 shadow-lg shadow-gold/20"
                >
                  <span>Explore My Programs</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>

                <Link
                  href="/contact#inquiry"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-button text-xs font-semibold uppercase tracking-wider border border-gold/40 text-white hover:bg-white/5 active:scale-[0.98] transition-all duration-200"
                >
                  <span>Invite Me to Speak or Train</span>
                  <ArrowUpRight className="w-4 h-4 text-gold stroke-[2]" />
                </Link>
              </div>

              {/* Verified Expertise Tags */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  <span>Executive Leadership</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  <span>Emotional Intelligence</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  <span>Human Transformation</span>
                </span>
              </div>
            </div>

            {/* Right Column: High-Res Real Portrait of Jaufar (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-none">
                {/* Decorative Frame */}
                <div className="absolute -inset-3 rounded-2xl border border-gold/30 -rotate-1 hidden sm:block pointer-events-none" />
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-gold/20 via-transparent to-gold/10 blur-sm pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden border border-gold/30 bg-navy-card shadow-2xl aspect-[4/5] sm:aspect-[3/4]">
                  <Image
                    src={siteConfig.images.hero}
                    alt="PTM Jaufar Swadiq — Human Excellence Strategist"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />

                  {/* Overlay Name & Philosophy Plate */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-navy-dark/85 backdrop-blur-md border border-gold/25">
                    <div className="font-heading text-lg sm:text-xl text-white">
                      PTM Jaufar Swadiq
                    </div>
                    <div className="text-[11px] uppercase font-bold tracking-widest text-gold mt-0.5">
                      Human Excellence Strategist
                    </div>
                    <p className="text-xs text-slate-300 italic mt-1.5 border-t border-white/10 pt-1.5">
                      “{siteConfig.corePhilosophy}”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: PROFESSIONAL IMPACT STATISTICS
          ========================================================================= */}
      <ImpactCounters />

      {/* =========================================================================
          SECTION 3: PHILOSOPHY
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-ivory text-charcoal relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Editorial Portrait / Session (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-charcoal/10 shadow-2xl aspect-[4/5] bg-slate-200">
                <Image
                  src={siteConfig.images.about}
                  alt="PTM Jaufar Swadiq during leadership training session"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover object-center"
                />
                <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-gold/15 rounded-full blur-2xl pointer-events-none" />
              </div>
            </div>

            {/* Right: The Philosophy Statement (7 cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-gold" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                  THE PHILOSOPHY
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight font-normal">
                “Excellence Begins Within.”
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-charcoal/85 leading-relaxed font-normal">
                <p>
                  I believe that every individual has the potential to grow,
                  lead, and create meaningful change. True excellence is not
                  merely about achieving external success; it is about developing
                  character, mastering emotions, building meaningful
                  relationships, and inspiring others to become their best
                  selves.
                </p>
                <p>
                  When people understand themselves, lead with empathy, and act
                  with purpose, they can transform not only their own lives but
                  also the people and communities around them.
                </p>
              </div>

              <div className="pt-3">
                <Link
                  href="/about#approach"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-button text-xs font-bold uppercase tracking-wider bg-navy text-white hover:bg-navy-light active:scale-[0.98] transition-all shadow-md"
                >
                  <span>Discover My Approach</span>
                  <ArrowRight className="w-4 h-4 text-gold stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: ABOUT PTM JAUFAR SWADIQ
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-navy text-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="THE PERSON BEHIND THE PURPOSE"
            title="Leadership Begins with Understanding People."
            highlightWord="Understanding People."
            description="Combining practical learning, human-centered development, and purposeful training to help people discover their strengths and lead with confidence."
            theme="dark"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Bio Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="text-white font-medium text-lg sm:text-xl border-l-2 border-gold pl-4 py-1">
                {siteConfig.aboutShort}
              </p>
              <p>{siteConfig.aboutExtended}</p>
              <p className="text-sm text-slate-400">
                Over the course of delivering hundreds of facilitated sessions,
                I have observed that organizations do not suffer from a lack of
                technical competence; they face challenges in emotional
                literacy, trust building, and self-leadership. My mission is to
                close that gap and nurture human excellence across generations.
              </p>

              {/* 3 Core Commitments */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-card bg-navy-light/40 border border-gold/15">
                  <div className="text-gold font-heading text-xl mb-1">01</div>
                  <h4 className="text-white text-sm font-semibold mb-1">
                    Authentic Empathy
                  </h4>
                  <p className="text-xs text-slate-400">
                    Listening to understand the unexpressed human condition.
                  </p>
                </div>

                <div className="p-4 rounded-card bg-navy-light/40 border border-gold/15">
                  <div className="text-gold font-heading text-xl mb-1">02</div>
                  <h4 className="text-white text-sm font-semibold mb-1">
                    Ethical Rigor
                  </h4>
                  <p className="text-xs text-slate-400">
                    Rooting every framework in uncompromised character and values.
                  </p>
                </div>

                <div className="p-4 rounded-card bg-navy-light/40 border border-gold/15">
                  <div className="text-gold font-heading text-xl mb-1">03</div>
                  <h4 className="text-white text-sm font-semibold mb-1">
                    Applied Action
                  </h4>
                  <p className="text-xs text-slate-400">
                    Moving immediately from theory into actionable daily habits.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-button text-xs font-bold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light transition-all"
                >
                  <span>Read Full Story & Credentials</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </div>
            </div>

            {/* Speaking in Action Photo (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-gold/25 shadow-2xl aspect-[4/5]">
                <Image
                  src={siteConfig.images.speaking1}
                  alt="PTM Jaufar Swadiq addressing an audience with conviction"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-gold/90 bg-navy-dark/90 p-3 rounded-lg border border-gold/20 backdrop-blur-sm">
                  “When people understand themselves, they transform the world
                  around them.”
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: EXPERTISE
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-ivory text-charcoal relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="AREAS OF EXPERTISE"
            title="Developing People. Strengthening Leaders. Creating Impact."
            highlightWord="Strengthening Leaders."
            description="Three interconnected pillars of human development designed to elevate individual consciousness and corporate performance."
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseAreas.map((area) => (
              <div
                key={area.id}
                className="group flex flex-col justify-between p-8 rounded-card bg-white border border-charcoal/10 hover:border-gold hover:shadow-2xl hover:shadow-navy/5 transition-all duration-300"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-14 h-14 rounded-xl bg-ivory border border-gold/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    {iconMap[area.icon]}
                  </div>

                  <span className="text-xs uppercase font-bold tracking-widest text-gold-dark block mb-1">
                    {area.subtitle}
                  </span>

                  <h3 className="font-heading text-2xl text-navy mb-4 font-normal group-hover:text-gold-dark transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-sm text-charcoal/80 leading-relaxed mb-6">
                    {area.description}
                  </p>

                  {/* Topics List */}
                  <div className="space-y-2.5 pt-4 border-t border-charcoal/10 mb-6">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-muted block mb-2">
                      Core Disciplines:
                    </span>
                    {area.topics.map((t, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-charcoal/85">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-dark shrink-0 mt-1.5" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-charcoal/5">
                  <Link
                    href={`/expertise#${area.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy hover:text-gold-dark transition-colors"
                  >
                    <span>Explore Pillar In-Depth</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WHO HE HELPS
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-navy text-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="TARGET AUDIENCE & ENGAGEMENT"
            title="Empowering People Who Aspire to Grow."
            highlightWord="Aspire to Grow."
            description="Tailored interventions addressing the specific psychological, relational, and leadership realities of different growth stages."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audienceCategories.map((item) => (
              <div
                key={item.number}
                className="p-7 rounded-card bg-navy-light/40 border border-gold/15 hover:border-gold/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="font-heading text-2xl text-gold mb-2 font-normal">
                    {item.number}
                  </div>
                  <h3 className="text-xl font-heading text-white mb-4">
                    {item.title}
                  </h3>

                  <div className="space-y-3 text-xs leading-relaxed">
                    <div>
                      <span className="font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Core Challenge:
                      </span>
                      <p className="text-slate-300">{item.challenge}</p>
                    </div>

                    <div className="pt-2 border-t border-white/5">
                      <span className="font-bold uppercase tracking-wider text-gold block mb-1">
                        Development Pathway:
                      </span>
                      <p className="text-slate-200">{item.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    href={`/contact?audience=${encodeURIComponent(item.title)}#inquiry`}
                    className="text-xs font-semibold text-gold hover:text-gold-light inline-flex items-center gap-1"
                  >
                    <span>Request Tailored Session</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Custom Audience Card */}
            <div className="p-7 rounded-card bg-gradient-to-br from-navy-card to-navy-light/60 border border-gold/30 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading text-white mb-2">
                  Custom Cohorts & Communities
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Have a specific organizational cohort, educational retreat, or
                  community foundation with unique development goals?
                </p>
                <p className="text-xs text-slate-400">
                  Programs can be custom-architected to align with your culture,
                  timeframe, and strategic outcomes.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  href="/contact#inquiry"
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-button text-xs font-bold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light transition-all"
                >
                  Consult on Custom Curriculum
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: PROGRAMS AND SERVICES
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-navy-dark text-white relative border-y border-gold/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1.5px] bg-gold" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  LEARNING EXPERIENCES
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-normal">
                Growth That Moves Beyond Theory.
              </h2>
              <p className="mt-3 text-slate-300 max-w-xl text-base">
                Signature workshops, executive masterclasses, and intensive retreats
                facilitated by PTM Jaufar Swadiq.
              </p>
            </div>

            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-button text-xs font-bold uppercase tracking-wider border border-gold text-gold hover:bg-gold hover:text-navy transition-all self-start md:self-auto shrink-0"
            >
              <span>View All Programs</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programsList.slice(0, 6).map((prog) => (
              <ProgramCard key={prog.id} program={prog} theme="navy" />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: TRANSFORMATION (4-Stage Framework & Shifts)
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-ivory text-charcoal relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FROM POTENTIAL TO PERFORMANCE"
            title="Turn Self-Awareness into Meaningful Action."
            highlightWord="Meaningful Action."
            description="The four-stage transformative learning methodology developed to ensure lasting behavioral elevation."
            theme="light"
          />

          {/* 4-Stage Horizontal / Grid Process */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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

                <div className="pt-3 border-t border-charcoal/10 text-xs text-navy font-medium italic">
                  Outcome: {stage.outcomes}
                </div>
              </div>
            ))}
          </div>

          {/* Behavioral Shifts Comparison Table */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-charcoal/10 shadow-lg max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                THE SHIFT IN PERSPECTIVE
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl text-navy mt-1">
                From Reactive Habits to Conscious Leadership
              </h3>
            </div>

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

      {/* =========================================================================
          SECTION 9: CLIENTS AND ORGANIZATIONS
          ========================================================================= */}
      <section className="py-20 bg-navy text-white border-y border-white/5">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block mb-2">
            TRUSTED COLLABORATION
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl text-white font-normal mb-10">
            Supporting Growth Across People and Organizations
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-card bg-navy-light/30 border border-white/10 hover:border-gold/30 transition-colors">
              <div className="font-heading text-lg text-white mb-1">
                Corporate Enterprises
              </div>
              <p className="text-xs text-slate-400">
                Executive leadership, emotional agility, team culture alignment
              </p>
            </div>

            <div className="p-6 rounded-card bg-navy-light/30 border border-white/10 hover:border-gold/30 transition-colors">
              <div className="font-heading text-lg text-white mb-1">
                Universities & Colleges
              </div>
              <p className="text-xs text-slate-400">
                Youth potential summits, student governance, campus leadership
              </p>
            </div>

            <div className="p-6 rounded-card bg-navy-light/30 border border-white/10 hover:border-gold/30 transition-colors">
              <div className="font-heading text-lg text-white mb-1">
                Educational Institutions
              </div>
              <p className="text-xs text-slate-400">
                Faculty development, empathetic classroom leadership, mentoring
              </p>
            </div>

            <div className="p-6 rounded-card bg-navy-light/30 border border-white/10 hover:border-gold/30 transition-colors">
              <div className="font-heading text-lg text-white mb-1">
                Conferences & Forums
              </div>
              <p className="text-xs text-slate-400">
                Keynote addresses, professional conclaves, business summits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: TESTIMONIALS
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-navy-dark text-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="WORDS THAT MATTER"
            title="The Impact of Meaningful Learning."
            highlightWord="Meaningful Learning."
            description="Reflections from executives, educators, and institutional participants who experienced the human excellence journey."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsList.map((test) => (
              <div
                key={test.id}
                className="p-8 rounded-card bg-navy-light/40 border border-gold/20 flex flex-col justify-between hover:border-gold/40 transition-all duration-300"
              >
                <div>
                  <Quote className="w-8 h-8 text-gold/40 mb-4 stroke-[1.5]" />
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
                    {test.organization} •{" "}
                    <span className="italic">{test.program}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: EVENTS AND SPEAKING
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-ivory text-charcoal relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1.5px] bg-gold-dark" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                  ON STAGE. IN THE ROOM. IN ACTION.
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-navy font-normal">
                Creating Experiences That Inspire Growth.
              </h2>
              <p className="mt-3 text-charcoal/80 max-w-xl text-base">
                Keynote presentations, executive intensives, and campus leadership summits.
              </p>
            </div>

            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-button text-xs font-bold uppercase tracking-wider bg-navy text-white hover:bg-navy-light transition-all self-start md:self-auto shrink-0"
            >
              <span>Explore Event Archive</span>
              <ArrowRight className="w-4 h-4 text-gold stroke-[2.5]" />
            </Link>
          </div>

          {/* Event Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventsList.map((event) => (
              <div
                key={event.id}
                className="group flex flex-col rounded-card overflow-hidden bg-white border border-charcoal/10 hover:border-gold hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-navy/80 text-gold backdrop-blur-sm">
                    {event.location}
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[11px] font-semibold text-gold-dark block mb-1">
                      {event.role}
                    </span>
                    <h3 className="font-heading text-lg text-navy mb-2 line-clamp-1">
                      {event.name}
                    </h3>
                    <p className="text-xs text-charcoal/80 line-clamp-2 mb-3">
                      {event.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-charcoal/5 text-[11px] text-muted flex items-center justify-between">
                    <span>{event.host}</span>
                    <span className="font-medium text-navy">{event.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact#inquiry"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-button text-xs font-bold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light active:scale-[0.98] transition-all shadow-md shadow-gold/20"
            >
              <span>Invite Jaufar to Your Event</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: INSIGHTS AND RESOURCES
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-navy text-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1.5px] bg-gold" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  IDEAS FOR GROWTH
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-normal">
                Think Deeper. Lead Better. Grow Intentionally.
              </h2>
              <p className="mt-3 text-slate-300 max-w-xl text-base">
                Reflections on emotional maturity, ethical leadership, and personal excellence.
              </p>
            </div>

            <Link
              href="/insights"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-button text-xs font-bold uppercase tracking-wider border border-gold text-gold hover:bg-gold hover:text-navy transition-all self-start md:self-auto shrink-0"
            >
              <span>Read All Insights</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

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

                  <h3 className="font-heading text-xl text-white mb-3 group-hover:text-gold transition-colors leading-snug">
                    {art.title}
                  </h3>

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

      {/* =========================================================================
          SECTION 13: FINAL CALL TO ACTION & INQUIRY FORM
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-navy-dark text-white relative border-t border-gold/15">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Message & Invitation (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-6 h-[1.5px] bg-gold" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  CONNECT & COLLABORATE
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
                Are You Ready to Unlock <span className="text-gold">Human Excellence?</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Whether you want to develop confident leaders, build emotionally
                intelligent teams, or inspire individuals to reach their full
                potential, let's create a meaningful journey of growth and
                transformation together.
              </p>

              <div className="p-6 rounded-card bg-navy-light/40 border border-gold/20 space-y-3 text-xs sm:text-sm">
                <div className="font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span>Immediate Booking Availability:</span>
                </div>
                <ul className="space-y-1.5 text-slate-300 pl-4 list-disc">
                  <li>Executive Leadership Retreats & Cohorts</li>
                  <li>Campus & Youth Potential Keynotes</li>
                  <li>Institutional Emotional Intelligence Audits</li>
                </ul>
              </div>

              <div className="pt-2">
                <p className="text-xs text-slate-400">
                  Prefer direct correspondence? Email our executive office at{" "}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-gold underline hover:text-gold-light"
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Right: The Full Interactive Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

