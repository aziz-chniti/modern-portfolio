/** @type {import('tailwindcss').Config} */
export default{
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}", // Adjust paths to match your project
  ],
  theme: {
    extend: {
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(1.2)' },
          '20%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.2)' },
          '40%': { transform: 'scale(1)' },
        },
      },
      animation: {
        heartbeat: 'heartbeat 1.5s infinite',
      },
      colors: {
        primary: "#854ce6",
        'primary-hover': "#3a1682ea",
        "primary-light": "#a674f3",
        "primary-dark": "#5d2bc1",

        background: "#0f0f1b",
        "background-light": "#140c1c",
        "background-dark": "#090915",

        text: "#ffffff",
        "text-muted": "#b0b0c3",

        border: "#262630",

        "accent-1": "#1f1f2e",
        "accent-2": "#2a2a40",
      },
      fontFamily: {
        main: ["Poppins", "sans-serif"],
      },
      fontSize: {
        base: "16px",
        lg: "20px",
        xl: "28px",
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "20px",
      },
      boxShadow: {
        bottom: "0 8px 30px #3a1682ea",
        glow: '0px 0px 400px 100px #854ce6',
        "glow-light": '0px 0px 300px 90px #844ce6af',
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
      backgroundImage: {
        "text-gradient": "linear-gradient(90deg, #5d2bc1, #e9d5ff)",
        "gradient-primary": "linear-gradient(90deg, #854ce6, #3a1682)",
        "gradient-primary-l": "linear-gradient(90deg, #3a1682, #854ce6)",
      },
    },
  },
  plugins: [],
};