'use strict'
const startup = require('./startup.js')
const simulator = require('./core/gameSimulator.js')
const DaoFactory = require('./core/daoFactory.js')

console.log('Loading function')

exports.handler = async function (event, context) {
  const messageAttr = event.Records[0].Sns.MessageAttributes

  execute(messageAttr.League.Value, messageAttr.HomeTeam.Value, messageAttr.AwayTeam.Value)
}

function execute (leagueId, homeTeamId, awayTeamId) {
  // fetch team info from dynamo db
  startup.resolveDependency(DaoFactory)
    .getTeamDao()
    .get(leagueId, homeTeamId, awayTeamId)
  // run simulation
  var winningTeam = simulator.simulate(homeTeamId, awayTeamId)
  // update dynamo with results
  console.log(winningTeam)
}
