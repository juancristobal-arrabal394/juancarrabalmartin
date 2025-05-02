import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import Cart from './components/Cart';

const App = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
  
    return (
      <CartProvider>
        <Header onCartClick={() => setIsCartOpen(true)} />
        <MovieList />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <button onclick="window.location.href='index.html';">Elige Asiento</button>  
            <Footer />
            {/* otros componentes */}
      </CartProvider>
    );
  };

export default App;

