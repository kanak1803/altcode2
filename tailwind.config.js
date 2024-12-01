/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        teal: {
          DEFAULT: "#0F4C75", // Base teal
          500: "#0F4C75", // Same as base
          600: "#0E4468", // Slightly darker for hover
          700: "#0C3B5B", // Darker shade
        },
        coral: "#F43F5E", // Coral color
      },
    },
    plugins: [],
  },
};
