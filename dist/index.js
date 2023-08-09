"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const path = require('path');
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./lib/index"));
// const MySqlDriver =  require('@mikro-orm/mysql').MySqlDriver;
let envFile = './.env.testing';
if (!!process.env.NODE_ENV) {
    envFile = `./../.env.${process.env.NODE_ENV}`;
}
envFile = path_1.default.join(__dirname, envFile);
// console.log(`Reading file: ${envFile}`);
const env = dotenv_1.default.config({ path: envFile }).parsed;
if (!env) {
    throw new Error(`A configuration file must be specified (.env), found nothing in: ${envFile}`);
}
// console.log(`<d> Connecting with ${env.MYSQL_HOST}:${env.MYSQL_PORT} using ${env.MYSQL_USER} to database: ${env.MYSQL_DB_NAME}`);
exports.default = {
    type: 'mysql',
    host: env.MYSQL_HOST || 'localhost',
    dbName: env.MYSQL_DB_NAME || 'test_users',
    password: env.MYSQL_PASS || 'mysqlroot',
    entities: index_1.default,
    schemaGenerator: {
        disableForeignKeys: true,
    }
};
//# sourceMappingURL=index.js.map