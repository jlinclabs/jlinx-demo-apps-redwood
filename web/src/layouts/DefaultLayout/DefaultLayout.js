import { routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import { styled, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import Link from 'src/components/Link'
// import PageColumn from 'src/components/PageColumn'
import AppLogo from 'src/components/AppLogo'
// import MainNav from './MainNav'

const DefaultLayout = ({ children }) => {
  const auth = useAuth()
  return (
    <Box sx={{
      display: 'flex',
      // backgroundColor: 'black',
      // backgroundColor: '#171717',
    }}>
      <MainNav {...{ auth }}/>
      <Box
        sx={{
          width: '100vw',
          minHeight: '100vh',
          paddingTop: '64px',
          display: 'flex',
          flexDirection: 'column',
          // mb: 4
        }}
      >{children}</Box>
    </Box>
  )
}

export default DefaultLayout


function MainNav(props){
  const { auth } = props
  return <AppBar {...{
    position: 'absolute',
    sx: {
      backgroundColor: '#171717',
    },
  }}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <AppLogo sx={{ mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            // display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          [APP NAME]
        </Typography>
        <Box sx={{flexGrow: 1}}/>
        {auth.currentUser
          ? <LoggedIn {...props} />
          : auth.loading
            ? <div>Loading…</div>
            : <LoggedOut {...props} />
        }
      </Toolbar>
    </Container>
  </AppBar>
}


function LoggedOut(props){
  return <>
    <MenuItem component={Link} to={routes.login()}>
      Login or Signup
    </MenuItem>
  </>
}

function LoggedIn({ auth }){
  const { currentUser } = auth
  return <MenuItem component={Link} to={routes.my()}>
    {`${currentUser.name || 'ANON'}`}
  </MenuItem>
  // const handleMenu = () => {}
  // const handleClose = () => {}
  // const anchorEl = null
  // return <div>
  //   <IconButton
  //     size="large"
  //     aria-label="account of current user"
  //     aria-controls="menu-appbar"
  //     aria-haspopup="true"
  //     onClick={handleMenu}
  //     color="inherit"
  //   >
  //     <AccountCircleIcon />
  //   </IconButton>
  //   <Menu
  //     id="menu-appbar"
  //     anchorEl={anchorEl}
  //     anchorOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     open={Boolean(anchorEl)}
  //     onClose={handleClose}
  //   >
  //     <MenuItem onClick={handleClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleClose}>My account</MenuItem>
  //   </Menu>
  // </div>
}
