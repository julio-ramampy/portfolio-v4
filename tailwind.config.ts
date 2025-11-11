import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'exp1': "url('/realisations/1.jpeg')",
        'exp2': "url('/realisations/2.jpeg')",
        'exp3': "url('/realisations/3.jpeg')",
        'exp4': "url('/realisations/4.jpeg')",
        'exp5': "url('/realisations/5.jpeg')",
        'exp6': "url('/realisations/6.jpeg')",
        'exp7': "url('/realisations/7.jpeg')",
        'exp8': "url('/realisations/8.jpeg')"
       }
    },
  },
  plugins: [],
} satisfies Config;
