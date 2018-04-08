'use strict';
const simulator = require('./core/gameSimulator.js');
const daoFactory = require('./core/daoFactory.js');

console.log('Loading function');

exports.handler = (event, context, callback) => {
    const message = event.Records[0].Sns.Message;
    callback(null, message);
}

function execute(homeTeamId, awayTeamId) {
    // fetch team info from dynamo db
    daoFactory.getTeamDao().get(homeTeamId);
    daoFactory.getTeamDao().get(awayTeamId);
    // run simulation
    simulator.simulate(homeTeamId, awayTeamId);
    // update dynamo with results
}