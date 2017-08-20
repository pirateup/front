// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    "semi": ["error", "always"],
    "eol-last": ["error", "always"],
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    "indent": ["error", 4],
    "no-unused-vars": [1],
    "no-console": ["warn"],
    "no-trailing-spaces": [1],
    'brace-style': ["error", "allman", { "allowSingleLine": true }],
    "space-before-function-paren": ["error","always"],
    "no-param-reassign": ["error", { "props": false }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    "import/imports-first": [0],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
