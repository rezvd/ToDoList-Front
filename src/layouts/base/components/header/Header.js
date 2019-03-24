import React from 'react';

import './style.css';
import logo from './images/logo_white.png';

export default class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='header__content'>
                    <a className='header__logo' href='/'><img src={logo} alt={"Eise Tasks"}/></a>
                    <p className='header__user'>Johny</p>
                </div>
            </header>
        );
    };
};
