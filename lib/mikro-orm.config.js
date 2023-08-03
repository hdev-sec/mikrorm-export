const librarySchemas = require('./index').default;

console.log(librarySchemas[0]._meta.properties);

exports.default = {
  type: 'mysql',
  host: 'localhost',
  dbName: 'test_inner_export',
  password: 'mysqlroot',
  entities: librarySchemas,
  schemaGenerator: {
    disableForeignKeys: true,
  }
};
