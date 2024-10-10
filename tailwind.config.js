/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: false, // Disable default themes
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#570df8",
          secondary: "#f000b8",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
        dark: {
          primary: "#1f2937",
          secondary: "#374151",
          accent: "#1fb2a5",
          neutral: "#111827",
          "base-100": "#1a202c",
        },
      },
    ],
  },
};
