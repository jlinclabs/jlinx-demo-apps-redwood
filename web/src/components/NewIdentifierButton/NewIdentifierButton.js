import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import Button from '@mui/material/Button'

const CREATE_IDENTIFIER_MUTATION = gql`
  mutation CreateIdentifierMutation {
    createIdentifier {
      did
    }
  }
`

const NewIdentifierButton = ({
  Component = Button,
  children,
  ...props
}) => {
  const [createIdentifier, { loading, error }] = useMutation(
    CREATE_IDENTIFIER_MUTATION,
    {
      onCompleted: ({ createIdentifier }) => {
        const { did } = createIdentifier
        toast.success(`Identifier created DID=${did}`)
        navigate(routes.myIdentifier({ did }))
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  props.onClick = () => {
    createIdentifier({ })
  }
  if (loading) props.disabled = true

  return <Component {...props}>
    {children || (loading ? 'Creating Identifier' : 'Create Identifier')}
  </Component>
}

export default NewIdentifierButton
