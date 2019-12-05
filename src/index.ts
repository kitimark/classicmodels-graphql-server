import { GraphQLServer } from 'graphql-yoga'
import DotENV from 'dotenv'

import resolvers from './resolvers'

// read .env file
DotENV.config()

const server = new GraphQLServer({
  typeDefs: `./src/schema.graphql`,
  resolvers
})

const options = {
  port: process.env.PORT || 4000
}

server.start(options, () => {
  console.log(`Server is running on port ${options.port}`)
})
