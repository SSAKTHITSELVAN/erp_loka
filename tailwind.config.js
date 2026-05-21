/** @type {import('tailwindcss').Config} */
// Tailwind v4 — all theme tokens are defined in index.css via @theme {}
// This file only needs to exist for tooling compatibility (IDE, eslint-plugin, etc.)
// Do NOT define colors/fonts here — they will conflict with @theme in CSS.
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
};