import React from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <div className="bg-gray-700 text-white p-4 rounded-lg shadow-lg flex justify-between items-center">
      <img src={item.image} alt={item.title} className="h-20" />
      <h2 className="text-lg font-bold">{item.title}</h2>
      <div className="flex items-center">
        <button
          onClick={() => updateQuantity(item, item.quantity - 1)}
          className="bg-gray-500 p-2 rounded-l"
        >
          -
        </button>
        <span className="p-2">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item, item.quantity + 1)}
          className="bg-gray-500 p-2 rounded-r"
        >
          +
        </button>
      </div>
      <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
      <button
        onClick={() => removeFromCart(item.id)}
        className="bg-red-500 p-2 rounded"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
