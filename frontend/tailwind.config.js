/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                caveat: ["var(--font-caveat)", "cursive"],
                bricolage: ["var(--font-bricolage)", "sans-serif"],
                bowly:["var(--font-bowly)"]
            },
        },
    },
    plugins: [],
};
