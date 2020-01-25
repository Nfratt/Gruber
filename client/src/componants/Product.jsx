import React from 'react';
import './Product.css';
import { onAdd } from '../redux/actions'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
function Product({ onAdd, item}) {
    return (
        <Card className="Product" style={{ width: '18rem' }}>
  <Card.Img className="product-image" variant="top" src={item.image} />
  <Card.Body>
    <Card.Title>{item.itemName}</Card.Title>
    <Card.Text className="product-price">
    {item.description}...${item.price}
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  <Button variant="primary" className="Product-buy-button" onClick={() => {
                console.log({ item})
                onAdd(item)
            }
            }>Add to cart</Button>
  </Card.Footer>
</Card>
    );
}

export default connect(
    // mapStateToProps
    null,
    // mapDispatchToProps
    { onAdd }
)(Product);