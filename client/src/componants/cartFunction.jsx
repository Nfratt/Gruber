import React from 'react';
import CartItem from './CartItem';
// import itemsInCart from './CartCalc'


export default function CartFunction({ itemsInCart, totalCost }) {
  return (
    <div className="Cart">
      <h2 className="Cart-title">Your shopping cart</h2>
      {itemsInCart && itemsInCart.length > 0 ? (
        <div>
          {itemsInCart.map(item => (
            <CartItem
              key={item.id}
              title={item.title}
              cost={item.price * item.quantity}
              quantity={item.quantity}
            />
          ))}
          <div className="Cart-total-cost">
            Total cost: ${totalCost.toFixed(2)}
          </div>
        </div>
      ) : (
        <div>Your cart is empty</div>
      )}
    </div>
  );
}