import { MetaTags } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import * as forms from '@redwoodjs/forms'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'



const MyNewContractPage = () => {
  return (
    <>
      <MetaTags title="MyNewContract" description="MyNewContract page" />

      <Container maxWidth="sm" sx={{p:2}}>
        <NewContractForm />
      </Container>
    </>
  )
}

export default MyNewContractPage

const CREATE_CONTRACT_MUTATION = gql`
  mutation CreateContractMutation($input: CreateContractInput!) {
    createContract(input: $input) {
      id
    }
  }
`

const NewContractForm = () => {
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

  const onSubmit = (data) => {
    createContract({
      variables: {
        input: {
          contractUrl: data.contractUrl || 'https://fake.contract.example.com/fake'
        }
      }
    })
  }
  return (
    <Box {...{
      component: forms.Form,
      onSubmit,
      noValidate: true,
      sx: { mt: 1 },
      disabled: loading,
    }}>
      <Typography component="h1" variant="h5">
        Create Contract
      </Typography>
      <TextField
        disabled={loading}
        InputProps={{
          inputComponent: forms.TextField,
          validation: {
            required: {
              value: true,
              message: 'contract url is required',
            },
          },
        }}
        margin="normal"
        required
        fullWidth
        label="Contract Url"
        name="contractUrl"
        placeholder="https://contracts.io/sisa-suyF9tPmVrtuuLn3R4XdzGXMZN6aFfCIXuXwGpAHtCw.md"
        autoFocus
      />
      <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button type="submit" variant="contained">{`Create`}</Button>
      </Box>
    </Box>
  )
}
