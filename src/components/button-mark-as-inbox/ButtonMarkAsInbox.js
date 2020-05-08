import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class ButtonMarkAsInbox extends React.Component {

  render() {
    return (
        <div className={`button-mark-as-inbox ${this.props.className}`} onClick={this.props.onClick}></div>
    );
  };
};

ButtonMarkAsInbox.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
};

ButtonMarkAsInbox.defaultProps = {
    id: 1,
    className: "",
    onClick: () => {}
};
