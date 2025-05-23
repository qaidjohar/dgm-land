/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        midnight: '#04005E',
        retrowave: '#440BD4',
        flamingo: '#E92EFB',
        deathray: '#FF2079',
        blackish: '#24272A',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'cyberpunk-grid': "url('/src/assets/grid-bg.svg')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: 1,
            filter: 'brightness(1) drop-shadow(0 0 12px rgba(233, 46, 251, 0.5))'
          },
          '50%': {
            opacity: 0.8,
            filter: 'brightness(1.2) drop-shadow(0 0 20px rgba(233, 46, 251, 0.8))'
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      boxShadow: {
        'neon-pink': '0 0 5px rgba(255, 32, 121, 0.5), 0 0 20px rgba(255, 32, 121, 0.3)',
        'neon-purple': '0 0 5px rgba(68, 11, 212, 0.5), 0 0 20px rgba(68, 11, 212, 0.3)',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
    },
  },
  plugins: [],
};