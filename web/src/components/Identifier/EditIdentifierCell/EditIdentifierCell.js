import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import IdentifierForm from 'src/components/Identifier/IdentifierForm'

export const QUERY = gql`
  query EditIdentifierById($id: String!) {
    identifier: identifier(id: $id) {
      did
      secretKey
      userId
    }
  }
`
const UPDATE_IDENTIFIER_MUTATION = gql`
  mutation UpdateIdentifierMutation(
    $id: String!
    $input: UpdateIdentifierInput!
  ) {
    updateIdentifier(id: $id, input: $input) {
      did
      secretKey
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ identifier }) => {
  const [updateIdentifier, { loading, error }] = useMutation(
    UPDATE_IDENTIFIER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Identifier updated')
        navigate(routes.identifiers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { userId: parseInt(input.userId) })
    updateIdentifier({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Identifier {identifier.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <IdentifierForm
          identifier={identifier}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
