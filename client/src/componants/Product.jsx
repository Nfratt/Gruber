import React from 'react';
import './Product.css';
import { onAdd } from '../redux/actions'
import { connect } from 'react-redux'

function Product({ onAdd, item}) {
    return (
        <div className="Product">
            <h2 className="Product-title">{item.itemName}</h2>
            <img className="product-image" src={item.image}/>
            <div className="Product-price">${item.price}</div>
            <div className="product-description">{item.description}</div>
            <button className="Product-buy-button" onClick={() => {
                console.log({ item})
                onAdd(item)
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