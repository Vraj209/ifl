import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/hooks/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        forest: {
          black: "#0B0D0C",
          900: "#121816",
          800: "#1A241F",
        },
        moss: {
          DEFAULT: "#3E5C4A",
          700: "#31493B",
          500: "#5D806A",
        },
        sage: {
          DEFAULT: "#A8B5A2",
          200: "#D9DED5",
          300: "#C6D0C1",
        },
        sand: {
          DEFAULT: "#EEE9DF",
          300: "#E0D6C8",
        },
        warm: {
          white: "#F8F7F4",
        },
      },
      fontFamily: {
        display: ["Geist", "Neue Montreal", "Satoshi", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "Geist", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(11, 13, 12, 0.14)",
        glass: "0 18px 60px rgba(11, 13, 12, 0.18)",
      },
      opacity: {
        6: "0.06",
        8: "0.08",
        12: "0.12",
        14: "0.14",
        16: "0.16",
        18: "0.18",
        24: "0.24",
        42: "0.42",
        48: "0.48",
        52: "0.52",
        56: "0.56",
        58: "0.58",
        62: "0.62",
        64: "0.64",
        66: "0.66",
        68: "0.68",
        72: "0.72",
        74: "0.74",
        76: "0.76",
        78: "0.78",
        86: "0.86",
        92: "0.92",
      },
      borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "8px",
        "2xl": "8px",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
