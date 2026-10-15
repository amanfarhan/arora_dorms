import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        editorial: ["var(--font-cormorant)", "Georgia", "serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      colors: {
        brand: {
          dark: "#05070B",
          black: "#030508",
          deep: "#0B0E14",
          surface: "#090D14",
          card: "#0D131F",
          cardDark: "#070D17",
          border: "rgba(255, 255, 255, 0.08)",
          accent: "#8B80F9",
          lavender: "#A5B4FC",
          lavenderLight: "#BDC7FF",
          lavenderHover: "#98a8f0",
          lilac: "#C084FC",
          periwinkle: "#A3B8FF",
          muted: "#94A3B8",
        },
      },
    },
  },
  plugins: [],
};

export default config;
