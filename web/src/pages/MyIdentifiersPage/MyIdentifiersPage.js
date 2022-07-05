import { MetaTags } from '@redwoodjs/web'
import Box from '@mui/material/Box'
import MyIdentifiersList from 'src/components/MyIdentifiersList'
import NewIdentifierButton from 'src/components/NewIdentifierButton'

const MyIdentifiersPage = () => {
  return (
    <>
      <MetaTags title="MyIdentifiers" description="MyIdentifiers page" />
      <Box sx={{ p: 2 }}>
        <NewIdentifierButton variant="contained" />
        <MyIdentifiersList />
      </Box>
    </>
  )
}

export default MyIdentifiersPage
