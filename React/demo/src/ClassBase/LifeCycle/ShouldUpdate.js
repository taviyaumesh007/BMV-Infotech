import React, { Component } from 'react'

export default class ShouldUpdate extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        console.log("constructor")
    }
    shouldComponentUpdate() {
        console.log("ShouldUpdate", this.state.count)
        if (this.state.count > 5 && this.state.count < 10) {
            return true
        }
    }
    render() {
        return (
            <div>
                <h1>Should Update{this.state.count}</h1>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>count</button>
            </div >
        )
    }
}
