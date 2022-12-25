module.exports = {
  env: { browser: true, es2017: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:sonarjs/recommended",
    "prettier",
  ],
  ignorePatterns: ["*.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: 2020, sourceType: "module" },
  plugins: ["@typescript-eslint", "svelte3", "simple-import-sort", "sonarjs"],
  overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
  root: true,
  rules: {
    "no-await-in-loop": "warn",
    "no-return-await": "warn",
    "require-await": "warn",
    "simple-import-sort/imports": "warn",
  },
  settings: { "svelte3/typescript": () => require("typescript") },
};
