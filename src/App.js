// App.js
import './App.css';
import React from 'react';
// import Component1 from './Components/Component1'; // Updated import
// import Component2 from './Components/component2';
// import CounterComponent from "./Components/CounterComponent"
import 'bootstrap/dist/css/bootstrap.min.css';
// import State from './Components/State';
import ConditionalRendering from './Components/rendering/ConditionalRendering';
import Keys from './Keys/Keys'
import Effects from './Effects/Effects';
import DataFetching from './API/DataFetching';





function App() {

//  const states=[

//   {name:"Kerala", language:"Malayalam"},
//   {name:"Tamil Nadu", language:"Tamil"}
//   ]

  return (
    <>
      {/* <Component1 />
      <Component2 />
      <CounterComponent />
      <State states= {states} /> */}
      {/* <ConditionalRendering isLoggedIn= {true} />
      <Keys /> */}
    {/* <Effects /> */}
<DataFetching />
      


    </>
  );
}

export default App;
