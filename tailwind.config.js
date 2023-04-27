/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        accent: "var(--accent)",
        info: "var(--info)",
        success: "var(--success)",
        warn: "var(--warn)",
        error: "var(--error)",
      },
    },
  },
  plugins: [],
};
