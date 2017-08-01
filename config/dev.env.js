var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // new key specialy for this app
  // dev mode
  API_KEY: '"AIzaSyB9BRkAITRcGLumUQsMyDHMk98_HaR0-q8"'
})