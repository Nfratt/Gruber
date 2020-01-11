import { Modal,Button,ButtonToolbar} from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CheckoutBtn } from "./checkout";
export function Cart(props) {
 return (
   <Modal
     {...props}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
     <Modal.Header closeButton>
       <Modal.Title id="contained-modal-title-vcenter">
         Your Cart
       </Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <h4>Here are the items in your cart</h4>
       <div id ="itemshere">items will show here</div>
       

     </Modal.Body>
     <Modal.Footer>
     <CheckoutBtn className="navitem"/>
       <Button id="ctnshoppin" onClick={props.onHide}>Continue shopping</Button>
     </Modal.Footer>
   </Modal>
 );
}
export function CartBtn() {
 const [modalShow, setModalShow] = React.useState(false);

 return (
   <ButtonToolbar>
     <Button className="navitem1" variant="success" onClick={() => setModalShow(true)}>
       Shopping Cart <i class="fas fa-shopping-cart"></i>
     </Button>


     <Cart
       show={modalShow}
       onHide={() => setModalShow(false)}
     />
   </ButtonToolbar>
 );
}



