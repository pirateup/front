var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // new key specialy for this app
  // dev mode
  API_KEY: '"AIzaSyBlUfxiOjIHmsxQA_nnx1d-daSuSri6BeI"',
})