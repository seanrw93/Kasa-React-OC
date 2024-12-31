import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({ errorCode, errorMessage }) => {

    useEffect(() => {
        document.title = `Kasa - ${errorCode}`;
    }, [errorCode]);

    return (
        <div className='error-container'>
            <h1 className="error__status">{errorCode}</h1>
            {errorCode === 404 ? (
                <p className="error__message">Oops! It looks like this page doesn’t exist.</p>
            ) : (
                <p className="error__message">{errorMessage}</p>
            )}
            <Link to="/" className="error__link">Go back to the home page</Link>
        </div>
    );
};

export default ErrorPage;
