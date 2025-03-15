/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        doto: ['Doto', 'sans-serif'],
        spaceMono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
