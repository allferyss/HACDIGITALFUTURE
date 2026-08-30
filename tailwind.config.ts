import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1360px" },
    },
    extend: {
      colors: {
        navy: {
          950: "rgb(var(--navy-950) / <alpha-value>)",
          900: "rgb(var(--navy-900) / <alpha-value>)",
          800: "rgb(var(--navy-800) / <alpha-value>)",
          700: "rgb(var(--navy-700) / <alpha-value>)",
          600: "rgb(var(--navy-600) / <alpha-value>)",
        },
        blue: {
          50: "#EBF5FF",
          100: "#D1E9FF",
          200: "#B2DDFF",
          300: "#84CAFF",
          400: "#38BDF8", // Electric Cyan-Sky
          500: "#0070F3", // Pure Electric Blue
          600: "#0055D6", // Strong Blue
          700: "#0040B0", // Deep Blue
          800: "#002D80", // Navy Blue
          900: "#001D54", // Midnight Blue
        },
        ink: "rgb(var(--ink) / <alpha-value>)",
        mist: "rgb(var(--mist) / <alpha-value>)",
        mist2: "rgb(var(--mist2) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      backgroundImage: {
        "hac-gradient": "linear-gradient(135deg, #0070F3 0%, #38BDF8 50%, #0047C7 100%)",
        "hac-radial": "radial-gradient(circle at 50% 0%, rgba(0, 112, 243, 0.18), transparent 60%)",
        "hac-grid": "linear-gradient(rgba(0, 112, 243, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 112, 243, 0.07) 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "arc-draw": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pixel-blink": {
          "0%,100%": { opacity: "0.15" },
          "50%": { opacity: "0.6" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pixel-blink": "pixel-blink 3.5s ease-in-out infinite",
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
