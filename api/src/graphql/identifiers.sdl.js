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

  input CreateIdentifierInput {
    did: String!
    secretKey: String!
    userId: Int!
  }

  input UpdateIdentifierInput {
    did: String
    secretKey: String
    userId: Int
  }

  type Mutation {
    createIdentifier(input: CreateIdentifierInput!): Identifier! @requireAuth
    updateIdentifier(id: String!, input: UpdateIdentifierInput!): Identifier!
      @requireAuth
    deleteIdentifier(id: String!): Identifier! @requireAuth
  }
`
