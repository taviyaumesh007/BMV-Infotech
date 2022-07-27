import React, { useState } from 'react'

export default function Form4() {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        option: "",
        checkbox: [],

    })
    const [arrayData, setArrayData] = useState(JSON.parse(localStorage.getItem("formItem")) || [])
    const [indexId, setIndexId] = useState(-1)
    const [search, setSearch] = useState()
    const [image, setImage] = useState('')

    const Submit = () => {
        if (indexId !== -1) {
            // console.log(indexId)
            const userId = arrayData.map((currval, index) => {
                if (index === indexId) {
                    return inputData
                }
                return currval
            })
            setArrayData(userId)
            setIndexId(-1)
            // console.log("index----", indexId)
        } else {
            setArrayData([...arrayData, inputData])
            //  console.log(arrayData)
        }
        setInputData({
            name: "",
            email: "",
            password: "",
            gender: "",
            option: "",
            checkbox: []
        })
        localStorage.setItem('formItem', JSON.stringify([...arrayData, inputData]))
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value })
    }
    const imgHandler = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
        console.log(image)
    }
    const deleteData = (ind) => {
        // console.log("ind:", ind)
        const deleted = arrayData.filter((currval, index) => {
            // console.log(index)
            return index !== ind
        })
        // console.log(deleted)
        setArrayData(deleted)
        localStorage.setItem('formItem', JSON.stringify(deleted))
    }
    const updateData = (ind) => {
        const updated = arrayData.find((currval, index) => {
            return index === ind
        })
        // console.log(updated)
        setInputData(updated)
        setIndexId(ind)
    }
    const checkHandle = (e) => {
        debugger
        const { value } = e.target
        const { checkbox } = inputData
        if (checkbox.includes(value)) {
            const checkout = (checkbox || []).filter((currval) => {
                return currval !== value;
            })
            setInputData({ ...inputData, checkbox: checkout })
            // console.log(checkout)
        } else {
            setInputData({ ...inputData, checkbox: [...checkbox, value] })
        }
    }
    const searchButton = () => {
        const dblData = JSON.parse(localStorage.getItem('formItem'))
        const searchUser = dblData.filter((currval) => {
            return currval.email === search
        })
        setArrayData(searchUser)
    }
    return (
        <div>
            <h1>Function base CRUD 4</h1>
            <div>
                <input type="text" name="name" placeholder='name' value={inputData.name} onChange={handleChange} />
                <input type="text" name="email" placeholder='email' value={inputData.email} onChange={handleChange} />
                <input type="text" name="password" placeholder='password' value={inputData.password} onChange={handleChange} />
                <input type="radio" name="gender" value="male" onChange={handleChange} />male
                <input type="radio" name="gender" value="female" onChange={handleChange} />female
            </div>

            <div>
                <select name="option" value={inputData.option} onChange={handleChange}>
                    <option value="">-select-</option>
                    <option value="laptop">laptop</option>
                    <option value="keyboard">keyboard</option>
                    <option value="mouse">mouse</option>
                </select>
            </div>
            <div>
                <input type="checkbox" name='checkbox' checked={inputData.checkbox.includes('JBL')} value='JBL' onChange={checkHandle} />JBL
                <input type="checkbox" name='checkbox' checked={inputData.checkbox.includes('SONY')} value='SONY' onChange={checkHandle} />SONY
                <input type="checkbox" name='checkbox' checked={inputData.checkbox.includes('boat')} value='boat' onChange={checkHandle} />boat
            </div>
            <div>
                <input type="file" onChange={imgHandler} />
            </div>
            <div>
                <button onClick={Submit}>Submit</button>
            </div>
            <div>
                <input type="search" placeholder='search' onChange={(e) => setSearch(e.target.value)} />
                <button onClick={searchButton}>Search</button>
            </div><br />
            <table>
                <thead>
                    <th>index</th>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                    <th>gender</th>
                    <th>option</th>
                    <th>checkbox</th>
                    <th>Image</th>
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
                                <img className='imgstyle' src={image} alt='' ></img>
                            </td>
                            <td>
                                <button onClick={() => deleteData(index)}>Delete</button>
                                <button onClick={() => updateData(index)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
