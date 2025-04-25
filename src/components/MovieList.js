import React from 'react';
import Movie from './Movie';

import movie1 from '../assets/movie1.jpg';
import movie2 from '../assets/movie2.jpg';
import movie3 from '../assets/movie3.jpg';
import movie4 from '../assets/movie4.jpg';
import movie5 from '../assets/movie5.jpg';

const movies = [
    {
        titulo: 'Inception',
        sinopsis: 'Un ladr�n que roba secretos corporativos a trav�s de sue�os.',
        genero: 'Ciencia Ficci�n',
        duracion: '2h 28min',
        puntuacion: '8.8',
        imagen: movie1
    },
    {
        titulo: 'Interstellar',
        sinopsis: 'Un grupo de astronautas viaja a trav�s de un agujero de gusano.',
        genero: 'Aventura, Drama',
        duracion: '2h 49min',
        puntuacion: '8.6',
        imagen: movie2
    },
    {
        titulo: 'The Matrix',
        sinopsis: 'Un hacker descubre la verdad sobre su realidad.',
        genero: 'Acci�n, Sci-Fi',
        duracion: '2h 16min',
        puntuacion: '8.7',
        imagen: movie3
    },
    {
        titulo: 'The Godfather',
        sinopsis: 'La historia de una familia mafiosa en Am�rica.',
        genero: 'Crimen, Drama',
        duracion: '2h 55min',
        puntuacion: '9.2',
        imagen: movie4
    },
    {
        titulo: 'Pulp Fiction',
        sinopsis: 'Historias entrelazadas de crimen en Los �ngeles.',
        genero: 'Crimen, Drama',
        duracion: '2h 34min',
        puntuacion: '8.9',
        imagen: movie5
    }
];

const MovieList = () => {
    return (
        <div className="movie-list">
            {movies.map((movie, index) => (
                <Movie key={index} {...movie} />
            ))}
        </div>
    );
};

export default MovieList;
