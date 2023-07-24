module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fff',
        'secondary': '#AF9652',
        'main-color': '#4294EA',
        'secondary-300': '#D3B888',
        'bg-color': '#fff',
        'text-color-griffondor': '#480C16',
        'text-color-serpentard': '#2C4542',
        'text-color-poufsouffle': '#553F15',
        'text-color-serdaigle': '#023860',
      },
      fontFamily: {
        //babylonica: ['Babylonica', 'cursive'],

      },
      screens: {
        'max-2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }

        'max-xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }

        'max-lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }

        'max-md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }

        'max-sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }

        'max-xs': {'max': '475px'},

        'xs': {'min': '476px'},

        'max-header': {'max': '909px'},

        'min-header': {'min': '910px'},
      },
    },
  },
  plugins: [],
}