import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Identifier/IdentifiersCell'
import Link from 'src/components/Link'

const DELETE_IDENTIFIER_MUTATION = gql`
  mutation DeleteIdentifierMutation($did: String!) {
    deleteIdentifier(did: $did) {
      did
    }
  }
`

const IdentifiersList = ({ identifiers }) => {
  const [deleteIdentifier] = useMutation(DELETE_IDENTIFIER_MUTATION, {
    onCompleted: () => {
      toast.success('Identifier deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete identifier ' + id + '?')) {
      deleteIdentifier({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Did</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {identifiers.map((identifier) => (
            <tr key={identifier.id}>
              <td>DID: {identifier.did}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={Link.to.identifier({ did: identifier.did })}
                    title={'Show identifier ' + identifier.did + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <button
                    type="button"
                    title={'Delete identifier ' + identifier.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(identifier.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default IdentifiersList
