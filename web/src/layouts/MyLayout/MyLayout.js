import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PeopleIcon from '@mui/icons-material/People'
import BarChartIcon from '@mui/icons-material/BarChart'
import LayersIcon from '@mui/icons-material/Layers'
import AssignmentIcon from '@mui/icons-material/Assignment'

import Link from 'src/components/Link'

const MyLayout = ({ children }) => {
  const { logOut } = useAuth()

  const onLogOut = async () => {
    await logOut()
    navigate(routes.home())
  }

  return <>
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      flex: '1 1',
    }}>
      <Box sx={{}}>
        <List component="nav" sx={{
          // display: 'flex',
          // flexDirection: 'column',
          // height: '100%',
          // overflow: 'auto',
        }}>
          <ListItemButton
            component={Link}
            to={Link.to.my()}
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Indentifiers" />
          </ListItemButton>
          <ListItemButton
            component={Link}
            to={Link.to.my()}
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Contracts" />
          </ListItemButton>
          <Box sx={{ flexGrow: '1' }}/>
          <Divider sx={{ my: 1 }} />
          <ListItemButton onClick={onLogOut}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="logout" />
          </ListItemButton>
        </List>
      </Box>
      <Box sx={{
        flex: '1 1',
      }}>
        {children}
      </Box>
    </Box>
  </>
}

export default MyLayout
