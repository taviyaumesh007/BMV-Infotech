import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState("");
    const [movies, setMovies] = useState("");
    const [tnc, setTnc] = useState(false);


    function getData(event) {
        console.log(name, tnc, movies)
        event.preventDefault()
    }
    return (
        <div>
            <h2>Handel Form In React With Function component</h2>

            <form onSubmit={getData}>
                <input type="text" placeholder='name' onChange={(event) => setName(event.target.value)} /><br /><br />
                <select onChange={(event) => setMovies(event.target.value)}>
                    <option value="">-select-</option>
                    <option value="marvel">marvel</option>
                    <option value="DC">DC</option>
                </select><br /><br />
                <input type="checkbox" onChange={(event) => setTnc(event.target.checked)} /> <span>Term and Condition</span><br /><br />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}
