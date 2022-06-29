export const schema = gql`
  type Identity {
    id: Int!
    user: User!
    userId: Int!
  }

  type Query {
    identities: [Identity!]! @requireAuth
    identity(id: Int!): Identity @requireAuth
  }

  input CreateIdentityInput {
    userId: Int!
  }

  input UpdateIdentityInput {
    userId: Int
  }

  type Mutation {
    createIdentity(input: CreateIdentityInput!): Identity! @requireAuth
    updateIdentity(id: Int!, input: UpdateIdentityInput!): Identity!
      @requireAuth
    deleteIdentity(id: Int!): Identity! @requireAuth
  }
`
