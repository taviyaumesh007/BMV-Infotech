import React, { Component } from 'react'

export default class Student1 extends Component {
    render() {
        return (
            <div>
                <h1>name is : {this.props.name}</h1>
                <h3>email : {this.props.email}</h3>
            </div>
        )
    }
}
