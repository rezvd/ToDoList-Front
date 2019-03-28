import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class ButtonDelete extends React.Component {

    handleClickOnButton = () => alert("Delete: " + this.props.id);

    render() {
        return (
            <div className={`button-delete ${this.props.className}`} onClick={this.handleClickOnButton}></div>
        );
    };
};


ButtonDelete.propTypes = {
    id: PropTypes.number,
    className: PropTypes.string
};

ButtonDelete.defaultProps = {
    id: 1,
    className: ""
};
