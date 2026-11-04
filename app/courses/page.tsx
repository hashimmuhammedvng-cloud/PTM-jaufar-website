"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import {
  GraduationCap,
  ArrowUpRight,
  ArrowLeft,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

export default function CoursesPage() {
  const [countdown, setCountdown] = useState(2);
  const [redirecting, setRedirecting] = useState(true);

  const targetUrl = siteConfig.coursesUrl || "https://learn.hujixglobal.com";

  useEffect(() => {
    // 2-second countdown before redirecting
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Redirect to the courses subdomain
          if (typeof window !== "undefined") {
            window.location.href = targetUrl;
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetUrl]);

  return (
    <div className="pt-28 pb-20 text-slate-200 font-body relative min-h-[85vh] flex items-center justify-center">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 w-full relative z-10 text-center">
        {/* Top Breadcrumb */}
        <div className="mb-6 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Central Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#10223D]/85 via-[#0C1A30]/90 to-[#070F1E]/95 border border-gold/30 shadow-2xl backdrop-blur-md relative overflow-hidden">
          {/* Ambient Silk Glow Behind Card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

          {/* Icon Badge */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-navy-dark border border-gold/40 flex items-center justify-center mb-6 shadow-lg relative z-10">
            <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-gold stroke-[1.8]" />
          </div>

          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/25 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
              Learning Academy & Programs
            </span>
          </div>

          <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">
            Executive Courses & Masterclasses
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto mb-6">
            Access specialized leadership curriculums, emotional intelligence masterclasses,
            and transformative human development courses hosted on the Hujix Global learning portal.
          </p>

          {/* Redirection Notice Banner */}
          <div className="p-4 rounded-xl bg-navy-dark/70 border border-white/10 mb-8 max-w-md mx-auto text-xs text-slate-300 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
              <span>
                Redirecting to <strong className="text-white">{targetUrl.replace("https://", "")}</strong>
              </span>
            </div>
            <span className="text-gold font-mono font-bold bg-gold/10 px-2 py-0.5 rounded border border-gold/20">
              {countdown > 0 ? `${countdown}s` : "Now"}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={targetUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-button text-xs font-bold uppercase tracking-wider btn-gold-gradient shadow-lg"
            >
              <span>Continue to Courses Portal</span>
              <ExternalLink className="w-4 h-4 stroke-[2.5]" />
            </a>

            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-button text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <span>Stay on Website</span>
            </Link>
          </div>

          {/* Subdomain Configuration Note */}
          <div className="mt-8 pt-6 border-t border-white/10 text-[11px] text-slate-400">
            <p>
              Target Subdomain: <code className="text-gold bg-navy-dark px-1.5 py-0.5 rounded border border-white/10">{targetUrl}</code>
            </p>
            <p className="text-[10px] text-slate-400 mt-1">
              You can configure this URL anytime in <code className="text-slate-300">data/siteData.ts</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
