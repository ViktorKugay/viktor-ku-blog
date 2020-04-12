module.exports = {
  collectCoverageFrom: ['<rootDir>/packages/*/src/**/*.{js,jsx,mjs}', '!<rootDir>/node_modules/'],
  setupFiles: [require.resolve('./tests/setupTests')],
  testMatch: [
    '<rootDir>/packages/**/__tests__/**/*.{js,jsx,mjs,ts,tsx}',
    '<rootDir>/packages/**/?(*.)(test).{js,jsx,mjs,ts,tsx}',
  ],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs|ts|tsx)$': require.resolve('babel-jest'),
    '^.+\\.css$': require.resolve('./tests/cssTransform'),
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': require.resolve('./tests/fileTransform'),
  },
  moduleFileExtensions: ['web.js', 'js', 'json', 'web.jsx', 'jsx', 'node', 'mjs', 'ts', 'tsx'],
  setupFiles: ['<rootDir>/tests/matchMedia.js'],
};
