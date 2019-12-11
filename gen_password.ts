import { Employee } from './src/db/models'
import { BcryptHasher } from './src/services/hash'
import mongoose, { Mongoose } from 'mongoose'
import { connectDB } from './src/db'


export const genPassword = async () => {
// config mongodb
  mongoose.Promise = global.Promise
  const db: Mongoose = await connectDB({
    host: process.env.MONGO_HOST || 'localhost',
    port: process.env.MONGO_PORT || '27017',
    database: process.env.MONGO_DB || 'classicmodels',
    username: process.env.MONGO_USER,
    password: process.env.MONGO_PWD
  })

  const hasher = new BcryptHasher() 
  const passwordHash = await hasher.hashPassword('1234')
  console.log(passwordHash)
  await Employee.updateMany({}, {password: passwordHash}).exec()

  db.disconnect()
} 

genPassword()
