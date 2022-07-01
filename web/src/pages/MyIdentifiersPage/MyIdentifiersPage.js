import { MetaTags } from '@redwoodjs/web'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Link from 'src/components/Link'
import MyIdentifiersList from 'src/components/MyIdentifiersList'
import NewIdentifierButton from 'src/components/Identifier/NewIdentifierButton'

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
