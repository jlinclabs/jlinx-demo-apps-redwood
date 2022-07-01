import { Link, routes } from '@redwoodjs/router'

import Identifiers from 'src/components/Identifier/Identifiers'

export const QUERY = gql`
  query FindIdentifiers {
    identifiers {
      did
      secretKey
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No identifiers yet. '}
      <Link to={routes.newIdentifier()} className="rw-link">
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
