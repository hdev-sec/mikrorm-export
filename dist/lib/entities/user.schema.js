"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const userSchema = new core_1.EntitySchema({
    name: 'User',
    tableName: 'glo_users',
    abstract: false,
    properties: {
        id: { name: 'id_glo_user', type: 'bigint', primary: true },
        timeLogin: { type: Date, nullable: true },
        timeLastOnline: { type: Date, nullable: true },
        expirationTime: { type: Date, nullable: true, default: null },
        timePwdUpdate: { type: Date, nullable: true },
        email: { type: 'string', unique: true },
        orange: { type: 'string' },
        username: { type: 'string', nullable: false },
        lange: { type: 'string', default: 'it-IT' },
        adminNote: { type: 'string', default: '' },
        adminLang: { type: 'string', default: 'it-IT' },
        oldSha1: { type: Number, default: 1 },
        active: { type: Boolean, default: false },
        changed: { type: Boolean, default: false },
        // info: { reference: '1:1', entity: 'UserInfo', inverseBy: 'user' },
        // groups: { reference: 'n:m', entity: 'Groups', inverseBy: 'users', pivotTable: 'glo_us2gr' },
    },
});
exports.default = userSchema;
//# sourceMappingURL=user.schema.js.map