import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import MovieFilter from './MovieFilter';
import moviesData from '../data/movies.json';

const images = {
  "movie1.jpg": require('../assets/movie1.jpg'),
  "movie2.jpg": require('../assets/movie2.jpg'),
  "movie3.jpg": require('../assets/movie3.jpg'),
  "movie4.jpg": require('../assets/movie4.jpg'),
  "movie5.jpg": require('../assets/movie5.jpg')
};

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Cargar datos desde la API REST
    fetch('https://movies-ap-iweb.vercel.app/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error al cargar películas:', error));
  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.titulo.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <MovieFilter filter={filter} onFilterChange={setFilter} />
      <div className="movie-list">
        {filteredMovies.map((movie, index) => (
          <Movie 
            key={index}
            titulo={movie.titulo}
            sinopsis={movie.sinopsis}
            genero={movie.genero}
            duracion={movie.duracion}
            puntuacion={movie.puntuacion}
            precio={movie.precio}
            imagen={images[movie.imagen]}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
