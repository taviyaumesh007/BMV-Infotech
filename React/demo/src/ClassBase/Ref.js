import React, { Component, createRef } from 'react'

export default class Ref extends Component {
    constructor() {
        super();
        this.inputRef = createRef();
        this.state = {
            data: ""
        }
    }
    componentDidMount() {
        // console.log(this.inputRef)
    }
    getvalue() {
        this.setState({
            data: this.inputRef.current.value, // print  data
            data: this.inputRef.current.style.color = "red"
        })
    }
    render() {
        return (
            <div>
                <h1 style={{ color: "blue" }}>{this.state.data} </h1>
                <input type="text" ref={this.inputRef} />
                <button onClick={() => this.getvalue()}>getvalue</button>
            </div>
        )
    }
}
