import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class ButtonMarkAsDone extends React.Component {

    handleClickOnButton = () => alert("Mark as done: " + this.props.id);

  render() {
    return (
        <div className="button-mark-as-done" onClick={this.handleClickOnButton}></div>
    );
  };
};

ButtonMarkAsDone.propTypes = {
    id: PropTypes.number
};

ButtonMarkAsDone.defaultProps = {
    id: 1
};
