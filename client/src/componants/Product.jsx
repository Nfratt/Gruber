import React from 'react';
import './Product.css';
import { onAdd } from '../redux/actions'
import { connect } from 'react-redux'

function Product({ onAdd, price, title, description, image }) {
    return (
        <div className="Product">
            <h2 className="Product-title">{title}</h2>
            <img className="product-image" src={image}/>
            <div className="Product-price">${price}</div>
            <div className="product-description">{description}</div>
            <button className="Product-buy-button" onClick={() => {
                console.log({ title, price, description, image })
                onAdd({ title, price, description, image })
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