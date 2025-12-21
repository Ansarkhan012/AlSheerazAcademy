/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'oklch(0.97 0.01 120)',  // light green
          100: 'oklch(0.94 0.03 120)',
          500: 'oklch(0.62 0.22 120)', // main green
          600: 'oklch(0.55 0.25 120)',
          700: 'oklch(0.45 0.25 120)',
          800: 'oklch(0.35 0.20 120)',
          900: 'oklch(0.27 0.15 120)',
        },
        gold: {
          500: 'oklch(0.75 0.19 70)',
          600: 'oklch(0.65 0.20 70)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        arabic: ['Scheherazade New', 'serif'],
      }
    },
  },
}
