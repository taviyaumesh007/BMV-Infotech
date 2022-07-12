import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(1)

    const multicountMemo = useMemo(() => {
        console.log("multicount")
        return count * 5
    }, [count])
    return (
        <div>
            <h1>Use Memo</h1>
            <h3>Count : {count}</h3>
            <h3>Item : {item}</h3>
            <h3>multicount : {multicountMemo}</h3>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
            <button onClick={() => setItem(item * 10)}>Update Item</button>
        </div >
    )
}

