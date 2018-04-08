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

    get(leagueId, homeTeamId, awayTeamId) {
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
        
        this.client.batchGet(params, function(err, data) {
            if (err) {
                console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                return data;
            }
        })
    }
}