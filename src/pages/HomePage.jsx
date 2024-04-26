import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Slider from '../components/slider/Slider'
import Footer from '../components/footer/Footer'
import { Container } from 'react-bootstrap'
import PricingCard from '../components/pricingCard/PricingCard'

function HomePage() {
    return (
        <div>
            <NavBar />
            <Slider />
            <Container>
                <h2 className="text-center my-3">Prices</h2>
                <PricingCard />
            </Container>
            <Footer />
        </div>
    )
}

export default HomePage
