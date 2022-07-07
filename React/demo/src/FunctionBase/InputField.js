import React, { useState } from 'react'

export default function InputField() {
    const [data, setData] = useState("")
    const [print, setPrint] = useState(false)
    function getdata(val) {
        setData(val.target.value)
        setPrint(false)
    }
    return (
        <div>
            {
                print ?
                    <h1>{data}</h1>
                    : null
            }
            <input type="text" onChange={getdata} />
            <button onClick={() => setPrint('true')}>Print data </button>
        </div>
    )
}
