import React, { Component } from 'react'

export default class DidMount extends Component {
    constructor() {
        super();
        this.state = {
            name: "umesh"
        }
        console.log("constructor")
    }
//  first call constructor 
// second render every time rerender
// third call componentDidMount 
    componentDidMount() {
        console.log("Did Mount")
    }
    render() {
        console.log("render")
        return (
            <div>
                <h1>DidMount</h1>
                <p>{this.state.name}</p>
                <button onClick={() => this.setState({ name: "taviya" })}>DidMount</button>
            </div>
        )
    }
}
