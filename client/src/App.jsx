import React from "react";
import { Container, } from 'react-bootstrap';
import {Example,Stuff} from './components/testmodal'
import './AppStyles.scss'

export default () => <React.Fragment>
  <Container><h1>Gruber</h1>
  <Example />
  <Stuff/>
  </Container>
</React.Fragment>