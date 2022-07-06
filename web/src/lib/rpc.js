import { useState, useEffect } from 'react'

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

export function useServiceQuery(serviceName, options = {}){
  const [data, setData] = useState()

  const [call, { loading, error }] = useService(serviceName, {
    onCompleted(data){ setData(data) }
  })
  useEffect(
    () => { call(options) },
    [serviceName]
  )
  return { loading, error, data }
}



async function rpcCall(body){
  const response = await fetch(
    '/.redwood/functions/rpc',
    {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'auth-provider': 'dbAuth',
        'Content-Type': 'application/json',
      },
    }
  )
  return await response.json()
}
