import { MetaTags, useQuery } from '@redwoodjs/web'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress';

import Link from 'src/components/Link'
import Timestamp from 'src/components/Timestamp'
import InspectObject from 'src/components/InspectObject'

const MyIdentifierPage = ({ did }) => {
  const { loading, error, data } = useQuery(QUERY, {
    variables: { did }
  })
  const identifier = data?.identifier
  return (
    <>
      <MetaTags title="MyIdentifier" description="MyIdentifier page" />
      <Container maxWidth="md" sx={{p: 2}}>
        {identifier
          ? <Paper
            sx={{
              // m: 4,
              p: 2,
            }}
          >
            <Typography variant="body1">{did}</Typography>
            <Typography variant="body2">Created at: <Timestamp at={identifier.createdAt}/></Typography>
          </Paper>
          : <span>Spinner…</span>
        }
      </Container>
      <InspectObject object={{ loading, error, data }}/>
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
