// Component1.js
import React from 'react';
import comp1Css from './Component1.module.css'

import {Nav,Navbar,Container} from 'react-bootstrap';
const Component1 = () => {
  return (
    <div class={comp1Css.style}> 
      
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <h1>This is from Component1</h1>
     

    </div>
  );
}

export default Component1;
