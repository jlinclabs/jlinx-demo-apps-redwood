import { MetaTags, useQuery } from '@redwoodjs/web'
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
      <MetaTags title="MyIdentifier" description="MyIdentifier page" />
      <Container maxWidth="md" sx={{p: 2}}>
        <Identifier {...{ did }}/>
      </Container>
    </>
  )
}

export const QUERY = gql`
  query MyIdentifierByDid($did: String!) {
    identifier: identifier(did: $did) {
      did
      createdAt
    }
  }
`

export default MyIdentifierPage


const Identifier = ({ did }) => {
  // const { loading, error, data } = useQuery(QUERY, {
    //   variables: { did }
    // })

  const { loading, error, data } = useServiceQuery(
    `identifiers.identifier`, { did }
  )
  console.log({ loading, error, data })
  const identifier = data
  if (!identifier) return <CircularProgress/>
  if (!identifier) return <span>Spinner…</span>
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




