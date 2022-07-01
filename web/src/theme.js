import '@fontsource/source-serif-pro/200.css'
import '@fontsource/source-serif-pro/300.css'
import '@fontsource/source-serif-pro/400.css'
import '@fontsource/source-serif-pro/600.css'
import '@fontsource/source-serif-pro/700.css'
import '@fontsource/source-serif-pro/900.css'

import { createTheme } from '@mui/material/styles'

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: 'dark',
    typography: {
      // hero: {
      //   fontFamily: '"Source Serif Pro",serif',
      // }
    },
    primary: {
      light: '#6edbec',
      main: '#31a9ba',
      mark: '#007a8a',
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#5472d3',
      main: '#0d47a1',
      dark: '#002171',
      // contrastText: '#ffcc00',
    },
  },
  components: {
    Link: {

    }
  }
})

export default theme


// '#171717' // black



