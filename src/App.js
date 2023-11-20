// App.js
import './App.css';
import React from 'react';
import Component1 from './Components/Component1'; // Updated import
import Component2 from './Components/component2';

function App() {
  return (
    <>
      <Component1 />
      <Component2 />
      <Component2 />
      <Component1 />

    </>
  );
}

export default App;
