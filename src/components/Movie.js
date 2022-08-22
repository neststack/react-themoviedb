import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Movie = ({ id, name, image, info, date }) => {
  const { setSearchTerm } = useGlobalContext();
  return (
    <Link
      to={`/movie/${id}`}
      className='container'
      onClick={() => {
        setSearchTerm('');
      }}
    >
      <div className='img-container'>
        <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={name} />
      </div>
      <div className='container-footer'>
        <h3>{name}</h3>
        <h4>{date}</h4>
        <p>{info.length > 150 ? info.slice(0, 150) + '...' : info}</p>
      </div>
    </Link>
  );
};

export default Movie;
