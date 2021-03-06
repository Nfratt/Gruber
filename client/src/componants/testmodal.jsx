import { Modal,Button,ButtonToolbar} from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Example(props) {
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
       <h4>Centered Modal</h4>
       <p>
         Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
         dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
         consectetur ac, vestibulum at eros.
       </p>
     </Modal.Body>
     <Modal.Footer>
       <Button onClick={props.onHide}>Close</Button>
     </Modal.Footer>
   </Modal>
 );
}
export function Stuff() {
 const [modalShow, setModalShow] = React.useState(false);

 return (
   <ButtonToolbar>
     <Button variant="primary" onClick={() => setModalShow(true)}>
       test <i className="fas fa-shopping-cart"></i>
     </Button>

     <Example
       show={modalShow}
       onHide={() => setModalShow(false)}
     />
   </ButtonToolbar>
 );
}



