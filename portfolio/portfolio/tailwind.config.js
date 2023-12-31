/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            'green': {
                200: '#dbebce',
                600: '#748c5e',
                800: '#28502e',
                900: '#1c3b21'
            },
            'orange': {
                700: '#ff8c00',
                800: '#c76e00',
            },
            'white': '#fcfcfc',
        },
        fontFamily: {
            'sans': ['Inter'],
            'serif': ['Vollkorn'],
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
