import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        royal: '#0F4C81',
        'royal-deep': '#0A3B66',
        sky: '#4FA3FF',
        gold: '#D4AF37',
        'gold-light': '#F0D989',
        'bg-light': '#F8FAFC',
        ink: '#1F2937',
        emerald: '#10B981',
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'sans-serif'],
        label: ['var(--font-manrope)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.55' },
          '100%': { transform: 'scale(1.9)', opacity: '0' },
        },
      },
      animation: {
        floatY: 'floatY 5s ease-in-out infinite',
        floatYSlow: 'floatY 7s ease-in-out infinite 0.6s',
        pulseRing: 'pulseRing 2.2s ease-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
