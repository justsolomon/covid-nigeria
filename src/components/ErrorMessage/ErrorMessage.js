import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovidData } from '../../redux/covidData/covidDataActions';

function ErrorMessage() {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.covidData);

  return (
    <div className='d-flex flex-column align-items-center'>
      <p className='text-secondary text-center'>
        {error === 'Network Error'
          ? 'Looks like you lost your connection. Please check it and try again.'
          : error}
      </p>
      <button
        className='btn btn-secondary font-weight-bold'
        onClick={() => dispatch(fetchCovidData())}
      >
        <FontAwesomeIcon className='mr-2' icon={faRedo} />
        Try again
      </button>
    </div>
  );
}

export default ErrorMessage;
