import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#00B09B",
        secondary: "#95C93E",
      },
      fontFamily: {
        poppins: "var(--font-poppins), sans-serif",
        aeonik: ["Aeonik TRIAL", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
