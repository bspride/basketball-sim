var AWS = require('aws-sdk')
const DaoFactory = require('./core/daoFactory.js');

const REGION = process.env.AWS_REGION
AWS.config.update({
  region: REGION
})

const classes = {
  DaoFactory: (dependency = AWS.DynamoDB.DocumentClient) =>  {
    return new DaoFactory(new dependency())
  },
}

module.exports = {
  resolveDependency: (resolvingClass, dependency) => {
    if(typeof dependency === 'undefined') {
      return classes[resolvingClass.name]()
    } else {
      return classes[resolvingClass.name](dependency)
    }
  }
}
