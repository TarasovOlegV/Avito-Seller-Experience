import React from 'react';

import './spinner.css';

function Spinner() {
  return (
    <div className="spin-container">
      <div className="spiner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Spinner;
