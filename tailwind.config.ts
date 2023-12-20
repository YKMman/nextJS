import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-bg': "url('/bg.png')",
        'hero-bg-1024': "url('/bg-1024.png')",
        'hero-bg-768': "url('/bg-768.png')",
        'hero-bg-360': "url('/bg-360.png')",
        'card': "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 22.09%, rgba(0, 0, 0, 0.62) 71.8%)"
      }),
      boxShadow: {
        'custom': '-3px 6px 14px 0px rgba(0, 0, 0, 0.10), -10px 24px 26px 0px rgba(0, 0, 0, 0.09), -23px 53px 35px 0px rgba(0, 0, 0, 0.05), -40px 95px 41px 0px rgba(0, 0, 0, 0.01), -63px 148px 45px 0px rgba(0, 0, 0, 0.00)',
      },
      screens: {
        '2xl': {max: "1920px"},
        'xl': {max: "1440px"},
        "lg": {max: "1024px"},
        "md": {max: "768px"},
        "sm": {max: "360px"},

        'min2xl': {min: "1921px"},
        'minxl': {min: "1441px"},
        "minlg": {min: "1025px"},
        "minmd": {min: "769px"},
        "minsm": {min: "361px"}
      }
    },
  },
  plugins: [],
}
export default config

// background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 22.09%, rgba(0, 0, 0, 0.62) 71.8%);