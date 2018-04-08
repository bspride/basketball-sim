'use strict';

console.log('Loading function');
var table = process.env.TABLE_NAME;

exports.handler = (event, context, callback) => {
    const message = event.Records[0].Sns.Message;
    callback(null, message);
}

function GameSim(home, away) {
    // fetch team info from dynamo db

    // run simulation
    // update dynamo with results
}