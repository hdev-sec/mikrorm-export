import { EntitySchema } from "@mikro-orm/core"

export class TestClass {
  id: string
  email: string
  orange?: string
  constructor(email: string, password?: string) {
    this.email = email
    this.orange = password
  }
}

const testSchema = new EntitySchema<TestClass>({
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
})

export default testSchema
