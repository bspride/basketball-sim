var startup = require('../startup.js');
var DaoFactory = require('../core/daoFactory.js');
var expect = require('chai').expect;

class mockClient {
  constructor(){}
}

describe('startup', () => {
  it('should resolve daoFactory', () => {
    let daoFactory = startup.resolveDependency(DaoFactory)
    expect(daoFactory.constructor.name).to.equal('DaoFactory')
  })

  it('should resolve daoFactory client', () => {
    let daoFactory = startup.resolveDependency(DaoFactory)
    expect(daoFactory.client.constructor.name).to.equal('DocumentClient')
  })

  it('should resolve daoFactory client to supplied client', () => {
    let daoFactory = startup.resolveDependency(DaoFactory, mockClient)
    expect(daoFactory.client.constructor.name).to.equal('mockClient')
  })
});