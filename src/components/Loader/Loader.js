import React from 'react';

function Loader({ center }) {
  return (
    <div className={`d-flex ${center && 'justify-content-center mb-4'}`}>
      <div
        className='spinner-border spinner-border-md spinner-grow'
        role='status'
      >
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
