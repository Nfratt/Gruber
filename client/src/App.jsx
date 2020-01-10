import React from "react";
import { Container } from 'react-bootstrap';
import './AppStyles.scss'
import { Example, Stuff } from "./componants/testmodal";

export default () => <React.Fragment>
  <Container><h1>Gruber</h1>
  <Example/>
  <Stuff/>
  </Container>

</React.Fragment>