import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-20 bg-navy text-white px-4 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="font-heading text-7xl sm:text-8xl text-gold font-normal">
          404
        </div>
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          PAGE NOT FOUND
        </div>
        <h1 className="font-heading text-2xl sm:text-3xl text-white">
          The Path You Seek Is Not Available
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          The requested resource may have moved or does not exist. Return to the
          homepage to explore programs, philosophy, and speaking insights.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-button text-xs font-bold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-button text-xs font-semibold uppercase tracking-wider border border-white/20 text-white hover:bg-white/5 transition-all"
          >
            <span>Explore Programs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

