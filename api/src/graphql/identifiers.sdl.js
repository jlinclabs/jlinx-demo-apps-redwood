export const schema = gql`
  type Identifier {
    did: String!
    secretKey: String!
    user: User!
    userId: Int!
  }

  type Query {
    identifiers: [Identifier!]! @requireAuth
    identifier(id: String!): Identifier @requireAuth
  }

  type Mutation {
    createIdentifier: Identifier! @requireAuth
    deleteIdentifier(id: String!): Identifier! @requireAuth
  }
`
