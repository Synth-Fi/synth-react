module.exports = {
	purge: ['./src/**/*.{js,jsx}', './public/index.html'],
	// content: [
	//   "./src/**/*.{js,jsx,ts,tsx}",
	// ],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			blue: '#207DFF',
			pink: '#ff49db',
			purple: '#B62EE0',
			white: '#fff',
			yellow: '#FFF620',
			gray: '#8492a6',
			blac: '#000000',
			'gray-light': '#d3dce6',
		},
		fontFamily: {
			Poppins: ['Poppins', 'sans-serif'],
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
			'press-start': ['"Press Start 2P"', 'cursive'],
		},

		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			backgroundImage: {
				'hero-img': 'url(../public/home/hero-img.png)',
				'nav-img': 'url(../public/nav-shadow.png)',
				'mockup-img': 'url(../public/mockup.png)',
				'hero2-img': 'url(../public/home/hero2-img.png)',
			},
			gradientColorStops: (theme) => ({
				primary: '#FF8C00',
				secondary: '#FFA500',
				danger: '#FFD700',
			}),
		},
	},
	plugins: [require('daisyui')],
};