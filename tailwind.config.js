/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('https://your-image-url.com/image.jpg')",
      },
      colors: {
        primary: "#13357B", // Example of primary blue color
        secndoary: "#3B548F",
        darkPrimary: "#14141F",
      },
      
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInUp: {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideInUp: "slideInUp 0.5s ease-in-out",
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
        'merriweather': ['Merriweather', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
        
      },
      
    },
  },
  plugins: [],
};
