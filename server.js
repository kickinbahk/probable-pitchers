var express = require('express')
var app = express()
var http = require('http').Server(app)

var PORT = 3000

app.use(express.static(`${__dirname}/public`))

http.listen(PORT, function () {
  console.log(`Server listening on ${PORT}`)
})
