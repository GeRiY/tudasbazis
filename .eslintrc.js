module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    'max-len': ['error', { code: 200, ignoreComments: true }],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'prefer-template': 'off',
    'import/no-mutable-exports': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/no-unused-components': 'off',
    'class-methods-use-this': 'off',
    'no-return-assign': 'off',
    'no-unused-expressions': 'off',
    'prefer-destructuring': ['error', {
      'array': false,
      'object': false
    }, {
      'enforceForRenamedProperties': false
    }],
  },
};
