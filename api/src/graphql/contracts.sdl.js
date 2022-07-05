export const schema = gql`
  type Contract {
    id: String!
    user: User!
    userId: Int!
    value: String!
  }

  type Query {
    contracts: [Contract!]! @requireAuth
    contract(id: String!): Contract @requireAuth
  }

  input CreateContractInput {
    contractUrl: String!
  }

  type Mutation {
    createContract(input: CreateContractInput!): Contract! @requireAuth
    deleteContract(id: String!): Contract! @requireAuth
  }
`
