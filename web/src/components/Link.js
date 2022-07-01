import * as React from 'react'
import { Link as RouterLink, routes } from '@redwoodjs/router'
import MUILink from '@mui/material/Link'

const Link = React.forwardRef(({...props}, ref) => {
  props.ref = ref
  props.component = RouterLink
  return <MUILink {...props}/>
})

Link.to = routes

export default Link
