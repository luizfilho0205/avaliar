/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'scale-in-center-open': {
          '0%': {
            '-webkit-transform': 'scale(0)',
            transform: 'scale(0)',
            opacity: 1
          },
          '100%': {
            '-webkit-transform': 'scale(1)',
            transform: 'scale(1)',
            opacity: 1
          }
        },
        'scale-in-center-close': {
          '0%': {
            '-webkit-transform': 'scale(1)',
            transform: 'scale(1)',
            opacity: 1
          },
          '100%': {
            '-webkit-transform': 'scale(0)',
            transform: 'scale(0)',
            opacity: 0
          }
        }
      },
      animation: {
        'scale-in-center-open':
          'scale-in-center-open 0.5s  cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'scale-in-center-close':
          'scale-in-center 0.5s  cubic-bezier(0.25, 0.46, 0.45, 0.94) both'
      }
    }
  },
  plugins: []
}
