import React from 'react'

export default function ChildComponents(props) {
    return (
        <div>
            <p>Name is: {props.data.name}, from : {props.data.city}, State: {props.data.state}</p>
        </div>
    )
}
