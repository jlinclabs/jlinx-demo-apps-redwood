import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'

import InspectObject from 'src/components/InspectObject'
import Link from 'src/components/Link'

const HomePage = () => {
  const { loading, isAuthenticated, getCurrentUser, userMetadata } = useAuth()
  const [currentUser, setCurrentUser] = useState()
  useEffect(
    () => {
      getCurrentUser().then(
        cu => { setCurrentUser(cu) },
        error => { console.error(error) }
      )
    },
    []
  )
  console.log({
    loading,
    currentUser,
    userMetadata,
  })
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {isAuthenticated
        ? <Box>
          <h2>Logged In</h2>
          <InspectObject object={currentUser}/>
          <Link to={routes.logout()}>Logout</Link>
        </Box>
        : loading
          ? <Box>loading…</Box>
          : <Box>
            <h2>Not Logged In</h2>
            <Link to={routes.login()}>Login</Link>
          </Box>
      }
    </>
  )
}

export default HomePage
