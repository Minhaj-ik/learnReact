import React, { useState } from 'react'
// import { Button } from 'react-bootstrap'

const products =[
    { id:1, name:"Laptop", Brand: "HP", Qty:1},
    { id:2, name: "Laptop", Brand: "Dell", Qty:1},
    { id:3, name:"Laptop", Brand: "Lenovo", Qty: 1}
]

const Keys = () => {
  const [items, setItem]= useState(products);

  const changeQty =(id)=> {
   const newItem = items.map((item)=>
    item.id===id?{...item, Qty: item.Qty+1}:item
    )
    setItem(newItem)
  }
  return (
    <div >
        {items.map((product)=>(
            <div key={product.id} className= "bg-success text-white m-2"> 
                <h1>{product.name}</h1>
                <h2>{product.Brand}</h2>
                <h2>{product.Qty}</h2>
                <button onClick={()=> changeQty(product.id)} type= "button">+</button>
            </div>
        ))}
    </div>
  )
}

export default Keys