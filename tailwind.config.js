/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        firacode: ["Fira Code", "monospace"],
        carterone: ["Carter One", "system-ui"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
