import React, { useState, useEffect } from 'react';
import Banner from "../components/Banner"
import Accordion from "../components/Accordion";
import bannerImage from "../media/banner-mountains.png"

const About = () => {
    useEffect(() => {
        document.title = 'Kasa - About';
    }, []);

    return (
        <>
            <Banner
                imageUrl={bannerImage}
                title={null}
            />
            <div className="about-container">
                <Accordion
                    className="about-accordion"
                    title="Reliability"
                    content="The ads posted on Kasa guarantee total reliability of the place. The photos are consistent with the accommodations, and all information is regularly checked by our teams."
                />
                <Accordion
                    className="about-accordion"
                    title="Respect"
                    content="Caring is one of the founding values of Kasa. Any discriminatory behavior or disruptive behavior in the neighborhood will result in exclusion from our platform."
                />
                <Accordion
                    className="about-accordion"
                    title="Service"
                    content="Our teams are at your disposal to provide you with the best experience. Please do not hesitate to contact us if you have any questions."
                />
                <Accordion
                    className="about-accordion"
                    title="Safety"
                    content="Safety is Kasa's priority. Both for our guests and for travelers, each accommodation is compliant with the safety criteria established by our services. By leaving a note for both the host and the tenant, our teams can verify that the standards are respected. We also organize workshops on home security for our guests."
                />
            </div>
        </>
    );
}

export default About;
