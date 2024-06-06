/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens:{
      'md': {'max': '767px'},
      'tablet': '767px',
      'laptop': '1000px',
    },
    flex: {
      '2': '2 2 0%',  // flex: 2;
      '1': '1 1 0%',  // flex: 1;
    }

  },
  plugins: [],
};
