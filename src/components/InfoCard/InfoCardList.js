import React from 'react';
import { useSelector } from 'react-redux';
import InfoCard from './InfoCard';

function InfoCardList() {
  const { state, deaths, discharged, active, confirmed } = useSelector(
    (state) => state.statistics
  );

  return (
    <div className='d-flex flex-column flex-sm-row flex-wrap justify-content-between mb-4'>
      <div className='w-100'>
        <p className='section-header'>{state} Statistics</p>
      </div>
      <InfoCard statTitle='CONFIRMED CASES' amount={confirmed} />
      <InfoCard statTitle='ACTIVE CASES' amount={active} />
      <InfoCard statTitle='DISCHARGED' amount={discharged} />
      <InfoCard statTitle='DECEASED' amount={deaths} />
    </div>
  );
}

export default InfoCardList;
