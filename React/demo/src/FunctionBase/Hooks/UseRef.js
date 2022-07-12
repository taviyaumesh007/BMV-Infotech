import React, { useRef, useState } from 'react'

export default function UseRef() {
    const [name, setName] = useState("")
    const demo = useRef()
    function update() {
        console.log("call function")
        console.log()
        setName(demo.current.value)
        // demo.current.value = "1000"
        // demo.current.focus()
        // demo.current.style.display = "none"
    }
    return (
        <div>
            <h1>Use Ref</h1>
            <h5>{name}</h5>
            <input type="text" ref={demo} />
            <button onClick={update}>useref</button>
        </div>
    )
}
