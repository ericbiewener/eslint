module.exports = {
  extends: [`eslint:recommended`, `plugin:react/recommended`, `prettier`],
  parser: `babel-eslint`,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2017,
    sourceType: `module`,
  },
  rules: {
    indent: [`error`, 2, { SwitchCase: 1 }],
    "linebreak-style": [`error`, `unix`],
    quotes: [`error`, `backtick`],
    semi: [`error`, `never`],
    "no-console": `off`,
    "prefer-const": `error`,
    "object-curly-spacing": [`error`, `always`],
    "comma-dangle": [`error`, `always-multiline`],
    "no-cond-assign": `off`,
    "no-throw-literal": `error`,
    "no-unused-vars": [`error`, { ignoreRestSiblings: true }],
    "no-unused-expressions": `error`,
    "no-unexpected-multiline": `error`,
    "max-len": [
      `error`,
      {
        code: 100,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],

    // React
    "react/prop-types": 0,
  },
  overrides: [
    {
      files: [`**/*.test.{ts,tsx,js,jsx}`, `**/testUtils.{ts,tsx,js,jsx}`],
      env: {
        jest: true,
      },
      rules: {
        "no-empty": `off`,
        "max-nested-callbacks": `off`,
        "@typescript-eslint/no-explicit-any": `off`,
        "@typescript-eslint/no-object-literal-type-assertion": `off`,
        "@typescript-eslint/no-non-null-assertion": `off`,
        "@typescript-eslint/ban-ts-ignore": `off`,
      },
    },
  ],
}
