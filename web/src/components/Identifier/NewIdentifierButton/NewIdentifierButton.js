import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import Button from '@mui/material/Button'
import IdentifierForm from 'src/components/Identifier/IdentifierForm'

const CREATE_IDENTIFIER_MUTATION = gql`
  mutation CreateIdentifierMutation($input: CreateIdentifierInput!) {
    createIdentifier(input: $input) {
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
      onCompleted: () => {
        toast.success('Identifier created')
        navigate(routes.identifiers())
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
