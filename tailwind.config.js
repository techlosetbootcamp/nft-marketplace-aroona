/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // customColor: "#A259FF",
        // "primary-text": "#ffffff",
        primary: "#A259FF",
        secondary: "#3B3B3B",
        background: "#2B2B2B",
        white: "#FFFFFF",
      },
      fontFamily: {
        "work-sans": "Work Sans",
        "space-mono": "Space Mono",
      },
      screens: {
        md: { min: "768px" },
        sm: { min: "834px" },
        lg: { min: "1024px" },
        ls: { min: "1280px" },
        xl: { min: "1440px" },
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         customColor: "#A259FF",
//         "primary-text": "#ffffff",
//       },
//       fontFamily: {
//         "work-sans": "Work Sans",
//         "space-mono": "Space Mono",
//       },
//       screens: {
//         // Update existing screen sizes and add new ones as per your Figma design
//         sm: { max: "767px" },   // Mobile (up to 767px)
//         md: { min: "768px", max: "1023px" }, // Tablet (768px - 1023px)
//         lg: { min: "1024px", max: "1279px" }, // Desktop (1024px - 1279px)
//         xl: { min: "1280px" },  // Large screens (1280px and above)
//       },
//       spacing: {
//         // Add custom spacing values if needed
//         '610px': '610px',
//         '5610px': '5610px',
//         '4981px': '4981px',
//         '6895px': '6895px',
//       },
//     },
//   },
//   plugins: [],
// };
