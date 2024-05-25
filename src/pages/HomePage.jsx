import React, { useEffect, useState } from 'react';
import NavBar from '../components/navbar/NavBar'
import Slider from '../components/slider/Slider'
import Footer from '../components/footer/Footer'
import { Button, Container, Toast } from 'react-bootstrap'
import PricingCard from '../components/pricingCard/PricingCard'
import { TypeAnimation } from 'react-type-animation';
import { useLocation } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp';



function HomePage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const isSuccess = queryParams.get('success') === 'true';
    const isReaded = queryParams.get('readed') === 'true';
    const role = localStorage.getItem('role')

    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        // Set showToast to true after a successful action (e.g., user added)
        // For demonstration purposes, I'll simulate it after 3 seconds
        const timer = setTimeout(() => {
            setShowToast(true);
        }, 500);

        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    return (
        <div >
            <NavBar />
            <Slider />
            <Container>
                <div style={{ display: 'flex', justifyContent: 'center' }} className='my-3'>
                    <TypeAnimation
                        sequence={[
                            'We Have the best parking',
                            1000,
                            'We Have the best prices',
                            1000,
                            'We Have the best location to park',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '30px', display: 'inline-block', color: '#EEF7FF' }}
                        repeat={Infinity}
                    />
                </div>
                <Container style={{ display: 'flex', justifyContent: 'center' }}>
                <PricingCard />
                </Container>
            </Container>
            <Footer />
            {isSuccess && (
                <Toast
                    show={showToast}
                    onClose={() => setShowToast(false)}
                    delay={5000} // Set the delay (in milliseconds) for auto-closing
                    autohide
                    style={{ position: 'fixed', top: 20, right: 20 }} // Position the toast
                >
                    <Toast.Header closeButton={false}>
                        <strong className="me-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>User data updated successfully!</Toast.Body>
                </Toast>
            )}

            {isReaded && (
                <Toast
                    show={showToast}
                    onClose={() => setShowToast(false)}
                    delay={5000} // Set the delay (in milliseconds) for auto-closing
                    autohide
                    style={{ position: 'fixed', top: 20, right: 20 }} // Position the toast
                >
                    <Toast.Header closeButton={false}>
                        <strong className="me-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>Ticket status updated successfully!</Toast.Body>
                </Toast>
            )}
            {role === "STUDENT" && <FloatingWhatsApp phoneNumber="0799078901" accountName="Osama Amireh" />}
        </div>
    )
}

export default HomePage
