import Contract from 'src/components/Contract/Contract'

export const QUERY = gql`
  query FindContractById($id: String!) {
    contract: contract(id: $id) {
      id
      value
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Contract not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ contract }) => {
  return <Contract contract={contract} />
}
