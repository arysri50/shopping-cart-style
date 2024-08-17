import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product, cartItem, addToCart, updateQuantity }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
        transition: { duration: 0.3 }
      }}
      className="bg-gray-700 text-white p-4 rounded-md shadow-lg flex flex-col h-full"
    >
      <div className="flex-grow flex items-center justify-center overflow-hidden rounded-md">
        <motion.img 
          src={product.image} 
          alt={product.title} 
          className="h-48 w-48 object-contain"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>
      <h2 className="text-lg font-bold mt-4 line-clamp-2">{product.title}</h2>
      <p className="mt-2">${product.price}</p>
      <div className="mt-auto pt-4">
        {cartItem ? (
          <div className="flex justify-between items-center">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => updateQuantity(cartItem, cartItem.quantity - 1)}
              className="bg-red-500 px-2 rounded"
            >
              -
            </motion.button>
            <span className="mx-4">{cartItem.quantity} in cart</span>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => updateQuantity(cartItem, cartItem.quantity + 1)}
              className="bg-green-500 px-2 rounded"
            >
              +
            </motion.button>
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 p-2 w-full rounded"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;