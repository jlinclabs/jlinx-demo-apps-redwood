import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import { navigate, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'
import * as forms from '@redwoodjs/forms'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

import { useService, useServiceQuery } from 'src/lib/rpc'

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

const NewContractForm = () => {
  const [ contractUrl, setContractUrl ] = useState('https://contracts.io/sisa-suyF9tPmVrtuuLn3R4XdzGXMZN6aFfCIXuXwGpAHtCw.md')
  const [ identifierDid, setIdentifierDid ] = useState('')
  const identifiersQuery = useServiceQuery('identifiers.identifiers')
  const identifiers = identifiersQuery.data || []
  const [createContract, { loading }] = useService(
    'contracts.createContract',
    {
      onCompleted: ({ id }) => {
        toast.success(`Contract created DID=${id}`)
        navigate(routes.myContract({ id }))
      },
      onError: (error) => {
        console.error(error)
        toast.error(error.message)
      },
    }
  )

  const disabled = loading || identifiersQuery.loading

  return (
    <Box {...{
      component: forms.Form,
      onSubmit(){
        createContract({
          identifierDid,
          contractUrl,
        })
      },
      noValidate: true,
      sx: { mt: 1 },
      disabled: loading,
    }}>
      <Typography component="h1" variant="h5">
        Create Contract
      </Typography>
      <Typography variant="body1" sx={{my: 2}}>
        Which identifier do you want to offer this contract as?
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="identifierDidLabel">Identifier</InputLabel>
        <Select
          name="identifierDid"
          labelId="identifierDidLabel"
          disabled={disabled}
          autoFocus
          value={identifierDid}
          onChange={e => { setIdentifierDid(e.target.value) }}
        >
          {identifiers.map(identifier =>
            <MenuItem
              key={identifier.did}
              value={identifier.did}
            >{identifier.did}</MenuItem>
          )}
        </Select>
      </FormControl>
      <Typography variant="body1" sx={{my: 2}}>
        Which contract do you want to offer?
      </Typography>

      <TextField
        label="Contract URL"
        disabled={disabled}
        margin="normal"
        required
        fullWidth
        name="contractUrl"
        placeholder="https://contracts.io/sisa-suyF9tPmVrtuuLn3R4XdzGXMZN6aFfCIXuXwGpAHtCw.md"
        value={contractUrl}
        onChange={e => { setContractUrl(e.target.value) }}
      />
      <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button type="submit" variant="contained">{`Create`}</Button>
      </Box>
    </Box>
  )
}
