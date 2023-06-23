/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  semi: true,
  tabWidth: 2,
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'all',
  jsxSingleQuote: true,
  bracketSpacing: true,
  useTabs: false,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
};

module.exports = config;
