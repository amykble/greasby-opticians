module.exports = {
	purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
	theme: {
		extend: {
			colors: {
				greasby: '#4B698D',
				'greasby-light': '#6082ab',
			},
			spacing: {
				'05': '0.125rem',
				'14': '3.5rem',
				'72': '18rem',
				'84': '21rem',
				'96': '24rem',
				'120': '30rem',
				'144': '36rem',
				'192': '48rem',
				'half-view': '50vh',
			},
			fontFamily: {
				body: ['Quicksand', 'Arial', 'sans-serif'],
				title: ['Tahoma', 'Arial', 'sans-serif'],
			},
			boxShadow: {
				r:
					'1px 0 3px 0 rgba(0, 0, 0, 0.1), 1px 0 2px 0 rgba(0, 0, 0, 0.06)', // right
				'r-md':
					'4px 0 6px -1px rgba(0, 0, 0, 0.1), 2px 0 4px -1px rgba(0, 0, 0, 0.06)', // right medium
				'r-lg':
					'10px 0 15px -3px rgba(0, 0, 0, 0.1), 4px 0 6px -2px rgba(0, 0, 0, 0.05)', // right large
			},
			borderRadius: {
				xl: '0.75rem',
				'2xl': '1rem',
				'3xl': '1.25rem',
			},
			opacity: {
				'10': '.1',
				'20': '.2',
				'30': '.3',
				'60': '.6',
				'70': '.7',
				'90': '.9',
			},
		},
	},
	variants: {},
	plugins: [],
};
