/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },

      // Background colors
      colors: {
        main: "var(--bg-main)",
        container: "var(--bg-container)",
        table: "var(--bg-table-header)",

        // Text colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
        },

        // Primari
        purple: "var(--color-purple)",
        purpleLight: "var(--color-purple-light)",

        // Draft
        draft: "var(--color-draft)",

        // Danger
        danger: "var(--color-danger-200)",
        dangerLight: "var(--color-danger-100)",
      },
    },
  },
  plugins: [],
};
