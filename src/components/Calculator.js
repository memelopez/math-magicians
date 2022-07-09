// /src/components/Calculator.js

import React from 'react';
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

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(value) {
    const { total, next, operation } = this.state;
    const calcObj = {
      total,
      next,
      operation,
    };
    const newCalcObj = calculate(calcObj, value);
    this.setState({
      total: newCalcObj.total,
      next: newCalcObj.next,
      operation: newCalcObj.operation,
    });
  }

  render() {
    const { total, next } = this.state;
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
            handleClick={this.handleClick}
          />
          <Button
            value="+/-"
            handleClick={this.handleClick}
          />
          <Button
            value="%"
            handleClick={this.handleClick}
          />
          <Button
            value="÷"
            handleClick={this.handleClick}
          />
          <Button
            value="7"
            handleClick={this.handleClick}
          />
          <Button
            value="8"
            handleClick={this.handleClick}
          />
          <Button
            value="9"
            handleClick={this.handleClick}
          />
          <Button
            value="x"
            handleClick={this.handleClick}
          />
          <Button
            value="4"
            handleClick={this.handleClick}
          />
          <Button
            value="5"
            handleClick={this.handleClick}
          />
          <Button
            value="6"
            handleClick={this.handleClick}
          />
          <Button
            value="-"
            handleClick={this.handleClick}
          />
          <Button
            value="1"
            handleClick={this.handleClick}
          />
          <Button
            value="2"
            handleClick={this.handleClick}
          />
          <Button
            value="3"
            handleClick={this.handleClick}
          />
          <Button
            value="+"
            handleClick={this.handleClick}
          />
          <Button
            value="0"
            handleClick={this.handleClick}
          />
          <Button
            value="."
            handleClick={this.handleClick}
          />
          <Button
            value="="
            handleClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
