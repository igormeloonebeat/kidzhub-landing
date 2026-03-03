import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: {
          50: "#fef2ee",
          100: "#fde3d9",
          200: "#fbc3b0",
          300: "#f89a7d",
          400: "#f47248",
          500: "#ef5a2b",
          600: "#e04019",
          700: "#ba3015",
          800: "#952a18",
          900: "#782618",
        },
        teal: {
          50: "#f0fafa",
          100: "#d4eff0",
          200: "#ade0e1",
          300: "#7cc9cc",
          400: "#4fafb3",
          500: "#2f8a8f",
          600: "#2a7175",
          700: "#275c60",
          800: "#264c4f",
          900: "#234043",
        },
        cream: {
          50: "#fdfcfa",
          100: "#faf5ed",
          200: "#f5ead9",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
