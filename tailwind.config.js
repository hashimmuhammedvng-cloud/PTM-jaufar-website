/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1526", // Regal Midnight Navy (from user reference)
          dark: "#060C16",    // Deep Navy Silk Shadow
          light: "#132238",   // Luminous Navy Ribbon Surface
          card: "#0F1C30",    // Rich Navy Card Base
          accent: "#1A2F4C",  // Highlight Navy Ridge
        },
        gold: {
          DEFAULT: "#D1A751", // Lustrous Silk Gold
          light: "#EED59B",   // Champagne Gold Highlight
          bright: "#F7E8C3",  // Radiant Apex Gold
          dark: "#94712F",    // Deep Sculpted Bronze-Gold
          muted: "rgba(209, 167, 81, 0.14)",
        },
        ivory: {
          DEFAULT: "#F7F4ED",
          warm: "#EFECE3",
        },
        charcoal: {
          DEFAULT: "#25292E",
          muted: "#4A4F57",
        },
        muted: "#8E95A2",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Poppins", "-apple-system", "sans-serif"],
        body: ["var(--font-body)", "Inter", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        container: "1160px",
      },
      borderRadius: {
        card: "16px",
        button: "8px",
      },
    },
  },
  plugins: [],
};
