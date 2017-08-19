// http://eslint.org/docs/user-guide/configuring

module.exports =
{
    root: true,
    parser: 'babel-eslint',
    parserOptions:
    {
        sourceType: 'module'
    },
    env:
    {
        browser: true,
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: ['html'],
    // check if imports actually resolve
    'settings':
    {
        'import/resolver':
        {
            'webpack':
            {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    'rules':
    {
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
          'js': 'never',
          'vue': 'never'
        }],
        // preferences
        "semi": ["error", "always"],
        'brace-style': ["error", "allman", { "allowSingleLine": true }],
        // readability
        "space-before-function-paren": ["error","always"],
        "indent": ["error", 4],
        // good ol' Unix style
        "eol-last": ["error", "always"],
        "no-trailing-spaces": [1],
        // we're not morons
        "no-plusplus": 0,
        // guards code quality
        "no-param-reassign": ["error", { "props": false }],
        "no-unused-vars": [1],
        // no console should ever make it to production, but usefull for debugging
        "no-console": ["warn"],
        // wtf?
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
          'optionalDependencies': ['test/unit/index.js']
        }],
        // quite buggy option
        "import/imports-first": [0],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
};
