/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        background: '#09090b',
        card: '#121215',
        'card-hover': '#18181c',
        border: '#27272a',
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
      },
    },
  },
  plugins: [],
};
