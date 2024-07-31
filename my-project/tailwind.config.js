/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite"
      },
      keyframes: {
        // from -4 to -104
        "loop-scroll": {
          from: { transform: "translateX(-4%)" },
          to: { transform: "translateX(-104%)" },
        },
      },
    },
    fontFamily:{
      abc:["Geologica", "sans-serif"],
      abd:["Poppins", "sans-serif"],
      abb:["Silkscreen", "sans-serif"],
    }
  },
  plugins: [],
}

