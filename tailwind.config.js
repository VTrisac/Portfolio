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
        // Tokyo Night Theme
        dark: {
          bg: '#1A1B26',        // fondo principal Tokyo Night (azul oscuro)
          surface: '#24283B',   // superficie/cards
          light: '#414868',     // superficie más clara
          border: '#414868',    // bordes
        },
        light: {
          primary: '#C0CAF5',   // texto principal (azul claro)
          secondary: '#9AA5CE', // texto secundario
          tertiary: '#565F89',  // texto terciario
        },
        primary: '#BB9AF7',     // Purple (Tokyo Night accent)
        secondary: '#7AA2F7',   // Blue (Tokyo Night)
        success: '#9ECE6A',     // Green (Tokyo Night)
        warning: '#FF9E64',     // Orange (Tokyo Night)
        info: '#7DCFFF',        // Cyan (Tokyo Night)
        danger: '#F7768E',      // Red (Tokyo Night)
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
