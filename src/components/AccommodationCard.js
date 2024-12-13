import React from 'react';
import { Link } from 'react-router-dom';

const AccommodationCard = ({ id, title, imageUrl }) => {
    return (
        <Link to={`/accommodation/${id}`} id={id} className="accommodation-card" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="accommodation-card__overlay">
            <h3 className="accommodation-card__title">{title}</h3>
            </div>
        </Link>
    );
};

export default AccommodationCard;