/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      colors: {
        'dark': '#17202C',
        'dark-gray': '#1C2735',
        'border': '#2F3742',
        'redCol': '#C3317D'
      },

      fontSize: {
        'xl': ['21px', {
          fontWeight: '700',
        }],
        '2xl': ['28px', {
          fontWeight: '700',
        }],
        '3xl': ['37px', {
          fontWeight: '700',
        }],
        '4xl': ['50px', {
          fontWeight: '700',
        }],
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(100%, 1fr))'
      }
    },
    plugins: [
    ],
  }
}