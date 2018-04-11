'use strict'
var Dao = require('./dao.js')

const LEAGUE_TABLE_NAME = process.env.TABLE_NAME

module.exports = class DaoFactory {
  constructor(client) {
    this.client = client;
  }

  getTeamDao () {
    return new Dao(this.client, LEAGUE_TABLE_NAME)
  }
}
