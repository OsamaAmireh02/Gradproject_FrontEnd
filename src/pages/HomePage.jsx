import React, { useEffect } from 'react';
import NavBar from '../components/navbar/NavBar'
import Slider from '../components/slider/Slider'
import Footer from '../components/footer/Footer'
import { Container } from 'react-bootstrap'
import PricingCard from '../components/pricingCard/PricingCard'
import { TypeAnimation } from 'react-type-animation';



function HomePage() {
    return (
        <div >
            <NavBar />
            <Slider />
            <Container>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <TypeAnimation
                        sequence={[
                            'We Have the best Parking',
                            1000,
                            'We Have the best Prices',
                            1000,
                            'We Have the best Location to park',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block', fontFamily: 'Jersey 20 Charted'}}
                        repeat={Infinity}
                    />
                </div>
                <PricingCard />
            </Container>
            <Footer />
        </div>
    )
}

export default HomePage
