import React from 'react';

function CartItem({ item, removeFromCart }) {
  return (
    <div>
      <img className = "cart-item-img"src={item.image} alt={item.name} />
      <div>{item.name}</div>
      <div>Quantity: {item.quantity}</div>
      <div>Total: ${Math.round(item.price * item.quantity*100)/100}</div>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;