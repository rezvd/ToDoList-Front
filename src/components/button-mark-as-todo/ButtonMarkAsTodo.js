import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class ButtonMarkAsTodo extends React.Component {

  handleClickOnButton = () => alert("Mark as todo: " + this.props.id);

  render() {
    return (
        <div className="button-mark-as-todo" onClick={this.handleClickOnButton}></div>
    );
  };
};

ButtonMarkAsTodo.propTypes = {
    id: PropTypes.number
};

ButtonMarkAsTodo.defaultProps = {
    id: 1
};
