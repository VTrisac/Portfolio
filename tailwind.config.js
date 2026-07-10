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
        ink: '#0C0C0E',      // fondo principal
        surface: '#141416',  // cards / paneles
        line: '#26262B',     // bordes hairline
        cream: '#E9E6E0',    // texto principal
        muted: '#8B8880',    // texto secundario
        accent: '#C4694A',   // terracota — único acento
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-display)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 6vw, 4.25rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      animation: {
        blink: 'blink 1.1s steps(1) infinite',
        breathe: 'breathe 9s ease-in-out infinite',
      },
      keyframes: {
        blink: { '50%': { opacity: '0' } },
        breathe: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.06)' },
        },
      },
    },
  },
  plugins: [],
}
