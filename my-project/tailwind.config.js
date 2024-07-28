/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite"
      },
      keyframes: {
        // from -4 to -104
        "loop-scroll": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-104%)" },
        },
      },
    },
  },
  plugins: [],
}

