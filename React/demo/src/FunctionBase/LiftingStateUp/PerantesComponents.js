//  Send Data Child to Parent Component

import React from 'react'
import ChildComponets from './ChildComponets'

export default function PerantesComponents() {
  function demo(item) {
    console.log(item);
  }
  return (
    <div>
      <h1>Parents Compponents</h1>
      <ChildComponets data={demo} />
    </div>
  )
}
