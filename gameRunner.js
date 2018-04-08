'use strict';

console.log('Loading GameRunner function');
var table = process.env.TABLE_NAME;

exports.handler = (event, context, callback) => {
    callback(null, null)
}

function run() {
    // Query Dynamo for games that need simulating
    // Write to SNS topic
}