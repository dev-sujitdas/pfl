/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'responsive-heading': 'clamp(3rem, 5vw + 1rem, 8rem)',
        'responsive-hero': 'clamp(3rem, 6vw + 1rem, 8rem)',
        'responsive-subheading' : 'clamp(2.5rem, 3vw + 0.8rem, 5rem)',
        'subtext': 'clamp(0.875rem, 2vw + 0.5rem, 1.25rem)',
      },
    },
  },
  plugins: [],
}
