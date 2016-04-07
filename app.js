var Probables = require('mlbprobablepitchers')

var date = '2016/04/06' // 2016/04/06 (yyyy/mm/dd)

var data = Probables.get(date, function (error, matchup) {
  if (error) {
    console.log('error')
  } else {
    return matchup
  }
})

module.exports = data
