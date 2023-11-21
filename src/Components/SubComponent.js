import React from 'react'
import { Button } from 'react-bootstrap';



    const SubComponent = () => {

    
        const Fn = () =>{
                console.log("You had clicked>>");
            }
    
    const dbClick= () =>{
        alert("You have double clicked me");
    }
        
        
    return (
        <div>
            <h4 >This is the subcomponent</h4>
            <Button onClick={Fn} variant="dark">Dark</Button>
            <h1 onDoubleClick={dbClick}>Double Click</h1>
            

        </div>
    )
    }

export default SubComponent;