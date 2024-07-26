import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/data/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/shared/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				onyx: '#292D32',
				slate: '#404B52',
				periwinkle: '#9197B3',
				graphite: '#7E7E7E',
				mist: '#B5B7C0',
				pearl: '#EEEEEE',
				frost: '#FAFBFF',
				snow: '#F5F5F5',
				amethyst: '#5932EA',
				scarlet: '#DF0404',
				blush: '#FFC5C5',
				jade: '#008767',
				mint: '#00B087',
				aqua: '#16C098',
			},
		},
	},
	plugins: [],
}

export default config
