'use strict';
var Dao = require('./dao.js');

const TEAM_TABLE_NAME = process.env.TABLE_NAME;

module.exports = {
    getTeamDao: function getTeamDao() {
        return new Dao(TEAM_TABLE_NAME);
    }
}