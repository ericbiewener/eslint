module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "ericbiewener",
    "prettier/@typescript-eslint"
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },
  rules: {
    indent: "off",
    "no-unused-expression": 0,
    "no-use-before-define": 0,
    "no-unused-vars": 0,
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-use-before-define": [
      2,
      { functions: false, classes: false }
    ]
  }
};
