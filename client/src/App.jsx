import React from "react";
import { Container, } from 'react-bootstrap';
import './AppStyles.scss'
import { Cart } from "./componants/cart";
import { Login } from "./componants/login";
import Navbar from "./componants/nav";
import Product from './componants/Product';
import items from '../src/api/api';
import Footer from "./componants/footer";
import Logo from "./componants/images/Gruberlogo.png"



export default () => <React.Fragment>
<div className="background">
  <Container className="productcontainer">
  <img className="logo" src={Logo} alt="Gruberlogo logo" />
    <h3>Get your Groceries on Demand!!</h3>
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
  <Footer/>
  </div>

</React.Fragment>