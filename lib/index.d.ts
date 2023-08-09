export { IUserSchema } from './entities/user.schema'
export { TestClass } from './entities/class.schema'
import User from './entities/user.schema'
import Test from './entities/class.schema'

export { User, Test }

declare module 'inner' {
  export { User, Test }
}