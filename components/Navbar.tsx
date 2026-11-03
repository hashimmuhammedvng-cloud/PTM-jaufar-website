"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteData";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "What I Do", href: "/#what-i-do" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Who I Help", href: "/#who-i-help" },
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
            ? "bg-navy/95 backdrop-blur-md py-3 shadow-xl border-b border-gold/20"
            : "bg-navy/85 backdrop-blur-sm py-4 border-b border-white/10"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo & Wordmark (Using Client's logo.jpeg) */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none shrink-0"
              aria-label="PTM Jaufar Swadiq Home"
            >
              {/* Logo Emblem from Folder */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden bg-white p-0.5 border border-gold/40 group-hover:border-gold transition-all duration-300 shadow-md shrink-0 flex items-center justify-center">
                <Image
                  src="/images/logo.jpg"
                  alt="PTM Jaufar Swadiq Logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Title & Subtitle */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-bold text-base sm:text-lg text-white tracking-tight group-hover:text-gold transition-colors whitespace-nowrap">
                    {siteConfig.name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                </div>
                <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-gold/90 -mt-0.5 whitespace-nowrap">
                  {siteConfig.title}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links — Strictly Single-Line Aligned */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2.5 flex-nowrap"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="whitespace-nowrap px-2 xl:px-2.5 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-gold transition-colors rounded-md hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Primary CTA Button — Luminous White & Blue Gradient */}
            <div className="hidden lg:flex items-center shrink-0">
              <Link
                href="/#contact"
                className="whitespace-nowrap inline-flex items-center gap-1.5 px-4 py-2 rounded-button text-xs font-bold uppercase tracking-wider btn-white-blue-gradient shadow-md"
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
          <div className="flex flex-col space-y-3">
            <div className="flex items-center gap-3 pb-4 mb-2 border-b border-white/10">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-0.5 border border-gold/40 shrink-0 flex items-center justify-center">
                <Image
                  src="/images/logo.jpg"
                  alt="PTM Jaufar Swadiq Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-heading font-bold text-white text-base">
                  {siteConfig.name}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-gold font-medium">
                  {siteConfig.title}
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-slate-200 hover:text-gold transition-colors rounded-md hover:bg-white/5 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-button text-xs font-bold uppercase tracking-wider btn-white-blue-gradient shadow-md"
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
