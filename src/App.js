import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductListing from './pages/ProductListing';
import Cart from './pages/Cart';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    showToast(`${product.title} added to cart`);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const updateQuantity = (product, quantity) => {
    if (quantity <= 0) {
      removeFromCart(product.id);
    } else {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: quantity } : item
        )
      );
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white relative">
      <Navbar cartCount={cartItems.length} setIsCartOpen={setIsCartOpen} />

      <div className="flex">
        <div className={`p-4 ${isCartOpen ? 'w-2/3' : 'w-full'} transition-all duration-500`}>
          <ProductListing addToCart={addToCart} cartItems={cartItems} updateQuantity={updateQuantity} />
        </div>
        {isCartOpen && (
          <div className="w-1/3 bg-gray-800 p-4 fixed right-0 top-0 h-full shadow-lg transition-all duration-500">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsCartOpen(false)}
            >
              X
            </button>
            {cartItems.length > 0 ? (
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            ) : (
              <div className="text-center mt-10">Your cart is empty</div>
            )}
          </div>
        )}
      </div>

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
