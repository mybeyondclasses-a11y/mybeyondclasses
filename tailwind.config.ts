import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "var(--brand-navy)",
          blue: "var(--brand-blue)",
          "blue-light": "var(--brand-blue-light)",
          electric: "var(--brand-electric)",
          cyan: "var(--brand-cyan)",
          teal: "var(--brand-teal)",
          purple: "var(--brand-purple)",
          violet: "var(--brand-violet)",
          "purple-soft": "var(--brand-purple-soft)",
          surface: "var(--brand-surface)",
          ink: "var(--brand-ink)",
          muted: "var(--brand-muted)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(15, 23, 42, 0.06), 0 8px 24px -6px rgba(37, 99, 235, 0.08)",
        elevated: "0 12px 32px -8px rgba(30, 58, 138, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
