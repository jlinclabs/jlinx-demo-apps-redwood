import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ContractForm from 'src/components/Contract/ContractForm'

const CREATE_CONTRACT_MUTATION = gql`
  mutation CreateContractMutation($input: CreateContractInput!) {
    createContract(input: $input) {
      id
    }
  }
`

const NewContract = () => {
  const [createContract, { loading, error }] = useMutation(
    CREATE_CONTRACT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Contract created')
        navigate(routes.contracts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, { userId: parseInt(input.userId) })
    createContract({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Contract</h2>
      </header>
      <div className="rw-segment-main">
        <ContractForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewContract
