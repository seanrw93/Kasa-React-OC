import React from 'react';

const Banner = ({ imageUrl, title }) => {
    return (
      <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="banner__content">
          <h1 className="banner__title">{title}</h1>
        </div>
      </div>
    );
  };
  
export default Banner;