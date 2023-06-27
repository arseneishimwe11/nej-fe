import React from 'react';

const CartItem = ({ item }) => {
  return (
    <li className="flex items-center py-4">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="w-16 h-16 object-cover rounded mr-4"
      />
      <div className="flex-1">
        <div className="prod-title">
          <p className="text-2xl uppercase text-gray-900 font-bold">
            {item.product.name}
          </p>
          <p className="uppercase text-sm text-gray-400">
            The best {item.product.productType} in the marketplace
          </p>
        </div>
      </div>
      <p className="text-gray-600">
        ${(item.product.price * item.quantity).toFixed(2)}
      </p>
    </li>
  );
};

export default CartItem;