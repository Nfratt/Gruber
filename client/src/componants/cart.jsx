import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CheckoutBtn } from "./checkout";
// import  CartFunction  from "./cartFunction";
import { connect } from 'react-redux'
import CartItem from './CartItem'

function Cart(props) {
  console.log(props.cartItems)
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

      {props.cartItems.map(item => (
                <CartItem
                  key={item.title}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                />
              ))}

       

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
      cartItems: state.cart.products
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

