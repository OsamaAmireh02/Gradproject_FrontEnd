import React from 'react'
import CreateCard from '../components/card/CreateCard'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import { Row } from 'react-bootstrap'

function BookingPage() {
    return (
        <div style={{
            'position': 'sticky',
            'top': '50px',
            'height': '100vh'}}>
            <NavBar />
            <Row className='mx-3'>
            <CreateCard />
            </Row>
            <Footer />
        </div>
    )
}

export default BookingPage
