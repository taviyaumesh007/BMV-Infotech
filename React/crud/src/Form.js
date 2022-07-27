import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [option, setOption] = useState()
    const [gender, setGender] = useState()
    const [checkbox, setCheckbox] = useState([])


    const [arrayData, setArrayData] = useState([])
    const [status, setStatus] = useState(false)
    const [newData, setNewData] = useState("")
    const [allError, setAllError] = useState({})
    const data = {
        name: name,
        email: email,
        password: password,
        option: option,
        gender: gender,
        checkbox: checkbox
    }
    const validate = (key, value) => {
        switch (key) {
            case "name":
                if (!value) {
                    return "name is require"
                } else {
                    return " "
                }
            case "email":
                if (!value) {
                    return "email is require"
                } else {
                       return " "
                }
            case "password":
                if (!value) {
                    return "password is require"
                } else {
                    return " "
                }
            case "option":
                if (!value) {
                    return "option is require"
                } else {
                    return " "
                }
            case "gender":
                if (!value) {
                    return "gender is require"
                } else {
                    return " "
                }
            case "checkbox":
                if (value.length === 0) {
                    return "checkbox is require"
                } else {
                    return " "
                }
            default:
                return " "
        }
    }
    const getData = () => {
        const errors = {}
        Object.keys(data).forEach((key) => {
            // console.log(" keys : ", key)
            let error = validate(key, data[key])
            errors[key] = error;
            // console.log("error", errors[key])
        })
        if (Object.keys(errors).length) {
            setAllError(errors)
        }
        // console.log(allError)
        if (status) {
            let edit = arrayData.map((value, index) => {
                if (index === newData) {
                    return data;
                }
                return value
            })
            setArrayData(edit)
            setStatus(false)
        } else {
            setArrayData([...arrayData, data])
        }
        setName("")
        setEmail("")
        setPassword("")
        setOption("")
        setGender("")
        setCheckbox("")

    }
    function DeleteData(del) {
        let deleteData = arrayData.filter((value, index) => {
            return index !== del
        })
        setArrayData(deleteData)
    }
    function UpdateData(upd) {
        let updateData = arrayData.find((value, index) => {
            return index === upd
        })
        setName(updateData.name)
        setEmail(updateData.email)
        setPassword(updateData.password)
        setGender(updateData.gender)
        setOption(updateData.option)
        setCheckbox(updateData.checkbox)
        setStatus(true)
        setNewData(upd)
    }
    const chdBox = (e) => {
        const { value } = e.target;
        setCheckbox([...checkbox, value])
    }
    return (
        <div>
            <div>
                <ul>
                    <li><input type="text" value={name} placeholder='Name' onChange={(event) => setName(event.target.value)} /></li><span>{allError?.name ? allError.name : ""}</span>
                    <li><input type="text" value={email} placeholder='Email' onChange={(event) => setEmail(event.target.value)} /></li><span>{allError?.email ? allError.email : ""}</span>
                    <li><input type="text" value={password} placeholder='Password' onChange={(event) => setPassword(event.target.value)} /></li><span>{allError?.password ? allError.password : ""}</span>
                    <p>Gender</p>
                    <li>
                        <input type="radio" name='gender' checked={gender === "male"} value="male" onChange={(event) => setGender(event.target.value)} />Male
                        <input type="radio" name='gender' checked={gender === "female"} value="female" onChange={(event) => setGender(event.target.value)} />Female
                    </li><span>{allError?.gender ? allError.gender : ""}</span>
                    <p>Select Option</p>
                    <select value={option} onChange={(event) => setOption(event.target.value)}>
                        <option value="Select" >-Select-</option>
                        <option value="Laptop" >Laptop</option>
                        <option value="Keybord" >Keybord</option>
                        <option value="CPU" >CPU</option>
                    </select><span>{allError?.option ? allError.option : ""}</span>
                    <li>
                        <p>Checkbox : </p>
                        <input type="checkbox" checked={checkbox.includes('boat')} value='boat' onChange={chdBox} />boat
                        <input type="checkbox" checked={checkbox.includes('mobile')} value='mobile' onChange={chdBox} />mobile
                        <input type="checkbox" checked={checkbox.includes('desktop')} value='desktop' onChange={chdBox} />desktop
                    </li><span>{allError?.checkbox ? allError.checkbox : ""}</span>
                </ul>
                <button onClick={getData}>Submit</button>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>name</th>
                                <th>Email</th>
                                <th>password</th>
                                <th>option</th>
                                <th>Gender</th>
                                <th>Checkbox</th>
                                <th>Delete/Update  </th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrayData.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>{item.option}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.checkbox}</td>
                                    <td>
                                        <button onClick={() => DeleteData(index)}>Delete</button>
                                        <button onClick={() => UpdateData(index)}>Update</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
} 