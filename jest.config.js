module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,mjs}', '!<rootDir>/node_modules/'],
  setupFiles: [require.resolve('./tests/matchMedia'), require.resolve('./tests/setupContent')],
  testMatch: ['<rootDir>/**/__tests__/**/*.{js,jsx,mjs,ts,tsx}', '<rootDir>/**/?(*.)(test).{js,jsx,mjs,ts,tsx}'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs|ts|tsx)$': require.resolve('babel-jest'),
    '^.+\\.css$': require.resolve('./tests/cssTransform'),
  },
  moduleFileExtensions: ['web.js', 'js', 'json', 'web.jsx', 'jsx', 'node', 'mjs', 'ts', 'tsx'],
};
