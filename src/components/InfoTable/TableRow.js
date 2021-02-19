import React from 'react';
import { numberWithCommas } from '../InfoCard/InfoCard';

function TableRow({ stateData }) {
  const {
    casesOnAdmission,
    confirmedCases,
    death,
    discharged,
    state,
  } = stateData;

  return (
    <tr scope='row'>
      <td className='col-mid'>{state}</td>
      <td className='col-mid'>{numberWithCommas(confirmedCases)}</td>
      <td className='col-mid'>{numberWithCommas(casesOnAdmission)}</td>
      <td className='col-mid'>{numberWithCommas(discharged)}</td>
      <td className='col-mid'>{numberWithCommas(death)}</td>
    </tr>
  );
}

export default TableRow;
