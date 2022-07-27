import React, { useState } from 'react'

export default function Form6() {

    const [inputData, setInputData] = useState({
        checkbox: []
    })
    const [arrayData, setArrayData] = useState([])
    const [indexId, setIndexId] = useState(-1)
    const handleSubmit = () => {
        if (indexId !== -1) {
            const userId = (arrayData || []).map((currval, index) => {
                if (indexId === index) {
                    return inputData
                }
                console.log(currval)
                return currval
            })
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
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputData({ ...inputData, [name]: value })

        // console.log(inputData)
    }

    const deleteData = (ind) => {
        const deleted = (arrayData || []).filter((currval, index) => {
            return index !== ind
        })
        // console.log(deleted)
        setArrayData(deleted)
    }
    const updateData = (ind) => {
        const updated = (arrayData || []).find((currval, index) => {
            return index === ind
        })
        // console.log(updated)
        setInputData(updated)
        setIndexId(0)
    }
    const handleCheck = (e) => {
        const { value } = e.target
        const { checkbox } = inputData
        if (inputData.checkbox.includes(value)) {
            const checkout = checkbox.filter((currval) => {
                return currval !== value
            })
            setInputData({ ...inputData, checkbox: checkout })
        } else {
            // console.log(value)
            setInputData({ ...inputData, checkbox: [...checkbox, value] })
            // console.log(inputData)
        }
    }
    return (
        <div>
            <div>
                <input type="text" name='name' placeholder='name' value={inputData.name} onChange={handleChange} />
                <input type="text" name='email' placeholder='email' value={inputData.email} onChange={handleChange} />
                <input type="text" name='password' placeholder='password' value={inputData.password} onChange={handleChange} />
            </div>
            <div>
                <input type="radio" name='gender' value='male' checked={inputData.gender === "male"} onChange={handleChange} />male
                <input type="radio" name='gender' value='female' checked={inputData.gender === "female"} onChange={handleChange} />female
            </div>
            <div>
                <select name="option" value={inputData.option} onChange={handleChange} >
                    <option value="">-select-</option>
                    <option value="laptop">laptop</option>
                    <option value="keyboard">keyboard</option>
                    <option value="mouse">mouse</option>
                </select>
            </div>
            <div>
                <input type="checkbox" value='JBL' onChange={handleCheck} />JBL
                <input type="checkbox" value='SONY' onChange={handleCheck} />SONY
                <input type="checkbox" value='boat' onChange={handleCheck} />boat
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
                                <td>
                                    <button onClick={() => deleteData(index)}>delete</button>
                                    <button onClick={() => updateData(index)}>Update</button>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
