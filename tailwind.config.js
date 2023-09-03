/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        hospital: {
          primary: "#0ea5e9",
          secondary: '#14b8a6',
          success: "#1BA175",
          error: "#E01F28",
          "base-100": "#FFFFFF",
        },
      }

    ]
  },
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px', 
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  
}
