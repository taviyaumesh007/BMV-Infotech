import React, { Component } from 'react'

export default class DidUpdate extends Component {
    constructor() {
        super()
        this.state = {
            name: "umesh",
            count: 0
        }
        console.log("constructor")
    }
    componentDidUpdate(preProps, preState, snapshot) {
        // console.log("componentDidUpdate", snapshot) undefine
        console.log("componentDidUpdate", preState.count, this.state.count)
        if (this.state.count < 10) {
            this.setState({ count: this.state.count + 1 })
        }
        // if (preState.count === this.state.count) {
        //     alert("value is same")
        // }
    }
    render() {
        console.log("render")
        return (
            <div>
                <h1>Did Update{this.state.count}</h1>
                <button onClick={() => this.setState({ name: "taviya" })}>DidUpdate</button>
                <button onClick={() => this.setState({ count: 1 })}>Count</button>
            </div>
        )
    }
}
