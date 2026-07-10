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

        // Tokyo Night (transitorio: lo usan los componentes antiguos, se purga al final del rediseño)
        dark: {
          bg: '#1A1B26',
          surface: '#24283B',
          light: '#414868',
          border: '#414868',
        },
        light: {
          primary: '#C0CAF5',
          secondary: '#9AA5CE',
          tertiary: '#565F89',
        },
        primary: '#BB9AF7',
        secondary: '#7AA2F7',
        warning: '#FF9E64',
        info: '#7DCFFF',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-display)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 6vw, 4.25rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [],
}
