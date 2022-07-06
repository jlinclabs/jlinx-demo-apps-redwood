import { Link, routes } from '@redwoodjs/router'

import Contracts from 'src/components/Contract/Contracts'

export const QUERY = gql`
  query FindContracts {
    contracts {
      id
      value
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No contracts yet. '}
      <Link to={routes.newContract()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ contracts }) => {
  return <Contracts contracts={contracts} />
}
