/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
      extend: {
        colors: {
          primary: "#148E08",
          secondary: '#3C3D37',
          tertiary:"#FFD700 ",
          quaternary:"#D7D3BF",
          quinary:"#414A2B",
          
          dark: "#ffcf22",
        },
        container: {
          center: true,
          padding: {
            DEFAULT: "1rem",
            sm: "2rem",
            lg: "4rem",
            xl: "5rem",
            "2xl": "6rem",
          },
        },
      },
    },
  plugins: [
    ('@tailwindcss/forms'),
    ('@tailwindcss/typography'),],
}

