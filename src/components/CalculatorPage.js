import React from 'react';
import Calculator from './Calculator';

function CalculatorPage() {
  return (
    <div className="inside-calcP">
      <div className="right-text">
        <h2 className="actual-subt">Let&apos;s do some calculations!</h2>
      </div>
      <div className="actual-calc">
        <Calculator />
      </div>
    </div>
  );
}

export default CalculatorPage;
