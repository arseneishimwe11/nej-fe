import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;