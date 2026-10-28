"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteData";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  inquiryType: string;
  message: string;
}

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  inquiryType: "Leadership Development",
  message: "",
};

export default function InquiryForm({ defaultInquiryType }: { defaultInquiryType?: string }) {
  const [formData, setFormData] = useState<FormData>({
    ...initialForm,
    inquiryType: defaultInquiryType || "Leadership Development",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [refId, setRefId] = useState("");

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

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, Message).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please provide a valid professional email address.");
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));

      const newId = "REQ-" + Math.floor(100000 + Math.random() * 900000);
      setRefId(newId);

      if (typeof window !== "undefined") {
        const stored = JSON.parse(localStorage.getItem("ptm_inquiries") || "[]");
        stored.push({
          id: newId,
          timestamp: new Date().toISOString(),
          ...formData,
        });
        localStorage.setItem("ptm_inquiries", JSON.stringify(stored));
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
    setRefId("");
  };

  return (
    <div className="bg-navy-light/60 border border-gold/25 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative">
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      {status === "success" ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-14 h-14 mx-auto rounded-full bg-gold/15 border border-gold flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7 text-gold" />
          </div>

          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
            Inquiry Successfully Transmitted
          </h3>

          <div className="bg-navy-dark/90 p-4 rounded-xl text-left border border-white/10 text-xs sm:text-sm text-slate-300 space-y-1.5 max-w-md mx-auto">
            <p>
              <strong className="text-gold">Reference:</strong>{" "}
              <span className="font-mono text-white">{refId}</span>
            </p>
            <p>
              <strong className="text-gold">Focus Area:</strong> {formData.inquiryType}
            </p>
            <p className="text-slate-400 text-xs pt-2 border-t border-white/5">
              Thank you for connecting. Our team will review your requirements and respond
              to <span className="text-white underline">{formData.email}</span> promptly.
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={resetForm}
              className="px-5 py-2 rounded-button text-xs font-semibold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-all"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div className="border-b border-white/10 pb-3">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Connect with PTM Jaufar Swadiq
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Explore leadership workshops, emotional intelligence sessions, and training opportunities.
            </p>
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-red-200 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Full Name <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-3.5 py-2.5 rounded-lg bg-navy-dark/90 border border-white/15 text-white placeholder-slate-500 focus:border-gold focus:ring-1 focus:ring-gold text-xs sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Email Address <span className="text-gold">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@organization.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-navy-dark/90 border border-white/15 text-white placeholder-slate-500 focus:border-gold focus:ring-1 focus:ring-gold text-xs sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="organization" className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Organization / Institution
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Company / University"
                className="w-full px-3.5 py-2.5 rounded-lg bg-navy-dark/90 border border-white/15 text-white placeholder-slate-500 focus:border-gold focus:ring-1 focus:ring-gold text-xs sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="inquiryType" className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Focus Area <span className="text-gold">*</span>
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg bg-navy-dark/90 border border-white/15 text-white focus:border-gold focus:ring-1 focus:ring-gold text-xs sm:text-sm"
              >
                <option value="Leadership Development">Leadership Development</option>
                <option value="Emotional Intelligence">Emotional Intelligence Workshop</option>
                <option value="Training and Human Development">Training & Human Development</option>
                <option value="Keynote Speaking">Keynote Speaking Engagement</option>
                <option value="Custom Training Program">Customized Training Opportunity</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1">
              Your Requirements / Objectives <span className="text-gold">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your audience, goals, or proposed dates..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-navy-dark/90 border border-white/15 text-white placeholder-slate-500 focus:border-gold focus:ring-1 focus:ring-gold text-xs sm:text-sm"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-400">
              Confidential transmission to PTM Jaufar Swadiq.
            </span>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-button text-xs font-bold uppercase tracking-wider bg-gold text-navy hover:bg-gold-light active:scale-[0.98] transition-all disabled:opacity-60 shadow-md shadow-gold/20"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Transmitting...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
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
