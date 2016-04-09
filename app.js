var Probables = require('mlbprobablepitchers')
var _ = require('lodash')

var date = '2016/04/10' // 2016/04/06 (yyyy/mm/dd)

module.exports = function () {
  return new Promise(function (resolve, reject) {
    Probables.get(date, function (error, matchup) {
      if (error) {
        console.log('error')
      } else {
        console.log('Data fetched')
        resolve(matchup)
      }
    })
  }).then(function (data) {
    var awayPitchers = []
    var homePitchers = []
    var allPitchers = []
    console.log(data.pitchers)
    _.mapValues(data, function (p) {
      awayPitchers.push(p.pitchers.away.name)
      homePitchers.push(p.pitchers.home.name)
    })
    // awayPitchers = [ 'Steven Wright',
  // 'Jeremy Hellickson',
  // 'Jeff Locke',
  // 'Max Scherzer',
  // 'Williams Perez',
  // 'Vance Worley',
  // 'Jose Quintana',
  // 'Jimmy Nelson',
  // 'Edinson Volquez',
  // 'Jered Weaver',
  // 'Johnny Cueto',
  // 'Shelby Miller',
  // 'Felix Hernandez',
  // 'Chad Bettis',
  // 'Justin Verlander' ]
  //   homePitchers = [ 'Marco Estrada',
  // 'Matt Harvey',
  // 'Jarred Cosart',
  // 'Adam Wainwright',
  // 'Jake Odorizzi',
  // 'Josh Tomlin',
  // 'Dallas Keuchel',
  // 'Ricky Nolasco',
  // 'Martin Perez',
  // 'Scott Kazmir',
  // 'Jake Arrieta',
  // 'Chris Bassitt',
  // 'Tyson Ross',
  // 'Masahiro Tanaka',
  // undefined ]

    console.log(awayPitchers)
    console.log(homePitchers)
    for (var i = 0; i < awayPitchers.length; i += 1) {
      allPitchers.push(awayPitchers[i])
      allPitchers.push(homePitchers[i])
    }
    return allPitchers
  }).then(function (pitchers) {
    var pitchersGoing = pitchers
    console.log(pitchersGoing)
  })
}
