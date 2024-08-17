import React from 'react';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="flex justify-between items-center mb-4">
          <div>
            <h4>{item.title}</h4>
            <p className="text-sm">${item.price}</p>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => updateQuantity(item, item.quantity - 1)}
              className="px-2 py-1 bg-gray-700 text-white rounded"
            >
              -
            </button>
            <span className="px-3">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item, item.quantity + 1)}
              className="px-2 py-1 bg-gray-700 text-white rounded"
            >
              +
            </button>
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 px-2 py-1 bg-red-600 text-white rounded"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <p className="text-lg font-semibold">Total: ${calculateTotal()}</p>
        <button className="mt-2 w-full bg-green-600 py-2 text-white font-semibold rounded">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
