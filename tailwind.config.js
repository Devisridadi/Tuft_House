/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tuft: {
          ivory: '#EAE4D8',
          cream: '#F7F4EE',
          taupe: '#B6A18A',
          mocha: '#786653',
          charcoal: '#292720',
          sage: '#A9A28E',
          sand: '#DFD8CC',
          terracotta: '#A65D43',
          gold: '#C49746',
          dark: '#1C1A16',
          border: '#E1D9CB',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Cinzel"', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(41, 39, 32, 0.05)',
        'float': '0 12px 32px -4px rgba(41, 39, 32, 0.08)',
        'elevated': '0 20px 48px -8px rgba(41, 39, 32, 0.12)',
      }
    },
  },
  plugins: [],
}
