import React, { Component } from 'react'

export default class RenderLifeCycle extends Component {

    constructor() {
        super();
        this.state = {
            email: "umesh@gmail.com"
        }
    }
    render() {
        return (
            <div>
                <h1>Render Life Cycle</h1>
                <h1>{this.props.name}</h1>
                <h2>{this.state.email}</h2>
                <button onClick={() => this.setState({ email: "taviya@gmail.com" })}>email Update</button>
            </div>
        )
    }
}
