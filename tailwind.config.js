/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A259FF",
        secondary: "#3B3B3B",
        background: "#2B2B2B",
        customWhite: "#FFFFFF",
      },
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
        "space-mono": ["Space Mono", "monospace"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        ls: "1280px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
