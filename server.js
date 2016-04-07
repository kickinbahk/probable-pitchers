var express = require('express')
var app = express()
var http = require('http').Server(app)
var _ = require('lodash')
var appjs = require('./app.js')

var PORT = 3000

app.use(express.static(`${__dirname}/public`))

var data = appjs
console.log(data)

http.listen(PORT, function () {
  console.log(`Server listening on ${PORT}`)
})
