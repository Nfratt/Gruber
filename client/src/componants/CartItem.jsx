import React from 'react';
import './Product.css';


export default function CartItem({onRemove, price, title, description, image}) {
    return (
        <div className="Product">
            <h2 className="Product-title">{title}</h2>
            <img className="product-image" src={image} alt=""/>
            <div className="Product-price">${price}</div>
            <div className="product-description">{description}</div>
            <button className="Product-buy-button" onClick={() => {
                console.log({ title, price, description, image })
                onRemove({ title, price, description, image })
            }
            }>
                Remove from cart
      </button>
        </div>
    );
}