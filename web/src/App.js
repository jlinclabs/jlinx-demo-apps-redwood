import { AuthProvider } from '@redwoodjs/auth'

import { useAuth, AuthProvider } from '@redwoodjs/auth'
import { Magic } from 'magic-sdk'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import theme from 'src/theme'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

const m = new Magic(process.env.MAGICLINK_PUBLIC)

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider type="dbAuth">
        <AuthProvider client={m} type="magicLink">
          <RedwoodApolloProvider {...{ useAuth }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Routes />
            </ThemeProvider>
          </RedwoodApolloProvider>
        </AuthProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
