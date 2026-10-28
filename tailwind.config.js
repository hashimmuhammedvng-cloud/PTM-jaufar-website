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
          light: "#162438",
          card: "#121E2F",
        },
        gold: {
          DEFAULT: "#C5A15A",
          light: "#DFBA73",
          dark: "#9E7E3C",
          muted: "rgba(197, 161, 90, 0.12)",
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
