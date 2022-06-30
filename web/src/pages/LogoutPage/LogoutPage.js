import { useEffect } from 'react'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

const LogoutPage = () => {

  const { isAuthenticated, logOut } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      logOut()
    }else{
      navigate(routes.home())
    }
  }, [isAuthenticated])
  return (
    <>
      <MetaTags title="Logout" description="Logout page" />
      <h1>Loging you out…</h1>
    </>
  )
}

export default LogoutPage
