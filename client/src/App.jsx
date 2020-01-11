import React from "react";
import { Container, } from 'react-bootstrap';
import './AppStyles.scss'
import { Cart } from "./componants/cart";
import { Login } from "./componants/login";
import Navbar from "./componants/nav";
import Product from './componants/Product';
import items from '../src/api/api';

export default () => <React.Fragment>

  <Container>
    <h1>Gruber</h1>
    <Navbar>
      <Cart />
      <Login />
    </Navbar>
    <div>items go here</div>


    <div className="App">

      <div className="App-products">
        {items.map(item => (
          <Product key={item.title} title={item.title} price={item.price} />
        ))}
      </div>

    </div>


  </Container>

</React.Fragment>