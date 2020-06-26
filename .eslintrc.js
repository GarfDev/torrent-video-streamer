module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: ['prettier', 'redux-saga', '@typescript-eslint', 'react-hooks', 'jsx-a11y', 'prettier', 'react'],
  globals: {},
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        trailingComma: 'all',
        singleQuote: true,
        printWidth: 120,
        tabWidth: 2,
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': 'error',
    'no-return-assign': 'warn',
    'array-callback-return': 'error',
    'guard-for-in': 'off',
    'max-len': ['error', { code: 120 }],
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
