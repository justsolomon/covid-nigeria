import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <header className='mb-4'>
      <nav className='navbar px-0'>
        <h1 className='navbar-brand' style={{ fontSize: '21px' }}>
          Nigeria COVID-19 Tracker
        </h1>
        <SearchBar />
      </nav>
    </header>
  );
}

export default Header;
