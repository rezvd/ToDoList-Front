import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class ButtonMarkAsDone extends React.Component {

  render() {
    return (
        <div className={`button-mark-as-done ${this.props.className}`} onClick={this.props.onClick}></div>
    );
  }
}

ButtonMarkAsDone.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
};

ButtonMarkAsDone.defaultProps = {
    id: 1,
    className: "",
    onClick: () => {}
};
