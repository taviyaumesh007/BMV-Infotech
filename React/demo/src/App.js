// import { useState } from 'react';
import './App.css';
import HOC from './FunctionBase/HOC';
// import Ref from './ClassBase/Ref';
// import ControllComponents from './FunctionBase/Hooks/ControllComponents';
// import UseMemo from './FunctionBase/Hooks/UseMemo';
// import UseRef from './FunctionBase/Hooks/UseRef';
// import ParentsComponets from './FunctionBase/PureComponents/ParentsComponets';
// import PerantesComponents from './FunctionBase/LiftingStateUp/PerantesComponents';
// import ArrayWithMap from './FunctionBase/ArrayWithMap';
// import ParentUseEfect from './FunctionBase/Hooks/ParentUseEfect';
// import UseEffect from './FunctionBase/Hooks/UseEffect';
// import ReuseComponents from './ReUseCompents/ReuseComponents';
// import ShouldUpdate from './ClassBase/ShouldUpdate';
// import ParentComponent from './ClassBase/WillUnmount/ParentComponent';
// import DidUpdate from './ClassBase/DidUpdate';
// import DidMount from './ClassBase/DidMount';
// import RenderLifeCycle from './ClassBase/RenderLifeCycle';
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

  // ******** Render Life Cycle ********
  // const [name, setName] = useState("umesh")

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

      {/* <h2>Render method</h2>
      <RenderLifeCycle name={name} /> 
      <button onClick={() => setName("taviya")}>Submit</button> */}

      {/* <DidMount /> */}

      {/* <DidUpdate /> */}

      {/* <ShouldUpdate /> */}

      {/* <ParentComponent /> */}

      {/* <UseEffect /> */}

      {/* <ParentUseEfect /> */}

      {/* <ArrayWithMap /> */}

      {/* <ReuseComponents /> */}

      {/* <PerantesComponents /> */}

      {/* <ParentsComponets /> */}

      {/* <UseMemo /> */}

      {/* <Ref /> */}

      {/* <UseRef /> */}

      {/* <ControllComponents /> */}

      <HOC />

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
