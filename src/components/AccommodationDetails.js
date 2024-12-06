import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function AccommodationDetails() {
    const params = useParams();

    const [accomm, setAccomm] = useState(null);
    
    useEffect(() => {
        fetch(`/api/accommodations/${params.id}`)
            .then(res => res.json())
            .then(data => setAccomm(data.accommodation));
    }, [params.id]);

    return (
        <>
            {accomm ? <h1>{accomm.title}</h1> : <p>Loading...</p>}
        </>
    );
}
