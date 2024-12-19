import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageReel from '../components/ImageReel';
import Tag from '../components/Tag';
// import Ratings from '../components/Ratings';
// import Accordion from '../components/Accordion';

const AccommodationDetails = () => {
    const params = useParams();

    const [accomm, setAccomm] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    
    useEffect(() => {
        fetch(`/api/accommodations/${params.id}`)
            .then(res => res.json())
            .then(data => setAccomm(data.accommodation));
    }, [params.id]);

    useEffect(() => {
        document.title = `Kasa - ${accomm ? accomm.title : 'Accommodation'}`;
    }, []);

    const handlePrevious = () => {
        setCurrentImageIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    }
    
    const handleNext = () => {
        setCurrentImageIndex(prevIndex => (prevIndex < accomm.pictures.length - 1 ? prevIndex + 1 : prevIndex));
    }

    const tags = accomm && accomm.tags.map((tag, index) => <Tag key={index} tagContent={tag} />); 


    return (
        <>
            {accomm ? 
                (
                <>
                    <ImageReel 
                        images={accomm.pictures[currentImageIndex]} 
                        handlePrevious={handlePrevious} 
                        handleNext={handleNext}
                        showPrevious={currentImageIndex > 0}
                        showNext={currentImageIndex < accomm.pictures.length - 1}
                    />
                    <div className="details">
                        <div className="details__location">
                            <h1>{accomm.title}</h1>
                            <p>{accomm.location}</p>
                        </div>
                        <div className="details__host">
                            <img src={accomm.host.picture} alt={accomm.host.name} />
                            <p>{accomm.host.name}</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        {tags}
                    </div>
                </>
                ) : <p>Loading...</p>
            }
        </>
    );
}

export default AccommodationDetails;