'use strict';
var Aws = require('aws-sdk');
const REGION = process.env.AWS_REGION;
Aws.config.update({
    region: REGION
});

module.exports = class Dao {
    constructor(tableName) {
        // create DynamoDB service object
        this.client = new AWS.DynamoDB.DocumentClient();
        this.tableName = tableName;
    }

    async get(leagueId, homeTeamId, awayTeamId) {
        // TODO: Move this to a Dynamo helper object?
        var params = {};
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
        };

        var request;

        try {
            request = await this.client.batchGet(params).promise();
        } catch (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        }

        return request;
    }
}