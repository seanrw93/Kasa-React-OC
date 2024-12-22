import React from 'react';

const Ratings = ({ rating }) => {
    const totalStars = 5;
    const filledStars = Math.round(rating);
    const emptyStars = totalStars - filledStars;

    return (
        <div className="ratings">
            {Array(filledStars).fill().map((_, i) => (
                <span key={i} className="star star--filled">★</span>
            ))}
            {Array(emptyStars).fill().map((_, i) => (
                <span key={i} className="star star--empty">★</span>
            ))}
        </div>
    );
};


export default Ratings;