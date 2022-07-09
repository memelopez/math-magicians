// /src/components/Calculator.js

import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { value } = props;
  let classes4btn = 'calcBtn';
  if (value === '0') {
    classes4btn = 'calcBtn span2';
  }
  if (value === '+' || value === 'x' || value === '-' || value === '=') {
    classes4btn = 'calcBtn orangeBtn';
  }
  return (
    <button className={classes4btn} type="button">
      {value}
    </button>
  );
}

Button.defaultProps = {
  value: '-1',
};

Button.propTypes = {
  value: PropTypes.string,
};

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
  result: PropTypes.number,
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.calculation = 0;
  }

  render() {
    return (
      <div className="calcContainer">
        <Output result={0} />
        <div className="keysGrid">
          <Button className="calcBtn" value="AC" />
          <Button className="calcBtn" value="+/-" />
          <Button className="calcBtn" value="%" />
          <Button className="calcBtn" value="+" />
          <Button className="calcBtn" value="7" />
          <Button className="calcBtn" value="8" />
          <Button className="calcBtn" value="9" />
          <Button className="calcBtn" value="x" />
          <Button className="calcBtn" value="4" />
          <Button className="calcBtn" value="5" />
          <Button className="calcBtn" value="6" />
          <Button className="calcBtn" value="-" />
          <Button className="calcBtn" value="1" />
          <Button className="calcBtn" value="2" />
          <Button className="calcBtn" value="3" />
          <Button className="calcBtn" value="+" />
          <Button className="calcBtn" value="0" />
          <Button className="calcBtn" value="." />
          <Button value="=" />
        </div>
      </div>
    );
  }
}

export default Calculator;
