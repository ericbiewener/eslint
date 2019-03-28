module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'ericbiewener'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
  },
}
