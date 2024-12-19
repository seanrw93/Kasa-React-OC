import React from 'react';

const Tag = ({ tagContent }) => {

    return (
        <div className="tag">
            <div className="tag__content">
                { tagContent }
            </div>
        </div>
    );
};

export default Tag;