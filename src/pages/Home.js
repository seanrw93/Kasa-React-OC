import React, { useState, useEffect } from 'react';
import Banner from "../components/Banner"
import AccommodationCard from '../components/AccommodationCard';
import bannerImage from "../assets/images/banner-trees.png"

export default function Home() {

    useEffect(() => {
        document.title = 'Kasa - Home Page';
    }, []);

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("/api/accommodations")
            .then((response) => response.json())
            .then((data) => {
                setCards(data.accommodations || []); // Ensure the correct property is accessed
            })
            .catch((error) => console.error("Error fetching data:", error)); // Log any errors
    }, []);

    const cardComponents = cards.map((item) => (
        <AccommodationCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.cover}
        />
    ));

    return (
        <>
            <Banner
                imageUrl={bannerImage}
                title={"Home anywhere and everywhere"}
            />
            <div className="card-container">
                {cardComponents}
            </div>
        </>
    );
}
