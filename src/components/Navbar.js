import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartCount, setIsCartOpen }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleStoreNameClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center sticky top-0 z-10">
      <motion.h1 
        className="text-white text-lg cursor-pointer"
        whileHover={{ 
          scale: 1.1,
          color: "#4FD1C5",
          transition: { duration: 0.3 }
        }}
        onClick={handleStoreNameClick}
      >
        Aryan's Store
      </motion.h1>
      <div className="relative">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsCartOpen(prev => !prev)}
          className="cursor-pointer"
        >
          <FaShoppingCart className="text-white text-2xl" />
          {cartCount > 0 && (
            <motion.span 
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 15
              }}
            >
              {cartCount}
            </motion.span>
          )}
        </motion.div>
      </div>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 p-4 rounded-md shadow-lg"
          >
            Hey, Do you love my Name ..? ❤️
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;