/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#080808',
				secondary: '#0f0f0f',
				card: '#141414',
				'card-hover': '#1a1a1a',
				border: '#1e1e1e',
				'border-hover': '#2e2e2e',
				'text-primary': '#f0f0f0',
				'text-secondary': '#888888',
				'text-muted': '#555555',
				accent: '#00d4aa',
				'accent-hover': '#00f0c0',
				'accent-glow': 'rgba(0, 212, 170, 0.15)',
				'tag-php': '#ff6b6b',
				'tag-js': '#f7df1e',
				'tag-wp': '#21759b',
			},
			fontFamily: {
				display: ['"Bebas Neue"', 'sans-serif'],
				body: ['"DM Sans"', 'sans-serif'],
			},
			borderRadius: {
				'card': '8px',
				'badge': '4px',
				'btn': '2px',
			},
			animation: {
				'pulse-slow': 'pulse-slow 3s infinite ease-in-out',
			},
			keyframes: {
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
			},
		},
	},
	plugins: [],
}
