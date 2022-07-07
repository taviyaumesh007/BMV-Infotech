import React, { Component } from "react";

class Users1 extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         data: "umesh",
    //     }
    constructor() {
        super();
        this.state = {
            data: 0,
        }
    }
    // Apple() {
    //     // this.setState({ data: "taviya" })  //
    //     // alert("Apple call")
    // }
    render() {
        return (

            <div>
                <h1>hello from Classbase component</h1>
                <h3>{this.state.data}</h3>
                {/* <button onClick={() => this.Apple()}>State Update</button> */}
                <button onClick={() => this.setState({ data: this.state.data + 1 })}>Increement</button>
                <button onClick={() => this.setState({ data: this.state.data - 1 })}>Decreement</button>
            </div>
        )
    }
}
export default Users1;