import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

function Header() {
    return (
        <header className="Header">
            <img src={logo} className="Header-logo" alt="logo" data-testid="feed-header-img"/>
            <span> Some header presentation </span>
        </header>
    );
}

export default Header;
