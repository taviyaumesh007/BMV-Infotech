import React, { Component } from 'react'
import ChildComponents from './ChildComponents';

export default class ParentsComponets extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    // Pure Componets use with State
    render() {
        // console.log("rendering")
        return (
            <div>
                {/* <h1>Pure Components with state{this.state.count}</h1> */}
                <ChildComponents data={this.state.count} />
                <button onClick={() => this.setState({ count: 1 })}>click</button>
            </div>
        )
    }
}
