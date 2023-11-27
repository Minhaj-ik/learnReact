import React, { useEffect, useState } from 'react'

const Effects = () => {
  const [count, setCount]= useState(0)
  const [count2, setCount2]= useState(0)
useEffect(()=>{
  console.log("Side Effects")

}, [count])
  
  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={()=>setCount(count+1)}>+</button>
      <h1>{count2}</h1>
        <button type="button" onClick={()=>setCount2(count2+1)}>+</button>
    </div>

  )
}

export default Effects