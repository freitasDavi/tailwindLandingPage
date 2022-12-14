/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      colors: {
        primary: "#3E82FC",
        lightrimary: "#ECF3FF",
      },
      backgroundImage: {
        Hero:"url('/src/assets/Background.png')",
      }
      // backgroundImage: {
      //   Hero: "url('assets/Background.png')"
      // }
    },
  },
  plugins: [],
}
