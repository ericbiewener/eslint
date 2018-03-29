module.exports = {
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2017,
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2,
      {SwitchCase: 1}
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'no-console': 0,
    'prefer-const': 2,
    'object-curly-spacing': [
      'error',
      'never'
    ]
  }
}
