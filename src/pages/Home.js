import React, { useState, useEffect } from 'react';
import Banner from "../components/Banner"
import AccommodationCard from '../components/AccommodationCard';
import Spinner from '../components/Spinner';
import bannerImage from "../assets/images/banner-trees.png"

const Home = () => {

    useEffect(() => {
        document.title = 'Kasa - Home Page';
    }, []);

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("/api/accommodations")
            .then((response) => response.json())
            .then((data) => {
                setCards(data.accommodations || []); 
            })
            .catch((error) => console.error("Error fetching data:", error)); 
    }, []);

    const cardComponents = cards.map((card) => (
        <AccommodationCard
            key={card.id}
            id={card.id}
            title={card.title}
            imageUrl={card.cover}
        />
    ));

    const loading = cards.length === 0;

    return (
        <>
            <Banner
                imageUrl={bannerImage}
                title={"Home anywhere and everywhere"}
            />
            <div className="card-container">
                { loading ? <Spinner /> : cardComponents }
            </div>
        </>
    );
}

export default Home;