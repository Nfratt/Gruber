import {Card,Button} from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Footer(props){
    return(
<Card className="text-center">
  <Card.Header>Contact Info</Card.Header>
  <Card.Body>
    <Card.Title>Hi there welcome for testing Gruber!</Card.Title>
    <Card.Text>
    
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">1 day ago</Card.Footer>
</Card>)
}