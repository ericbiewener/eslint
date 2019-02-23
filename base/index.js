exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2017,
    sourceType: "module"
  },
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single", { avoidEscape: true }],
    semi: ["error", "never"],
    "no-console": 0,
    "prefer-const": 2,
    "object-curly-spacing": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "no-cond-assign": 0,
    "no-throw-literal": 2,
    "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    "no-unused-expression": 2,

    // React
    "react/prop-types": 0
  }
};
