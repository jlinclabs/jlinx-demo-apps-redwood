import { MetaTags } from '@redwoodjs/web'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress';
import MUILink from '@mui/material/Link'
import Link from 'src/components/Link'
import Timestamp from 'src/components/Timestamp'
import InspectObject from 'src/components/InspectObject'

import { useServiceQuery } from 'src/lib/rpc'

const MyContractPage = ({ id }) => {
  return (
    <>
      <MetaTags title="My Contract" description="My Contract" />
      <Container maxWidth="md" sx={{p: 2}}>
        <Contract {...{ id }}/>
      </Container>
    </>
  )
}

export default MyContractPage

const Contract = ({ id }) => {
  const { loading, error, data } = useServiceQuery(
    `contracts.contract`, { id }
  )
  console.log({ loading, error, data })
  const contract = data
  if (!contract) return <CircularProgress/>
  if (error) return <Alert severity="error">{error.message}</Alert>
  return <Paper
    sx={{
      // m: 4,
      p: 2,
    }}
  >
    <Typography variant="h4">Contract</Typography>
    <Typography variant="body2">ID: {id}</Typography>
    <Typography variant="body2">Created: <Timestamp at={contract.createdAt}/></Typography>
    <Typography variant="body2" sx={{overflow: 'auto'}} component="pre">
      <code>{JSON.stringify(contract, null, 2)}</code>
    </Typography>

    <MUILink href={`${process.env.JLINX_HOST}/${id}`} target="_blank">VIEW ON IPLS</MUILink>
  </Paper>
}


