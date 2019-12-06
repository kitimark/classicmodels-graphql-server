import { GraphQLServer } from 'graphql-yoga'
import DotENV from 'dotenv'

import { connectDB, models } from './db'
import resolvers from './resolvers'
import { Mongoose } from 'mongoose'

// read .env file
DotENV.config()

// config mongodb
const db: Promise<Mongoose> = connectDB({
  host: process.env.MONGO_HOST || 'localhost',
  port: process.env.MONGO_PORT || '27017',
  database: process.env.MONGO_DB || 'classicmodels',
  username: process.env.MONGO_USER,
  password: process.env.MONGO_PWD
})

// context in graphql
const context = {
  db,
  models
}

// graphql end point config
const server = new GraphQLServer({
  typeDefs: `./src/schema.graphql`,
  resolvers,
  context
})

const { PORT, GRAPHQL_PORT } = process.env

const options = {
  port: PORT || GRAPHQL_PORT || 4000
}

server.start(options, () => {
  console.log(`Server is running on port ${options.port}`)
})
