import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class ButtonDelete extends React.Component {

    render() {
        return (
            <div className={`button-delete ${this.props.className}`} onClick={this.props.onClick}></div>
        );
    };
};


ButtonDelete.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
};

ButtonDelete.defaultProps = {
    id: 1,
    className: "",
    onClick: ()=>{}
};
