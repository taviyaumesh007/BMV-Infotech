import React, { useState } from 'react'

export default function HOC() {
    return (
        <div>
            <h1>HOC(Hight order component)</h1>
            <Red />
            <Green />
            <Blue />
        </div>
    );
}
function Red() {
    return (
        <>
            <h3>Red Counter</h3>
            <h4 style={{ backgroundColor: "red" }}><Counter /></h4>
        </>
    )
}
function Green() {
    return (
        <>
            <h3>Green Counter</h3>
            <h4 style={{ backgroundColor: "green" }}><Counter /></h4>
        </>
    )
}
function Blue() {
    return (
        <>
            <h3>Blue Counter</h3>
            <h4 style={{ backgroundColor: "blue" }}><Counter /></h4>
        </>
    )
}
function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h5>{count}</h5>
            <button onClick={() => setCount(count + 1)}>Update</button>
        </div>
    )
}

