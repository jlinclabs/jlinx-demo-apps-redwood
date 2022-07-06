import { useState } from 'react'

export function useService(serviceName, handlers = {}){
  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  const call = (options = {}) => {
    setLoading(true)
    rpcCall({ serviceName, options }).then(
      result => {
        setLoading(false)
        if (handlers.onCompleted){
          handlers.onCompleted(result)
        }
      },
      error => {
        setError(error)
        if (handlers.onError){
          handlers.onError(error)
        }
      }
    )
  }
  return [call, { loading, error }]
}


async function rpcCall(body){
  const response = await fetch(
    '/.redwood/functions/rpc',
    {
      method: 'post',
      body: JSON.stringify(body)
    }
  )
  return await response.json()
}
