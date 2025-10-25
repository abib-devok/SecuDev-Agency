import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#003366',
        'brand-green': '#00CC66',
        'brand-silver': '#C0C0C0',
        'brand-light': '#F0F0F0',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        headings: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shield-wipe': 'shield-wipe 1s ease-out forwards',
        'binary-rain': 'binary-rain 2s linear infinite',
      },
      keyframes: {
        'shield-wipe': {
          '0%': { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' },
        },
        'binary-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
