import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { useState, useEffect } from 'react'
import InspectObject from 'src/components/InspectObject'

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
      <InspectObject object={currentUser}/>
      {isAuthenticated
        ? <Link to={routes.logout()}>Logout</Link>
        : <Link to={routes.login()}>Login</Link>
      }
    </>
  )
}

export default HomePage
