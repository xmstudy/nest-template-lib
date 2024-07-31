module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'security',
    'sonarjs',
    'simple-import-sort',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'plugin:security/recommended',
  ],
  rules: {
    'no-unused-vars': 'off',
    indent: ['error', 2], // 通常 Node.js 项目使用2个空格缩进，如果需要可以调整
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'double'], // 使用双引号
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    semi: ['error', 'always'],
    'no-nested-ternary': 'off',
    'import/prefer-default-export': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js'],
      },
    },
  },
};
