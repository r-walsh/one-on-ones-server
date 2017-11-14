const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('../resolvers');

const typeDefs = `
type User {
  email: String!
  id: ID!
  name: String!
  oneOnOnes: [OneOnOne]!
  password: String!
}

type OneOnOne {
  agenda: String!
  employee: User!
  id: ID!
  manager: User!
  title: String!
}

type Query {
  user(email: String, id: ID): User
  oneOnOnes(userId: String!): [OneOnOne]
  oneOnOne(id: ID!): OneOnOne
}

schema {
  query: Query
}
`;
module.exports = makeExecutableSchema({ typeDefs, resolvers });
