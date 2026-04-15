import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#F4FBFA",
          100: "#E6F6F2",
          200: "#9EC8B9",
          300: "#7DAA9D",
          400: "#5C8374",
          500: "#3F6A60",
          600: "#2E5755",
          700: "#1B4242",
          800: "#12363A",
          900: "#092635",
          950: "#071C25",
        },
      },
    },
  },
  plugins: [],
};

export default config;
