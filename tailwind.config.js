/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				light: '#fff',
				darkGreen: {
					100: '#1E2423'
				},
				eerieBlack: {
					50: '#1e2221',
					100: '#202425',
					200: '#353E3D',
					300: '#2A3030'
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
