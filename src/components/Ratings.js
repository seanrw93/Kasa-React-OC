import React from 'react';
import './Ratings.css';

const Ratings = ({ rating }) => {
    const totalStars = 5;
    const filledStars = Math.round(rating);
    const emptyStars = totalStars - filledStars;

    return (
        <div className="ratings">
            {Array(filledStars).fill().map((_, i) => (
                <span key={i} className="star filled">★</span>
            ))}
            {Array(emptyStars).fill().map((_, i) => (
                <span key={i} className="star empty">☆</span>
            ))}
        </div>
    );
};


export default Ratings;