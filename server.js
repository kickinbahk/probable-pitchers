var express = require('express')
var app = express()
var http = require('http').Server(app)
var _ = require('lodash')
var appjs = require('./app.js')

var PORT = 3000

app.use(express.static(`${__dirname}/public`))

var gameData = appjs

gameData.then(function (data) {
  var allPitchers = []
  console.log(data)
  _.find(data, function (p) {
    allPitchers.push(p.pitchers.away.name)
  })
  console.log(allPitchers)
  return allPitchers
}).then(function (pitchers) {
  console.log(pitchers)
})

http.listen(PORT, function () {
  console.log(`Server listening on ${PORT}`)
})
