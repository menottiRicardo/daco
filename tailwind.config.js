const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
    },
    extend: {
      fontFamily: {
        latoBold: "LatoBold",
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
      variants: [
        "responsive",
        "group-hover",
        "focus-within",
        "first",
        "last",
        "odd",
        "even",
        "hover",
        "focus",
        "active",
        "visited",
        "disabled",
      ],
    },
  },
  plugins: [],
};
