import { useQuery } from '@redwoodjs/web'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Skeleton from '@mui/material/Skeleton'
import Link from 'src/components/Link'
import Timestamp from 'src/components/Timestamp'
import InspectObject from 'src/components/InspectObject'

export const QUERY = gql`
  query MyIdentifiers {
    identifiers {
      did
    }
  }
`

const MyIdentifiersList = () => {

  const { loading, error, data } = useQuery(QUERY, {
    variables: {}
  })

  console.log({ loading, error, data })

  const identifiers = data?.identifiers

  return (
    <List sx={{
      width: '100%',
      // bgcolor: 'background.paper',
      // flexGrow: 1,
    }}>
      {(loading || !identifiers)
        ? Array(10).fill().map((_, i) =>
          <Skeleton key={i} animation="wave" height="100px" />
        )
        : identifiers.map(identifier =>
          <MyIdentifier key={identifier.did} identifier={identifier}/>
        )
      }
    </List>
  )
}

export default MyIdentifiersList


function MyIdentifier({ identifier }){
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
      to: Link.to.myIdentifier({ did: identifier.did })
    }}>
      <ListItemText {...{
        primaryTypographyProps: {
          sx: {
            fontFamily: 'monospace',
            whiteSpace: 'nowrap',
          },
        },
        primary: `${identifier.did}`,
        secondary: <span>
          created <Timestamp at={identifier.createdAt}/>
        </span>
      }}/>
    </ListItemButton>
  </ListItem>
}
