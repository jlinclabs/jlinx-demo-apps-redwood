import { useQuery } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Alert from '@mui/material/Alert'
import Skeleton from '@mui/material/Skeleton'
import Link from 'src/components/Link'
import Timestamp from 'src/components/Timestamp'
import InspectObject from 'src/components/InspectObject'

export const QUERY = gql`
  query MyContractsList {
    contracts {
      id
      createdAt
    }
  }
`

const MyContractsList = () => {
  const { loading, error, data } = useQuery(QUERY, {
    variables: {}
  })

  const contracts = data?.contracts

  return (
    <List sx={{
      width: '100%',
      // bgcolor: 'background.paper',
      // flexGrow: 1,
    }}>
      {error && <Alert severity="error">{error.message}</Alert>}
      {(loading || !contracts)
        ? Array(3).fill().map((_, i) =>
          <Skeleton key={i} animation="wave" height="100px" />
        )
        : [...contracts].sort(sorter).map(contract =>
          <MyContract key={contract.id} contract={contract}/>
        )
      }
    </List>
  )
}

export default MyContractsList

const sorter = (a, b) => {
  a = a.createdAt
  b = b.createdAt
  return a < b ? 1 : a > b ? -1 : 0
}

function MyContract({ contract }){
  return <ListItem {...{
    secondaryAction: (
      undefined
      // <IconButton edge="end" aria-label="delete" {...{onClick}}>
      //   <DeleteIcon />
      // </IconButton>
    ),
  }}>
    <ListItemButton {...{
      role: undefined,
      dense: true,
      component: Link,
      to: Link.to.myContract({ id: contract.id })
    }}>
      <ListItemText {...{
        primaryTypographyProps: {
          sx: {
            fontFamily: 'monospace',
            whiteSpace: 'nowrap',
          },
        },
        primary: `${contract.id}`,
        secondary: <span>
          created <Timestamp at={contract.createdAt}/>
        </span>
      }}/>
    </ListItemButton>
  </ListItem>
}
