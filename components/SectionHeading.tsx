import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightWord?: string;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "dark" | "light";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlightWord,
  description,
  align = "center",
  theme = "dark",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const alignClass =
    align === "center"
      ? "text-center items-center"
      : align === "right"
      ? "text-right items-end"
      : "text-left items-start";

  // If a highlight word is provided, highlight it with gold
  let renderedTitle: React.ReactNode = title;
  if (highlightWord && title.includes(highlightWord)) {
    const parts = title.split(highlightWord);
    renderedTitle = (
      <>
        {parts[0]}
        <span className="text-gold">{highlightWord}</span>
        {parts.slice(1).join(highlightWord)}
      </>
    );
  }

  return (
    <div className={`flex flex-col ${alignClass} mb-12 md:mb-16 ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-3 mb-3">
          {align !== "left" && <span className="w-6 h-[1.5px] bg-gold" />}
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-gold">
            {eyebrow}
          </span>
          {align !== "right" && <span className="w-6 h-[1.5px] bg-gold" />}
        </div>
      )}

      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight max-w-3xl ${
          isDark ? "text-white" : "text-navy"
        }`}
      >
        {renderedTitle}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${
            isDark ? "text-slate-300" : "text-charcoal/80"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

