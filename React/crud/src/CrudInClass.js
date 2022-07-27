import React, { Component } from 'react'

export default class CrudInClass extends Component {
    constructor() {
        super()
        this.state = {
            inputData: {
                checkbox: []
            },
            arrayData: [],
            indexId: (-1)
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target
        // console.log(e.target.value)
        this.setState({ inputData: { ...this.state.inputData, [name]: value } })
    }
    Submit = () => {
        if (this.state.indexId !== -1) {
            const updateUser = this.state.arrayData.map((currval, index) => {
                if (index === this.state.indexId) {
                    return this.state.inputData
                }
                return this.state.currval
            })
            this.setState({ arrayData: updateUser })
            this.setState({ indexId: -1 })
        } else {
            this.setState({ arrayData: [...this.state.arrayData, this.state.inputData] })
            // console.log(this.state.arrayData)
        }
        this.setState({
            inputData: {
                name: "",
                email: "",
                password: "",
                gender: "",
                option: "",
                checkbox: []

            }
        })
    }
    deleteData = (ind) => {
        const deleted = this.state.arrayData.filter((currvalue, index) => {
            return index !== ind
        })
        this.setState({ arrayData: deleted })
    }
    updateData = (ind) => {
        const updated = this.state.arrayData.find((currval, index) => {
            return index === ind
        })
        this.setState({ inputData: updated })
        this.setState({ indexId: 0 })
    }
    handleCheck = (e) => {
        const { value } = e.target
        const { inputData } = this.state
        const { checkbox } = this.state.inputData
        // debugger
        if (checkbox.includes(value)) {
            const checkout = checkbox.filter((currval) => {
                return currval !== value
            })
            this.setState({ inputData: { ...inputData, checkbox: checkout } })
            // console.log(checkout)
        } else {
            this.setState({ inputData: { ...inputData, checkbox: [...checkbox, value] } })
            // console.log(checkbox)
        }
    }
    render() {
        return (
            <div>
                <h1>CRUD IN CLASS COMPONENTS</h1>

                <div>
                    <input type="text" placeholder='name' name='name' value={this.state.inputData.name} onChange={this.handleChange} />
                    <input type="email" placeholder='email' name='email' value={this.state.inputData.email} onChange={this.handleChange} />
                    <input type="text" placeholder='password' name='password' value={this.state.inputData.password} onChange={this.handleChange} />
                </div>
                <div>
                    <input type="radio" name='gender' checked={this.state.inputData.gender === "male"} value='male' onChange={this.handleChange} />male
                    <input type="radio" name='gender' checked={this.state.inputData.gender === "male"} value='female' onChange={this.handleChange} />female
                </div>
                <div>
                    <select name='option' value={this.state.inputData.option} onChange={this.handleChange}>
                        <option value="">-select-</option>
                        <option value="lenovo">lenovo</option>
                        <option value="HP">HP</option>
                        <option value="DELL">DELL</option>
                    </select>
                </div>
                <div>
                    <input type="checkbox" checked={this.state.inputData.checkbox.includes("JBL")} onChange={this.handleCheck} value='JBL' />JBL
                    <input type="checkbox" checked={this.state.inputData.checkbox.includes("SONY")} onChange={this.handleCheck} value='SONY' />SONY
                    <input type="checkbox" checked={this.state.inputData.checkbox.includes("boat")} onChange={this.handleCheck} value='boat' />boat
                </div>
                <div>
                    <button onClick={this.Submit}>Submit</button>
                </div>
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
                        {this.state.arrayData.map((currvalue, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{currvalue.name}</td>
                                <td>{currvalue.email}</td>
                                <td>{currvalue.password}</td>
                                <td>{currvalue.gender}</td>
                                <td>{currvalue.option}</td>
                                <td>{currvalue.checkbox}</td>
                                <td>
                                    <button onClick={() => this.deleteData(index)}>Delete</button>
                                    <button onClick={() => this.updateData(index)}>Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
