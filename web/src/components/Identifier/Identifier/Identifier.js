import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_IDENTIFIER_MUTATION = gql`
  mutation DeleteIdentifierMutation99($did: String!) {
    deleteIdentifier(did: $did) {
      did
    }
  }
`

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

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Identifier = ({ identifier }) => {
  const [deleteIdentifier] = useMutation(DELETE_IDENTIFIER_MUTATION, {
    onCompleted: () => {
      toast.success('Identifier deleted')
      navigate(routes.identifiers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete identifier ' + id + '?')) {
      deleteIdentifier({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Identifier {identifier.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Did</th>
              <td>{identifier.did}</td>
            </tr>
            <tr>
              <th>Secret key</th>
              <td>{identifier.secretKey}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{identifier.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editIdentifier({ id: identifier.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(identifier.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Identifier
