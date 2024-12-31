import React from 'react';
import { ReactComponent as Logo } from '../media/logo-white.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <Logo alt="Kasa" className="footer__logo" />
                <p class className="footer__copy">&copy; 2024 Kasa. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
