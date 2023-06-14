/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            'overpass': ['Overpass', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
};
