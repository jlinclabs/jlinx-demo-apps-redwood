import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import Button from '@mui/material/Button'

const CREATE_CONTRACT_MUTATION = gql`
  mutation CreateContractMutation($input: CreateContractInput!) {
    createContract(input: $input) {
      id
    }
  }
`

const NewContractButton = ({
  Component = Button,
  children,
  ...props
}) => {
  const [createContract, { loading, error }] = useMutation(
    CREATE_CONTRACT_MUTATION,
    {
      onCompleted: ({ createContract }) => {
        const { id } = createContract
        toast.success(`Contract created DID=${id}`)
        navigate(routes.myContract({ id }))
      },
      onError: (error) => {
        console.error(error)
        toast.error(error.message)
      },
    }
  )

  props.onClick = () => {
    createContract({
      variables: {
        input: {
          contractUrl: 'https://fake.contract.example.com/fake'
        }
      }
    })
  }
  if (loading) props.disabled = true

  return <Component {...props}>
    {children || (loading ? 'Creating Contract' : 'Create Contract')}
  </Component>
}

export default NewContractButton
