import React from 'react';
import ContentSection from "../ContentSection/ContentSection";
import svg4 from '../../../src/images/svg-4.svg';
import Footer from "../Footer/Footer";

function Services(props) {
    return (
        <div>
            <ContentSection
                headline="VIEW OUR PRODUCTS"
                heading="Shop through our catalog of products"
                infoText="We provide worldwide shipping to all countries. If there
                are any issues, simply issue a refund and we will process your request."
                imageSrc={svg4}
                lightBg='true'
                buttonTitle='Shop Now'
                onTop='true'
            />
            <Footer/>
        </div>
    );
}

export default Services;