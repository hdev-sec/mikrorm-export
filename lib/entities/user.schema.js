const EntitySchema = require('@mikro-orm/core').EntitySchema

const userSchema = new EntitySchema({
  name: 'Users',
  tableName: 'glo_users',
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
})

exports.default = userSchema
