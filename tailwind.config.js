/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			boxShadow: {
				glow: '0 0 50px #1D1A36'
			},
			colors: {
				light: '#fff',
				darkGreen: {
					100: '#1E2423'
				},
				darkBlue: {
					100: '#121225'
				},
				primaryOrange: {
					100: '#f94d54',
					200: '#39FF14',
					300: '#fe855d'
				},
				myGrey: {
					// 100: '#5E6171',
					100: '#C4BEC3',
					200: '#38475D',
					300: '#C4BEC3',
					400: '#67697A'
				},
				richBlack: {
					100: '#030714'
				},
				darkPurple: {
					100: '#100C28',
					200: '#45287D',
					300: '#F676FD'
				},
				lightPurple: {
					100: '#F6F1FE'
				},
				space: {
					100: '#1D1A36'
				}
			},
			fontFamily: {
				playfair: ['Playfair Display', 'serif']
			}
		}
	},
	variants: {
		extend: {
			animation: ['responsive', 'motion-safe', 'motion-reduce'],
			transitionDelay: ['responsive', 'motion-safe', 'motion-reduce']
		}
	},
	plugins: []
};
