import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
import { api_key } from './key';

// TODO: themoviedb
// const url = 'https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${search_term}&page=1&include_adult=false';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      let url;
      if (searchTerm.length === 0) {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
      } else {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${searchTerm}&page=1`;
      }
      const response = await fetch(url);
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
  }, [searchTerm]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMovies();
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, fetchMovies]);

  return (
    <AppContext.Provider
      value={{
        loading,
        movies,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
