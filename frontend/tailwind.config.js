/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js", // Flowbite bileşenlerini tarar
  ],
  theme: {
    extend: {
      colors:{
        //login button color
        weatherBlue:'#3EABE4'
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
]
}

