import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Task extends React.Component {
  render() {
    return (
        <div className="task">
          <p className="task__name">{this.props.name}</p>
        </div>
    );
  };
};

Task.propTypes = {
  name: PropTypes.string
};

Task.defaultProps = {
  name: ''
};
