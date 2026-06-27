/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2240C2',
        accent: '#7ED957',
        dark: '#201F2D',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Afacad', 'system-ui', 'sans-serif'],
        display: ["'Archivo Black'", 'system-ui', 'sans-serif'],
        body: ['Afacad', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': 'clamp(3rem, 8vw, 7rem)',
        'display-xl': 'clamp(2.5rem, 6vw, 5rem)',
        'display-lg': 'clamp(2rem, 4vw, 3.5rem)',
        'display-md': 'clamp(1.5rem, 3vw, 2.5rem)',
      },
      spacing: {
        section: 'clamp(5rem, 10vw, 10rem)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marqueeReverse 30s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
