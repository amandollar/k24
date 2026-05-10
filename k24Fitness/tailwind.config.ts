import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#fff0e6",
          100: "#ffdfcc",
          200: "#ffbf99",
          300: "#ff9e66",
          400: "#ff7d33",
          500: "#ff5c00", // Vibrant premium orange
          600: "#cc4a00",
          900: "#331200",
        },
        carbon: {
          950: "#020202",
          900: "#070807",
          850: "#0b0c0a",
          800: "#10120f",
          700: "#1a1d18"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-manrope)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 44px rgba(255, 92, 0, 0.28)",
        "glow-lg": "0 0 60px rgba(255, 92, 0, 0.4)",
        "glass-inset": "inset 0 1px 0 0 rgba(255,255,255,0.05)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        }
      },
      backgroundImage: {
        "noise": "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
      }
    }
  },
  plugins: []
};

export default config;
