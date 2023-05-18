/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "#ffffff",
      primary: "hsl(var(--color-primary) / <alpha-value>)",
      secondary: "hsl(var(--color-secondary) / <alpha-value>)",
      accent: "hsl(var(--color-accent-bg) / <alpha-value>)",
      page: "hsl(var(--color-page-bg) / <alpha-value>)",
      muted: "hsl(var(--color-muted) / <alpha-value>)",
    },
    fontFamily: {
      sans: ["Questrial", "sans-serif"],
      cursive: ["Lilita One", "cursive"],
    },
    extend: {},
  },
  plugins: [],
};
