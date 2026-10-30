import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000B1E",
          200: "rgba(4, 18, 54, 0.75)",
          300: "rgba(173, 216, 255, 0.1)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#C8D8F0",
          200: "#A8C4E8",
        },
        blue: { 100: "#D6E8FF" },
        purple: "#4F8EF7",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        panel: {
          DEFAULT: "hsl(var(--panel))",
          end: "hsl(var(--panel-end))",
        },
        highlight: "hsl(var(--highlight))",
        "text-muted": "hsl(var(--text-muted))",
        brand: {
          1: "hsl(var(--brand-1))",
          2: "hsl(var(--brand-2))",
        },
        beam: {
          1: "hsl(var(--beam-1))",
          2: "hsl(var(--beam-2))",
          3: "hsl(var(--beam-3))",
        },
        "panel-btn": "hsl(var(--panel-btn))",
      },
      fontFamily: {
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        btn: "var(--btn-radius)",
        card: "var(--card-radius)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
