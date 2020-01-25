import React from 'react';
import './Product.css';
import { onRemove } from '../redux/actions'
import { connect } from 'react-redux'

function CartItem({onRemove, item}) {
    return (
        <div className="Cart-Product">
            <h2 className="Product-title">{item.itemName}</h2>
            <img className="cart-product-image" src={item.image} alt=""/>
            <div className="Product-price">${item.price}</div>
            <button className="Product-buy-button" onClick={() => {
            console.log(item)
                onRemove(item)
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