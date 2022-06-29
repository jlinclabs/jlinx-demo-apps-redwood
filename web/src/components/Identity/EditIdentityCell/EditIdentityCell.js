import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import IdentityForm from 'src/components/Identity/IdentityForm'

export const QUERY = gql`
  query EditIdentityById($id: Int!) {
    identity: identity(id: $id) {
      id
      userId
    }
  }
`
const UPDATE_IDENTITY_MUTATION = gql`
  mutation UpdateIdentityMutation($id: Int!, $input: UpdateIdentityInput!) {
    updateIdentity(id: $id, input: $input) {
      id
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ identity }) => {
  const [updateIdentity, { loading, error }] = useMutation(
    UPDATE_IDENTITY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Identity updated')
        navigate(routes.identities())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { userId: parseInt(input.userId) })
    updateIdentity({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Identity {identity.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <IdentityForm
          identity={identity}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
