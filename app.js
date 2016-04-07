var Probables = require('mlbprobablepitchers')

var date = '2016/04/08' // 2016/04/06 (yyyy/mm/dd)

module.exports = new Promise(function (resolve, reject) {
  // Probables.get(date, function (error, matchup) {
  //   if (error) {
  //     console.log('error')
  //   } else {
  //     console.log('Data fetched')
  //     return matchup
  //   }
  // })
  var gameJSON = {
    'id': '2011/07/23/houmlb-chnmlb-1',
    'startTime': '2011-07-23T12:05:00',
    'easternTime': '2011-07-23T13:05:00',
    'timezone': 'CDT',
    'teams': {
      'away': '112',
      'home': '117'
    },
    'pitchers': {
      'away': {
        'id': '434643',
        'name': 'Wandy Rodriguez',
        'throws': 'LHP'
      },
      'home': {
        'id': '448694',
        'name': 'Randy Wells',
        'throws': 'RHP'
      }
    }
  }
  resolve(gameJSON)
})
