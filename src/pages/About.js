import React, { useState, useEffect } from 'react';
import Banner from "../components/Banner"
import bannerImage from "../assets/images/banner-mountains.png"

export default function About() {
    useEffect(() => {
        document.title = 'Kasa - About';
    }, []);

    return (
        <>
            <Banner
                imageUrl={bannerImage}
                title={null}
            />
        </>
    );
}
