module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      'screens': {
        // 'md': '787px',
        // 'xl': '1279px',
        // 'lg': '1023px',
      },
      colors: {
        'pink': '#FF1183',
        'purple': '#7A4EA4',
        'heading': '#2D2629',
        'primary': 'rgba(45, 38, 41, 0.8)',
        'secondary': 'rgba(45, 38, 41, 0.6)',
        'base': '#F9F9FF',
        'white': '#FEFDFE',
        'soft-purple': '#F4F3FF',
        'soft-blue': '#EBF3FD',
        'soft-pink': '#F4CAE4',
      },
      fontFamily: {
        'future-pt': ['Futura PT', 'sans-serif'],
        'kreadon': ['Kreadon', 'sans-serif'],
        'sf-pro': ['SF Pro Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
