// src/context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (movie) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.titulo === movie.titulo);
      if (existing) {
        return prev.map(item =>
          item.titulo === movie.titulo
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...movie, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (titulo) => {
    setCartItems(prev => prev.filter(item => item.titulo !== titulo));
  };

  const updateQuantity = (titulo, quantity) => {
    if (quantity <= 0) {
      removeFromCart(titulo);
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.titulo === titulo ? { ...item, quantity } : item
        )
      );
    }
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
