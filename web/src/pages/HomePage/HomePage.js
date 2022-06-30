import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { useState, useEffect } from 'react'

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
        ? <Link to={routes.login()}>Login</Link>
        : <Link to={routes.logout()}>Logout</Link>
      }
    </>
  )
}

export default HomePage
