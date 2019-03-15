import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from "react-router-dom";

import './style.css';

export default class Task extends React.Component {
  render() {
    return (
        <BrowserRouter>
            <div className="task">
                <p className="task__name">{this.props.name}</p>
            </div>
        </BrowserRouter>
    );
  };
};

Task.propTypes = {
    name: PropTypes.string
};

Task.defaultProps = {
  name: ''
};
