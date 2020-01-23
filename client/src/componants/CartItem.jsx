import React from 'react';
import './Product.css';
import { onRemove } from '../redux/actions'
import { connect } from 'react-redux'

function CartItem({onRemove, price, title, image}) {
    return (
        <div className="Product">
            <h2 className="Product-title">{title}</h2>
            <img className="product-image" src={image}/>
            <div className="Product-price">${price}</div>
            <button className="Product-buy-button" onClick={() => {
                console.log({ title, price, image })
                onRemove({ title, price, image })
            }
            }>
                Remove from cart
      </button>
        </div>
    );
}


export default connect(
    // mapStateToProps
    null,
    // mapDispatchToProps
    { onRemove }
)(CartItem);