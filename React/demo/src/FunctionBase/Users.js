import { useState } from "react"

function Users() {
    const [data, setData] = useState(0)
    return (
        <div className="app">
            <h1>{data}</h1>
            <button onClick={() => setData(data + 1)}>Increement</button>
            <button onClick={() => setData(data - 1)}>decreement</button>
        </div>
    )
}
export default Users;