import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import AutoComplete from './AutoComplete';
import './SearchBar.scss';

function SearchBar() {
  const [filteredStates, setFilteredStates] = useState([]);
  const [searchFocus, setSearchFocus] = useState(false);
  const [input, setInput] = useState('');
  const { states } = useSelector((state) => state.covidData.data);

  const filterStates = (input) => {
    const filtered = states.filter((state) =>
      state.state.toLowerCase().includes(input)
    );
    setFilteredStates(filtered);
    setSearchFocus(true);
  };

  return (
    <form className='my-lg-0 search-form' autoComplete='off'>
      <div className='d-flex flex-column search-form__inner'>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <span className='input-group-text' id='basic-addon1'>
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
          <input
            className='form-control input-lg'
            type='search'
            onChange={(e) => {
              let input = e.target.value;
              setInput(input);
              filterStates(input.toLowerCase());
            }}
            value={input}
            placeholder='Search for state'
            aria-label='Search for state'
          />
        </div>
        {filteredStates.length && searchFocus ? (
          <AutoComplete
            states={filteredStates}
            removeFocus={() => setSearchFocus(false)}
            clearInput={() => setInput('')}
          />
        ) : null}
      </div>
    </form>
  );
}

export default SearchBar;
