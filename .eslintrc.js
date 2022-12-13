module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "standard"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
