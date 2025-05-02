import React from 'react';
import banner from '../assets/banner.jpg';
import '../styles/Header.css';
import { useCart } from '../context/CartContext';

const Header = ({ onCartClick }) => {
  const { totalItems } = useCart();

  
  return (
    <header className="header">
        <img src={banner} alt="Banner" className="banner-image" />
      <h1>Mi Tienda de Películas</h1>
      <button className="cart-btn" onClick={onCartClick}>
        🛒 Carrito ({totalItems})
      </button>
    </header>
  );

};

export default Header;

