/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        "gray-level-1": "#131417",
        "gray-level-2": "#18191D",
        "gray-level-3": "#18191D",
        "gray-level-4": "#808287",
        "primary-text-selection": "#FFFFFF",
        "unselected-state": "#666666",
        success: "#0AC18E",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
