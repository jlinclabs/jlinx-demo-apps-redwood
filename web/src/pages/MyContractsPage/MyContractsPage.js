import { MetaTags } from '@redwoodjs/web'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import MyContractsList from 'src/components/MyContractsList'
import NewContractButton from 'src/components/NewContractButton'
import Link from 'src/components/Link'

const MyContractsPage = () => {
  return (
    <>
      <MetaTags title="My Contracts" description="My Contracts" />
      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          component={Link}
          to={Link.to.myNewContract()}
        >{`New Contract`}</Button>
        <MyContractsList />
      </Box>
    </>
  )
}

export default MyContractsPage
