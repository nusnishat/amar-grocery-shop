/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #0cc5b7 0%, #2bd891 100%)',
        'custom-gradient-red': ' linear-gradient(135deg, #ff934b 0%,#ff5e62 100%)',
      },
      colors: {
        'custom-teal': '#0cc5b7',
        'custom-red': ' #ff5e62',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

