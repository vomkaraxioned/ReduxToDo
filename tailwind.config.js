/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      'ipad':'995px',
      'tablet':'768px',
      'largePhone':'540px'
    },
    extend: {},
  },
  plugins: [],
}
