var Probables = require('mlbprobablepitchers')

var date = '2016/04/06' // 2016/04/06 (yyyy/mm/dd)
var probablePitchers = []

Probables.get(date, function (error, matchup) {
  probablePitchers.push(matchup)
})
