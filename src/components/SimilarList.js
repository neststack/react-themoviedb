import React, { useCallback, useEffect, useState } from 'react';
import Movie from './Movie';
import { api_key } from '../key';
import Loading from './Loading';

const SimilarList = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_key}&language=en-US&page=1`
      );
      const data = await response.json();
      const movies = data.results;
      if (movies) {
        const newMovies = movies.map((item) => {
          const { id, original_title, poster_path, overview, release_date } =
            item;
          return {
            id,
            name: original_title,
            image: poster_path,
            info: overview,
            date: release_date,
          };
        });
        setMovies(newMovies);
      } else {
        setMovies([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMovies();
    }, 500);

    return () => clearTimeout(timer);
  }, [id, fetchMovies]);

  if (loading) {
    return <Loading />;
  }

  if (!movies) {
    return;
  }

  return (
    <section className='section'>
      <h2 className='section-title'>similar movies</h2>
      <div className='containers-center'>
        {movies.map((item) => (
          <Movie key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default SimilarList;
