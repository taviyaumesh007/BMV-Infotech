import React from 'react'

export default function FunctionPasswithProps(props) {
    return (
        <div>
            <h1>Function Pass with Props</h1>
            <button onClick={props.data}>click</button>
        </div>

    )
}
