import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class ButtonEdit extends React.Component {

    handleClickOnButton = () => alert("Edit: " + this.props.id);

    render() {
        return (
            <div className={`button-edit ${this.props.className}`} onClick={this.handleClickOnButton}></div>
        );
    };
};


ButtonEdit.propTypes = {
    id: PropTypes.number,
    className: PropTypes.string
};

ButtonEdit.defaultProps = {
    id: 1,
    className: ""
};
