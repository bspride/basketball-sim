'use strict'

console.log('Loading GameRunner function')
var table = process.env.TABLE_NAME

exports.handler = async function (event, context) {
  run()
}

function run () {
  // Query Dynamo for games that need simulating
  // Write to SNS topic
  console.log(table)
}
