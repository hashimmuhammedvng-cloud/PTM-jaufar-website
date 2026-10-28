import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { eventsList, siteConfig } from "@/data/siteData";
import { Calendar, MapPin, ArrowUpRight, Mic2, Users, Award } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Speaking — On Stage. In the Room. In Action.",
  description:
    "Explore keynote addresses, corporate leadership workshops, and youth summits delivered by PTM Jaufar Swadiq.",
};

export default function EventsPage() {
  return (
    <div className="pt-28 pb-20 bg-navy text-white">
      {/* Header */}
      <section className="py-16 sm:py-24 border-b border-gold/15 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/25 mb-4">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              ON STAGE. IN THE ROOM. IN ACTION.
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight max-w-4xl mx-auto">
            Creating Experiences That <span className="text-gold">Inspire Growth.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Delivering keynotes, facilitating corporate intensives, and inspiring youth
            audiences with emotional depth and strategic vision.
          </p>

          <div className="pt-8">
            <Link
              href="/contact#inquiry"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-button text-xs font-bold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light transition-all shadow-md shadow-gold/20"
            >
              <span>Invite Jaufar to Speak or Keynote</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Speaking Topics Showcase */}
      <section className="py-16 bg-navy-light/40 border-b border-white/5">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block mb-2">
              KEYNOTE REPERTOIRE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl text-white">
              Signature Keynote Themes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-card bg-navy-card border border-gold/20">
              <Mic2 className="w-6 h-6 text-gold mb-3" />
              <h3 className="font-heading text-xl text-white mb-2">
                Excellence Begins Within
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                A moving, introspective exploration of self-mastery, personal character,
                and how conscious self-leadership sparks collective greatness.
              </p>
            </div>

            <div className="p-6 rounded-card bg-navy-card border border-gold/20">
              <Users className="w-6 h-6 text-gold mb-3" />
              <h3 className="font-heading text-xl text-white mb-2">
                The Emotionally Intelligent Leader
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Unpacking why emotional agility, vulnerability, and empathetic radar
                separate ordinary managers from enduring organizational icons.
              </p>
            </div>

            <div className="p-6 rounded-card bg-navy-card border border-gold/20">
              <Award className="w-6 h-6 text-gold mb-3" />
              <h3 className="font-heading text-xl text-white mb-2">
                Catalyzing Next-Gen Potential
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Empowering youth and emerging leaders to conquer imposter syndrome,
                anchor their dreams in core values, and lead with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Gallery */}
      <section className="py-20 sm:py-28 bg-navy-dark">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="EVENT ARCHIVE"
            title="Recent Engagements & Facilitations"
            highlightWord="Engagements"
            description="Documented speaking sessions, corporate conclaves, and university summits."
            theme="dark"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsList.map((event) => (
              <div
                key={event.id}
                className="group flex flex-col rounded-card overflow-hidden bg-navy-light/40 border border-gold/15 hover:border-gold transition-all duration-300"
              >
                <div className="relative aspect-[16/11] bg-slate-800 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-navy/85 text-gold border border-gold/20 backdrop-blur-sm">
                    {event.location}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-xs font-semibold text-gold block mb-1">
                      {event.role}
                    </span>
                    <h3 className="font-heading text-xl text-white mb-2 group-hover:text-gold transition-colors">
                      {event.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {event.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
                    <span>Host: {event.host}</span>
                    <span className="font-medium text-slate-300">{event.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Photo strip of additional genuine training photos */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <h3 className="text-center font-heading text-2xl text-white mb-8">
              In The Room: Authentic Moments of Engagement
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10">
                <Image
                  src={siteConfig.images.portraitAlt1}
                  alt="Training interaction"
                  fill
                  sizes="250px"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10">
                <Image
                  src={siteConfig.images.portraitAlt2}
                  alt="Audience dialogue"
                  fill
                  sizes="250px"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10">
                <Image
                  src={siteConfig.images.sessionYouth}
                  alt="Youth facilitation"
                  fill
                  sizes="250px"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10">
                <Image
                  src={siteConfig.images.sessionCorporate}
                  alt="Corporate workshop"
                  fill
                  sizes="250px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker Invitation CTA */}
      <section className="py-20 bg-navy text-white text-center border-t border-gold/15">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl sm:text-4xl text-white mb-4">
            Host PTM Jaufar Swadiq at Your Next Event
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            Available for national and international conferences, corporate annual
            meets, academic symposiums, and institutional retreats.
          </p>
          <Link
            href="/contact#inquiry"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-button text-xs font-bold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light transition-all shadow-lg shadow-gold/20"
          >
            <span>Request Speaker Availability & Rider</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </section>
    </div>
  );
}

