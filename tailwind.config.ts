import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--color-black)",
        dark: "var(--color-dark)",
        card: "var(--color-card)",
        border: "var(--color-border)",
        roseGold: "var(--color-rose-gold)",
        roseGoldLight: "var(--color-rose-gold-light)",
        roseGoldDark: "var(--color-rose-gold-dark)",
        metallicPink: "var(--color-metallic-pink)",
        primary: "var(--color-rose-gold)",
        primaryLight: "var(--color-rose-gold-light)",
        primaryDark: "var(--color-rose-gold-dark)",
        offWhite: "#f7f7f7",
        lightGrey: "#f7f7f7",
        textPrimary: "var(--color-text-primary)",
        textSecondary: "var(--color-text-secondary)",
        textMuted: "var(--color-text-muted)",
        success: "#22C55E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.08)",
        glow: "0 16px 40px var(--color-rose-gold-glow)",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(135deg, #F3D6D2 0%, #B76E79 50%, #F3D6D2 100%)",
        "metallic-reflection":
          "linear-gradient(120deg, rgba(255,255,255,0.6), rgba(255,255,255,0.1))",
      },
      animation: {
        "slow-spin": "slow-spin 16s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "slow-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
