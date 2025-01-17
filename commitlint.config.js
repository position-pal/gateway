module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [1, "always", 100],
    "body-max-line-length": [1, "always", Infinity],
    "footer-leading-blank": [1, "always"],
    "footer-max-line-length": [1, "always", Infinity],
  },
};
