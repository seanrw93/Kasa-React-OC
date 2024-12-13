import React from 'react';
import { ReactComponent as Logo } from '../assets/images/logo-white.svg';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <Logo alt="Kasa" className="footer__logo" />
                <p class className="footer__copy">&copy; 2024 Kasa. All rights reserved.</p>
            </div>
        </footer>
    );
}
