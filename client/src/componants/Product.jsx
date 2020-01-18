import React from 'react';
import './Product.css';
import { onAdd } from '../redux/actions'
import { connect } from 'react-redux'

function Product({ onAdd, price, title, description }) {
    return (
        <div className="Product">
            <h2 className="Product-title">{title}</h2>
            <div className="Product-price">${price}</div>
            <div className="product-description">{description}</div>
            <button className="Product-buy-button" onClick={() => {
                console.log({ title, price, description })
                onAdd({ title, price, description })
            }
            }>
                Add to cart
      </button>
        </div>
    );
}

export default connect(
    // mapStateToProps
    null,
    // mapDispatchToProps
    { onAdd }
)(Product);