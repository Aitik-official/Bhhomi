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
        primary: "#FF6B00",
        primaryLight: "#FF8C38",
        primaryDark: "#CC5500",
        offWhite: "#FFF8F3",
        lightGrey: "#F5F5F5",
        textPrimary: "#1A1A1A",
        textSecondary: "#555555",
        border: "#E8E8E8",
        success: "#22C55E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(26, 26, 26, 0.08)",
        glow: "0 16px 40px rgba(255, 107, 0, 0.18)",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(135deg, #FF6B00 0%, #FF8C38 55%, #CC5500 100%)",
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
