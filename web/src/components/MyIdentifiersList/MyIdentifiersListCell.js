import Identifier from 'src/components/Identifier/Identifier'

export const QUERY = gql`
  query FindIdentifierById($id: String!) {
    identifier: identifier(id: $id) {
      did
      secretKey
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Identifier not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ identifier }) => {
  return <Identifier identifier={identifier} />
}
