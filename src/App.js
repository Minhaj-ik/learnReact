// App.js
import './App.css';
import React from 'react';
import Component1 from './Components/Component1'; // Updated import
import Component2 from './Components/component2';
import CounterComponent from "./Components/CounterComponent"
import 'bootstrap/dist/css/bootstrap.min.css';
import State from './Components/State';





function App() {

 const states=[

  {name:"Kerala", language:"Malayalam"},
  {name:"Tamil Nadu", language:"Tamil"}
  ]

  return (
    <>
      <Component1 />
      <Component2 />
      <CounterComponent />
      <State states= {states} />
      


    </>
  );
}

export default App;
