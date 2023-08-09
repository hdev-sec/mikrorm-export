// const librarySchemas = require('./index').default;
import Entities from './index'

// console.log(librarySchemas[0]._meta.properties);

exports.default = {
  type: 'mysql',
  host: 'localhost',
  dbName: 'test_inner_export',
  password: 'mysqlroot',
  entities: Entities,
  schemaGenerator: {
    disableForeignKeys: true,
  }
};
