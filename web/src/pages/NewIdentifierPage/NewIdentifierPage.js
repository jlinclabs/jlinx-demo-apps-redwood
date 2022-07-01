import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Container from '@mui/material/Container'
import NewIdentifierButton from 'src/components/Identifier/NewIdentifierButton'

const NewIdentifierPage = () => {
  return (
    <>
      <MetaTags title="NewIdentifier" description="NewIdentifier page" />
      <Container maxWidth="xs" sx={{
        p: 4,
        textAlign: 'center',
      }}>
        <NewIdentifierButton variant="contained" />
      </Container>
    </>
  )
}

export default NewIdentifierPage

