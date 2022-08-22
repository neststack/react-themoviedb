import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchMovie = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <section className='section search'>
      <form onSubmit={(e) => e.preventDefault()} className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite movie</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={searchMovie}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
