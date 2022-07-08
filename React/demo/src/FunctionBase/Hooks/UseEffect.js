import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [data, setData] = useState(0)
    useEffect(() => {
        console.log("hello")
    })
    return (
        <div>
            <h1>UseEffect</h1>
            <button onClick={(data + 1)}>useEffect</button>
        </div>
    )
}
