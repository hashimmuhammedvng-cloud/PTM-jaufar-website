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
          DEFAULT: "#101C2C",
          dark: "#0A121D",
          light: "#18273D",
          card: "#142337",
        },
        gold: {
          DEFAULT: "#C5A15A",
          light: "#DFBA73",
          dark: "#9E7E3C",
          muted: "rgba(197, 161, 90, 0.15)",
        },
        ivory: {
          DEFAULT: "#F7F4ED",
          warm: "#EFECE3",
          card: "#FFFFFF",
        },
        charcoal: {
          DEFAULT: "#25292E",
          muted: "#4A4F57",
        },
        muted: "#737780",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        card: "12px",
        button: "6px",
      },
    },
  },
  plugins: [],
};

