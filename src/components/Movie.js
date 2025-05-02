import React from 'react';
import '../styles/MovieList.css';
import { useCart } from '../context/CartContext';

const Movie = ({ titulo, sinopsis, genero, duracion, puntuacion, precio, imagen }) => {
    const { addToCart } = useCart();
  
    return (
      <div className="movie-card">
        <img src={imagen} alt={titulo} className="movie-image" />
        <h2>{titulo}</h2>
        <p><strong>Sinopsis:</strong> {sinopsis}</p>
        <p><strong>Género:</strong> {genero}</p>
        <p><strong>Duración:</strong> {duracion}</p>
        <p><strong>Puntuación:</strong> {puntuacion}</p>
        <p><strong>Precio:</strong> {precio.toFixed(2)}€</p>
        <button onClick={() => addToCart({ titulo, precio })}>Agregar al carrito</button>
      </div>
    );
  };

export default Movie;

