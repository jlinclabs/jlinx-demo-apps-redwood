export const schema = gql`
  type ContractInstance {
    id: String!
    createdAt: DateTime!
    value: String!
    User: User
    userId: Int
  }

  type Query {
    contractInstances: [ContractInstance!]! @requireAuth
    contractInstance(id: String!): ContractInstance @requireAuth
  }

  input CreateContractInstanceInput {
    value: String!
    userId: Int
  }

  input UpdateContractInstanceInput {
    value: String
    userId: Int
  }

  type Mutation {
    createContractInstance(
      input: CreateContractInstanceInput!
    ): ContractInstance! @requireAuth
    updateContractInstance(
      id: String!
      input: UpdateContractInstanceInput!
    ): ContractInstance! @requireAuth
    deleteContractInstance(id: String!): ContractInstance! @requireAuth
  }
`
