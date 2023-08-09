import { EntitySchema } from "@mikro-orm/core"

export interface IUserSchema {
  id: string
  timeLogin: Date
  timeLastOnline: Date
  expirationTime: Date
  timePwdUpdate: Date
  email: string
  orange: string
  username: string
  lange: string
  adminNote: string
  adminLang: string
  oldSha1: number
  active: boolean
  changed: boolean
}

const userSchema = new EntitySchema<IUserSchema>({
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
})

export default userSchema