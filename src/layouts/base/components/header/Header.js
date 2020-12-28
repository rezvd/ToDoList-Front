import React from 'react';

import './style.css';
import logo from './images/logo_white.png';
import PropTypes from "prop-types";
import {connect} from "react-redux";

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='header__content'>
                    <a className='header__logo' href='/'><img src={logo} alt={"Eise Tasks"}/></a>
                    <p className='header__user'>{this.props.username}</p>
                </div>
            </header>
        );
    }
}


Header.propTypes = {
    username: PropTypes.string,
};

const mapStateToProps = (state) => ({
    username: state.usersReducer.username
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

