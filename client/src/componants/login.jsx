import { Modal,Button,ButtonToolbar} from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Login(props) {
 return (
   <Modal
     {...props}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
     <Modal.Header closeButton>
       <Modal.Title id="contained-modal-title-vcenter">
         Modal heading
       </Modal.Title>
     </Modal.Header>
     <Modal.Body>
       Here is the login modal here you will be asked to input a Username and Password
       as well as be prompted to create an account if you dont have one
     </Modal.Body>
     <Button>submit</Button>
     <Modal.Footer>
       <Button onClick={props.onHide}>Close</Button>
     </Modal.Footer>
   </Modal>
 );
}
export function Loginbtn() {
 const [modalShow, setModalShow] = React.useState(false);

 return (
   <ButtonToolbar>
     <Button className="navitem2" variant="warning" onClick={() => setModalShow(true)}>
       Login <i class="fas fa-shopping-cart"></i>
     </Button>

     <Login
       show={modalShow}
       onHide={() => setModalShow(false)}
     />
   </ButtonToolbar>
 );
}



