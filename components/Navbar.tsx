"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteData";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Philosophy", href: "/#philosophy" },
  { label: "About", href: "/#about" },
  { label: "What I Do", href: "/#what-i-do" },
  { label: "Who I Help", href: "/#who-i-help" },
  { label: "Transformation", href: "/#transformation" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy/95 backdrop-blur-md py-4 shadow-xl border-b border-gold/15"
            : "bg-navy/80 backdrop-blur-sm py-5 border-b border-white/5"
        }`}
      >
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Wordmark */}
            <Link
              href="/"
              className="flex flex-col group focus:outline-none"
              aria-label="PTM Jaufar Swadiq Home"
            >
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-semibold text-lg sm:text-xl text-white tracking-tight group-hover:text-gold transition-colors">
                  {siteConfig.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              </div>
              <span className="text-[10px] font-medium tracking-[0.16em] uppercase text-gold/90 -mt-0.5">
                {siteConfig.title}
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-gold transition-colors rounded-md"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Primary CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-button text-xs font-semibold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light active:scale-[0.98] transition-all shadow-sm shadow-gold/20"
              >
                <span>Invite to Speak or Train</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-200 hover:text-white focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gold" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-200" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-navy-dark border-l border-gold/20 p-6 pt-24 flex flex-col justify-between transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-2">
            <div className="pb-4 mb-2 border-b border-white/10">
              <div className="font-heading font-semibold text-white">
                {siteConfig.name}
              </div>
              <div className="text-[10px] uppercase tracking-wider text-gold">
                {siteConfig.title}
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-slate-200 hover:text-gold transition-colors rounded-md hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-button text-xs font-semibold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light transition-all"
            >
              <span>Invite to Speak or Train</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
