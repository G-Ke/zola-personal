/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.html', './static/**/*.{html,js}', './content/**/*.md'],
  daisyui: {
    themes: ["emerald", "forest", "coffee", "autumn", "halloween", "business"],
  },
  theme: {
    extend: {},
    backgroundImage: {
      'beams-dark': 'url("/beams.webp"), linear-gradient(#43bda4, #4ebea8)',
      'beams-light': 'url("/beams.webp"), linear-gradient(#8fc3be, #9fd6d1)',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}