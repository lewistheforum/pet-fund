import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./layout/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./modules/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "font-1": "var(--font-font-1)",
        "font-2": "var(--font-font-2)",
        "font-2-bold": "var(--font-font-2-bold)",
        "font-2-extra-bold": "var(--font-font-2-extra-bold)",
      },
      screen: {
        md: "790px",
        "3xl": "1900px",
      },
    },
  },
  plugins: [],
} satisfies Config;
