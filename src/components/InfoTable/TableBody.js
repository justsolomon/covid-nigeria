import React from 'react';
import TableRow from './TableRow';

function TableBody({ states }) {
  return (
    <tbody className='info-table__body custom-scrollbar'>
      {states.map((state) => {
        return <TableRow stateData={state} key={state.id} />;
      })}
    </tbody>
  );
}

export default TableBody;
