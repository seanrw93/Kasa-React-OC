import React from 'react';

const ImageReel = ({ images, handlePrevious, handleNext, showPrevious, showNext }) => {
    return (
        <div className="image-reel" style={{ backgroundImage: `url(${images})` }}>
            {showPrevious &&
                <button className="arrow-button arrow-button--previous" onClick={handlePrevious} />
            }
            {showNext &&
                <button className="arrow-button arrow-button--next" onClick={handleNext} />
            }
        </div>
    );
};

export default ImageReel;