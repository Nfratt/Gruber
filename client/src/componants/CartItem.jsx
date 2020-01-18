import React from 'react';
import './Product.css';


export default function CartItem({price, title, description }) {
    return (
        <div className="Product">
            <h2 className="Product-title">{title}</h2>
            <div className="Product-price">${price}</div>
            <div className="product-description">{description}</div>
        </div>
    );
}