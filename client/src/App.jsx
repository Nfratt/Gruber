import React from "react";
import { Container, } from 'react-bootstrap';
import {Example,Stuff} from './components/testmodal';
import './AppStyles.scss'
import { Footer } from "./components/footer";
// import Login from "./components/Auth"

export default () => <React.Fragment>

  {/* <Login/> */}
  <Container><h1 className="cent">Gruber
  <Example className="shopping" /></h1>
  <Stuff/>
  </Container>
  <Footer/>
</React.Fragment>