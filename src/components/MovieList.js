import React from 'react';
import Movie from './Movie';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const MovieList = () => {
  const { movies, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (movies.length < 1) {
    return (
      <h2 className='section-title'>no movies match your search criteria</h2>
    );
  }

  return (
    <section className='section'>
      <h2 className='section-title'>movies</h2>
      <div className='containers-center'>
        {movies.map((item) => (
          <Movie key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
