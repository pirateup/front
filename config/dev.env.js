var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: '"AIzaSyAf7fXslha_uCeyFFGp2ub2BGxa9OsQphM"'
})
