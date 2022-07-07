// import { useState } from 'react';
import './App.css';
// import Constructore from './ClassBase/Constructore';
// import FunctionPasswithProps from './FunctionBase/FunctionPasswithProps';
// import IfElse from './FunctionBase/IfElse';
// import Login from './FunctionBase/Login';
// import Form1 from './ClassBase/Form1';
// import Form from './FunctionBase/Form';
// import HideShow from './FunctionBase/HideShow';
// import InputField from './FunctionBase/InputField';
// import Student1 from './ClassBase/Student1';
// import Student from './FunctionBase/Student';
// import Users from './FunctionBase/Users';
// import Users1 from "./ClassBase/Users1";

function App() {
  // function Apple() {
  //   let data = "umesh"
  //   return (
  //     <div>componed inside componend</div>
  //   )
  //   data = "taviya"
  //   alert("function called")
  // }

  // const [name, setName] = useState('umesh')

  //******* Function pass by props **********
  // function getdata() {
  //   alert("hello")
  // }
  return (
    <div className="App">
      <h1>React Practice</h1>
      {/* hello from User */}
      {/* <Users /> */}
      {/* <Users1 /> */}
      {/* <Apple /> */}
      {/* <button onClick={() => Apple()}>click</button> */}

      {/* <h1>Props In Function</h1>

      <Student name={name} email={"umesh@gmail.com"} />
      <Student name={"sumit"} email={"sumit@gmail.com"} />
      <Student name={"dishant"} email={"dishant@gmail.com"} />
      <button onClick={() => { setName("taviya") }}>name change</button> */}

      {/* <h1>Props In Class</h1>
      <Student1 name={"umesh"} email={"umesh@gmail.com"} /> */}

      {/* <InputField /> */}

      {/* <HideShow /> */}

      {/* <Form /> */}   {/*FunctionBase Component */}

      {/* <Form1 /> */}  {/*ClassBase Component*/}

      {/* <IfElse /> */}

      {/* <Login /> */}

      {/* <FunctionPasswithProps data={getdata} /> */}

      {/* <Constructore /> */}  {/* Class base with Constructore */}
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
