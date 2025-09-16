/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: { bg: "#0B0B0B", fg: "#FFFFFF", accent: "#ffc700" },
      borderRadius: { xl2: "1rem" },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.35)",
        "inner-top": "inset 0 1px rgba(255,255,255,.08)",
        "inner-bottom": "inset 0 -1px rgba(0,0,0,.35)"
      },
      keyframes: {
        shine: { "0%": { transform:"translateX(-150%)" }, "100%": { transform:"translateX(150%)" } },
        float: { "0%,100%": { transform:"translateY(0)" }, "50%": { transform:"translateY(-6px)" } }
      },
      animation: { shine: "shine 1.6s linear infinite", float: "float 6s ease-in-out infinite" }
    }
  },
  plugins: []
};
