/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      'vietnam': 'Be Vietnam Pro, sans-serif',
    },
    backgroundImage: {
      'main-learn': 'url("/images/main-learn-img.svg")'
    },
    extend: {
      colors: {
        'orange': '#FF9500',
        'orange-95': '#FFF4E5',
        'gray': '#F7F7F8',
        'gray-95': '#F1F1F3'
      },
    },
  },
  plugins: [],
}