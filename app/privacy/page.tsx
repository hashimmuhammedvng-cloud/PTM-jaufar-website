import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — PTM Jaufar Swadiq",
  description: "Privacy policy and terms of engagement for PTM Jaufar Swadiq's personal brand website.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 bg-navy text-white">
      <div className="max-w-[850px] mx-auto px-4 sm:px-6 py-16">
        <div className="mb-10 pb-6 border-b border-gold/20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold block mb-2">
            LEGAL & COMPLIANCE
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl text-white">
            Privacy Policy & Data Transparency
          </h1>
          <p className="text-xs text-muted mt-2">
            Effective Date: October 2026 • Last Updated: October 28, 2026
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading text-xl text-white">1. Introduction</h2>
            <p>
              This privacy policy governs the website of <strong>PTM Jaufar Swadiq</strong>{" "}
              (Human Excellence Strategist) accessible via ptmjaufarswadiq.com. We respect your
              privacy and are dedicated to protecting any professional or personal data you share
              with us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl text-white">2. Information We Collect</h2>
            <p>
              When you submit a speaking, training, or workshop inquiry via our website, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300 text-sm">
              <li>Full Name and Professional Title</li>
              <li>Corporate or Institutional Email Address</li>
              <li>Telephone Number (if provided voluntarily)</li>
              <li>Organization Name and Industry</li>
              <li>Project details, expected dates, and bespoke training requirements</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl text-white">3. How Your Information is Used</h2>
            <p>
              All information collected is used exclusively to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300 text-sm">
              <li>Respond directly to your corporate training or speaking invitations.</li>
              <li>Coordinate schedules, preparatory diagnostic calls, and proposals.</li>
              <li>Deliver agreed educational resources and workshop follow-ups.</li>
            </ul>
            <p>
              We do not sell, rent, monetize, or disclose your contact details to third-party marketing brokers under any circumstances.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl text-white">4. Data Security</h2>
            <p>
              We apply industry-standard security protocols to safeguard your submissions against unauthorized access, loss, or alteration.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl text-white">5. Your Rights</h2>
            <p>
              You may request access to, correction of, or permanent deletion of your inquiry data from our executive records at any time by contacting us directly at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-gold underline">
                {siteConfig.contact.email}
              </a>.
            </p>
          </section>

          <div className="pt-8 border-t border-white/10 flex items-center justify-between text-xs text-muted">
            <Link href="/" className="text-gold hover:underline">
              ← Return to Homepage
            </Link>
            <Link href="/#contact" className="text-gold hover:underline">
              Contact Executive Office →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

