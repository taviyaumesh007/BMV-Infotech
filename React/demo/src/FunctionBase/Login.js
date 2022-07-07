import React, { useState } from 'react'

export default function Login() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [userErr, setUserError] = useState(false)
    const [passErr, setPassError] = useState(false)
    function getdata(event) {
        if (name.length < 3 || password.length < 3) {
            alert("incorrect Detail")
        } else {
            alert("login success")
        }
        event.preventDefault()
    }
    function userHandler(event) {
        let item = event.target.value;
        if (item.length <= 3) {
            setUserError(true)
        } else {
            setUserError(false)
        }
        setName(item)
    }
    function passwordHandler(event) {
        let item = event.target.value;
        if (item.length <= 3) {
            setPassError(true)
        } else {
            setPassError(false)
        }
        setPassword(item)
    }
    return (
        <div>
            <h1>Login Form In React With Function Components</h1>
            <form onSubmit={getdata}>
                <input type="text" placeholder='username' onChange={userHandler} />{userErr ? <span>user not valide</span> : ""}<br />
                <input type="password" placeholder='password' onChange={passwordHandler} />{passErr ? <span>Password not valide </span> : ""}<br /><br />
                <button type='submit'>Log in</button>
            </form>
        </div>
    )
}
