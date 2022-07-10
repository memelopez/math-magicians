// /src/components/Calculator.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import calculate from './logic/calculate';

function Output(props) {
  const { result } = props;
  return (
    <div className="outputContainer">
      <span className="output">
        {result}
      </span>
    </div>
  );
}

Output.defaultProps = {
  result: '-1',
};

Output.propTypes = {
  result: PropTypes.string,
};

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const handleClick = (value) => {
    const { total, next, operation } = state;
    const calcObj = {
      total,
      next,
      operation,
    };
    const newCalcObj = calculate(calcObj, value);
    setState({
      total: newCalcObj.total,
      next: newCalcObj.next,
      operation: newCalcObj.operation,
    });
  };

  const { total, next } = state;
  let disp = '';
  if (next !== null && total === null) {
    disp = next;
  } else if (total !== null && next !== null) {
    disp = next;
  } else if (next === null && total !== null) {
    disp = total;
  }

  return (
    <div className="calcContainer">
      <Output result={disp} />
      <div className="keysGrid">
        <Button
          value="AC"
          handleClick={handleClick}
        />
        <Button
          value="+/-"
          handleClick={handleClick}
        />
        <Button
          value="%"
          handleClick={handleClick}
        />
        <Button
          value="÷"
          handleClick={handleClick}
        />
        <Button
          value="7"
          handleClick={handleClick}
        />
        <Button
          value="8"
          handleClick={handleClick}
        />
        <Button
          value="9"
          handleClick={handleClick}
        />
        <Button
          value="x"
          handleClick={handleClick}
        />
        <Button
          value="4"
          handleClick={handleClick}
        />
        <Button
          value="5"
          handleClick={handleClick}
        />
        <Button
          value="6"
          handleClick={handleClick}
        />
        <Button
          value="-"
          handleClick={handleClick}
        />
        <Button
          value="1"
          handleClick={handleClick}
        />
        <Button
          value="2"
          handleClick={handleClick}
        />
        <Button
          value="3"
          handleClick={handleClick}
        />
        <Button
          value="+"
          handleClick={handleClick}
        />
        <Button
          value="0"
          handleClick={handleClick}
        />
        <Button
          value="."
          handleClick={handleClick}
        />
        <Button
          value="="
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Calculator;
