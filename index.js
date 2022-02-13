module.exports = {
  extends: [
    '@antfu',
    'plugin:markdown/recommended',
    'plugin:md/recommended',
    'plugin:prettier/recommended',
    'plugin:yml/standard',
    'plugin:yml/prettier',
  ],
  overrides: [
    {
      files: ['*.md'],
      parser: 'markdown-eslint-parser',
      rules: {
        'prettier/prettier': [
          'error',
          // Important to force prettier to use "markdown" parser - otherwise it wouldn't be able to parse *.md files.
          // You also can configure other options supported by prettier here - "prose-wrap" is
          // particularly useful for *.md files
          { parser: 'markdown' },
        ],
      },
    },
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
