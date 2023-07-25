/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgSun': "url('/src/assets/images/sun.png')",
        'bgRain': "url('/src/assets/images/rain.png')",
        'bgMist': "url('/src/assets/images/mist.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

