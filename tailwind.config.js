/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#151718",
        "secondary-background": "#242627",
        icon: "#707477",
        "second-text": "#fdfdfe",
        primary: "#4275ec",
      },
    },
  },
  plugins: [],
};
