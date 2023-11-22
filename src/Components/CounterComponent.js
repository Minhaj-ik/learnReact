 import React, { useState } from 'react'
 import Button from 'react-bootstrap/Button';

const CounterComponent = () => {

    const [count, setCount]= useState(0);

    const increment=()=>{
        setCount(count+1);
    }

    const decrement=()=>{
        setCount(count-1);
    }

 
  return (
    <div>Here we have a counter
        <br />
        <br />
        <h1>Count:{count}</h1>
        <Button variant="success"  onClick={increment} >+</Button>
        <Button variant="danger" onClick={decrement} >-</Button>

    </div>
  )
}

export default CounterComponent