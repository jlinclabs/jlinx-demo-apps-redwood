import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import AddIcon from '@mui/icons-material/Add'

const MyIdentifierPage = ({ did }) => {
  return (
    <>
      <MetaTags title="MyIdentifier" description="MyIdentifier page" />
      <Container maxWidth="md" sx={{p: 2}}>
        <Paper
          sx={{
            // m: 4,
            p: 2,
          }}
        >
          <Typography variant="body2">DID: {did}</Typography>
        </Paper>
      </Container>
    </>
  )
}

export default MyIdentifierPage
