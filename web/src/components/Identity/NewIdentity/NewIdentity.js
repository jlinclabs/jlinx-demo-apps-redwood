import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import IdentityForm from 'src/components/Identity/IdentityForm'

const CREATE_IDENTITY_MUTATION = gql`
  mutation CreateIdentityMutation($input: CreateIdentityInput!) {
    createIdentity(input: $input) {
      id
    }
  }
`

const NewIdentity = () => {
  const [createIdentity, { loading, error }] = useMutation(
    CREATE_IDENTITY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Identity created')
        navigate(routes.identities())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, { userId: parseInt(input.userId) })
    createIdentity({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Identity</h2>
      </header>
      <div className="rw-segment-main">
        <IdentityForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewIdentity
