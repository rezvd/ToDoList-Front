import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Checkbox extends React.Component {

    render() {
        const {className, text, disabled, checked, onChange } = this.props;
        return (
            <label className={`checkbox-label ${className}`}>
                <input
                    className={`checkbox`}
                    type="checkbox"
                    disabled={disabled}
                    checked={checked}
                    onChange={onChange}
                />
                {text}
            </label>
        );
    }
}

Checkbox.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func
};

Checkbox.defaultProps = {
    className: "",
    text: "",
    disabled: false,
    checked: false,
    onChange: () => {
    }
};
