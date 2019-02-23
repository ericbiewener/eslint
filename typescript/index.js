exports = {
  extends: ["plugin:@typescript-eslint/recommended", "ericbiewener"],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  }
};
