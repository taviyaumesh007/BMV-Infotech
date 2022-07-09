import React, { useEffect } from 'react'

export default function ChildUseEfect(props) {
    useEffect(() => {
        console.log("data useEffect ")
    }, [props.data])
    useEffect(() => {
        console.log("count useEffect ")
    }, [props.count])
    return (
        <div>
            <h1>Data Props : {props.data}</h1>
            <h1>Count Props  : {props.count}</h1>
        </div>
    )
}
