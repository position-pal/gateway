// eslint configuration (see https://eslint.org/docs/latest/use/configure/configuration-files)
import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
    plugins: {
    }
  },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
];