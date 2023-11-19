/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            'overpass': ['Overpass', 'sans-serif'],
        },
        screens: {
            'sm': { 'max': '1240px' },
            'nrm': { 'min': '1041px' },
        },
        extend: {},
    },
    plugins: [],
}

