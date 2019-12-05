import { GraphQLServer } from 'graphql-yoga'

import resolvers from './resolvers'

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
