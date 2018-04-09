'use strict'
var Dao = require('./dao.js')

const LEAGUE_TABLE_NAME = process.env.TABLE_NAME

module.exports = {
  getTeamDao: function getTeamDao () {
    return new Dao(LEAGUE_TABLE_NAME)
  }
}
