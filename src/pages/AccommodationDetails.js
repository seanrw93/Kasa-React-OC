import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageReel from '../components/ImageReel';
import Tag from '../components/Tag';
import Ratings from '../components/Ratings';
import Accordion from '../components/Accordion';
import ErrorPage from './ErrorPage';
import Spinner from '../components/Spinner';

const AccommodationDetails = () => {
    const { id } = useParams();

    const [accomm, setAccomm] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [error, setError] = useState({
        status: null,
        message: null
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/accommodations/${id}`)
            .then(res => {
                if (!res.ok) {
                    const err = new Error(`HTTP error! Status: ${res.status}`);
                    throw err;
                }
                return res.json();
            })
            .then(data => {
                setAccomm(data.accommodation);
            })
            .catch(err => {
                setError({
                    status: err.status || 404,
                    message: err.message,
                });
                console.error('Error fetching data:', err);
            })
            .finally(() => {
                setLoading(false);
                console.log('Fetch attempt completed.');
            });
    }, [id]);

    useEffect(() => {
        document.title = `Kasa - ${accomm ? accomm.title : 'Accommodation'}`;
    }, [accomm]);

    const handlePrevious = () => {
        setCurrentImageIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    const handleNext = () => {
        setCurrentImageIndex(prevIndex => (prevIndex < accomm.pictures.length - 1 ? prevIndex + 1 : prevIndex));
    };

    const tags = accomm?.tags.map((tag, index) => <Tag key={index} tagContent={tag} />);

    const accordionLiElems = accomm?.amenities.map((listItem, index) => <li key={index}>{listItem}</li>);
    const accordionContent = <ul>{accordionLiElems}</ul>;

    if (loading) {
        return <Spinner />;
    }

    return (
        <>
            {error.status ? (
                <ErrorPage 
                    errorCode={error.status} 
                    errorMessage={error.message}
                />
            ) : accomm ? (
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
                        <div className="details__tags">
                            {tags}
                        </div>
                        <div className="details__ratings">
                            <Ratings rating={accomm.rating} />
                        </div>
                        <div className="details__host align-self-start">
                            <img src={accomm.host.picture} alt={accomm.host.name} />
                            <p>{accomm.host.name}</p>
                        </div>
                    </div>
                    <div className="accordions-container">
                        <Accordion 
                            title="Description" 
                            className="accordion__description"
                            content={accomm.description} 
                        />
                        <Accordion 
                            title="Amenities" 
                            className="accordion__amenities"
                            content={accordionContent} 
                        />
                    </div>
                </>
            ) : (
                loading 
            )}
        </>
    );
};

export default AccommodationDetails;