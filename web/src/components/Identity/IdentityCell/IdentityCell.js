import Identity from 'src/components/Identity/Identity'

export const QUERY = gql`
  query FindIdentityById($id: Int!) {
    identity: identity(id: $id) {
      id
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Identity not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ identity }) => {
  return <Identity identity={identity} />
}
