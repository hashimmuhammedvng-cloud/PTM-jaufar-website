import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteData";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon, YoutubeIcon } from "@/components/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-gradient-to-b from-[#070F1E] via-[#0A1628] to-[#040810] text-slate-300 border-t border-gold/20 pt-16 pb-12 font-body shadow-2xl">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Philosophy */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-0.5 border border-gold/40 shadow-sm shrink-0 flex items-center justify-center">
                <Image
                  src="/images/logo.jpg"
                  alt="PTM Jaufar Swadiq Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-semibold text-xl text-white tracking-tight block">
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

            {/* Social Media Channels (Instagram, Facebook, LinkedIn, YouTube) */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block mb-2.5">
                Official Channels
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-navy-light border border-white/15 flex items-center justify-center text-slate-300 hover:text-gold hover:border-gold transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-navy-light border border-white/15 flex items-center justify-center text-slate-300 hover:text-gold hover:border-gold transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-navy-light border border-white/15 flex items-center justify-center text-slate-300 hover:text-gold hover:border-gold transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-navy-light border border-white/15 flex items-center justify-center text-slate-300 hover:text-gold hover:border-gold transition-colors"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-wider text-gold font-semibold mb-4 font-heading">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  About Jaufar
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
                <Link href="/#expertise" className="hover:text-gold transition-colors">
                  Areas of Expertise
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-gold transition-colors">
                  Courses & Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Inquiries */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-gold font-semibold mb-4 font-heading">
              Connect & Engage
            </h4>

            <p className="text-sm text-slate-400 leading-relaxed">
              Available for keynote addresses, leadership workshops, youth development,
              and customized organizational programs.
            </p>

            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-button text-xs font-semibold uppercase tracking-wider btn-gold-gradient shadow-md"
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
