/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{html,js}', './components/**/*.{html,js}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        primaryColor: '#17194f',
        secondaryColor: '#6a6d9e',
        tertiaryColor: '#554dde',
        buttonColor: '#f44e77'
      },
      backgroundImage: {
        'gradient-CyanBlue': `linear-gradient(86.88deg, #3DD5F3, #3D8BFD)`,
        'gradient-BluePurple': `linear-gradient(86.88deg, #3D8BFD, #8c68cd)`,
        'gradient-PurplePink': `linear-gradient(86.88deg, #8c68cd, #de5c9d)`,
        'gradient-PinkRed': `linear-gradient(86.88deg, #de5c9d, #e35d6a)`,
        'gradient-RedOrange': `linear-gradient(-180deg, #f53d2d, #f63)`,
        'gradient-YellowTeal': `linear-gradient(86.88deg, #ffcd39, #4dd4ac)`,
        'gradient-Background': `linear-gradient(86.88deg, #17194f, #6a6d9e)`,
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        }
      })
    }),
    require('@tailwindcss/line-clamp')
  ]
}
