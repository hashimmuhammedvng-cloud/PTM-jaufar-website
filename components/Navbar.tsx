"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteData";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Events", href: "/events" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy/95 backdrop-blur-md py-3.5 shadow-lg shadow-black/20 border-b border-gold/15"
            : "bg-navy/80 backdrop-blur-sm py-5 border-b border-white/5"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo / Wordmark */}
            <Link
              href="/"
              className="group flex flex-col focus:outline-none"
              aria-label="PTM Jaufar Swadiq Home"
            >
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-xl sm:text-2xl text-white tracking-wide group-hover:text-gold transition-colors duration-200">
                  PTM Jaufar Swadiq
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block mb-1" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.18em] uppercase text-gold/90 -mt-0.5">
                {siteConfig.title}
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-gold font-semibold"
                        : "text-slate-200 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact#inquiry"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-button text-xs font-semibold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light active:scale-[0.98] transition-all duration-200 shadow-sm shadow-gold/20"
              >
                <span>Invite Me to Speak or Train</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-navy stroke-[2.5]" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
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

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer Content */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-navy-dark border-l border-gold/20 shadow-2xl p-6 pt-24 flex flex-col justify-between transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-2">
            <div className="pb-4 mb-2 border-b border-white/10">
              <div className="font-heading text-lg text-white">
                PTM Jaufar Swadiq
              </div>
              <div className="text-[11px] uppercase tracking-wider text-gold">
                Human Excellence Strategist
              </div>
            </div>

            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 text-base rounded-md transition-colors ${
                    isActive
                      ? "text-gold font-semibold bg-white/5 border-l-2 border-gold"
                      : "text-slate-200 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/contact#inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-button text-xs font-semibold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light active:scale-[0.98] transition-all shadow-md shadow-gold/20"
            >
              <span>Invite Me to Speak or Train</span>
              <ArrowUpRight className="w-4 h-4 text-navy stroke-[2.5]" />
            </Link>

            <p className="text-center text-xs text-muted mt-2 italic">
              “{siteConfig.corePhilosophy}”
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

