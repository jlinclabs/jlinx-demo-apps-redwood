export const schema = gql`
  type Profile {
    id: String!
    secretKey: String!
    value: String!
    user: User!
    userId: Int!
  }

  type Query {
    profiles: [Profile!]! @requireAuth
    profile(id: String!): Profile @requireAuth
  }

  input CreateProfileInput {
    secretKey: String!
    value: String!
    userId: Int!
  }

  input UpdateProfileInput {
    secretKey: String
    value: String
    userId: Int
  }

  type Mutation {
    createProfile(input: CreateProfileInput!): Profile! @requireAuth
    updateProfile(id: String!, input: UpdateProfileInput!): Profile!
      @requireAuth
    deleteProfile(id: String!): Profile! @requireAuth
  }
`
