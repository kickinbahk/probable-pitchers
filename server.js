var express = require('express')
var app = express()
var http = require('http').Server(app)
var _ = require('lodash')
var appjs = require('./app.js')

var PORT = 3000

app.use(express.static(`${__dirname}/public`))

appjs()
// var gameData = appjs

// gameData.then(function (data) {
//   var allPitchers = []
//   _.mapValues(data, function (p) {
//     console.log(p.pitchers.away.name)
//     allPitchers.push(p.pitchers)
//   })
//   console.log(allPitchers)
//   return allPitchers
// }).then(function (pitchers) {
//   var pitchersGoing = _.mapValues(pitchers, 'name')
//   console.log(pitchersGoing)
// })

http.listen(PORT, function () {
  console.log(`Server listening on ${PORT}`)
})
