var express = require('express')
var app = express()
var http = require('http').Server(app)
var appjs = require('./app.js')
var Probables = require('mlbprobablepitchers')

var PORT = 3000

app.use(express.static(`${__dirname}/public`))

// var data = appjs
// console.log(data)

var date = '2016/04/08' // 2016/04/06 (yyyy/mm/dd)
var probablePitchers = []

Probables.get(date, function (error, matchup) {
  if (error) {
    console.log('error')
  } else {
    console.log(matchup)
  }
})

http.listen(PORT, function () {
  console.log(`Server listening on ${PORT}`)
})
