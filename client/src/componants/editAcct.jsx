import { Modal,Button,ButtonToolbar} from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export function EditAcct(props) {
 return (
   <Modal

     {...props}
     size="md"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
     <Modal.Header closeButton>
       <Modal.Title id="contained-modal-title-vcenter">
        This is only a test
       </Modal.Title>
     </Modal.Header>
     <Modal.Body>

     <div className="gruber-modal">
        <p>If you strike me down, i will become more powerful than you could possibly imagine...</p>
    </div>

     </Modal.Body>
     <Modal.Footer>
     </Modal.Footer>
   </Modal>
 );
}
export function EditBtn() {
 const [modalShow, setModalShow] = React.useState(false);

 return (
   <ButtonToolbar>
     <Button className="navitem2" variant="warning" onClick={() => setModalShow(true)}>
       Edit Account <i class="gruber-btn"></i>
     </Button>

     <EditAcct
       show={modalShow}
       onHide={() => setModalShow(false)}
     />
   </ButtonToolbar>
 );
}



