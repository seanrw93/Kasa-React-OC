import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AccommodationDetails = () => {
    const params = useParams();

    const [accomm, setAccomm] = useState(null);
    
    useEffect(() => {
        fetch(`/api/accommodations/${params.id}`)
            .then(res => res.json())
            .then(data => setAccomm(data.accommodation));
    }, [params.id]);

    return (
        <>
            {accomm ? 
                (
                <div>
                    <h1>{accomm.title}</h1>
                    <img src={accomm.cover} alt={accomm.title} />
                </div>
                ) : <p>Loading...</p>
            }
        </>
    );
}

export default AccommodationDetails;