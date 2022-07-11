import React from 'react'

export default function ChildComponets(props) {
    const a = "Child  Componets"
    return (
        <div>
            <h1>Child  Componets</h1>
            <button onClick={() => props.data(a)}>click</button>
        </div>
    )
}
