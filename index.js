module.exports = {
  extends: ['@antfu', 'plugin:markdown/recommended'],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/brace-style': ['error', '1tbs'],
    'brace-style': ['error', '1tbs'],
    'prettier/prettier': 'error',
  },
}
