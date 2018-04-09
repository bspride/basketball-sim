'use strict';
const simulator = require('./core/gameSimulator.js');
const daoFactory = require('./core/daoFactory.js');

console.log('Loading function');

exports.handler = async function(event, context) {
    const message = event.Records[0].Sns.Message;
    const messageAttr = event.Records[0].Sns.MessageAttributes;

    execute(messageAttr.league.value, messageAttr.homeTeam.value, messageAttr.awayTeam.value);

    callback(null, message);
}

function execute(leagueId, homeTeamId, awayTeamId) {
    // fetch team info from dynamo db
    await daoFactory.getTeamDao().get(leagueId, homeTeamId, awayTeamId);
    // run simulation
    var winningTeam = simulator.simulate(homeTeamId, awayTeamId);
    // update dynamo with results
    console.log(winningTeam);
}