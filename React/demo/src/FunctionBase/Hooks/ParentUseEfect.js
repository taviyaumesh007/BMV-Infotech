import React, { useState, useEffect } from 'react'
import ChildUseEfect from './ChildUseEfect'

export default function ParentUseEfect() {
  const [data, setData] = useState(10)
  const [count, setCount] = useState(20)

  // useEffect(() => {
  //   console.log("useEffect data called")
  // }, [data])

  // useEffect(() => {
  //   console.log("useEffect count called")
  // }, [count])
  return (
    <div>
      {/* State update with useEffect */}
      {/* <h1>Data : {data}</h1>
      <h1>Count : {count}</h1> */}

      {/* props update with useEffect */}
      <ChildUseEfect data={data} count={count} />

      <button onClick={() => setData(data + 1)}>Data Update</button>
      <button onClick={() => setCount(count + 1)}>Count Update</button>
    </div>
  )
}
