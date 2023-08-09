"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = __importDefault(require("./entities/user.schema"));
const class_schema_1 = __importDefault(require("./entities/class.schema"));
const entities = Array().concat(user_schema_1.default, class_schema_1.default);
exports.default = entities;
//# sourceMappingURL=index.js.map