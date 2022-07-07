import React, { Component } from 'react'

export default class Form1 extends Component {

    constructor() {
        super();
        this.state = {
        }
    }

    handlechange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.item]: e.target.checked
        })
    }
    render() {
        return (
            <div>
                <h2>Handel Form In React With Class component</h2>
                <div>
                    <input type="text" placeholder='name' value={this.state.name} name="name" onChange={this.handlechange} /><br /><br />
                    <select value={this.state.movies} movies="movies" onChange={this.handlechange}>
                        <option>-select-</option>
                        <option>marvel</option>
                        <option>DC</option>
                    </select><br /><br />
                    <input type="checkbox" checked={this.state.item} item="item" onChange={this.handlechange} /> <span>Term and Condition</span><br /><br />

                    <button type="submit">Submit</button>
                </div>
            </div>
        )
    }
}
