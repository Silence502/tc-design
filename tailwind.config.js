/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js,ts}',
    './*.{html,js,ts}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'poppins': 'Poppins, sans-serif',
      'inter': 'Inter, sans-serif',
      'abeezee': 'ABeeZee, sans-serif',
    },
    width: {
      'tc-modal-mobile-w': 'var(--modal-mobile-w)',
    },
    height: {
      'tc-modal-mobile-h': 'var(--modal-mobile-h)',
    },
    colors: {
      'tc-primary': 'var(--primary-color)',
    },
    borderRadius: {
      'tc-15': 'var(--border-radius-15)',
      'tc-5': 'var(--border-radius-5)'
    },
    border: {
      'tc-1': '1px',
    },
    boxShadow: {
      'tc-1': '0px 3px 3px rgba(0, 0, 0, 0.25)',
    },
    extend: {
      gridTemplateColumns: {
        '4x240': 'repeat(4, 100%)'
      },
    },
  },
  plugins: [],
}
