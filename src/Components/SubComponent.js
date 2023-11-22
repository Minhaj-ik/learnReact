import React, { useState } from 'react'
import { Button } from 'react-bootstrap';



    const SubComponent = () => {

           

        const [color, setColor]= useState("red")
        const Fn = () =>{
                console.log("You had clicked>>");
            }
    
    const dbClick= () =>{
       setColor("Green")
    }
        
        
    return (
        <div>
            <h4 >This is the subcomponent with color {color}</h4>
            <Button onClick={Fn} variant="dark">Dark</Button>
            <h1 onDoubleClick={dbClick}>Double Click</h1>
            

        </div>
    )
    }

export default SubComponent;