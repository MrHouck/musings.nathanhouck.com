const cssVariables = [
  'bg',
  'border',
  'nav-button',
  'primary-text',
  'secondary-text',
  'tertiary-text',
  'logo',
  'active',
  'background-text',
  'button-highlight'
  // Add any other CSS variable names you have (without the --)
];

const colorsFromCSSVars = Object.fromEntries(
  cssVariables.map(name => [name, `var(--${name})`])
);



module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',  // Make sure these paths are correct
    './src/styles/**/*.{css}',
  ],
  theme: {
    extend: {
      colors: colorsFromCSSVars
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}