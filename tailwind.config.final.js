/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
    content: ["./src/**/*.{html,js}"],
    safelist: [
        {
            pattern: /label-/
        },
        {
            pattern: /tw-m(l|r|t|b|x|y)-/
        },
        {
            pattern: /tw-w-/
        },
        {
            pattern: /tw-p(y|x|l|r|t|b)-/
        },
        {
            pattern: /tw-flex-/
        }
    ],
    theme: {
        extend: {
            colors: {
                red: {
                    500: 'var(--red-500)',
                }
            },
            spacing: {
                1: 'var(--em-spacing-1)',
            },
        },
    },
    plugins: [
        plugin(function ({ addComponents, theme }) {
            addComponents({
                '.default-title-1': {
                    color: 'var(--red-500)',
                    fontSize: 'var(--em-h1-size)',
                    fontStyle: 'normal',
                    lineHeight: '28.8px',
                    fontWeight: 500,
                },
            })
        })
    ],
};
