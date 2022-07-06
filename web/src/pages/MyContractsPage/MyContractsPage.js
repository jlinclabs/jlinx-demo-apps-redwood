import { MetaTags } from '@redwoodjs/web'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import MyContractsList from 'src/components/MyContractsList'
import Link from 'src/components/Link'

const MyContractsPage = () => {
  return (
    <>
      <MetaTags title="My Contracts" description="My Contracts" />
      <Box sx={{ p: 2 }}>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            component={Link}
            to={Link.to.myNewContract()}
          >{`Offer Contract`}</Button>
          <Button
            variant="contained"
            component={Link}
            to={Link.to.mySignContract()}
            sx={{ml: 1}}
          >{`Sign Offered Contract`}</Button>
        </Box>
        <MyContractsList />
      </Box>
    </>
  )
}

export default MyContractsPage
