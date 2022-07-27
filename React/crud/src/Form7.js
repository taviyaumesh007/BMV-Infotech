import React, { Component } from 'react'

export default class Form7 extends Component {
    constructor() {
        super();
        this.state = {
            inputData: {
                checkbox: []
            },
            arrayData: [],
            indexId: (-1)
        }
        this.handleChange = (e) => {
            const { name, value } = e.target
            this.setState({ inputData: { ...this.state.inputData, [name]: value } })
        }
        this.handleSubmit = () => {
            const { indexId } = this.state
            if (indexId !== -1) {
                const userId = this.state.arrayData.map((currval, index) => {
                    if (indexId === index) {
                        return this.state.inputData
                    }
                    return currval
                })
                console.log(userId)
                this.setState({ arrayData: userId })
                this.setState({ indexId: -1 })
            } else {
                const { arrayData, inputData } = this.state
                this.setState({ arrayData: [...arrayData, inputData] })
                // console.log({ arrayData: [...arrayData, inputData] })
            }
            this.state.inputData = {
                name: "",
                email: "",
                password: "",
                gender: "",
                option: "",
            }
        }
        this.deleteData = (ind) => {
            const { arrayData } = this.state
            const deleted = arrayData.filter((currval, index) => {
                return index !== ind
            })
            this.setState({ arrayData: deleted })
        }
        this.updateData = (ind) => {
            const { arrayData } = this.state
            const updated = arrayData.find((currval, index) => {
                return index === ind
            })
            this.setState({ inputData: updated })
            this.setState({ indexId: 0 })
        }
        this.handleCheck = (e) => {
            // debugger
            const { value } = e.target
            const { checkbox } = this.state.inputData
            const { inputData } = this.state.inputData
            if (checkbox.includes(value)) {
                const checkout = checkbox.filter((currval) => {
                    return currval !== value
                })
                this.setState({ inputData: { ...inputData, checkbox: checkout } })
            } else {
                this.setState({ inputData: { ...inputData, checkbox: [...checkbox, value] } })
                // console.log(value)
            }
        }
    }
    render() {
        return (
            <div>
                <h1>CRUD IN CLASS COMPONENTS</h1>
                <div>
                    <input type="text" name='name' placeholder='name' value={this.state.inputData.name} onChange={this.handleChange} />
                    <input type="email" name='email' placeholder='email' value={this.state.inputData.email} onChange={this.handleChange} />
                    <input type="password" name='password' placeholder='password' value={this.state.inputData.password} onChange={this.handleChange} />
                </div>
                <div>
                    <input type="radio" name='gender' value='male' checked={this.state.inputData.gender === "male"} onChange={this.handleChange} />male
                    <input type="radio" name='gender' value='female' checked={this.state.inputData.gender === "female"} onChange={this.handleChange} />female
                </div>
                <div>
                    <select name="option" value={this.state.inputData.option} onChange={this.handleChange} >
                        <option value="">-select-</option>
                        <option value="laptop">laptop</option>
                        <option value="keyboard">keyboard</option>
                        <option value="mouse">mouse</option>
                    </select>
                </div>
                <div>
                    <input type="checkbox" value='JBL' onChange={this.handleCheck} />JBL
                    <input type="checkbox" value='SONY' onChange={this.handleCheck} />SONY
                    <input type="checkbox" value='boat' onChange={this.handleCheck} />boat
                </div>
                <div>
                    <button onClick={this.handleSubmit}>Submit</button>
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
                            <th>Delete&Update</th>
                        </thead>
                        <tbody>
                            {
                                this.state.arrayData.map((currval, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{currval.name}</td>
                                        <td>{currval.email}</td>
                                        <td>{currval.password}</td>
                                        <td>{currval.gender}</td>
                                        <td>{currval.option}</td>
                                        <td>
                                            <button onClick={() => this.deleteData(index)}>Delete</button>
                                            <button onClick={() => this.updateData(index)}>Update</button>
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
}

