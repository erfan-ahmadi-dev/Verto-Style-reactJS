/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      IranRegular: ["IranRegular"],
      IranLight: ["IranLight"],
      IranBold: ["IranBold"],
      IranSemiBold: ["IranSemiBold"],
      IranExtraBold: ["IranExtraBold"],
      IranMedium: ["IranMedium"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
