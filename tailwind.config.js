/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pinkPrimary: '#FFB6C7',
        pinkSoft: '#FFE4EC',
        pinkDeep: '#F49AC1',
        navy: '#1B2752',
        navyDeep: '#0F1A3D',
        navyLight: '#3B4B85',
        // Gold tokens kept for backwards compatibility but mapped to navy.
        gold: '#1B2752',
        goldSoft: '#3B4B85',
        ivory: '#FFFDF8',
        charcoal: '#1A1F36',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(27, 39, 82, 0.25)',
        glow: '0 0 40px rgba(255, 182, 199, 0.55)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.7s ease-out',
        shimmer: 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-luxury':
          'linear-gradient(135deg, #FFB6C7 0%, #FFE4EC 50%, #FFFFFF 100%)',
        'gradient-pink':
          'linear-gradient(180deg, #FFE4EC 0%, #FFFFFF 100%)',
        'gradient-navy':
          'linear-gradient(90deg, #0F1A3D 0%, #3B4B85 50%, #0F1A3D 100%)',
        // Alias kept so existing `bg-gradient-gold` still works — now navy.
        'gradient-gold':
          'linear-gradient(90deg, #0F1A3D 0%, #3B4B85 50%, #0F1A3D 100%)',
      },
    },
  },
  plugins: [],
};
