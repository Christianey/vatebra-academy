/** @type {import('tailwindcss').Config} */

const defaultThoeme = require('tailwindcss/defaultTheme')

module.exports = {
  
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'daxlineBlack': ['DaxlineProBlack', 'Helvetica', 'Arial', 'sans-serif'],
        'daxlineBold': ['DaxlineProBold', 'Helvetica', 'Arial', 'sans-serif'],
        'daxlineExtraBold': ['DaxlineProExtraBold', 'Helvetica', 'Arial', 'sans-serif'],
        'daxlineLight': ['DaxlineProLight', 'Helvetica', 'Arial', 'sans-serif'],
        'daxlineMedium': ['DaxlineProMedium', 'Helvetica', 'Arial', 'sans-serif'],
        'daxlineRegular': ['DaxlineProRegular', 'Helvetica', 'Arial', 'sans-serif'],
        'daxlineThin': ['DaxlineProThin', 'Helvetica', 'Arial', 'sans-serif'],

      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}