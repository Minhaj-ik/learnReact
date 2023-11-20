import React from 'react';
import comp2Css from './Component2.module.css' 
import SubComponent from  './SubComponent'

const Component2 = () => {

  return (
    <div class={comp2Css.style}>
        <h3 >This is Component2</h3>
        <SubComponent />
    </div>
  )
}

export default Component2

