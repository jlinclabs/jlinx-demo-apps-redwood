import { db } from 'src/lib/db'
import {
  DbAuthHandler,
  getAuthenticationContext
} from '@redwoodjs/api'
import { useRequireAuth, context as globalContext, setContext } from '@redwoodjs/graphql-server'
import { getCurrentUser, isAuthenticated } from 'src/lib/auth'
import { logger } from 'src/lib/logger'
import { createDbAuthHander } from 'src/functions/auth'
import services from 'src/services/**/*.{js,ts}'

for (const name in services){
  const [left, right] = name.split('_')
  if (left === right)
    services[left] = services[name]
  delete services[name]
}


export const handler = async (event, context) => {
  const authHandler = await createDbAuthHander(event, context)
  const currentUser = await authHandler._getCurrentUser()
  context.currentUser = currentUser
  // globalContext.currentUser = currentUser
  // // setContext({ ...context, currentUser, poop: 95 })
  // globalContext.love = { me: 19 }
  const {
    serviceName, options
  } = JSON.parse(event.body)
  console.log('RPC CALL', { currentUser, serviceName, options, context })

  const [service, funcName] = serviceName.split('.')
  const result = await services[service][funcName](options, context)
  return {
    statusCode: 200,
    body: JSON.stringify(result)
  }
  return {
    status: 200,
    body: '',
  }
}
