/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        surface: '#0F0F0F',
        accent: '#D9F99D',
        'text-main': '#Eaeaea',
      },
      fontFamily: {
        'display': ['Syne', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'grotesk': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}