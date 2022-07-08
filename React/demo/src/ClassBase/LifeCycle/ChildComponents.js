import React, { Component } from 'react'

export default class ChildComponents extends Component {
  componentWillUnmount() {
    alert('componentWillUnmount called')
  }
  render() {
    return (
      <div>
        <h1>Child Components</h1>
      </div>
    )
  }
}
