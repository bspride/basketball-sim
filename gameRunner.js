'use strict'
const startup = require('./startup');
const DaoFactory = require("./core/daoFactory.js");

console.log('Loading GameRunner function')
const table = process.env.TABLE_NAME ? process.env.TABLE_NAME : 'LeagueTable'

// TODO: Just using for testing
class TempClient {
  batchGet(params) {
    return new Promise((resolve) => {
      let data = {
        Items: []
      }
      for(let i = 0; i < 10; i++) {
        data.Items.push({
          home: Math.floor(Math.random(i) * 10),
          away: Math.floor(Math.random(i) * 10)
        })
      }
      resolve(data.Items)
    })
  }
}

exports.handler = async function(event, context) {
  run(startup.resolveDependency(DaoFactory, TempClient));
}

function run (daoFactory) {
  // Query Dynamo for games that need simulating
  daoFactory
    .getTeamDao()
    .getAllTeamsToSimulate()
    .then(league => {
      // TODO: Change to simulate league against changed or added teams
      league.forEach(teams => {
        console.log(`SNS Topic - ${table}`)
        console.log(`Home: ${teams.home} Away: ${teams.away}`)
      });
    });
}
