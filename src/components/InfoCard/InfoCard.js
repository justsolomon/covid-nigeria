import React from 'react';
import Loader from '../Loader/Loader';
import './InfoCard.scss';

function InfoCard({ statTitle, amount }) {
  return (
    <div className='info-card rounded shadow mb-4 p-3'>
      <p className='info-card__title text-secondary mb-1'>{statTitle}</p>
      {amount ? (
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
