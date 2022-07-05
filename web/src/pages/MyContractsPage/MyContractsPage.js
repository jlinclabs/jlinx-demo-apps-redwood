import { MetaTags } from '@redwoodjs/web'
import Box from '@mui/material/Box'
import MyContractsList from 'src/components/MyContractsList'
import NewContractButton from 'src/components/NewContractButton'

const MyContractsPage = () => {
  return (
    <>
      <MetaTags title="MyContracts" description="MyContracts page" />
      <Box sx={{ p: 2 }}>
        <NewContractButton variant="contained" />
        <MyContractsList />
      </Box>
    </>
  )
}

export default MyContractsPage
