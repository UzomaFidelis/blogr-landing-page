/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        veryLightRed: "hsl(13, 100%, 72%)",
        lightRed: "hsl(353, 100%, 62%)",
        veryDarkGrayBlue: "hsl(237, 17%, 21%)",
        veryDarkDesaturatedBlue: "hsl(237, 23%, 32%)",
        grayishBlue: "hsl(240, 2%, 79%)",
        veryDarkGrayishBlue: "hsl(207, 13%, 34%)",
        veryDarkBlackBlue: "hsl(240, 10%, 16%)",
        lightRedCta: "hsl(356, 100%, 66%)",
        veryLightRedCta: "hsl(355, 100%, 74%)",
        veryDarkBlue: "hsl(208, 49%, 24%)",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      screens: {
        xm: "420px",
        sm: "500px",
        "2xl": "1440px",
      },
      backgroundImage: {
        "headingbg-mobile":
          "url('/src/assets/images/bg-pattern-intro-mobile.svg')",
        "headingbg-desktop":
          "url('/src/assets/images/bg-pattern-intro-desktop.svg')",
        "editor-desktop":
          "url('/src/assets/images/illustration-editor-desktop.svg')",
        "laptop-desktop":
          "url('/src/assets/images/illustration-laptop-desktop.svg')",
        "pattern-circle": "url('/src/assets/images/bg-pattern-circles.svg')",
      },
    },
  },
  plugins: [],
};
