import defaultTheme from 'tailwindcss/defaultTheme.js'

/**
 * Les échelles de couleurs reproduisent à l'identique les variables de la
 * maquette Figma (convention `Famille/Luminosité`), afin qu'une valeur lue
 * dans le design se traduise sans ambiguïté en classe utilitaire :
 * `Grey/30` -> `text-grey-30`, `Orange/50` -> `bg-orange-50`.
 *
 * ATTENTION : cette convention est l'inverse de celle de Tailwind. Ici `50`
 * désigne la teinte médiane (l'orange de marque), pas la plus claire. Les
 * échelles `orange` et `gray` de Tailwind sont donc volontairement remplacées.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  content: [
    './components/**/*.{js,ts,vue}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#FF9500',
          90: '#FFEACC',
          95: '#FFF4E5',
          97: '#FFF9F0',
        },
        grey: {
          10: '#1A1A1A',
          15: '#262626',
          20: '#333333',
          30: '#4C4C4C',
          35: '#59595A',
          40: '#656567',
        },
        white: {
          DEFAULT: '#FFFFFF',
          95: '#F1F1F3',
          97: '#F7F7F8',
          99: '#FCFCFD',
        },
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        container: '1596px',
      },
      backgroundImage: {
        'main-learn': 'url("/images/main-learn-img.svg")',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
