/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/antd/**/*.js",
  ],
  darkMode: "class", // enable class based dark mode for AntD & Tailwind
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // Tailwind primary for custom utilities
        gradientStart: "#3b82f6",
        gradientEnd: "#8b5cf6",
      },
    },
  },
  plugins: [],
};
