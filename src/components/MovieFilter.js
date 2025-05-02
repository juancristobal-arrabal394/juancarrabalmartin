import React from 'react';

const MovieFilter = ({ filter, onFilterChange }) => {
  return (
    <div className="movie-filter">
      <input 
        type="text" 
        placeholder="Buscar por título..." 
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default MovieFilter;
