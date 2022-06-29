import { Link, routes } from '@redwoodjs/router'

import Identities from 'src/components/Identity/Identities'

export const QUERY = gql`
  query FindIdentities {
    identities {
      id
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No identities yet. '}
      <Link to={routes.newIdentity()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ identities }) => {
  return <Identities identities={identities} />
}
