import React, {Component} from 'react';
import {CardElement, injectStripe, CardExpiryElement} from 'react-stripe-elements';
import { connect } from 'react-redux'
import API from '../api'
import CartItem from './CartItem'
import {Form, Button} from 'react-bootstrap'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {


    let {token} = await this.props.stripe.createToken({name: "Name"});
   
    let response = await API.charge({
      total: this.props.totalPrice,
      stripeTokenId: token.id
    });
  
    if (response.status == 'succeeded') console.log("Purchase Complete!");
    if (response.status == 'succeeded') this.setState({complete: true});
    if (this.state.complete) setTimeout(function(){  window.location.reload(false);  }, 1000);
    
  }


  render() {

    if (this.state.complete) return <h1 className="head">Purchase Complete</h1>;
    


    return (
      <div className="checkout">
        <h2>Shipping Information</h2>
<Form>
  <Form.Group controlId="shippingstreetaddress">
    <Form.Label>Street Address</Form.Label>
    <Form.Control type="text" placeholder="12 Main Street" />
  </Form.Group>
  <Form.Group controlId="shippingcity">
    <Form.Label>City</Form.Label>
    <Form.Control type="text" placeholder="New York City" />
  </Form.Group>
  <Form.Group controlId="shippingstate">
    <Form.Label>State</Form.Label>
    <Form.Control type="text" placeholder="NY" />
  </Form.Group>
  <Form.Group controlId="shippingzip">
    <Form.Label>Zip Code</Form.Label>
    <Form.Control type="number" placeholder="000000" />
  </Form.Group>
</Form>


<h2>Billing Information</h2>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name on Card</Form.Label>
    <Form.Control type="text" placeholder="Bob Smith" />
  </Form.Group>
</Form>

<br></br>

        <CardElement />
        <br></br>

     
        <Button variant="primary" size="lg" onClick={this.submit}>Purchase</Button>
    
      </div>
    );
  }
}




const connectedCheckoutForm = connect(
  // mapStateToProps
  state => {
    return {
      totalPrice: state.cart.total,
      cartItems: state.cart.products
    }
  },
  // mapDispatchToProps
  null
)(injectStripe(CheckoutForm));

export default connectedCheckoutForm