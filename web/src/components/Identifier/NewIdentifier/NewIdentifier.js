import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import IdentifierForm from 'src/components/Identifier/IdentifierForm'

const CREATE_IDENTIFIER_MUTATION = gql`
  mutation CreateIdentifierMutation($input: CreateIdentifierInput!) {
    createIdentifier(input: $input) {
      id
    }
  }
`

const NewIdentifier = () => {
  const [createIdentifier, { loading, error }] = useMutation(
    CREATE_IDENTIFIER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Identifier created')
        navigate(routes.identifiers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, { userId: parseInt(input.userId) })
    createIdentifier({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Identifier</h2>
      </header>
      <div className="rw-segment-main">
        <IdentifierForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewIdentifier
