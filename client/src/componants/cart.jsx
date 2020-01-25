import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CheckoutBtn } from "./checkout";
import { connect } from 'react-redux'
import CartItem from './CartItem'

function Cart(props) {
  console.log(props)
  return (
    <Modal
      show = {props.show}
      onHide = {props.onHide}
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

      {props.cartItems.map(item => (
                <CartItem
                  key={item.itemName}
                  item = {item}
                />
              ))}


       <p>Your total is ${props.totalPrice / 100 }</p>

      </Modal.Body>
      <Modal.Footer>
        
        <CheckoutBtn className="navitem" />
        <Button id="ctnshoppin" onClick={props.onHide}>Continue shopping</Button>
      </Modal.Footer>
    </Modal>
  );
}

const ConnectedCart = connect(
  // mapStateToProps
  state => {
    console.log(state);
    return {
      cartItems: state.cart.products,
      totalPrice: state.cart.total,
    }
  },
  // mapDispatchToProps
  null
)(Cart);

export function CartBtn() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>

      <Button className="navitem1" variant="success" onClick={() => setModalShow(true)}>
        Shopping Cart <i className="fas fa-shopping-cart"></i>

      </Button>


      <ConnectedCart
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
};

