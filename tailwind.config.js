module.exports = {
  purge: {
    enabled: false,
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: "0.75rem",
        lg: "2rem",
      },
    },
    extend: {
      colors: {
        primary: "#0045ff",
        secondary: "#ff2e2e",
        tertiary: "#deede4",
        "tertiary-dark": "#60866f",
        grey: "#e8e8e8",
      },
      fontSize: {
        xs: ["0.75rem"], // 12px
        sm: ["1rem"], // 16px
        base: ["1.125rem"], // 18px
        lg: ["1.25rem"], // 20px
        xl: ["1.5rem"], // 24px
        "2xl": ["2.188rem"], // 35px
        "3xl": ["2.813rem"], // 45px
        "4xl": ["3.125rem"], // 50px
        "5xl": ["5.625rem"], // 90px
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      transitionDuration: ["active"],
    },
  },
  plugins: [],
};
