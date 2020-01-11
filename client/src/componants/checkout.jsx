import { Modal,Button,ButtonToolbar} from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

export function Checkout(props) {
 return (
   <Modal
     {...props}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
     <Modal.Header closeButton>
       <Modal.Title id="contained-modal-title-vcenter">
         Checkout
       </Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <p>
       <StripeProvider apiKey="pk_test_hAdtEwXkn7tEEo0tmBIofNuf00R7L68wMO">
      <div className="example">
        <Elements>
          <CheckoutForm />
        </Elements>
      </div>
    </StripeProvider>
       </p>
     </Modal.Body>
     <Modal.Footer>
       <Button onClick={props.onHide}>Close</Button>
     </Modal.Footer>
   </Modal>
 );
}
export function CheckoutBtn() {
 const [modalShow, setModalShow] = React.useState(false);

 return (
   <ButtonToolbar>
     <Button variant="primary" onClick={() => setModalShow(true)}>
       checkout <i class="fas fa-shopping-cart"></i>
     </Button>

     <Checkout
       show={modalShow}
       onHide={() => setModalShow(false)}
     />
   </ButtonToolbar>
 );
}



