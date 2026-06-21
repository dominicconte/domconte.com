/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Editorial Ink palette - a distinct personal brand, separate from Purple.
        parchment: "#F7F4EE",
        paper: "#FFFFFF",
        ink: "#1A1A1A",
        stone: "#6B6660",
        hairline: "#E2DDD3",
        forest: {
          DEFAULT: "#1F3D2F",
          hover: "#2C5442",
        },
        oxblood: "#5C2A2A",
      },
      fontFamily: {
        // Editorial serif for display, Inter for body, mono for metadata labels.
        serif: ['"Newsreader Variable"', "Newsreader", "Georgia", "serif"],
        sans: [
          '"Inter Variable"',
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      fontSize: {
        // A fluid display scale for hero / section headings.
        "display-sm": ["clamp(2.25rem, 5vw, 3.25rem)", { lineHeight: "1.05" }],
        display: ["clamp(2.75rem, 8vw, 5.5rem)", { lineHeight: "1.02" }],
        "display-lg": ["clamp(3.5rem, 11vw, 8rem)", { lineHeight: "0.98" }],
      },
      maxWidth: {
        prose: "68ch",
        content: "72rem",
      },
      letterSpacing: {
        label: "0.18em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
