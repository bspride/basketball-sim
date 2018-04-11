'use strict'

module.exports = class Dao {
  constructor (client, tableName) {
    // create DynamoDB service object
    this.client = client
    this.tableName = tableName
  }

  async get (leagueId, homeTeamId, awayTeamId) {
    // TODO: Move this to a Dynamo helper object?
    var params = {}
    params[this.tableName] = {
      Keys: [
        {
          HashKey: leagueId,
          RangeKey: homeTeamId
        },
        {
          HashKey: leagueId,
          RangeKey: awayTeamId
        }
      ]
    }

    var request

    try {
      request = await this.client.batchGet(params).promise()
    } catch (err) {
      console.error('Unable to read item. Error JSON:', JSON.stringify(err, null, 2))
    }

    return request
  }

  async getAllTeamsToSimulate() {
    let params = {}
    let teams = []
    let leagueId = 1;
    // TODO: Are we going to have a results table to check games needing simulation?
    params[this.tableName] = {
      Keys: [
        {
          HashKey: leagueId
        }
      ]
    }
    console.log("Getting teams...")
    try {
      teams = await this.client.batchGet(params);
    } catch (err) {
      console.error('Unable to read item. Error JSON:', JSON.stringify(err, null, 2))
    }

    return teams
  }
}
