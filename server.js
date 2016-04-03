var express = require('express')
var app = express()

var $PORT = 3000

app.get('/', function (req, res) {
  res.send(`It's time for Baseball`)
})

app.listen($PORT, function () {
  console.log(`Server listening on ${$PORT}`)
})
