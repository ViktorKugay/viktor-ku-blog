module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/__tests__/**/*.{js,jsx,mjs,ts,tsx}', '<rootDir>/**/?(*.)(test).{js,jsx,mjs,ts,tsx}'],
  moduleFileExtensions: ['web.js', 'js', 'json', 'web.jsx', 'jsx', 'node', 'mjs', 'ts', 'tsx'],
};
