import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../media/logo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo">
                    <Logo />
                </Link>
                <nav className="header__nav">
                    <Link to="/" className="header__nav-link">Home</Link>
                    <Link to="/about" className="header__nav-link">About</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;