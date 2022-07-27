import React, { useState } from 'react'

export default function Form5() {
    const [inputData, setInputData] = useState({
        checkbox: []
    })
    const [arrayData, setArrayData] = useState([])
    const [indexId, setIndexId] = useState(-1)
    const handleChange = (e) => {
        const { name, value } = e.target
        setInputData({ ...inputData, [name]: value })
        // console.log(inputData)
    }
    const handleSubmit = () => {
        // debugger
        if (indexId !== -1) {
            const userId = (arrayData || []).map((currval, index) => {
                if (indexId === index) {
                    return inputData
                }
                return currval
            })
            console.log(userId)
            setArrayData(userId)
            setIndexId(-1)
        } else {
            setArrayData([...arrayData, inputData])
            // console.log(arrayData)
        }
        setInputData({
            name: "",
            email: "",
            password: "",
            gender: "",
            option: "",
            checkbox: []
        })
    }

    const deleteData = (ind) => {
        const deleted = arrayData.filter((currval, index) => {
            // console.log(index !== ind)
            return index !== ind
        })
        // console.log(deleted)
        setArrayData(deleted)
    }
    const updateData = (ind) => {
        const updated = arrayData.find((currval, index) => {
            return index === ind
        })
        // console.log(updated)
        setInputData(updated)
        setIndexId(0)
    }
    const checkHandle = (e) => {
        const { value } = e.target
        const { checkbox } = inputData
        if (checkbox.includes(value)) {
            const checkout = (checkbox || []).filter((currval) => {
                return currval !== value
            })
            console.log(checkout)
            setInputData({ ...inputData, checkbox: checkout })
        } else {
            setInputData({ ...inputData, checkbox: [...checkbox, value] })
        }
    }
    return (
        <div>
            <h1>CRUD PRECTICE</h1>
            <div>
                <input type="text" name='name' value={inputData.name} placeholder='Name' onChange={handleChange} />
                <input type="email" name='email' value={inputData.email} placeholder='email' onChange={handleChange} />
                <input type="password" name='password' value={inputData.password} placeholder='password' onChange={handleChange} />
            </div>

            <div>
                <input type="radio" name='gender' checked={inputData.gender === "male"} value='male' onChange={handleChange} />male
                <input type="radio" name='gender' checked={inputData.gender === "female"} value='female' onChange={handleChange} />female
            </div>
            <div>
                <select name='option' value={inputData.option} onChange={handleChange}>
                    <option value=''>-select-</option>
                    <option value="laptop">leptop</option>
                    <option value="keyboard">keyboard</option>
                    <option value="mouse">mouse</option>
                </select>
            </div>
            <div>
                <input type="checkbox" checked={inputData.checkbox.includes('JBL')} value='JBL' onChange={checkHandle} />JBL
                <input type="checkbox" checked={inputData.checkbox.includes('boat')} value='boat' onChange={checkHandle} />boat
                <input type="checkbox" checked={inputData.checkbox.includes('SONY')} value='SONY' onChange={checkHandle} />SONY
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div>
                <table>
                    <thead>
                        <th>index</th>
                        <th>name</th>
                        <th>email</th>
                        <th>password</th>
                        <th>gender</th>
                        <th>option</th>
                        <th>checkbox</th>
                        <th>Delete/Update</th>
                    </thead>
                    <tbody>
                        {(arrayData || []).map((currval, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{currval.name}</td>
                                <td>{currval.email}</td>
                                <td>{currval.password}</td>
                                <td>{currval.gender}</td>
                                <td>{currval.option}</td>
                                <td>{currval.checkbox}</td>
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
    )
}
