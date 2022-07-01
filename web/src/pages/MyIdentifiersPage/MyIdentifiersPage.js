import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const MyIdentifiersPage = () => {
  return (
    <>
      <MetaTags title="MyIdentifiers" description="MyIdentifiers page" />

      <Container maxWidth="lg" sx={{p: 2}}>
        <Typography variant="h4">Identifiers</Typography>
      </Container>
    </>
  )
}

export default MyIdentifiersPage
