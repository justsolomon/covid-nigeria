import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateCurrentStats } from '../../redux/statistics/statisticsActions';

function AutoComplete({ states, removeFocus, clearInput }) {
  const autocompleteRef = useRef(null);
  const dispatch = useDispatch();
  useOutsideAlerter(autocompleteRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      //remove focus when clicking outside element
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          removeFocus();
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  function updateStats(stateData) {
    const {
      casesOnAdmission,
      confirmedCases,
      death,
      discharged,
      state,
    } = stateData;

    dispatch(
      updateCurrentStats({
        state: `${state} State`,
        confirmed: confirmedCases,
        deaths: death,
        discharged,
        active: casesOnAdmission,
      })
    );
    removeFocus();
    clearInput();
  }

  return (
    <div
      ref={autocompleteRef}
      className='search-form__autocomplete custom-scrollbar mt-1 rounded shadow-sm'
    >
      {states.map((stateData) => (
        <div
          className='search-form__autocomplete-item'
          tabIndex='0'
          onClick={() => updateStats(stateData)}
        >
          {stateData.state}
        </div>
      ))}
    </div>
  );
}

export default AutoComplete;
