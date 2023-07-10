const librarySchemas = require('./index').default

exports.default = {
  type: 'mysql',
  host: 'localhost',
  dbName: 'test_inner_export',
  password: 'mysqlroot',
  entities: librarySchemas,
  schemaGenerator: {
    disableForeignKeys: true,
  }
}
