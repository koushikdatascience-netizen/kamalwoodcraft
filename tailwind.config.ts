import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          950: "var(--navy-950)",
          900: "var(--navy-900)",
          800: "var(--navy-800)",
          700: "var(--navy-700)"
        },
        blue: {
          600: "var(--blue-600)",
          500: "var(--blue-500)",
          400: "var(--blue-400)",
          300: "var(--blue-300)",
          100: "var(--blue-100)",
          50: "var(--blue-50)"
        },
        slate: {
          900: "var(--slate-900)",
          700: "var(--slate-700)",
          600: "var(--slate-600)",
          500: "var(--slate-500)",
          300: "var(--slate-300)",
          200: "var(--slate-200)",
          100: "var(--slate-100)",
          50: "var(--slate-50)"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Manrope", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 30px rgba(22,119,255,.22), 0 0 80px rgba(22,119,255,.1)"
      }
    }
  },
  plugins: []
};

export default config;
