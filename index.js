module.exports = {
  extends: [
    '@antfu',
    'plugin:markdown/recommended',
    'plugin:prettier/recommended',
    'plugin:yml/standard',
    'plugin:yml/prettier',
  ],
  overrides: [
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
    },
  ],
  rules: {
    '@typescript-eslint/brace-style': ['error', '1tbs'],
    'brace-style': ['error', '1tbs'],
  },
}
