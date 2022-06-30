/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#2E324D',
        'peach': '#F89A76'
      },
    },
      fontFamily: {
        'raleway':['Raleway', 'sans-serif']
      },
      fontWeight: {
        normal:400,
        bold:700,
      },
      backgroundImage: {
        'bg-blob-useri' : "url('../src/images/blobUseri.svg')",
        'bg-blob-circle' : "url('../src/images/blobCircle.svg')",
      },
      backgroundSize: {
        'cover': "100%",
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
    },
    animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
    }

  },
  plugins: [],
}
