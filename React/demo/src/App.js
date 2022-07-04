import './App.css';
// import React, { Component } from "react";
// import Users from './FunctionBase/Users';
// import Users1 from "./ClassBase/Users1";

function App() {
  function Apple() {
    return (
      <div>componed inside componend</div>
    )
  }
  return (
    <div className="App">
      hello from User
      {/* <Users /> */}
      {/* <Users1 /> */}
      <Apple />
    </div>
  );
}

/*function Users() {
  return (
    <div className="app">
      <h1>hello world</h1>    // same file component
      <h2>hello</h2>

    </div>
  )
}*/

// classbase component

/*class Users1 extends Component {
  render() {
    return (
      <h1>hello from Classbase component</h1>
    )
  }
}*/
export default App;
