import React from 'react';
import { useSelector } from 'react-redux';
import TableBody from './TableBody';
import './InfoTable.scss';
import Loader from '../Loader/Loader';

function InfoTable() {
  const { data, loading } = useSelector((state) => state.covidData);

  return (
    <div className='state-cases'>
      <p className='section-header'>Confirmed Cases by State</p>
      {!loading ? (
        <div className='info-table mb-4 table-responsive'>
          <table className='table table-bordered table-fixed table-hover h-25'>
            <thead className='info-table__head'>
              <tr>
                <th scope='col' className='col-mid'>
                  State
                </th>
                <th scope='col' className='col-mid'>
                  Confirmed Cases
                </th>
                <th scope='col' className='col-mid'>
                  Cases on Admission
                </th>
                <th scope='col' className='col-mid'>
                  Discharged
                </th>
                <th scope='col' className='col-mid'>
                  Deaths
                </th>
              </tr>
            </thead>
            <TableBody states={data.states} />
          </table>
        </div>
      ) : (
        <Loader center />
      )}
    </div>
  );
}

export default InfoTable;
