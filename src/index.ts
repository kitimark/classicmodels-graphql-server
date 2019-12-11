import { GraphQLServer } from 'graphql-yoga'
import session from 'express-session'
import DotENV from 'dotenv'

import { connectDB, models } from './db'
import resolvers from './resolvers'
import services from './services'
import { Mongoose } from 'mongoose'
import { ContextCallback, Context, Options } from 'graphql-yoga/dist/types'

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
const context: ContextCallback = (req) => ({
  req: req.request,
  db,
  models,
  services
} as Context)

// graphql end point config
const server = new GraphQLServer({
  typeDefs: `./src/schema.graphql`,
  resolvers,
  context
})

const { PORT, GRAPHQL_PORT } = process.env

const options: Options = {
  port: PORT || GRAPHQL_PORT || 4000,
  cors: {
    credentials: true
  }
}

// session middleware
server.express.use(session({
  name: 'qid',
  secret: `some-random-secret-here`,
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false
  }
}))

server.start(options, () => {
  console.log(`Server is running on port ${options.port}`)
})
