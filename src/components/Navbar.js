import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { setSearchTerm } = useGlobalContext();

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link
          to='/'
          className='logoLink'
          onClick={() => {
            setSearchTerm('');
          }}
        >
          <h2 className='logo'>TheMovieDb</h2>
        </Link>
        <ul className='nav-links'>
          <li>
            <Link
              to='/'
              onClick={() => {
                setSearchTerm('');
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
