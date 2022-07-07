import React, { Component } from 'react'

export default class Constructore extends Component {
    constructor() {
        super();                        // super keyword is use for parents component to access
        console.log("constructor")
        this.state = {
            name: "umesh"
        }
    }
    render() {
        console.log("render")
        return (
            <div>Constructore lifecycle Method{this.state.name}</div>
        )
    }
}
