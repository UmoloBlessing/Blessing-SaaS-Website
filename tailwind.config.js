/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'sm': {'max': '428px'},
      // => @media (max-width: 428px) { ... }
    
      'lg': {'min': '1440px'},
      // => @media (max-width: 1440px) { ... }
    
      // 'xl': {'max': '1680px'},
      // // => @media (max-width: 1680px) { ... }
    },
    extend: {
      backgroundColor: {
        'Primary-1': '#3C3679',
        'Primary-2': '#FAE0E1',
        'Bakground-Grey': '#F6F6F9',
      },
      colors: {
        'headings': '#201C44',
        'Body-Text': '#131126',
        'color1': '#FFFFFF',
      }
    },
  },
  plugins: [],
}

