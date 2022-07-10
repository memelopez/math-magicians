// /src/components/Button.js

import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { handleClick } = this.props;
    handleClick(e.target.textContent);
  }

  render() {
    const { value } = this.props;
    let classes4btn = 'calcBtn';
    if (value === '0') {
      classes4btn = 'calcBtn span2';
    }
    if (value === '+' || value === 'x' || value === '-' || value === '=' || value === '÷') {
      classes4btn = 'calcBtn orangeBtn';
    }
    return (
      <button className={classes4btn} type="button" onClick={this.handleClick}>
        {value}
      </button>
    );
  }
}

Button.defaultProps = {
  value: '-1',
  handleClick: () => {},
};

Button.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
