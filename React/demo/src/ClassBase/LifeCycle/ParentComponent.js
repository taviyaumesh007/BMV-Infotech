import React, { Component } from 'react'
import ChildComponents from './ChildComponents'

export default class ParentComponent extends Component {
    constructor() {
        super();
        this.state = {
            show: true,
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.show ? <ChildComponents /> : <h1>Not Child Component</h1>
                }
                <button onClick={() => this.setState({ show: !this.state.show })}>Child Components</button>
            </div>
        )
    }
}
