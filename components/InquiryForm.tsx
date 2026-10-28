"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteData";
import { Send, CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  inquiryType: string;
  preferredDate: string;
  message: string;
}

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  inquiryType: "Corporate Training",
  preferredDate: "",
  message: "",
};

export default function InquiryForm({ defaultInquiryType }: { defaultInquiryType?: string }) {
  const [formData, setFormData] = useState<FormData>({
    ...initialForm,
    inquiryType: defaultInquiryType || "Corporate Training",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submissionId, setSubmissionId] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Basic validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, Message).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please provide a valid corporate or professional email address.");
      return;
    }

    try {
      // Simulate real asynchronous submission dispatch
      await new Promise((resolve) => setTimeout(resolve, 800));

      const newId = "REQ-" + Math.floor(100000 + Math.random() * 900000);
      setSubmissionId(newId);

      // Persist to localStorage for client-side audit
      if (typeof window !== "undefined") {
        const existingInquiries = JSON.parse(
          localStorage.getItem("ptm_inquiries") || "[]"
        );
        existingInquiries.push({
          id: newId,
          timestamp: new Date().toISOString(),
          ...formData,
        });
        localStorage.setItem("ptm_inquiries", JSON.stringify(existingInquiries));
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("An unexpected network error occurred. Please try emailing directly.");
    }
  };

  const resetForm = () => {
    setFormData(initialForm);
    setStatus("idle");
    setSubmissionId("");
  };

  return (
    <div
      id="inquiry"
      className="bg-navy-light/60 border border-gold/25 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-md shadow-2xl relative"
    >
      {/* Gold Top Accent Line */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      {status === "success" ? (
        <div className="text-center py-8 space-y-5">
          <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 border border-gold flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-gold" />
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl text-white">
            Inquiry Successfully Transmitted
          </h3>

          <div className="bg-navy-dark/80 p-4 rounded-lg max-w-md mx-auto text-left border border-white/10 text-xs sm:text-sm text-slate-300 space-y-2">
            <p>
              <strong className="text-gold">Reference Number:</strong>{" "}
              <span className="font-mono text-white">{submissionId}</span>
            </p>
            <p>
              <strong className="text-gold">Recipient:</strong> PTM Jaufar Swadiq
              Executive Desk
            </p>
            <p>
              <strong className="text-gold">Selected Service:</strong>{" "}
              {formData.inquiryType}
            </p>
            <p className="text-slate-400 text-xs pt-1 border-t border-white/5">
              Our team reviews corporate and institutional requests promptly. You
              will receive a preliminary response at{" "}
              <span className="text-white underline">{formData.email}</span> within
              24–48 business hours.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-2.5 rounded-button text-xs font-semibold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-all"
            >
              Submit Another Inquiry
            </button>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
                `Direct Follow-up: ${formData.inquiryType} (${submissionId})`
              )}`}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-button text-xs font-semibold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light transition-all"
            >
              <span>Email Jaufar Directly</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h3 className="font-heading text-2xl text-white">
              Initiate a Training or Speaking Inquiry
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              Provide details regarding your organizational needs, expected
              audience, or desired speaking theme.
            </p>
          </div>

          {status === "error" && (
            <div className="flex items-center gap-3 p-4 rounded-md bg-red-950/60 border border-red-500/40 text-red-200 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-1.5"
              >
                Full Name <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Dr. Ayesha Rahman"
                className="w-full px-4 py-3 rounded-md bg-navy-dark/90 border border-white/15 text-white placeholder-slate-500 focus:border-gold focus:ring-1 focus:ring-gold text-sm transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-1.5"
              >
                Professional Email <span className="text-gold">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. ayesha@organization.com"
                className="w-full px-4 py-3 rounded-md bg-navy-dark/90 border border-white/15 text-white placeholder-slate-500 focus:border-gold focus:ring-1 focus:ring-gold text-sm transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-1.5"
              >
                Contact Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98460 XXXXX"
                className="w-full px-4 py-3 rounded-md bg-navy-dark/90 border border-white/15 text-white placeholder-slate-500 focus:border-gold focus:ring-1 focus:ring-gold text-sm transition-colors"
              />
            </div>

            {/* Organization */}
            <div>
              <label
                htmlFor="organization"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-1.5"
              >
                Organization / Institution <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                placeholder="e.g. Apex Global Academy / Tech Corp"
                className="w-full px-4 py-3 rounded-md bg-navy-dark/90 border border-white/15 text-white placeholder-slate-500 focus:border-gold focus:ring-1 focus:ring-gold text-sm transition-colors"
              />
            </div>

            {/* Inquiry Type */}
            <div>
              <label
                htmlFor="inquiryType"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-1.5"
              >
                Area of Engagement <span className="text-gold">*</span>
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-navy-dark/90 border border-white/15 text-white focus:border-gold focus:ring-1 focus:ring-gold text-sm transition-colors"
              >
                <option value="Corporate Training">Corporate Leadership Training</option>
                <option value="Leadership Workshop">Leadership Development Workshop</option>
                <option value="Emotional Intelligence Program">Emotional Intelligence Program</option>
                <option value="Speaking Engagement">Keynote Speaking Engagement</option>
                <option value="Youth Bootcamp">Student / Youth Development Bootcamp</option>
                <option value="Trainer Development">Educator & Trainer Excellence</option>
                <option value="Personal Coaching">Executive / Personal Coaching</option>
                <option value="Other">Other Custom Inquiry</option>
              </select>
            </div>

            {/* Preferred Date */}
            <div>
              <label
                htmlFor="preferredDate"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-1.5"
              >
                Target Timeline / Preferred Date
              </label>
              <input
                type="text"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                placeholder="e.g. Q4 2026 or Specific Date"
                className="w-full px-4 py-3 rounded-md bg-navy-dark/90 border border-white/15 text-white placeholder-slate-500 focus:border-gold focus:ring-1 focus:ring-gold text-sm transition-colors"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-1.5"
            >
              Context & Objectives <span className="text-gold">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Please share details regarding participant count, venue, main challenges, or learning goals..."
              className="w-full px-4 py-3 rounded-md bg-navy-dark/90 border border-white/15 text-white placeholder-slate-500 focus:border-gold focus:ring-1 focus:ring-gold text-sm transition-colors"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              Direct and confidential transmission to PTM Jaufar Swadiq's desk.
            </p>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-button text-xs font-bold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light active:scale-[0.98] transition-all duration-200 disabled:opacity-60 shadow-lg shadow-gold/20"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-navy" />
                  <span>Transmitting Details...</span>
                </>
              ) : (
                <>
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5 stroke-[2.5]" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

