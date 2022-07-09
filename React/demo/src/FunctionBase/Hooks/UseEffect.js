import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [data, setData] = useState(0)
    useEffect(() => {
        console.log("hello")
    }, [])        // only one time render
    return (
        <div>
            <h1>UseEffect : {data}</h1>
            <button onClick={() => setData(data + 1)}>useEffect</button>
        </div>
    )
}


// useEffect Combination of life cycle