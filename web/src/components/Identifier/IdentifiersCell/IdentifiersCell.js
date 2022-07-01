import Link from 'src/components/Link'

import Identifiers from 'src/components/Identifier/Identifiers'

export const QUERY = gql`
  query FindIdentifiers {
    identifiers {
      did
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div>
      {'No identifiers yet. '}
      <Link to={Link.to.newIdentifier()}>
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ identifiers }) => {
  return <Identifiers identifiers={identifiers} />
}
