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
        brand: {
          primary: '#DC734C',
          hover: '#c96742',
          warning: {
            red: '#FB3131',
          },
          gray: {
            primary: '#8A8A8E',
            divider: '#E8E8E8',
            300: '#C6C6C8',
            400: '#F2F2F7',
            500: '#767678',
            600: '#9B9B9B',
            700: '#AEAEB2 ',
          },
          bg: '#FBF4EF',
          'bg-avatar': '#EED6CB',
        },
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        'sf-pro-display': 'SF Pro Display',
        'sf-pro-text': 'SF Pro Text',
      },
      fontSize: {
        body: '1.1875rem',
      },
      backgroundImage: {
        'coach-shadow':
          'linear-gradient(180deg, rgba(219, 115, 76, 0.00) 2.13%, rgba(219, 115, 76, 0.52) 38.30%, #DB734C 100%)',
      },
      boxShadow: {
        'base-container': '0px 6px 25px 0px rgba(166, 148, 135, 0.06)',
      },
      borderRadius: {
        base: '0.625rem',
        '4xl': '2rem',
      },
      lineHeight: {
        base: '1.375rem',
      },
    },
  },
  plugins: [],
};

// IOS / Light / txt - dark - grey - #767678
