module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['prettier', 'react', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  settings: {
    react: {
      version: '16.13.1',
    },
  },
  globals: {
    Feature: true,
    Scenario: true,
  },
  rules: {
    'no-debugger': ['error'],
    'no-restricted-globals': [2, 'localStorage', 'sessionStorage'],
    'prettier/prettier': ['error'],
    'no-console': ['warn'],
    'no-unneeded-ternary': ['warn', {defaultAssignment: false}],
    'no-confusing-arrow': ['off'],
    'jsx-a11y/no-static-element-interactions': ['warn'],
    'react/prop-types': ['off'],
    'react/require-default-props': ['warn'],
    'react/no-unused-prop-types': ['warn'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-var-requires': 'error',
    'react/require-optimization': ['warn'],
    'react/no-redundant-should-component-update': ['warn'],
    'react/jsx-key': ['warn'],
    'react/prefer-stateless-function': ['warn'],
    'react/jsx-handler-names': ['warn', {eventHandlerPrefix: 'handle', eventHandlerPropPrefix: 'on'}],
    'react/no-direct-mutation-state': ['error'],
    'react/jsx-no-literals': ['warn', {noStrings: false}],
    'react/sort-comp': ['off'],
    'react/no-string-refs': 'error',
    '@typescript-eslint/consistent-type-assertions': ['off'],
    '@typescript-eslint/no-unused-expressions': ['off'],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'react/jsx-no-literals': ['off'],
      },
    },
    {
      files: ['*.js'],
      rules: {
        'no-console': ['off'],
        '@typescript-eslint/no-var-requires': ['off'],
      },
    },
  ],
};
