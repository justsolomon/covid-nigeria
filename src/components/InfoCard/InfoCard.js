import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import './InfoCard.scss';

function InfoCard({ statTitle, amount }) {
  const { loading } = useSelector((state) => state.covidData);

  return (
    <div className='info-card rounded shadow mb-4 p-3'>
      <p className='info-card__title text-secondary mb-1'>{statTitle}</p>
      {!loading ? (
        <p className='h3 text-dark m-0'>{numberWithCommas(amount)}</p>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export function numberWithCommas(num) {
  if (num !== undefined)
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default InfoCard;
