'use strict';
const simulator = require('./core/gameSimulator.js');

console.log('Loading function');
var table = process.env.TABLE_NAME;

exports.handler = (event, context, callback) => {
    const message = event.Records[0].Sns.Message;
    callback(null, message);
}

function execute(homeTeamId, awayTeamId) {
    // fetch team info from dynamo db
    // run simulation
    simulator.simulate(homeTeamId, awayTeamId);
    // update dynamo with results
}