import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class FormField extends React.Component {
    render() {
        const {className, value, type, name, placeholder, onChange, onBlur } = this.props;

        return (
            <input
                className={`form-field ${className}`}
                value={value}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={onChange}
                onBlur={onBlur}
            />
        );
    }
}

FormField.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
};

FormField.defaultProps = {
    className: "",
    type: "text",
    name: "",
    placeholder: "Write here",
    onChange: ()=>{},
    onBlur: ()=>{}
};
