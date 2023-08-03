const path = require('path');
const dotenv = require('dotenv');
const librarySchemas = require('./lib/index').default;
const MySqlDriver =  require('@mikro-orm/mysql').MySqlDriver;

let envFile = './.env.testing';
if (!!process.env.NODE_ENV) {
  envFile = `./../.env.${process.env.NODE_ENV}`;
}
envFile = path.join(__dirname, envFile);
// console.log(`Reading file: ${envFile}`);
const env = dotenv.config({ path: envFile }).parsed;
if (!env) {
  throw new Error(`A configuration file must be specified (.env), found nothing in: ${envFile}`);
}
// console.log(`<d> Connecting with ${env.MYSQL_HOST}:${env.MYSQL_PORT} using ${env.MYSQL_USER} to database: ${env.MYSQL_DB_NAME}`);

exports.default = {
  type: 'mysql',
  host: env.MYSQL_HOST || 'localhost',
  dbName: env.MYSQL_DB_NAME || 'test_users',
  password: env.MYSQL_PASS || 'mysqlroot',
  entities: librarySchemas,
  schemaGenerator: {
    disableForeignKeys: true,
  }
};
