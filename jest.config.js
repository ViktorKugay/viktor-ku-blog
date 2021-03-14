module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/tests/setupTests.ts'
  ],
  testMatch: [
    '<rootDir>/**/__tests__/**/*.{js,jsx,mjs,ts,tsx}', 
    '<rootDir>/**/?(*.)(test).{js,jsx,mjs,ts,tsx}'
  ],
  moduleFileExtensions: [
    'js', 
    'json', 
    'ts', 
    'tsx'
  ],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
};
