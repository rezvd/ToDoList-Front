import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class FormButton extends React.Component {
    render() {const {className, value, type, disabled} = this.props;

        return (
            <button
                className={`form-button ${className}`}
                value={value}
                type={type}
                disabled={disabled}
            >
                {value}
            </button>
        );
    };
};

FormButton.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool
};

FormButton.defaultProps = {
    className: "",
    type: "button",
    disabled: false
};
