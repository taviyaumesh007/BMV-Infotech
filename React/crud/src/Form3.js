import React, { useState } from 'react'
export default function Form3() {

    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        option: "",
        sound: [],
    })
    const [search, setSearch] = useState()
    const [arrayData, setArrayData] = useState(
        JSON.parse(localStorage.getItem("formItem")) || [])
    const [indexId, setIndexId] = useState(-1)
    // console.log("index id : ", indexId)
    const [allError, setAllError] = useState({})
    // console.log('all errors : ', allError)
    // validation
    const validate = (key, value) => {
        switch (key) {
            case "name":
                if (!value) {
                    return "name iss  requeire"
                } else {
                    return ""
                }
            case "email":
                if (!value) {
                    return "email is require"
                } else {
                    return ""
                }
            case "password":
                if (!value) {
                    return "password is require"
                } else {
                    return ""
                }
            case "gender":
                if (!value) {
                    return "Gender id require"
                } else {
                    return ""
                }
            case "option":
                if (!value) {
                    return "option id require"
                } else {
                    return ""
                }
            case "sound":
                if (value.length === 0) {
                    return "checkbox id require"
                } else {
                    return ""
                }
            default:
                return " "
        }
    }
    const submit = () => {
        // debugger
        const errors = {}
        Object.keys(inputData).forEach((key) => {
            let error = validate(key, inputData[key])
            if (error) {
                errors[key] = error
            }
        })
        if (Object.keys(errors).length) {
            setAllError(errors)
        } else {
            // console.log(allError)
            if (indexId !== -1) {
                const updateUser = arrayData.map((elm, index) => {
                    if (index === indexId) {
                        return inputData
                    }
                    return elm
                })
                setArrayData(updateUser)
            } else {
                setArrayData([...arrayData, inputData])
            }
        }
        setInputData({
            name: "",
            email: "",
            password: "",
            gender: "",
            option: "",
            sound: []
        })
        localStorage.setItem("formItem", JSON.stringify([...arrayData, inputData]))
    }
    // console.log(arrayData)
    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(e.target)
        setInputData({ ...inputData, [name]: value })
        // console.log(inputData)   
    }
    const deleteData = (ind) => {
        // console.log(ind)
        const deleted = arrayData.filter((curr, index) => {
            return ind !== index
        })
        setArrayData(deleted)
        localStorage.setItem("formItem", JSON.stringify(deleted))
    }
    const updateData = (ind) => {
        // console.log("update ind : ", ind)
        const upadated = arrayData.find((curr, index) => {
            // console.log("update index : ", index)
            return index === ind
        })
        setInputData(upadated)
        setIndexId(ind)
    }
    const checkHandler = (e) => {
        const { value } = e.target;
        const { sound } = inputData;
        if (inputData.sound.includes(value)) {
            const checkOut = sound.filter((elm) => {
                return elm !== value
            })
            setInputData({ ...inputData, sound: checkOut })
        } else {
            setInputData({ ...inputData, sound: [...sound, value] })
        }
    }
    // console.log(" input data box  ", inputData)

    const searchButton = () => {
        const dbldata = JSON.parse(localStorage.getItem('formItem'))
        // if (!dbldata) {
        //     setArrayData(dbldata)
        // }
        const searchData = dbldata.filter((currvalue) => {
            return currvalue.name === search
        })
        setArrayData(searchData)
    }
    return (
        <div>
            <h1>crud 3</h1>
            <div>
                <input type="text" name='name' value={inputData.name} onChange={handleChange} /><span>{allError?.name ? allError.name : ""}</span>
                <input type="text" name='email' value={inputData.email} onChange={handleChange} /><span>{allError?.email ? allError.email : ""}</span>
                <input type="password" name='password' value={inputData.password} onChange={handleChange} /><span>{allError?.password ? allError.password : ""}</span>
                <div>
                    <input type="radio" name='gender' checked={inputData.gender === "male"} value='male' onChange={handleChange} />male
                    <input type="radio" name='gender' checked={inputData.gender === "female"} value='female' onChange={handleChange} />female <span>{allError?.gender ? allError.gender : ""}</span>
                </div>
                <div>
                    <select name='option' onChange={handleChange} >
                        <option value="">-select-</option>
                        <option value="laptop">laptop</option>
                        <option value="mouse">mouse</option>
                        <option value="keyboard">keyboard</option>
                    </select><span>{allError?.option ? allError.option : ""}</span>
                </div>
                <div>
                    <input type="checkbox" name='sound' checked={inputData.sound.includes('JBL')} value='JBL' onChange={checkHandler} />JBL
                    <input type="checkbox" name='sound' checked={inputData.sound.includes('SONY')} value='SONY' onChange={checkHandler} />SONY
                    <input type="checkbox" name='sound' checked={inputData.sound.includes('boat')} value='boat' onChange={checkHandler} />boat
                </div><span>{allError?.sound ? allError.sound : ""}</span>
                <button onClick={submit} type="submit">submit</button>
                <div><br />
                    <div >
                        <input type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                        <button onClick={searchButton} type="submit">Search</button>
                    </div>

                    <table>
                        <thead>
                            <th>index</th>
                            <th>name</th>
                            <th>email</th>
                            <th>password</th>
                            <th>Gender</th>
                            <th>option</th>
                            <th>checkbox</th>
                            <th>Delete&Update</th>
                        </thead>
                        <tbody>
                            {arrayData.map((curr, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{curr.name}</td>
                                    <td>{curr.email}</td>
                                    <td>{curr.password}</td>
                                    <td>{curr.gender}</td>
                                    <td>{curr.option}</td>
                                    <td>{curr.sound}</td>
                                    <td>
                                        <button onClick={() => deleteData(index)}>Delete</button>
                                        <button onClick={() => updateData(index)}>Update</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
