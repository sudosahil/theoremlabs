// TheoremLabs Website — built from master prompt
// Design system: Navy #0A1628 / Teal #00B4D8 / Gold #F59E0B
// All content is real — do not substitute placeholder text

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1628',
        teal: '#00B4D8',
        gold: '#F59E0B',
        offwhite: '#F4F6F8',
        textdark: '#1F2937',
        textmuted: '#6B7280',
        cardbg: '#FFFFFF',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
