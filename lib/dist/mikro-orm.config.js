"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const librarySchemas = require('./index').default;
const index_1 = __importDefault(require("./index"));
// console.log(librarySchemas[0]._meta.properties);
exports.default = {
    type: 'mysql',
    host: 'localhost',
    dbName: 'test_inner_export',
    password: 'mysqlroot',
    entities: index_1.default,
    schemaGenerator: {
        disableForeignKeys: true,
    }
};
//# sourceMappingURL=mikro-orm.config.js.map