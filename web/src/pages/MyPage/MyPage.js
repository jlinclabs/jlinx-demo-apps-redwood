import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Link from 'src/components/Link'
import InspectObject from 'src/components/InspectObject'

const MyPage = () => {
  const { loading, currentUser } = useAuth()
  return (
    <>
      <MetaTags title="My [APP_NAME]" description="My [APP_NAME]" />

      <Box sx={{ p: 2 }}>
        <Typography variant="h4">
          Hey @{currentUser?.email}
        </Typography>
        <InspectObject object={currentUser}/>
      </Box>
    </>
  )
}

export default MyPage
