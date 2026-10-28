import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import { ArrowUpRight, Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-slate-300 border-t border-gold/15 pt-16 pb-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="flex flex-col">
              <span className="font-heading text-2xl sm:text-3xl text-white tracking-wide">
                {siteConfig.name}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mt-1">
                {siteConfig.title}
              </span>
            </div>

            <p className="text-sm text-slate-300/80 leading-relaxed max-w-md pt-2">
              Empowering individuals, leaders, and organizations to achieve human
              excellence through transformative leadership training, emotional
              intelligence, and purposeful self-development.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block mb-1">
                Core Philosophy
              </span>
              <p className="font-heading text-lg text-gold-light italic">
                “{siteConfig.corePhilosophy}”
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                >
                  <span>About Jaufar</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/expertise"
                  className="text-slate-300 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Areas of Expertise</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-slate-300 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Programs & Services</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/impact"
                  className="text-slate-300 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Impact & Milestones</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-slate-300 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Events & Speaking</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-slate-300 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Insights & Articles</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Inquiries & Professional Contact (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-1">
              Connect & Engage
            </h4>

            <p className="text-sm text-slate-300/80 leading-relaxed">
              Available for keynote addresses, corporate leadership workshops,
              youth development bootcamps, and institutional consulting.
            </p>

            <div className="space-y-2 pt-1 text-sm">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-slate-200">
                  {siteConfig.contact.email}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {siteConfig.contact.location}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-button text-xs font-semibold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light transition-all"
              >
                <span>Request Speaking or Training</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-gold transition-colors duration-150"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link
              href="/contact"
              className="hover:text-gold transition-colors duration-150"
            >
              Contact Support
            </Link>
            <span className="text-white/20">•</span>
            <span className="text-slate-400">
              Personal Brand Platform
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

