import { MetaTags } from '@redwoodjs/web'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'src/components/Link'
import Timestamp from 'src/components/Timestamp'
import InspectObject from 'src/components/InspectObject'

import { useServiceQuery } from 'src/lib/rpc'

const MyIdentifierPage = ({ did }) => {
  return (
    <>
      <MetaTags title="My Identifier" description="My Identifier" />
      <Container maxWidth="md" sx={{p: 2}}>
        <Identifier {...{ did }}/>
      </Container>
    </>
  )
}

export default MyIdentifierPage

const Identifier = ({ did }) => {
  const { loading, error, data } = useServiceQuery(
    `identifiers.identifier`, { did }
  )
  const identifier = data
  if (!identifier) return <CircularProgress/>
  if (error) return <Alert severity="error">{error.message}</Alert>
  return <Paper
    sx={{
      // m: 4,
      p: 2,
    }}
  >
    <Typography variant="h4">Identifier</Typography>
    <Typography variant="h5">{did}</Typography>
    <Typography variant="body2">Created at: <Timestamp at={identifier.createdAt}/></Typography>
    <Typography variant="body2" sx={{overflow: 'auto'}}>
      <pre><code>{JSON.stringify(identifier.didDocument, null, 2)}</code></pre>
    </Typography>
  </Paper>
}




