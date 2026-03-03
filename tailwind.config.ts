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
        navy: {
          50: '#f7f9fc',
          100: '#eef3f8',
          200: '#d5e3ef',
          300: '#b2cbe2',
          400: '#89aed1',
          500: '#6693c2',
          600: '#4f7db1',
          700: '#3d6ba2',
          800: '#355a85',
          900: '#2f4c6b',
          950: '#0f1c2e',
        },
        gold: {
          50: '#fffef7',
          100: '#fffce8',
          200: '#fffacc',
          300: '#fff4a0',
          400: '#ffe96a',
          500: '#ffd634',
          600: '#f2c51f',
          700: '#d1a315',
          800: '#a67f15',
          900: '#896618',
          950: '#52390a',
        }
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;