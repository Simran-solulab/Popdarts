/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'blur-gradient': "linear-gradient(90deg, rgba(43, 153, 255, 0) 0%, #2B99FF 10%);",
         'slider-blur':' linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);',
         'hover-container':"url('/images/exploreHoverContainer.png')",
         'confetti-bg' : "url('/images/confettibg.png')"
      },
      fontFamily:{
        denim:['Denim','sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      
    }
  },
  plugins: [],
};
