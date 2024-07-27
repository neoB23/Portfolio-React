/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 8s linear infinite"
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(-1%)" },
          to: { transform: "translateX(-104%)" },
        },
      },
    },
  },
  plugins: [],
}

