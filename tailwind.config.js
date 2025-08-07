/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "'M PLUS 1'",
          'Roboto',
          'Instrument Sans',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          "'Apple Color Emoji'",
          "'Segoe UI Emoji'",
          "'Segoe UI Symbol'",
          "'Noto Color Emoji'",
        ],
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.1', fontWeight: 'bold' }],  // 56px
        'h2': ['3rem', { lineHeight: '1.15', fontWeight: 'bold' }],    // 48px
        'h3': ['2.5rem', { lineHeight: '1.2', fontWeight: 'semibold' }], // 40px
        'h4': ['2rem', { lineHeight: '1.25', fontWeight: 'semibold' }],  // 32px
        'h5': ['1.5rem', { lineHeight: '1.3', fontWeight: 'medium' }],   // 24px
        'h6': ['1.125rem', { lineHeight: '1.4', fontWeight: 'medium' }], // 18px
      },
    },
  },
  plugins: [],
}
