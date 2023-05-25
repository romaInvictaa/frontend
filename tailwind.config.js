/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'orange-primary': '#FE8660',
        'orange-secondary': '#FA6B43',
        'cream-primary': '#FFF1DA',
        'cream-secondary': '#FFE8C2',
        'dark-slate-blue': '#181E4B',
        'light-gray': '#E5E5E5',
      }
    },
  },
  plugins: [],
}
