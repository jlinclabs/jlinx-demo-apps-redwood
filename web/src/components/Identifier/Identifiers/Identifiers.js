import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Identifier/IdentifiersCell'

const DELETE_IDENTIFIER_MUTATION = gql`
  mutation DeleteIdentifierMutation($id: String!) {
    deleteIdentifier(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

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
            <th>Secret key</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {identifiers.map((identifier) => (
            <tr key={identifier.id}>
              <td>{truncate(identifier.did)}</td>
              <td>{truncate(identifier.secretKey)}</td>
              <td>{truncate(identifier.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.identifier({ id: identifier.id })}
                    title={'Show identifier ' + identifier.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editIdentifier({ id: identifier.id })}
                    title={'Edit identifier ' + identifier.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
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
