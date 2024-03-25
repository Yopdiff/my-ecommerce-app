import React from 'react';
import CartItem from './CartItem';

function Cart({ cartItems =[], removeFromCart }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  totalPrice.toFixed(2);

  return (
    <div>
        <div className='Total-Price'>Total Price(in cart): ${Math.round(totalPrice*100)/100}</div>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}

    </div>
  );
}

export default Cart;