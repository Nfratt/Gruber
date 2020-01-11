import React from "react";
import { Container } from 'react-bootstrap';
import './AppStyles.scss'
import { Example, Stuff } from "./componants/testmodal";
import { Checkout,CheckoutBtn } from "./componants/checkout";
import { Cart, CartBtn } from "./componants/cart";
import { Login, Loginbtn } from "./componants/login";


export default () => <React.Fragment>
  <Container><h1>Gruber</h1>
  <Example/>
  <Checkout/>
  <Cart/>
  <Login/>
  <Stuff/>
  <CartBtn/>
  <CheckoutBtn/>
  <Loginbtn/>
  </Container>

</React.Fragment>