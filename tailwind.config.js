/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html' , '/node_modules/flowbite/**/*.js' , '/dist/js/*.js'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
  ],
}

