import React, { PureComponent } from 'react'

export default class ChildComponents extends PureComponent {
    render() {
        console.log("props check re-reandring")
        return (
            <div>
                <h1>props with pure Componensts  {this.props.data}</h1>
            </div>
        )
    }
}
