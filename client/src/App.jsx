import React from "react";
import { Container, } from 'react-bootstrap';
import './AppStyles.scss'
import { Cart } from "./componants/cart";
import { Login } from "./componants/login";
import Navbar from "./componants/nav";



export default () => <React.Fragment>
  
  <Container>
    <h1>Gruber</h1>
  <Navbar>
    <Cart />
    <Login />
    </Navbar>
    <div>items go here</div>

    
  </Container>

</React.Fragment>