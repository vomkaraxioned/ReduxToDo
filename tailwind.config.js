/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      'ipad':'995px',
      'tablet':'768px',
      'largePhone':'540px'
    },
    extend: {
      keyframes:{
        scaleout:{
           'from':{transform:'translateX(100%)'},
            'to':{transform:'translateX(0)'}
        }
      }
    },
  },
  plugins: [],
}
