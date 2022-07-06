import { db } from 'src/lib/db'
import {
  DbAuthHandler,
  getAuthenticationContext
} from '@redwoodjs/api'
import { getCurrentUser } from 'src/lib/auth'
import services from 'src/services/**/*.{js,ts}'

for (const name in services){
  const [left, right] = name.split('_')
  if (left === right)
    services[left] = services[name]
  delete services[name]
}
console.log({ services })
export const handler = async (event, context) => {
  // SKIP AUTH FOR NOW! JUST FAKE IT FAST

  console.log({ event }, event.requestContext, { context })
  console.log('getAuthenticationContext' + getAuthenticationContext)
  const x = await getAuthenticationContext({ event, context })
  console.log("??", x)
  // const currentUser = await getCurrentUser(null, { })
  // const {
  //   serviceName, options
  // } = JSON.parse(event.body)
  // console.log('RPC CALL', { serviceName, options, context })

  // const [service, funcName] = serviceName.split('.')
  // const result = await services[service][funcName](options)
  const result = { ok: 42 }
  return {
    statusCode: 200,
    body: JSON.stringify(result)
  }
}
