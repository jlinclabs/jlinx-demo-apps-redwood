import { navigate, routes } from '@redwoodjs/router'
import { useEffect, useRef } from 'react'
import * as forms from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from 'src/components/Link'

const LoginPage = () => {
  const auth = useAuth()

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate(routes.my())
    }
  }, [auth.isAuthenticated])

  const emailRef = useRef()
  useEffect(() => {
    if (!auth.loading) {
      console.log('FOCUS', emailRef.current)
      emailRef.current.focus()
    }
  }, [auth.loading])

  const onSubmit = async (data) => {
    console.log('onSbmit', data)
    const response = await auth.logIn({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <Container maxWidth="xs">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome
          </Typography>

          <Box {...{
            component: forms.Form,
            onSubmit,
            noValidate: true,
            sx: { mt: 1 },
            disabled: auth.loading,
          }}>
            <TextField
              disabled={auth.loading}
              InputProps={{
                inputComponent: forms.TextField,
                validation: {
                  required: {
                    value: true,
                    message: 'email is required',
                  },
                },
              }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={emailRef}
            />
            <Button
              disabled={auth.loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {`Sign in / Sign up`}
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default LoginPage
