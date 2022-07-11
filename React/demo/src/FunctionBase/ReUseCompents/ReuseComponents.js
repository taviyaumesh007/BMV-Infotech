import React from 'react'
import ChildComponents from './ChildComponents'

export default function ReuseComponents() {
  const users = [
    { name: 'umesh', city: 'gadhada', state: 'gujrat' },
    { name: 'akash', city: 'surat', state: 'gujrat' },
    { name: 'prakash', city: 'bhavnagar', state: 'gujrat' },
  ]

  return (
    <div>

      {
        users.map((emp) =>
          <ChildComponents data={emp} />
        )
      }
    </div>
  )
}
