import React from 'react'
export default function Student(Props) {
    return (
        <div className='props'>
            <h2>Student component</h2>
            <h3>Name is : {Props.name}</h3>
            <h3>Email : {Props.email}</h3>
        </div>
    )
}
