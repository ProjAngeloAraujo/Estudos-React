npm create vite@latest nome-do-projeto --template react
npm install
npm install -D tailwindcss@3.4.17 postcss autoprefixer
npx tailwindcss@3.4.17 init -p
npm run dev

tailwind.config.js:
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


src/index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;
