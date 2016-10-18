import FakeDB from './data'
import { makeExecutableSchema } from 'graphql-tools'

const rootSchema = `

  type Count {
    id: String
    amount: Int
  }

  type User {
    id: String
    name: String
    slug: String
    eatenSnacks: [SnacksLog]
  }

  type Snack {
    id: String
    name: String
  }

  type SnacksLog {
    id: String
    user: String
    snack: String
  }


  type RootQuery {
    count: Count
    users: [User]
    user(slug: String): User
    snacks: [Snack]
  }

  type RootMutation {
    addCount(amount: Int!): Count
    takeSnack(user: String!, snack: String!): User
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`


const rootResolvers = {
  Count: {
    id: () => 'count_identifier',
    amount: (count) => count
  },
  User: {
    id: ({name}) => name,
    name: ({name}) => name,
    slug: ({name}) => name.toLowerCase(),
    eatenSnacks: ({name}) => FakeDB.findSnacksLogs(name)
  },
  Snack: {
    id: ({name}) => name,
    name: ({name}) => name,
  },
  RootQuery: {
    count: () => FakeDB.count,
    users: () => FakeDB.users,
    user: (_, {slug}) => FakeDB.findUserBySlug(slug),
    snacks: () => FakeDB.snacks
  },
  RootMutation: {
    addCount(_, { amount }) {
      FakeDB.count += amount
      return FakeDB.count
    },
    takeSnack(_, {user, snack}) {
      const u = FakeDB.findUserBySlug(user);
      FakeDB.addSnackLog(u.name, snack);

      return FakeDB.findUserBySlug(user);
    }
  }
}


const executableSchema = makeExecutableSchema({
  typeDefs: [rootSchema],
  resolvers: rootResolvers
})

export default executableSchema
