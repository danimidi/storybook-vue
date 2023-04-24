module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "plugin:prettier/recommended", "plugin:storybook/recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./jsconfig.json"
  },
  rules: {
    "linebreak-style": "off",
    "prettier/prettier": ["error", {
      endOfLine: "auto",
      singleQuote: true,
      semi: true
    }],
    "vue/multi-word-component-names": "off"
  }
};