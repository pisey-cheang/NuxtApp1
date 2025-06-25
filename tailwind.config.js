export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
    './plugins/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'canadia-blue': '#e0001d',
      },
      borderRadius: {
        'custom-round': '40%',     
      },
    },
  },
  plugins: [],
}