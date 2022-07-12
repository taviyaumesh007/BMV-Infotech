import React, { useState } from 'react'

export default function ControllComponents() {
    const [val, setVal] = useState("")
    return (
        <div>
            <h1>Controll Componnents</h1>
            <h5>{val}</h5>
            <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
        </div>
    )
}
