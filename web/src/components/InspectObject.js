import * as React from 'react'

export default function InspectObject({ object }){
  let string
  if (typeof object === 'function'){
    string = object.toString()
  }else if (typeof object === 'undefined'){
    string = 'undefined'
  }else{
    try{
      string = inspect(object)
    }catch(error){
      string = `ERROR: ${error}`
    }
  }
  return <div
    className="InspectObject"
    style={{
      padding: '1em',
      backgroundColor: 'white',
      color: 'black',
      overflow: 'scroll',
    }}
  >
    <pre><code>{string}</code></pre>
  </div>
}

function inspect(object, indentation = 2){
  return JSON.stringify(
    object,
    replaceUndefinedWithUndefinedString,
    indentation
  ).replace(/"UNDEFINEDPLACEHOLDER"/g, 'undefined')
}

const replaceUndefinedWithUndefinedString = (k, v) => {
  if (v === undefined) return 'UNDEFINEDPLACEHOLDER'
  if (v instanceof Error) return { message: v.message, stack: v.stack }
  return v
}
