import React, { useState } from 'react'

export default function IfElse() {
    // const [login, setLogin] = useState(false)
    // if (login) {
    //     return (
    //         <div>
    //             <h1>If Else Condition In React1</h1>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <h1>If Else Condition In React2</h1>
    //         </div>
    //     )
    // }
    const [login, setLogin] = useState(1)
    return (
        <div>
            {login === 1 ?
                <h1>hello</h1>
                : login === 2 ? <h2> hi1</h2>
                    : <h2>hi2</h2>
            }
        </div >
    )
}
