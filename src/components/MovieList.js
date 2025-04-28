import React from 'react';
import Movie from './Movie';
import moviesData from '../data/movies.json';



const images = {
    "movie1.jpg": require('../assets/movie1.jpg'),
    "movie2.jpg": require('../assets/movie2.jpg'),
    "movie3.jpg": require('../assets/movie3.jpg'),
    "movie4.jpg": require('../assets/movie4.jpg'),
    "movie5.jpg": require('../assets/movie5.jpg')
  };

const MovieList = () => {
    return (
        
        <div className="movie-list">
        {moviesData.map((movie, index) => (
          <Movie 
            key={index}
            titulo={movie.titulo}
            sinopsis={movie.sinopsis}
            genero={movie.genero}
            duracion={movie.duracion}
            puntuacion={movie.puntuacion}
            imagen={images[movie.imagen]}
          />
        ))}
      </div>  
        
    );
};

export default MovieList;
