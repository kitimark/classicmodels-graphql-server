import mongoose, { Mongoose } from 'mongoose'
import { 
  Customer, 
  Employee, 
  Product, 
  Productline, 
  Office, 
  Payment,
  Order
} from './models'

// set up mongoose promise
mongoose.Promise = global.Promise

interface ConnectionConfig {
  host: string
  port: string
  database: string
  username?: string
  password?: string
}

export function connectDB(config: ConnectionConfig): Promise<Mongoose> {
  const { host, port, database, username, password } = config
  const account = username ? `${username}:${password}@` : ''
  const uri = `mongodb://${account}${host}:${port}/${database}`
  return mongoose.connect(uri)
}

export const models = {
  Customer,
  Employee,
  Product,
  Productline,
  Office,
  Payment,
  Order
}
