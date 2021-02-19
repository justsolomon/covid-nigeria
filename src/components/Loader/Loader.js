import React from 'react';

function Loader({ center }) {
  console.log(center);
  return (
    <div className={`d-flex ${center && 'justify-content-center mb-4'}`}>
      <div class='spinner-border spinner-border-md spinner-grow' role='status'>
        <span class='sr-only'>Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
