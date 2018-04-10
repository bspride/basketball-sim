var Dao = require('../../core/dao.js')
var expect = require('chai').expect
const tableName = "test"
var dao

describe ('dao', function () {
  beforeEach (() => {
    dao = new Dao(tableName)
  })

  it ('should have tablename set', function () {
    expect(dao.tableName).to.equal(tableName)
  })
})