import React, { useState } from 'react'

export default function Form2() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [gender, setGender] = useState()
    const [option, setOption] = useState()
    const [chkbox, setChkBox] = useState([])

    const [arryaData, setArrayData] = useState([])
    const [status, setStatus] = useState(false)
    const [newData, setNewData] = useState("")

    const obj = {
        //key : value
        name: name,
        email: email,
        password: password,
        gender: gender,
        option: option,
        chkbox: chkbox
    }

    // validation with if Condition
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [optionError, setOptionError] = useState(false)
    const [genderError, setGenderError] = useState(false)
    const Submit = () => {
        console.log(obj)
        // let paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        // name Condition
        if ((!obj.name || obj.email.length < 3)) {
            setNameError(true)
        } else {
            setNameError(false)
        }
        // Email Condition
        if (!obj.email || obj.email.length < 3) {
            setEmailError(true)
        }
        else {
            setEmailError(false)
        }
        // Password Condition
        if ((!obj.password || obj.password.length < 3)) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }
        // Gender Condition
        if (!(obj.gender)) {
            setGenderError(true)
        } else {
            setGenderError(false)
        }
        if (!obj.option) {
            setOptionError(true)
        } else {
            setOptionError(false)
        }
        if (obj.name && obj.email && obj.password && obj.gender && obj.option && obj.chkbox) {
            if (status) {
                let edit = arryaData.map((curval, index) => {
                    if (index === newData) {
                        return obj
                    }
                    return curval
                })
                setArrayData(edit)
                setStatus(false)
            } else {
                setArrayData([...arryaData, obj])
            }
            setName('')
            setEmail('')
            setPassword('')
            setGender('')
            setOption('')
            setChkBox('')
        }
    }
    const deleteData = (ind) => {
        const deleted = arryaData.filter((curval, index) => {
            return index !== ind
        })
        setArrayData(deleted)
    }
    const updateData = (ind) => {
        const updated = arryaData.find((curval, index) => {
            return index === ind
        })
        setName(updated.name)
        setEmail(updated.email)
        setPassword(updated.password)
        setGender(updated.gender)
        setOption(updated.option)
        setChkBox(updated.chkbox)
        setStatus(true)
        setNewData(ind)
    }

    const chkbHandler = (e) => {
        const { value } = e.target;
        if (chkbox.includes(value)) {
            const chkdata = chkbox.filter((currelm) => {
                return currelm !== value
            })
            setChkBox(chkdata)
        } else {
            setChkBox([...chkbox, value])
        }
    }
    return (
        <div>
            <h1>CURD IN REACT</h1>
            <div>
                <section>
                    <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />{nameError ? <span>please enter name</span> : ""}
                    <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />{emailError ? <span>please enter Email</span> : ""}
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />{passwordError ? <span>please enter Password</span> : ""}
                </section>
                <section>
                    <p>Gender</p>
                    <input type="radio" name='gender' checked={gender === 'male'} value='male' onChange={(e) => setGender(e.target.value)} />male
                    <input type="radio" name='gender' checked={gender === 'female'} value='female' onChange={(e) => setGender(e.target.value)} />female
                </section>{genderError ? <span>please select gender</span> : ""}
                <section>
                    <select value={option} onChange={(e) => setOption(e.target.value)}>
                        <option value="">-select-</option>
                        <option value="laptop">laptop</option>
                        <option value="keyboard">keyboard</option>
                        <option value="mobile">mobile</option>
                    </select>
                </section>{optionError ? <span>please select option</span> : ""}
                <section>
                    <input type="checkbox" checked={chkbox.includes('boat')} value='boat' onChange={chkbHandler} />boat
                    <input type="checkbox" checked={chkbox.includes('JBL')} value='JBL' onChange={chkbHandler} />JBL
                    <input type="checkbox" checked={chkbox.includes('SONY')} value='SONY' onChange={chkbHandler} />SONY
                </section>
                <br /><button onClick={Submit}>Submit</button>
            </div>
            <section>
                <table>
                    <tr>
                        <th>index</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Gender</th>
                        <th>Option</th>
                        <th>checkbox</th>
                        <th>Delete&Update</th>
                    </tr>
                    <tbody>
                        {arryaData.map((curval, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{curval.name}</td>
                                <td>{curval.email}</td>
                                <td>{curval.password}</td>
                                <td>{curval.gender}</td>
                                <td>{curval.option}</td>
                                <td>{curval.chkbox}</td>
                                <td>
                                    <button onClick={() => deleteData(index)}>Delete</button>
                                    <button onClick={() => updateData(index)}>Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div >
    )
}
