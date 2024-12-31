import React, { useState, useEffect } from 'react';
import Banner from "../components/Banner"
import AccommodationCard from '../components/AccommodationCard';
import Spinner from '../components/Spinner';
import bannerImage from "../media/banner-trees.png"

const Home = () => {

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = 'Kasa - Home Page';
    }, [cards || loading]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch("/api/accommodations");
                const data = await response.json();
                setCards(data.accommodations || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCards();
    }, []);

    const cardComponents = cards.map((card) => (
        <AccommodationCard
            key={card.id}
            id={card.id}
            title={card.title}
            imageUrl={card.cover}
        />
    ));

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