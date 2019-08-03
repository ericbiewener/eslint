module.exports = {
  extends: './base/index.js',
  env: {
    commonjs: true,
  },
  rules: {
    'no-unused-expression': 0,
  },
  parserOptions: {
    requireConfigFile: false,
  },
}
