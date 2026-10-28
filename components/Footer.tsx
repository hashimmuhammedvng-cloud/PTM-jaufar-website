import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteData";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-slate-300 border-t border-white/10 pt-16 pb-12 font-body">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Philosophy */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white p-0.5 border border-gold/40 shadow-sm shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="PTM Jaufar Swadiq Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-white tracking-tight block">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gold block">
                  {siteConfig.title}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-1">
              Empowering individuals, leaders, and organizations to achieve excellence
              through leadership development, emotional intelligence, and transformative training.
            </p>

            <div className="pt-1">
              <span className="text-xs text-gold italic font-medium">
                “{siteConfig.corePhilosophy}”
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-wider text-gold font-bold mb-4 font-heading">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/#philosophy" className="hover:text-gold transition-colors">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-gold transition-colors">
                  Meet Jaufar
                </Link>
              </li>
              <li>
                <Link href="/#what-i-do" className="hover:text-gold transition-colors">
                  What I Do
                </Link>
              </li>
              <li>
                <Link href="/#who-i-help" className="hover:text-gold transition-colors">
                  Who I Help
                </Link>
              </li>
              <li>
                <Link href="/#transformation" className="hover:text-gold transition-colors">
                  Transformation
                </Link>
              </li>
              <li>
                <Link href="/#expertise" className="hover:text-gold transition-colors">
                  Areas of Expertise
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Inquiries */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-gold font-bold mb-4 font-heading">
              Connect & Engage
            </h4>

            <p className="text-sm text-slate-400 leading-relaxed">
              Available for keynote addresses, leadership workshops, youth development,
              and customized organizational programs.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-slate-200 hover:text-gold transition-colors text-xs sm:text-sm"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span className="text-slate-400 text-xs sm:text-sm">
                  {siteConfig.contact.location}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-button text-xs font-semibold uppercase tracking-wider btn-gold-gradient"
              >
                <span>Invite to Speak or Train</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <span className="text-gold font-medium">
              Human Excellence Platform
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
