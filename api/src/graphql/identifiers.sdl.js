export const schema = gql`
  type Identifier {
    did: String!
    createdAt: DateTime!
    user: User!
    userId: Int!
  }

  type Query {
    identifiers: [Identifier!]! @requireAuth
    identifier(did: String!): Identifier @requireAuth
  }

  type Mutation {
    createIdentifier: Identifier! @requireAuth
    deleteIdentifier(did: String!): Identifier! @requireAuth
  }
`
