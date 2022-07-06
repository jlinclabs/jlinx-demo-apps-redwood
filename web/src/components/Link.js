import * as React from 'react'
import { Link as RouterLink, routes } from '@redwoodjs/router'
import MUILink from '@mui/material/Link'

const Link = React.forwardRef(({...props}, ref) => {
  props.ref = ref
  if (props.to) props.component = RouterLink
  if (props.href) props.target = '_blank'
  return <MUILink {...props}/>
})

Link.to = routes

export default Link
