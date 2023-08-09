"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestClass = void 0;
const core_1 = require("@mikro-orm/core");
class TestClass {
    id;
    email;
    orange;
    constructor(email, password) {
        this.email = email;
        this.orange = password;
    }
}
exports.TestClass = TestClass;
const testSchema = new core_1.EntitySchema({
    name: 'Test',
    tableName: 'glo_test',
    abstract: false,
    properties: {
        id: { name: 'id_test', type: 'bigint', primary: true },
        email: { type: 'string', unique: true },
        orange: { type: 'string', nullable: true },
        // info: { reference: '1:1', entity: 'UserInfo', inverseBy: 'user' },
        // groups: { reference: 'n:m', entity: 'Groups', inverseBy: 'users', pivotTable: 'glo_us2gr' },
    },
});
exports.default = testSchema;
//# sourceMappingURL=class.schema.js.map