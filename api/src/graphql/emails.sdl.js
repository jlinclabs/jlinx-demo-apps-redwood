export const schema = gql`
  type Email {
    email: String!
    User: User
    userId: Int
  }

  type Query {
    emails: [Email!]! @requireAuth
    email(id: String!): Email @requireAuth
  }

  input CreateEmailInput {
    email: String!
    userId: Int
  }

  input UpdateEmailInput {
    email: String
    userId: Int
  }

  type Mutation {
    createEmail(input: CreateEmailInput!): Email! @requireAuth
    updateEmail(id: String!, input: UpdateEmailInput!): Email! @requireAuth
    deleteEmail(id: String!): Email! @requireAuth
  }
`
