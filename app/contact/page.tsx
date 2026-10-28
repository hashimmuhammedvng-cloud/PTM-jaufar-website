import React from "react";
import SectionHeading from "@/components/SectionHeading";
import InquiryForm from "@/components/InquiryForm";
import { siteConfig } from "@/data/siteData";
import { Mail, MapPin, Globe, Clock, CheckCircle2, MessageSquare } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Booking — PTM Jaufar Swadiq",
  description:
    "Invite PTM Jaufar Swadiq to speak, conduct corporate leadership training, or deliver emotional intelligence masterclasses for your organization.",
};

const faqs = [
  {
    q: "How far in advance should we request a booking?",
    a: "For corporate workshops and keynote addresses, we recommend submitting requests 4 to 8 weeks in advance to ensure availability and thorough pre-engagement curriculum customization.",
  },
  {
    q: "Can programs be customized for our specific industry?",
    a: "Yes. Every engagement includes a preliminary discovery call to assess your team's challenges, culture, and key objectives, ensuring all exercises and debriefs resonate directly with your sector.",
  },
  {
    q: "Does Jaufar travel for international engagements?",
    a: "Yes. Jaufar is available for travel across India, the GCC region, and internationally for conferences, retreats, and institutional masterclasses.",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 bg-navy text-white">
      {/* Header */}
      <section className="py-16 sm:py-24 border-b border-gold/15 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/25 mb-4">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              CONNECT & COLLABORATE
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight max-w-4xl mx-auto">
            Invite Me to <span className="text-gold">Speak or Train.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Begin the conversation to bring transformative leadership, emotional
            intelligence, and human excellence to your organization.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="py-20 sm:py-28 bg-navy-dark">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Info & FAQs (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-2xl bg-navy-light/40 border border-gold/20 space-y-6">
                <h2 className="font-heading text-2xl text-white">
                  Executive Desk Channels
                </h2>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-muted block">Direct Email:</span>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-white hover:text-gold transition-colors font-medium"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-muted block">Base Location:</span>
                      <span className="text-slate-200">
                        {siteConfig.contact.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-muted block">Availability:</span>
                      <span className="text-slate-200">
                        In-Person, Hybrid & International Keynotes
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-slate-400">
                  <span className="text-gold font-bold">Confidentiality Assured:</span>{" "}
                  All inquiries and institutional diagnostic discussions remain
                  strictly confidential.
                </div>
              </div>

              {/* FAQs */}
              <div className="space-y-4">
                <h3 className="font-heading text-xl text-white">
                  Frequently Asked Questions
                </h3>
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-navy-light/30 border border-white/5 space-y-2"
                  >
                    <h4 className="text-sm font-semibold text-gold">
                      {faq.q}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form (7 cols) */}
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

