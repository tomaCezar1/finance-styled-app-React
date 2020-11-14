import React, {Component} from 'react';
import ContentSection from '../../components/ContentSection/ContentSection';
import Pricing from "../../components/Pricing/Pricing";
import svg1 from '../../../src/images/svg-1.svg';
import svg5 from '../../../src/images/svg-5.svg';
import svg7 from '../../../src/images/svg-7.svg';
import svg8 from '../../../src/images/svg-8.svg';
import Footer from "../../components/Footer/Footer";


class Home extends Component {
    state = {
        lightBg: true,
        lightText: true
    }

    render() {
        let {lightText} = this.state;

        return (
            <div>
                <ContentSection
                    headline="24/7 ACCESS"
                    heading="Flexible financial solutions"
                    infoText="We offer the best prices over our competitors, in terms of
                    quality, assurance and clientele satisfaction."
                    imageSrc={svg1}
                    lightText={lightText}
                    buttonTitle='Learn More'
                    onTop='true'
                />
                <ContentSection
                    headline="USER-FRIENDLY"
                    heading="Customer service on point"
                    infoText="A representative will help you open an account in under half an hour.
                    We are a multilingual international company."
                    imageSrc={svg7}
                    lightBg='true'
                    reverse="true"
                    buttonTitle='Get in touch'
                />
                <ContentSection
                    headline="SECURITY GUARANTEED"
                    heading="Year-around protection"
                    infoText="Data protection is our number one priority. The client has full
                    control over his information."
                    imageSrc={svg8}
                    lightText={lightText}
                    buttonTitle='Full Access'
                />
                <Pricing/>
                <ContentSection
                    headline="DATA INSIGHTS"
                    heading="Data encryption on each transaction"
                    infoText="Nobody has direct access to your information, not even us!
                    Everything is encoded in 256-bit encryption."
                    imageSrc={svg5}
                    lightText={lightText}
                    reverse="true"
                    buttonTitle='Sign Up Today'
                />
                <Footer/>
            </div>
        );
    }
}

export default Home;